const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 8000;

function callbackLogServer(req, res) {
  console.log('log entry ...');
  var newFile = fs.createWriteStream('log.txt', {flags: 'a', encoding: 'utf8'});
  var logDate = new Date();
  newFile.write(`\n${logDate}:`);
  req.pipe(newFile);

  req.on('end', () => {
    res.writeHead(200);
    res.end('Ok');
  });
}

// We can create the server and put listening, but add requests on demand
var server = http.createServer().listen(port, () => {
  console.log(`App is running in port ${port}`);
});

server.on('request', callbackLogServer);

server.on('close', () => {
  console.log('Server is closed ...');
});

server.on('error', (err) => {
  console.log(err);
});
