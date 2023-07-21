// const fs = require('fs')

// fs.readFileSync('./demo.txt', (err,data)=>{
//     if(err!=null){
//         return console.log(err.message);
//     }
//     console.log(data.toString());
// });

// promises

// const fs = require('fs').promises;

// start();

// async function start() {
//     const data = await fs.readFile('./demo.txt');
//     console.log(data.toString());
// }

//

const fs = require('fs');

// const result = fs.readdirSync('.');

// const output = [];

// for (let item of result) {
//     if (fs.statSync(`./${item}`).isDirectory()) {
//         output.push(item + ' is a directory');
//     } else {
//         output.push(item + ' is a file');
//     }
// }

// fs.writeFileSync('./summary.txt', output.join('\n'), 'utf-8');

// FS+STREAM
const stream=fs.createReadStream('./summary.txt', {
    highWaterMark: 3
});

const file= []

stream.on('data', chunk=>{
console.log(chunk.toString());
file.push(chunk);
})

stream.on('end', ()=>{
console.log(file.join(''));
console.log('completed');
})
