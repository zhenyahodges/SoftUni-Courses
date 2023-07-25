const facilityController = require('express').Router();
const { getById } = require('../services/roomService');
const {
    createFacility,
    getAllFacilities,
} = require('../services/facilityService');

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

facilityController.get('/:roomId/decorateRoom', async (req, res) => {
    const roomId = req.params.roomId;
    const room = await getById(roomId);
    const facilities = await getAllFacilities();
   
    console.log('controller',facilities);

    res.render('decorate', {
        title: 'Edit Facilities',
        room,
        facilities,
    });
});

module.exports = facilityController;
