const { hasUser } = require('../middlewares/guards');
const {
    createHouse,
    getById,
    rent,
    update,
    deleteById,
    getByUserRented,
} = require('../services/houseService');
const { usernameById } = require('../services/userService');
const { parseError } = require('../utils/parser');

const houseController = require('express').Router();

// DETAILS
houseController.get('/:id/details', async (req, res) => {
    const house = await getById(req.params.id);
    const user = req.user;
    // console.log(user)
    // TENANTS?
    const tenantsIds = house.rented.map((r) => r.toString());

    tenantsIds.length > 0 ? (house.isRented = true) : (house.isRented = false);

    let tenantsNames = [];
    for (let i = 0; i < tenantsIds.length; i++) {
        let uname = await usernameById(tenantsIds[i]);
        tenantsNames.push(uname);
    }
    house.tenantsList = tenantsNames.join(', ');

    // OWNER?
    if (user && house.owner == user._id) {
        house.isOwner = true;

    } else if (user && house.owner != user._id) {
        house.isOwner = false;
        house.user = user;

       // IS FREE TO RENT
        house.free !== 0 ? (house.isFree = true) : (house.isFree = false);

        // USER hasRENTED
        const result = house.rented
            .map((b) => b.toString())
            .includes(user._id.toString());     

        if (result) {
            house.hasRented = true;
        } else {
            house.hasRented = false;
        }
       
    }
    console.log('HOUSE?==' + Object.entries(house));

    res.render('details', {
        title: 'House Details',
        house,
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
