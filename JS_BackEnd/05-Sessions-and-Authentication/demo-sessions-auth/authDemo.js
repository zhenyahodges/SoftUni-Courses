const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const password = 'mysecretpassword';
// NB!
const saltRounds = 10;
const hashedPassword =
    '$2b$10$tQW2Nrx1Gg8NSJO1qvf9C.P8RLKrTwJ3ejNHIOYkBOskDh133B03u';
const secret = 'Mysupersecret';

app.use(cookieParser());

app.get('/hash/:password?', async (req, res) => {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashs = await bcrypt.hash(req.params.password, salt);

    console.log(salt);
    console.log(hashs);
    res.send('Hello, world!');
});

app.get('/login/:password?', async (req, res) => {
    const isValidPass = await bcrypt.compare(
        req.params.password,
        hashedPassword
    );
    if (isValidPass) {
        // JWT
        const payload = {
            username: 'Mariya',
        };
        const options = {
            expiresIn: '1d',
        };

        //NB!! CHECK THIS IS HOW JWT SHOULD WORK OR NOT-CONFLICTING INFO
        const token = jwt.sign(payload, secret, options);
        res.send(token);
    } else {
    }
    res.send('Invalid pass');
});

app.get('/verify/:token', (req, res) => {
    jwt.verify(req.params.token, secret, (err, decodedToken) => {
        if (err) {
            return res
                .status(401)
                .send('You are not authorized to access this');
        }
        res.json(decodedToken);
    });
});

app.listen(5000, () => {
    console.log('Server listening on port 5000...');
});
