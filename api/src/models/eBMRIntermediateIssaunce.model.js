import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { eBMRRecord } from "./eBMRRecord.model.js";

export const eBMRIntermediateIssuance = sequelize.define(
  "eBMRIntermediateIssuance",
  {
    form_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: eBMRRecord,
        key: "form_id",
      },
    },
    inputQuantity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    materialCode:{
        type:DataTypes.STRING,
        allowNull:true
    },
    batchNumber:{
        type:DataTypes.STRING,
        allowNull:true
    },
    actualIssuedQuantity:{
        type:DataTypes.STRING,
        allowNull:true
    },
    sign:{
        type:DataTypes.STRING,
        allowNull:true
    },
    date:{
        type:DataTypes.STRING,
        allowNull:true
    }
  }
);

eBMRIntermediateIssuance.belongsTo(eBMRRecord,{foreignKey:'form_id'})
eBMRRecord.hasMany(eBMRIntermediateIssuance,{foreignKey:'form_id'})
