const express = require('express');
const router = express.Router();

const { 
signUp,
login,
getUserById 
} = require('../controllers/auth');

router.post("/signup", signUp );
router.post("/login", login);

//Route for fetching the user details
router.get("/user/:userId", getUserById);

module.exports = router;