const express = require('express');
const hbs = require('express-handlebars');
const { MongoClient } = require('mongodb');

const app = express();
const url = 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(url);

const db = client.db('user-list');

client.connect().then(() => console.log('connected to db'));

const usersCollection = db.collection('users');

app.engine(
    'hbs',
    hbs.engine({
        extname: 'hbs',
    })
);
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/users', async (req, res) => {
    let users = await usersCollection.find().toArray();
    // let users = await usersCollection.find({firstName: 'Marin'}).toArray();
    res.render('users', {users});
});

app.listen(5000, () => console.log('Server is listening on port 5000...'));
