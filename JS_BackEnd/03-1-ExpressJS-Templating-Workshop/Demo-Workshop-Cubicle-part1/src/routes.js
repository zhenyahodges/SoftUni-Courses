const homeController= require('./controllers/homeController');
// // old way
// module.exports = (app) => {
//     app.get('/', homeController.index);
// };

const cubeController = require('./controllers/cubeController');

// instead: modular routes
const express = require('express');
const router=express.Router();

router.get('/', homeController.index);
router.get('/about', homeController.about);
// or
router.use('/cube',cubeController);

module.exports = router;