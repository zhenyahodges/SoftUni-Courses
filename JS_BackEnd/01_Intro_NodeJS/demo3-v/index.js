const http = require('http');
const router = require('./router');
const {
    catalogPage,
    createPage,
    createItem,
} = require('./controllers/catalogController');
const {
    homePage,
    aboutPage,
    defaultPage,
} = require('./controllers/homeController');

router.get('/', homePage);
router.get('/about', aboutPage);
router.get('/catalog', catalogPage);
router.get('/create', createPage);
router.post('/create', createItem);
router.get('default', defaultPage);

const server = http.createServer(router.match);
// -----------------
// const server = http.createServer((req, res) => {
// console.log('Req received', req.method, req.url);

// const handler = routes[url.pathname];
// router.match(req,res)
// --------------
// if (typeof handler === 'function') {
//     handler(req, res);
// } else {
//     defaultPage(req, res);
// }
// ----------
// if (req.url == '/') {
// if (url.pathname == '/') {
//     // res.writeHead(200, ['Content-Type', 'text-html']);
//     res.write(html(homePage));
//     res.end();
// } else if (url.pathname == '/about') {
//     res.write(html(aboutPage));
//     res.end();
// } else {
//     res.statusCode = 404;
//     res.write(html(defaultPage));
//     res.end();
// }
// });

server.listen(3000);