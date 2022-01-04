import mongoose, { connection, model, Schema } from "mongoose";
import { Order } from "../types";

delete connection.models["Order"];

const orderSchema = new Schema<Order>({
  status: {
    type: String,
    enum: ["fullfilled", "notfullfilled"],
    default: "notfullfilled",
  },
  customer: {
    email: {
      type: String,
      required: true,
    },
  },
  shipping: {
    name: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
    },
  },
  cart: {
    type: mongoose.Types.ObjectId as any,
    ref: "Cart",
  },
}, {timestamps:true});

export default model("Order", orderSchema);
