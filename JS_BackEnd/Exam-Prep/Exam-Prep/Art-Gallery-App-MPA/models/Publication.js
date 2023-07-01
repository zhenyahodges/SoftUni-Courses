const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
    title: {
        type: 'String',
        required: [true, 'Title is required'],
    },
    paintingTechnique: {
        type: 'String',
        required: [true, 'Painting technique is required'],
    },
    artPicture: {
        type: 'String',
        required: [true, 'Art image is required'],
    },
    certificate: {
        type: 'String',
        enum: ['Yes', 'No'],
        required: [true, 'Certificate is required: enter Yes or No'],
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    usersShared: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        },
    ],
});

const Publication = mongoose.model('Publication', publicationSchema);
module.exports = Publication;
