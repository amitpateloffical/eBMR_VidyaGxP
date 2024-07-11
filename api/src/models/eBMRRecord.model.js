import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const eBMRRecord = sequelize.define("eBMRRecord", {
  productName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  documentNo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  productCode: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  effectiveDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  stage: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  supersedesNo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  batchNo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pageNo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  standardBatchSize: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  actualBatchSize: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  batchStartingDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  time: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  batchComplitionDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  _time: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  expectedOutput: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  actualOutput: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  expectedYield: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  actualYield: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  manufacturingDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  expiry_Retest_Date: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  packingAndStorageCondition: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

 