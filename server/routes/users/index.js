const express = require('express')
const app = express()

const { auth, users } = require('../../controllers')

app.get('/getUsernames', users.getUsernames)

module.exports = app