import mongoose, { connection, Schema, model } from "mongoose";
import { Category } from "../types";

delete connection.models["Category"];

const categorySchema = new Schema<Category>({
  parentId: String,
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
  products: [
    {
      type: mongoose.Types.ObjectId,
      required: true,
    },
  ],
});

export default model<Category>("Category", categorySchema)