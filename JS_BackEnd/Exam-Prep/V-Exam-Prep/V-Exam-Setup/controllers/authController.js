const { validationResult } = require('express-validator');
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

authController.post(
    '/register',
    // TODO VALIDATIONS
    // body('username')
    //     .isLength({ min: 5 })
    //     .withMessage('Username must be at least 5 characters long')
    //     .isAlphanumeric()
    //     .withMessage('May contain only letters and numbers'),

    // body('password')
    //     .isLength({ min: 5 })
    //     .withMessage('Password must be at least 5 characters long')
    //     .isAlphanumeric()
    //     .withMessage('May contain only letters and numbers'),
    async (req, res) => {
        try {
            // todo add validations
            // const { errors } = validationResult(req);
            // if (errors.length > 0) {
            //     throw errors;
            // }
// 
            if (req.body.username == '' || req.body.password == '') {
                throw new Error('All fields are required');
            }

            // TODO check password length

            // if (req.body.password.length <5) {
            //     throw new Error('Password must be at least 5 characters long');
            // }

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
    }
);

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

authController.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

module.exports = authController;
