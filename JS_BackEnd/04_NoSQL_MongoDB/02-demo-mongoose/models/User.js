const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // not compulsory
    firstName: String,

    // compulsory
    // firstname: {
    //     type: String,
    //     required: true,
    // },
    lastName: String,
    email: String,
    imageUrl: String,
    phoneNumber: String,
    // address: {
    //     streetNumber: Number,
    //     street: String,
    //     city: String,
    //     country: String
    // }

    // compulsory
    // firstname:{
    //     type: String,
    //     required: true,
    // }
});

// METHODS
// NB! FUNCTION NOT arrow b/c of this

// opt1
// userSchema.method('getinfo', function(){
//     return `${this.firstName}-${this.lastName || 'n/a'}`;

// })

// opt2
userSchema.methods.getInfo = function () {
    return `${this.firstName}-${this.lastName || 'n/a'}`;
};

userSchema.virtual('isNew')
.get(function (){
    return this.phoneNumber>3
});
// .set...

const User = mongoose.model('User', userSchema);

exports.User = User;