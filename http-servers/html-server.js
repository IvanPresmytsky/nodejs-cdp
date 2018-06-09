const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
  req.on('error', (err) =>{
    console.error(err);
  });
  res.on('error', (err) => {
    console.error(err);
  });
  res.writeHead(200, {
   'Content-type': 'text/html'
  });
  fs.createReadStream('files/index.html').pipe(res);
})
.listen(8080);
