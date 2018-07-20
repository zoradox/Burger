// Set up MySQL connection.
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection = mysql.createPool(process.env.JAWSDB_URL);
} else if (process.env.CLEARDB_DATABASE_URL) {
  connection = mysql.createPool(process.env.CLEARDB_DATABASE_URL);
} else {
  connection = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
  });
}

/*
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
*/

// Export connection for our ORM to use.
module.exports = connection;
