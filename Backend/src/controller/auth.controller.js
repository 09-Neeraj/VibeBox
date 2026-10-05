const userModel = require("../model/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res)=>{

     const {username, email ,password} = req.body;

     // basic validation
     if(!username || !email || !password){

          return res.status(400).json({
               message:"All fields are required.."
          })
     }

     try{
          // check duplicate user
          const isAllReadyExist = await userModel.findOne({
               $or:[
                    {username},
                    {email}
               ]
          })

          if(isAllReadyExist){
               return res.status(400).json({
                    message:"User all ready regitered.."
               })
          }
          
          //check valid email
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if(!emailRegex.test(email)){
               return res.status(400).json({
                    message:"Invalid email"
               })
          }

          //check password
          if(password.length < 8){
               return res.status(400).json({
                    message: "Password must be 8 Character"
               })
          }

          //password hash
          const hash =await bcrypt.hash(password ,10 );

          //create user
          const user = await userModel.create({
               username,
               email,
               password:hash,
               role:"user"
          })

          //send response
          return res.status(201).json({
               message:"User created succesfuly..",
               user:{
                    id : user._id,
                    username: user.username,
                    email:user.email,
                    role:user.role
               }
          })

     }catch(error){
          console.log("Error : ",error);
          return res.status(400).json({
               message:"User not Registerd.."
          })
     }
}

const loginUser = async(req,res)=>{
     const {email,password} = req.body

     //basic validation
     if(!email || !password){
          return res.status(401).json({
               message:"All field are required.."
          })
     }

     try{
          // find user
          const user = await userModel.findOne({email});
          if(!user){
               return res.status(401).json({
                    message:"Invalid email or password"
               })
          }

          //compare password
          const checkPassword = await bcrypt.compare(password, user.password);
          if(!checkPassword){
               return res.status(401).json({
                    message:"Invalid email or password"
               })
          }

          // genarate token
          const token = jwt.sign({
               id: user._id,
               role: user.role
          },process.env.SECRET_KEY)

          res.cookie("Token", token , {
               httpOnly: true,
               secure: true,
               sameSite: "strict"
          });

          //response send 
          return res.status(200).json({
               message:"User Login sucesfully..",
               success : true,
               user:{
                    username: user.username,
                    email:user.email
               }
          })


     }catch(error){
          console.log("Error:", error)
          return res.status(400).json({
               message:"Server error"
          })
     }


}




module.exports = {registerUser, loginUser}