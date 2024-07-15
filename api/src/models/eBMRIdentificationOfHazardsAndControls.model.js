import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { eBMRRecord } from "./eBMRRecord.model.js";

export const eBMRIdentificationOfHazardsAndControls = sequelize.define(
  "eBMRIdentificationOfHAC",
  {
    form_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: eBMRRecord,
        key: "form_id",
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    antidote: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    specificHazard: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    precaution:{
        type:DataTypes.STRING,
        allowNull:true
    }
  }
);

eBMRIdentificationOfHazardsAndControls.belongsTo(eBMRRecord,{foreignKey:'form_id'})
eBMRRecord.hasMany(eBMRIdentificationOfHazardsAndControls,{foreignKey:'form_id'})