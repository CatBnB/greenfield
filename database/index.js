var mysql = require('mysql');
var geoHelper = require('../server/geoHelper');

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
  var qForSitter = 'SELECT * FROM sitterProfile WHERE id =' + id;
  var qForReview = 'SELECT review FROM Reviews WHERE sitter_id =' + id;

  connection.query(qForSitter, function(err, sitter) {
    if (err) {
      throw err;
    } else{
      connection.query(qForReview, function(err, result) {
        if (err) {
          throw err;
        } else {
          sitter[0].reviews = result;
          cb(sitter[0]);
        }
      })
    }
  })
};

var insertOwnerProfile = function(options, cb) {
  var now = new Date();
  var q = 'INSERT INTO ownerProfile values (null,?,?,?,?,?,?,?,?,?,?,?,?)';
  var values = [options.fb_userId,options.name,options.numOfCats,options.food,options.medical,
                options.personality,options.other,options.address,now,options.phone,
                options.email,options.zipcode];
  basicQuery(q, values, cb);
}

var insertSitterProfile = function(options, cb) {
  var now = new Date();
  var q = 'INSERT INTO sitterProfile values (null,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
  var values = [options.fb_userId,options.name,options.photo,options.description,
                options.comeIn,options.boarding,options.price,options.unit,now,
                options.phone,options.email,options.address,options.zipcode,options.latitude,options.longitude];
  basicQuery(q, values, cb);
}

var updateOwnerProfile = function(fb_userId,cd) {
  //when owner want to change profile
}

var getOwnerDetail = function(owner_id,cb) {
  var q = 'SELECT * FROM ownerProfile WHERE id = ' + owner_id;
  basicQuery(q, null, cb);
};

var createTask = function(options, cb) {
  var now = new Date();
  var q = 'INSERT INTO tasksList(owner_id, ownerMessage, startDate, endDate, status, sitter_id,createdAt) VALUES (?,?,?,?,?,?,?)';
  var values = [options.id, options.message, options.startDate, options.endDate,'sent', options.sitter_id, now];
  basicQuery(q, values, cb);
};

var acceptTask = function(options, cb) {
  var now = new Date()
  var q = 'UPDATE tasksList SET sitterMessage=?,status=?,finalPrice=?,acceptedAt=? WHERE id=?';
  var values = [options.sitterMessage, 'accepted', Number(options.finalPrice), now, Number(options.id)];//id is tasksList.id
  console.log('DATABASE', values);
  basicQuery(q, values, cb);
};

var cancelTask = function(task_id, cb) {
  console.log('DATABASE', task_id);
  var now = new Date();
  var q = 'UPDATE tasksList SET status="cancelled",cancelledAt=? WHERE id=?';
  var values = [now,task_id];
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
  getSitterDashboard,
  insertOwnerProfile
};
