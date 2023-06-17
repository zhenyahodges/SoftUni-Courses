const http = require('http');
const fs = require('fs/promises');

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

const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    res.writeHead(200, {
        'Content-Type': 'text/html',
    });

    if (url.pathname == '/styles/site.css') {
        res.writeHead(200, {
            'Content-Type': 'text/css',
        });

        let siteCss =await fs.readFile('./styles/site.css', 'utf8');

        res.write(siteCss);
        res.end();
    } else if (url.pathname == '/cats/add-cat') {
        let addCatPage = await fs.readFile('./views/addCat.html', 'utf-8');

        res.write(addCatPage);
        res.end();
    } else {
        let homePage = await fs.readFile('./views/home.html', 'utf-8');

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
