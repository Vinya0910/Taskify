const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
 
const register = async(req ,res)=>{
    try{
        const {name,password,email} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                message:"User already exists"
            });
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const user = await User.create({
name,
email,
password:hashedPassword
        });
        res.status(201).json({
            message:"user registered",
            user :{
                id:user._id,
                name:user.name,
                email:user.email
            }
        });
    } catch(error){
        res.status(500).json({
            message:"server error"
        });
    }
};
//LOGIN
const login = async(req,res)=>{
    try{
 
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message:"Invalid email or password"
            });
        }
        const isCorrect = await bcrypt.compare(
            password,
            user.password
        );
        if(!isCorrect){
return res.status(401).json({
    message:"invalid email or password"
})
        }

        const token = jwt.sign(
            {
                userId : user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn : "1d"
            }
        );
        res.status(200).json({
            message : "Login succesfully",
            token,
            user:{
                id:user._id,
                name:user.name,
                email:user.email
            }
        });
    }catch(error){
        res.status(500).json({
            message:"server error"
        });
    }
};
module.exports = {register,login};