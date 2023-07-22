const express = require('express');
const hbr = require('express-handlebars');

const homeController = require('./controllers/homeController');
const catalogController = require('./controllers/catalogController');
const createController = require('./controllers/createController');

const app = express();

const handlebars = hbr.create({ extname: '.hbs' });
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

app.use('/static', express.static('static'));

app.use(homeController);
app.use('/catalog', catalogController);
app.use('/create', createController);

app.listen(3000);
