const { getAllByDate, getRecent } = require('../services/courseService');

const homeController = require('express').Router();

homeController.get('/', async (req, res) => {
    let courses = [];

    console.log(req.query);

    if (req.user) {
        // user home page
        courses = await getAllByDate(req.query.search);
        // console.log(courses);

        res.render('user-home', {
            title: 'Home Page',
            user: req.user,
            courses,
        });
    } else {
        // guest home page
        courses = await getRecent();

        res.render('guest-home', {
            title: 'Home Page',
            courses,
            search: req.query.search
        });
    }
});

module.exports = homeController;
