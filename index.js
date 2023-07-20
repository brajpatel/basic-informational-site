// ===== WITH EXPRESS =====
const path = require('path');
const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})



app.listen(port, () => console.log(`Listening on port:${port}`));


// ===== WITHOUT EXPRESS =====
// const http = require('http');
// const fs = require('fs');

// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'});

//     let path = req.url;
//     let fileName;
//     switch(path) {
//         case '/':
//             fileName = './index.html';
//             break;

//         case '/about':
//             fileName = './about.html';
//             break;

//         case '/contact-me':
//             fileName = './contact-me.html';
//             break;

//         default:
//             fileName = './404.html';
//     }
    
//     fs.readFile(fileName, (err, content) => {
//         if(err) {
//             console.error(err);
//         }
//         else {
//             res.end(content, 'utf8');
//         }
//     })
// }).listen(8080);