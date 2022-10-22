const { html, data } = require("../util.js");
const {IncomingForm}=require('formidable')

function cataloguePage(req, res) {
  res.write(
    html(
      `<h1>Catalogue</h1>
    <p>List of items</p>
    <ul>
    ${data.map((p) => `<li date-id=${p.id}>${p.name} - ${p.color}</li>`).join("\n")}
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

function createItem(req, res) {
  console.log('create req');

  // formidable.IncomingForm(req)
  const form=new IncomingForm()
  form.parse(req, (err,fields)=>{
    const item={
      id: 'abc'+('000'+(Math.random()*9999|0)).slice(-4),
      name: fields.name,
      color: fields.color
    }
    data.push(item)

    res.statusCode = 301
    res.writeHead(301,[
      'Location',
      '/catalogue'
    ])
    
    res.end()
  })

}

// module.exports = {
//   // cataloguePage,
//   // createPage,
//   // createItem
// };

exports.createPage =createPage
exports.cataloguePage =cataloguePage
exports.createItem =createItem

