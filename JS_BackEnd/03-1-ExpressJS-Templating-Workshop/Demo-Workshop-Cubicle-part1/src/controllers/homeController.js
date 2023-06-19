const cubes = require('../db.json');

exports.index = (req, res) => {
    res.render('index', { cubes });
    // cubes:cubes shorthand=> cubes
};

exports.about = (req, res) => {
    res.render('about');
};
