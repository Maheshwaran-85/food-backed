const mongoose=require('mongoose')
const{Schema,model}=mongoose

const nodeschema=new Schema({
    childid:{type:String},
    name:{type:String},
    age:{type:Number},
    gender:{type:String},
    weight:{type:String},
    bmi:{type:String},

})
module.exports=model('childmaster',nodeschema)