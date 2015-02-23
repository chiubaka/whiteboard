var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  console.log("Client connected.");

  ws.on('message', function(message) {
    var coordinates = JSON.parse(message);
    console.log(coordinates);
    ws.send(JSON.stringify(coordinates));
  });
});
