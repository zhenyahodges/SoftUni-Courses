const { hasUser } = require('../middlewares/guards');
const {
    createHouse,
    getById,
    rent,
    update,
    deleteById,
} = require('../services/houseService');
const { parseError } = require('../utils/parser');

const houseController = require('express').Router();

// DETAILS
houseController.get('/:id/details', async (req, res) => {
    const house = await getById(req.params.id);
    console.log(house);

    let owner;
    const user = req.user;

    if (user && house.owner == req.user._id) {
        house.isOwner = true;
        owner = req.user.username;
    } else if (user && house.owner !== req.user._id) {
        const result = house.rented
            .map((b) => b.toString())
            .includes(req.user._id.toString());

        if (result) {
            house.isRented = true;
        } else {
            house.isRented = false;
        }
    }

    res.render('details', {
        title: 'House Details',
        house: Object.assign(house, { owner, user },isRented),
        user,
    });
});

// CREATE
houseController.get('/create', hasUser(), (req, res) => {
    res.render('create', {
        title: 'Create Offer Page',
        user: req.user,
    });
});

houseController.post('/create', hasUser(), async (req, res) => {
    const house = {
        name: req.body.name,
        type: req.body.type,
        year: req.body.year,
        city: req.body.city,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        free: req.body.free,
        owner: req.user._id,
    };
    // console.log(house);

    try {
        if (Object.values(house).some((v) => !v)) {
            throw new Error('All fields are required');
        }

        await createHouse(house);
        res.redirect('/housing');
    } catch (error) {
        // console.log(error.message);
        res.render('create', {
            title: 'Create Offer Page ',
            errors: parseError(error),
            body: house,
        });
    }
});

// EDIT
houseController.get('/:id/edit', hasUser(), async (req, res) => {
    const house = await getById(req.params.id);

    if (house.owner != req.user._id) {
        return res.redirect('/404');
    }

    res.render('edit', {
        title: 'Edit House',
        house,
    });
});

houseController.post('/:id/edit', hasUser(), async (req, res) => {
    const id = req.params.id;
    const house = await getById(id);

    if (house.owner != req.user._id) {
        return res.redirect('/auth/login');
    }

    const edited = {
        name: req.body.name,
        type: req.body.type,
        year: req.body.year,
        city: req.body.city,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        free: req.body.free,
    };
    // console.log(edited);

    try {
        if (Object.values(edited).some((v) => !v)) {
            throw new Error('All fields are required');
        }

        await update(id, edited);
        res.redirect(`/house/${id}/details`);
    } catch (error) {
        res.render('edit', {
            title: 'Edit House ',
            errors: parseError(error),
            house: Object.assign(house, { _id: id }),
        });
    }
});

// DELETE
houseController.get('/:id/delete', hasUser(), async (req, res) => {
    const house = await getById(req.params.id);

    if (house.owner != req.user._id) {
        return res.redirect('/404');
    }

    await deleteById(req.params.id);
    res.redirect('/housing');
});

//RENT
houseController.get('/:id/rent', hasUser(), async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;
    const house = await getById(id);

    try {
        if (house.owner == userId) {
            house.isOwner = true;
            throw new Error('You already shared this house');
        }

        if (house.rented.map((b) => b.toString()).includes(userId.toString())) {
            house.isRented = true;
            throw new Error('Cannot publish same room twice');
        }

        await rent(id, userId);
        res.redirect(`/`);
    } catch (error) {
        res.render('details', {
            title: 'House Details',
            house,
            errors: parseError(error),
        });
    }
});

module.exports = houseController;
