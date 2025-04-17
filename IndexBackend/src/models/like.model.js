import mongoose, { Schema } from "mongoose";

const likeSchema = new Schema(
  {
    photo: {
      type: Schema.Types.ObjectId,
      ref: "Photo",
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Like = mongoose.model("Like", likeSchema);
