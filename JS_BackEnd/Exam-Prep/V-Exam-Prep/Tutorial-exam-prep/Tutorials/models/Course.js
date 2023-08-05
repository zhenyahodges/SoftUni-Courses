const { Schema, model, Types } = require('mongoose');

const URL_PATTERN = /httpS?:\/\/./i;

const courseSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: [4, 'Title must be at least 4 characters long'],
        unique: true,
    },
    description: {
        type: String,
        required: true,
        minlength: [20, 'Description must be at least 20 characters long'],
        maxlength: [50, 'Description must be at most 50 characters long'],
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: (value) => URL_PATTERN.test(value),
            message: 'Invalid image URL',
        },
    },
    duration: {
        type: String,
        required: [true, 'Duration is required'],
    },
    createdAt: {
        type: String,
        required: true,
        default: () => new Date().toISOString().slice(0, 10),
    },
    users: {
        type: [Types.ObjectId],
        ref: 'User',
        default: [],
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User',
    },
});

courseSchema.index(
    { title: 1 },
    {
        collation: {
            locale: 'en',
            strength: 2,
        },
    }
);

const Course = model('Course', courseSchema);
module.exports = Course;
