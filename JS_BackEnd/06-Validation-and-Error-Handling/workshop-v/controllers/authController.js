const { body, validationResult } = require('express-validator');
const { login, register } = require('../services/authService');

const authController = require('express').Router();

authController.get('/login', (req, res) => {
    // res.send('Here is your token');
    res.render('login', {
        title: 'Login',
    });
});

authController.post('/login', async (req, res) => {
    try {
        const result = await login(req.body.username, req.body.password);
        attachToken(req, res, result);
        res.redirect('/');
    } catch (err) {
        res.render('login', {
            title: 'Login',
            error: err.message.split('\n '),
        });
    }
});

authController.get('/register', (req, res) => {
    // res.send('Here is your token');
    res.render('register', {
        title: 'Register',
    });
});

authController.post(
    '/register',
    body('username')
        .notEmpty()
        .withMessage('Username is required')
        .isAlphanumeric()
        .withMessage('Username may contain only letters and numbers'),
    body('password')
        .notEmpty()
        .withMessage('Password is required')
        .isLength({ min: 3 })
        .withMessage('Password must be at least 3 characters'),
    body('repass').custom(async (value, { req }) => {
        if (value.trim() == req.body.password.trim()) {
            throw new Error('Passwords must match');
        }
    }),
    async (req, res) => {
        try {
            const { errors } = validationResult(req);
            if (errors.length > 0) {
                throw new Error('Something happened');
            }
            // return console.log(validator.isEmpty(req.body.username.trim()));
            // if (validator.isEmpty(req.body.username.trim()) || validator.isEmpty(req.body.password.trim())) {
            //     throw new Error('All fields are required');
            // }
            // if (req.body.password.trim() != req.body.repass.trim()) {
            //     throw new Error('Passwords do not match');
            // }
            const result = await register(req.body.username, req.body.password);
            attachToken(req, res, result);
            res.redirect('/');
        } catch (err) {
            res.render('register', {
                title: 'Register',
                error: err.message.split('\n '),
            });
        }
    }
);

authController.get('/logout', (req, res) => {
    res.clearCookie('jwt');
    return res.redirect('/');
});

function attachToken(req, res, data) {
    const token = req.signJwt(data);
    res.cookie('jwt', token, { maxAge: 14400000 });
}
module.exports = authController;
