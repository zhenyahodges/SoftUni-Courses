const facilityController = require('express').Router();
const {
    createFacility,
    getAllFacilities,
    addFacilities,
} = require('../services/facilityService');
const { getById } = require('../services/roomService');

// ROOMS
facilityController.get('/create', async (req, res) => {
    res.render('createFacility', {
        title: 'Create New Facility',
    });
});

facilityController.post('/create', async (req, res) => {
    // console.log(req.body);

    try {
        await createFacility(req.body.label, req.body.iconUrl);
        res.redirect('/catalog');
    } catch (err) {
        // console.log(err.message);
        res.render('createFacility', {
            title: 'Create New Facility',
        });
    }
});

// FACILITIES
facilityController.get('/:roomId/decorateRoom', async (req, res) => {
    const roomId = req.params.roomId;
    const room = await getById(roomId);
    const facilities = await getAllFacilities();
    // console.log('faccontroller==>',facilities);
    // console.log('faccontroller room==>', room);

    facilities.forEach((f) => {
        console.log('FFF',f);
        if ((room.facilities || []).some(
                (id) => id._id.toString() == f._id.toString()
            )
        ) {
            f.checked = true;               
        }     
        console.log('fccc===', room.facilities);      
    });

    res.render('decorate', {
        title: 'Edit Facilities',
        room,
        facilities,
    });
});

facilityController.post('/:roomId/decorateRoom', async (req, res) => {
    // console.log('controller', req.params.roomId);
    // console.log('controller', Object.keys(req.body));

    await addFacilities(req.params.roomId, Object.keys(req.body));

    res.redirect(`/facility/${req.params.roomId}/decorateRoom`);
});

module.exports = facilityController;
