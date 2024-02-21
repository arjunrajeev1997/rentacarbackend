const express=require('express')
const { signupAdmin,addcars,adminLogin,getAllCars,addEnquiry,getEnquiry,getAllLuxuryCars,getAllElectricCars,addLuxurycars,addElectriccars} = require('../controllers/logic')

const cars=require("../Models/carscollection")
const admins = require("../Models/modelcollection")
const luxuries=require("../Models/luxury")
const electrics=require("../Models/electric")

const router=new express.Router()

//path for admin signup
router.post('/rentacar/adminSignup',signupAdmin)

router.post("/rentacar/addcars",addcars)

router.post("/rentacar/addluxurycars",addLuxurycars)

router.post("/rentacar/addelectriccars",addElectriccars)

router.post("/rentacar/adminLogin",adminLogin)


router.get("/rentacar/getCars",getAllCars)

router.get("/rentacar/getLuxuryCars",getAllLuxuryCars)

router.get("/rentacar/getElectricCars",getAllElectricCars)

// sent enquiry
router.post("/rentacar/addEnquiry",addEnquiry)

router.get("/rentacar/getEnquiry",getEnquiry)

module.exports=router