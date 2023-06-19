const express = require('express');
const hbs = require('express-handlebars');

const app = express();
const url = 'mongodb://127.0.0.1:27017/';

// const usersCollection = db.collection('users');

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



app.listen(5000, () => console.log('Server is listening on port 5000...'));
