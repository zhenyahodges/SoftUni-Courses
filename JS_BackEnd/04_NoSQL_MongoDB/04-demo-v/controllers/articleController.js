const { getAllArticles, createArticle } = require('../services/articleService');

const articleController = require('express').Router();

articleController.get('/', async (req, res) => {
    const articles = await getAllArticles();
    res.render('articles', {
        title: '- Articles',
        articles,
        //     [
        //     {
        //         author: 'John',
        //         title: 'My Title',
        //         content: 'Static article 1'
        //     },
        //     {
        //         author: 'Mary',
        //         title: 'My Title2',
        //         content: 'Static article 2'
        //     }
        // ]
    });
});

articleController.post('/', async (req, res) => {
    // console.log(req.body);
    // neeeds try-catch
    await createArticle(req.body.author, req.body.title, req.body.content);
    res.redirect('/articles');
});

module.exports = articleController;
