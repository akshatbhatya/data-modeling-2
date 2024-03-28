import mongoose from "mongoose";

const hospitalSchema=new mongoose.Schema({

    hospitalName:{
        type:String,
        required:true
    },
    specializedIn:[
        {
            type:String,
            required:true
        }
    ],
    address1:{
        type:String,
        required:true
    },
    address2:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    }

},{timestamps:true})

export const hospital=mongoose.model("hospital",hospitalSchema);