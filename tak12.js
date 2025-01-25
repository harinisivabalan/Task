const http=require('http');

const server=http.createServer((req,res)=>
    res.end("server is running")

);
const port=3007;
server.listen(port);