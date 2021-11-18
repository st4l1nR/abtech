import mongoose, { connection, Schema, model } from "mongoose";
import { VariantGroup, VariantGroupOption } from "../types";

delete connection.models["VariantGroup"];

const variantGroupSchema = new Schema<VariantGroup>({
  name: {
    type: String,
    required: true,
  },
  options: {
    type: [
      new Schema<VariantGroupOption>({
        name: String,
        price: Number,
      }),
    ],
    required: true,
  },
  assets: String,
  productId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
});

export default model<VariantGroup>("VariantGroup", variantGroupSchema);
