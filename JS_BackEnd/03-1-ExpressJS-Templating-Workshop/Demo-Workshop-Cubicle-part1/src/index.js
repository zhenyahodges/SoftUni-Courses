const express=require('express');
const handlebars= require('express-handlebars');
const routes=require('./routes');

const app= express();

// old way
// require('./routes')(app); 
// routes(app);

// 1-hbs
// app.use('/static', express.static('public'));
app.use('/static', express.static('src/public'));

// option 2 css change/ all req.s- not ideal solution?!
// app.use(express.static('public'));

// 2-hbs
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
// 3-hbs
app.set('view engine', 'hbs');

// 4-views change
app.set('views', './src/views');
// 4+views=>layouts folder=> main.hbs file
// 2nd option=> json change

app.use(routes);

app.listen(5000, ()=>console.log('Server listening on port 5000...'));