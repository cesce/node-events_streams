const http = require('http');

const port = process.env.PORT || 8000;

function callbackEchoServer(req, res) {
  console.log('new request in callbackEchoServer');
  res.writeHead(200);
  req.pipe(res);

  req.on('data', (chunk) => {
    console.log(chunk.toString());
    res.write(chunk);
  });
}

function callbackEchoServerNoPipe(req, res) {
  res.writeHead(200);

  req.on('data', (chunk) => {
    console.log('new request in callbackEchoServerNoPipe');
    console.log(chunk.toString());
    res.write(chunk);
  });

  req.on('close', () => {
    res.end();
  });
}

// All in one when creating the server
/* http.createServer(callbackEchoServer).listen(port, () => {
  console.log(`App is running in port ${port}`);
}); */


// We can create the server and put listening, but add requests on demand
var server = http.createServer().listen(port, () => {
  console.log(`App is running in port ${port}`);
});

server.on('request', callbackEchoServer);
server.on('request', callbackEchoServerNoPipe);

server.on('close', () => {
  console.log('Server is closed ...');
});

server.on('error', (err) => {
  console.log(err);
});
