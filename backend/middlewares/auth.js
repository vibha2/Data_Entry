const jwt = require("jsonwebtoken");
require("dotenv").config();
// const User = require("../models/user");

//auth
exports.auth = async(req, res, next) => {
    try{
        //extract token
        const token = req.cookies.token 
                        || req.body.token   
                        || req.header("Authorisation").replace("Bearer ","");
        
        //if token is missing then return response
        if(!token){
            return res.status(401).json({
                success: false,
                message: "token is missing"
            })
        }

        //verify token
        try{
            const decode = await jwt.verify(token, process.env.JWT_SECRET);
            console.log("decode=> ", decode);
            req.user = decode;

        }catch(error){
            //verification issue
            return res.status(403).json({
                success: false,
                message: "token is invalid"
            });
        }

    }catch(error){
        return res.status(400).json({
            success: false,
            message: "Something went wrong while validating the token"
        })
    }
}

//is Admin
exports.isAdmin = async(req,res,next) => {
    try{
        if(req.user.accountType !== "Admin")
        {
            return res.status(401).json({
                success: false,
                message: "This is Protected route for admin only"
            })
        }
        next();

    }catch(error)
    {
        return res.status(500).json({
            success: false,
            message: "Admin role is not matching"
        })
    }
}

//is Member
exports.isMember = async(req,res,next) => {
    try{
        if(req.user.accountType !== "Member")
        {
            return res.status(401).json({
                success: false,
                message: "This is Protected route for member only"
            })
        }
        next();

    }catch(error)
    {
        return res.status(500).json({
            success: false,
            message: "Member role is not matching"
        })
    }
}