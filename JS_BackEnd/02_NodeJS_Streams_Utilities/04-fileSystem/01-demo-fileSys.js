const fs = require('fs');

// synchronous
// const text = fs.readFileSync('./fileSystem/text.txt', { encoding: 'utf-8' });
// console.log(text);

// asynchronous
fs.readFile('./fileSystem/text.txt', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});
