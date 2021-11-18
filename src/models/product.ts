import mongoose, { connection, Schema, model } from "mongoose";
import { Product } from "../types";

delete connection.models["Product"];

const productSchema = new Schema<Product>({
  name: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  inventory: {
    managed: {
      type: Boolean,
      required: true,
    },
    avaible: {
      type: Number,
      default: false,
    },
  },
  conditionals: {
    isActive: {
      type: Boolean,
      required: true,
    },
    isInventoryManaged: {
      type: Boolean,
      required: true,
    },
    isSoldOut: {
      type: Boolean,
      default: false,
    },
    hasImages: {
      type: Boolean,
      required: true,
    },
  },
  image: String,
  assets: [String],
  variantGroups: [
    {
      type: mongoose.Types.ObjectId,
      ref: "VariantGroup",
    },
  ],
  shippingMethods: [
    {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Variant",
    },
  ],
  categories: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
  ],
  relatedProducts: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
  ],
});

export default model<Product>("Product", productSchema);
