const express=require('express')
const router=express()
router.use('/api',require('./Route.js/lsroute'))
router.use('/api',require('./Route.js/childmaster'))
router.use('/api',require('./Route.js/foodroute'))
module.exports=router