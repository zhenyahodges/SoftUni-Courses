const handlebars = require('express-handlebars');

module.exports = (app) => {
    // option 2 css change/ all req.s- not ideal solution?!
    // app.use(express.static('public'));

    // 2-hbs
    app.engine(
        'hbs',
        handlebars.engine({
            extname: 'hbs',
        })
    );
    // 3-hbs
    app.set('view engine', 'hbs');

    // 4-views change
    app.set('views', './src/views');
    // 4+views=>layouts folder=> main.hbs file
    // 2nd option=> json change
};
