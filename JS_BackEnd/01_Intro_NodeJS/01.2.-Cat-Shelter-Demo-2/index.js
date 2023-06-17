const http = require('http');
const fs = require('fs/promises');

const homePage = require('./views/home');
const siteCss = require('./styles/site');
const addCatPage = require('./views/addCat');
// const cats = require('./cats.json');

const catTemplate = (cat) => `
<li>
<img src="${cat.imageUrl}">
<h3>${cat.name}</h3>
<p><span>Breed: </span>${cat.breed}t</p>
<p><span>Description: </span>${cat.description}</p>
<ul class="buttons">
    <li class="btn edit"><a href="">Change Info</a></li>
    <li class="btn delete"><a href="">New Home</a></li>
</ul>
</li>`;

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    res.writeHead(200, {
        'Content-Type': 'text/html',
    });

    if (url.pathname == '/styles/site.css') {
        res.writeHead(200, {
            'Content-Type': 'text/css',
        });
        res.write(siteCss);
        res.end();

    } else if (url.pathname == '/cats/add-cat') {
        res.write(addCatPage);
        res.end();
    } else {
        fs.readFile('./cats.json').then((text) => {
            let cats = JSON.parse(text);
            const homePageResult = homePage.replace(
                '{{cats}}',
                cats.map((x) => catTemplate(x)).join('')
                // cats.map(catTemplate)
            );
            res.write(homePageResult);
            res.end();
        });
    }
});

server.listen(5000, () => console.log('Server is listening on port 5000...'));
