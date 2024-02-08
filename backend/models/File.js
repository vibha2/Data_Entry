const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    
        fileName:{
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
            required:true,
        },
        tags: {
            type: String,
        },
        email: {
            type: String
        }

    });

module.exports = mongoose.model('File', fileSchema);