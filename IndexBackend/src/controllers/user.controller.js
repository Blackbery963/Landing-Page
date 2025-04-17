import asyncHandler from '../utils/asyncHandler.js';
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";

// Helper function to generate access and refresh tokens
const generateAccessAndRefreshTokens = async (userId) => {
    try {
        const user = await User.findById(userId);
        const accessToken = jwt.sign({ _id: user._id, email: user.email, username: user.username, fullName: user.fullName }, process.env.JWT_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRY });
        const refreshToken = jwt.sign({ _id: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: process.env.REFRESH_TOKEN_EXPIRY });

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });

        return { accessToken, refreshToken };
    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating refresh and access token");
    }
};

// User signup
// const signup = asyncHandler(async (req, res) => {
//     const { fullName, email, username, password, phoneNumber, state, country, address } = req.body;

//     // Validate input fields
//     if (!fullName || !email || !username || !password || !phoneNumber || !state || !country || !address) {
//         return res.status(400).json({ error: "All fields are required" });
//     }

//     // Check if the user already exists by email or username
//     const existedUser = await User.findOne({ $or: [{ username: username.toLowerCase() }, { email: email.toLowerCase() }] });

//     if (existedUser) {
//         throw new ApiError(409, "User with email or username already exists");
//     }

//     // Create the user without avatar
//     const user = await User.create({
//         fullName,
//         email: email.toLowerCase(),
//         password,
//         username: username.toLowerCase(),
//         phoneNumber,
//         state,
//         country,
//         age
//     });

//     if (!user) {
//         throw new ApiError(500, "Failed to create user");
//     }

//     // Fetch the newly created user without sensitive fields
//     const createdUser = await User.findById(user._id).select("-password -refreshToken");

//     if (!createdUser) {
//         throw new ApiError(500, "Something went wrong while registering the user");
//     }

//     // Return the success response
//     return res.status(201).json(new ApiResponse(201, createdUser, "User registered successfully"));
// });


const signup = asyncHandler(async (req, res) => {
    const { fullName, email, username, password, phoneNumber, state, country, address, age } = req.body;
  
    // Validate input
    if ([fullName, email, username, password, phoneNumber, state, country, address, age].some((field) => !field?.trim())) {
      throw new ApiError(400, "All fields are required");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new ApiError(400, "Invalid email format");
    }
  
    // Check for existing user
    const existedUser = await User.findOne({
      $or: [{ username: username.toLowerCase() }, { email: email.toLowerCase() }],
    });
    if (existedUser) {
      throw new ApiError(409, "User with email or username already exists");
    }
  
    // Create user
    const user = await User.create({
      fullName,
      email: email.toLowerCase(),
      password,
      username: username.toLowerCase(),
      phoneNumber,
      state,
      country,
      address,
      age,
    });
  
    // Fetch created user
    const createdUser = await User.findById(user._id).select("-password -refreshToken");
    if (!createdUser) {
      throw new ApiError(500, "Something went wrong while registering the user");
    }
  
    return res.status(201).json(new ApiResponse(201, createdUser, "User registered successfully"));
  });

  
// User signin
const signin = asyncHandler(async (req, res) => {
    const { email, username, password } = req.body;

    // Validate required fields
    if (!username && !email) {
        throw new ApiError(400, "Username or email is required");
    }

    // Find user by username or email
    const user = await User.findOne({ $or: [{ username }, { email }] });

    if (!user) {
        throw new ApiError(404, "User does not exist");
    }

    // Validate password
    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid user credentials");
    }

    // Generate tokens
    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id);

    // Retrieve user data without sensitive fields
    const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

    // Set cookies options
    const cookieOptions = {
        httpOnly: true,
        secure: true, // Ensure HTTPS
        sameSite: "Strict", // Optional: prevent CSRF attacks
    };

    // Send response
    return res
        .status(200)
        .cookie("accessToken", accessToken, cookieOptions)
        .cookie("refreshToken", refreshToken, cookieOptions)
        .json(new ApiResponse(200, { user: loggedInUser, accessToken, refreshToken }, "User logged in successfully"));
});

const logoutUser = asyncHandler(async (req, res) => {
    try {
        
        if (!req.user || !req.user._id) {
            return res.status(401).json(new ApiResponse(401, {}, "Unauthorized"));
        }

        // Update user record to remove the refresh token
        await User.findByIdAndUpdate(
            req.user._id,
            {
                $set: {
                    refreshToken: undefined,
                },
            },
            { new: true }
        );

        // Clear cookies
        const options = {
            httpOnly: true,
            secure: true,
        };

        return res
            .status(200)
            .clearCookie("accessToken", options)
            .clearCookie("refreshToken", options)
            .json(new ApiResponse(200, {}, "User logged out successfully"));
    } catch (error) {
        console.error("Error during logout:", error);
        return res.status(500).json(new ApiResponse(500, {}, "Server error during logout"));
    }
});

