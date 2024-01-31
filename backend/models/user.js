const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
        },
        accountType: {
            type: String,
            enum: ["Admin", "Member"],
            required: true,
          },
        token: {
            type: String,
        },
    },
    { timestamps: true }
    // { collection: 'user' }
);

module.exports = mongoose.model("user", userSchema);