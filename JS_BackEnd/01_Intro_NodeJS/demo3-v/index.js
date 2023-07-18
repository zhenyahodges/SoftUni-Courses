const http = require('http');

const homePage = `
<h1>Home</h1>`;

const aboutPage = `
<h1>About</h1>`;

const catalogPage = `
<h1>Catalog</h1>`;

const defaultPage = `
<h1>404 Not Found</h1>`;

const routes = {
    '/': homePage,
    '/about': aboutPage,
    '/catalog': catalogPage,
};

const server = http.createServer((req, res) => {
    console.log('Req received', req.method, req.url);

    const url = new URL(req.url, `http://${req.headers.host}`);
    console.log(url);

    const page = routes[url.pathname];

    if (page != undefined) {
        res.write(html(page));
        res.end();
    } else {
        res.statusCode = 404;
        res.write(html(defaultPage));
        res.end();
    }
    // if (req.url == '/') {
    // if (url.pathname == '/') {
    //     // res.writeHead(200, ['Content-Type', 'text-html']);
    //     res.write(html(homePage));
    //     res.end();
    // } else if (url.pathname == '/about') {
    //     res.write(html(aboutPage));
    //     res.end();
    // } else {
    //     res.statusCode = 404;
    //     res.write(html(defaultPage));
    //     res.end();
    // }
});

server.listen(3000);

function html(body) {
    return `<!DOCTYPE html>
<html lang="en">
<body>  
    <nav>
        <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        </ul>
    </nav>
${body}
</body>
</html>`;
}
