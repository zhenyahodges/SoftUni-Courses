const router = require('express').Router();

router.get('/create', async (req, res) => {
    res.render('accessory/create');
});

router.post('/create', (req, res) => {
    // console.log(req.body);
    res.redirect('/');
});

module.exports = router;
