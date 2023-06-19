const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
   lastName: String,
    email: String,
    imageUrl: String,
    phoneNUmber: String,
    // address: {
    //     streetNumber: Number,
    //     street: String,
    //     city: String,
    //     country: String
    // }
});

const User = mongoose.model('User', userSchema);

exports.User = User;
