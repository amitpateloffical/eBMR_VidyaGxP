require("dotenv").config();
const { Sequelize } = require("sequelize");
const express = require("express");
const { connectToDB } = require("./config/db");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: "mysql",
});

app.use(cors());

app.listen(port, "0.0.0.0", async () => {
  connectToDB()
    .then(() => {
      console.log(`Server is running on http://localhost:${port}`);
    })
    .catch((e) => {
      console.log("Error in database connection", e);
    });
});
