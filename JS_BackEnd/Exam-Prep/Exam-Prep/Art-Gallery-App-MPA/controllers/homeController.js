const router = require('express').Router();
const publicationService = require('../services/publicationService');

router.get('/', async (req, res) => {
    const publicationResult = await publicationService
        .getAll()
        .lean()
        .map((x) => ({
            ...x,
            shareCount: x.usersShared.length,
        }));
    res.render('home', { publications });
});

module.exports = router;
