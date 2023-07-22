const fs = require('fs');

const filename = './models/data.json';
const data = JSON.parse(fs.readFileSync(filename));

async function persist() {
    return new Promise((resolve, reject) => {
        fs.writeFileSync(filename, JSON.stringify(data), (err) => {
            if ((err = null)) {
                resolve();
            } else {
                reject(err);
            }
        });
    });
}

function getAll() {
    return data;
}

function getById(id) {
    return data.find((i) => i.id == id);
}

async function create(roomData) {
    const room = {
        id: generateId(),
        name: roomData.name,
        description: roomData.description,
        city: roomData.city,
        beds: Number(roomData.beds),
        price: Number(roomData.price),
    };

    data.push(room);
    await persist;

    return room;
}

function generateId() {
    return ('000000' + (Math.random() * 999999 | 0).toString(16)).slice(-6);
}

module.exports = {
    getAll,
    getById,
    create,
};
