import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { eBMRRecord } from "./eBMRRecord.model.js";


export const eBMRProcessSafetyStudyDetails=sequelize.define("eBMRProcessSafetyStudyDetails",{
    form_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: eBMRRecord,
          key: "form_id",
        },
    },
    test:{
        type:DataTypes.STRING,
        allowNull:true
    },
    result:{
        type:DataTypes.STRING,
        allowNull:true
    },
    remark:{
        type:DataTypes.STRING,
        allowNull:true
    }
})

eBMRProcessSafetyStudyDetails.belongsTo(eBMRRecord,{foreignKey:'form_id'})
eBMRRecord.hasMany(eBMRProcessSafetyStudyDetails,{foreignKey:'form_id'})