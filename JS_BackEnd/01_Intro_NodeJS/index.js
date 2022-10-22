const http = require("http");

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

const homePage = `
<a href="/about">About</a>
    <h1>Welcome to my site!</h1>`;

const aboutPage = `
<a href="/">Home</a>
    <h1>About us...</h1>`;

const defaultPage = `
    <h1>404 Not Found</h1>`;

const routes ={
      '/': homePage,
      '/about': aboutPage
    }

const server = http.createServer((req, res) => {
  console.log("Req received");
  // console.log(req)

  // console.log(req.method);
  // console.log(req.headers);
  // console.log(req.url);

  console.log(">>>", req.method, req.url);

  // const url=new URL(req.url, 'http://localhost:3000')
  const url = new URL(req.url, `http://${req.headers.host}`);

  console.log(url);

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

  const page=routes[url.pathname]

  if(page!=undefined){
    res.write(html(page));
    res.end();
  }else{
    res.statusCode = 404;
    res.write(html(defaultPage));
    res.end();
  }

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
});

server.listen(3000);

function html(body) {
  return `<!DOCTYPE html>
  <html lang="en">
  <body>
      ${body}
  </body>
  </html>`
}
