// //server creation

// //1. http module

const hostname = 'localhost';
const port = 7000;

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log('request made');

  res.setHeader('Content-Type', 'text/html');
  fs.readFile('./views/index.html', (err, fileData) => {
        if (err) {
          console.log(err);
        }
        else {
          res.write(fileData);
          res.end();
        }
      console.log(req.url);
    })

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});