const express = require('express');
const app = express();
const http = require('http');
const url = require('url');
const WebSocket = require('ws');

const server = http.createServer(app);
const wss = new WebSocket.Server({ server })

const Quiz = require('./models/quiz')

app.get('/api/quiz/:id', function(req, res) {
  Quiz.findById(req.params.id, function(err, quiz) {
    if (err) {
      res.json({error: "Not Found"})
    } else {
      res.json(quiz)
    }
  })
})

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/client/build"));
} else {
  app.use(express.static(__dirname + "/client/public"))
}

wss.on('connection', function connection(ws, req){
  console.log('person joined');
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

app.get('/api/quizzes/1', function(req, res){
  res.send({
    "name": "the quiz of theo",
    "questions": [{
      "text": "what is the capital of France?",
      "options": ["Brussels", "Paris", "Oslo"]
    }]
  })
})

server.listen(5000, function(){
  console.log('server running on port 5000');
});

