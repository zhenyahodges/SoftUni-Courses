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
    // console.log(url.search.split('=')[1]);

    res.writeHead(200, {
        'Content-Type': 'text/html',
    });

    if (url.pathname == '/styles/site.css') {
        res.writeHead(200, {
            'Content-Type': 'text/css',
        });

        let siteCss = await fs.readFile('./styles/site.css', 'utf8');

        res.write(siteCss);
        res.end();
    } else if (url.pathname == '/cats/add-cat') {
        let addCatPage = await fs.readFile('./views/addCat.html', 'utf-8');

        res.write(addCatPage);
        res.end();
    } else {
        let homePageHtml = await fs.readFile('./views/home.html', 'utf-8');
        let catsResult = await fs.readFile('./cats.json', 'utf-8');

        let cats = JSON.parse(catsResult);

        const catSearch=url.search.split('=')[1];

        const catsPageResult = cats
        .filter(c=>
            catSearch? c.name.toLowerCase().includes(catSearch.toLowerCase())
            :true )
        .map((x) => catTemplate(x)).join('');

        const homePageResult = homePageHtml.replace('{{cats}}', catsPageResult);
        res.write(homePageResult);
        res.end();
    }
});

server.listen(5000, () => console.log('Server is listening on port 5000...'));
