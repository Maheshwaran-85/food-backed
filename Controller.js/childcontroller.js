const childmaster = require('../Model.js/childmaster')
//create child master
exports.createchild = async (req, res, next) => {
    try {
        const { childid, name, age, gender, weight, bmi } = req.body
        if ( !name || !age || !gender || !weight || !bmi ) {
            return res.status(400).json({ message: "Enter all the details properly" })
        }

        let count=await childmaster.countDocuments()
        count=count?count+1:1;
        const Sample_count="C"+String(count).padStart(3,"0")
        const user = { childid:Sample_count, name, age, gender, weight, bmi }

        const existing = await childmaster.findOne({ name })
        if (existing) {
            return res.status(400).json({ message: "The user already exist" })
        }
        const newuser = await childmaster.create(user)
        return res.status(201).json({ message: "User created Sucessfully", data: newuser })
    } catch (err) {
        return res.status(500).json({ message: "An error Occured", error: err.message })

    }
}
//get all child
exports.getchild = async (req, res, next) => {
    try {
        const doc = await childmaster.find({});
        
        if (!doc) {  
            return res.status(400).json({ message: "No documents found" });
        }

        return res.status(200).json({ message: "Documents retrieved successfully", data: doc });
    } catch (err) {
        return res.status(500).json({ message: "An error occurred", error: err.message });
    }
};
//get by id
exports.getbyidchild=async(req,res,next)=>{
    try{
        const {id}=req.body
        const doc=await childmaster.findById(id)
        if(!doc){
            return res.status(400).json({message:"the document not found"})
        }
return res.status(200).json({message:"document found sucessfully",data:doc})
    }catch(err)
    {
        return res.status(500).json({ message: "An error occurred", error: err.message });  
    }
}
//update by id
exports.updatebyidchild=async(req,res,next)=>{
    try{
        const {id}=req.body
        const {  name, age, gender, weight, bmi } = req.body
        const updateddoc={}
        if(name)updateddoc.name=name
        if(age)updateddoc.age=age
        if(gender)updateddoc.gender=gender
        if(weight)updateddoc.weight=weight
        if(bmi)updateddoc.bmi=bmi
        const doc = await childmaster.findByIdAndUpdate(id, updateddoc , { new: true })
        if (!doc) {
            return res.status(404).json({ Message: "Document not found" })
        }
        return res.status(200).json({ Message: "Document updated successfully", data: doc })


        
    }catch(err){
        return res.status(500).json({ message: "An error occurred", error: err.message });     
    }
}
//delete by id

exports.deletebyidchild=async(req,res,next)=>{
    try{
        const{id}=req.body
       const doc=await childmaster.findByIdAndDelete(id)
       if(!doc){
        return res.status(400).json({message:"the document was not found"})
       } 
       return res.status(200).json({ Message: "Document deleted successfully"})

    }catch(err){
        return res.status(500).json({ message: "An error occured", error: err.message })

    }
}
