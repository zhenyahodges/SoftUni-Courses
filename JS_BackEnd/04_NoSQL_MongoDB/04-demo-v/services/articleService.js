const Article = require('../models/Article');

async function getAllArticles() {
    //NB! always lean things loaded from DB b/f sending to template
    const data = await Article.find({}).lean();
    return data;
}

module.exports = {getAllArticles};
