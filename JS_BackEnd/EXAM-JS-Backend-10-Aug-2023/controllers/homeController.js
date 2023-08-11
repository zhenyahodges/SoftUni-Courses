const { getAll } = require('../services/postService');

const homeController = require('express').Router();

homeController.get('/', async (req, res) => {

    res.render('home', {
        title: 'Home Page',
        user: req.user,

    });
});

homeController.get('/posts', async (req, res) => {
    const posts = await getAll();

    res.render('posts', {
        title: 'posts Page',
        user: req.user,
        posts,
    });
});

homeController.get('/404', (req, res) => {
    res.render('404', {
        title: 'Not FoundPage',
        user: req.user,
    });
});

module.exports = homeController;
