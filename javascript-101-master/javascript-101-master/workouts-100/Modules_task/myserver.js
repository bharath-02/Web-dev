var http = require('http');
http.createServer(function (req, res) {
  res.write('Hello GUVI');
  res.end();
}).listen(8080);