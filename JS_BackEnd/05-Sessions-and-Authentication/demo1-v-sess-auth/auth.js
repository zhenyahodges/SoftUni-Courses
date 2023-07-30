const express = require('express');
const session = require('express-session');
const { register, login, users } = require('./userService');

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

const homeTemplate = (user, users, isAdmin) => `<h1>Welcome ${
    user || 'guest'
}!</h1>
${
    user == undefined
        ? `<p>Hello,guest, please <a href="/login">login</a> or <a href="/register">register</a></p>`
        : ''
}
${
    isAdmin
        ? `<ul>
${users.map((u) => `<li>${u.username}- ${u.failedAttempts}<a href="/reset?username=${u.username}">Reset</a></li>`).join('\n')}
</ul>`
        : ''
}`;

app.get('/', (req, res) => {
    let user = {};
    if (req.session.user) {
        user = users.find(
            (u) => u.username.toLowerCase() == req.session.user.toLowerCase()
        );
    }

    console.log(`User:` + (user.username || `guest`));
    res.send(
        homeTemplate(user.username, users, (user.role || []).includes('admin'))
    );
});

app.get('/reset', (req, res) => {
    let user = {};
    if (req.session.user) {
        user = users.find(
            (u) => u.username.toLowerCase() == req.session.user.toLowerCase()
        );
    }

    if ((user.role || []).includes('admin') == false) {
        return res.status(403).send('403 Forbidden');
    }
    const target = users.find(u=>
        u.username.toLowerCase() == req.query.username.toLowerCase()
    );
    target.failedAttempts = 0;
    res.redirect('/');
});

const registerTemplate = (error) => `<h1>Register</h1>
${error ? `<p>${error}</p>` : ''}
<form action="/register" method="post">
<label>Username: <input type="text" name="username"></label>
<label>Password: <input type="password" name="password"></label>
<label>Repeat Password: <input type="password" name="repass"></label>
<input type="submit" value="Register">
</form>`;

app.get('/register', (req, res) => {
    res.send(registerTemplate());
});

app.post('/register', async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    try {
        if (username == '' || password == '') {
            throw new Error('All fields are required');
        } else if (password !== req.body.repass) {
            throw new Error('Passwords do not match');
        }

        await register(username, password);
        res.redirect('/');
    } catch (err) {
        res.send(registerTemplate(err.message));
    }
});

const loginTemplate = (error) => `<h1>Login</h1>
${error ? `<p>${error}</p>` : ''}
<form action="/login" method="post">
<label>Username: <input type="text" name="username"></label>
<label>Password: <input type="password" name="password"></label>
<input type="submit" value="Login">
</form>`;

app.get('/login', (req, res) => {
    res.send(loginTemplate());
});

app.post('/login', async (req, res) => {
    // console.log('login attempt');
    // console.log(req.session);
    const username = req.body.username;
    const password = req.body.password;

    try {
        const result = await login(username, password);
        req.session.user = result.username;
        res.redirect('/');
    } catch (err) {
        res.status(401).send(loginTemplate(err.message));
    }
});

app.get('/getAdmin', (req, res) => {
    const user = users.find(
        (u) => u.username.toLowerCase() == req.session.user.toLowerCase()
    );
    user.role.push('admin');
    res.redirect('/');
});

app.listen(3000);
