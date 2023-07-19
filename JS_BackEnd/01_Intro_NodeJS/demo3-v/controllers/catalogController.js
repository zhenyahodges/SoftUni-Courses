const { IncomingForm } = require('formidable');
const { html, data } = require('../utils');

function catalogPage(req, res) {
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
        <label name="name">Name: <input type="text" name="name"></label>
        <label name="color">Color: <select name="color">
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
function createItem(req, res) {
    // console.log('create req');

    const form = new IncomingForm();
    form.parse(req, (err, fields) => {
        // needs error checking here!

        // console.log(fields);
        const item = {
            id: ('asd0000' + ((Math.random() * 9999) | 0)).slice(0, 8),
            name: fields.name,
            color: fields.color,
        };
        data.push(item);

        // redirect header
        res.writeHead(301, ['Location', '/catalog']);
        res.end();
    });
}

module.exports = {
    catalogPage,
    createPage,
    createItem,
};
