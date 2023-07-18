const http = require('http');

const homePage = `<!DOCTYPE html>
<html lang="en">
<body>
<a href="/about">About</a>
<h1>Home</h1>  
</body>
</html>`;

const aboutPage = `<!DOCTYPE html>
<html lang="en">
<body>  
<a href="/">Home</a>  
<h1>About</h1>
</body>
</html>`;

const server = http.createServer((req, res) => {
    console.log('Req received');

    const url = new URL(req.url, `http://${req.headers.host}`);
    console.log(url);

    if (req.url == '/') {
        // res.writeHead(200, ['Content-Type', 'text-html']);
        res.write(homePage);
        res.end();
    } else if (req.url == '/about') {
        res.write(aboutPage);
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(3000);
