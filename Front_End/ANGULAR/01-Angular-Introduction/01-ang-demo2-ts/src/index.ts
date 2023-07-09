import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('About');
});

app.listen(8080, () => {
    console.log('Server is listening on 8080...');
});
