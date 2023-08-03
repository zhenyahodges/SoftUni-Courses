const { register, login } = require('../services/userService');
const { parseError } = require('../utils/parser');

const authController = require('express').Router();

// REGISTER
authController.get('/register', (req, res) => {
    // TODO replace with actual view by assignment
    res.render('register', {
        title: 'Register Page',
    });
});

authController.post('/register', async (req, res) => {
    try {
        if (req.body.username == '' || req.body.password == '') {
            throw new Error('All fields are required');
        }

        if (req.body.password !== req.body.repass) {
            throw new Error('Passwords must match');
        }

        // TODO check assignment to see if register creates session
        const token = await register(req.body.username, req.body.password);

        res.cookie('token', token);
        // TODO replace with redirect by assignment
        res.redirect('/');
    } catch (error) {
        const errors = parseError(error);

        // TODO add error display to actual template from assignment
        res.render('register', {
            title: 'Register Page',
            errors,
            body: {
                username: req.body.username,
            },
        });
    }
});

// LOGIN
authController.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login Page',
    });
});

authController.post('/login', async (req, res) => {
    try {
        const token = await login(req.body.username, req.body.password);

        res.cookie('token', token);
        // TODO replace with redirect by assignment
        res.redirect('/');
    } catch (error) {
        const errors = parseError(error);

        // TODO add error display to actual template from assignment
        res.render('login', {
            title: 'Login Page',
            errors,
            body: {
                username: req.body.username,
            },
        });
    }
});

module.exports = authController;
