const express = require('express');
const { PORT } = require('./config/env');
const hbs = require('express-handlebars');

const app = express();

app.engine('hbs', hbs.engine({
    extname: 'hbs',
}))

app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
