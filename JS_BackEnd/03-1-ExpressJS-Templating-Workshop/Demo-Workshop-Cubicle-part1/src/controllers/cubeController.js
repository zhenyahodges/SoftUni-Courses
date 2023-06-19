const router = require('express').Router();
const cubes = require('../db.json');

const fs = require('fs/promises');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    const cube = req.body;
    // VALIDATE DATA
    //ex. simple validation:
    if (cube.name.length < 2) {
        return res.status(400).send('Invalid request');
    }
    // SAVE DATA
    cubes.push(cube);
    fs.writeFile('../db.json', JSON.stringify(cubes))
        .then(() => {
            // REDIRECT TO PAGE
            res.redirect('/');
        })
        .catch((err) => {
            // just for here,not to use as this after
            res.status(400).send(err);
        });
});

module.exports = router;
