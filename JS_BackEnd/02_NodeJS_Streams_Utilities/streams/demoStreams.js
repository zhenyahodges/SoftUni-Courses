const fs=require('fs');

const readStream=fs.createReadStream('./streams/largeFile.txt', {encoding: 'utf8', highWaterMark: 1000});

readStream.on('data',(chunk)=>{
    console.log(chunk);
    console.log('-------------------------');
});

readStream.on('end', ()=>{
    console.log('Finished');
})