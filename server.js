var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '/client/static')));

app.listen(3535, function(){
  console.log('listening on port 3535');
})