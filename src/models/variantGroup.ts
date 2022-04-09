import mongoose, { connection, Schema, model } from "mongoose";
import { VariantGroup } from "../types/graphql";

delete connection.models["VariantGroup"];

const variantGroupSchema = new Schema<VariantGroup>(
  {
    name: {
      type: String,
      required: true,
    },
    options: {
      type: [String],
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

export default model("VariantGroup", variantGroupSchema);
