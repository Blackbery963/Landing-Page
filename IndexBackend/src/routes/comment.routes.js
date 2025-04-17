import { Router } from "express";
import {
    createComment,
    deleteComment,
    editComment,
    getCommentsForPhoto,
    getCommentsByUser
} from "../controllers/comment.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/").post(verifyJWT, createComment);

router.route("/:commentId").delete(verifyJWT, deleteComment);

router.route("/:commentId").patch(verifyJWT, editComment);

router.route("/photo/:photoId").get(getCommentsForPhoto);

router.route("/user/:userId").get(getCommentsByUser);

export default router;
