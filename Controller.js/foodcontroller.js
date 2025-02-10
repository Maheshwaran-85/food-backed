const foodmaster = require('../Model.js/foodmaster')
//create food
exports.createfood = async (req, res, next) => {
    try {

        const { foodId, foodName, caloriesAmount, carbsAmount, fatAmount, proteinAmount } = req.body
        if ( !foodName || !caloriesAmount || !carbsAmount || !fatAmount || !proteinAmount) {
            return res.status(400).json({ message: "Enter all the details properly" })
        }

        let count = await foodmaster.countDocuments();
        count = count ? count + 1 : 1;
        const Sample_count = "F" + String(count).padStart(3, "0");

        const food = { foodId: Sample_count, foodName, caloriesAmount, carbsAmount, fatAmount, proteinAmount }
        const exist = await foodmaster.findOne({ foodName })
        if (exist) {
            return res.status(400).json({ message: "The user already exist" })
        }
        const newfood = await foodmaster.create(food)
        return res.status(201).json({ message: "User created Sucessfully", data: newfood })

    } catch (err) {
        return res.status(500).json({ message: "An error occured", error: err.message })
    }
}
//get all food

exports.getallfood=async(req,res,next)=>{
    try{
     const doc = await foodmaster.find({})
            if (!doc) {
                return res.status(400).json({ message: "Document not found" })
            }
            return res.status(200).json({ message: "Document found Sucessfully", data: doc })    

    }catch(err){
        return res.status(500).json({ message: "An error Occured", error: err.message })
    }
}
//get by id

exports.getbyidfood=async(req,res,next)=>{
    try{
const {id}=req.body
        const doc=await foodmaster.findById(id)
        if(!doc){
            return res.status(400).json({message:"the document not found"})
        }
        return res.status(200).json({ message: "Document found Sucessfully", data: doc })
    }catch(err){
        return res.status(500).json({ message: "An error occured", error: err.message })
    }
}
//update by id
exports.updatebyidfood=async(req,res,next)=>{
    try{
       const {id}=req.body
       const{foodName, caloriesAmount, carbsAmount, fatAmount, proteinAmount } =req.body
       const updatedfile={}
       if(foodName)updatedfile.foodName=foodName
       if(caloriesAmount)updatedfile.caloriesAmount=caloriesAmount
       if( carbsAmount)updatedfile. carbsAmount= carbsAmount
       if(fatAmount)updatedfile.fatAmount=fatAmount
       if(proteinAmount)updatedfile.proteinAmount=proteinAmount

   
           const doc = await foodmaster.findByIdAndUpdate(id, updatedfile , { new: true })
           if (!doc) {
               return res.status(404).json({ Message: "Document not found" })
           }
           return res.status(200).json({ Message: "Document updated successfully", data: doc })
   

    }catch(err){
        return res.status(500).json({ message: "An error occured", error: err.message }) 
    }
}
//delete by id
exports.deletebyidfood=async(req,res,next)=>{
    try{
        const{id}=req.body
       const doc=await foodmaster.findByIdAndDelete(id)
       if(!doc){
        return res.status(400).json({message:"the document was not found"})
       } 
       return res.status(200).json({ Message: "Document deleted successfully"})

    }catch(err){
        return res.status(500).json({ message: "An error occured", error: err.message })

    }
}