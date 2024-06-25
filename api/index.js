import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectToDB } from "./src/config/db.js";
import cors from "cors";
import testrouter from "./src/routes/testRoute.js";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";
import userRouter from "./src/routes/userRouter.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT || 3000;

app.use(cors());
app.use("/test", testrouter);
app.use("/user", userRouter);

app.use(
  helmet({
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);

app.listen(port, "0.0.0.0", async () => {
  try {
    await connectToDB();
    console.log(`Server is running on http://localhost:${port}`);
  } catch (e) {
    console.log("Error in database connection", e);
  }
});

// require("dotenv").config();
// const { Sequelize } = require("sequelize");
// const express = require("express");
// const { connectToDB } = require("./config/db");
// const app = express();
// const cors = require("cors");
// const port = process.env.PORT || 3000;

// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
//   host: process.env.DB_HOST,
//   dialect: "mysql",
// });

// app.use(cors());

// app.listen(port, "0.0.0.0", async () => {
//   connectToDB()
//     .then(() => {
//       console.log(`Server is running on http://localhost:${port}`);
//     })
//     .catch((e) => {
//       console.log("Error in database connection", e);
//     });
// });
