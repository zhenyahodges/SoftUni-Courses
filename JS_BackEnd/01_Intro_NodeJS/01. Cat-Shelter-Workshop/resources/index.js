const http = require("http");
// const fs= require('fs')
// const path= require('path')
// const cats=require('./resources/data/cats.json')

const siteCss = require("./content/styles/site.js");

const port = 3000;

const homePage = require("./handlers/home.js");
const addBreedPage = require("./handlers/addBreed.js");
const addCatPage = require("./handlers/addCat.js");
const cats = require("./data/cats.json");

const catsTemplate = (cat) => `<li>
<img src=${cat.imageUrl} alt="Black Cat">
<h3>${cat.name}</h3>
<p><span>Breed: </span>${cat.breed}</p>
<p><span>Description: </span>${cat.description}</p>
<ul class="buttons">
    <li class="btn edit"><a href="">Change Info</a></li>
    <li class="btn delete"><a href="">New Home</a></li>
</ul>
</li>`;

const server = http
  .createServer((req, res) => {
    if (req.url == "/content/styles/site.css") {
      res.writeHead(200, {
        "content-type": "text/css",
      });
      res.write(siteCss);
    } else if (req.url == "/cats/add-breed") {
      res.writeHead(200, {
        "content-type": "text/html",
      });
      res.write(addBreedPage);
    } else if (req.url == "/cats/add-cat") {
      res.writeHead(200, {
        "content-type": "text/html",
      });
      res.write(addCatPage);
    } else {
      const homePageResult = homePage.replace(
        "{{cats}}",
        cats.map((c) => catsTemplate(c)).join("")
      );

      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.write(homePageResult);
    }
    res.end();
  })
  .listen(port);

// module.exports = (req, res) => {
//     const pathname=url.parse(req.url).pathname
//     const method=req.method

//     if(pathname=='/' && method=='GET'){

//     }else{
//         return true
//     }
// }
