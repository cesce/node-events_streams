const http = require('http');

const port = process.env.PORT || 8000;

function callbackServer(req, res) {
  console.log('new request');
  res.writeHead(200);
  res.write('Ok');
  res.end();
}

http.createServer(callbackServer).listen(port, () => {
  console.log(`App is running in port ${port}`);
});
