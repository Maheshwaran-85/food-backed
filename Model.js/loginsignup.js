const mongoose=require('mongoose')
const{Schema,model}=mongoose

const nodeschema=new Schema({
    userid:{type:String},
    parentsname:{type:String},
    mobileno:{type:Number},
    pwd:{type:String},
    isActive:{type:Boolean,default:true},
    status:{type:String,enum:["Active","InActive"],default:"Active"},
    createdBy:{type:String},
    updatedBy:{type:String},
    deletedBy:{type:String},
    createdAt:{type:Date,default:()=>new Date(Date.now())},
    updatedAt:{type:Date},
    deletedAt:{type:Date}

})

module.exports=model('loginsignup',nodeschema)