const { Schema, model } = require('mongoose');

const personSchema = new Schema({
    name: String,
    age: Number,
});

const Person = model('Person', personSchema);

module.exports = Person;