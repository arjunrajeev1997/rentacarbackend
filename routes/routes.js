const express=require('express')
const { signupAdmin,addcars,adminLogin,getAllCars,addEnquiry,getEnquiry} = require('../controllers/logic')
const cars = require("../Models/modelcollection")
const admins = require("../Models/modelcollection")


const router=new express.Router()

//path for admin signup
router.post('/rentacar/adminSignup',signupAdmin)

router.post("/rentacar/addcars",addcars)


router.post("/rentacar/adminLogin",adminLogin)


router.get("/rentacar/getCars",getAllCars)

// sent enquiry
router.post("/rentacar/addEnquiry",addEnquiry)

router.get("/rentacar/getEnquiry",getEnquiry)

module.exports=router