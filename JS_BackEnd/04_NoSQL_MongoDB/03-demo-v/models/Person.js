const { Schema, model } = require('mongoose');

const personSchema = new Schema({
    name: String,
    age: {
        type: Number,
        required: true,
        min: [0, 'Age cannot be negative'],
    },
});

personSchema.methods.sayHi=function(){
    return `${this.name} says Hi!`
}

const Person = model('Person', personSchema);

module.exports = Person;
