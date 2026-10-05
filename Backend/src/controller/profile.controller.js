const userModel = require("../model/user.model")

const getProfile =async (req, res)=>{
     try{
     const id = req.user.id 
     if(!id){
          return res.status(400).json({
               message:"Profile Not Found !"
          })
     }
     const profile = await userModel.findById(id).select("-password");
     
     res.status(200).json({
          message:"Profile fetch Succesfully..",
          profile
     })
     }catch(error){
          return res.status(500).json({
               message:"Server Error..."
          })
     }

}

module.exports = getProfile