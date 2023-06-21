const router = require('express').Router();
const cubeService = require('../services/cubeService');

// exports.index = (req, res) => {
//     res.render('index', { cubes });
// };

// exports.about = (req, res) => {
//     res.render('about');
// };
router.get('/', async (req, res) => {
    // queryString
    let {search,from,to}= req.query;

    const cubes=await cubeService.getAll(search,from,to);
    res.render('index', { cubes,search,from,to });
    // cubes:cubes shorthand=> cubes
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;
