const mysql = require("mysql");

if (process.env.JAWSDB_URL){
  var connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else{
  var connection = mysql.createConnection({
  host: "localhost",
  port: process.env.PORT || 3306,
  user: "root",
  password: "bootcamp19",
  database: "Project3_db"
});
}

module.exports = connection