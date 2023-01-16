const bcrypt = require('bcrypt');
const Users =require("../models/user.model/user.model")
const ragintration_middle=async(req,res,next)=>{
let data=({...req.body})
console.log(req.body)
if(data.name && data.password && data.email && data.gender){
    let D= await Users.find({email:data.email})
    if(D.length!=0){
        res.send(`user with email already created ${data.email}`)
    }
    else{
        bcrypt.hash(data.password, 4, function(err, hash) {
            if(err){
                res.status(400).send(`something went wrong ${err}`)
            }
            else{
                req.body.password=hash
                next()
        }
        });
    }
}
else{
    res.status(400).send(`incomplet info`)
}
}

module.exports=ragintration_middle