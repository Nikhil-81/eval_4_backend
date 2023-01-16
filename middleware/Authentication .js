var jwt = require('jsonwebtoken');
const Users =require("../models/user.model/user.model")
const Authentication =async(req,res,next)=>{
    let token=req.headers.auth
    try{
        jwt.verify(token, 'masai',(err, decoded)=>{
            if(err){
                res.status(400).send(`something went wrong ${err}`)            }
            else{
                let u=decoded.username
                req.body.userid=u
                next()
            }
        });
    }
    catch(err){
        res.status(400).send(`something went wrong ${err}`)           
     }

    }
module.exports=Authentication
