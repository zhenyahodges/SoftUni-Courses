// const { publish } = require('./observer');
const { emitter } = require('./observer');

let counter = 0;

setInterval(() => {
    // publish('message',counter);
    emitter.emit('message', counter);
    counter++;
}, 2000);
