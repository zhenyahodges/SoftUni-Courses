const http= require('http');

const server=http.createServer((re,res)=>{
    console.log('Req received');
})

server.listen(3000)

