const { html,data } = require("../util.js");

function cataloguePage(req, res) {
    res.write(html(`<h1>Catalogue</h1>
    <p>List of items</p>
    <ul>
    ${data.map(p=>`<li>${p.name} - ${p.color}</li>`).join('\n')}
    </ul>
    
    `, 'Catalogue'));
    res.end();
  }
  
  module.exports={
    cataloguePage
  }