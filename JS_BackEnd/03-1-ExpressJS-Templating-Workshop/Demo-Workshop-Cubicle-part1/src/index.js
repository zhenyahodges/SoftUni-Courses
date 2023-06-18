const express=require('express');

const app= express();

app.use('/static', express.static('public'));

app.get('/',(req, res)=>{
    res.send('Hello, world')
});

app.listen(5000, ()=>console.log('Server listening on port 5000...'));