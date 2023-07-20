const { subscribe } = require('./observer');

let runnigTotal=0;

subscribe('message', (data)=>{
    runnigTotal += Number(data);
    console.log('runnig total ',runnigTotal);
})