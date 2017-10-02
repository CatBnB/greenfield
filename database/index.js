var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',  //@TODO: Change user to your local mysql instance username
  password : '',   //@TODO: Change password to your local mysql instance password
  database : 'CatBnB'    //@TODO: Ensure database name matches the database you created
});

var selectAll = function(callback) {

};

var insertOne = function(data, callback) {
  
};

module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;
