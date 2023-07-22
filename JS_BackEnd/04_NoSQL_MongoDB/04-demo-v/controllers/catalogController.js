const { getAll, getById } = require('../services/accomService');

const router = require('express').Router();

router.get('/', (req, res) => {
    // search
    // console.log(req.query);
    const search=req.query.search || ''
    
    // get all rooms
    const rooms = getAll(search);
    res.render('catalog', {
        title: 'Catalog',
        // rooms: [], test empty
        rooms,
        search
    });
});

router.get('/:id', (req, res) => {
    const roomId = req.params.id;
    const room = getById(roomId);

    if (room) {
        res.render('details', {
            title: 'Details',
            room,
        });
    } else {
        res.render('roomNotFound', {
            title: 'Room Not Found',
            roomId,
        });
    }
});

module.exports = router;
