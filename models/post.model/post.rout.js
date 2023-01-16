const Posts=require("./post.model")
const express=require("express")
const Authentication = require("../../middleware/Authentication ")
const Post_rout=express.Router()

Post_rout.post("/create",Authentication,async(req,res)=>{
let data=req.body
console.log(data)
if(data.title && data.body && data.device){
    try{
        let D=await Posts.find({title:data.title})
        if(D.length!=0){
            res.send(`post with title ${data.title} already exist change the title`)
        }
        else{
            await Posts.create(data)
            res.send("post created")
        }
    }
    catch(err){
        res.send(`something went wrong ${err}`)
    }
}
else{
    res.send("incomplet Info")
}
})

Post_rout.get("/",Authentication,async(req,res)=>{
    let q=req.query
    console.log(q)
    q.userid=req.body.userid
    console.log(q)
    try{
        let data=await Posts.find({...q})
        res.send(data)
    }
    catch(err){
        res.send(`something went wrong ${err}`)
    }
})

Post_rout.delete(`/delete/:id`,Authentication,async(req,res)=>{
let id=req.params.id
    try{
        await Posts.findByIdAndDelete({_id:id})
        res.send("post deleted")
    }
    catch(err){
        res.send(`something went wrong ${err}`)
    }
})


Post_rout.patch(`/update/:id`,Authentication,async(req,res)=>{
    let id=req.params.id
    let data=req.body
    delete(data.userid)
    console.log(data)
        try{
            await Posts.findByIdAndUpdate({_id:id},({...data}))
            res.send("post updated")
        }
        catch(err){
            res.send(`something went wrong ${err}`)
        }
    })









module.exports=Post_rout