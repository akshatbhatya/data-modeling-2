import mongoose from "mongoose";

const orderSchema=new mongoose.Schema({

    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category"
    }

},{timestamps:true});


export const order=mongoose.model("order",orderSchema);