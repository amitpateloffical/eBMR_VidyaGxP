import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { eBMRRecord } from "./eBMRRecord.model.js";

export const eBMRManufacturingProcess = sequelize.define(
  "eBMRManufacturingProcess",
  {
    form_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: eBMRRecord,
        key: "form_id",
      },
    },
    materialCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    batchNo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    timeFrom: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    timeTo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dispensingNetWeight: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dispensingTareWeight: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dispensingGrossWeight: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    doneBy: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }
);

eBMRManufacturingProcess.belongsTo(eBMRRecord, { foreignKey: "form_id" });
eBMRRecord.hasMany(eBMRManufacturingProcess, { foreignKey: "form_id" });
