import { useReducer, useState, useEffect } from "react";
import HeaderTop from "../../../components/Header/HeaderTop";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import ESignatureModal from "../../../components/Modals/ESignatureModal/ESignatureModal";
import { Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function EquipmentCleaningCheckListPanel() {
  const [isSelectedGeneral, setIsSelectedGeneral] = useState(true);
  const [isSelectedDetails, setIsSelectedDetails] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const [signatureModal, setSignatureModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [saveModal, setSaveModal] = useState(false);
  const [clickedRowIndex, setClickedRowIndex] = useState();
  const [editData, setEditData] = useState({
    shortDescription: "",
    status: "",
    currentDate: "",
    product: "",
    batchNo: "",
    changeControl: "",
    description: "",
    initiator: "",
  });
  const editedData = useSelector((state) => state.dprPanelData.selectedRow);

  useEffect(() => {
    setEditData(editedData);
  }, [editedData]);

  const date = getCurrentDateTime();
  const dispatch = useDispatch();
  const uniqueId =
    "ABC/" +
    Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, "0") +
    "/" +
    Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0");

  const [instrumentSop, setInstrumentSop] = useReducer(
    (prev, next) => ({
      ...prev,
      ...next,
    }),
    {
      eLogId: uniqueId,
      description: "",
      initiator: "",
      dateOfInitiation: date.currentDate,
      shortDescription: "",
      status: "",
      currentDate: "",
      product: "",
      batchNo: "",
      changeControl: "",
      process: "Equipment cleaning checklist",
    }
  );

  const closeSignatureModal = () => setSignatureModal(false);
  useEffect(() => {
    setCurrentDate(getCurrentDateTime().currentDate);
  }, []);

  const [tableData, setTableData] = useState([
    {
      sNo: "1",
      description: "	Machine is switched OFF",
      observation: "",
      comments: "",
      doneBy: "",
    },
    {
      sNo: "2",
      description: "Hopper and constant amount feeder Cleaned",
      observation: "",
      comments: "",
      doneBy: "",
    },
    {
      sNo: "3",
      description:
        "	Scrapper assembly, ejection chute and powder scraper cleaned.	",
      observation: "",
      comments: "",
      doneBy: "",
    },
    {
      sNo: "4",
      description: "Powder conveying system, hosepipes and filter cleaned. 	",
      observation: "",
      comments: "",
      doneBy: "",
    },
    {
      sNo: "5",
      description: "Turret clean	",
      observation: "",
      comments: "",
      doneBy: "",
    },
    {
      sNo: "6",
      description: "Punches and dies cleaned.	",
      observation: "",
      comments: "",
      doneBy: "",
    },
    {
      sNo: "7",
      description: "Main compression and pre-compression rollers cleaned.	",
      observation: "",
      comments: "",
      doneBy: "",
    },
    {
      sNo: "8",
      description: "Turret clean	",
      observation: "",
      comments: "",
      doneBy: "",
    },
    {
      sNo: "9",
      description: "Machine platform cleaned.	",
      observation: "",
      comments: "",
      doneBy: "",
    },
    {
      sNo: "10",
      description: "Top and bottom side of the machine cleaned.",
      observation: "",
      comments: "",
      doneBy: "",
    },
    {
      sNo: "11",
      description: "All the screws, bolts and sensors cleaned.	",
      observation: "",
      comments: "",
      doneBy: "",
    },
  ]);

  const handleInputChange = (index, name, value, action) => {
    const updatedTableData = tableData.map((item, idx) => {
      if (idx !== index) {
        return item;
      }
      return { ...item, [name]: value };
    });
    if (action === "delete") {
      updatedTableData.splice(index, 1);
    } else if (action === "edit") {
      setClickedRowIndex(index);
    }
    setTableData(updatedTableData);
  };
  const navigate = useNavigate();

  const handleSave = () => {
    dispatch({
      type: "EDIT-EQUIPMENTDATA",
      payload: { id: editData.eLogId, editedData: editData },
    });
    toast.success("Data saved successfully!");
    navigate("/desktop");
  };

  const handleInputChange1 = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

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

  const eSignatureData = useSelector((state) => state.signature.signatureData);

  return (
    <>
      <HeaderTop />
      <div id="main-form-container">
        <div id="config-form-document-page">
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

          <div className="document-form">
            <div className="details-form-data">
              <div className="sop-type-header">
                <div className="logo">
                  <img src="/vidyalogo2.png" alt="..." />
                </div>
                <div className="main-head">
                  <div>VidyaGxp </div>
                </div>
              </div>
              <div className="sub-head-2">Equipment Cleaning CheckList</div>
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
                <div className="analytics-btn">
                  <button
                    className="btn-print"
                    onClick={() => navigate("/analytics")}
                  >
                    Analytics
                  </button>
                  <button className="btn-print" onClick={() => {}}>
                    Print
                  </button>
                </div>
              </div>

              {isSelectedGeneral === true ? (
                <>
                  {" "}
                  <div className="group-input">
                    <label className="color-label">Initiator </label>
                    <div>
                      <input
                        type="text"
                        name="initiator"
                        value={editData.initiator || ""}
                        onChange={handleInputChange1}
                      />
                    </div>
                  </div>
                  <div className="group-input">
                    <label className="color-label">Date of Initiaton</label>
                    <div>
                      <input
                        type="text"
                        value={date.currentDate}
                        onChange={(e) =>
                          setInstrumentSop({
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
                        name="shortDescription"
                        value={editData.shortDescription || ""}
                        onChange={handleInputChange1}
                      />
                    </div>
                  </div>
                  <div className="group-input">
                    <label className="color-label">Description</label>
                    <div>
                      <input
                        type="text"
                        name="description"
                        value={editData.description || ""}
                        onChange={handleInputChange1}
                      />
                    </div>
                  </div>
                  <div className="group-input">
                    <label className="color-label">Status</label>
                    <div>
                      <input
                        type="text"
                        name="status"
                        value={editData.status || ""}
                        onChange={handleInputChange1}
                      />
                    </div>
                  </div>
                </>
              ) : null}

              {isSelectedDetails === true ? (
                <>
                  {" "}
                  <div className="group-input">
                    <label className="color-label">Date :</label>
                    <input
                      type="text"
                      rows="2"
                      name=""
                      value={currentDate}
                      onChange={handleInputChange1}
                    ></input>
                  </div>
                  <div className="group-input">
                    <label className="color-label">Product :</label>
                    <textarea
                      type="text"
                      rows="2"
                      name="product"
                      value={editData.product || ""}
                      onChange={handleInputChange1}
                    ></textarea>
                  </div>
                  <div className="group-input">
                    <label className="color-label">Batch No :</label>
                    <div className="instruction"></div>
                    <textarea
                      type="text"
                      rows="2"
                      name="batchNo"
                      value={editData.batchNo || ""}
                      onChange={handleInputChange1}
                    ></textarea>
                  </div>
                  {/* <Grid
                label={docFormFile[0].label}
                coloredLabel={docFormFile[0].coloredLabel}
                required={docFormFile[0].required}
                instruction={docFormFile[0].instruction}
                columnList={docFormFile[0].columnList}
              /> */}
                  <div>
                    <table>
                      <thead>
                        <tr>
                          <th>S no.</th>
                          <th>Description</th>
                          <th>Observation</th>
                          <th>Comments</th>
                          <th>Done By</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{item.description}</td>
                              <td>
                                <div className="radio-btn">
                                  <input
                                    type="radio"
                                    id={`ok${index}`}
                                    name={`observation${index}`}
                                    value="ok"
                                    checked={item.observation === "ok"}
                                    onChange={(e) =>
                                      handleInputChange(
                                        index,
                                        "observation",
                                        e.target.value
                                      )
                                    }
                                  />
                                  <label>OK</label>
                                </div>
                                <div>
                                  <input
                                    type="radio"
                                    id={`no${index}`}
                                    name={`observation${index}`}
                                    value="no"
                                    checked={item.observation === "no"}
                                    onChange={(e) =>
                                      handleInputChange(
                                        index,
                                        "observation",
                                        e.target.value
                                      )
                                    }
                                  />
                                  <label>Not ok</label>
                                </div>
                              </td>
                              <td>
                                <input
                                  type="text"
                                  value={
                                    clickedRowIndex === index
                                      ? eSignatureData.comment
                                      : item.comments
                                  }
                                  onChange={(e) =>
                                    handleInputChange(
                                      index,
                                      "comments",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  value={
                                    index === clickedRowIndex
                                      ? eSignatureData.username
                                      : ""
                                  }
                                  onChange={(e) =>
                                    handleInputChange(
                                      index,
                                      "doneBy",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td className="Actions">
                                <Tooltip title="Delete">
                                  <DeleteIcon
                                    onClick={() =>
                                      handleInputChange(
                                        index,
                                        "observation",
                                        "ok",
                                        "delete"
                                      )
                                    }
                                  />
                                </Tooltip>
                                <Tooltip title="Update">
                                  <EditIcon
                                    onClick={() => {
                                      setUpdateModal(true),
                                        handleInputChange(
                                          index,
                                          "observation",
                                          "ok",
                                          "edit"
                                        );
                                    }}
                                  />
                                </Tooltip>
                                <Tooltip title="Submit">
                                  <SaveAltIcon
                                    onClick={() =>
                                      alert("Not clear, What we want")
                                    }
                                  />
                                </Tooltip>
                                <Tooltip title="save">
                                  <TurnedInNotIcon
                                    onClick={() =>
                                      alert("Data save successfully")
                                    }
                                  />
                                </Tooltip>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </>
              ) : null}

              <div className="button-block" style={{ width: "100%" }}>
                <button
                  className="themeBtn"
                  onClick={() => handleSave(instrumentSop)}
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
                <button
                  className="themeBtn"
                  onClick={() => navigate("/desktop")}
                >
                  Exit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {signatureModal && <ESignatureModal closeModal={closeSignatureModal} />}
      {updateModal && (
        <ESignatureModal closeModal={() => setUpdateModal(false)} />
      )}
      {saveModal && <ESignatureModal closeModal={() => setSaveModal(false)} />}
    </>
  );
}
