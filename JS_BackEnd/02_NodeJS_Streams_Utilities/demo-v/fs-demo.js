const fs = require('fs');

fs.readFile('./demo.txt', (err,data)=>{
    if(err!=null){
        return console.log(err.message);
    }
    console.log(data.toString());
});

