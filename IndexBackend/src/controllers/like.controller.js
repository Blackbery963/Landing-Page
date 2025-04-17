import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import mongoose from "mongoose";
import { Like } from "../models/like.model.js";
import { Photo } from "../models/photo.model.js";

// Helper function to validate ObjectId format
const validateObjectId = (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(400, `${id} is not a valid ObjectId`);
    }
};

// Helper function to check if the like exists and belongs to the correct user
const checkLikeOwnership = async (likeId, userId) => {
    validateObjectId(likeId); // Validate likeId
    validateObjectId(userId); // Validate userId

    const like = await Like.findById(likeId);
    if (!like) {
        throw new ApiError(404, "Like not found");
    }

    if (like.owner.toString() !== userId.toString()) {
        throw new ApiError(403, "You are not authorized to modify this like");
    }

    return like;
};

// Create a like
const createLike = asyncHandler(async (req, res) => {
    const { photoId } = req.body;

    if (!photoId) {
        throw new ApiError(400, "Photo ID is required");
    }

    validateObjectId(photoId); // Validate photoId

    const photo = await Photo.findById(photoId);
    if (!photo) {
        throw new ApiError(404, "Photo not found");
    }

    const existingLike = await Like.findOne({ photo: photoId, owner: req.user._id });
    if (existingLike) {
        throw new ApiError(400, "You have already liked this photo");
    }

    const like = await Like.create({
        photo: photoId,
        owner: req.user._id,
    });

    return res.status(201).json({
        success: true,
        data: like,
        message: "Like added successfully",
    });
});

// Delete a like
const deleteLike = asyncHandler(async (req, res) => {
    const { likeId } = req.params;

    const like = await checkLikeOwnership(likeId, req.user._id);
    await like.remove();

    return res.status(200).json({
        success: true,
        message: "Like removed successfully",
    });
});

// Edit a like (update to a new photo)
const editLike = asyncHandler(async (req, res) => {
    const { likeId } = req.params;
    const { newPhotoId } = req.body;

    if (!newPhotoId) {
        throw new ApiError(400, "New Photo ID is required");
    }

    validateObjectId(newPhotoId); // Validate newPhotoId

    const like = await checkLikeOwnership(likeId, req.user._id);

    const newPhoto = await Photo.findById(newPhotoId);
    if (!newPhoto) {
        throw new ApiError(404, "New photo not found");
    }

    like.photo = newPhotoId;
    await like.save();

    return res.status(200).json({
        success: true,
        data: like,
        message: "Like edited successfully",
    });
});

// Get likes for a photo (with pagination)
const getLikesForPhoto = asyncHandler(async (req, res) => {
    const { photoId } = req.params;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    validateObjectId(photoId); // Validate photoId

    const likes = await Like.find({ photo: photoId })
        .skip((page - 1) * limit)
        .limit(limit)
        .populate("owner", "username avatar");

    if (!likes.length) {
        throw new ApiError(404, "No likes found for this photo");
    }

    return res.status(200).json({
        success: true,
        data: likes,
        message: "Likes fetched successfully",
        page,
        limit,
    });
});

// Get liked photos by a user
const getLikedPhotosByUser = asyncHandler(async (req, res) => {
    const { userId } = req.params;

    validateObjectId(userId); // Validate userId

    const likes = await Like.find({ owner: userId }).populate("photo", "title url");

    if (!likes.length) {
        throw new ApiError(404, "No liked photos found for this user");
    }

    const likedPhotos = likes.map((like) => like.photo);

    return res.status(200).json({
        success: true,
        data: likedPhotos,
        message: "Liked photos fetched successfully",
    });
});

export { createLike, deleteLike, editLike, getLikesForPhoto, getLikedPhotosByUser };
