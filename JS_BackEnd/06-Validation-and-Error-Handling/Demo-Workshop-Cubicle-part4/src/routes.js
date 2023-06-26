const homeController= require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');
const accessoryController = require('./controllers/accessoryController');
const authController= require('./controllers/authController');

const express = require('express');
const router=express.Router();

router.use('/', homeController);
router.use('/cube',cubeController);
router.use('/accessory',accessoryController);
// router.use('/user', authController);
router.use('/auth', authController);
router.use('*', (req,res) => {
    res.render('404')
});

module.exports = router;