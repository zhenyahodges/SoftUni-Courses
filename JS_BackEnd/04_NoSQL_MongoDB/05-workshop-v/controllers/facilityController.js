const { createFacility } = require('../services/facilityService');

const facilityController = require('express').Router();

facilityController.get('/create', async (req, res) => {
    res.render('createFacility', {
        title: 'Create New Facility',
    });
});

facilityController.post('/create', async (req, res) => {
    console.log(req.body);

    try {
        await createFacility(req.body.label, req.body.iconUrl);
        res.redirect('/catalog');
    } catch (err) {
        console.log(err.message);
        res.render('createFacility', {
            title: 'Create New Facility',
        });
    }
});

module.exports = facilityController;
