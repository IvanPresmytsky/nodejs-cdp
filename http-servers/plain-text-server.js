const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  res.writeHead(200, {
    'Content-type': 'text/plain'
  });
  res.end('Hello World');
})
.listen(8080);