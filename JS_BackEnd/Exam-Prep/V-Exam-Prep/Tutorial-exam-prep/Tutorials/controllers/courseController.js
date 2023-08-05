const { createCourse, getById } = require('../services/courseService');
const { parseError } = require('../utils/parser');

const courseController = require('express').Router();

courseController.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create Course',
    });
});

courseController.get('/:id', async (req, res) => {
    const course = await getById(req.params.id);
    console.log(course);

    res.render('details', {
        title: course.title,
        course,
    });
});

courseController.post('/create', async (req, res) => {
    const course = {
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        duration: req.body.duration,
        owner: req.user._id,
    };

    try {
        await createCourse(course);
        res.redirect('/');
    } catch (error) {
        res.render('create', {
            title: 'Create Course',
            errors: parseError(error),
            body: course,
        });
    }
});

module.exports = courseController;
