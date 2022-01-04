import mongoose, { connection, Schema, model } from "mongoose";
import { Variant } from "../types";

delete connection.models["Variant"];

const variantSchema = new Schema<Variant>(
  {
    inventory: Number,
    price: {
      type: Number,
      required: true,
    },
    description: String,
    options: {
      type: [
        {
          variantGroup: {
            type: String,
            required: true,
          },
          option: {
            type: String,
            required: true,
          },
        },
      ],
      required: true,
    },
    assets: [String],
    productId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<Variant>("Variant", variantSchema);
