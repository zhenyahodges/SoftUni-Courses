const mongoose = require('mongoose');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { saltRounds, secret } = require('../constants');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: [true, 'email should be uqnique'],
        validate: /[a-zA-Z0-9]/,
        minLength: 5,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: 8,
        validate: /[a-zA-Z0-9]/,
    },
});

userSchema.virtual('repeatPassword').set(function (value) {
    if (this.password !== value) {
        throw new Error('Passwords do not match');
    }
});

// hashed pass in model
userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, saltRounds).then((hashedPassword) => {
        this.password = hashedPassword;
        next();
    });
});

const User = mongoose.model('User', userSchema);

module.exports = User;
