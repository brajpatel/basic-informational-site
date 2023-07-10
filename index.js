const https = require('https');
const fs = require('fs');

const server = https.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello, World</h1>');
})

server.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})