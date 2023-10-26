const mysql  = require("mysql");
const connection = mysql.createConnection({
    host:"acw2033ndw0at1t7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user:"z9ib3wmn6qkbzkeb",
    password:"feysx3qb8b2ovu4w",
    database:"b8bcz2qrm4p4c6yj",
    port:3306
})

module.exports = connection;

