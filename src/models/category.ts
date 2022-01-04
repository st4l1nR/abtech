import mongoose, { connection, Schema, model } from "mongoose";
import { Category } from "../types";

delete connection.models["Category"];

const categorySchema = new Schema<Category>(
  {
    parent: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    } as any,
    name: {
      type: String,
      required: true,
    },
    description: String,
    assets: [String],
    children: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Category",
      },
    ],
  },

  { timestamps: true }
);

export default model<Category>("Category", categorySchema);
