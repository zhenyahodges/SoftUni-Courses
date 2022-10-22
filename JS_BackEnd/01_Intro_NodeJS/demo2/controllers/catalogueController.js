const { html } = require("../util.js");

function cataloguePage(req, res) {
    res.write(html(`<h1>Catalogue</h1>
    <p>List of items</p>`, 'Catalogue'));
    res.end();
  }
  
  module.exports={
    cataloguePage
  }