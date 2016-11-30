var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = 80;

app.use(express.static('public'));

http.listen(port, function(){
  console.log('starting on port ' + port);
});