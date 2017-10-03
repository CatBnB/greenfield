var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'catbnb'
});

var getSitterDetail = function(id, cb) {
  var q = 'SELECT * FROM sitterProfile JOIN Reviews ON sitterProfile.id = Reviews.sitter_id WHERE id = ' + id;
  connection.query(q, function(err, rows){
    if (err) {
      throw err;
    } else{
      cb(rows);
    }
  })
};

var getOwnerDetail = function(id,cb) {
  var q = 'SELECT * FROM ownerProfile JOIN tasksList ON ownerProfile.id = tasksList.owner_id WHERE id = ' + id;
  connection.query(q, function(err, rows){
    if (err) {
      throw err;
    } else{
      cb(rows);
    }
  })
}

var createTask = function(options, cb) {
  connection.query('INSERT INTO tasksList(owner_id, ownerMessage, startDate, endDate, status) VALUES (?,?,?,?,?)', [options.id, options.message, options.])
}
