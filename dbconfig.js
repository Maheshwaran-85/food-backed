const mongoose=require('mongoose')
require('dotenv').config()
mongoose
.connect(process.env.MONGOURL)
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err.message)
)
module.exports=mongoose