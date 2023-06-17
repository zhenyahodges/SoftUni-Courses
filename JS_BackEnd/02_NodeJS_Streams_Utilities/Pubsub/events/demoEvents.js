const EventEmitter = require('events');

const eventEmitter= new EventEmitter();

eventEmitter.on('sing', (songTitle)=>{
    console.log(`${songTitle}-lllll`);
});

eventEmitter.emit('sing','Nothing else matters')