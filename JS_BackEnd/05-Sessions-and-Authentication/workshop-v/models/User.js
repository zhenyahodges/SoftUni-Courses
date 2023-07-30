const { Schema, model, Types } = require('mongoose');

const roleSchema=new Schema({
    value: {type: String, enum: ['user', 'admin']}
})

const userSchema = new Schema({
    username: {
        type: String,
        minLength: 3,
    },
    hashedPassword: {
        type: String,
        required: true,
    },
    roles: {
        type: [roleSchema],        
        default: ['user'],
    },
});

const User=model('User',userSchema);
module.exports = User
