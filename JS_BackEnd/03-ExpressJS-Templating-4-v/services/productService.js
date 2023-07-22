const data = [
    {
        id: '123',
        name: 'Oranges',
        price: 1.00,
    },
    {
        id: '1234',
        name: 'Artichoke',
        price: 2.00,
    },
];

function getList() {
    return data;
}

function getById(id) {
    return data.find((p) => p.id == id);
}

module.exports = {
    getList,
    getById
}