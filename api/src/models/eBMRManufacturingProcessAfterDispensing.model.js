import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { eBMRRecord } from "./eBMRRecord.model.js";


export const eBMRManufacturingProcessAfterD=sequelize.define("eBMRMPAfterdispensing",{
    form_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: eBMRRecord,
          key: "form_id",
        },
      },
      sOperationNo:{
        type:DataTypes.STRING,
        allowNull:true
      },
      cleaningAfterDispensing:{
        type:DataTypes.STRING,
        allowNull:true
      },
      recordingsAndObservations:{
        type:DataTypes.STRING,
        allowNull:true
      },
      date:{
        type:DataTypes.STRING,
        allowNull:true
      },
      timeFrom:{
        type:DataTypes.STRING,
        allowNull:true
      },
      timeTo:{
        type:DataTypes.STRING,
        allowNull:true
      },
      doneBy:{
        type:DataTypes.STRING,
        allowNull:true
      },
      clenedNotCleaned:{
        type:DataTypes.STRING,
        allowNull:true
      }
})

eBMRManufacturingProcessAfterD.belongsTo(eBMRRecord,{foreignKey:'form_id'})
eBMRRecord.hasMany(eBMRManufacturingProcessAfterD,{foreignKey:'form_id'})