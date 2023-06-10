const http = require('http');
const homePage = require('./views/home');
const siteCss = require('./styles/site');
const addCatPage = require('./views/addCat');
const cats = require('./cats.json');

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

    // if (req.url == '/styles/site.css') {
    if (url.pathname == '/styles/site.css') {
        // console.log('sty;les');
        res.writeHead(200, {
            'Content-Type': 'text/css',
        });
        res.write(siteCss);
        // } else if (req.url == '/cats/add-cat') {
    } else if (url.pathname == '/cats/add-cat') {
        res.write(addCatPage);
    } else {
        const homePageResult = homePage.replace(
            '{{cats}}',
            cats.map((x) => catTemplate(x)).join('')
            // cats.map(catTemplate)
        );
        res.write(homePageResult);
    }

    res.end();
});

server.listen(5000, () => console.log('Server is listening on port 5000...'));
