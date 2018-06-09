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
  const file = require('../files/product.js');
  res.writeHead(200, {
    'Content-type': 'application/json'
  });
  res.end(JSON.stringify(file));
})
.listen(8080);