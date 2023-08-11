const { Schema, model, Types } = require('mongoose');
const URL_PATTERN = /^https?:\/\/.+$/i;

const postSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: [2, 'Name must be at least 2 characters long'],
    },
    species: {
        type: String,
        required: true,

        minlength: [3, 'species must be at least 3 characters long'],
    },
    imageUrl: {
        type: String,
        required: true,
        match: [URL_PATTERN,'image should start with http:// or https://']
    
    },
    skin: {
        type: String,
        required: true,
        minlength: [3, 'skinColor must be at least 3 characters long'],
    },
    eye: {
        type: String,
        required: true,
        minlength: [3, 'eyeColor must be at least 3 characters long'],
    },
    description: {
        type: String,
        required: true,
        minlength: [5, 'description must be at least 5 characters long'],
        maxlength: [500, 'description must be at most 500 characters long'],
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User',
    },
    voted: {
        type: [Types.ObjectId],
        ref: 'User',
        default: [],
    },
});

postSchema.index(
    { name: 1 },
    {
        collation: {
            locale: 'en',
            strength: 2,
        },
    }
);

const Post = model('Post', postSchema);

module.exports = Post;
