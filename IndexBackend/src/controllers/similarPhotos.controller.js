import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Photo } from "../models/photo.model.js";

// Get similar photos based on tags, location, and date
const getSimilarPhotos = asyncHandler(async (req, res) => {
    const { photoId } = req.params;

    // Find the clicked photo
    const photo = await Photo.findById(photoId);
    if (!photo) {
        throw new ApiError(404, "Photo not found");
    }

    // Find similar photos based on tags, location, and date
    const similarPhotos = await Photo.find({
        tags: { $in: photo.tags },
        location: photo.location,
        date: photo.date,
        _id: { $ne: photoId } // Exclude the clicked photo itself
    }).limit(10); // Limit the number of similar photos

    return res.status(200).json({
        success: true,
        data: similarPhotos,
        message: "Similar photos fetched successfully",
    });
});

export { getSimilarPhotos };
