const { create } = require('../services/roomService');
const { parseError } = require('../utils/parser');

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
        const result = await create(req.body, req.user._id);
        res.redirect('/catalog/' + result._id);
    } catch (error) {
        res.render('create', {
            title: 'Error creating',
            body: req.body,
            error: parseError(error),
        });
    }
});

module.exports = router;
