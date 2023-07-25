const facilityController = require('express').Router();
const { getById } = require('../services/roomService');
const {
    createFacility,
    getAllFacilities,
    addFacilities,
} = require('../services/facilityService');

// ROOMS
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

// FACILITIES
facilityController.get('/:roomId/decorateRoom', async (req, res) => {
    const roomId = req.params.roomId;
    const room = await getById(roomId);
    const facilities = await getAllFacilities();

    facilities.forEach(f=>{
        if(room.facilities.some(x=>x._id==f._id)){
            f.checked=true;
        }
    })
   
    // console.log('controller',facilities);

    res.render('decorate', {
        title: 'Edit Facilities',
        room,
        facilities,
    });
});

facilityController.post('/:roomId/decorateRoom', async (req, res) => {
    await addFacilities(req.params.roomId, Object.keys(req.body))
   
    res.redirect(`/facility/${req.params.roomId}/decorateRoom`)
});

module.exports = facilityController;
