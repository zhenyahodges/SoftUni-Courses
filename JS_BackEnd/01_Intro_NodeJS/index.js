const http = require("http");

const homePage = `<!DOCTYPE html>
<html lang="en">
<body>
<a href="/about">About</a>
    <h1>Hello, world!</h1>
</body>
</html>`;

const aboutPage = `<!DOCTYPE html>
<html lang="en">
<body>
<a href="/">Home</a>
    <h1>About</h1>
</body>
</html>`;

const server = http.createServer((req, res) => {
  console.log("Req received");
  // console.log(req)
  
  console.log(req.method);
  console.log(req.headers);
  console.log(req.url);

  // const url=new URL(req.url, 'http://localhost:3000')
  const url=new URL(req.url, `http://${req.headers.host}`)
 
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


if (url.pathname == "/") {
  // res.writeHead(200, ['Content-Type', 'text/plain'])
  // res.write('<h1>');
  // res.write('Hello, world!');
  // res.write('</h1>');
  res.write(homePage);
  res.end();
} else if (url.pathname == "/about") {
  res.write(aboutPage);
  res.end();
} else {
  res.statusCode = 404;
  res.end();
}
});

server.listen(3000);
