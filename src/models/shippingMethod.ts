import mongoose, { connection, Schema, model } from "mongoose";
import { ShippingMethod } from "../types";

delete connection.models["ShippingMethod"];

const shippingMethodSchema = new Schema<ShippingMethod>({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  zones: {
    type: [
      {
        country: String,
        regions: [String],
      },
    ],
    required: true,
  },
});

export default model<ShippingMethod>("ShippingMethod", shippingMethodSchema);
