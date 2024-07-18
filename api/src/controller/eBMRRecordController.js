import { sequelize } from "../config/db.js";
import { eBMRCriticalPPForQuality } from "../models/eBMRCriticalPPForQuality.model.js";
import { eBMRCriticalProcessParameterFS } from "../models/eBMRCriticalProcessParameterFS.model.js";
import { eBMRDeviationRemark } from "../models/eBMRDeviationRemark.model.js";
import { eBMRHazopRecommendations } from "../models/eBMRHazopRecommendations.model.js";
import { eBMRIdentificationOfHazardsAndControls } from "../models/eBMRIdentificationOfHazardsAndControls.model.js";
import { eBMRInputRawMaterial } from "../models/eBMRInputRawMaterial.model.js";
import { eBMRIntermediateIssuance } from "../models/eBMRIntermediateIssaunce.model.js";
import { eBMRMSAPOperation } from "../models/eBMRMSAPOperation.model.js";
import { eBMRManufacturingProcess } from "../models/eBMRManufacturingProcess.model.js";
import { eBMRManufacturingProcessAfterD } from "../models/eBMRManufacturingProcessAfterDispensing.model.js";
import { eBMRPackingMaterial } from "../models/eBMRPackingMaterial.model.js";
import { eBMRPersonalProtectiveEquipment } from "../models/eBMRPersonalProtectiveEquipment.model.js";
import { eBMRProcessSafetyStudyDetails } from "../models/eBMRProcessSafetyStudyDetails.model.js";
import { eBMRRawMaterialReconciliation } from "../models/eBMRRawMaterialReconciliation.model.js";
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
    eBMRInputRawMaterials,
    eBMRPackingMaterials,
    ebmrSolventBatchToBatchCs,
    eBMRSolventForContainers,
    eBMRIntermediateIssuances,
    eBMRHazopRecommendations,
    eBMRProcessSafetyStudyDetails,
    eBMRPersonalProtectiveEquipments,
    eBMRIdentificationOfHACs,
    eBMRCriticalProcessParameterFs,
    eBMRCriticalPPForQualities,
    eBMRReadAndUnderstoods,
    eBMRManufacturingProcesses,
    eBMRMPAfterdispensings,
    eBMRMSAPOperations,
    eBMRRawMaterialReconciliations,
    eBMRDeviationRemarks,
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

    // Insert eBMRInputRawMaterials if it exists
    if (
      Array.isArray(eBMRInputRawMaterials) &&
      eBMRInputRawMaterials.length > 0
    ) {
      const bMRRecords = eBMRInputRawMaterials.map((record) => ({
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
      Array.isArray(eBMRPackingMaterials) &&
      eBMRPackingMaterials.length > 0
    ) {
      const packingMaterial = eBMRPackingMaterials.map((record) => ({
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
      Array.isArray(ebmrSolventBatchToBatchCs) &&
      ebmrSolventBatchToBatchCs.length > 0
    ) {
      const solventForBatchToBatchC = ebmrSolventBatchToBatchCs.map(
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
      Array.isArray(eBMRSolventForContainers) &&
      eBMRSolventForContainers.length > 0
    ) {
      const solventForContainer = eBMRSolventForContainers.map(
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
      Array.isArray(eBMRIntermediateIssuances) &&
      eBMRIntermediateIssuances.length > 0
    ) {
      const intermedaiteIssuance = eBMRIntermediateIssuances.map((record) => ({
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
      Array.isArray(eBMRHazopRecommendations) &&
      eBMRHazopRecommendations.length > 0
    ) {
      const hazopRecommendations = eBMRHazopRecommendations.map((record) => ({
        form_id: eBMRRecords?.form_id,
        hazopRecommendations: record.hazopRecommendations,
        category: record.category,
      }));
      await eBMRHazopRecommendations.bulkCreate(hazopRecommendations, {
        transaction,
      });
    }

    if (
      Array.isArray(eBMRProcessSafetyStudyDetails) &&
      eBMRProcessSafetyStudyDetails.length > 0
    ) {
      const processSafetyStudyDetails = eBMRProcessSafetyStudyDetails.map(
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
      Array.isArray(eBMRPersonalProtectiveEquipments) &&
      eBMRPersonalProtectiveEquipments.length > 0
    ) {
      const personalProtectiveEquipment = eBMRPersonalProtectiveEquipments.map(
        (record) => ({
          form_id: eBMRRecords?.form_id,
          chemicalName: record.chemicalName,
          handProtection: record.handProtection,
          eyeProtection: record.eyeProtection,
          respiratoryProtection: record.respiratoryProtection,
          footShoes: record.footShoes,
          bodyProtection: record.bodyProtection,
        })
      );
      await eBMRPersonalProtectiveEquipment.bulkCreate(
        personalProtectiveEquipment,
        { transaction }
      );
    }

    if (
      Array.isArray(eBMRIdentificationOfHACs) &&
      eBMRIdentificationOfHACs.length > 0
    ) {
      const identificationOfHAC = eBMRIdentificationOfHACs.map(
        (record) => ({
          form_id: eBMRRecords?.form_id,
          name: record.name,
          antidote: record.antidote,
          specificHazard: record.specificHazard,
          precaution: record.precaution,
        })
      );
      await eBMRIdentificationOfHazardsAndControls.bulkCreate(
        identificationOfHAC,
        { transaction }
      );
    }

    if (
      Array.isArray(eBMRCriticalProcessParameterFs) &&
      eBMRCriticalProcessParameterFs.length > 0
    ) {
      const criticalProcessPFSafety = eBMRCriticalProcessParameterFs.map(
        (record) => ({
          form_id: eBMRRecords?.form_id,
          bMRStepNo: record.bMRStepNo,
          criticalProcessParameter: record.criticalProcessParameter,
          justification: record.justification,
        })
      );
      await eBMRCriticalProcessParameterFS.bulkCreate(criticalProcessPFSafety, {
        transaction,
      });
    }

    if (
      Array.isArray(eBMRCriticalPPForQualities) &&
      eBMRCriticalPPForQualities.length > 0
    ) {
      const criticalProcessPFQuality = eBMRCriticalPPForQualities.map(
        (record) => ({
          form_id: eBMRRecords?.form_id,
          bMRStepNo: record.bMRStepNo,
          criticalProcessParameter: record.criticalProcessParameter,
          justification: record.justification,
        })
      );
      await eBMRCriticalPPForQuality.bulkCreate(criticalProcessPFQuality, {
        transaction,
      });
    }

    if (
      Array.isArray(eBMRReadAndUnderstoods) &&
      eBMRReadAndUnderstoods.length > 0
    ) {
      const readAndUnderstood = eBMRReadAndUnderstoods.map((record) => ({
        form_id: eBMRRecords?.form_id,
        nameOfPerson: record.nameOfPerson,
        sign: record.sign,
        date: record.date,
      }));
      await eBMRReadAndUnderstood.bulkCreate(readAndUnderstood, {
        transaction,
      });
    }

    if (
      Array.isArray(eBMRManufacturingProcesses) &&
      eBMRManufacturingProcesses.length > 0
    ) {
      const manufacturingProcess = eBMRManufacturingProcesses.map((record) => ({
        form_id: eBMRRecords?.form_id,
        materialCode: record.materialCode,
        batchNo: record.batchNo,
        timeFrom: record.timeFrom,
        timeTo:record.timeTo,
        dispensingGrossWeight: record.dispensingGrossWeight,
        dispensingTareWeight:record.dispensingTareWeight,
        dispensingNetWeight:record.dispensingNetWeight,
        doneBy: record.doneBy,
      }));
      await eBMRManufacturingProcess.bulkCreate(manufacturingProcess, {
        transaction,
      });
    }

    if (
      Array.isArray(eBMRMPAfterdispensings) &&
      eBMRMPAfterdispensings.length > 0
    ) {
      const manufacturingPAfterDispensing =
        eBMRMPAfterdispensings.map((record) => ({
          form_id: eBMRRecords?.form_id,
          sOperationNo: record.sOperationNo,
          cleaningAfterDispensing: record.cleaningAfterDispensing,
          recordingsAndObservations: record.recordingsAndObservations,
          date: record.date,
          timeTo: record.timeTo,
          timeFrom:record.timeFrom,
          doneBy: record.doneBy,
          cleanNotClean: record.cleanNotClean,
        }));
      await eBMRManufacturingProcessAfterD.bulkCreate(
        manufacturingPAfterDispensing,
        { transaction }
      );
    }

    if (Array.isArray(eBMRMSAPOperations) && eBMRMSAPOperations.length > 0) {
      const MSAPOperation = eBMRMSAPOperations.map((record) => ({
        form_id: eBMRRecords?.form_id,
        grossContainerNo: record.grossContainerNo,
        weight: record.weight,
        tareWeight: record.tareWeight,
        netWeight: record.netWeight,
        doneBy: record.doneBy,
        sealByNo: record.sealByNo,
        sealedByQC: record.sealedByQC,
        checkedBy: record.checkedBy,
      }));
      await eBMRMSAPOperation.bulkCreate(MSAPOperation, { transaction });
    }

    if (
      Array.isArray(eBMRRawMaterialReconciliations) &&
      eBMRRawMaterialReconciliations.length > 0
    ) {
      const rawMaterialReconciliation = eBMRRawMaterialReconciliations.map(
        (record) => ({
          form_id: eBMRRecords?.form_id,
          rawMaterialName: record.rawMaterialName,
          UOM: record.UOM,
          issuedQuantity: record.issuedQuantity,
          usedQuantity: record.usedQuantity,
          remark: record.remark,
        })
      );
      await eBMRRawMaterialReconciliation.bulkCreate(
        rawMaterialReconciliation,
        { transaction }
      );
    }

    if (
      Array.isArray(eBMRDeviationRemarks) &&
      eBMRDeviationRemarks.length > 0
    ) {
      const deviationRemark = eBMRDeviationRemarks.map((record) => ({
        form_id: eBMRRecords?.form_id,
        date: record.date,
        stepNo: record.stepNo,
        observation: record.observation,
        reason: record.reason,
        recordedOn: record.recordedOn,
        recordedBy: record.recordedBy,
      }));
      await eBMRDeviationRemark.bulkCreate(deviationRemark, { transaction });
    }
    // Commit transaction
    await transaction.commit();

    res.status(200).json({
      error: false,
      message: "eBMR Created successfully",
    });
  } catch (error) {
    // Rollback transaction on error
    await transaction.rollback();
    console.error("Transaction error:", error);

    res.status(500).json({
      error: true,
      message: "Failed to create eBMR",
    });
  }
};

export const getAllEBMRData = async (req, res) => {
  try {
    // Fetch eBMRRecord with all associated data
    const eBMRData = await eBMRRecord.findAll({
      include: [
        { model: eBMRInputRawMaterial },
        { model: eBMRPackingMaterial },
        { model: eBMRSolventForBatchToBatchC },
        { model: ebmrSolventForContainerC },
        { model: eBMRIntermediateIssuance },
        { model: eBMRHazopRecommendations },
        { model: eBMRProcessSafetyStudyDetails },
        { model: eBMRPersonalProtectiveEquipment },
        { model: eBMRIdentificationOfHazardsAndControls },
        { model: eBMRCriticalProcessParameterFS },
        { model: eBMRCriticalPPForQuality },
        { model: eBMRReadAndUnderstood },
        { model: eBMRManufacturingProcess },
        { model: eBMRManufacturingProcessAfterD },
        { model: eBMRMSAPOperation },
        { model: eBMRRawMaterialReconciliation },
        { model: eBMRDeviationRemark },
      ],
    });
    res.status(200).json(eBMRData);
  } catch (error) {
    console.error("Error fetching eBMR data:", error);
    res.status(500).json({
      error: true,
      message: "Failed to fetch eBMR data",
    });
  }
};

export const getEBMRRecordsByFormId = async (req, res) => {
  const { form_id } = req.params; // Assuming form_id is passed as a route parameter

  try {
    // Fetch eBMRRecords by form_id with all associated data
    const eBMRData = await eBMRRecord.findAll({
      where: { form_id }, // Fetch records where form_id matches
      include: [
        { model: eBMRInputRawMaterial },
        { model: eBMRPackingMaterial },
        { model: eBMRSolventForBatchToBatchC },
        { model: ebmrSolventForContainerC },
        { model: eBMRIntermediateIssuance },
        { model: eBMRHazopRecommendations },
        { model: eBMRProcessSafetyStudyDetails },
        { model: eBMRPersonalProtectiveEquipment },
        { model: eBMRIdentificationOfHazardsAndControls },
        { model: eBMRCriticalProcessParameterFS },
        { model: eBMRCriticalPPForQuality },
        { model: eBMRReadAndUnderstood },
        { model: eBMRManufacturingProcess },
        { model: eBMRManufacturingProcessAfterD },
        { model: eBMRMSAPOperation },
        { model: eBMRRawMaterialReconciliation },
        { model: eBMRDeviationRemark },
      ],
    });

    if (!eBMRData || eBMRData.length === 0) {
      return res.status(404).json({
        error: true,
        message: "No eBMR records found for the given form_id",
      });
    }

    res.status(200).json(eBMRData);
  } catch (error) {
    console.error("Error fetching eBMR data:", error);
    res.status(500).json({
      error: true,
      message: "Failed to fetch eBMR records",
    });
  }
};
export const updateEBMRRecord = async (req, res) => {
 
  const {
    form_id,
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
    eBMRInputRawMaterials,
    eBMRPackingMaterials,
    ebmrSolventBatchToBatchCs,
    eBMRSolventForContainers,
    eBMRIntermediateIssuances,
    eBMRHazopRecommendations,
    eBMRProcessSafetyStudyDetails,
    eBMRPersonalProtectiveEquipments,
    eBMRIdentificationOfHACs,
    eBMRCriticalProcessParameterFs,
    eBMRCriticalPPForQualities,
    eBMRReadAndUnderstoods,
    eBMRManufacturingProcesses,
    eBMRMPAfterdispensings,
    eBMRMSAPOperations,
    eBMRRawMaterialReconciliations,
    eBMRDeviationRemarks,
  } = req.body;
// console.log(req.body,"eBMRInputRawMaterials")
  const transaction = await sequelize.transaction();
  try {
    // Update eBMRRecord
    await eBMRRecord.update(
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
      {
        where: { form_id },
        transaction,
      }
    );

    // Update InputRawMaterialArray if it exists
    if (Array.isArray(eBMRInputRawMaterials) && eBMRInputRawMaterials.length > 0) {
      // Delete existing records
    
      await eBMRInputRawMaterial.destroy({ where: { form_id:form_id  }, transaction });

      // Create updated records
      const bMRRecords = eBMRInputRawMaterials.map((record) => ({
        form_id,
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

 
    if (Array.isArray(eBMRPackingMaterials) && eBMRPackingMaterials.length > 0) {
  
      await eBMRPackingMaterial.destroy({ where: { form_id }, transaction });

      const packingMaterial = eBMRPackingMaterials.map((record) => ({
        form_id,
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
      Array.isArray(ebmrSolventBatchToBatchCs) &&
      ebmrSolventBatchToBatchCs.length > 0
    ) {
      await eBMRSolventForBatchToBatchC.destroy({ where: { form_id }, transaction });

      const solventForBatchToBatchC = ebmrSolventBatchToBatchCs.map(
        (record) => ({
          form_id,
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
      Array.isArray(eBMRSolventForContainers) &&
      eBMRSolventForContainers.length > 0
    ) {
      await ebmrSolventForContainerC.destroy({ where: { form_id }, transaction });

      const solventForContainer = eBMRSolventForContainers.map(
        (record) => ({
          form_id,
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
      Array.isArray(eBMRIntermediateIssuances) &&
      eBMRIntermediateIssuances.length > 0
    ) {
      await eBMRIntermediateIssuance.destroy({ where: { form_id }, transaction });

      const intermedaiteIssuance = eBMRIntermediateIssuances.map((record) => ({
        form_id,
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
      Array.isArray(eBMRHazopRecommendations) &&
      eBMRHazopRecommendations.length > 0
    ) {
      await eBMRHazopRecommendations.destroy({ where: { form_id }, transaction });

      const hazopRecommendations = eBMRHazopRecommendations.map((record) => ({
        form_id,
        hazopRecommendations: record.hazopRecommendations,
        category: record.category,
      }));
      await eBMRHazopRecommendations.bulkCreate(hazopRecommendations, {
        transaction,
      });
    }

    if (
      Array.isArray(eBMRProcessSafetyStudyDetails) &&
      eBMRProcessSafetyStudyDetails.length > 0
    ) {
      await eBMRProcessSafetyStudyDetails.destroy({ where: { form_id }, transaction });

      const processSafetyStudyDetails = eBMRProcessSafetyStudyDetails.map(
        (record) => ({
          form_id,
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
      Array.isArray(eBMRPersonalProtectiveEquipments) &&
      eBMRPersonalProtectiveEquipments.length > 0
    ) {
      await eBMRPersonalProtectiveEquipment.destroy({ where: { form_id }, transaction });

      const personalProtectiveEquipment = eBMRPersonalProtectiveEquipments.map(
        (record) => ({
          form_id,
          chemicalName: record.chemicalName,
          handProtection: record.handProtection,
          eyeProtection: record.eyeProtection,
          respiratoryProtection: record.respiratoryProtection,
          footShoes: record.footShoes,
          bodyProtection: record.bodyProtection,
        })
      );
      await eBMRPersonalProtectiveEquipment.bulkCreate(
        personalProtectiveEquipment,
        { transaction }
      );
    }

    if (
      Array.isArray(eBMRIdentificationOfHACs) &&
      eBMRIdentificationOfHACs.length > 0
    ) {
      await eBMRIdentificationOfHazardsAndControls.destroy({ where: { form_id }, transaction });

      const identificationOfHAC = eBMRIdentificationOfHACs.map(
        (record) => ({
          form_id,
          name: record.name,
          antidote: record.antidote,
          specificHazard: record.specificHazard,
          precaution: record.precaution,
        })
      );
      await eBMRIdentificationOfHazardsAndControls.bulkCreate(
        identificationOfHAC,
        { transaction }
      );
    }

    if (
      Array.isArray(eBMRCriticalProcessParameterFs) &&
      eBMRCriticalProcessParameterFs.length > 0
    ) {
      await eBMRCriticalProcessParameterFS.destroy({ where: { form_id }, transaction });

      const criticalProcessPFSafety = eBMRCriticalProcessParameterFs.map(
        (record) => ({
          form_id,
          bMRStepNo: record.bMRStepNo,
          criticalProcessParameter: record.criticalProcessParameter,
          justification: record.justification,
        })
      );
      await eBMRCriticalProcessParameterFS.bulkCreate(criticalProcessPFSafety, {
        transaction,
      });
    }

    if (
      Array.isArray(eBMRCriticalPPForQualities) &&
      eBMRCriticalPPForQualities.length > 0
    ) {
      await eBMRCriticalPPForQuality.destroy({ where: { form_id }, transaction });

      const criticalProcessPFQuality = eBMRCriticalPPForQualities.map(
        (record) => ({
          form_id,
          bMRStepNo: record.bMRStepNo,
          criticalProcessParameter: record.criticalProcessParameter,
          justification: record.justification,
        })
      );
      await eBMRCriticalPPForQuality.bulkCreate(criticalProcessPFQuality, {
        transaction,
      });
    }

    if (
      Array.isArray(eBMRReadAndUnderstoods) &&
      eBMRReadAndUnderstoods.length > 0
    ) {
      await eBMRReadAndUnderstood.destroy({ where: { form_id }, transaction });

      const readAndUnderstood = eBMRReadAndUnderstoods.map((record) => ({
        form_id,
        nameOfPerson: record.nameOfPerson,
        sign: record.sign,
        date: record.date,
      }));
      await eBMRReadAndUnderstood.bulkCreate(readAndUnderstood, {
        transaction,
      });
    }

    if (
      Array.isArray(eBMRManufacturingProcesses) &&
      eBMRManufacturingProcesses.length > 0
    ) {
      await eBMRManufacturingProcess.destroy({ where: { form_id }, transaction });

      const manufacturingProcess = eBMRManufacturingProcesses.map((record) => ({
        form_id,
        materialCode: record.materialCode,
        batchNo: record.batchNo,
        timeFrom: record.timeFrom,
        timeTo:record.timeTo,
        dispensingGrossWeight: record.dispensingGrossWeight,
        dispensingTareWeight:record.dispensingTareWeight,
        dispensingNetWeight:record.dispensingNetWeight,
        doneBy: record.doneBy,
      }));
      await eBMRManufacturingProcess.bulkCreate(manufacturingProcess, {
        transaction,
      });
    }

    if (
      Array.isArray(eBMRMPAfterdispensings) &&
      eBMRMPAfterdispensings.length > 0
    ) {
      await eBMRManufacturingProcessAfterD.destroy({ where: { form_id }, transaction });

      const manufacturingPAfterDispensing =
        eBMRMPAfterdispensings.map((record) => ({
          form_id,
          sOperationNo: record.sOperationNo,
          cleaningAfterDispensing: record.cleaningAfterDispensing,
          recordingsAndObservations: record.recordingsAndObservations,
          date: record.date,
          timeTo: record.timeTo,
          timeFrom:record.timeFrom,
          doneBy: record.doneBy,
          cleanNotClean: record.cleanNotClean,
        }));
      await eBMRManufacturingProcessAfterD.bulkCreate(
        manufacturingPAfterDispensing,
        { transaction }
      );
    }

    if (Array.isArray(eBMRMSAPOperations) && eBMRMSAPOperations.length > 0) {
      await eBMRMSAPOperation.destroy({ where: { form_id }, transaction });

      const MSAPOperation = eBMRMSAPOperations.map((record) => ({
        form_id,
        grossContainerNo: record.grossContainerNo,
        weight: record.weight,
        tareWeight: record.tareWeight,
        netWeight: record.netWeight,
        doneBy: record.doneBy,
        sealByNo: record.sealByNo,
        sealedByQC: record.sealedByQC,
        checkedBy: record.checkedBy,
      }));
      await eBMRMSAPOperation.bulkCreate(MSAPOperation, { transaction });
    }

    if (
      Array.isArray(eBMRRawMaterialReconciliations) &&
      eBMRRawMaterialReconciliations.length > 0
    ) {
      await eBMRRawMaterialReconciliation.destroy({ where: { form_id }, transaction });

      const rawMaterialReconciliation = eBMRRawMaterialReconciliations.map(
        (record) => ({
          form_id,
          rawMaterialName: record.rawMaterialName,
          UOM: record.UOM,
          issuedQuantity: record.issuedQuantity,
          usedQuantity: record.usedQuantity,
          remark: record.remark,
        })
      );
      await eBMRRawMaterialReconciliation.bulkCreate(
        rawMaterialReconciliation,
        { transaction }
      );
    }

    if (
      Array.isArray(eBMRDeviationRemarks) &&
      eBMRDeviationRemarks.length > 0
    ) {
      await eBMRDeviationRemark.destroy({ where: { form_id }, transaction });

      const deviationRemark = eBMRDeviationRemarks.map((record) => ({
        form_id,
        date: record.date,
        stepNo: record.stepNo,
        observation: record.observation,
        reason: record.reason,
        recordedOn: record.recordedOn,
        recordedBy: record.recordedBy,
      }));
      await eBMRDeviationRemark.bulkCreate(deviationRemark, { transaction });
    }
  
    // Commit transaction
    await transaction.commit();

    res.status(200).json({
      error: false,
      message: "eBMR Record and related tables updated successfully",
    });
  } catch (error) {
    await transaction.rollback();
    console.error("Transaction error:", error);

    res.status(500).json({
      error: true,
      message: "Failed to update eBMR Record and related tables",
    });
  }
};
