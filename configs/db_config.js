const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "",
    database: "mydb",
    password: ""
});

console.log("MySQL server connection successfully established");

module.exports = connection;