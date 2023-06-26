const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

userSchema.virtual('repeatPassword').set(function(value){
    if(this.password!==value){
        throw new Error('Passwords do not match')
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
