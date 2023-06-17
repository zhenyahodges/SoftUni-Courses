const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();

const readStream = fs.createReadStream('./03-streams/largeFile.txt', {
    encoding: 'utf8',
    // highWaterMark: 1000,
});
// const writeStream = fs.createWriteStream('./streams/copyFile.txt', {
const writeStream = fs.createWriteStream('./03-streams/copyFileZipped3.gz', {
    encoding: 'utf8',
});

// readStream.on('data', (chunk) => {
//     writeStream.write(chunk);
// });

// readStream.on('end', () => {
//     writeStream.end();
//     console.log('Finished');
// });

// shorthand for the above:
// readStream.pipe(writeStream);

// adding transform stream:
readStream.pipe(gzip).pipe(writeStream);

writeStream.on('finish', () => console.log('File is saved'));
