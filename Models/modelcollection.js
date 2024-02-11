const mongoose=require("mongoose")


//admin schema

const adminsSchema=new mongoose.Schema({
    uname:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        trim:true,
        required:true

    },
    phone:{
        type:Number,
        required:true
    },
    
    psw:{
        type:String,
        required:true,
        trim:true
    },
    isAdmin:{
        type:Boolean,
        default:true
    }
})

const admins=new mongoose.model('admins',adminsSchema)


module.exports=admins
