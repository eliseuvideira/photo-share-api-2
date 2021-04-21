import { Schema, Types } from "mongoose";
import { createModel } from "../functions/createModel";
import { createSchema } from "../functions/createSchema";

interface PhotoProps {
  name: string;
  category: "SELFIE" | "PORTRAIT" | "ACTION" | "LANDSCAPE" | "GRAPHIC";
  user: Types.ObjectId;
}

export const Photo = createModel<PhotoProps>(
  "Photo",
  createSchema(
    {
      name: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
        enum: ["SELFIE", "PORTRAIT", "ACTION", "LANDSCAPE", "GRAPHIC"],
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true,
      },
    },
    { timestamps: true }
  ),
  "photos"
);
