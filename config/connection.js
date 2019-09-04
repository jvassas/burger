var mysql = require("mysql");

connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Java1012jcv23!",
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as ID " + connection.threadId);
});
module.exports = connection;