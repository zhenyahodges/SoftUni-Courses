const { Schema, model,Types } = require('mongoose');

const roomsSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    city: { type: String, required: true },
    beds: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true, min: 0.01 },
    imageUrl: { type: String },
    facilities: {
        type: [Types.ObjectId],
        default: [],
        ref: 'Facility'
    },
});

const Room = model('Room', roomsSchema);

module.exports = Room;
