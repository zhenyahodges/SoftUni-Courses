const router = require('express').Router();
const cubeService = require('../services/cubeService');
const accessoryService = require('../services/accessoryService');

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
    const cube = await cubeService.getOneDetailed(req.params.id).lean();
    res.render('details', { cube });
});

router.get('/:cubeId/attach-accessory', async (req, res) => {
    const cube = await cubeService.getOne(req.params.cubeId).lean();
    const accessories = await accessoryService
        .getAllAvailable(cube.accessories)
        .lean();
    res.render('accessory/attach', { cube, accessories });
});

router.post('/:cubeId/attach-accessory', async (req, res) => {
    const accessoryId = req.body.accessory;
    await cubeService.attachAccessory(req.params.cubeId, accessoryId);
    res.redirect('/cube/details/' + req.params.cubeId);
});

module.exports = router;
