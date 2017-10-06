var mysql = require('mysql');
var geoHelper = require('../server/geoHelper');
var db = require('mysql-promise')();

db.configure({
	"host": "localhost",
	"user": "root",
	"password": "",
	"database": "catbnb"
});

var getSitterDetail = function(id) {
  var qForSitter = 'SELECT * FROM sitterProfile WHERE id =' + id;
  var qForReview = 'SELECT review FROM Reviews WHERE sitter_id =' + id;

  return db.query(qForSitter)
    .then((result) => {
      const sitter = result[0][0];
      return db.query(qForReview)
        .then((reviews) => {
          sitter.reviews = reviews[0];
          console.log(sitter);
          return sitter;
        })
    });
};

var insertOwnerProfile = function(options, cb) {
  var now = new Date();
  var q = 'INSERT INTO ownerProfile values (null,?,?,?,?,?,?,?,?,?,?,?,?)';
  var values = [options.fb_userId,options.name,options.numOfCats,options.food,options.medical,
                options.personality,options.other,options.address,now,options.phone,
                options.email,options.zipcode];
  return db.query(q, values);
};

var insertSitterProfile = function(options, cb) {
  var now = new Date();
  var q = 'INSERT INTO sitterProfile values (null,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
  var values = [options.fb_userId,options.name,options.photo,options.description,
                options.comeIn,options.boarding,options.price,options.unit,now,
                options.phone,options.email,options.address,options.zipcode,options.latitude,options.longitude];
  return db.query(q, values);
};

var updateOwnerProfile = function(fb_userId,cd) {
  //when owner want to change profile
};

//not finished
var getOwnerDetail = function(owner_id) {
  var q = 'SELECT * FROM ownerProfile WHERE id = ' + owner_id;
  return db.query(q);
};

var createTask = function(options) {
  var now = new Date();
  var q = 'INSERT INTO tasksList(owner_id, ownerMessage, startDate, endDate, status, sitter_id,createdAt) VALUES (?,?,?,?,?,?,?)';
  var values = [options.id, options.message, options.startDate, options.endDate,'sent', options.sitter_id, now];
  return db.query(q, values);
};

var acceptTask = function(options) {
  var now = new Date()
  var q = 'UPDATE tasksList SET sitterMessage=?,status=?,finalPrice=?,acceptedAt=? WHERE id=?';
  var values = [options.sitterMessage, 'accepted', Number(options.finalPrice), now, Number(options.id)];//id is tasksList.id
  return db.query(q, values);
};

var cancelTask = function(task_id) {
  var now = new Date();
  var q = 'UPDATE tasksList SET status="cancelled",cancelledAt=? WHERE id=?';
  var values = [now,task_id];
  return db.query(q, values);
};

var confirmTask = function(id) {
  var q = 'UPDATE tasksList SET status="confirmed" WHERE id=' + id;
  return db.query(q);
};

var getOwnerDashboard = function(id) {
  var q = 'SELECT sitterProfile.name, status FROM tasksList JOIN sitterProfile ON sitterProfile.id = tasksList.sitter_id WHERE owner_id=' + id;
  return db.query(q);
};

var getSitterDashboard = function(id) {
  var q = 'SELECT ownerProfile.name, status FROM tasksList JOIN ownerProfile ON ownerProfile.id = tasksList.owner_id WHERE sitter_id=' + id;
  return db.query(q);
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
  insertOwnerProfile,
  insertSitterProfile
};
