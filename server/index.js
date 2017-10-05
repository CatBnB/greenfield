var express = require('express');
var bodyParser = require('body-parser');
var getCoordinatesFromInput = require('./geoHelper.js').getCoordinatesFromInput;
// var database = require('../database/index.js');
var app = express();
app.use(bodyParser.json());
var hi = __dirname + '/../client/dist'
console.log('hi:', hi)
app.use(express.static(__dirname + '/../react-client/dist'));




//GET route
app.get('/sitters', (req, res) => {
  // var bound = req.params;
  // db lookup sitters in bound
  res.status(200);
  res.send();
});


//POST route
app.post('/owner', (req, res) => {
  /*TODO: write to database*/
})

app.post('/sitter', (req, res) => {
  var {address} = req.body;
  getCoordinatesFromInput(address).then(coords => {
                                          req.body.altitude = coords[0];
                                          req.body.longitude = coords[1];
                                        })
                                  .then(/*TODO: write to database*/)
                                  .then(results => res.send())
                                  .catch(err => console.log(err));
})


app.listen(3000, function() {
  console.log('Server started and listening on port 3000!!!!!');
});
