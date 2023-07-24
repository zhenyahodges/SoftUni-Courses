const express = require('express');
const hbs = require('express-handlebars').create({
    extname: '.hbs',
});
const mongoose=require('mongoose');
const connStr= 'mongodb://127.0.0.1:27017/testdb2';

start()

async function start() {
    const app = express();
    app.engine('.hbs', hbs.engine);
    app.set('view engine', '.hbs');

    app.get('/', (req, res) => {
        res.render('home');
    });

   await mongoose.connect(connStr, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    console.log('DB ready');

    app.listen(3000, () => console.log('Server listening on port 3000'));
}
