import express from "express";
import { 
    uploadPhoto, 
    getPublicFeed, 
    getPhotoById, 
    downloadPhoto,
    deletePhoto
} from "../controllers/photo.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js"; // Correct import statement
import { uploadMiddleware } from "../middlewares/upload.middleware.js"; // Correct import statement

const router = express.Router();

// Route to upload a photo (requires authentication)
router.post(
    "/upload", 
    verifyJWT, 
    uploadMiddleware.single("photo"), // Handle file upload
    uploadPhoto
);

// Route to get the public photo feed
router.get("/feed", getPublicFeed);

// Route to get details of a specific photo by ID
router.get("/:photoId", getPhotoById);

// Route to download a photo (track downloads)
router.get("/:photoId/download", downloadPhoto);

// Route to delete a photo (requires authentication)
router.delete("/:photoId", verifyJWT, deletePhoto);

export default router;