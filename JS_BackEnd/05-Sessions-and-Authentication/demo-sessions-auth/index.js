const express = require('express');
const cookieParser=require('cookie-parser');
const bcrypt=require('bcrypt');

const app = express();

app.use(cookieParser());

app.get('/login/:password', (req, res) => {   
 
    res.send('Hello, world!');
});

app.get('/cats', (req, res) => {
  
    res.send('Cats World');
});

app.listen(5000, () => {
    console.log('Server listening on port 5000...');
});
