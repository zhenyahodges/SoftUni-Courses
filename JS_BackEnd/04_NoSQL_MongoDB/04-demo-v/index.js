const express = require('express');
const hbs = require('express-handlebars').create({
    extname: '.hbs',
});

const app=express()
app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')

app.get('/', (req,res)=>{
    res.render('home')
})

app.listen(3000)