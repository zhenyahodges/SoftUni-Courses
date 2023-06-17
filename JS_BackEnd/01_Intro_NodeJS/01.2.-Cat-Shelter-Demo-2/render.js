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

async function renderHome(catSearch) {
    let homePageHtml = await fs.readFile('./views/home.html', 'utf-8');
    let catsResult = await fs.readFile('./cats.json', 'utf-8');

    let cats = JSON.parse(catsResult);

    const catsPageResult = cats
    .filter(c=>
        catSearch? c.name.toLowerCase().includes(catSearch.toLowerCase())
        :true )
    .map((x) => catTemplate(x)).join('');

    const homePageResult = homePageHtml.replace('{{cats}}', catsPageResult);
    return homePageResult;
}

exports.renderHome=renderHome;