var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 80;

app.use(express.static('public'));

http.listen(port, function(){
  console.log('starting on port ' + port);
});

app.post("/uploadPhoto", function(req, res){
	console.log(req);
	res.send(req.files);
});