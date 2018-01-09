const express = require('express');
const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/client/build"));
} else {
  app.use(express.static(__dirname + "/client/public"))
}

app.get('/', function(req, res){
  res.sendFile('index.html')
})

app.get('/hello', function(req, res){
  res.send('hello')
})

app.listen(5000, function(){
  console.log('server running on port 5000')
})
