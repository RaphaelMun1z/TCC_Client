const mongoose = require('mongoose')

const Donate = mongoose.model('Donate', {
    type: String,
    amount: Number,
    condition: String,
    date: Date,
    local: String,
    comments: String,
    estimatedValue: Number,
})

module.exports = Donate