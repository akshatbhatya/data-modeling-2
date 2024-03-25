import moongoose from "mongoose";

const userSchema=new moongoose.Schema({
    firstname:{
        type:String,
        lowercase:true,
        required:[true,"name is required"]
    },
    lastname:{
        type:String,
        lowercase:true,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        lowercase:true,
    },
    dob:{
        type:String,
        required:[true,"dob is required"]

    },
    password:{
        type:String,
        required:[true,"password is required"],
        min:6,
        max:12,
    }
},{timestamps:true})


export const user=moongoose.model('user',userSchema);