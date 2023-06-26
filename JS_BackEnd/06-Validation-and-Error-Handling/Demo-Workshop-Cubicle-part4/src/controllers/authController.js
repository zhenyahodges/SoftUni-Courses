const router = require('express').Router();
const { sessionName } = require('../constants');
const authService = require('../services/authService');
const validator = require('validator');
const { isEmail } = require('../utils/validators');

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    if (!isEmail(req.body.username)) {
        return res.status(404).send('Invalid email address');
    }

    let createdUser = await authService.register(req.body);

    if (createdUser) {
        res.redirect('/auth/login');
    } else {
        // TODO: add notification
        res.redirect('/404');
    }
});

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    // console.log(token);
    try {
        let token = await authService.login(req.body);
        if (!token) {
            return res.redirect('/404');
        }
        res.cookie(sessionName, token, { httpOnly: true });

        res.redirect('/');
    } catch (error) {
       res.status(400).render('auth/login', {error: error.message});       
    }
});

router.get('/logout', (req, res) => {
    res.clearCookie(sessionName);
    res.redirect('/');
});

module.exports = router;
