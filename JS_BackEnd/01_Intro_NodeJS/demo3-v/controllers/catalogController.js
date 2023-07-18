const { html } = require('../utils');

function catalogPage(req, res, catalog) {
    res.write(
        html(
            `
    <h1>Catalog</h1>`,
            'Catalog'
        )
    );
    res.end();
}

module.exports = {
    catalogPage,
};
