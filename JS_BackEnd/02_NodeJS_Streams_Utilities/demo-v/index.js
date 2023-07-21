// require('./m1')
// require('./m2')
// require('./m3')

// streams
// const result=[]

// process.stdin.on('data', (chunk) => {
//     result.push(chunk)
// });

// process.stdin.on('end', () => {
//     console.log(result.join(''))
// })

// STREAMS
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url == '/index.html') {
            // pipe
            // / res.writeHead(200, {
            //         'Content-Type': 'text/html',
            //     });
            // const fileStream = fs.readFile('./static/index.html');

            // ----------------
            // const fileStream = fs.createReadStream('./static/index.html');
            // res.writeHead(200, {
            //     'Content-Type': 'text/html',
            // });
            // fileStream.on('data', (chunk) => res.write(chunk));
            // fileStream.on('end', () => res.end());

            // ------------
            // const file = fs.readFile('./static/index.html', (err, file) => {
            //     res.writeHead(200, {
            //         'Content-Type': 'text/html',
            //     });
            //     res.write(file);
            //     res.end();
            // });
        } else {
            res.writeHead(404);
            res.write('404 not found');
            res.end();
        }
    } else if (req.method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const result = JSON.parse(body.join(''));
            // console.log(result);

            result.count++;

            res.writeHead(200, {
                'Content-Type': 'application/json',
            });
            res.write(JSON.stringify(result));
            console.log(result);

            res.end();
        });
    }
});

server.listen(3000);
