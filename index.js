var http = require('http');
var fs = require('fs');



var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
    if (request.method === 'GET' && request.url == "/") {
        fs.readFile('./index.html', 'utf-8', function (err, data) {

            if (err) throw error;
            response.write(data);
            response.end();
        });
    } else {
        response.statusCode = 404;
        fs.readFile('./cat.jpg', function (err, data) {
            response.writeHead(404, {
                'Content-Type': 'image/jpeg'
            });
            response.end(data);
        });

    }

});
server.listen(9100);
console.log('Server running.');