var http = require('http');
var fs = require('fs');
const commentBox = require('commentbox.io');
commentBox('5660172965904384-proj');
http.createServer(function (req, res) {
    fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
}).listen(8080);

// commentBox('5754860016238592-proj');