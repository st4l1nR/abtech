import mongoose, { connection, Schema, model } from "mongoose";
import { Merchant } from "../types/graphql";

delete connection.models["Merchant"];

const merchantSchema = new Schema<Merchant>({
  email: String,
  adress: {
    country: String,
    state: String,
    city: String,
    street: String,
    zip: String,
  },
  currency: {
    code: {
      type: String,
      default: "USD",
    },
    symbol: {
      type: String,
      default: "$",
    },
  },
});

export default model<Merchant>("Merchant", merchantSchema);
