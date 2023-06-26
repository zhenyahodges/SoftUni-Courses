const express = require('express');
const { initializeDB } = require('./config/database');
const routes = require('./routes');
const app = express();
const cookieParser = require('cookie-parser');
const { auth } = require('./middlewares/authMiddleware');

require('./config/handlebars')(app);

app.use('/static', express.static('public'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(auth);
app.use(routes);

initializeDB()
    .then(() => {
        app.listen(5000, () => console.log('Server listening on port 5000...'));
    })
    .catch((err) => {
        console.log(`Cannot connect to db: ${err}`);
    });
