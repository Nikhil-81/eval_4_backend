const Users=require("./user.model")
const express=require("express")
const ragintration_middle = require("../../middleware/ragintration_middle")
const login_middle = require("../../middleware/login_middle,")
const User_rout=express.Router()
// nikhil


User_rout.post("/register",ragintration_middle,async(req,res)=>{
try{
    await Users.create({...req.body})
    res.send("user_created")
}catch(err){
res.status(400).send(`something went wrong ${err}`)
}
})



User_rout.post("/login",login_middle,async(req,res)=>{
    try{
        res.send({
            username:req.body.email,
            token:req.body.token
        })
    }
    catch(err){

    }
})

module.exports=User_rout