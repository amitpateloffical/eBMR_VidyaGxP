import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { eBMRRecord } from "./eBMRRecord.model.js";


export const eBMRReadAndUnderstood=sequelize.define('eBMRReadAndUnderstood',{
    form_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: eBMRRecord,
          key: "form_id",
        },
    },
    nameOfPerson:{
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
})

eBMRReadAndUnderstood.belongsTo(eBMRRecord,{foreignKey:'form_id'})
eBMRRecord.hasMany(eBMRReadAndUnderstood,{foreignKey:'form_id'})