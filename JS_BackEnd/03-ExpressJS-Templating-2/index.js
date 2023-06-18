const express = require('express');

const app = express();

const cats = [];


// action

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.get('/cats', (req, res) => {
    if (cats.length > 0) {
        res.send(cats.join(', '));
    } else {
        res.send('No cats');
    }
});

// not used often regexp validation for params
app.get('/cats/:catId(\\d+)',(req,res) => {
    let catId= Number(req.params.catId);
    res.send(cats[catId]);
})

// app.get('/cats/:catName',(req,res) => {
// //    TODO:
// })

app.post('/cats/:catName',(req,res)=>{
    // TODO: implem posting cats
    const cat=req.params.catName;

    cats.push(cat);
    // console.log(cats);
    res.status(201)
    res.send(`Added ${cat} to the collection`);
});

app.put('/cats',(req,res)=>{
    // TODO: implement
    res.send('Modify collection');
});

// app.get('*',(req,res)=>{
app.all('*',(req,res)=>{
    res.status(404);
    res.send('Ahhhhhh! Something went wrong');
});

app.listen(5000, () => console.log('Server is listening on port 5000...'));
