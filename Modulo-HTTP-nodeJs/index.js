// var http = require('http');

// // Create a serve object:
// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('Hello Fagner'); // Write a response to the client
//     res.end('Terminanos a execucao do servido');
// }).listen('8080');

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);