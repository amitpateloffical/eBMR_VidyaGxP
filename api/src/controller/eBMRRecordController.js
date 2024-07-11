import { eBMRInputRawMaterial } from '../models/eBMRInputRawMaterial.model.js';
import {eBMRRecord} from '../models/eBMRRecord.model.js';


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
  } = req.body;
  const eBMRRecords=await eBMRRecord.create({
    productName:productName,
    documentNo:documentNo,
    productCode:productCode,
    effectiveDate:effectiveDate,
    stage:stage,
    supersedesNo:supersedesNo,
    batchNo:batchNo,
    pageNo:pageNo,
    standardBatchSize:standardBatchSize,
    actualBatchSize:actualBatchSize,
    batchStartingDate:batchStartingDate,
    time: time,
    batchComplitionDate:batchComplitionDate,
    _time:_time,
    expectedOutput:expectedOutput,
    actualOutput:actualOutput,
    expectedYield:expectedYield,
    actualYield:actualYield,
    manufacturingDate:manufacturingDate,
    expiry_Retest_Date:expiry_Retest_Date,
    packingAndStorageCondition:packingAndStorageCondition
  })
  res.status(200).json(eBMRRecords.toJSON());
};

export const InsertInputRawMaterial=async(req,res)=>{
    const {materialCode,materialName,UOM,stepNo,standardQuantity,requiredQuantity,quantityUsed,ARNo,checkedBy,date}=req.body;

    const InputRawMaterial=await eBMRInputRawMaterial.create({
        materialCode:materialCode,
        materialName:materialName,
        UOM:UOM,
        stepNo:stepNo,
        standardQuantity:standardQuantity,
        requiredQuantity:requiredQuantity,
        quantityUsed:quantityUsed,
        ARNo:ARNo,
        checkedBy:checkedBy,
        date:date
    })
    res.status(200).json(InputRawMaterial.toJSON());   
}
