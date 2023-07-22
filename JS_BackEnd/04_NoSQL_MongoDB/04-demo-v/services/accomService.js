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
