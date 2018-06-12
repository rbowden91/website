var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

http.listen(7622, function(){
  console.log('listening on *:7622');
});
