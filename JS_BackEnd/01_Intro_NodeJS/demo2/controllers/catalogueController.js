const { html, data } = require("../util.js");

function cataloguePage(req, res) {
  res.write(
    html(
      `<h1>Catalogue</h1>
    <p>List of items</p>
    <ul>
    ${data.map((p) => `<li>${p.name} - ${p.color}</li>`).join("\n")}
    </ul>    
    `,
      "Catalogue"
    )
  );
  res.end();
}

function createPage(req, res) {
  res.write(html(`
  <h1>Create Item</h1>
  <form method="POST" action="/create">
    <label>Name: <input type="text" name="name"></label>
    <label>Color: <select name="color">
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
    </label>
   <input type="submit" value="Create">
  </form>`,
      "Create New Product"
    )
  );
  res.end();
}

// function createItem(req, res) {
//   //handle post req
// }

module.exports = {
  cataloguePage,
  createPage
};
