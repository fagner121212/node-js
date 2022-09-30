var http = require('http');

http.createServer(function (req, res) {
    res.end('Oi')
}).listen(5000);

console.log("O servido rodando!");