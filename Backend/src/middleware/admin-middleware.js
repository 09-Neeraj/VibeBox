

const isAdmin = (req,res,next)=>{
     const role = req.user.role
     console.log(role)

     if(role !== "admin"){
          return res.status(403).json({
               message:"Forbbiden"
          })
     }
     next()
}
module.exports = isAdmin