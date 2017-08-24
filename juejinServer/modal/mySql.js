var Client = require('easymysql');
var mysql = Client.create({
  'maxconnections' : 10
});
 
mysql.addserver({
  'host' : 'localhost',
  'user' : 'root',
  'database' : 'juejin'
});

module.exports = mysql;