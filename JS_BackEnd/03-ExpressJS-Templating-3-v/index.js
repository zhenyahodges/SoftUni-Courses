// require('express')().listen(3000);
const express = require('express');
const catalogController= require('./catalogController')
const createController= require('./createController')

const app = express();

app.get('/', (req, res) => {
    // res.send('Hello there');
    res.sendFile(__dirname+'/index.html');
});

app.use('/create', createController)
app.use('/catalog',catalogController)

app.get('/data', (req,res)=>{
    res.json([
        {
            name:'Peter',
            age:25
        },
        {
            name:'John',
            age: 35
        }
    ])
})

app.all('*', (req, res) => {
    res.status(404).send('404 custom');
});

app.listen(3000);
