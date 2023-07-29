const app = require('express')();
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(cookieParser());
app.use(
    session({
        secret: 'my secret',
        saveUninitialized: true,
        resave: false,
        cookie: {
            secure: false,
        },
    })
);

// app.get('/', (req, res) => {
//     console.log(req.cookies);
//     res.cookie('cookieParser', 1);
//     res.cookie('multipleCookies', 'abc');
//     res.send('Hello');
// });

app.get('/', (req,res)=>{
    console.log(req.session)
    req.session.visited=(req.session.visited || 0)+1
    res.send('Visit counter: '+req.session.visited);
})

app.listen(3000);
