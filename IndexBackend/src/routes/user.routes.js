import { Router } from "express";
import { 
  signup,
  signin,
  logoutUser, 
  refreshAccessToken, 
  changeCurrentPassword, 
  getCurrentUser, 
  updateAccountDetails, 
  updateUserAvatar, 
  getUserChannelProfile,
  deleteUser // Import deleteUser controller
} from "../controllers/user.controller.js"; 
import { upload } from "../middlewares/multer.middleware.js"; 
import { verifyJWT } from "../middlewares/auth.middleware.js"; 

const router = Router();

// Route for user registration
router.route("/signup").post(upload.none(), signup);

// Route for user sign-in
router.route("/signin").post(signin);

// Secured route for user logout
router.route("/logout").post(verifyJWT, logoutUser);

// Route for refreshing access token
router.route("/refresh-token").post(refreshAccessToken);

router.route("/change-password").post(verifyJWT,changeCurrentPassword);

router.route("/current-user").get(verifyJWT,getCurrentUser);

router.route("/update-account").patch(verifyJWT,updateAccountDetails);

router.route("/avatar").patch(verifyJWT,upload.single("avatar"), updateUserAvatar);

router.route("/c/:username").get(verifyJWT, getUserChannelProfile);

// Route for deleting a user
router.route("/:userId").delete(verifyJWT, deleteUser);

export default router;