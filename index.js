const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});

    const path = req.url;
    
    res.end(path);
}).listen(8080);