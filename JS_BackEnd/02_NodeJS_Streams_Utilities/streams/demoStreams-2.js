const fs = require('fs');

const readStream = fs.createReadStream('./streams/largeFile.txt', {
    encoding: 'utf8',
    // highWaterMark: 1000,
});
const writeStream = fs.createWriteStream('./streams/copyFile.txt', {
    encoding: 'utf8',
});

// readStream.on('data', (chunk) => {
//     writeStream.write(chunk);
// });

// readStream.on('end', () => {
//     writeStream.end();
//     console.log('Finished');
// });

// shorthand for the above
readStream.pipe(writeStream);

writeStream.on('finish', () => console.log('File is saved'));
