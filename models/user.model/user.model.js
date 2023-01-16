const mongoose=require("mongoose")
const User_scheam=new mongoose.Schema({
    name :String,
    email : String,
    gender : String,
    password : String
})

const Users=mongoose.model("user",User_scheam)

module.exports=Users