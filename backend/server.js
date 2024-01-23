const express = require('express');
const app = express();
const database = require('./config/database');
const dotenv = require("dotenv");
dotenv.config();
const cors = require('cors');




// import routes
const authRoutes = require('./routes/auth');

//PORT declaration
const PORT = process.env.PORT || 4000;

//database connect
database.connect();



//middlewares
app.use(express.json());

app.use(cors());

//routes
app.use('/api/v1', authRoutes);


//default route
app.get('/', (req,res) => {
    return res.json({
        success: true,
        message: "Your Server is up and running"
    })
})

//activating the server
app.listen(PORT, ()=>{
    console.log("server started at port 4000");
});