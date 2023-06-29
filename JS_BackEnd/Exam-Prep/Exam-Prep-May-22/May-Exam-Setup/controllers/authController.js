const router = require('express').Router();
const authService = require('../services/authService');

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', (req, res) => {
    console.log(req.body);
});

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    const { password, repeatPassword, ...userData} = req.body;

    if (password !== repeatPassword) {
        console.log(password+'=='+repeatPassword);
        return res.render('auth/register', { error: 'Passwords do not match' });

    }

    // create user
    try {
        await authService.create({ password, ...userData });
        res.redirect('/auth/login');
    } catch (error) {
        // Add mongoose error mapper
        return res.render('auth/register', { error: 'Db error' });
    }
});

module.exports = router;
