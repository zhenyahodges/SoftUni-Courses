const router = require('express').Router();
const authService = require('../services/authService');

const { COOKIE_SESSION_NAME } = require('../constants');

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await authService.login(username, password);
        const token = await authService.createToken(user);

        res.cookie(COOKIE_SESSION_NAME, token, { httpOnly: false });
        res.redirect('/');
    } catch (err) {
        res.render('auth/login', { error: 'Cannot find username or password' });
    }
});

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    const { password, repeatPassword, ...userData } = req.body;

    if (password !== repeatPassword) {
        // console.log(password + '==' + repeatPassword);
        return res.render('auth/register', { error: 'Passwords do not match' });
    }

    // create user
    try {
        const createdUser = await authService.create({ password, ...userData });
        const token = await authService.createToken(createdUser);
        res.cookie(COOKIE_SESSION_NAME, token);
        res.redirect('/');
    } catch (error) {
        console.log(error);
        // Add mongoose error mapper
        return res.render('auth/register', { error: 'Db error' });
    }
});

module.exports = router;
