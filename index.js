const express = require('express');
const app = express();
const Quiz = require('./models/quiz')
const hello = 123;

app.use(express.static(__dirname + '/build'));

app.get('/api/quiz/:id', function(req, res) {
  Quiz.findById(req.params.id, function(err, quiz) {
    if (err) {
      res.json({error: "Not Found"})
    }else {
      res.json(quiz)
    }
  })
})

app.get('/', function(req, res){
  res.sendFile('index.html')
})

app.listen(5000, function(){
  console.log('server running on port 5000')
})
