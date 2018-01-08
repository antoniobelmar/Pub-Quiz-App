const express = require('express');
const app = express();

app.use(express.static(__dirname + '/build'));
app.get('/', function(req, res){
  res.sendFile('index.html')
})

app.listen(5000, function(){
  console.log('server running on port 5000')
})
