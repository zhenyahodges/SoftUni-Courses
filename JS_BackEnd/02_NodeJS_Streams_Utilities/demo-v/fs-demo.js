// const fs = require('fs')

// fs.readFile('./demo.txt', (err,data)=>{
//     if(err!=null){
//         return console.log(err.message);
//     }
//     console.log(data.toString());
// });

const fs = require('fs').promises;

start();

async function start() {
    const data = await fs.readFile('./demo.txt');
    console.log(data.toString());
}
