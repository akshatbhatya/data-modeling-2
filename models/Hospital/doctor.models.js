import mongoose from "mongoose";

const workingHours=new mongoose.Schema({
    nameOfHospital:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"hospital"
    },
    workingTime:{
        type:Number,
        required:true

    }
    
},{timestamps:true})
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
    },
    workingTime:[
        {workingHours}
    ]
    
},{timestamps:true})

export const doctor=mongoose.model("doctor",doctorSchema)