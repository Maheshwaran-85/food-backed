const express=require('express')
const {Router}=express
const router=Router()

const{createchild,getchild,getbyidchild,updatebyidchild,deletebyidchild}=require('../Controller.js/childcontroller')

router.post('/createchild',createchild)
router.get('/getchild',getchild)
router.get('/getbyidchild',getbyidchild)
router.post('/updatebyidchild',updatebyidchild)
router.post('/deletebyidchild',deletebyidchild)

module.exports=router