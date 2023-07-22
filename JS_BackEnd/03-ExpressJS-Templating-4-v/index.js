const express = require('express');
const hbr = require('express-handlebars');

const app = express();
hbr.create({ extname: '.hbs' });
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

app.listen(3000);