const { html, data } = require('../utils');

function catalogPage(req, res, catalog) {
    res.write(
        html(
            `
    <h1>Catalog</h1>
    <p>List of Products</p>
    <ul>
        ${data.map((p) => `<li>${p.name} - ${p.color}</li>`).join('\n')}</ul>
    `,
            'Catalog'
        )
    );
    res.end();
}

function createPage(req, res) {
    res.write(
        html(`    
    <h1>Create product</h1>
    <form method="POST" action="/create">
        <label>Name: <input type="text" name="name"></label>
        <label>Colour: <select name="colour">
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            </select>
        </label>
        <input type="submit" value="Create">
    </form>
    `)
    );
    res.end();
}

function createItem(req,res) {
    console.log('create req');
    res.end();
}

module.exports = {
    catalogPage,
    createPage,
    createItem,
};
