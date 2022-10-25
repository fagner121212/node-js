var http = require('http');

// console.log('Escrevendo fora do escopo do create server');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);