const express = require('express')
const app = express()

const { auth, users } = require('../../controllers')

app.post('/login', auth.login)

module.exports = app