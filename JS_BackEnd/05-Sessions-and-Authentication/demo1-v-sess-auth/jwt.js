const app = require('express')();
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const secret = 'my secret';

app.use(cookieParser());

app.get('/', (req, res) => {
    const token = req.cookies.token;

    if (token) {
        const data = jwt.verify(token,secret);
        res.write(
            '<p>Token: </p>' +
                JSON.stringify(data, null, 2).replace('\n', '<br>')
        );
    } else {
        res.send('Hello');
    }
});

app.get('/jwt', (req, res) => {
    const payload = {
        username: 'Peter',
        roles: ['user', 'admin'],
    };

    const token = jwt.sign(payload, secret);
    res.cookie('token', token);
    res.send('Token saved');
});

app.listen(3000);
