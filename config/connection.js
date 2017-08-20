var mysql = require("mysql");
// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "303261",
  database: "burgers_db"
});
// connect to the mysql server and sql database
connection.connect(function(err) {
     if (err) {
    console.log("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
