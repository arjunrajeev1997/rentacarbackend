
const express=require("express")
require('dotenv').config()


const cors=require("cors")
const router=require('./routes/routes')
const server=express();


server.use(cors())
server.use(express.json());
server.use(router)


// const{OAuth2Client}=require('google-auth-library')

require('./connection/dbconnection')
const port=3008 || process.env.port
server.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})