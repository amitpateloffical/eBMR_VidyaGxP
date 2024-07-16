import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { eBMRRecord } from "./eBMRRecord.model.js";

export const eBMRRawMaterialReconciliation=sequelize.define('eBMRRawMaterialReconciliation',{
    form_id:{
        type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:eBMRRecord,
        key:"form_id"
      }
    },
    rawMaterialName:{
        type:DataTypes.STRING,
        allowNull:true
    },
    UOM:{
        type:DataTypes.STRING,
        allowNull:true 
    },
    issuedQuantity:{
        type:DataTypes.STRING,
        allowNull:true
    },
    usedQuantity:{
        type:DataTypes.STRING,
        allowNull:true
    },
    remark:{
        type:DataTypes.STRING,
        allowNull:true
    }
})

eBMRRawMaterialReconciliation.belongsTo(eBMRRecord,{foreignKey:"form_id"})
eBMRRecord.hasMany(eBMRRawMaterialReconciliation,{foreignKey:"form_id"})