const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send({
        success: true
    })
})

app.get('/getUsernames', (req, res) => {
    const users = [
        {
            username: 'user1',
            password: 'pass1'

        },
        {
            username: 'user2',
            password: 'pass2'
        },
        {
            username: 'user3',
            password: 'pass3'
        }
    ]
    //const username = req.query.username
    /* res.send({
        success: true,
        username: username
    }) */
    //res.send(`<h2>${username}</h2>`)
    res.json({
        users
    })
})

app.post('/login', (req, res) => {
    const { username, password } = req.body
    if (username === 'user1' && password === 'pass1') {
        res.send({
            success: true,
            message: 'Login successful',
            name : 'user1'
        })
    } else {
        res.send({
            success: false,
            message: 'Login failed'
        })
    }
})

app.listen(3000, () => {
    console.log('El servidor está corriendo en el puerto 3000')
})
