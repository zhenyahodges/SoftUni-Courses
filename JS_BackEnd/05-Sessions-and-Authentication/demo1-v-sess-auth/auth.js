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
    if(req.session.user){
        res.send(`<p>Hello, ${req.session.user}!</p>`);

    }else{

        res.send(`<p>Hello,guest, please <a href="/login">login here</a></p>`);
    }
});

app.get('/login', (req, res) => {
    res.send(`<form action="login" method="post">
    <label>Username: <input type="text" name="username"></label>
    <label>Password: <input type="password" name="password"></label>
    <input type="submit" value="Login">
    </form>`)
});

app.post('/login',(req, res) => {
    console.log(req.session);
    req.session.user='Peter'
    res.redirect('/');
})
app.listen(3000)