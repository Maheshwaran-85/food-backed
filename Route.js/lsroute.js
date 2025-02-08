const express=require('express')
const{Router}=express
const router=Router()

const{signup,getsignup,getbyidsignup,updatesignup,deletesignup,login}=require('../Controller.js/lscontroller')

router.post('/signup',signup)
router.get('/getsignup',getsignup)
router.get('/getbyidsignup',getbyidsignup)
router.post('/updatesignup',updatesignup)
router.post('/deletesignup',deletesignup)
router.get('/login',login)

module.exports=router