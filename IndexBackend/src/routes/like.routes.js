import { Router } from "express";
import { 
    createLike, 
    deleteLike, 
    editLike, 
    getLikesForPhoto, 
    getLikedPhotosByUser 
} from "../controllers/like.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/").post(verifyJWT, createLike);

router.route("/:likeId").delete(verifyJWT, deleteLike);

router.route("/:likeId").patch(verifyJWT, editLike);

router.route("/photo/:photoId").get(getLikesForPhoto);

router.route("/user/:userId").get(getLikedPhotosByUser);

export default router;
