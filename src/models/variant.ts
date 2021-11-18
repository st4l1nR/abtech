import mongoose, { connection, Schema, model } from "mongoose";
import { Variant } from "../types";

delete connection.models["Variant"];

const variantSchema = new Schema<Variant>({
  inventory: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: String,
  options: {
    type: { String: String },
    required: true,
  },
  assets: String,
  productId: {
    type: String,
    required: true,
  },
});

export default model<Variant>("Variant", variantSchema);
