
var http = require('http');
var fs = require('fs');
var htmlFile;
fs.readFile('./htmlLink.html', function(err, data) {
    if (err){
        throw err;
    }
    htmlFile = data;
});

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(htmlFile);
  res.end();
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');