const Article = require('../models/Article');

async function getAllArticles() {
    //NB! always lean things loaded from DB b/f sending to template
    const data = await Article.find({}).lean();
    return data;
}

async function createArticle(author, title, content) {
    await Article.create({
        author,
        title,
        content,
    });
}

module.exports = { getAllArticles, createArticle };
