const express=require('express')
const HTTP_SERVER=express()
const cors=require('cors')
const PORT=process.env.PORT || 3000;
require('./dbconfig')


HTTP_SERVER.use(cors())
HTTP_SERVER.use(express.json())
HTTP_SERVER.use(express.urlencoded({extended:false}))

HTTP_SERVER.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    
})
HTTP_SERVER.use('/',require('./app'))