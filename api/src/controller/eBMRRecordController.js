import { sequelize } from '../config/db.js';
import { eBMRInputRawMaterial } from '../models/eBMRInputRawMaterial.model.js';
import { eBMRPackingMaterial } from '../models/eBMRPackingMaterial.model.js';
import { eBMRRecord } from '../models/eBMRRecord.model.js';

export const InserteBMRRecord = async (req, res) => {
  const {
    productName,
    documentNo, 
    productCode,
    effectiveDate,
    stage,
    supersedesNo,
    batchNo,
    pageNo,
    standardBatchSize,
    actualBatchSize,
    batchStartingDate,
    time,
    batchComplitionDate,
    _time,
    expectedOutput,
    actualOutput,
    expectedYield,
    actualYield,
    manufacturingDate,
    expiry_Retest_Date,
    packingAndStorageCondition,
    InputRawMaterialArray,
    packingMaterialArray
  } = req.body;

  // Start transaction
  const transaction = await sequelize.transaction();

  try {
    // Create eBMRRecord
    const eBMRRecords = await eBMRRecord.create({
      productName,
      documentNo,
      productCode,
      effectiveDate,
      stage,
      supersedesNo,
      batchNo,
      pageNo,
      standardBatchSize,
      actualBatchSize,
      batchStartingDate,
      time,
      batchComplitionDate,
      _time,
      expectedOutput,
      actualOutput,
      expectedYield,
      actualYield,
      manufacturingDate,
      expiry_Retest_Date,
      packingAndStorageCondition
    }, { transaction });

    // Insert InputRawMaterialArray if it exists
    if (Array.isArray(InputRawMaterialArray) && InputRawMaterialArray.length > 0) {
      const bMRRecords = InputRawMaterialArray.map((record) => ({
        form_id: eBMRRecords?.form_id,
        materialCode: record.materialCode,
        materialName: record.materialName,
        UOM: record.UOM,
        stepNo: record.stepNo,
        standardQuantity: record.standardQuantity,
        requiredQuantity: record.requiredQuantity,
        quantityUsed: record.quantityUsed,
        ARNo: record.ARNo,
        checkedBy: record.checkedBy,
        date: record.date
      }));
      await eBMRInputRawMaterial.bulkCreate(bMRRecords, { transaction });
    }

    if(Array.isArray(packingMaterialArray)&&packingMaterialArray.length>0){
        const packingMaterial=packingMaterialArray.map((record)=>({
            form_id: eBMRRecords?.form_id,
            materialCode: record.materialCode,
            materialName: record.materialName,
            UOM: record.UOM,
            stepNo: record.stepNo,
            standardQuantity: record.standardQuantity,
            requiredQuantity: record.requiredQuantity,
            quantityUsed: record.quantityUsed,
            ARNo: record.ARNo,
            checkedBy: record.checkedBy,
            date: record.date
        }))
      await eBMRPackingMaterial.bulkCreate(packingMaterial, { transaction });

    }

    // Commit transaction
    await transaction.commit();

    // Send success response
    res.status(200).json({
      error: false,
      message: "eBMR Created successfully", 
    });
  } catch (error) {
    // Rollback transaction on error
    await transaction.rollback();
    console.error('Transaction error:', error);

    // Send error response
    res.status(500).json({
      error: true,
      message: "Failed to create eBMR",
    });
  }
};
// export const InsertInputRawMaterial=async(req,res)=>{
//     const {materialCode,materialName,UOM,stepNo,standardQuantity,requiredQuantity,quantityUsed,ARNo,checkedBy,date,form_id}=req.body;

//     const InputRawMaterial=await eBMRInputRawMaterial.create({
//         form_id:eBMRRecord.form_id,
//         materialCode:materialCode,
//         materialName:materialName,
//         UOM:UOM,
//         stepNo:stepNo,
//         standardQuantity:standardQuantity,
//         requiredQuantity:requiredQuantity,
//         quantityUsed:quantityUsed,
//         ARNo:ARNo,
//         checkedBy:checkedBy,
//         date:date
//     })
//     res.status(200).json(InputRawMaterial.toJSON());   
// }
