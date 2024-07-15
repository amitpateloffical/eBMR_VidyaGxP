import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { eBMRRecord } from "./eBMRRecord.model.js";

export const eBMRPersonalProtectiveEquipment=sequelize.define('eBMRPersonalProtectiveEquipment',{
    form_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: eBMRRecord,
          key: "form_id",
        },
    },
    chemicalName:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    handProtection:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    eyeProtection:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    respiratoryprotection:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    footShoes:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    bodyProtection:{
        type:DataTypes.STRING,
        allowNull:true,
    }
})

eBMRPersonalProtectiveEquipment.belongsTo(eBMRRecord,{foreignKey:'form_id'})
eBMRRecord.hasMany(eBMRPersonalProtectiveEquipment,{foreignKey:'form_id'
})
