const { validationResult, body } = require('express-validator');
const { register, login } = require('../services/userService');
const { parseError } = require('../utils/parser');
const { isGuest, hasUser } = require('../middlewares/guards');
const authController = require('express').Router();

const URL_PATTERN = /^[A-Z][a-z]+ [A-Z][a-z]+$/gm;

// REGISTER
authController.get('/register', isGuest(), (req, res) => {
    res.render('register', {
        title: 'Register Page',
    });
});

authController.post(
    '/register',

    body('username')
        .isLength({ min: 5 })
        .withMessage('Username must be at least 5 characters long'),
    body('password')
        .isLength({ min: 4 })
        .withMessage('Password must be at least 4characters long'),

    async (req, res) => {
        try {
       
            const { errors } = validationResult(req);
            if (errors.length > 0) {
                throw errors;
            }
            //
            if (
                req.body.fullname == '' ||
                req.body.username == '' ||
                req.body.password == ''
            ) {
                throw new Error('All fields are required');
            }

            if (req.body.password.length <4) {
                throw new Error('Password must be at least 4 characters long');
            }

            if (req.body.password !== req.body.repass) {
                throw new Error('Passwords must match');
            }

            const token = await register(
                req.body.fullname,
                req.body.username,
                req.body.password
            );
            res.cookie('token', token);
            res.redirect('/');
        } catch (error) {
            console.log(error);
            const errors = parseError(error);

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
authController.get('/login',isGuest(), (req, res) => { 
    res.render('login', {
        title: 'Login Page',
    });
});

authController.post('/login', async (req, res) => {
    try {
        const token = await login(req.body.username, req.body.password);

        res.cookie('token', token);       
        res.redirect('/');
    } catch (error) {
        const errors = parseError(error);
      
        res.render('login', {
            title: 'Login Page',
            errors,
            body: {
                username: req.body.username,
            },
        });
    }
});

authController.get('/logout',hasUser() ,(req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

module.exports = authController;
