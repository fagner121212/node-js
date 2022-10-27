var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('teste.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen('8080');

/*
Uso comum para o modulo File System
.ler arquivos
.criar arquivos
.atualizar arquivos
.renomear arquivos
*/

// 