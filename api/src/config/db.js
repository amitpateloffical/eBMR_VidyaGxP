import { Sequelize } from "sequelize";
// import dotenv from "dotenv";
import config from "./config.json" assert {type: 'json'};




const sequelize = new Sequelize(config.development.dbName,  
  config.development.username,
  config.development.password,
  {
    dialect: config.development.dialect,
    host: config.development.host,
  }
);

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