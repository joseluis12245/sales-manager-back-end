const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        min: 2,
        required: true,
    }
})

module.exports = mongoose.model("user", User);