const { create } = require('../services/roomService');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('create', {
        title: 'Host New Accomodation',
    });
});

router.post('/', async (req, res) => {
    // console.log(req.body);

    try {
        // throw new Error('Validation failed')
        const result = await create(req.body);
        res.redirect('/catalog/' + result._id);
    } catch (err) {
        res.render('create', {
            title: 'Error creating',
            error: err.message.split('\n'),
        });
    }
});

module.exports = router;
