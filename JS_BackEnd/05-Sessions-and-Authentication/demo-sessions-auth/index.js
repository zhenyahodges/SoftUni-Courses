const express = require('express');
const hbs = require('express-handlebars');
const bcrypt = require('bcrypt');
const userSessions={

}
const app = express();
const saltRounds=10;
app.use(express.urlencoded({ extended: false }));

app.use('/static', express.static('public'));

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

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register',async (req, res) => {
    const {email,password}=req.body
    if(userSessions[email]){
        res.status(400).send('User allready exists')
    }

    const hash= await bcrypt.hash(password, saltRounds)
    userSessions[email]={
        email,
        password: hash,
    }
    console.log(req.body);
    res.redirect('/login');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login',async (req,res)=>{
    const {email,password}=req.body;
   const isAuth= await bcrypt.compare(password, userSessions[email].password);
    // todo validations
    if(isAuth){
        res.redirect('/');
    }else{
        res.status(401).send('Wron username or password');
    }
})

app.listen(5000, () => {
    console.log('Server listening on port 5000...');
});
