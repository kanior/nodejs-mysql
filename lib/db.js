var mysql = require('mysql');
var db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '111111',
    database : 'opentutorials'
});

module.exports = db;