import mongoose from "mongoose";
const userSchemaa= new mongoose.Schema({
    fullname:{
        type:String,
        required: true
    },fullname:{
        type:String,
        required:true
    },
    email:{
       type:String,
       required:true 
    },
    email:{
       type: String,
       required:true,
       unique:true 
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    role:{
        type: String,
        enum:['student', 'recruiter'],
        required: true
    },
    profile:{
        
    }
})