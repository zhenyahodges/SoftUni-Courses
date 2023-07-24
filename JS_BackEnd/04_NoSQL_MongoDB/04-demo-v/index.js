const express = require('express');
const hbs = require('express-handlebars').create({
    extname: '.hbs',
});
const mongoose = require('mongoose');
const homeController = require('./controllers/homeController');
const articleController = require('./controllers/articleController');

const connStr = 'mongodb://127.0.0.1:27017/testdb2';

start();

async function start() {
    const app = express();
    app.engine('.hbs', hbs.engine);
    app.set('view engine', '.hbs');

    // da obraboti body-to
    app.use(express.urlencoded({extended: true}));

    app.use(homeController);
    app.use('/articles',articleController)

    await mongoose.connect(connStr, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    console.log('DB ready');

    app.listen(3000, () => console.log('Server listening on port 3000'));
}
