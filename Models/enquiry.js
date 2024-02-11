const mongoose=require("mongoose")


//quote schema

const enquirySchema=new mongoose.Schema({
    uname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    phn:{
        type:String,
        required:true,
        trim:true
    },
    days:{
        type:Number,
        required:true
    }
   
})

const enquiries=new mongoose.model('enquiries',enquirySchema)


module.exports=enquiries
