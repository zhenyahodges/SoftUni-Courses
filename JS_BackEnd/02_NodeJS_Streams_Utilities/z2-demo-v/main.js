const { homePage, sendFile } = require('./boardController');
const { createImage } = require('./createController');

function handleRequest(req, res) {
    let handler;
    let path = req.url;

    if (req.method == 'GET') {
        if (path == '/style.css' || path.slice(0, 4) == '/img') {
            handler = sendFile;

        } else if (path == '/') {
            handler = homePage;
        } 
    }

    if (typeof handler == 'function') {
        handler(req, res);
    } else {
        res.writeHead(404);
        res.write('404 not found');
        res.end();
    }
}
module.exports = {
    handleRequest,
};
