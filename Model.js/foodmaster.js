const mongoose=require('mongoose')
const{Schema,model}=mongoose

const nodeschema=new Schema({
    foodId:{type:String},
    foodName:{type:String},
    caloriesAmount:{type:String},
    carbsAmount:{type:String},
    fatAmount:{type:String},
    proteinAmount:{type:String}
})

module.exports=model('foodmaster',nodeschema)