const express = require('express');
const hbs = require('express-handlebars');

const app = express();
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
    res.render('home');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', (req, res) => {
    console.log(req.body);
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.listen(5000, () => {
    console.log('Server listening on port 5000...');
});
