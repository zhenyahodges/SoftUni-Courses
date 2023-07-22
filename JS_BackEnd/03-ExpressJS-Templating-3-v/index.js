// require('express')().listen(3000);
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello there');
});

app.route('/create')
.get((req,res)=>{
    res.send('what');
})
.post((req, res) => {
    res.status(201).send('post request');
});

app.get('/catalog', (req, res) => {
    res.send('Catalog');
});

app.get('/catalog/:productId', (req, res) => {
    console.log(req.params.productId);
    res.send('Product details');
});

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
