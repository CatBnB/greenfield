var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'catbnb'
});

connection.connect();

var basicQuery = function(query, values, cb) {
  connection.query(query, values, function(err, result) {
    if (err) {
      throw err;
    } else{
      cb(result);
    }
  })
};



var getSitterDetail = function(id, cb) {
  var q = 'SELECT * FROM sitterProfile JOIN Reviews ON sitterProfile.id = Reviews.sitter_id WHERE id = ' + id;
  basicQuery(q, null, cb);      //result should be an arr of obj
};

var getOwnerDetail = function(owner_id,cb) {
  var q = 'SELECT * FROM ownerProfile WHERE id = ' + owner_id;
  basicQuery(q, null, cb);
};

var createTask = function(options, cb) {
  var now = new Date().getTime();
  var q = 'INSERT INTO tasksList(owner_id, ownerMessage, startDate, endDate, status, sitter_id,createdAt) VALUES (?,?,?,?,?,?)';
  var values = [options.id, options.message, options.startDate, options.endDate,'sent', options.sitter_id, now];
  basicQuery(q, values, cb);
};

var acceptTask = function(options, cb) {
  var now = new Date().getTime();
  var q = 'UPDATE tasksList SET sitterMessage=?,status="accepted",finalPrice=?, acceptedAt=? WHERE id=?';
  var values = [options.sitterMessage, options.finalPrice, now, options.id];//id is tasksList.id
  basicQuery(q, null, cb);
};

var cancelTask = function(task_id, cb) {
  var now = new Date().getTime();
  var q = 'UPDATE tasksList SET status="cancelled" cancelledAt=? WHERE id=?';
  var values = [now,id];
  basicQuery(q, values, cb);
};

var confirmTask = function(id, cb) {
  var q = 'UPDATE tasksList SET status="confirmed" WHERE id=' + id;
  basicQuery(q, null, cb);
};

var getOwnerDashboard = function(id,cb) {
  var q = 'SELECT sitterProfile.name, status FROM tasksList JOIN sitterProfile ON sitterProfile.id = tasksList.sitter_id WHERE owner_id=' + id;
  basicQuery(q, null, cb);
}

var getSitterDashboard = function(id,cb) {
  var q = 'SELECT ownerProfile.name, status FROM tasksList JOIN ownerProfile ON ownerProfile.id = tasksList.owner_id WHERE sitter_id=' + id;
  basicQuery(q, null, cb);
};

module.exports = {
  getSitterDetail,
  getOwnerDetail,
  createTask,
  acceptTask,
  cancelTask,
  confirmTask,
  getOwnerDashboard,
  getSitterDashboard
};
