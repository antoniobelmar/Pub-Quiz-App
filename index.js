const express = require('express');
const app = express();
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

app.get('/', function(req, res){
  res.sendFile('index.html')
})

app.get('/api/quizzes/1', function(req, res){
  res.send({
    "name": "the quiz of theo",
    "questions": [{
      "text": "what is the capital of France?",
      "options": ["Brussels", "Paris", "Oslo"]
    }]
  })
})

app.listen(5000, function(){
  console.log('server running on port 5000')
})
