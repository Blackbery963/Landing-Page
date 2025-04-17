import asyncHandler from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { FollowUser } from '../models/follow.model.js';
import { User } from '../models/user.model.js';

const followUser = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    throw new ApiError(400, 'User ID is required');
  }

  const userToFollow = await User.findById(userId);

  if (!userToFollow) {
    throw new ApiError(404, 'User not found');
  }

  const alreadyFollowing = await FollowUser.findOne({
    follower: req.user._id,
    followed: userId,
  });

  if (alreadyFollowing) {
    throw new ApiError(400, 'You are already following this user');
  }

  const follow = await FollowUser.create({
    follower: req.user._id,
    followed: userId,
  });

  return res.status(201).json(new ApiResponse(201, follow, 'User followed successfully'));
});

const unfollowUser = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    throw new ApiError(400, 'User ID is required');
  }

  const userToUnfollow = await User.findById(userId);

  if (!userToUnfollow) {
    throw new ApiError(404, 'User not found');
  }

  const follow = await FollowUser.findOneAndDelete({
    follower: req.user._id,
    followed: userId,
  });

  if (!follow) {
    throw new ApiError(400, 'You are not following this user');
  }

  return res.status(200).json(new ApiResponse(200, {}, 'User unfollowed successfully'));
});

export { followUser, unfollowUser };
