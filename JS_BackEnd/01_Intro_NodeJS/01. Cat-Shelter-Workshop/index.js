const http= require('http')
const fs= require('fs')
const path= require('path')
const cats=require('./resources/data/cats.json')

const port=3000

http.createServer((req,res)=>{
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })

    res.write('Hello, world')
    res.end()
}).listen(port)

module.exports = (req, res) => {
    const pathname=url.parse(req.url).pathname
    const method=req.method

    if(pathname=='/' && method=='GET'){
        
    }else{
        return true
    }
}