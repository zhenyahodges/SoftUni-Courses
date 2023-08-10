const { Schema, model, Types } = require('mongoose');

const houseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ['Apartment', 'Villa', 'House'],
    },
    year: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    free: {
        type: Number,
        required: true,
        default: 0
    },
    rented: {
        type: [Types.ObjectId],
        ref: 'User',
        default: [],
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User',
    },
   
}, {timestamps: true});

const House = model('House', houseSchema);

module.exports = House;
