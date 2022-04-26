const mongoose = require('mongoose')

const Schema = mongoose.Schema

const validateRoles = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol válido'
}

const User = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: validateRoles
    },
})

module.exports = mongoose.model('User', User)