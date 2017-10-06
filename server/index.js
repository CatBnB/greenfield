var express = require('express');
var bodyParser = require('body-parser');
var getCoordinatesFromInput = require('./geoHelper.js').getCoordinatesFromInput;
var dbUtil = require('../database/index.js');
// var database = require('../database/index.js');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var hi = __dirname + '/../client/dist'
console.log('hi:', hi)
app.use(express.static(__dirname + '/../react-client/dist'));

//GET route
app.get('/owner/sitterdetail/:id', function(req, res) {
  var id = req.params.id;
  dbUtil.getSitterDetail(id)
    .then((result) => {
      res.send(result);
    })
})

app.get('/owner/dashboard/:id', function(req, res) {
  var id = req.params.id;
  dbUtil.getOwnerDashboard(id)
  .then((result) =>
    res.send(result[0])
  );
})

app.get('/sitter/dashboard/:id', function(req, res) {
  var id = req.params.id;
  dbUtil.getSitterDashboard(id)
  .then((result) =>
    res.send(result[0])
  );
})

app.post('/sitter', (req, res) => {
  var address = req.body.address;
  getCoordinatesFromInput(address)
    .then(coords => {
      req.body.latitude = coords[0];
      req.body.longitude = coords[1];
    })
    .then((result) => {
      dbUtil.insertSitterProfile(req.body)
    })
    .then(results => res.send())
    .catch(err => console.log(err));
})


app.post('/owner/sendtask', function(req, res) {
  var options = req.body;
  dbUtil.createTask(options)
    .then((result) => {
    res.status(201).send('ok');
  });
});


app.post('/sitter/accepttask', function(req, res) {
  var options = req.body;
  dbUtil.acceptTask(options)
    .then((result) => {
    res.status(201).send('accept');
  });
});

app.post('/task/cancel', function(req, res) {
  var options = req.body;
  dbUtil.cancelTask(options.id)
    .then((result) => {
    res.status(201).send('cancel');
  })
});

app.post('/task/confirm', function(req, res) {
  var options = req.body;
  dbUtil.confirmTask(options.id)
    .then((result) => {
    res.status(201).send('confirm');
  });
});

app.listen(3000, function() {
  console.log('Server started and listening on port 3000!!!!!');
});
