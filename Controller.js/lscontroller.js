const loginsignup = require('../Model.js/loginsignup')
//create
exports.signup = async (req, res, next) => {
    try {
        const { userid, parentsname, mobileno, pwd, createdBy, } = req.body

        if ( !parentsname || !mobileno || !pwd || !createdBy) {
            return res.status(400).json({ message: "Enter all the details properly" })


        }

        let count = await loginsignup.countDocuments();
        count = count ? count + 1 : 1;
        const Sample_count = "P" + String(count).padStart(3, "0");

        const user = { userid: Sample_count, parentsname, mobileno, pwd, createdBy };
        
        const userexist = await loginsignup.findOne({ mobileno })
        if (userexist) {
            return res.status(400).json({ message: "The user already exist" })
        }
        const newuser = await loginsignup.create(user)
        return res.status(201).json({ message: "User created Sucessfully", data: newuser })

    }
    catch (err) {
        return res.status(500).json({ message: "An Error Occured", error: err.message });
    }

}

//get all
exports.getsignup = async (req, res, next) => {
    try {
        const doc = await loginsignup.find({status:'Active'})
        if (!doc) {
            return res.status(400).json({ message: "Document not found" })
        }
        return res.status(200).json({ message: "Document found Sucessfully", data: doc })
    } catch (err) {
        return res.status(500).json({ message: "An error Occured", error: err.message })

    }
}

//get BY ID
exports.getbyidsignup = async (req, res, next) => {
    try {
        const { id } = req.body
        const doc = await loginsignup.findById(id)
        if (!doc) {
            return res.status(400).json({ message: "Document not found" })
        }
        return res.status(200).json({ message: "Document found Sucessfully", data: doc })
    } catch (err) {
        return res.status(500).json({ message: "An error occured", error: err.message })

    }
}
//update by id
exports.updatesignup = async (req, res, next) => {
    try {
        const { id } = req.body
        const { userid, parentsname, mobileno, pwd, updateddBy, } = req.body
        const updatedfile = {}
        if (userid) updatedfile.userid = userid
        if (parentsname) updatedfile.parentsname = parentsname
        if (mobileno) updatedfile.mobileno = mobileno
        if (pwd) updatedfile.pwd = pwd
       
        
        let Updatedataobj ={};
        Updatedataobj.deletedBy = updateddBy;
        Updatedataobj. updatedAt = Date.now();

        const doc = await loginsignup.findByIdAndUpdate(id, updatedfile, Updatedataobj , { new: true })
        if (!doc) {
            return res.status(404).json({ Message: "Document not found" })
        }
        return res.status(200).json({ Message: "Document updated successfully", data: doc })


    } catch (err) {
        return res.status(500).json({ message: "An error occured", error: err.message })

    }
}
//delete bu id
exports.deletesignup = async (req, res, next) => {
    try {
        const { id,deletedBy ,deletedAt} = req.body

        let Updatedataobj ={};
        Updatedataobj.deletedBy = deletedBy;
        Updatedataobj.deletedAt = Date.now();
        Updatedataobj.status ="InActive"

        const updatedata = await loginsignup.findByIdAndUpdate(id,Updatedataobj,{new:true})

        //const doc = await loginsignup.findByIdAndDelete(id)
        // if (!doc) {
        //     return res.status(404).json({ Message: "Document not found" })
        // }
        return res.status(200).json({ Message: "Document deleted successfully"})

    } catch (err) {
        return res.status(500).json({ message: "An error occured", error: err.message })

    }
}

//login
exports.login=async(req,res,next)=>{
    try{
const {mobileno,pwd}=req.body
if(!mobileno||!pwd){
    return res.status(400).json({ message: "Please provide both Mobilenumber and password." });
}
const user=await loginsignup.findOne({mobileno})

if(!user){
    return res.status(400).json({ message: "User not found." });
}
if(user.pwd!==pwd){
    return res.status(400).json({ message: "Invalid password." });
}
return res.status(200).json({ message: "Login successful.",data:user });
    }catch(err){
        return res.status(500).json({ message: "An error occured", error: err.message })
    }
}