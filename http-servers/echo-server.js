const http = require('http');

const server = http.createServer((req, res) => {
  req.on('error', (err) =>{
    console.error(err);
  });
  res.on('error', (err) => {
    console.error(err);
  });

  req.pipe(res);
});

server.listen(8080);

/*
How to test:
> node http-servers/echo-server.js&
> echo 'hello echo server!'|curl --no-buffer --data-binary  @-  'http://localhost:8080'
*/