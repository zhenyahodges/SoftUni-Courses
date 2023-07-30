const jwt = require('jsonwebtoken');
const authController = require('express').Router();

const jwtSecret = 'dsljfsnfs';

authController.get('/obtain', (req, res) => {
    const payload = {
        _id: '35dfd',
        username: 'peter',
        roles: ['user'],
    };
    const token = jwt.sign(payload, jwtSecret);
    // console.log(token);
    res.cookie('jwt', token, {httpOnly: true,secure: true});
    res.send('Here is your token');
});

authController.get('/validate', (req, res) => {
    console.log('HERE');
    console.log(req);
    const token = req.cookies.jwt;

    console.log('token-->', token);
    if (token) {
        try {
            // console.log(token);
            const data = jwt.verify(token, jwtSecret);
            // console.log('DATA---', data);
            // res.send(data);
            res.json(data);
        } catch (err) {        
            res.cookie('jwt', '', { maxAge: 0 });
            console.error('JWT verification failed:', err.message);
            res.status(500).send('JWT verification failed.');
            res.redirect('/login');
        }
    } else {
        res.status(404).send('Missing token');
    }
});

module.exports = authController;
