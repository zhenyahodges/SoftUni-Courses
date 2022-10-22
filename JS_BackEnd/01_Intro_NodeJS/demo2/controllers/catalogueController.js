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

function createPage(req,res){
  res.write(`
  <h1>Create Item</h1>
  <form>
  <label>Name: <input type="text" name="name"></label>
  <label>Color: <select name="color">
  <option value="red">Red</option>
  <option value="green">Green</option>
  <option value="blue">Blue</option>
  </label>
  </form`)
  res.end()
}
  
  module.exports={
    cataloguePage,
    createPage
  }