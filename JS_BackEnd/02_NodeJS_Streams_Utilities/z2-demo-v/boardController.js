const fs = require('fs');

function homePage(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html',
    });

    fs.readFile('./static/index.html', (err, layout) => {
        res.write(layout.toString().replace('<%%imageboard%%>', '<p>Dynamic</p>'));
        res.end();
    });
}

function sendFile(req, res) {
    const path = req.url;
    if (path == '/style.css') {
        res.writeHead(200, {
            'Content-Type': 'text/css',
        });
        fs.createReadStream('./static/style.css').pipe(res);
    } else {
        const fileName = '.' + path;
        fs.createReadStream(fileName).pipe(res);
    }
}

module.exports = {
    homePage,
    sendFile,
};
