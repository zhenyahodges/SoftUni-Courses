const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');

const app = express();
const password = 'mysecretpassword';
// NB!
const saltRounds = 10;
const hashedPassword ='$2b$10$tQW2Nrx1Gg8NSJO1qvf9C.P8RLKrTwJ3ejNHIOYkBOskDh133B03u'

app.use(cookieParser());

app.get('/hash/:password?', async (req, res) => {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashs = await bcrypt.hash(req.params.password, salt);

    console.log(salt);
    console.log(hashs);
    res.send('Hello, world!');
});

app.get('/login/:password?', async (req, res) => {
    const isValidPass = await bcrypt.compare(req.params.password, hashedPassword);
    isValidPass? res.send('Successful login') : res.send('Invalid pass');
});

app.get('/cats', (req, res) => {
    res.send('Cats World');
});

app.listen(5000, () => {
    console.log('Server listening on port 5000...');
});
