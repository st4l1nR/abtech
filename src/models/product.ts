import mongoose, { connection, Schema, model } from "mongoose";
import { Product } from "../types/graphql";

delete connection.models["Product"];

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
      avaible: Number,
    },
    conditionals: {
      isActive: {
        type: Boolean,
        required: true,
      },
      isInventoryManaged: {
        type: Boolean,
        default: false,
      },
      isSoldOut: {
        type: Boolean,
        default: false,
      },
      hasImages: {
        type: Boolean,
        default: false,
      },
    },
    image: String,
    assets: [String],
    sales: {
      type: Number,
      default: 0,
    },
    variantGroups: [
      {
        type: mongoose.Types.ObjectId,
        ref: "VariantGroup",
      },
    ],
    variants: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Variant",
      },
    ],
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
    discount: {
      type: mongoose.Types.ObjectId,
      ref: "Discount",
    },
  },
  { timestamps: true }
);

export default model<Product>("Product", productSchema);
