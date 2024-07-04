// models/user.js

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "mysql",
});

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
});

// Sync the model with the database
sequelize
  .sync()
  .then(() => {
    console.log("User table has been created.");
  })
  .catch((error) => {
    console.error("Unable to create table:", error);
  });

module.exports = User;
