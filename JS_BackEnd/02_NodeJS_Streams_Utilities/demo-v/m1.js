// const { subscribe } = require('./observer');
const { emitter } = require('./observer');

// subscribe('message', (data) => {
emitter.on('message', (data) => {
    console.log('m1: ' + data);
});
