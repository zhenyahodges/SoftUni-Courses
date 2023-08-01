const { Schema, model, Types } = require('mongoose');

const URL_REGEX = /^(https?:\/)?\/.*/i;

const roomsSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    city: { type: String, required: true },
    beds: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true, min: 0.01 },
    imageUrl: {
        type: String,
        validate: {
            validator: (value) => URL_REGEX.test(value),
            message: (props) => {
                console.log(props);
                return `${props.value} is not a valid image URL`;
            },
        },
    },
    facilities: {
        type: [Types.ObjectId],
        default: [],
        ref: 'Facility',
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const Room = model('Room', roomsSchema);

module.exports = Room;