const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken = req.cookies.
    refreshToken || req.body.refreshToken

    if (!incomingRefreshToken) {
        throw new ApiError (401, "unauthorized request")
    }

    try {
     const decodedToken = jwt.verify(
         incomingRefreshToken,
         process.env.REFRESH_TOKEN_SECRET
     )

     const user = await User.findById(decodedToken?._id)
 
     if (!user) {
         throw new ApiError(401, "Invalid refresh token")
     }
 
     if (incomingRefreshToken !== user?.refreshToken) {
         throw new ApiError(401, "refresh token is expired or used")
     }
 
     const options = {
         httpOnly : true,
         secure: true
        }

     const {accessToken, newRefreshToken} = await
     generateAccessAndRefreshTokens(user._id)

        return res
            .status(200)
     .cookie("accessToken", accessToken, options)
     .cookie("refreshToken",newRefreshToken, options)
     .json(
         new ApiResponse(
             200,
             {accessToken,refreshToken : newRefreshToken},
             "Access token refreshed"
         )
     )
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid refresh token");
    }
});

const changeCurrentPassword = asyncHandler(async(req, res) => {
    const {oldPassword, newPassword} = req.body

    const user = await User.findById(req.user?._id)
    const isPasswordCorrect = await user .
    isPasswordCorrect(oldPassword)

    if (!isPasswordCorrect) {
        throw new ApiError(400, "Invalid old password")
    }

    user.password = newPassword
    await user.save({validateBeforeSave : false})

    return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password changed successfully"))
});

const getCurrentUser = asyncHandler(async(req, res) => {
    return res
        .status(200)
        .json(new ApiResponse(200, req.user, "Current user fetched successfully"));
});

const updateAccountDetails = asyncHandler(async(req, res) => {
    const {fullName, email} =req.body

    if (!fullName || !email) {
        throw new ApiError(400, "All fields are required")
    }

    const user = User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
               fullName,
               email: email 
            }
        },
        {new: true}
    ).select("-password")

    return res
    .status(200)
    .json(new ApiResponse(200, user, "Account details updated successfully"))
});

const updateUserAvatar = asyncHandler(async(req, res) => {
    const  avatarLocalPath = req.file?.path;

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is missing");
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    
    if (!avatar.url) {
        throw new ApiError(400, "Error while uploading avatar");
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                avatar: avatar.url
            }
        },
        {new: true}
    ).select("-password");

    return res
    .status(200)
    .json(
        new ApiResponse(200, user, "Avatar updated successfully")
    );
});

const getUserChannelProfile = asyncHandler(async (req, res) => {
    const { username } = req.params;

    // Validate username
    if (!username?.trim()) {
        throw new ApiError(400, "Username is missing");
    }

    // Perform aggregation
    const user = await User.aggregate([
        {
            $match: {
                username: username.toLowerCase(), // Ensure case-insensitive matching
            },
        },
        {
            $lookup: {
                from: "follows",
                localField: "_id",
                foreignField: "followed", // Users following this user
                as: "followers",
            },
        },
        {
            $lookup: {
                from: "follows",
                localField: "_id",
                foreignField: "follower", // Users this user is following
                as: "following",
            },
        },
        {
            $addFields: {
                followersCount: { $size: "$followers" },
                followingCount: { $size: "$following" },
                isFollowing: {
                    $cond: {
                        if: { $in: [req.user?._id, "$followers.follower"] },
                        then: true,
                        else: false,
                    },
                },
            },
        },
        {
            $project: {
                fullName: 1,
                username: 1,
                followersCount: 1,
                followingCount: 1,
                isFollowing: 1,
                avatar: 1,
                bio: 1,
                email: 1,
            },
        },
    ]);

    // Check if user exists
    if (!user?.length) {
        throw new ApiError(404, "User does not exist");
    }

    // Return success response
    return res
        .status(200)
        .json(
            new ApiResponse(200, user[0], "User profile fetched successfully")
        );
});

const deleteUser = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  const user = await User.findById(userId);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  await User.findByIdAndDelete(userId); // This will trigger the pre-remove hook

  return res.status(200).json(new ApiResponse(200, {}, "User deleted successfully"));
});

export {
    signup,
    signin,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    updateAccountDetails,
    updateUserAvatar,
    getUserChannelProfile,
    deleteUser
};

