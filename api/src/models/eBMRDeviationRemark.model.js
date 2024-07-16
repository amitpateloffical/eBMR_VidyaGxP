import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { eBMRRecord } from "./eBMRRecord.model.js";

export const eBMRDeviationRemark=sequelize.define("eBMRDeviationRemark",{
    form_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:eBMRRecord,
            key:"form_id"
        }
    },
    date:{
        type:DataTypes.STRING,
        allowNull:true
    },
    stepNo:{
        type:DataTypes.STRING,
        allowNull:true
    },
    observation:{
        type:DataTypes.STRING,
        allowNull:true
    },
    reason:{
        type:DataTypes.STRING,
        allowNull:true
    },
    recordedOn:{
        type:DataTypes.STRING,
        allowNull:true
    },
    recordedBy:{
        type:DataTypes.STRING,
        allowNull:true
    }
})

eBMRDeviationRemark.belongsTo(eBMRRecord,{foreignKey:'form_id'})
eBMRRecord.hasMany(eBMRDeviationRemark,{foreignKey:"form_id"})