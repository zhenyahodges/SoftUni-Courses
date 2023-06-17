const http = require('http');
const fs = require('fs/promises');
const { renderHome } = require('./render');

const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    // console.log(url.search.split('=')[1]);
    const catSearch=url.search.split('=')[1];

    res.writeHead(200, {
        'Content-Type': 'text/html',
    });

    if (url.pathname == '/styles/site.css') {
        res.writeHead(200, {
            'Content-Type': 'text/css',
        });

        let siteCss = await fs.readFile('./styles/site.css', 'utf8');

        res.write(siteCss);
        // res.end();
    } else if (url.pathname == '/cats/add-cat') {
        let addCatPage = await fs.readFile('./views/addCat.html', 'utf-8');

        res.write(addCatPage);
        // res.end();
    } else {
        const homePageResult=await renderHome(catSearch)
        res.write(homePageResult);
    }
    res.end();
});

server.listen(5000, () => console.log('Server is listening on port 5000...'));
