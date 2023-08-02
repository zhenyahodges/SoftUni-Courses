const { register } = require('../services/userService');

const authController = require('express').Router();

authController.get('/register', (req, res) => {
    // TODO replace with actual view by assignment
    res.render('register', {
        title: 'register Page',
    });
});

authController.post('/register', async (req, res) => {
    const token = await register(req.body.username, req.body.password);

    res.cookie('token', token)

    res.render('auth/register');
});

module.exports = authController;
