const mongoose = require('mongoose')

const Schema = mongoose.Schema

const goalSchema = new Schema({
    goalType: {
        type: Number,
        required: true
    },
    goalDate: {
        type: Number,
        required: false
    }
}, {timestamps: true})

module.exports = mongoose.model('Goal', goalSchema)