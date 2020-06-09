const http = require('http');

const port = process.env.PORT || 8000;

function callbackServer(req, res) {
  console.log('new request');
  res.writeHead(200);
  res.write('Ok');
  res.end();
}

// All in one when creating the server
/* http.createServer(callbackServer).listen(port, () => {
  console.log(`App is running in port ${port}`);
}); */


// We can create the server and put listening, but add requests on demand
var server = http.createServer().listen(port, () => {
  console.log(`App is running in port ${port}`);
});

server.on('request', callbackServer);

server.on('close', () => {
  console.log('Server is closed ...');
});

server.on('error', (err) => {
  console.log(err);
});
