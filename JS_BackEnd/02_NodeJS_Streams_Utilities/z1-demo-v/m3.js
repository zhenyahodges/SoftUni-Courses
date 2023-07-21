// const { subscribe } = require('./observer');
const { emitter } = require('./observer');

let runnigTotal = 0;

// subscribe('message', (data)=>{
emitter.on('message', (data) => {
    runnigTotal += Number(data);
    console.log('runnig total ', runnigTotal);
});
