const { getAll } = require('../services/houseService');

const homeController = require('express').Router();

homeController.get('/', (req, res) => {
    res.render('home', {
        title: 'Home Page',
        user: req.user,
    });
});

homeController.get('/housing', async (req, res) => {
const houses= await getAll();

    res.render('housing', {
        title: 'Housing For Rent Page',
        user: req.user,
        houses
    });
});

homeController.get('/404', (req, res) => {
    res.render('404', {
        title: 'Not FoundPage',
        user: req.user,
    });
});

module.exports = homeController;
