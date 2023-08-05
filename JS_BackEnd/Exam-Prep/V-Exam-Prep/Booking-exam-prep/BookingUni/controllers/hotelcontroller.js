const {
    create,
    getById,
    update,
    deleteById,
    bookRoom,
} = require('../services/hotelService');
const { parseError } = require('../utils/parser');
const hotelController = require('express').Router();

// DETAILS
hotelController.get('/:id/details', async (req, res) => {
    const hotel = await getById(req.params.id);

    if (hotel.owner == req.user._id) {
        hotel.isOwner = true;
    } else if (hotel.bookings.map(b=>b.toString()).includes(req.user._id.toString())) {
        hotel.isBooked = true;
    }

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
    console.log(req.body);
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
hotelController.get('/:id/edit', async (req, res) => {
    const hotel = await getById(req.params.id);
    console.log(hotel.owner);
    console.log(req.user);
    console.log(hotel.owner != req.user._id);

    if (hotel.owner != req.user._id) {
        return res.redirect('/auth/login');
    }

    res.render('edit', {
        title: 'Edit Hotel',
        hotel,
    });
});

hotelController.post('/:id/edit', async (req, res) => {
    const id = req.params.id;
    const hotel = await getById(id);

    if (hotel.owner != req.user._id) {
        return res.redirect('/auth/login');
    }

    const edited = {
        name: req.body.name,
        city: req.body.city,
        imageUrl: req.body.imageUrl,
        rooms: Number(req.body.rooms),
    };
    console.log(edited);

    try {
        if (Object.values(edited).some((v) => !v)) {
            throw new Error('All fields are required');
        }

        await update(id, edited);
        res.redirect(`/hotel/${id}/details`);
    } catch (error) {
        res.render('edit', {
            title: 'Edit Hotel ',
            errors: parseError(error),
            hotel: Object.assign(hotel, { _id: id }),
        });
    }
});

// DELETE
hotelController.get('/:id/delete', async (req, res) => {
    const hotel = await getById(req.params.id);

    if (hotel.owner != req.user._id) {
        return res.redirect('/auth/login');
    }

    await deleteById(req.params.id);
    res.redirect('/');
});

// BOOK
hotelController.get('/:id/book', async (req, res) => {
    const id = req.params.id;
    const hotel = await getById(id);

    try {
        if (hotel.owner == req.user._id) {
            hotel.isOwner = true;
            throw new Error('Cannot book your own hotel');
        }
        await bookRoom(id, req.user._id);
        res.redirect(`/hotel/${id}/details`);
    } catch (error) {
        res.render('details', {
            title: 'Hotel Details',
            hotel,
            errors: parseError(error),
        });
    }
});

module.exports = hotelController;
