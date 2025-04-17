import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import mongoose from "mongoose";
import { Comment } from "../models/comment.model.js";
import { Photo } from "../models/photo.model.js";

// Helper function to validate ObjectId format
const validateObjectId = (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(400, `${id} is not a valid ObjectId`);
    }
};

// Helper function to check if the comment exists and belongs to the correct user
const checkCommentOwnership = async (commentId, userId) => {
    validateObjectId(commentId);
    validateObjectId(userId);

    const comment = await Comment.findById(commentId);
    if (!comment) {
        throw new ApiError(404, "Comment not found");
    }

    if (comment.owner.toString() !== userId.toString()) {
        throw new ApiError(403, "You are not authorized to modify this comment");
    }

    return comment;
};

// Create a comment
const createComment = asyncHandler(async (req, res) => {
    const { photoId, content } = req.body;

    if (!photoId || !content) {
        throw new ApiError(400, "Photo ID and content are required");
    }

    validateObjectId(photoId);

    const photo = await Photo.findById(photoId);
    if (!photo) {
        throw new ApiError(404, "Photo not found");
    }

    const comment = await Comment.create({
        photo: photoId,
        owner: req.user._id,
        content,
    });

    res.status(201).json({
        success: true,
        data: comment,
        message: "Comment added successfully",
    });
});

// Delete a comment
const deleteComment = asyncHandler(async (req, res) => {
    const { commentId } = req.params;

    const comment = await checkCommentOwnership(commentId, req.user._id);
    await comment.remove();

    res.status(200).json({
        success: true,
        message: "Comment removed successfully",
    });
});

// Edit a comment
const editComment = asyncHandler(async (req, res) => {
    const { commentId } = req.params;
    const { content } = req.body;

    if (!content) {
        throw new ApiError(400, "Content is required");
    }

    const comment = await checkCommentOwnership(commentId, req.user._id);
    comment.content = content;
    await comment.save();

    res.status(200).json({
        success: true,
        data: comment,
        message: "Comment edited successfully",
    });
});

// Get comments for a photo (with pagination)
const getCommentsForPhoto = asyncHandler(async (req, res) => {
    const { photoId } = req.params;
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;

    validateObjectId(photoId);

    const comments = await Comment.find({ photo: photoId })
        .skip((page - 1) * limit)
        .limit(limit)
        .populate("owner", "username avatar");

    res.status(200).json({
        success: true,
        data: comments,
        message: "Comments fetched successfully",
        page,
        limit,
    });
});

// Get comments by a user
const getCommentsByUser = asyncHandler(async (req, res) => {
    const { userId } = req.params;

    validateObjectId(userId);

    const comments = await Comment.find({ owner: userId }).populate("photo", "title url");

    res.status(200).json({
        success: true,
        data: comments,
        message: "Comments fetched successfully",
    });
});

export { createComment, deleteComment, editComment, getCommentsForPhoto, getCommentsByUser };