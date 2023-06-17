const fs = require('fs');

const readStream = fs.createReadStream('./03-streams/largeFile.txt', {
    encoding: 'utf8',
    highWaterMark: 1000,
});
const writeStream = fs.createWriteStream('./03-streams/copyFile.txt', {
    encoding: 'utf8',
});

// readStream.on('data',(chunk)=>{
//     console.log(chunk);
//     console.log('-------------------------');
// });

// readStream.on('end', ()=>{
//     console.log('Finished');
// })

writeStream.on('finish', ()=>console.log('File is saved'));

writeStream.write('Hello World');
writeStream.write('\n');
writeStream.write('Hello World 2');

writeStream.end();
