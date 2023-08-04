const { create } = require('../models/Hotel');
const { parseError } = require('../utils/parser');
const hotelController = require('express').Router();

// CREATE HOTEL
hotelController.get('/:id/details', (req, res) => {
    res.render('details', {
        title: 'Hotel Details',
    });
});

hotelController.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create Hotel ',
    });
});

hotelController.post('/create', async (req, res) => {
    const hotel = {
        name: req.body.name,
        city: req.body.city,
        imageUrl: req.body.imageUrl,
        rooms: Number(req.body.rooms),
        owner: req.user._id,
    };

    try {
        if (Object.values(hotel).some((v) => !v)) {
            throw new Error('All fields are required');
        }

        await create(hotel);
        res.redirect('/');
    } catch (error) {
        console.log(error);
        const errors = parseError(error);

        res.render('create', {
            title: 'Create Hotel ',
            errors,
            body: {
                hotel,
            },
        });
    }
});

// EDIT HOTEL
hotelController.get('/:id/edit', (req, res) => {
    res.render('create', {
        title: 'Edit Hotel',
        errors,
    });
});

module.exports = hotelController;
