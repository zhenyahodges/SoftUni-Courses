const { Schema, model } = require('mongoose');

const personSchema = new Schema({
    name: String,
    age: {
        type:Number,
        required: true
    },
});

const Person = model('Person', personSchema);

module.exports = Person;