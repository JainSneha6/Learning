const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'root',
    database: 'productdb'
});

module.exports = db.promise();