const { getAll } = require('../services/hotelService');

const homeController = require('express').Router();

// TODO replace with real controller by assignment

homeController.get('/',async (req, res) => {
    const hotels= await getAll()
    res.render('home', {
        title: 'Home Page',
        // user: req.user,
        // hotels:[] test when empty
        hotels
    });
})

module.exports = homeController;
