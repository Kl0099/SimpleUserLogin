const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const User = require("./models/user");
app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "simplesignups",
});
// create user
app.post("/users", async (req, res) => {
  try {
    const { name, phone, email, address } = req.body;
    const newUser = await User.create({
      name,
      phone,
      email,
      address,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.listen(3000, () => {
  console.log("listening on port 3000");
});
