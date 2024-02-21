const mongoose=require("mongoose")




const electricSchema=new mongoose.Schema({
   brand:{
        type:String,
        required:true
    },
   price:{
        type:Number,
        required:true

    },
    rate:{
        type:String,
        required:true,
        
    },
    facility:{
        type:String,
        required:true,
        
    },
    seat:{
        type:String,
        required:true,
        
    },
    image:{
        type:String,
        required:true
        
    }

})

const electrics=new mongoose.model('electrics',electricSchema)


module.exports=electrics