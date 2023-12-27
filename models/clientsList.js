const mongoose = require('mongoose');

const User = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfAdmission:{
        type: Date,
        required: true
    },
    phoneNumber:{
        type: Number,
        required: true
    },
    expired:{
        type: Boolean,
        required: true
    },
    createdBy:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("clients", User);