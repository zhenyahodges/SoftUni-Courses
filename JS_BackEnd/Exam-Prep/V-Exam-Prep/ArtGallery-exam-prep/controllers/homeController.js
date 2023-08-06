const { getAll } = require('../services/publicationService');

const homeController = require('express').Router();

// GET STATISTICS
homeController.get('/', async(req, res) => {
    // toto replace with real controller by assignment
    const publications= await getAll();
    console.log(publications);
    // publications.shared

    // const isEmpty= (shared.length==0)
    // console.log(isEmpty);

    res.render('home', {
        title: 'Home Page',
        user: req.user,
        publications,
        // isEmpty
    });
});

// GET PUBLICATIONS GALLERY
homeController.get('/gallery',async (req, res) => {
    // toto replace with real controller by assignment
    const publications=await getAll();

    console.log(publications);

    res.render('gallery', {
        title: 'Gallery Page',
        user: req.user,
        publications
    });
});

// CREATE

module.exports = homeController;
