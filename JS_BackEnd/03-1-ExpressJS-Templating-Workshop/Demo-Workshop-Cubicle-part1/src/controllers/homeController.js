const router = require('express').Router();
const cubeService = require('../services/cubeService');

// exports.index = (req, res) => {
//     res.render('index', { cubes });
// };

// exports.about = (req, res) => {
//     res.render('about');
// };
router.get('/', (req, res) => {
    // queryString
    let {search,from,to}= req.query;

    const cubes=cubeService.getAll(search,from,to);
    res.render('index', { cubes });
    // cubes:cubes shorthand=> cubes
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;
