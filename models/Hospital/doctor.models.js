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
    salary:{
        type:Number,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    worksInHospitals:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"hospital",
        }
    ],
    experenceInYear:{
        type:Number,
        required:true,
        default:0
    },
    speciality:{
        type:String,
        required:true
    }

},{timestamps:true})

export const doctor=mongoose.model("doctor",doctorSchema)