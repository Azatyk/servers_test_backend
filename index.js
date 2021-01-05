const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

// const mysql = require("mysql");

// const db = mysql.createConnection({
//   user: "root",
//   host: "127.0.0.1",
//   password: "root",
//   database: "servers_test_db",
//   socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
//   port: "8889",
// });

app.get("/select", (req, res) => {
  //   db.query("SELECT * FROM cars", (err, result) => {
  //     if (err) {
  //       console.log(err);
  //     }

  //     res.send(result);
  //   });
  res.send([
    { id: 1, name: "Lamborgini" },
    { id: 2, name: "Porshe" },
  ]);
});

// app.get("/insert/:carName", (req, res) => {
//   const carName = req.params.carName;
//   db.query("INSERT INTO cars (name) VALUES (?)", [carName], (err, result) => {
//     if (err) {
//       console.log(err);
//     }

//     res.send(result);
//   });
// });

app.listen(3001, () => {
  console.log("Server running on port 3001...");
});
