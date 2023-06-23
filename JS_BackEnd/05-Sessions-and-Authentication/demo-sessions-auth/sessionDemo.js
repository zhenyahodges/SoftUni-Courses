const express = require('express');
// const cookieParser=require('cookie-parser');
const expSession = require('express-session');

const app = express();

// app.use(cookieParser());

app.use(
    expSession({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false,
        },
    })
);

app.get('/', (req, res) => {
    (req.session.userName = 'Pesho')
    res.send('Home page');
});

app.get('/cats', (req, res) => {
    console.log(req.session);
    res.send('Cats');
});

app.listen(5000, () => {
    console.log('Server listening on port 5000...');
});
