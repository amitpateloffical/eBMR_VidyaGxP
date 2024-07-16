import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { eBMRRecord } from "./eBMRRecord.model.js";


export const eBMRMSAPOperation=sequelize.define('eBMRMSAPOperation',{
    form_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: eBMRRecord,
          key: "form_id",
        },
      },
      grossContainerNo:{
        type:DataTypes.STRING,
        allowNull:true
      },
      weight:{
        type:DataTypes.STRING,
        allowNull:true
      },
      tareWeight:{
        type:DataTypes.STRING,
        allowNull:true
      },
      netWeight:{
        type:DataTypes.STRING,
        allowNull:true
      },
      doneBy:{
        type:DataTypes.STRING,
        allowNull:true
      },
      sealByNo:{
        type:DataTypes.STRING,
        allowNull:true
      },
      sealedByQC:{
        type:DataTypes.STRING,
        allowNull:true
      },
      checkedBy:{
        type:DataTypes.STRING,
        allowNull:true
      }
})

eBMRMSAPOperation.belongsTo(eBMRRecord,{foreignKey:'form_id'})
eBMRRecord.hasMany(eBMRMSAPOperation,{foreignKey:'form_id'})