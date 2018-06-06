const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
  const file = fs.readFileSync('files/index.html');
  res.writeHead(200, {
   'Content-type': 'text/html'
  });
  fs.createReadStream('files/index.html').pipe(res);
})
.listen(8080);
