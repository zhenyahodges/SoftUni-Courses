const { html } = require("../util.js");

function homePage(req, res) {
    res.write(html(`<h1>Home Page</h1>
    <p>Welcome to my site!</p>`));
    res.end();
  }
  
  function aboutPage(req, res) {
    res.write(html(`<h1>About us...</h1>`));
    res.end();
  }

  function defaultPage(req, res) {
    res.statusCode=404
    res.write(html(`<h1>404 Not Found</h1>`));
    res.end();
  }

  module.exports={
    homePage,
    aboutPage,
    defaultPage
  }