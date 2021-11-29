import mongoose, { connection, Schema, model } from "mongoose";
import { Product, VariantGroup, VariantGroupOption } from "../types";

delete connection.models["Product"];

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
});

const productSchema = new Schema<Product>(
  {
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
    sales: {
      type: Number,
      default: 0,
    },
    variantGroups: [variantGroupSchema],
    shippingMethods: [
      {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "ShippingMethod",
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
  },
  { timestamps: true }
);

export default model<Product>("Product", productSchema);
