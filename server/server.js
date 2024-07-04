const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const User = require("./models/user");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "simplesignups",
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
