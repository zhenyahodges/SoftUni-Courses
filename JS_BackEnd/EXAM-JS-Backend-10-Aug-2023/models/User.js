const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
      
        minlength: [3, 'Firstname must be at least 3 characters long'],
    },
    lastname: {
        type: String,
        required: true,
      
        minlength: [3, 'Username must be at least 3 characters long'],
    },

    username: {
        type: String,
        required: true,
        unique: true,
        minlength: [10, 'Email must be at least 10 characters long'],
    },
    hashedPassword: { type: String, required: true },
});

userSchema.index(
    { username: 1 },
    {
        collation: {
            locale: 'en',
            strength: 2,
        },
    }
);

const User = model('User', userSchema);

module.exports = User;
