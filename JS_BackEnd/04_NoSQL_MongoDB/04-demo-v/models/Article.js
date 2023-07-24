const { Schema, model } = require('mongoose');

const articleSchema = new Schema({
    author: String,
    title: {
        type: String,
        minLenght: 10,
    },
    title: {
        type: String,
        minLenght: 10,
    },
});

const Article = model('Article', articleSchema);

module.exports = Article;
