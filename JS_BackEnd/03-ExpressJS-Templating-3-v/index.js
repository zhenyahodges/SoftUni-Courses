// require('express')().listen(3000);
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello there');
});

app.listen(3000);
