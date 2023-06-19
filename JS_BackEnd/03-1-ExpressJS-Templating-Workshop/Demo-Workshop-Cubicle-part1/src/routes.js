const homeController= require('./controllers/homeController');
// // old way
// module.exports = (app) => {
//     app.get('/', homeController.index);
// };

const cubeController = require('./controllers/cubeController');

// instead: modular routes
const express = require('express');
const router=express.Router();

router.use('/', homeController);
router.use('/cube',cubeController);

module.exports = router;