const Item = require("../models/item");
const cloudinary = require("cloudinary").v2;


function isFileTypeupported(type, supportedTypes){
    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder){
    const options = { folder };
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

exports.itemDataUpload = async(req,res) => {
    try{
        const { itemName, itemPrice, itemType, itemMode } = req.body;
        console.log("check=> ",itemName, itemPrice, itemType, itemMode )
       
        console.log("req file=> ",req);
        // const file = req.body.imageFile;
        const file = req.files?.imageFile;
        console.log("file is here=> ", file);

        //validation
        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split('.')[1];
        // const fileType = file.split('.')[1];
        console.log("filetype=> ", fileType);

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

        const fileData = await Item.create({
            itemName,
            itemPrice,
            itemType,
            imageFile: response.secure_url,
            itemMode,
            
        })

        
        return res.status(200).json({
            success: true,
            message: "Item Submitted Successfully",     
        })



    }
    catch(error){
        console.log("error=> ",error);
        return res.status(400).json({
            success: false,
            message: "Unable to submit the form"
        })

    }
}

exports.getAllItem = async(req, res) => {
    try{
        const itemData = await Item.find({});
        console.log("itemData=> ", itemData);

        return res.status(200).json({
            success: true,
            message: "Item Data fetched successfully",
            itemData
        })

    }
    catch(error){
        console.log("error=> ",error);
        return res.status(400).json({
            success: false,
            message: "Unable to fetch the form"
        })

    }
}