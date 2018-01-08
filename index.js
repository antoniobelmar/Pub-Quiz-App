const express = require('express');
const app = express();
const http = require('http');
const url = require('url');
const WebSocket = require('ws');

const server = http.createServer(app);
const wss = new WebSocket.Server({ server })

let leader;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/websockettest.html')
});

wss.on('connection', function connection(ws, req){
  const location = url.parse(req.url, true);
  ws.identifier = wss.clients.size;

  ws.on('message', function incoming(message) {
    wss.clients.forEach(function each(client){
      if (client.readyState === WebSocket.OPEN){
        if(ws.identifier == 1){
          client.send(message);
        };
      };
    });
  });

  ws.on('error', function(error){
    console.log('one person has left');
  })
});

server.listen(5000, function(){
  console.log('server running on port 5000');
})
