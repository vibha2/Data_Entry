const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
    {
        itemName: {
            type: String,
            required: true,
            trim: true
        },
        itemPrice: {
            type: Number,
            required: true
        },
        itemType: {
            type: String,
            enum: ['fruits', 'vegetable', 'clothes', 'electronics', 'utensils'],
            required: true
        },
        imageUrl: {
            type: String,
            required: true,
        },
        itemMode: {
            type: String,
            enum: ['Online', 'Offline'],
            required: true,
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Item', itemSchema);