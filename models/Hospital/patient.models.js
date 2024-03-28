import mongoose from "mongoose";

const patentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    illness:{
        type:String,
        enum:["Heart","Brain","Liver","kidney","regular checkup"],
        default:"regular checkup",
        required:true
    },
    hospitLAddmittedIN:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"hospital"
    },
    age:{
        type:Number,
        required:true
    },
    bloodGroup:{
        type:String,
        enum:["+a","-a","+b","+ab","-ab","+o","-o"]

    },
    gender:{
        type:String,
        enum:["male","female","say not to prefer"],
        default:"say not to prefer",
        required:true,
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true,
    }
},{timestamps:true})

export  const patient=mongoose.model("patient",patentSchema);