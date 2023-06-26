const router = require('express').Router();
const accessoryService = require('../services/accessoryService');
// not good to refer models in controlers as below -mgse validation
const Accessory = require('../models/Accessory');
const { modelValidator } = require('../middlewares/modelValidatorMiddleware');

router.get('/create', async (req, res) => {
    res.render('accessory/create');
});

router.post('/create', modelValidator(Accessory), async (req, res) => {
    await accessoryService.create(req.body);
    res.redirect('/');
});

module.exports = router;
