import mongoose, { connection, Schema, model } from "mongoose";
import { Cart } from "../types";

delete connection.models["Cart"];

const cartItemSchema = new Schema({
  productId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  subtotal: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  variant: mongoose.Types.ObjectId,
  image: String,
});

const cartSchema = new Schema<Cart>(
  {
    totalItems: {
      type: Number,
      default: 0,
    },
    subtotal: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      default: 0,
    },
    items: [cartItemSchema],
    discounts: [
      {
        code: String,
        amount: Number,
      },
    ],
    currency: {
      code: String,
      symbol: Number,
    },
  },
  { timestamps: true }
);

export default model("Cart", cartSchema);
