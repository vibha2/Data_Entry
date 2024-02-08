const express = require('express');
const router = express.Router();

const { 
signUp,
login,
getUserById 
} = require('../controllers/auth');

const { auth, isAdmin, isMember } = require("../middlewares/auth");

router.post("/signup", signUp );
router.post("/login", login);

//Route for fetching the user details
router.get("/user/:userId", getUserById);

router.get("/user", auth, isMember, (req, res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected route for Member',
    });
});
router.get("/admin", auth, isAdmin, (req,res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected route for Admin',
    });
});


module.exports = router;