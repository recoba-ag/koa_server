const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "",
    password: ""
});

console.log("MySQL server connection successfully established");

module.exports = connection;