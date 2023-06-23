const express = require('express');
const cookieParser=require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {   
    res.cookie('test', 'Some test value')
    res.cookie('test2', 'Some test value2')
    res.send('Hello, world!');
});

app.get('/cats', (req, res) => {
    let cookies= req.cookies;
    console.log(cookies);
    res.send('Cats World');
});

app.listen(5000, () => {
    console.log('Server listening on port 5000...');
});
