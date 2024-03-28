import mongoose from "mongoose";
const doctorSchema=new mongoose.Schema({
    doctorName:{
        type:String,
        required:true
    },
    doctorDesignation:{
        type:String,
        required:true
    },

},{timestamps:true})

export const doctor=mongoose.model("doctor",doctorSchema)