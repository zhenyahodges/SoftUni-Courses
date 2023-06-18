const express = require('express');
const fs = require('fs');

const app = express();

const cats = [];

// action

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.get('/cats', (req, res) => {
    if (cats.length > 0) {
        res.send(cats.join(', '));
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

app.post('/cats/:catName', (req, res) => {
    // TODO: implem posting cats
    const cat = req.params.catName;

    cats.push(cat);
    // console.log(cats);
    res.status(201);
    res.send(`Added ${cat} to the collection`);
});

app.put('/cats', (req, res) => {
    // TODO: implement
    res.send('Modify collection');
});

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

app.get('/expdownload', (req, res) => {
    res.download('sample.pdf');
    // also
    // res.attachments('sample.pdf');
    // doesn't add end,so can send add things

    // res.sendFile('sample.pdf');
    // s callback added
});

app.get('/[0-9]+/', (req, res) => {
    res.send('Only number route');
});

// app.get('*',(req,res)=>{
app.all('*', (req, res) => {
    res.status(404);
    res.send('Ahhhhhh! Something went wrong');
});

app.listen(5000, () => console.log('Server is listening on port 5000...'));
