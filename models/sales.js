const mongoose = require('mongoose');

const Sales = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },  
    quantity: {
        type: Number,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    sold:{
        type: Number,
        required: true
    },
    createdDate:{
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model("sales", Sales);