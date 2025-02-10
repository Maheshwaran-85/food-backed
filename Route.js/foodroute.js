const express=require('express')
const {Router}=express
const router=Router()

const { createfood ,getallfood,getbyidfood,updatebyidfood,deletebyidfood} = require('../Controller.js/foodcontroller');

router.post('/createfood',createfood)
router.get('/getallfood',getallfood)
router.get('/getbyidfood',getbyidfood)
router.post('/updatebyidfood',updatebyidfood)
router.post('/deletebyidfood',deletebyidfood)

module.exports=router