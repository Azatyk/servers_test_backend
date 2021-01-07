const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const mysql = require("mysql");

const db = mysql.createConnection({
  user: "doadmin",
  host: "server-test-database-do-user-8396420-0.b.db.ondigitalocean.com",
  password: "roothxgxim581dbcmvkh",
  database: "server-test-database",
  port: "25060",
});

app.get("/select", (req, res) => {
  db.query("SELECT * FROM cars", (err, result) => {
    if (err) {
      console.log(err);
    }

    res.send(result);
  });
});

app.get("/insert/:carName", (req, res) => {
  const carName = req.params.carName;
  db.query("INSERT INTO cars (name) VALUES (?)", [carName], (err, result) => {
    if (err) {
      console.log(err);
    }

    res.send(result);
  });
});

app.listen(3001, () => {
  console.log("Server running on port 3001...");
});
