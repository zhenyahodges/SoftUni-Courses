const app = require('express')();
const session = require('express-session');

app.use(session({
    cookie: { secure: false },
    resave: false,
    saveUninitialized: true,
    secret: 'my secret',
}));

app.get('/', (req, res) => {
    console.log(req.session);
    res.send('hello')
});

app.get('/login', (req, res) => {
    res.send(`<form action="login" method="post">
    <label>Username: <input type="text" name="username"></label>
    <label>Password: <input type="password" name="password"></label>
    <input type="submit" value="submit">
    </form>`)
});
app.listen(3000)