const admins= require("../Models/modelcollection")
const cars=require("../Models/carscollection")
const enquiries=require("../Models/enquiry")
const luxuries = require("../Models/luxury")
const electrics=require("../Models/electric")


//logicc for admin signup
const signupAdmin=async(req,res)=>{
    const{uname,email,phone,psw,cpsw}=req.body
    if(!uname || !email || !phone || !psw || !cpsw){
        res.status(400).json("all data are required")
    }
    else{
        try{
           //if already exist
        let preAdmin=await admins.findOne({email})
        if(preAdmin){
             res.status(400).send('user already exists')
        }
        else{
            let newAdmin=new admins({
                uname:uname,
                email:email,
                phone:phone,
                psw:psw,
                cpsw:cpsw

            })
            if(psw==cpsw){
                await newAdmin.save()
                res.status(200).json(newAdmin)
            }
            else{
                res.status(400).json("passwords do not match")
            }
        }
        }
        catch{
            res.status(400).json("connection error")
        }
    }
}

//add cars
const addcars=async (req,res)=>{
   
    
    const{brand,price,rate,facility,seat,image}=req.body
    console.log({brand,price,rate,facility,seat,image});
    let car={brand,price,rate,facility,seat,image}
    await cars.create(car).then((result,error)=>{
        if(result !="null" && result != ""){
            res.send(result)
        }
        else{
            res.send("error",error)
        }
    })
     
}

//add luxury

const addLuxurycars=async (req,res)=>{
   
    
    const{brand,price,rate,facility,seat,image}=req.body
    console.log({brand,price,rate,facility,seat,image});
    let luxurycar={brand,price,rate,facility,seat,image}
    await luxuries.create(luxurycar).then((result,error)=>{
        if(result !="null" && result != ""){
            res.send(result)
        }
        else{
            res.send("error",error)
        }
    })
     
}

//add electric
const addElectriccars=async (req,res)=>{
   
    
    const{brand,price,rate,facility,seat,image}=req.body
    console.log({brand,price,rate,facility,seat,image});
    let electric={brand,price,rate,facility,seat,image}
    await electrics.create(electric).then((result,error)=>{
        if(result !="null" && result != ""){
            res.send(result)
        }
        else{
            res.send("error",error)
        }
    })
     
}



//logic form login
const adminLogin=async (req,res)=>{
    const{email,psw}=req.body
    if(!email || !psw){
        res.status(400).json("All data are required")}
        else{
           const login=await admins.findOne({email,psw})
            if(login){
                res.status(200).json({
                email:login.email,
                psw:login.psw,
               
               })
            
            }
            else{
                res.status(400).json("Invalid email or password")
            }
        }
}


//display cars
const getAllCars=async(req,res)=>{
    try {
      const data = await cars.find();
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(400).json("No data found");
      }
    } catch (error) {
      res.status(400).json("connection error", error);
    }
  }


  //luxury 

  const getAllLuxuryCars=async(req,res)=>{
    try {
      const data = await luxuries.find();
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(400).json("No data found");
      }
    } catch (error) {
      res.status(400).json("connection error", error);
    }
  }

  //electric

  const getAllElectricCars=async(req,res)=>{
    try {
      const data = await electrics.find();
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(400).json("No data found");
      }
    } catch (error) {
      res.status(400).json("connection error", error);
    }
  }


//logic for enquiry sending
  const addEnquiry=async (req,res)=>{
    const{uname,email,phn,days}=req.body
    console.log({uname,email,phn,days});
    let enquiry={uname,email,phn,days}
    await enquiries.create(enquiry).then((result,error)=>{
        if(result !="null" && result != ""){
            res.send(result)
        }
        else{
            res.send("error",error)
        }
    })
     
}

//logic for enquiry getting

const getEnquiry=async (req,res)=>{
    try {
        const data = await enquiries.find();
        if (data) {
          res.status(200).json(data);
        } else {
          res.status(400).json("No data found");
        }
      } catch (error) {
        res.status(400).json("connection error", error);
      }
}


    module.exports={signupAdmin,addcars,adminLogin,getAllCars,addEnquiry,getEnquiry,getAllLuxuryCars,getAllElectricCars,addLuxurycars,addElectriccars}