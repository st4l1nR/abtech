import mongoose, { connection, Schema, model } from "mongoose";
import { Variant } from "../types";

delete connection.models["Variant"];

const variantSchema = new Schema<Variant>({
  inventory: Number,
  price: {
    type: Number,
    required: true,
  },
  description: String,
  options: {
    type:[{
      variantGroupId:mongoose.Types.ObjectId,
      variantGroupOptionId:mongoose.Types.ObjectId
    }],
    required:true
  },
  assets: String,
  productId: {
    type: String,
    required: true,
  },
});

export default model<Variant>("Variant", variantSchema);
