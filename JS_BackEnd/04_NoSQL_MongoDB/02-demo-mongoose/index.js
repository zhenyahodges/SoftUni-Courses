const express = require('express');
const hbs = require('express-handlebars');
const mongoose = require('mongoose');

const userController = require('./controllers/userController');

const app = express();

// const url = 'mongodb://127.0.0.1:27017/';
const url = 'mongodb://127.0.0.1:27017/user-list';

mongoose
    .connect(url)
    .then(() => {
        console.log('db connected');
    })
    .catch((err) => {
        console.log(`db error: ${err}`);
    });
    
// const usersCollection = db.collection('users');

app.use(express.urlencoded({ extended: false }));

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

app.use('/users', userController);

app.listen(5000, () => console.log('Server is listening on port 5000...'));
