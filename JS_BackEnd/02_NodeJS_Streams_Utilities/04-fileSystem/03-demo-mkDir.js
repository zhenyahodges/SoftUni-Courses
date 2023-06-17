const fs = require('fs/promises');

// create directory

fs.mkdir('./test').then(() => {
    console.log('finished');
});

fs.mkdir('./test2',err=>{
    if(err){
        console.log(err);
        return;
    }
}).then(() => {
    console.log('finished');
});