var express = require('express');
var bodyParser = require('body-parser');
// var database = require('../database/index.js');
var app = express();
app.use(bodyParser.json());
var hi = __dirname + '/../client/dist'
console.log('hi:', hi)
app.use(express.static(__dirname + '/../react-client/dist'));




//GET route
// app.get('/', function(req, res) {
// 	  res.status(200);
// 	  res.();
// })
// //POST route
// app.post('/', function(req, res) {
// 	  res.status(201);
// 	  res.send();
// })

app.listen(3000, function() {
  console.log('Server started and listening on port 3000!!!!!');
});

