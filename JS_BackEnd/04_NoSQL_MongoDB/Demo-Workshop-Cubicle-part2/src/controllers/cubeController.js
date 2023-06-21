const router = require('express').Router();
const cubeService = require('../services/cubeService');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    const cube = req.body;
    // VALIDATE DATA
    //ex. simple validation:
    if (cube.name.length < 2) {
        return res.status(400).send('Invalid request');
    }
    // SAVE DATA
    try {
        await cubeService.create(cube);
        // REDIRECT TO PAGE
        res.redirect('/');
    } catch (err) {
        // just for here,not to use as this after
        console.log(err);
        res.status(400).send(err);
    }
});

router.get('/details/:id', async (req, res) => {
    const cube =await cubeService.getOne(req.params.id).lean();

    res.render('details', { cube });
    
    // 2nd option
    // res.render('details', { ...cube });
});

module.exports = router;
