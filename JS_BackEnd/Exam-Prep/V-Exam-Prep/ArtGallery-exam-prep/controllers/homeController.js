const { getAll } = require('../services/publicationService');

const homeController = require('express').Router();

// GET STATISTICS
homeController.get('/', async(req, res) => {
    const publications= await getAll();
    // console.log(publications);

    res.render('home', {
        title: 'Home Page',
        user: req.user,
        publications,  
    });
});

// GET PUBLICATIONS GALLERY
homeController.get('/gallery',async (req, res) => {
    const publications=await getAll();  

    res.render('gallery', {
        title: 'Gallery Page',
        user: req.user,
        publications
    });
});

// CREATE

module.exports = homeController;
