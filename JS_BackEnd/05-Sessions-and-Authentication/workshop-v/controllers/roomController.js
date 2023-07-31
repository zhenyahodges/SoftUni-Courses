const { getById, update } = require('../services/roomService');

const roomController = require('express').Router();

roomController.get('/:id/edit', async (req, res) => {
    const roomId = req.params.id;
    const room = await getById(roomId);

    res.render('edit', {
        title: 'Edit Accomodation',
        room,
    });
});

roomController.post('/:id/edit', async (req, res) => {
    const roomId = req.params.id;
    try {
        const result = await update(roomId, req.body);
        res.redirect('/catalog/' + result._id);
    } catch (err) {
        req.body._id=roomId

        res.render('edit', {
            title: 'Edit Accomodation',
            error: err.message.split('\n'),
            room: req.body
        });
    }
});

module.exports = roomController;
