const events= require('events')
let eventEmitter= new events.EventEmitter()

eventEmitter.on('click', (a,b)=>{
    console.log('A click has been detected!');
    console.log(a+''+b)
})

eventEmitter.emit('click','Hello ','world!')