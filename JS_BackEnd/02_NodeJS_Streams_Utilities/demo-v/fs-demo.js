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

const result = fs.readdirSync('.');

for(let item of result) {
    if(fs.statSync(`./${item}`).isDirectory()){
        console.log(item, 'is a directory');
    }else{
        console.log(item,'is a file');
    }
}

