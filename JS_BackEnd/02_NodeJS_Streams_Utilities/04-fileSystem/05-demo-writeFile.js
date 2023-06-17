const fs = require('fs/promises');

const data =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis earum numquam ipsum mollitia?';

fs.writeFile('./04-fileSystem/text2.txt', data, { encoding: 'utf-8' })
    .then(() => {
        console.log('finish');
    })
    .catch((err) => {
        console.log(err);
    });
