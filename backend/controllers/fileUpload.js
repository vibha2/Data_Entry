const File = require("../models/File");
const cloudinary = require("cloudinary").v2;

//localFileUpload -> handler function

exports.localFileUpload = async(req,res) => {
    try{
        //fetch file
        const file = req.files.file;
        console.log("File is here=> ", file);

        let path = __dirname+ "/files/" + Date.now() + "." + `${file.name.split('.')[1]}` ;
        console.log("path=> ", path);

        file.mv(path, (err) => {
            console.log("error=> ",err);
        });

        res.json({
            success:true,
            message: 'Local File Uploaded Successfully',
        })
    }
    catch(error){
        console.log("error=> ",error);
    }
}

function isFileTypeupported(type, supportedTypes){
    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder){
    const options = { folder };
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

//image handler-> store in cloudinary
exports.imageUpload = async(req,res) => {
    try{
        //data fetch
        const { fileName, tags, email } = req.body;
        console.log("check=> ",fileName, tags, email )
        const file = req.files.imageFile;
        console.log("file is here=> ", file);

        //validation
        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file?.name?.split('.')[1].toLowerCase();
        console.log("fileType=> ", fileType)

        if(!isFileTypeupported(fileType, supportedTypes)){
            return res.status(400).json({
                success: false,
                message: 'File format not supported',
            })
        }

        //file format supported
        //upload in cloudinary
        console.log("uploading...")
        const response = await uploadFileToCloudinary(file, "DataEntry");
        console.log("response=> ", response);

        //Save in DB
        const fileData = await File.create({
            fileName,
            tags,
            email,
            imageUrl: response.secure_url
        })

        res.json({
            success: true,
            message: 'Image Succesfully uploaded to cloudinary'
        })



    }
    catch(error){
        console.log("error=> ",error);
        res.status(400).json({
            success: false,
            message:'Something went wrong'
        })
    }
}