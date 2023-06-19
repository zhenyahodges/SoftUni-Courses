const router = require('express').Router();
const cubes = require('../db.json');

const fs = require('fs/promises');
const path=require('path');

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
    // (json formatting)
    fs.writeFile(path.resolve('src', 'db.json'), JSON.stringify(cubes, '', 4), {encoding: 'utf-8'})
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
