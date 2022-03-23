const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ProductoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    descriptions: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0,
        required: true
    }
})

module.exports = mongoose.model('Producto', ProductoSchema)