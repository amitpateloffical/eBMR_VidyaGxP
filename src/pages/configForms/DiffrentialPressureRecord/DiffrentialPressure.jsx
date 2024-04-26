import { useEffect, useReducer, useState } from "react";
import HeaderTop from "../../../components/Header/HeaderTop";
import "../ConfigForms.css";
import {
  docFormFile,
  tableData,
  time,
} from "./DifferentialPressureFunction.jsx";
import Grid from "../../../components/datafields/Grid.jsx";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { NoteAdd } from "@mui/icons-material";

export default function DiffrentialPressure() {
  const [isSelectedGeneral, setIsSelectedGeneral] = useState(true);
  const [isSelectedDetails, setIsSelectedDetails] = useState(false);
  const [allTableData, setAllTableData] = useState([]);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const object = getCurrentDateTime();
  let date = object.currentDate;
  function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear().toString().slice(-2);
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    const currentDate = `${day}/${month}/${year}`;
    return {
      currentDate: currentDate,
    };
  }

  const addRow = () => {
    const currentTime = new Date().toLocaleTimeString();
    const newRow = {
      date: date,
      time: currentTime,
      limit: "",
      remark: "",
      checkedBy: "Amit Guru",
      file: null,
    };
    setAllTableData([...allTableData, newRow]);
  };

  const deleteRow = (index) => {
    const updatedData = [...allTableData];
    updatedData.splice(index, 1);
    setAllTableData(updatedData);
  };

  const uniqueId =
    "ABC/" +
    Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, "0") +
    "/" +
    Math.floor(Math.random() * 10000)
      .toString()
      .padStart(2, "0");

  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });

  const handleSave = (data) => {
    if (parseFloat(data.limit) < 0.6 || parseFloat(data.limit) > 2.6) {
      toast.error("The limit value must be between 0.6 to 2.6.");
      return;
    }
    toast.success("eLog Saved Successfully!");
    createObject(data);
    navigate("/desktop");
  };
  const [differentialPRecord, setDifferentialPRecord] = useReducer(
    (prev, next) => ({
      ...prev,
      ...next,
    }),
    {
      process: "Diffrential pressure",
      eLogId: uniqueId + 1,
      initiator: "",
      dateOfInitiation: date,
      shortDescription: "",
      description: "",
      status: "",
      department: "",
      reviewComment: "",
      compressionArea: "",
      limit: "",
    }
  );
  useEffect(() => {
    setDifferentialPRecord({ gridData: allTableData });
  }, [allTableData]);
  const createObject = (newObject) => {
    dispatch({ type: "ADD_OBJECT", payload: newObject });
  };
  const handleDeleteFile = (index) => {
    const updatedData = [...allTableData];
    updatedData[index].file = null; // This should remove the file
    setAllTableData(updatedData);
  };
  const handleFileChange = (index, file) => {
    const updatedData = [...allTableData];
    updatedData[index].file = file;
    setAllTableData(updatedData);
  };

  return (
    <>
      <HeaderTop />
      <div id="main-form-container">
        <div id="config-form-document-page">
        <div className="document-form">
        <div className="details-form-data">
        <div className="sop-type-header">
                <div className="logo">
                  <img src="/vidyalogo2.png" alt="..." />
                </div>
                <div className="main-head">
                  <div>BATCH MANUFACTURING RECORD (BMR)</div>
                </div>
              </div>
              </div>
              </div>
          <div className="top-block">
            <div>
              <strong> Product Name &nbsp;:</strong>&nbsp; <input type="text" />
            </div>
            <div>
              <strong> Document No.&nbsp;:</strong>&nbsp; <input type="text" />
              
            </div>
            <div>
              <strong> Product Code&nbsp;:</strong>&nbsp; <input type="text" />
            </div>
            <div>
              <strong> Effective Date&nbsp;:</strong>&nbsp; <input type="text" />
              
            </div>
          </div>
          <div className="top-block m-1">
            <div>
              <strong> Stage &nbsp;:</strong>&nbsp; <input type="text" />
            </div>
            <div>
              <strong> Supersedes No.&nbsp;:</strong>&nbsp; <input type="text" />
              
            </div>
            <div>
              <strong> Batch No.&nbsp;:</strong>&nbsp; <input type="text" />
            </div>
            <div>
              <strong> Page No.&nbsp;:</strong>&nbsp; <input type="text" />
              
            </div>
          </div>

          <div className="document-form">
            <div className="details-form-data">
              <div className="outerDiv5">
                <div className="btn-forms">
                  <div
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
                  </div>
                  <div
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
                  </div>
                </div>
                {/* <div className="analytics-btn">
                  <button className="btn-print" onClick={() => navigate("/analytics")}>
                    Analytics
                  </button>
                  <button className="btn-print" onClick={() => {}}>
                    Print
                  </button>
                </div> */}
              </div>

              {isSelectedGeneral === true ? (
                <>
                  <div className="group-input">
                    <label className="color-label">Initiator </label>
                    <div>
                      <input
                        type="text"
                        value={differentialPRecord.initiator}
                        onChange={(e) =>
                          setDifferentialPRecord({ initiator: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="group-input">
                    <label className="color-label">Date of Initiation</label>
                    <div>
                      <input
                        type="text"
                        value={date}
                        onChange={(e) =>
                          setDifferentialPRecord({
                            dateOfInitiation: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="group-input">
                    <label className="color-label">Short Description</label>
                    <div>
                      <input
                        type="text"
                        value={differentialPRecord.shortDescription}
                        onChange={(e) =>
                          setDifferentialPRecord({
                            shortDescription: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="group-input">
                    <label className="color-label">Description</label>
                    <div>
                      <input
                        type="text"
                        value={differentialPRecord.description}
                        onChange={(e) =>
                          setDifferentialPRecord({
                            description: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="group-input">
                    <label className="color-label">Status</label>
                    <div>
                      <input
                        type="text"
                        value={differentialPRecord.status}
                        onChange={(e) =>
                          setDifferentialPRecord({ status: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </>
              ) : null}

              {isSelectedDetails === true ? (
                <>
                  <div className="group-input">
                    <label className="color-label">Department</label>
                    <div className="instruction">&nbsp;</div>
                    <select
                      className="form-control"
                      name="assign_to"
                      value={differentialPRecord.department}
                      onChange={(e) =>
                        setDifferentialPRecord({
                          department: e.target.value,
                        })
                      }
                    >
                      <option value="">-- Select --</option>
                      <option value="Corporate Quality Assurance">
                        Corporate Quality Assurance
                      </option>
                      <option value="Quality Assurance Bio-Pharma">
                        Quality Assurance Bio-Pharma
                      </option>
                      <option value="Central Quality Control">
                        Central Quality Control
                      </option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Plasma Sourcing Grou">
                        Plasma Sourcing Group
                      </option>
                      <option value="Central Stores">Central Stores</option>
                      <option value="Information Technology Group">
                        Information Technology Group
                      </option>
                      <option value="Molecular Medicine">
                        Molecular Medicine
                      </option>
                      <option value="Central Laboratory">
                        Central Laboratory
                      </option>
                      <option value="Tech team">Tech team</option>
                    </select>
                  </div>

                  <div className="group-input">
                    <label className="color-label">
                      Compression Area with respect to Corridor
                    </label>
                    <div className="instruction">&nbsp;</div>
                    <select
                      className="form-control"
                      name="assign_to"
                      value={differentialPRecord.compressionArea}
                      onChange={(e) =>
                        setDifferentialPRecord({
                          compressionArea: e.target.value,
                        })
                      }
                    >
                      <option value="Select a value">Select a value</option>
                      <option value="Area 1">Area 1</option>
                      <option value="Area 2">Area 2</option>
                      <option value="Area 3">Area 3</option>
                      <option value="Area 4">Area 4</option>
                      <option value="Area 5">Area 5</option>
                      <option value="Area 6">Area 6</option>
                    </select>
                  </div>

                  <div className="group-input">
                    <label className="color-label">Limit</label>
                    <div className="instruction"></div>
                    <input
                      type="number"
                      className={`${
                        differentialPRecord.limit < 0.6
                          ? "limit"
                          : differentialPRecord.limit > 2.6
                          ? "limit"
                          : ""
                      }`}
                      value={differentialPRecord.limit}
                      onChange={(e) =>
                        setDifferentialPRecord({ limit: e.target.value })
                      }
                    />
                  </div>

                  <div className="group-input">
                    <label className="color-label">Month:</label>
                    <div>
                      <input type="text" value={currentMonth} readOnly />
                    </div>
                  </div>

                  <div>
                    <div className="AddRows d-flex">
                      <NoteAdd onClick={addRow} />
                      <div className="addrowinstruction"></div>
                    </div>
                  </div>
                  <table>
                    <thead>
                      <tr>
                        <th>S no.</th>
                        <th>Unique Id</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Differential Pressure</th>
                        <th>Remark</th>
                        <th>Checked By</th>
                        <th style={{ width: "300px" }}>Supporting Documents</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allTableData.map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>UID000{index + 1}</td>
                          <td>
                            <input
                              value={item.date}
                              onChange={(e) => {
                                const newData = [...allTableData];
                                newData[index].date = e.target.value;
                                setAllTableData(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.time}
                              onChange={(e) => {
                                const newData = [...allTableData];
                                newData[index].time = e.target.value;
                                setAllTableData(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              value={item.limit}
                              className={`${
                                item.limit < 0.6
                                  ? "limit"
                                  : item.limit > 2.6
                                  ? "limit"
                                  : ""
                              }`}
                              onChange={(e) => {
                                const newData = [...allTableData];
                                newData[index].limit = e.target.value;
                                setAllTableData(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.remark}
                              onChange={(e) => {
                                const newData = [...allTableData];
                                newData[index].remark = e.target.value;
                                setAllTableData(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.checkedBy}
                              onChange={(e) => {
                                const newData = [...allTableData];
                                newData[index].checkedBy = e.target.value;
                                setAllTableData(newData);
                              }}
                            />
                          </td>
                          <td style={{ width: "250px" }}>
                            <div className="d-flex">
                              <input
                                type="file"
                                onChange={(e) =>
                                  handleFileChange(index, e.target.files[0])
                                }
                              />
                              {item.file && (
                                <DeleteIcon
                                  style={{ color: "red" }}
                                  onClick={() => handleDeleteFile(index)}
                                />
                              )}
                            </div>
                          </td>
                          <td>
                            <DeleteIcon onClick={() => deleteRow(index)} />
                            {item.limit !== "" &&
                              (item.limit < 0.6 || item.limit > 2.6) && (
                                <button
                                  style={{
                                    cursor: "pointer",
                                  }}
                                  className="deviation-btn"
                                  onClick={() => {
                                    window.location.href =
                                      "https://naveen.vidyagxp.com/deviation";
                                  }}
                                >
                                  Deviation
                                </button>
                              )}
                            {item.limit !== "" &&
                              (item.limit < 0.6 || item.limit > 2.6) && (
                                <button
                                  className="deviation-btn"
                                  onClick={() => {
                                    navigate("/chart")
                                  }}
                                >
                                  Action item
                                </button>
                              )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* <div className="group-input m">
                    <label> Review By :- </label>
                  </div> */}
                  {/* 
                  <div className="group-input">
                    <label htmlFor="">Review Comments</label>
                    <textarea
                      value={differentialPRecord.reviewComment}
                      onChange={(e) => {
                        setDifferentialPRecord({ reviewComment: e.target.value });
                      }}
                    />
                  </div> */}

                  {/* Your JSX content */}

                  {/* <Grid
                  label={docFormFile[2].label}
                  coloredLabel={docFormFile[2].coloredLabel}
                  required={docFormFile[2].required}
                  instruction={docFormFile[2].instruction}
                  columnList={docFormFile[2].columnList}
                  onChange={(data) => setDifferentialPRecord({ gridData: data })}
                /> */}
                </>
              ) : null}
            </div>
            <div className="button-block" style={{ width: "100%" }}>
              <button
                className="themeBtn"
                onClick={() => {
                  handleSave(differentialPRecord)
                }}
              >
                Save
              </button>
              {isSelectedGeneral === true ? (
                <button
                  className="themeBtn"
                  onClick={() => {
                    setIsSelectedDetails(true), setIsSelectedGeneral(false);
                  }}
                >
                  Next
                </button>
              ) : (
                <button
                  className="themeBtn"
                  onClick={() => {
                    setIsSelectedGeneral(true), setIsSelectedDetails(false);
                  }}
                >
                  Back
                </button>
              )}
              <button className="themeBtn" onClick={() => navigate("/desktop")}>
                Exit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
