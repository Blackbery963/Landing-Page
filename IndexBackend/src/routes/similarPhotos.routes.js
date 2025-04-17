import express from "express";
import { getSimilarPhotos } from "../controllers/similarPhotos.controller.js";

const router = express.Router();

// Route to get similar photos
router.get("/:photoId/similar", getSimilarPhotos);

export default router;
