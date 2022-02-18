const express = require('express')
const app = express()

app.post('/login', (req, res) => {
    const { username, password } = req.body
    if (username === 'user1' && password === 'pass1') {
        res.send({
            success: true,
            message: 'Login successful',
            name: 'user1'
        })
    } else {
        res.send({
            success: false,
            message: 'Login failed'
        })
    }
})

module.exports = app