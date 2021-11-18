import mongoose, { connection, Schema, model } from "mongoose";
import { ShippingMethod } from "../types";

delete connection.models["ShippingMethod"];

const shippingMethodSchema = new Schema<ShippingMethod>({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    countries:[{
        type:String,
        required:true
    }],
    regions:{
        type:{String:String},
        required:true
    }
})

export default model<ShippingMethod>("ShippingMethod", shippingMethodSchema)
