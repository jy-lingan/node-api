const express = require('express')
const app = express()

//const { products } = require('../../controllers')
const products  = require('../../controllers/products')

app.get('/getProducts', products.getProducts)
app.get('/getProductById/:id', products.getProductById)
app.put('/updateProduct/:id', products.updateProduct)
app.post('/createProduct', products.createProduct)
app.delete('/deleteProduct/:id', products.deleteProduct)

module.exports = app