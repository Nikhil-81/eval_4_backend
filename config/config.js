const mongoose =require("mongoose")
require("dotenv").config()
const DB_URL=process.env.DB_URL

const CONNECT = mongoose.connect(DB_URL)

module.exports=CONNECT