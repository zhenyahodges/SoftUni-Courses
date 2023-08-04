const { create, getById } = require('../services/hotelService');
const { parseError } = require('../utils/parser');
const hotelController = require('express').Router();

// DETAILS
hotelController.get('/:id/details', async (req, res) => {
    const hotel = await getById(req.params.id);

    res.render('details', {
        title: 'Hotel Details',
        hotel,
    });
});

// CREATE HOTEL
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
    console.log(hotel);

    // console.log(name,city,imageUrl,rooms,owner);
    try {
        if (Object.values(hotel).some((v) => !v)) {
            throw new Error('All fields are required');
        }

        await create(hotel);
        res.redirect('/');
    } catch (error) {
        res.render('create', {
            title: 'Create Hotel ',
            errors: parseError(error),
            body: hotel,
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
