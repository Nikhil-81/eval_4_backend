const express=require("express")
const CONNECT = require("./config/config")
require("dotenv").config()
const PORT =process.env.PORT
const cors=require("cors")
const User_rout = require("./models/user.model/user.route")
const Post_rout = require("./models/post.model/post.rout")

const app=express()
app.use(express.json())
app.use(cors())
app.use("/users",User_rout)
app.use("/posts",Post_rout)


app.get("/",(req,res)=>{
    res.send("Hello")
})

app.listen(PORT,async()=>{
    try{
        await CONNECT
        console.log(`server running at ${PORT}`)
    }
    catch(err){
        console.log(`something went wrong ${err}`)
    }
})



// {
//     "title":"react",
//     "body":"frountend",
//     "device":"pc"
//   }