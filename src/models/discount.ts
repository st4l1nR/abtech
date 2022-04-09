import mongoose, { connection, Schema, model } from "mongoose";
import { Discount } from "../types/graphql";

delete connection.models["Discount"];

const discountSchema = new Schema<Discount>({
  code: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  startsOn: {
    type: Date,
    default: new Date(),
  },
  endsOn: Date,
  isExpired: {
    type: Boolean,
    required: true,
  },
  limitQuantity: Number,
  currentQuantity: {
    type: Number,
    required: true,
  },
  products: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  ],
});


export default model<Discount>("Discount", discountSchema)