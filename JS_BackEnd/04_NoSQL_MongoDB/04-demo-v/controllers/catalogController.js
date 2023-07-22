const { getAll, getById } = require('../services/accomService');

const router = require('express').Router();

router.get('/', (req, res) => {
    const rooms = getAll();
    res.render('catalog', {
        title: 'Catalog',
        rooms,
    });
});

router.get('/:id', (req, res) => {
    const roomId = req.params.id;
    const room = getById(roomId);

    if (room) {
        res.render('details', {
            title: 'Details',
            room
        });
    } else {
        res.render('roomNotFound', {
            title: 'Room Not Found',
            roomId,
        });
    }
});

module.exports = router;