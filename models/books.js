const mongoose = require('mongoose')

let bookSchema = new mongoose.Schema({
    title: { type: String, default: 'Anonymous' },
    Description: { type: String, default: '' },
    year: { type: Number},
    quantity: { type: Number, required: true },
    imageURL:{type: String}
})

module.exports= mongoose.model('Books', bookSchema)