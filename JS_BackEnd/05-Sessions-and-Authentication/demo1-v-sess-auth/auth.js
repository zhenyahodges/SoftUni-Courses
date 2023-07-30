const express = require('express');
const session = require('express-session');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        cookie: { secure: false },
        resave: false,
        saveUninitialized: true,
        secret: 'my secret',
    })
);

app.get('/', (req, res) => {
    console.log(`User:` + (req.session.user || `guest`));
    if (req.session.user) {
        res.send(`<p>Hello, ${req.session.user}!</p>`);
    } else {
        res.send(`<p>Hello,guest, please <a href="/login">login here</a></p>`);
    }
});

app.get('/login', (req, res) => {
    res.send(`<form action="/login" method="post">
    <label>Username: <input type="text" name="username"></label>
    <label>Password: <input type="password" name="password"></label>
    <input type="submit" value="Login">
    </form>`);
});

const users = {
    Peter: '123',
    John: '123',
};

app.post('/login', (req, res) => {
    console.log('login attempt');
    // console.log(req.session);
    const username = req.body.username;
    if (users[username] != undefined && users[username] == req.body.password) {
        req.session.user = username;
        res.redirect('/');
    } else {
        res.status(401).send('Incorrect username or password');
    }
});
app.listen(3000);
