const { getAll, getLastThree, search } = require('../services/houseService');

const homeController = require('express').Router();

homeController.get('/', async (req, res) => {
    const lastThree = await getLastThree();

    console.log(lastThree);

    res.render('home', {
        title: 'Home Page',
        user: req.user,
        lastThree,
    });
});

homeController.get('/housing', async (req, res) => {
    const houses = await getAll();

    res.render('housing', {
        title: 'Housing For Rent Page',
        user: req.user,
        houses,
    });
});

homeController.get('/404', (req, res) => {
    res.render('404', {
        title: 'Not FoundPage',
        user: req.user,
    });
});

homeController.get('/search', async (req, res) => {
    let houses = await search(req.query.search);

    res.render('search', {
        title: 'Search Houses',
        houses,
    });
});

module.exports = homeController;
