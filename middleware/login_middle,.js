const bcrypt = require('bcrypt');
const Users =require("../models/user.model/user.model")
var jwt = require('jsonwebtoken');
const login_middle=async(req,res,next)=>{
let data=req.body
if(data.password && data.email){
    let D=await Users.find({email:data.email})
    if(D.length==0){
        res.send(`invalide username and password`)
    }
    else{
        let hash=D[0].password
        bcrypt.compare(req.body.password, hash,(err, result)=>{
            if(err){
                    res.status(400).send(`something went wrong ${err}`)
            }
            else if(result==true){
                
                var token = jwt.sign({username:req.body.email}, 'masai');
                req.body.token=token
                next()
            }
            else if(result==false){
                res.status(400).send("invalid password")
            }
        });
    }
}
else{
    res.status(400).send(`incomplet info`)
}
}

module.exports=login_middle