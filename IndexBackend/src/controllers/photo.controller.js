import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Photo } from "../models/photo.model.js";
import { uploadOnCloudinary, deleteFromCloudinary } from "../utils/cloudinary.js";
import mongoose from "mongoose";

// Helper: Validate ObjectId
const validateObjectId = (id, fieldName = "ID") => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(400, `${fieldName} is not a valid ObjectId`);
    }
};

// Upload a photo (public by default)
const uploadPhoto = asyncHandler(async (req, res) => {
    const { title, description, tags = [] } = req.body;
    const photoFile = req.file?.path;

    if (!photoFile) {
        throw new ApiError(400, "Photo file is required");
    }

    const uploadedPhoto = await uploadOnCloudinary(photoFile);
    if (!uploadedPhoto?.url) {
        throw new ApiError(500, "Failed to upload photo");
    }

    const photo = await Photo.create({
        photoFile: uploadedPhoto.url,
        title: title || "Untitled",
        description,
        tags: tags.split(",").map((tag) => tag.trim()), // Convert comma-separated tags to an array
        owner: req.user._id,
    });

    res.status(201).json({
        success: true,
        data: photo,
        message: "Photo uploaded successfully",
    });
});

// Get public photo feed with search and tags (paginated)
const getPublicFeed = asyncHandler(async (req, res) => {
    const { page = 1, limit = 12, search = "", tags = "" } = req.query;

    // Build the query
    const query = { privacy: "public" };
    if (search) {
        query.title = { $regex: search, $options: "i" }; // Case-insensitive search
    }
    if (tags) {
        query.tags = { $in: tags.split(",").map((tag) => tag.trim()) };
    }

    const photos = await Photo.find(query)
        .sort({ createdAt: -1 }) // Newest first
        .skip((page - 1) * limit)
        .limit(Number(limit))
        .populate("owner", "username avatar");

    const totalPhotos = await Photo.countDocuments(query);

    res.status(200).json({
        success: true,
        data: photos,
        total: totalPhotos,
        page: Number(page),
        limit: Number(limit),
        message: "Public feed fetched successfully",
    });
});

// Get photo details by ID
const getPhotoById = asyncHandler(async (req, res) => {
    const { photoId } = req.params;
    validateObjectId(photoId, "Photo ID");

    const photo = await Photo.findById(photoId).populate("owner", "username avatar");
    if (!photo) {
        throw new ApiError(404, "Photo not found");
    }

    res.status(200).json({
        success: true,
        data: photo,
        message: "Photo details fetched successfully",
    });
});

// Download a photo (track downloads)
const downloadPhoto = asyncHandler(async (req, res) => {
    const { photoId } = req.params;
    validateObjectId(photoId, "Photo ID");

    const photo = await Photo.findById(photoId);
    if (!photo) {
        throw new ApiError(404, "Photo not found");
    }

    photo.downloads += 1; // Increment download count
    await photo.save();

    res.status(200).json({
        success: true,
        data: { downloadUrl: photo.photoFile },
        message: "Photo download link generated successfully",
    });
});

// Delete a photo
const deletePhoto = asyncHandler(async (req, res) => {
    const { photoId } = req.params;

    validateObjectId(photoId, "Photo ID");

    const photo = await Photo.findById(photoId);

    if (!photo) {
        throw new ApiError(404, "Photo not found");
    }

    if (photo.owner.toString() !== req.user._id.toString()) {
        throw new ApiError(403, "You are not authorized to delete this photo");
    }

    await deleteFromCloudinary(photo.photoFile);
    await photo.remove();

    return res.status(200).json({
        success: true,
        message: "Photo deleted successfully",
    });
});

// Get similar photos based on tags
const getSimilarPhotos = asyncHandler(async (req, res) => {
    const { photoId } = req.params;

    // Find the clicked photo
    const photo = await Photo.findById(photoId);
    if (!photo) {
        throw new ApiError(404, "Photo not found");
    }

    // Find similar photos based on tags
    const similarPhotos = await Photo.find({
        tags: { $in: photo.tags },
        _id: { $ne: photoId } // Exclude the clicked photo itself
    }).limit(10); // Limit the number of similar photos

    return res.status(200).json({
        success: true,
        data: similarPhotos,
        message: "Similar photos fetched successfully",
    });
});

export { uploadPhoto, getPublicFeed, getPhotoById, downloadPhoto, deletePhoto, getSimilarPhotos };
