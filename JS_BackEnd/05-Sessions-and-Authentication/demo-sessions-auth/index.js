const express = require('express');
const hbs = require('express-handlebars');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const userSessions = {};

const app = express();
const saltRounds = 10;
const secret = 'mysecret';

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use('/static', express.static('public'));

app.engine(
    'hbs',
    hbs.engine({
        extname: 'hbs',
    })
);

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    let token= req.cookies['session'];

    if(token){
        jwt.verify(token,secret,(err,decodedToken) => {
            if(err){
                return res.status(401).send('Invalid token')
            }
            res.render('home', {email: decodedToken.email});
        });
    }else{
        res.render('home', {email:'Guest'});
        
    }
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    if (userSessions[email]) {
        res.status(400).send('User allready exists');
    }

    const hash = await bcrypt.hash(password, saltRounds);
    userSessions[email] = {
        email,
        password: hash,
    };
    console.log(req.body);
    res.redirect('/login');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const isAuth = await bcrypt.compare(password, userSessions[email].password);
    // todo validations
    if (isAuth) {
        const token = jwt.sign({ email }, secret, { expiresIn: '2d' });

        res.cookie('session', token, {httpOnly: true});
        res.redirect('/');
    } else {
        res.status(401).send('Wrong username or password');
    }
});

app.listen(5000, () => {
    console.log('Server listening on port 5000...');
});
