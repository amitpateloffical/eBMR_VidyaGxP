import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { eBMRRecord } from "./eBMRRecord.model.js";

export const eBMRCriticalPPForQuality=sequelize.define('eBMRCriticalPPForQuality',{
    form_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: eBMRRecord,
          key: "form_id",
        },
    },
    bMRStepNo:{
        type:DataTypes.STRING,
        allowNull:true
    },
    criticalProcessParameter:{
        type:DataTypes.STRING,
        allowNull:true
    },
    justification:{
        type:DataTypes.STRING,
        allowNull:true
    }
})

eBMRCriticalPPForQuality.belongsTo(eBMRRecord,{foreignKey:'form_id'})
eBMRRecord.hasMany(eBMRCriticalPPForQuality,{foreignKey:'form_id'})