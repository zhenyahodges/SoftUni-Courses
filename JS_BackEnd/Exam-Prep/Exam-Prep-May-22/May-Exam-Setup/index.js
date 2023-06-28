const express = require('express');
const hbs = require('express-handlebars');
const { PORT } = require('./config/env');
const routes = require('./routes');

const app = express();

app.engine(
    'hbs',
    hbs.engine({
        extname: 'hbs',
    })
);
// if using src folder, set paths to views,layout etc, here top level,so no need

app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use(routes);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
