const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./services/data.json'));
function getList() {
    return data;
}

function getById(id) {
    return data.find((p) => p.id == id);
}

async function create(name, price) {
    const id = 'asff' + ('0000' + ((Math.random() * 99999) | 0)).slice(4);
    data.push({
        id,
        name,
        price,
    });

    return new Promise((resolve,reject) => {
        fs.writeFile(
            './services/hh/data.json',
            JSON.stringify(data, null, 2),
            (err) => {
                if(err==null){
                    resolve()
                }else{
                    reject(err)
                }
            }
        );
    });
}

module.exports = {
    getList,
    getById,
    create,
};
