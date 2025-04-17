import mongoose, { Schema } from "mongoose";

const followUserSchema = new Schema(
  {
    follower: {
      type: Schema.Types.ObjectId, // one who is following
      ref: "User",
    },
    followed: {
      type: Schema.Types.ObjectId, // one who is being followed
      ref: "User",
    },
  },
  { timestamps: true }
);

export const FollowUser = mongoose.model("FollowUser", followUserSchema );