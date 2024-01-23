const User = require('../models/user');
const bcrypt = require("bcrypt");
require("dotenv").config();


exports.signUp = async(req, res) => {
    try{
        const { firstName, lastName, email, password, confirmPassword } = req.body;

        //validation
        if(!firstName || !lastName || !email || !password || !confirmPassword){
            return res.status(403).json({
                success: false,
                message: "All Fields are required",
            });
        }

        //password match
        if(password !== confirmPassword)
        {
            return res.status(400).json({
                success: false,
                message: "Password and Confirm Password value does not match, please try again",
            });
        }

        // check if user already exists or not
        const existingUser = await User.findOne({ email });
        console.log("existingUser=> ",existingUser)
        if(existingUser)
        {
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        //entry create in db
        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            accountType: "Member",
        })

        //return reponse
        return res.status(200).json({
            success: true,
            message: "User is registered successfully",
            user,
        });

    }
    catch(error){
        console.log("error=> ", error);
        return res.status(500).json({
            success:false,
            message: error.message,
        });
    }
};