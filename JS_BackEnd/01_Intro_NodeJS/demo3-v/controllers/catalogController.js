const { html,data } = require('../utils');

function catalogPage(req, res, catalog) {
    res.write(
        html(
            `
    <h1>Catalog</h1>
    <p>List of Products</p>
    <ul>
        ${data.map(p=>
            `<li>${p.name} - ${p.color}</li>`
            ).join('\n')}</ul>
    `,
            'Catalog'
        )
    );
    res.end();
}

module.exports = {
    catalogPage,
};
