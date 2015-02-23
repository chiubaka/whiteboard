var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 8080 });

wss.broadcast = function(data) {
  wss.clients.forEach(function(client) {
    client.send(data);
  });
}

wss.on('connection', function connection(ws) {
  console.log("Client connected.");

  ws.on('message', function(message) {
    wss.broadcast(message);
  });
});
