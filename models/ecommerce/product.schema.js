import mongoose from "mongoose";


const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"product name is required"]
    },
    discription:{
        type:String,
        required:[true,"discription is required"]
    },
    productImage:{
        type:String,
        required:[true,"Product image is required"]
    },
    stock:{
        type:Number,
        default:0,


    },
    price:{
        type:Number,
        required:[true,"product price is required"]

    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category",
        required:true
    }
    
},{timestamps:true})

const product=mongoose.model('product',productSchema);