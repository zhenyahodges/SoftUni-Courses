const express = require('express');
const { initializeDB } = require('./config/database');
const routes = require('./routes');
const app = express();

require('./config/handlebars')(app);

// old way
// require('./routes')(app);
// routes(app);

// 1-hbs
// app.use('/static', express.static('public'));
app.use('/static', express.static('public'));
// express mw
app.use(express.urlencoded({ extended: false }));

app.use(routes);

initializeDB()
    .then(() => {
        app.listen(5000, () => console.log('Server listening on port 5000...'));
    })
    .catch((err) => {
        console.log(`Cannot connect to db: ${err}`);
    });
