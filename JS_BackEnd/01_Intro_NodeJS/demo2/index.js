const http = require("http");
const router = require("./router.js");
const { cataloguePage, createPage } = require("./controllers/catalogueController.js");
const {
  homePage,
  aboutPage,
  defaultPage,
} = require("./controllers/homeController.js");

// const homePage = `<!DOCTYPE html>
// <html lang="en">
// <body>
// <a href="/about">About</a>
//     <h1>Welcome to my site!</h1>
// </body>
// </html>`;

// const aboutPage = `<!DOCTYPE html>
// <html lang="en">
// <body>
// <a href="/">Home</a>
//     <h1>About us...</h1>
// </body>
// </html>`;

// function homePage(req, res) {
//   res.write(html(`<h1>Home Page</h1>
//   <p>Welcome to my site!</p>`));
//   res.end();
// }

// function aboutPage(req, res) {
//   res.write(html(`<h1>About us...</h1>`));
//   res.end();
// }

// function cataloguePage(req, res) {
//   res.write(html(`<h1>Catalogue</h1>
//   <p>List of items</p>`, 'Catalogue'));
//   res.end();
// }

// function defaultPage(req, res) {
//   res.statusCode=404
//   res.write(html(`<h1>404 Not Found</h1>`));
//   res.end();
// }

router.register("/",homePage);
router.register('/about',aboutPage)
router.register('/cataloguePage', cataloguePage)
router.register('/create', createPage)
router.register('default', defaultPage)

// const routes = {
//   "/": homePage,
//   "/about": aboutPage,
//   "/cataloguePage": cataloguePage,
// };

const server = http.createServer(router.match)
//  => {
//   // console.log("Req received");
//   // console.log(req)

//   // console.log(req.method);
//   // console.log(req.headers);
//   // console.log(req.url);

//   console.log(">>>", req.method, req.url);
//   router.match(req,res)

  // const url=new URL(req.url, 'http://localhost:3000')

  // const url = new URL(req.url, `http://${req.headers.host}`);

  // console.log(url);

  //   if (req.url == "/") {
  //     // res.writeHead(200, ['Content-Type', 'text/plain'])
  //     // res.write('<h1>');
  //     // res.write('Hello, world!');
  //     // res.write('</h1>');
  //     res.write(homePage);
  //     res.end();
  //   } else if (req.url == "/about") {
  //     res.write(aboutPage);
  //     res.end();
  //   } else {
  //     res.statusCode = 404;
  //     res.end();
  //   }
  // });

  // const handler = routes[url.pathname];

  // if (typeof handler == "function") {
  //   handler(req, res);
  //   // res.write(html(handler));
  //   // res.end();
  // } else {
  //   defaultPage(req, res);
  //   // res.statusCode = 404;
  //   // res.write(html(defaultPage));
  //   // res.end();
  // }

  //   if (url.pathname == "/") {
  //     // res.writeHead(200, ['Content-Type', 'text/plain'])
  //     // res.write('<h1>');
  //     // res.write('Hello, world!');
  //     // res.write('</h1>');

  //     // res.write(homePage);
  //     res.write(html(homePage));
  //     res.end();
  //   } else if (url.pathname == "/about") {
  //     // res.write(aboutPage);
  //     res.write(html(aboutPage));
  //     res.end();
  //   } else {
  //     res.statusCode = 404;
  //     res.write(html(defaultPage));
  //     res.end();
  //   }
// });

server.listen(3000);

// function html(body,title='Demo') {
//   return `<!DOCTYPE html>
//   <html lang="en">
//   <head>
//   <title>${title}</title>
//   </head>
//   <body>
//   <nav>
//   <ul>
//   <li><a href ="/">Home</li>
//   <li><a href ="/about">About</li>
//   <li><a href ="/cataloguePage">Catalogue</a></li>
//   </ul>
//     </nav>
//       ${body}
//   </body>
//   </html>`;
// }
