const express = require("express");
const mysql = require("mysql");
const app = express();

const connection = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "password",
  database: process.env.MYSQL_DATABASE || "test",
});

app.get("/", (req, res) => {
  var sql = "INSERT INTO People(people_name) VALUES('Vinicius Campelo')";
  
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

  connection.query("SELECT * FROM People", (err, rows) => {
    if (err) {
      res.json({
        success: false,
        err,
      });
    } else {
      res.json({
        success: true,
        message: '<h1>Full Cycle Rocks!</h1>',
        rows,
      });
    }
  });
});

app.listen(3000, () => console.log("listining on port 3000"));