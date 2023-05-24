//server creation

//1. http module


const http = require('http');

const hostname = 'localhost';
const port = 7000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Starting Backend</h1>');
  res.write('<h2>Hello World</h2>');
  res.write('<h4>....</h4>');
  res.end();
//   console.log(req.method);
  console.log(req.url);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});