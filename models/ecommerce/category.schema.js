import mongoose from "mongoose";

const categorySchema=new mongoose.Schema({
    name:{
        name:true,
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    },
    
},{timestamps:true});

export const category=mongoose.model("category",categorySchema);