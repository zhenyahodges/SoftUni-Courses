const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: [4, 'Username must be at least 4 characters long'],
    },
    address:{
        type: String,
        required:true,
        maxlength: [20, 'Address must be at most 20 characters long']
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
