const http = require("http");
// const fs= require('fs')
// const path= require('path')
// const cats=require('./resources/data/cats.json')

const siteCss= require('./content/styles/site.js')

const port = 3000;

const homePage = require("./handlers/home.js");

const server = http
  .createServer((req, res) => {
    if (req.url == "/content/styles/site.css") {
      res.writeHead(200, {
        "content-type": "text/css",
      });
      res.write(siteCss)
    } else {
      res.writeHead(200, {
        "Content-Type": "text/html",
      });

      res.write(homePage);
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
