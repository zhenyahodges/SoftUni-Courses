const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const publicationService = require('../services/publicationService');

router.use(isAuth);

router.get('/create', isAuth, (req, res) => {
    res.render('publication/create');
});

router.post('/create', isAuth, async (req, res) => {
    const publicationData = { ...req.body, author: req.user._id };
    await publicationService.create(publicationData);

    res.redirect('/');
});

module.exports = router;
