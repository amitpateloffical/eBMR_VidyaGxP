import React, { useReducer, useState } from "react";
import "./BMR.css";
import { NoteAdd } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import HeaderTop from "../../components/Header/HeaderTop";

const BMRForm = () => {
  const [tab, setTab] = useState("General");
  const [allTableData, setAllTableData] = useState([]);
  const [packingMaterialTablesData, setpackingMaterialTablesData] = useState(
    []
  );
  const [batchCleaningTablesData, setbatchCleaningTablesData] = useState([]);
  const [accessoriesCleaningTablesData, setAccessoriesCleaningTablesData] =
    useState([]);
  const [intermadiateIssuanceTablesData, setIntermadiateIssuanceTablesData] =
    useState([]);
  const [hazopTablesData, setHazopTablesData] = useState([]);
  const [processSafetyTablesData, setProcessSafetyTablesData] = useState([]);
  const [ppeMatrixTablesData, setPPEMatrixTablesData] = useState([]);
  const [hazardAndControlTablesData, setHazardAndControlTablesData] = useState(
    []
  );
  const [readAndUnderstood, setReadAndUnderstood] = useState([]);
  const [CriticalProcessPFQ, setCriticalProcessPFQ] = useState([]);
  const [criticalProcessPFS, setCriticalProcessPFS] = useState([]);
  const [intermediateDispensing, setIntermediateDispensing] = useState([]);
  const [afterDispensing, setAfterDispensing] = useState([]);
  const [weightDetails, setWeightDetails] = useState([]);
  const [rMR, setRMR] = useState([]);
  const [deviation, setDeviation] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const uniqueId =
    "ABC/" +
    Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, "0") +
    "/" +
    Math.floor(Math.random() * 10000)
      .toString()
      .padStart(2, "0");
  const [ManufacturingRecord, setManufacturingRecord] = useReducer(
    (prev, next) => ({
      ...prev,
      ...next,
    }),
    {
      eBMRId: uniqueId + 1,
      process: "Batch Manufacturuing Record",
      productName: "",
      documentNo: "",
      productCode: "",
      effectiveDate: "",
      stage: "",
      supersedesNo: "",
      batchNo: "",
      pageNo: "",
      standartBatchSize: "",
      actualBatchSize: "",
      batchStartingDate: "",
      batchComplitionDate: "",
      time: "",
      expectedOutput: "",
      actualOutput: "",
      expectedYeild: "",
      actualYeild: "",
      manufacturingDate: "",
      expiryRetestdate: "",
      packingAndStoreCondition: "",
    }
  );
  // console.log(ManufacturingRecord, "ManufacturingRecord");
  useEffect(() => {
    setManufacturingRecord({
      gridData: allTableData,
      batchCleaningTablesData: batchCleaningTablesData,
      packingMaterialTablesData: packingMaterialTablesData,
      accessoriesCleaningTablesData: accessoriesCleaningTablesData,
      intermadiateIssuanceTablesData: intermadiateIssuanceTablesData,
      hazopTablesData: hazopTablesData,
      processSafetyTablesData: processSafetyTablesData,
      ppeMatrixTablesData: ppeMatrixTablesData,
      hazardAndControlTablesData: hazardAndControlTablesData,
      readAndUnderstood: readAndUnderstood,
      CriticalProcessPFQ: CriticalProcessPFQ,
      criticalProcessPFS: criticalProcessPFS,
      intermediateDispensing: intermediateDispensing,
      afterDispensing: afterDispensing,
      weightDetails: weightDetails,
      rMR: rMR,
      deviation: deviation,
    });
  }, [
    allTableData,
    batchCleaningTablesData,
    packingMaterialTablesData,
    accessoriesCleaningTablesData,
    intermadiateIssuanceTablesData,
    hazopTablesData,
    processSafetyTablesData,
    ppeMatrixTablesData,
    hazardAndControlTablesData,
    readAndUnderstood,
    CriticalProcessPFQ,
    criticalProcessPFS,
    intermediateDispensing,
    ,
    weightDetails,
    afterDispensing,
    rMR,
    deviation,
  ]);

  const handleSave = (data) => {
    toast.success("eBMR Saved Successfully!");
    createObject(data);
    navigate("/desktop");
  };

  const createObject = (newObject) => {
    dispatch({ type: "EBMR_FORM_DATA", payload: newObject });
  };

  const addRawMaterialRow = () => {
    const currentTime = new Date().toLocaleTimeString();
    const newRow = {
      materialCode: "",
      materialName: "",
      UOM: "",
      stepNo: "",
      stdQty: "",
      reqQty: "",
      qtyUsed: "",
      arNoBatchNo: "",
      checkedBySign: "",
      Date: "",
    };
    setAllTableData([...allTableData, newRow]);
  };

  const addBatchCleaningRow = () => {
    const currentTime = new Date().toLocaleTimeString();
    const newRow = {
      materialCode: "",
      materialName: "",
      UOM: "",
      stepNo: "",
      stdQty: "",
      reqQty: "",
      qtyUsed: "",
      arNoBatchNo: "",
      checkedBySign: "",
      Date: "",
    };
    setbatchCleaningTablesData([...batchCleaningTablesData, newRow]);
  };

  const addPackingMaterialRow = () => {
    const currentTime = new Date().toLocaleTimeString();
    const newRow = {
      materialCode: "",
      materialName: "",
      UOM: "",
      stepNo: "",
      stdQty: "",
      reqQty: "",
      qtyUsed: "",
      arNoBatchNo: "",
      checkedBySign: "",
      Date: "",
    };
    setpackingMaterialTablesData([...packingMaterialTablesData, newRow]);
  };

  const addaccessoriesRow = () => {
    const newRow = {
      materialCode: "",
      materialName: "",
      UOM: "",
      stepNo: "",
      stdQty: "",
      reqQty: "",
      qtyUsed: "",
      arNoBatchNo: "",
      checkedBySign: "",
      Date: "",
    };
    setAccessoriesCleaningTablesData([
      ...accessoriesCleaningTablesData,
      newRow,
    ]);
  };

  const addIntermediateIssanceRow = () => {
    const newRow = {
      inpQtyKg: "",
      materialCode: "",
      batchNo: "",
      actualIssuedQty: "",
      sign: "",
      date: "",
    };
    setIntermadiateIssuanceTablesData([
      ...intermadiateIssuanceTablesData,
      newRow,
    ]);
  };

  const addHazopRow = () => {
    const newRow = {
      HAZOP_Recommendation: "",
      category: "",
    };
    setHazopTablesData([...hazopTablesData, newRow]);
  };

  const addprocessSafetyRow = () => {
    const newRow = {
      test: "",
      result: "",
      remark: "",
    };
    setProcessSafetyTablesData([...processSafetyTablesData, newRow]);
  };

  const addPPEMatrixRow = () => {
    const newRow = {
      chemicalName: "",
      handProtection: "",
      eyeProtection: "",
      respiratoryProtection: "",
      footshoes: "",
      bodyProtection: "",
    };
    setPPEMatrixTablesData([...ppeMatrixTablesData, newRow]);
  };

  const addHazardAndControlRow = () => {
    const newRow = {
      name: "",
      antidot: "",
      specificHazard: "",
      precaution: "",
    };
    setHazardAndControlTablesData([...hazardAndControlTablesData, newRow]);
  };

  const addReadAndUnderstood = () => {
    const newRow = {
      nameOfPerson: "",
      Sign: "",
      date: "",
    };
    setReadAndUnderstood([...readAndUnderstood, newRow]);
  };
  const addCriticalProcessParameterForQuality = () => {
    const newRow = {
      BMRStepNo: "",
      criticalProcessParameter: "",
      justification: "",
    };
    setCriticalProcessPFQ([...CriticalProcessPFQ, newRow]);
  };

  const addIntermediateDispensing = () => {
    const newRow = {
      materialCode: "",
      batchNo: "",
      time: { from: "", to: "" },
      dispensing: { grossWt: "", tareWt: "", netWt: "" },
      doneBy: "",
    };
    setIntermediateDispensing([...intermediateDispensing, newRow]);
  };
  const addCriticalProcessParameterForSafety = () => {
    const newRow = {
      BMRStepNo: "",
      criticalProcessParameter: "",
      justification: "",
    };
    setCriticalProcessPFS([...criticalProcessPFS, newRow]);
  };

  const addAfterDispensing = () => {
    const newRow = {
      cleaningAfterDispensing: "",
      recordingsAndObservations: "",
      date: "",
      time: { from: "", to: "" },
      doneBy: "",
      cleanNotClean: "",
    };
    setAfterDispensing([...afterDispensing, newRow]);
  };

  const addWeightDetails = () => {
    const newRow = {
      grossContainerNo: "",
      weight: "",
      tareWeight: "",
      netWeight: "",
      doneBy: "",
      sealByNo: "",
      sealedByQC: "",
      checkedBy: "",
    };
    setWeightDetails([...weightDetails, newRow]);
  };

  const addrMR = () => {
    const newRow = {
      rawMaterialName: "",
      UOM: "",
      issuedQty: "",
      usedQty: "",
      remark: "",
    };
    setRMR([...rMR, newRow]);
  };
  const addDeviation = () => {
    const newRow = {
      date: "",
      stepnoPageno: "",
      observation: "",
      reason: "",
      recordedOn: "",
      recordedSign: "",
    };
    setDeviation([...deviation, newRow]);
  };

  const deleteRow = (index) => {
    const updatedData = [...allTableData];
    updatedData.splice(index, 1);
    setAllTableData(updatedData);
  };

  return (
    <div id="config-form-document-page">
      <HeaderTop />
      <div className="document-form">
        <div className="details-form-data">
          <div className="sop-type-header">
            <div className="logo">
              <img src="/vidyalogo2.png" alt="..." />
            </div>
            <div className="main-head">
              <div>BATCH MANUFACTURING RECORD (BMR)</div>
            </div>
            {/* <div className="logo">
                  <img src="/navin.png" alt="..." />
                </div> */}
          </div>
        </div>
      </div>
      <div className="top-block">
        <div>
          <strong> Record Name:&nbsp;</strong>Document
        </div>
        <div>
          <strong> Site:&nbsp;</strong>
          India
        </div>
        <div>
          <strong> Current Status:&nbsp;</strong>Under Initiation
        </div>
        <div>
          <strong> Initiated By:&nbsp;</strong>
          Amit Guru
        </div>
      </div>
      <div className="form-tabs">
        <div
          onClick={() => setTab("General")}
          className={tab === "General" ? "active" : ""}
        >
          General Information
        </div>
        <div
          onClick={() => setTab("QA")}
          className={tab === "QA" ? "active" : ""}
        >
          Batch Record Issued BY QA
        </div>
        {/* <div
                  className={`${
                    isSelectedGeneral === true
                      ? "btn-forms-isSelected"
                      : "btn-forms-select"
                  }`}
                  onClick={() => {
                    setIsSelectedGeneral(true), setIsSelectedDetails(false);
                  }}
                >
                  General Information
                </div> */}
        {/* <div
                  className={`${
                    isSelectedDetails === true
                      ? "btn-forms-isSelected"
                      : "btn-forms-select"
                  }`}
                  onClick={() => {
                    setIsSelectedDetails(true), setIsSelectedGeneral(false);
                  }}
                >

                  Details
                </div> */}
      </div>

      {tab === "General" ? (
        <div className="document-form">
          <div className="section-body">
            <div className="dual-group-input">
              <div className="group-input">
                <label>Product Name</label>
                <input
                  value={ManufacturingRecord.productName}
                  type="text"
                  onChange={(e) =>
                    setManufacturingRecord({ productName: e.target.value })
                  }
                />
              </div>

              <div className="group-input">
                <label>Document No</label>
                <input
                  value={ManufacturingRecord.documentNo}
                  type="text"
                  onChange={(e) =>
                    setManufacturingRecord({ documentNo: e.target.value })
                  }
                />
              </div>

              <div className="group-input">
                <label>Product Code </label>
                <input
                  value={ManufacturingRecord.productCode}
                  type="text"
                  onChange={(e) =>
                    setManufacturingRecord({ productCode: e.target.value })
                  }
                />
              </div>

              <div className="group-input">
                <label>Effective Date </label>
                <input
                  value={ManufacturingRecord.effectiveDate}
                  type="text"
                  onChange={(e) =>
                    setManufacturingRecord({ effectiveDate: e.target.value })
                  }
                />
              </div>

              <div className="group-input">
                <label>Stage </label>
                <input
                  value={ManufacturingRecord.stage}
                  type="text"
                  onChange={(e) =>
                    setManufacturingRecord({ stage: e.target.value })
                  }
                />
              </div>

              <div className="group-input">
                <label>Supersedes No </label>
                <input
                  value={ManufacturingRecord.supersedesNo}
                  type="text"
                  onChange={(e) =>
                    setManufacturingRecord({ supersedesNo: e.target.value })
                  }
                />
              </div>

              <div className="group-input">
                <label>Batch No</label>
                <input
                  value={ManufacturingRecord.batchNo}
                  type="text"
                  onChange={(e) =>
                    setManufacturingRecord({ batchNo: e.target.value })
                  }
                />
              </div>

              <div className="group-input">
                <label>Page No</label>
                <input
                  value={ManufacturingRecord.pageNo}
                  type="text"
                  onChange={(e) =>
                    setManufacturingRecord({ pageNo: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {tab === "QA" ? (
        <div className="document-form">
          <div className="section-body">
            <div className="dual-group-input">
              <div className="group-input">
                <label>Standard Batch Size </label>
                <input
                  value={ManufacturingRecord.standartBatchSize}
                  type="text"
                  onChange={(e) =>
                    setManufacturingRecord({
                      standartBatchSize: e.target.value,
                    })
                  }
                />
              </div>
              <div className="group-input">
                <label>Actual Batch Size </label>
                <input
                  value={ManufacturingRecord.actualBatchSize}
                  type="text"
                  onChange={(e) =>
                    setManufacturingRecord({ actualBatchSize: e.target.value })
                  }
                />
              </div>

              <div className="group-input">
                <label>Batch Starting Date </label>
                <input
                  value={ManufacturingRecord.batchStartingDate}
                  type="date"
                  onChange={(e) =>
                    setManufacturingRecord({
                      batchStartingDate: e.target.value,
                    })
                  }
                />
              </div>

              <div className="group-input">
                <label> Time </label>
                <input
                  value={ManufacturingRecord.time}
                  type="time"
                  onChange={(e) =>
                    setManufacturingRecord({ time: e.target.value })
                  }
                />
              </div>

              <div className="group-input">
                <label>Batch Complition Date </label>
                <input
                  value={ManufacturingRecord.batchComplitionDate}
                  type="date"
                  onChange={(e) =>
                    setManufacturingRecord({
                      batchComplitionDate: e.target.value,
                    })
                  }
                />
              </div>

              <div className="group-input">
                <label>Time </label>
                <input
                  value={ManufacturingRecord.time}
                  type="time"
                  onChange={(e) =>
                    setManufacturingRecord({ time: e.target.value })
                  }
                />
              </div>

              <div className="group-input">
                <label>Expected Output (kg) </label>
                <input
                  value={ManufacturingRecord.expectedOutput}
                  type="text"
                  onChange={(e) =>
                    setManufacturingRecord({ expectedOutput: e.target.value })
                  }
                />
              </div>

              <div className="group-input">
                <label>Actual Output (Kg)</label>
                <input
                  value={ManufacturingRecord.actualOutput}
                  type="text"
                  onChange={(e) =>
                    setManufacturingRecord({ actualOutput: e.target.value })
                  }
                />
              </div>

              <div className="group-input">
                <label>Expected Yield (%)</label>
                <input
                  value={ManufacturingRecord.expectedYeild}
                  type="text"
                  onChange={(e) =>
                    setManufacturingRecord({ expectedYeild: e.target.value })
                  }
                />
              </div>

              <div className="group-input">
                <label>Actual Yield (%) </label>
                <input
                  value={ManufacturingRecord.actualYeild}
                  type="text"
                  onChange={(e) =>
                    setManufacturingRecord({ actualYeild: e.target.value })
                  }
                />
              </div>
              <div className="group-input">
                <label>Manufacturing Date </label>
                <input
                  value={ManufacturingRecord.manufacturingDate}
                  type="date"
                  onChange={(e) =>
                    setManufacturingRecord({
                      manufacturingDate: e.target.value,
                    })
                  }
                />
              </div>
              <div className="group-input">
                <label>Expiry/Retest Date</label>
                <input
                  value={ManufacturingRecord.expiryRetestdate}
                  type="date"
                  onChange={(e) =>
                    setManufacturingRecord({ expiryRetestdate: e.target.value })
                  }
                />
              </div>

              <div className="group-input">
                <label>Packing And Storage Condition</label>
                <input
                  value={ManufacturingRecord.packingAndStoreCondition}
                  type="text"
                  onChange={(e) =>
                    setManufacturingRecord({
                      packingAndStoreCondition: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="sub-head">Input Raw Material Details</div>

            <div className="AddRows d-flex">
              <NoteAdd onClick={addRawMaterialRow} />
              <div className="addrowinstruction"></div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>S no.</th>
                  <th>Material Code </th>
                  <th>Material Name</th>
                  <th>UOM</th>
                  <th>Step No </th>
                  <th>Std. Qty.</th>
                  <th>Req. Qty. </th>
                  <th>Qty. Used </th>
                  <th>A.R. No/Batch No.</th>
                  <th>Checked By Sign </th>
                  <th>Date </th>
                </tr>
              </thead>
              <tbody>
                {allTableData.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <input
                        value={item.materialCode}
                        onChange={(e) => {
                          const newData = [...allTableData];
                          newData[index].materialCode = e.target.value;
                          setAllTableData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.materialName}
                        onChange={(e) => {
                          const newData = [...allTableData];
                          newData[index].materialName = e.target.value;
                          setAllTableData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.UOM}
                        onChange={(e) => {
                          const newData = [...allTableData];
                          newData[index].UOM = e.target.value;
                          setAllTableData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.stepNo}
                        onChange={(e) => {
                          const newData = [...allTableData];
                          newData[index].stepNo = e.target.value;
                          setAllTableData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.stdQty}
                        onChange={(e) => {
                          const newData = [...allTableData];
                          newData[index].stdQty = e.target.value;
                          setAllTableData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.reqQty}
                        onChange={(e) => {
                          const newData = [...allTableData];
                          newData[index].reqQty = e.target.value;
                          setAllTableData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.qtyUsed}
                        onChange={(e) => {
                          const newData = [...allTableData];
                          newData[index].qtyUsed = e.target.value;
                          setAllTableData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.arNoBatchNo}
                        onChange={(e) => {
                          const newData = [...allTableData];
                          newData[index].arNoBatchNo = e.target.value;
                          setAllTableData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.checkedBySign}
                        onChange={(e) => {
                          const newData = [...allTableData];
                          newData[index].checkedBySign = e.target.value;
                          setAllTableData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={item.Date}
                        onChange={(e) => {
                          const newData = [...allTableData];
                          newData[index].Date = e.target.value;
                          setAllTableData(newData);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="sub-head">Packing Material Details</div>

            <div className="AddRows d-flex">
              <NoteAdd onClick={addPackingMaterialRow} />
              <div className="addrowinstruction"></div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>S no.</th>
                  <th>Material Code </th>
                  <th>Material Name</th>
                  <th>UOM</th>
                  <th>Step No </th>
                  <th>Std. Qty.</th>
                  <th>Req. Qty. </th>
                  <th>Qty. Used </th>
                  <th>A.R. No/Batch No.</th>
                  <th>Checked By Sign </th>
                  <th>Date </th>
                </tr>
              </thead>
              <tbody>
                {packingMaterialTablesData.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <input
                        value={item.materialCode}
                        onChange={(e) => {
                          const newData = [...packingMaterialTablesData];
                          newData[index].materialCode = e.target.value;
                          setpackingMaterialTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.materialName}
                        onChange={(e) => {
                          const newData = [...packingMaterialTablesData];
                          newData[index].materialName = e.target.value;
                          setpackingMaterialTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.UOM}
                        onChange={(e) => {
                          const newData = [...packingMaterialTablesData];
                          newData[index].UOM = e.target.value;
                          setpackingMaterialTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.stepNo}
                        onChange={(e) => {
                          const newData = [...packingMaterialTablesData];
                          newData[index].stepNo = e.target.value;
                          setpackingMaterialTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.stdQty}
                        onChange={(e) => {
                          const newData = [...packingMaterialTablesData];
                          newData[index].stdQty = e.target.value;
                          setpackingMaterialTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.reqQty}
                        onChange={(e) => {
                          const newData = [...packingMaterialTablesData];
                          newData[index].reqQty = e.target.value;
                          setpackingMaterialTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.qtyUsed}
                        onChange={(e) => {
                          const newData = [...packingMaterialTablesData];
                          newData[index].qtyUsed = e.target.value;
                          setpackingMaterialTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.arNoBatchNo}
                        onChange={(e) => {
                          const newData = [...packingMaterialTablesData];
                          newData[index].arNoBatchNo = e.target.value;
                          setpackingMaterialTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.checkedBySign}
                        onChange={(e) => {
                          const newData = [...packingMaterialTablesData];
                          newData[index].checkedBySign = e.target.value;
                          setpackingMaterialTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={item.Date}
                        onChange={(e) => {
                          const newData = [...packingMaterialTablesData];
                          newData[index].Date = e.target.value;
                          setpackingMaterialTablesData(newData);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="sub-head">Solvent For Batch To Batch Cleaning </div>

            <div className="AddRows d-flex">
              <NoteAdd onClick={addBatchCleaningRow} />
              <div className="addrowinstruction"></div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>S no.</th>
                  <th>Material Code </th>
                  <th>Material Name</th>
                  <th>UOM</th>
                  <th>Step No </th>
                  <th>Std. Qty.</th>
                  <th>Req. Qty. </th>
                  <th>Qty. Used </th>
                  <th>A.R. No/Batch No.</th>
                  <th>Checked By Sign </th>
                  <th>Date </th>
                </tr>
              </thead>
              <tbody>
                {batchCleaningTablesData.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <input
                        value={item.materialCode}
                        onChange={(e) => {
                          const newData = [...batchCleaningTablesData];
                          newData[index].materialCode = e.target.value;
                          setbatchCleaningTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.materialName}
                        onChange={(e) => {
                          const newData = [...batchCleaningTablesData];
                          newData[index].materialName = e.target.value;
                          setbatchCleaningTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.UOM}
                        onChange={(e) => {
                          const newData = [...batchCleaningTablesData];
                          newData[index].UOM = e.target.value;
                          setbatchCleaningTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.stepNo}
                        onChange={(e) => {
                          const newData = [...batchCleaningTablesData];
                          newData[index].stepNo = e.target.value;
                          setbatchCleaningTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.stdQty}
                        onChange={(e) => {
                          const newData = [...batchCleaningTablesData];
                          newData[index].stdQty = e.target.value;
                          setbatchCleaningTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.reqQty}
                        onChange={(e) => {
                          const newData = [...batchCleaningTablesData];
                          newData[index].reqQty = e.target.value;
                          setbatchCleaningTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.qtyUsed}
                        onChange={(e) => {
                          const newData = [...batchCleaningTablesData];
                          newData[index].qtyUsed = e.target.value;
                          setbatchCleaningTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.arNoBatchNo}
                        onChange={(e) => {
                          const newData = [...batchCleaningTablesData];
                          newData[index].arNoBatchNo = e.target.value;
                          setbatchCleaningTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.checkedBySign}
                        onChange={(e) => {
                          const newData = [...batchCleaningTablesData];
                          newData[index].checkedBySign = e.target.value;
                          setbatchCleaningTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={item.Date}
                        onChange={(e) => {
                          const newData = [...batchCleaningTablesData];
                          newData[index].Date = e.target.value;
                          setbatchCleaningTablesData(newData);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="sub-head">
              Solvent For Container/Hosepipe And Accessories Cleaning
            </div>

            <div className="AddRows d-flex">
              <NoteAdd onClick={addaccessoriesRow} />
              <div className="addrowinstruction"></div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>S no.</th>
                  <th>Material Code </th>
                  <th>Material Name</th>
                  <th>UOM</th>
                  <th>Step No </th>
                  <th>Std. Qty.</th>
                  <th>Req. Qty. </th>
                  <th>Qty. Used </th>
                  <th>A.R. No/Batch No.</th>
                  <th>Checked By Sign </th>
                  <th>Date </th>
                </tr>
              </thead>
              <tbody>
                {accessoriesCleaningTablesData.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <input
                        value={item.materialCode}
                        onChange={(e) => {
                          const newData = [...accessoriesCleaningTablesData];
                          newData[index].materialCode = e.target.value;
                          setAccessoriesCleaningTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.materialName}
                        onChange={(e) => {
                          const newData = [...accessoriesCleaningTablesData];
                          newData[index].materialName = e.target.value;
                          setAccessoriesCleaningTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.UOM}
                        onChange={(e) => {
                          const newData = [...accessoriesCleaningTablesData];
                          newData[index].UOM = e.target.value;
                          setAccessoriesCleaningTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.stepNo}
                        onChange={(e) => {
                          const newData = [...accessoriesCleaningTablesData];
                          newData[index].stepNo = e.target.value;
                          setAccessoriesCleaningTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.stdQty}
                        onChange={(e) => {
                          const newData = [...accessoriesCleaningTablesData];
                          newData[index].stdQty = e.target.value;
                          setAccessoriesCleaningTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.reqQty}
                        onChange={(e) => {
                          const newData = [...accessoriesCleaningTablesData];
                          newData[index].reqQty = e.target.value;
                          setAccessoriesCleaningTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.qtyUsed}
                        onChange={(e) => {
                          const newData = [...accessoriesCleaningTablesData];
                          newData[index].qtyUsed = e.target.value;
                          setAccessoriesCleaningTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.arNoBatchNo}
                        onChange={(e) => {
                          const newData = [...accessoriesCleaningTablesData];
                          newData[index].arNoBatchNo = e.target.value;
                          setAccessoriesCleaningTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.checkedBySign}
                        onChange={(e) => {
                          const newData = [...accessoriesCleaningTablesData];
                          newData[index].checkedBySign = e.target.value;
                          setAccessoriesCleaningTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={item.Date}
                        onChange={(e) => {
                          const newData = [...accessoriesCleaningTablesData];
                          newData[index].Date = e.target.value;
                          setAccessoriesCleaningTablesData(newData);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="sub-head">Intermediate Issuance</div>

            <div className="AddRows d-flex">
              <NoteAdd onClick={addIntermediateIssanceRow} />
              <div className="addrowinstruction"></div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>S no.</th>
                  <th>In-put Qty. (kg) </th>
                  <th> Material Code</th>
                  <th>Batch Number</th>
                  <th>Actual Issued Qty. </th>
                  <th>Sign</th>
                  <th>Date </th>
                </tr>
              </thead>
              <tbody>
                {intermadiateIssuanceTablesData.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <input
                        value={item.inpQtyKg}
                        onChange={(e) => {
                          const newData = [...intermadiateIssuanceTablesData];
                          newData[index].inpQtyKg = e.target.value;
                          setIntermadiateIssuanceTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.materialCode}
                        onChange={(e) => {
                          const newData = [...intermadiateIssuanceTablesData];
                          newData[index].materialCode = e.target.value;
                          setIntermadiateIssuanceTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={item.batchNo}
                        onChange={(e) => {
                          const newData = [...intermadiateIssuanceTablesData];
                          newData[index].batchNo = e.target.value;
                          setIntermadiateIssuanceTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.actualIssuedQty}
                        onChange={(e) => {
                          const newData = [...intermadiateIssuanceTablesData];
                          newData[index].stepNo = e.target.value;
                          setIntermadiateIssuanceTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.sign}
                        onChange={(e) => {
                          const newData = [...intermadiateIssuanceTablesData];
                          newData[index].sign = e.target.value;
                          setAccessoriesCleaningTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={item.date}
                        onChange={(e) => {
                          const newData = [...intermadiateIssuanceTablesData];
                          newData[index].date = e.target.value;
                          setAccessoriesCleaningTablesData(newData);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="sub-head">HAZOP Recommendations</div>

            <div className="AddRows d-flex">
              <NoteAdd onClick={addHazopRow} />
              <div className="addrowinstruction"></div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>S no.</th>
                  <th>HAZOP Recommendations </th>
                  <th> Category </th>
                </tr>
              </thead>
              <tbody>
                {hazopTablesData.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <input
                        value={item.HAZOP_Recommendation}
                        onChange={(e) => {
                          const newData = [...hazopTablesData];
                          newData[index].HAZOP_Recommendation = e.target.value;
                          setHazopTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <select
                        value={item.category}
                        onChange={(e) => {
                          const newData = [...hazopTablesData];
                          newData[index].category = e.target.value;
                          setHazopTablesData(newData);
                        }}
                      >
                        <option>--Select Category--</option>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="sub-head">
              Process Safety Study Details And Gas /By Product Generation
              Details
            </div>

            <div className="AddRows d-flex">
              <NoteAdd onClick={addprocessSafetyRow} />
              <div className="addrowinstruction"></div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>S no.</th>
                  <th>Test </th>
                  <th> Result </th>
                  <th>Remark</th>
                </tr>
              </thead>
              <tbody>
                {processSafetyTablesData.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <input
                        value={item.test}
                        onChange={(e) => {
                          const newData = [...processSafetyTablesData];
                          newData[index].test = e.target.value;
                          setProcessSafetyTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.result}
                        onChange={(e) => {
                          const newData = [...processSafetyTablesData];
                          newData[index].result = e.target.value;
                          setProcessSafetyTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.remark}
                        onChange={(e) => {
                          const newData = [...processSafetyTablesData];
                          newData[index].remark = e.target.value;
                          setProcessSafetyTablesData(newData);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="sub-head">
              Personal Protective Equipment (PPE) Matrix
            </div>

            <div className="AddRows d-flex">
              <NoteAdd onClick={addPPEMatrixRow} />
              <div className="addrowinstruction"></div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>S no.</th>
                  <th>Chemical Name </th>
                  <th> Hand Protection</th>
                  <th>Eye Protection</th>
                  <th>Respiratory protection</th>
                  <th>Foot Shoes</th>
                  <th>Body Protection</th>
                </tr>
              </thead>
              <tbody>
                {ppeMatrixTablesData.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <input
                        value={item.chemicalName}
                        onChange={(e) => {
                          const newData = [...ppeMatrixTablesData];
                          newData[index].chemicalName = e.target.value;
                          setPPEMatrixTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.handProtection}
                        onChange={(e) => {
                          const newData = [...ppeMatrixTablesData];
                          newData[index].handProtection = e.target.value;
                          setPPEMatrixTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.eyeProtection}
                        onChange={(e) => {
                          const newData = [...ppeMatrixTablesData];
                          newData[index].eyeProtection = e.target.value;
                          setPPEMatrixTablesData(newData);
                        }}
                      />
                    </td>

                    <td>
                      <input
                        value={item.respiratoryProtection}
                        onChange={(e) => {
                          const newData = [...ppeMatrixTablesData];
                          newData[index].respiratoryProtection = e.target.value;
                          setPPEMatrixTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.footshoes}
                        onChange={(e) => {
                          const newData = [...ppeMatrixTablesData];
                          newData[index].footshoes = e.target.value;
                          setPPEMatrixTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.bodyProtection}
                        onChange={(e) => {
                          const newData = [...ppeMatrixTablesData];
                          newData[index].bodyProtection = e.target.value;
                          setPPEMatrixTablesData(newData);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="sub-head">
              Identification Of Hazards And Control
            </div>

            <div className="AddRows d-flex">
              <NoteAdd onClick={addHazardAndControlRow} />
              <div className="addrowinstruction"></div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>S no.</th>
                  <th>Name </th>
                  <th> Antidote </th>
                  <th>Specific Hazard</th>
                  <th>Precaution</th>
                </tr>
              </thead>
              <tbody>
                {hazardAndControlTablesData.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <input
                        value={item.name}
                        onChange={(e) => {
                          const newData = [...hazardAndControlTablesData];
                          newData[index].name = e.target.value;
                          setHazardAndControlTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.antidot}
                        onChange={(e) => {
                          const newData = [...hazardAndControlTablesData];
                          newData[index].antidot = e.target.value;
                          setHazardAndControlTablesData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        value={item.specificHazard}
                        onChange={(e) => {
                          const newData = [...hazardAndControlTablesData];
                          newData[index].specificHazard = e.target.value;
                          setHazardAndControlTablesData(newData);
                        }}
                      />
                    </td>

                    <td>
                      <input
                        value={item.precaution}
                        onChange={(e) => {
                          const newData = [...hazardAndControlTablesData];
                          newData[index].precaution = e.target.value;
                          setHazardAndControlTablesData(newData);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="sub-head">Critical Process Parameterfor Safety</div>

            <div className="AddRows d-flex">
              <NoteAdd onClick={addCriticalProcessParameterForSafety} />
              <div className="addrowinstruction"></div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>S no.</th>
                  <th>BMR Step No. </th>
                  <th> Critical Process Parameter </th>
                  <th>Justification</th>
                </tr>
              </thead>
              <tbody>
                {criticalProcessPFS?.map((item, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>
                        <input
                          value={item.BMRStepNo}
                          onChange={(e) => {
                            const newData = [...criticalProcessPFS];
                            newData[index].BMRStepNo = e.target.value;
                            setCriticalProcessPFS(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.criticalProcessParameter}
                          onChange={(e) => {
                            const newData = [...criticalProcessPFS];
                            newData[index].criticalProcessParameter =
                              e.target.value;
                            setCriticalProcessPFS(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.justification}
                          onChange={(e) => {
                            const newData = [...criticalProcessPFS];
                            newData[index].justification = e.target.value;
                            setCriticalProcessPFS(newData);
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="sub-head">
              Critical Process Parameter For Quality
            </div>

            <div className="AddRows d-flex">
              <NoteAdd onClick={addCriticalProcessParameterForQuality} />
              <div className="addrowinstruction"></div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>S no.</th>
                  <th>BMR Step No. </th>
                  <th>Critical Process Parameter </th>
                  <th>Justification</th>
                </tr>
              </thead>
              <tbody>
                {CriticalProcessPFQ?.map((item, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>
                        <input
                          value={item.BMRStepNo}
                          onChange={(e) => {
                            const newData = [...CriticalProcessPFQ];
                            newData[index].BMRStepNo = e.target.value;
                            setCriticalProcessPFQ(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.criticalProcessParameter}
                          onChange={(e) => {
                            const newData = [...CriticalProcessPFQ];
                            newData[index].criticalProcessParameter =
                              e.target.value;
                            setCriticalProcessPFQ(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.justification}
                          onChange={(e) => {
                            const newData = [...CriticalProcessPFQ];
                            newData[index].justification = e.target.value;
                            setCriticalProcessPFQ(newData);
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="sub-head">Read And Understood</div>

            <div className="AddRows d-flex">
              <NoteAdd onClick={addReadAndUnderstood} />
              <div className="addrowinstruction"></div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>S no.</th>
                  <th>Name Of Person </th>
                  <th>Sign </th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {readAndUnderstood?.map((itm, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>
                        <input
                          value={itm.nameOfPerson}
                          onChange={(e) => {
                            const newData = [...readAndUnderstood];
                            newData[index].nameOfPerson = e.target.value;
                            setReadAndUnderstood(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={itm.sign}
                          onChange={(e) => {
                            const newData = [...readAndUnderstood];
                            newData[index].sign = e.target.value;
                            setReadAndUnderstood(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type="date"
                          value={itm.date}
                          onChange={(e) => {
                            const newData = [...readAndUnderstood];
                            newData[index].date = e.target.value;
                            setReadAndUnderstood(newData);
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="sub-head">Material compatibility sheet</div>

            <table>
              <thead>
                <tr>
                  <th colSpan="4">Material Compatibility sheet </th>
                  <th colSpan="2">Name of chemical</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> </td>
                  <td>Y</td>
                  <td>Compatible</td>
                  <td id="aa"> </td>
                  <td></td>
                </tr>
                <tr>
                  <td> </td>
                  <td>N</td>
                  <td>Incompatible</td>
                  <td id="aa">Name of Chemical</td>
                  <td></td>
                </tr>
                <tr>
                  <td> </td>
                  <td>C</td>
                  <td>Caution</td>
                  <td id="aa"></td>
                  <td></td>
                </tr>
                <tr>
                  <td> </td>
                  <td>SR</td>
                  <td>Self-Reactive</td>
                  <td id="aa"></td>
                  <td></td>
                </tr>

                <tr colspan="">
                  <td>F</td>
                  <td>R</td>
                  <td>H</td>
                  <td>S</td>
                  <td></td>
                </tr>
              </tbody>
            </table>

            <div className="sub-head">Manufacturing Process</div>

            <div className="flex flex-col gap-8">
              <div>
                <div className="AddRows d-flex">
                  <NoteAdd onClick={addIntermediateDispensing} />
                  <div className="addrowinstruction"></div>
                </div>
                <table border="1" align="center" width="700">
                  <thead>
                    <tr>
                      <th
                        colspan="10"
                        className="font-bold text-lg text-center"
                      >
                        Intermediate Dispensing
                      </th>
                    </tr>
                    <tr>
                      <th rowSpan={2}> Sr. No.</th>
                      <th rowSpan={2}> Material Code</th>
                      <th rowSpan={2}>Batch No.</th>
                      <th colspan="2">Time</th>

                      <th colspan="3"> Dispensing</th>
                      <th rowSpan={2}>Done by </th>
                    </tr>
                    <tr>
                      <th>From</th>
                      <th>To</th>
                      <th>Gross Wt.</th>
                      <th>Tare Wt.</th>
                      <th>Net Wt.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {intermediateDispensing.map((item, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>
                            <input
                              value={item.materialCode}
                              onChange={(e) => {
                                const newData = [...intermediateDispensing];
                                newData[index].materialCode = e.target.value;
                                setIntermediateDispensing(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.batchNo}
                              onChange={(e) => {
                                const newData = [...intermediateDispensing];
                                newData[index].batchNo = e.target.value;
                                setIntermediateDispensing(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item?.time?.from}
                              onChange={(e) => {
                                const newData = [...intermediateDispensing];
                                newData[index].time.from = e.target.value;
                                setIntermediateDispensing(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item?.time?.to}
                              onChange={(e) => {
                                const newData = [...intermediateDispensing];
                                newData[index].time.to = e.target.value;
                                setIntermediateDispensing(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item?.dispensing?.grossWt}
                              onChange={(e) => {
                                const newData = [...intermediateDispensing];
                                newData[index].dispensing.grossWt =
                                  e.target.value;
                                setIntermediateDispensing(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item?.dispensing?.tareWt}
                              onChange={(e) => {
                                const newData = [...intermediateDispensing];
                                newData[index].dispensing.tareWt =
                                  e.target.value;
                                setIntermediateDispensing(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item?.dispensing?.netWt}
                              onChange={(e) => {
                                const newData = [...intermediateDispensing];
                                newData[index].dispensing.netWt =
                                  e.target.value;
                                setIntermediateDispensing(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item?.doneBy}
                              onChange={(e) => {
                                const newData = [...intermediateDispensing];
                                newData[index].doneBy = e.target.value;
                                setIntermediateDispensing(newData);
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div>
                <div className="AddRows d-flex">
                  <NoteAdd onClick={addAfterDispensing} />
                  <div className="addrowinstruction"></div>
                </div>
                <table border="1" align="center" width="700">
                  <thead>
                    <tr className="">
                      <th
                        colspan="10"
                        className="font-bold text-lg text-center"
                      >
                        After dispensing, clean the dispensing area and weighing
                        balance using a lint-free cloth.
                      </th>
                    </tr>
                    <tr>
                      <th rowSpan={2}>Sr. Operation No.</th>
                      <th rowSpan={2}>Cleaning After dispensing</th>
                      <th rowSpan={2}>Recordings and observations</th>
                      <th rowSpan={2}>Date</th>
                      <th colSpan={2}>Time (Hrs.)</th>
                      <th rowSpan={2}>Done By/Date</th>
                      <th rowSpan={2}>Clean/Not cleaned</th>
                    </tr>
                    <tr>
                      <th>From</th>
                      <th>To</th>
                    </tr>
                  </thead>
                  <tbody>
                    {afterDispensing.map((item, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>
                            <input
                              value={item.cleaningAfterDispensing}
                              onChange={(e) => {
                                const newData = [...afterDispensing];
                                newData[index].cleaningAfterDispensing =
                                  e.target.value;
                                setAfterDispensing(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.recordingsAndObservations}
                              onChange={(e) => {
                                const newData = [...afterDispensing];
                                newData[index].recordingsAndObservations =
                                  e.target.value;
                                setAfterDispensing(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              type="date"
                              value={item.date}
                              onChange={(e) => {
                                const newData = [...afterDispensing];
                                newData[index].date = e.target.value;
                                setAfterDispensing(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.time.from}
                              onChange={(e) => {
                                const newData = [...afterDispensing];
                                newData[index].time.from = e.target.value;
                                setAfterDispensing(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.time.to}
                              onChange={(e) => {
                                const newData = [...afterDispensing];
                                newData[index].time.to = e.target.value;
                                setAfterDispensing(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.doneBy}
                              onChange={(e) => {
                                const newData = [...afterDispensing];
                                newData[index].doneBy = e.target.value;
                                setAfterDispensing(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.cleanNotClean}
                              onChange={(e) => {
                                const newData = [...afterDispensing];
                                newData[index].cleanNotClean = e.target.value;
                                setAfterDispensing(newData);
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <table className="Main-table">
                <thead>
                  <tr>
                    <th rowspan="2">Step No.</th>
                    <th rowspan="2">Operation</th>
                    <th rowspan="2">Date</th>
                    <th colspan="2">Time (hrs)</th>
                    <th rowspan="2">Recordings and Observations</th>
                    <th rowspan="2">Done by</th>
                  </tr>
                  <tr>
                    <th>From</th>
                    <th>To</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1.</td>
                    <td>Check valve pressure</td>
                    <td>2024-06-24</td>
                    <td></td>
                    <td></td>
                    <td>
                      Pressure: 12 kg/cm2 Leakage <br />
                      Observed
                    </td>
                    <td>Engineer A</td>
                  </tr>
                  <tr>
                    <td>2.</td>
                    <td>Inspect pipe fittings</td>
                    <td>2024-06-25</td>
                    <td colspan="2">---</td>
                    <td>No issues found</td>
                    <td>Technician B</td>
                  </tr>
                  <tr>
                    <td>3.</td>
                    <td>Test flow rate</td>
                    <td>2024-06-26</td>
                    <td>
                      <strong>9:30</strong>
                    </td>
                    <td>
                      <strong>11:00</strong>
                    </td>
                    <td>Flow rate within acceptable limits</td>
                    <td>Engineer C</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="sub-head">
              Milling, Sifting and Packing Operation:
            </div>
            <div className="AddRows d-flex">
              <NoteAdd onClick={addWeightDetails} />
              <div className="addrowinstruction"></div>
            </div>
            <div className="font-bold pb-1">Weight details:</div>

            <table>
              <thead>
                <tr>
                  <th>Gross Container No.</th>
                  <th>weight (Kg.)</th>
                  <th>Tare weight (Kg.)</th>
                  <th>Net weight (kg.)</th>
                  <th>Done by</th>
                  <th>Seal by No.</th>
                  <th>Sealed by QC</th>
                  <th>Checked by</th>
                </tr>
              </thead>
              <tbody>
                {weightDetails.map((item, index) => {
                  return (
                    <tr>
                      <td>
                        <input
                          type=""
                          value={item.grossContainerNo}
                          onChange={(e) => {
                            const newData = [...weightDetails];
                            newData[index].grossContainerNo = e.target.value;
                            setWeightDetails(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type=""
                          value={item.weight}
                          onChange={(e) => {
                            const newData = [...weightDetails];
                            newData[index].weight = e.target.value;
                            setWeightDetails(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type=""
                          value={item.tareWeight}
                          onChange={(e) => {
                            const newData = [...weightDetails];
                            newData[index].tareWeight = e.target.value;
                            setWeightDetails(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type=""
                          value={item.netWeight}
                          onChange={(e) => {
                            const newData = [...weightDetails];
                            newData[index].netWeight = e.target.value;
                            setWeightDetails(newData);
                          }}
                        />
                      </td>

                      <td>
                        <input
                          type=""
                          value={item.doneBy}
                          onChange={(e) => {
                            const newData = [...weightDetails];
                            newData[index].doneBy = e.target.value;
                            setWeightDetails(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type=""
                          value={item.sealByNo}
                          onChange={(e) => {
                            const newData = [...weightDetails];
                            newData[index].sealByNo = e.target.value;
                            setWeightDetails(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type=""
                          value={item.sealedByQC}
                          onChange={(e) => {
                            const newData = [...weightDetails];
                            newData[index].sealedByQC = e.target.value;
                            setWeightDetails(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type=""
                          value={item.checkedBy}
                          onChange={(e) => {
                            const newData = [...weightDetails];
                            newData[index].checkedBy = e.target.value;
                            setWeightDetails(newData);
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td>
                    <input type="number" />
                  </td>
                  <td>
                    <input type="number" />
                  </td>
                  <td>
                    <input type="number" />
                  </td>
                  <td>
                    <input type="number" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td colspan="3">Total Qty. </td>
                  <td>
                    <input type="number" />
                  </td>
                  <td colspan="2"></td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="sub-head">Area Cleaning:</div>
            <div className="font-bold pb-1">Specimen Product label:</div>

            <div class="group-input border border-black">
              <textarea
                class="summernote"
                name="initiated_through"
                id="summernote-1"
              ></textarea>
            </div>

            <div className="sub-head">
              Batch to Batch Cleaning Record (Type “A” cleaning):
            </div>

            <table>
              <thead>
                <tr>
                  <th>Step No.</th>
                  <th>Operation</th>
                  <th>Date</th>
                  <th> Time (From) </th>
                  <th> Time (To) </th>
                  <th>Recordings and</th>
                  <th>Done</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="7">
                    <b>Idle Cleaning:</b>
                  </td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>

                <tr>
                  <td colSpan="7">
                    <b>Batch to Batch Cleaning:</b>
                  </td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="sub-head">Reconciliation of Batch output</div>
            <table className="">
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th colspan="3">Output reconciliation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Total Output quantity</td>
                  <td>:</td>
                  <td>-------------Kg</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>Sampling quantity as per respective STP</td>
                  <td>:</td>
                  <td>-------------Kg</td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>Stability/hold time sample quantity (if any)</td>
                  <td>:</td>
                  <td>-------------Kg</td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>Additional sampleqty.(if any)</td>
                  <td>:</td>
                  <td>-------------Kg</td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td>
                    Final pack quantity is to offered for complete analysis
                  </td>
                  <td>:</td>
                  <td>-------------Kg</td>
                </tr>
                <tr>
                  <td colspan="2">Done By Sign & date</td>
                  <td colspan="2">Checked by Sign & date</td>
                </tr>
              </tbody>
            </table>

            <div className="sub-head">Raw Material Reconciliation</div>

            <div className="flex flex-col gap-8">
              <div>
                <div className="AddRows d-flex">
                  <NoteAdd onClick={addrMR} />
                  <div className="addrowinstruction"></div>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Raw material Name</th>
                      <th>UOM</th>
                      <th>Issued Qty.</th>
                      <th>Used Qty.</th>
                      <th>Remark</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rMR.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            type="text"
                            className="p-2 border border-gray-300 rounded-md"
                            value={item.rawMaterialName}
                            onChange={(e) => {
                              const newData = [...rMR];
                              newData[index].rawMaterialName = e.target.value;
                              setRMR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="p-2 border border-gray-300 rounded-md"
                            value={item.UOM}
                            onChange={(e) => {
                              const newData = [...rMR];
                              newData[index].UOM = e.target.value;
                              setRMR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="p-2 border border-gray-300 rounded-md"
                            value={item.issuedQty}
                            onChange={(e) => {
                              const newData = [...rMR];
                              newData[index].issuedQty = e.target.value;
                              setRMR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="p-2 border border-gray-300 rounded-md"
                            value={item.usedQty}
                            onChange={(e) => {
                              const newData = [...rMR];
                              newData[index].usedQty = e.target.value;
                              setRMR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="p-2 border border-gray-300 rounded-md"
                            value={item.remark}
                            onChange={(e) => {
                              const newData = [...rMR];
                              newData[index].remark = e.target.value;
                              setRMR(newData);
                            }}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div>
                <div className="AddRows d-flex">
                  <NoteAdd onClick={addDeviation} />
                  <div className="addrowinstruction"></div>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th colSpan={6} className="font-bold text-xl text-center">
                        REMARKS / DEVIATIONS (IF ANY)
                      </th>
                    </tr>
                    <tr>
                      <th>Date</th>
                      <th>Step No./ Page No.</th>
                      <th>Observation / Deviation Details</th>
                      <th>Reason / Justification</th>
                      <th>Recorded on</th>
                      <th>Recorded by Sign & Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deviation?.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <input
                            type="date"
                            className="p-2 border border-gray-300 rounded-md"
                            value={item.date}
                            onChange={(e) => {
                              const newData = [...deviation];
                              newData[index].date = e.target.value;
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="p-2 border border-gray-300 rounded-md"
                            value={item.stepnoPageno}
                            onChange={(e) => {
                              const newData = [...deviation];
                              newData[index].stepnoPageno = e.target.value;
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="p-2 border border-gray-300 rounded-md"
                            value={item.observation}
                            onChange={(e) => {
                              const newData = [...deviation];
                              newData[index].observation = e.target.value;
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="p-2 border border-gray-300 rounded-md"
                            value={item.reason}
                            onChange={(e) => {
                              const newData = [...deviation];
                              newData[index].reason = e.target.value;
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="p-2 border border-gray-300 rounded-md"
                            value={item.recordedOn}
                            onChange={(e) => {
                              const newData = [...deviation];
                              newData[index].recordedOn = e.target.value;
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="p-2 border border-gray-300 rounded-md"
                            value={item.recordedSign}
                            onChange={(e) => {
                              const newData = [...deviation];
                              newData[index].recordedSign = e.target.value;
                            }}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="button-block" style={{ width: "100%" }}>
        <button
          className="themeBtn"
          onClick={() => {
            handleSave(ManufacturingRecord);
          }}
        >
          Save
        </button>

        <button className="themeBtn" onClick={() => navigate("/desktop")}>
          Exit
        </button>
      </div>
    </div>
  );
};

export default BMRForm;
