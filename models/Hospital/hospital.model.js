import mongoose from "mongoose";

const hospitalSchema=new mongoose.Schema({

    hospitalName:{
        type:String,
        required:true

    }

},{timestamps:true})

export const hospital=mongoose.model("hospital",hospitalSchema);