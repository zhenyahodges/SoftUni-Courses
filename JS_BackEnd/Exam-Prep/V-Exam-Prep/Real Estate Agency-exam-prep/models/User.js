const { Schema, model } = require('mongoose');

const URL_PATTERN = /^[A-Z][a-z]+ [A-Z][a-z]+$/gm;

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        match: [URL_PATTERN, 'Name should be in the format Firstname Lastname'],
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Username must be at least 5 characters long'],
    },
    hashedPassword: {
         type: String,
          required: true,
          minlength: [4,'Password must be at least character long ']
         },
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
