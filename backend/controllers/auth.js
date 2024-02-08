const User = require('../models/user');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//signup controller
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
        if (password !== confirmPassword) {
            return res.status(400).json({
              success: false,
              message:
                "Password and Confirm Password value does not match, please try again",
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
        console.log("hashedpasword=> ",hashedPassword)
        //entry create in db
        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            accountType: "Admin",
        })

        console.log("signup user=> ",user);


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


//login controller
exports.login = async(req, res) => {

   try{
     // get data from req body
     const { email, password } = req.body;

     //validation
     if(!email || !password)
     {
         return res.status(403).json({
             success: false,
             message: "Please Enter all the required field"
         });
     }
 
     // user check exits or not
     const user = await User.findOne({email});
     
    console.log("user in controller=> ",user);
    if (!user) {
        return res.status(401).json({
          success: false,
          message: "User is not registered, Please Signup first",
        });
    }

    if(await bcrypt.compare(password, user.password))
    {
        const payload = {
            email: user.email,
            id: user._id,
            accountType: user.accountType,
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "2h"
        });

        user.token = token;
        user.password = undefined;

       
        //create cookie and send response
        const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        //3 days
        httpOnly: true,
        };

        res.cookie("token", token, options).status(200).json({
            success: true,
            token,
            user,
            message: "Logged in Successfully",
          });


        // return res.status(200).json({
        //     success:true,
        //     message:"Logged In Successfully",
        //     user
        // })
    }
    else {
        return res.status(401).json({
          success: false,
          message: "Password is incorrect",
        });
    }

    
   }
   catch(error)
   {
    console.log("error while login=> ",error);
    res.status(500).send("Error occurred");
   }

};

//getUser details by id
exports.getUserById = async(req, res) => {
    try{
        //fetch the userid
        const userId = req.params.userId;
        console.log("userid ", userId)

        // check if user is in db or not
        const user = await User.findById(userId);

        if(!user)
        {
            return res.status(403).json({
                success: false,
                message: "User is not regitered by this id"
            });
        }

        return res.status(200).json({
            success: true,
            message: "User data fetched successfully",
            user
        });

    } 
    catch(error)
    {
        res.status(500).send("Error in fetching user details");
        console.log("error=> ", error)
    }
}

