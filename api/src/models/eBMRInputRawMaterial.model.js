import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { eBMRRecord } from "./eBMRRecord.model.js";

 export const eBMRInputRawMaterial=sequelize.define("eBMRInputRawMaterial",{
    form_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: eBMRRecord,
          key: 'form_id',
        }
      },
    materialCode:{
        type:DataTypes.STRING,
        allowNull:true
    },
    materialName:{
        type:DataTypes.STRING,
        allowNull:true
    },
UOM:{
    type:DataTypes.STRING,
        allowNull:true
},
stepNo:{
    type:DataTypes.STRING,
        allowNull:true
},
standardQuantity:{
    type:DataTypes.STRING,
        allowNull:true
},
requiredQuantity:{
    type:DataTypes.STRING,
        allowNull:true
},
quantityUsed:{
    type:DataTypes.STRING,
        allowNull:true
},
ARNo:{
    type:DataTypes.STRING,
        allowNull:true
},
checkedBy:{
    type:DataTypes.STRING,
        allowNull:true
},
date:{
    type:DataTypes.STRING,
        allowNull:true
}
})

eBMRInputRawMaterial.belongsTo(eBMRRecord, { foreignKey: 'form_id' });
eBMRRecord.hasMany(eBMRInputRawMaterial, { foreignKey: 'form_id' });