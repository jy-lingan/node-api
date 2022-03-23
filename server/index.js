const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

try {
    mongoose.connect('mongodb+srv://jimdev:Pycharm22$@cluster0.adyma.mongodb.net/product-api?retryWrites=true&w=majority')
    console.log('Connected to MongoDB')
} catch (error) {
    console.log(`Error: ${error}`)
}

app.use(require('./routes'))

app.get('/', (req, res) => {
    res.send({
        success: true
    })
})


app.listen(3000, () => {
    console.log('El servidor está corriendo en el puerto 3000')
})
