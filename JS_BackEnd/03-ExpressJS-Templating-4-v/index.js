const express = require('express');
const hbr = require('express-handlebars');

const app = express();

const handlebars = hbr.create({ extname: '.hbs' });
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

app.get('/', (req,res)=>{
    // res.locals.message='Hello'
    // res.locals.response='blabla'
    res.render('home',
    {
        username:'Maya',
        title: 'Demo',
        message:'Hi',
        response: 'durabura',
        product: {
            name: 'Artichoke',
            price: 2.00
        },
        contacts:[
            {
                name: 'Ivan',
                email: 'ivan@abv.bg',
            },
            {
                name: 'Mima',
                email: 'mima@abv.bg',
            }
        ]
    }
    )
})

app.listen(3000);
