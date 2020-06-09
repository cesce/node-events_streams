const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 8000;

function callbackLogServer(req, res) {
  console.log('uploading file ...');
  var newFile = fs.createWriteStream('img_test.jpg');
  var fileBytes = req.headers['content-length'];
  var uploadedBytes = 0;

  req.on('readable', () => {
    var chunk = null;
    while(null !== ( chunk = req.read() )) {
      uploadedBytes += chunk.length;
      var progress = (uploadedBytes / fileBytes) * 100;
      res.write("progress: " + parseInt(progress, 10) + "%\n");
      console.log("progress: " + parseInt(progress, 10) + "%");
    }
  });

  req.pipe(newFile);

  req.on('end', () => {
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
