const express = require('express');
const fs = require('fs');
const path = require('path');
const handlebars=require('express-handlebars');
const { catMiddleware } = require('./middlewares');

const app = express();

app.engine('hadnlebars', handlebars.engine());
app.set('view engine','handlebars');

// use middleware app level(vs route level)
app.use(catMiddleware);
// TOP LEVEL BEFORE ROUTES

// STATIC/PUBLIC FILES - config
app.use('/public',express.static('public'));
// middleware

// action

app.get('/', (req, res) => {
    res.send('Welcome');
});

// app.get('/img/:imgName', (req, res) => {
//     res.sendFile(path.resolve('./public/img', req.params.imgName));
// });

// middleware route level
// app.get('/cats',catMiddleware, (req, res) => {
app.get('/cats', (req, res) => {
    console.log('cat action');

    if (req.cats.length > 0) {
        res.send(req.cats.join(', '));
    } else {
        res.send('No cats');
    }
});

// not used often regexp validation for params
app.get('/cats/:catId(\\d+)', (req, res) => {
    let catId = Number(req.params.catId);
    res.send(cats[catId]);
});

// app.get('/cats/:catName',(req,res) => {
// //    TODO:
// })

// app.post('/cats/:catName', catMiddleware, (req, res) => {
app.post('/cats/:catName', (req, res) => {
    // TODO: implem posting cats
    const cat = req.params.catName;

    req.cats.push(cat);
    // console.log(cats);
    res.status(201);
    res.send(`Added ${cat} to the collection`);
});

app.put('/cats', (req, res) => {
    // TODO: implement
    res.send('Modify collection');
});

// ---------------

// ROUTER RESPONSEs-Download files
// default way(no express)
app.get('/download', (req, res) => {
    res.writeHead(200, {
        // 'content-disposition': 'attachment; fileName="sample.pdf"'
        'content-type': 'application/pdf',
        'content-disposition': 'inline',
        // to open within the page
    });

    const readStream = fs.createReadStream('sample.pdf');
    // readStream.on('data', (data) => {
    //     res.write(data);
    // });
    // readStream.on('end', () => {
    //     res.end();
    // });
    readStream.pipe(res);

    // res.download('');
});

// app.get('/expdownload', (req, res) => {
//     res.download('sample.pdf');
//     // also
//     // res.attachments('sample.pdf');
//     // doesn't add end,so can send add things
// });

// express download with inline view
// opt1
app.get('/expdownload', (req, res) => {
    res.sendFile(__dirname + '/sample.pdf');
});
// opt2
app.get('/expdownload', (req, res) => {
    res.sendFile('sample.pdf', { root: __dirname });
});
// opt3
app.get('/expdownload/:fileName', (req, res) => {
    const fileName = req.params.fileName;
    res.sendFile(`${fileName}`, { root: '.' });
});
// --------------------

// REDIRECT
// default
app.get('/redirect', (req, res) => {
    res.writeHead(302, {
        Location: '/cats',
    });
    res.end();
});

// express redirect
app.get('/expredirect', (req, res) => {
    res.redirect('/cats');
});
// --------------

app.get('/[0-9]+/', (req, res) => {
    res.send('Only number route');
});

// app.get('*',(req,res)=>{
app.all('*', (req, res) => {
    res.status(404);
    res.send('Ahhhhhh! Something went wrong');
});

app.listen(5000, () => console.log('Server is listening on port 5000...'));
