const jwt = require("jsonwebtoken");

const authMiddleware = async(req,res,next)=>{
     const token = req.cookies.Token
     try{
     if(!token){
          return res.status(401).json({
               message:"Authentication require"
          })
     }

     const decoded = jwt.verify(token, process.env.SECRET_KEY);
     req.user = decoded

     }catch(error){
          console.log("Error :", error)
          return res.status(401).json({
               message:"Invalid or Expired token"
          })
     }
     next();
}

module.exports = authMiddleware