const { Schema, model, Types } = require('mongoose');

const URL_PATTERN=/^https?:\/\/.+$/i;

const publicationSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: [6, 'Title must be at least 6 characters long'],
    },
    technique: {
        type: String,
        required: true,
        maxlength: [15, 'Title must be at most 15 characters long'],
    },
    artPicture:{
        type:String,
        required: true,
        validate: {
            validator: (value)=>{URL_PATTERN.test(value)},
            message: 'ImageUrl not valid'
        }
    },
    certificate: {
        enum: ['YES', 'NO'],
        required: true,
    },
    author: {
        type: Types.ObjectId,
        ref: 'User',
    },
    shared: {
        type: [Types.ObjectId],
        ref: 'User',
        default: [],
    },
});

publicationSchema.index(
    { title: 1 },
    {
        collation: {
            locale: 'en',
            strength: 2,
        },
    }
);

const Publication = model('Publication', publicationSchema);

module.exports = Publication;
