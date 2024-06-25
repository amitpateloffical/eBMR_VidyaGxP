import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
const sequelize = new Sequelize("ebmr", process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: "mysql",
});

const connectToDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Tables synchronized");
  })
  .catch((error) => {
    console.error("Error synchronizing tables:", error);
  });

export { sequelize, connectToDB };








// const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize("ebmr", process.env.DB_USER, process.env.DB_PASS, {
//   host: process.env.DB_HOST,
//   dialect: "mysql",
// });

// const connectToDB = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };

// sequelize
//   .sync({ alter: true })
//   .then(() => {
//     console.log("Tables synchronized");
//   })
//   .catch((error) => {
//     console.error("Error synchronizing tables:", error);
//   });

// module.exports = { sequelize, connectToDB };
