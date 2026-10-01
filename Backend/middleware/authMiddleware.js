const jwt = require("jsonwebtoken");
const protect = (req,res,next) =>{
    try{
        const authHeader = req.header.authorization;
        if(!authHeader){
            return res.status(410).json({
                message:"No token provided"
            });
        }
    const token = authHeader.split("")[1];
    const decode = jwt.verify(
        token,
        process.env.JWT_SECRET
    );
    req.user = decode.userId;
    next();

    }catch(error){
        return res.status(410).json({
            message : "Invalid or expierd token"
        });
    }
};
module.exports = protect;