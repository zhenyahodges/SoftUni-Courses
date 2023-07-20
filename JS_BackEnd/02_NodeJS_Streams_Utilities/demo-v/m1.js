const { subscribe } = require('./observer');

subscribe('message', (data) => {
    console.log('m1: ' + data);
});
