import { sequelize } from "../config/db.js";
import { eBMRCriticalPPForQuality } from "../models/eBMRCriticalPPForQuality.model.js";
import { eBMRCriticalProcessParameterFS } from "../models/eBMRCriticalProcessParameterFS.model.js";
import { eBMRHazopRecommendations } from "../models/eBMRHazopRecommendations.model.js";
import { eBMRIdentificationOfHazardsAndControls } from "../models/eBMRIdentificationOfHazardsAndControls.model.js";
import { eBMRInputRawMaterial } from "../models/eBMRInputRawMaterial.model.js";
import { eBMRIntermediateIssuance } from "../models/eBMRIntermediateIssaunce.model.js";
import { eBMRPackingMaterial } from "../models/eBMRPackingMaterial.model.js";
import { eBMRPersonalProtectiveEquipment } from "../models/eBMRPersonalProtectiveEquipment.model.js";
import { eBMRProcessSafetyStudyDetails } from "../models/eBMRProcessSafetyStudyDetails.model.js";
import { eBMRReadAndUnderstood } from "../models/eBMRReadAndUnderstood.model.js";
import { eBMRRecord } from "../models/eBMRRecord.model.js";
import { eBMRSolventForBatchToBatchC } from "../models/eBMRSolventForBatchToBatchC.model.js";
import { ebmrSolventForContainerC } from "../models/eBMRSolventForContainer.model.js";

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
    packingMaterialArray,
    solventForBatchToBatchCleaningArray,
    solventForContainerCleaningArray,
    intermediateIssuanceArray,
    hazopRecommendationsArray,
    processSafetyStudyDetailsArray,
    personalProtectiveEquipmentArray,
    identificationOfHazardsACArray,
    criticalProcessPFSafetyArray,
    criticalProcessPFQualityArray,
    readAndUnderstoodArray,
  } = req.body;

  // Start transaction
  const transaction = await sequelize.transaction();

  try {
    // Create eBMRRecord
    const eBMRRecords = await eBMRRecord.create(
      {
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
      },
      { transaction }
    );

    // Insert InputRawMaterialArray if it exists
    if (
      Array.isArray(InputRawMaterialArray) &&
      InputRawMaterialArray.length > 0
    ) {
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
        date: record.date,
      }));
      await eBMRInputRawMaterial.bulkCreate(bMRRecords, { transaction });
    }

    if (
      Array.isArray(packingMaterialArray) &&
      packingMaterialArray.length > 0
    ) {
      const packingMaterial = packingMaterialArray.map((record) => ({
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
        date: record.date,
      }));
      await eBMRPackingMaterial.bulkCreate(packingMaterial, { transaction });
    }

    if (
      Array.isArray(solventForBatchToBatchCleaningArray) &&
      solventForBatchToBatchCleaningArray.length > 0
    ) {
      const solventForBatchToBatchC = solventForBatchToBatchCleaningArray.map(
        (record) => ({
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
          date: record.date,
        })
      );
      await eBMRSolventForBatchToBatchC.bulkCreate(solventForBatchToBatchC, {
        transaction,
      });
    }
    if (
      Array.isArray(solventForContainerCleaningArray) &&
      solventForContainerCleaningArray.length > 0
    ) {
      const solventForContainer = solventForContainerCleaningArray.map(
        (record) => ({
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
          date: record.date,
        })
      );
      await ebmrSolventForContainerC.bulkCreate(solventForContainer, {
        transaction,
      });
    }

    if (
      Array.isArray(intermediateIssuanceArray) &&
      intermediateIssuanceArray.length > 0
    ) {
      const intermedaiteIssuance = intermediateIssuanceArray.map((record) => ({
        form_id: eBMRRecords?.form_id,
        inputQuantity: record.inputQuantity,
        materialCode: record.materialCode,
        batchNumber: record.batchNumber,
        actualIssuedQuantity: record.actualIssuedQuantity,
        sign: record.sign,
        date: record.date,
      }));
      await eBMRIntermediateIssuance.bulkCreate(intermedaiteIssuance, {
        transaction,
      });
    }

    if (
      Array.isArray(hazopRecommendationsArray) &&
      hazopRecommendationsArray.length > 0
    ) {
      const hazopRecommendations = hazopRecommendationsArray.map((record) => ({
        form_id: eBMRRecords?.form_id,
        hazopRecommendations: record.hazopRecommendations,
        category: record.category,
      }));
      await eBMRHazopRecommendations.bulkCreate(hazopRecommendations, {
        transaction,
      });
    }

    if (
      Array.isArray(processSafetyStudyDetailsArray) &&
      processSafetyStudyDetailsArray.length > 0
    ) {
      const processSafetyStudyDetails = processSafetyStudyDetailsArray.map(
        (record) => ({
          form_id: eBMRRecords?.form_id,
          test: record.test,
          result: record.result,
          remark: record.remark,
        })
      );
      await eBMRProcessSafetyStudyDetails.bulkCreate(
        processSafetyStudyDetails,
        { transaction }
      );
    }

    if (
      Array.isArray(personalProtectiveEquipmentArray) &&
      personalProtectiveEquipmentArray.length > 0
    ) {
      const personalProtectiveEquipment = personalProtectiveEquipmentArray.map(
        (record) => ({
          form_id: eBMRRecords?.form_id,
          chemicalName: record.chemicalName,
          handProtection: record.handProtection,
          eyeProtection: record.eyeProtection,
          respiratoryProtection: record.respiratoryProtection,
          footShoes: record.footShoes,
          bodyProtection: record.bodyProtection,
        })
      );await eBMRPersonalProtectiveEquipment.bulkCreate(personalProtectiveEquipment,{transaction})
    } 

    if(Array.isArray(identificationOfHazardsACArray)&&identificationOfHazardsACArray.length>0){
      const identificationOfHAC=identificationOfHazardsACArray.map((record)=>({
        form_id: eBMRRecords?.form_id,
name:record.name,
antidote:record.antidote,
specificHazard:record.specificHazard,
precaution:record.precaution,
      }))
      await eBMRIdentificationOfHazardsAndControls.bulkCreate(identificationOfHAC,{transaction})
    }

    if(Array.isArray(criticalProcessPFSafetyArray)&&criticalProcessPFSafetyArray.length>0){
      const criticalProcessPFSafety=criticalProcessPFSafetyArray.map((record)=>({
        form_id: eBMRRecords?.form_id,
bMRStepNo:record.bMRStepNo,
criticalProcessParameter:record.criticalProcessParameter,
justification:record.justification
      }))
       await eBMRCriticalProcessParameterFS.bulkCreate(criticalProcessPFSafety,{transaction})
    }

    if(Array.isArray(criticalProcessPFQualityArray)&&criticalProcessPFQualityArray.length>0){
      const criticalProcessPFQuality=criticalProcessPFQualityArray.map((record)=>({
        form_id: eBMRRecords?.form_id,
        bMRStepNo:record.bMRStepNo,
        criticalProcessParameter:record.criticalProcessParameter,
        justification:record.justification
      }))
      await eBMRCriticalPPForQuality.bulkCreate(criticalProcessPFQuality,{transaction})
    }

    if(Array.isArray(readAndUnderstoodArray)&&readAndUnderstoodArray.length>0){
      const readAndUnderstood=readAndUnderstoodArray.map((record)=>({
        form_id: eBMRRecords?.form_id,
        nameOfPerson:record.nameOfPerson,
        sign:record.sign,
        date:record.date
      }))
      await eBMRReadAndUnderstood.bulkCreate(readAndUnderstood,{transaction})
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
    console.error("Transaction error:", error);

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
