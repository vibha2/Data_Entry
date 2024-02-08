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





//middlewares
app.use(express.json());
const fileupload = require("express-fileupload");
//using this fileupload middleware, we can upload our files in db
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

//database connect
database.connect();

//connect with cloudinary
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

app.use(cors());

//routes
app.use('/api/v1', authRoutes);

const Upload = require("./routes/fileUpload");
app.use('/api/v1/upload', Upload);


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