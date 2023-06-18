const homeController= require('./controllers/homeController');
// // old way
// module.exports = (app) => {
//     app.get('/', homeController.index);
// };

// instead: modular routes
const express = require('express');
const router=express.Router();

router.get('/', homeController.index);

module.exports = router;