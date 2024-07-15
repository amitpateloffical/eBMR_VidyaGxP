import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { eBMRRecord } from "./eBMRRecord.model.js";

export const eBMRHazopRecommendations=sequelize.define("eBMRHazopRecommendations",{
    form_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: eBMRRecord,
          key: "form_id",
        },
      },
      hazopRecommendations:{
        type:DataTypes.STRING,
        allowNull:true
      },
      category:{
        type:DataTypes.STRING,
        allowNull:true
      }
})

eBMRHazopRecommendations.belongsTo(eBMRRecord,{foreignKey:'form_id'})
eBMRRecord.hasMany(eBMRHazopRecommendations,{foreignKey:'form_id'})