const homeController = require('express').Router();

homeController.get('/', (req, res) => {
    // toto replace with real controller by assignment
    res.render('home', {
        title: 'Home Page',
        user: req.user
    });
});

module.exports = homeController;
