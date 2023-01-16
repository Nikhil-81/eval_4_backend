const mongoose=require("mongoose")
const Post_scheam=new mongoose.Schema({
    title :String,
    body : String,
    device : String,
    userid:String
 
})

const Posts=mongoose.model("post",Post_scheam)

module.exports=Posts