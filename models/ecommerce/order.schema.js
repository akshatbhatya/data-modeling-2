import mongoose from "mongoose";

const orderItemSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        required:true

    },
    quantity:{
        type:Number,
        default:1,
        required:true,
    }
})
const orderSchema=new mongoose.Schema({

   
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category"
    },
    orderItems:{
        order:[orderItemSchema]

    },
    address:{
        type:String,
        required:true,

    },
    status:{
        type:String,
        enum:["Pending","Delivered","Canceled"],
        default:"Pending"

    }

},{timestamps:true});


export const order=mongoose.model("order",orderSchema);