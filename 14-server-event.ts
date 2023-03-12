import http from 'http';

// Using event emitter
const server = http.createServer();
// emits request event
// subscribe to it/listen for it/respond to it

server.on('request', (req, res) => {
  console.log(req.url);
  res.end('Welcome');
});

server.listen(5002);
