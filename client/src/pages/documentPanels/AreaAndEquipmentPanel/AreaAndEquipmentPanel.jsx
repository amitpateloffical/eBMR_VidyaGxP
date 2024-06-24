import { useEffect, useReducer, useState } from "react";
import HeaderTop from "../../../components/Header/HeaderTop";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function AreaAndEquipmentPanel() {
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
    area: "",
      areaCode: "",
  });
  const editedData = useSelector((state) => state.dprPanelData.selectedRow);

  useEffect(() => {
    setEditData(editedData);
  }, [editedData]);

  const uniqueId =
    "ABC/" +
    Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, "0") +
    "/" +
    Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0");
  const date = getCurrentDate();
  const [areaAndEquiment, setAreaAndEquiment] = useReducer(
    (prev, next) => ({
      ...prev,
      ...next,
    }),
    {
      eLogId: uniqueId,
      area: "",
      areaCode: "",
      initiator: "",
      dateOfInitiation: date.currentDate,
      shortDescription: "",
      status: "",
      description: "",
      process: "Area and equipment",
    }
  );

  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear().toString().slice(-2);
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    const currentDate = `${day}/${month}/${year}`;

    return {
      currentDate: currentDate,
    };
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSave = () => {
    dispatch({ type: "EDIT-AREAANDEQUIPMENTDATA", payload:  { id: editData.eLogId, editedData: editData } });
    
    toast.success("Data saved successfully!");
    navigate("/desktop");
  };
  const handleInputChange1 = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  

  

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
                  <div>VidyaGxP Private Limited </div>
                  {/* <div>Environmental Laboratory</div> */}
                </div>
              </div>
              <div className="sub-head-2">Area and Equipment Usage Log</div>
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
                              value={editData.initiator||""}
                              onChange={handleInputChange1}
                            />
                          </div>
                        </div>
                        <div className="group-input">
                          <label className="color-label">
                            Date of Initiaton
                          </label>
                          <div>
                            <input
                              type="text"
                              value={editData.dateOfInitiation}
                              onChange={(e) =>
                                setAreaAndEquiment({
                                  dateOfInitiation: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="group-input">
                          <label className="color-label">
                            Short Description
                          </label>
                          <div>
                            <input
                              type="text"
                              name="shortDescription"
                              value={editData.shortDescription||""}
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
                              value={editData.description}
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
                              value={editData.status}
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
                          <label className="color-label">Area </label>
                          <div>
                            <input
                              type="text"
                              name="area"
                              value={editData.area}
                              onChange={handleInputChange1}
                            />
                          </div>
                        </div>
                        <div className="group-input">
                          <label className="color-label">Area Code </label>
                          <div>
                            <input
                              type="text"
                              name="areaCode"
                              value={editData.areaCode}
                              onChange={handleInputChange1}
                            />
                          </div>
                        </div>
                        <table>
                          <thead>
                            <tr>
                              <th className="width-date">
                                <div className="area-table-date">Date</div>
                              </th>
                              <th>
                                <div className="width-product">Product</div>
                              </th>
                              <th className="width-batchNo">
                                <div className="">Batch No</div>
                              </th>
                              <th className="width-typeOfActivity">
                                <div className="">Type of Activity</div>
                              </th>
                              <th className="width-reasonForCleaning">
                                <div className="">Reason For Cleaning</div>
                              </th>
                              <th className="width-area" rowSpan={"3"}>
                                <div className="">Area</div>
                              </th>
                              <th className="">
                                <div className="table-equipmentName">
                                  Equipment Name
                                </div>{" "}
                                <div>Code</div>
                              </th>
                              <th>
                                <div className="table-equipmentName">
                                  Equipment Name
                                </div>{" "}
                                <div>Code</div>
                              </th>
                              <th className="width-checkedBy">
                                <div className="">Chec ked by</div>
                              </th>
                              <th className="width-remark">
                                <div className="">Remark</div>
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr className="height-table-tr1">
                              <td style={{ height: "200px" }}></td>
                              <td></td>
                              <td></td>
                              <td>OP / QL / PM / BM </td>
                              <td>
                                PP / CB / CD / BD / CO / PM / CV / CR / BB / ID
                                / SS / ES{" "}
                              </td>

                              <td className="removedBorder3 " rowSpan={"3"}>
                                <div
                                  className="d-flex"
                                  style={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "start",
                                  }}
                                >
                                  <table className="custom-table ">
                                    <thead>
                                      <tr>
                                        <th colSpan="5">Activity Time</th>
                                      </tr>
                                    </thead>
                                    <tbody className=" ">
                                      <tr>
                                        <td className="truncate">From</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Done By</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">To</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Done by</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <table className="">
                                    <thead>
                                      <tr>
                                        <th colSpan="5">Cleaning time</th>
                                      </tr>
                                    </thead>
                                    <tbody className="">
                                      <tr>
                                        <td className="truncate ">From</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Done By</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">To</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Done by</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">
                                          Type of Cleaning
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </td>

                              <td className="removedBorder3" rowSpan={"3"}>
                                <div
                                  className="d-flex"
                                  style={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "start",
                                  }}
                                >
                                  <table className="custom-table">
                                    <thead>
                                      <tr>
                                        <th colSpan="5">Activity Time</th>
                                      </tr>
                                    </thead>
                                    <tbody className="">
                                      <tr>
                                        <td className="truncate">Data 1</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data 2</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data 3</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data 4</td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <table className="custom-table">
                                    <thead>
                                      <tr>
                                        <th colSpan="5">Cleaning time</th>
                                      </tr>
                                    </thead>
                                    <tbody className="">
                                      <tr>
                                        <td className="truncate">Data A</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data B</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data C</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data D</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data E</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </td>

                              <td className="removedBorder3" rowSpan={"3"}>
                                <div
                                  className="d-flex"
                                  style={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "start",
                                  }}
                                >
                                  <table className="custom-table">
                                    <thead>
                                      <tr>
                                        <th colSpan="5">Activity Time</th>
                                      </tr>
                                    </thead>
                                    <tbody className="">
                                      <tr>
                                        <td className="truncate">Data 1</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data 2</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data 3</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data 4</td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <table className="custom-table">
                                    <thead>
                                      <tr>
                                        <th colSpan="5">Cleaning time</th>
                                      </tr>
                                    </thead>
                                    <tbody className="">
                                      <tr>
                                        <td className="truncate">Data A</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data B</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data C</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data D</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data E</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </td>
                            </tr>
                          </tbody>

                          <tbody>
                            <tr className="height-table-tr1">
                              <td>01/ 02/ 21</td>
                              <td>
                                <select
                                  name="product"
                                  id="product"
                                  className="table-select"
                                >
                                  <option value="product1">product 1</option>
                                  <option value="product2">product 2</option>
                                  <option value="product3">product 3</option>
                                </select>
                              </td>
                              <td>ATBBV0001</td>
                              <td>Operation </td>
                              <td>NA </td>

                              <td className="removedBorder3">
                                <div
                                  className="d-flex"
                                  style={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "start",
                                  }}
                                >
                                  <table className="custom-table">
                                    <tbody className=" ">
                                      <tr>
                                        <td className="truncate">Data 1</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data 2</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data 3</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data 4</td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <table className="custom-table">
                                    <tbody className="">
                                      <tr>
                                        <td className="truncate ">Data A</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data B</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data C</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data D</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data E</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </td>

                              <td className="removedBorder3">
                                <div
                                  className="d-flex"
                                  style={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "start",
                                  }}
                                >
                                  <table className="custom-table">
                                    <tbody className=" ">
                                      <tr>
                                        <td className="truncate">Data 1</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data 2</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data 3</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data 4</td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <table className="custom-table">
                                    <tbody className="">
                                      <tr>
                                        <td className="truncate ">Data A</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data B</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data C</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data D</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data E</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </td>

                              <td className="removedBorder3">
                                <div
                                  className="d-flex"
                                  style={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "start",
                                  }}
                                >
                                  <table className="custom-table">
                                    <tbody className=" ">
                                      <tr>
                                        <td className="truncate">Data 1</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data 2</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data 3</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data 4</td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <table className="custom-table">
                                    <tbody className="">
                                      <tr>
                                        <td className="truncate ">Data A</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data B</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data C</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data D</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data E</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </td>

                              <td className="table-td-eSign">E-sign</td>
                            </tr>
                          </tbody>

                          <tbody className="removedBorder3">
                            <tr className="height-table-tr1">
                              <td>01/ 02/ 21</td>
                              <td>
                                <select
                                  name="product"
                                  id="product"
                                  className="table-select"
                                >
                                  <option value="product1">product 1</option>
                                  <option value="product2">product 2</option>
                                  <option value="product3">product 3</option>
                                </select>
                              </td>
                              <td>ATBBV0001</td>
                              <td>Operation </td>
                              <td>NA </td>

                              <td className="removedBorder3">
                                <div
                                  className="d-flex"
                                  style={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "start",
                                  }}
                                >
                                  <table className="custom-table">
                                    <tbody className=" ">
                                      <tr>
                                        <td className="truncate">Data 1</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data 2</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data 3</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data 4</td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <table className="custom-table">
                                    <tbody className="">
                                      <tr>
                                        <td className="truncate ">Data A</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data B</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data C</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data D</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data E</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </td>

                              <td className="removedBorder3">
                                <div
                                  className="d-flex"
                                  style={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "start",
                                  }}
                                >
                                  <table className="custom-table">
                                    <tbody className=" ">
                                      <tr>
                                        <td className="truncate">Data 1</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data 2</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data 3</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data 4</td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <table className="custom-table">
                                    <tbody className="">
                                      <tr>
                                        <td className="truncate ">Data A</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data B</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data C</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data D</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data E</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </td>

                              <td className="removedBorder3">
                                <div
                                  className="d-flex"
                                  style={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "start",
                                  }}
                                >
                                  <table className="custom-table">
                                    <tbody className=" ">
                                      <tr>
                                        <td className="truncate">Data 1</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data 2</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data 3</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data 4</td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <table className="custom-table">
                                    <tbody className="">
                                      <tr>
                                        <td className="truncate ">Data A</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data B</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data C</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data D</td>
                                      </tr>
                                      <tr>
                                        <td className="truncate">Data E</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </td>

                              <td className="table-td-eSign">E-sign</td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                        <table>
                          <tbody>
                            <tr className="height-table-tr1">
                              <td className="table-typeOfActiviy">
                                Type of Activity :
                              </td>
                              <td>
                                <table>
                                  <tbody>
                                    <tr>
                                      <td className="removedBorder3">OP</td>
                                    </tr>
                                    <tr>
                                      {" "}
                                      <td className="removedBorder2">QL</td>
                                    </tr>
                                    <tr>
                                      {" "}
                                      <td className="removedBorder2">PM</td>
                                    </tr>
                                    <tr>
                                      {" "}
                                      <td className="removedBorder2">BM</td>
                                    </tr>
                                    <tr>
                                      {" "}
                                      <td className="removedBorder2">NA</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td>
                                <table>
                                  {" "}
                                  <tbody>
                                    <tr>
                                      <td className="removedBorder3">
                                        Operation
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="removedBorder2">
                                        Qualification
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="removedBorder2">
                                        Preventive Maintenance
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="removedBorder2">
                                        Breakdown Maintenance
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="removedBorder2">
                                        No Activity
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>

                              <td>
                                <table>
                                  {" "}
                                  <tbody>
                                    <tr>
                                      <td className="removedBorder3">
                                        For Type A Cleaning
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="removedBorder2">
                                        PP (Product to Product changeover)
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="removedBorder2">
                                        CB (More than 5 campaign batches){" "}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="removedBorder2">
                                        CD (More than 6 campaign days)
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="removedBorder2">
                                        BD (Breakdown)
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td className="">
                                <table>
                                  <tbody>
                                    <tr>
                                      <td className="removedBorder3">
                                        For Type B Cleaning
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="removedBorder2">
                                        BB (Batch to Batch changeover)
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="removedBorder2">
                                        ES (End of shift)
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="removedBorder2"> -</td>
                                    </tr>
                                    <tr>
                                      <td className="removedBorder2">- </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>

                              <td>
                                <table>
                                  <tbody>
                                    <tr>
                                      <td className="removedBorder3">
                                        For Type C Cleaning
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="removedBorder2">
                                        SS (Start of shift)
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="removedBorder2">
                                        ID (Idle condition)
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="removedBorder2">-</td>
                                    </tr>
                                    <tr>
                                      <td className="removedBorder2">-</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                          <tbody>
                            <tr className="height-table-tr1">
                              <td className="table-typeOfActiviy">
                                Type of Cleaning :
                              </td>
                              <td>
                                <table>
                                  <tbody>
                                    <tr>
                                      <td className="removedBorder3">A</td>
                                    </tr>
                                    <tr>
                                      <td className="removedBorder2">B</td>
                                    </tr>
                                    <tr>
                                      <td className="removedBorder2">C</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td>
                                <table>
                                  <tbody>
                                    <tr>
                                      <td className="removedBorder3">
                                        Product To Product
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="removedBorder2">
                                        Batch To Batch
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="removedBorder2">
                                        Start of shift, End of shift and incase
                                        of idle condition
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>

                              <td>
                                <table>
                                  <tbody>
                                    <tr>
                                      <td className="removedBorder3">
                                        PM (Preventive Maintenance){" "}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="removedBorder2">
                                        CO (After cleaning validity is overdue)
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="removedBorder2">
                                        CV (Cleaning Validation)
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td className="">
                                <table>
                                  <tbody>
                                    <tr>
                                      <td className="removedBorder3">-</td>
                                    </tr>
                                    <tr>
                                      <td className="removedBorder2">-</td>
                                    </tr>
                                    <tr>
                                      <td className="removedBorder2">-</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>

                              <td>
                                <table>
                                  <tbody>
                                    <tr>
                                      <td className="removedBorder3">-</td>
                                    </tr>
                                    <tr>
                                      <td className="removedBorder2">-</td>
                                    </tr>
                                    <tr>
                                      <td className="removedBorder2">-</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </>
                    ) : null}
                

              <div className="button-block" style={{ width: "100%" }}>
                <button
                  className="themeBtn"
                  onClick={() => handleSave(areaAndEquiment)}
                >
                  Save
                </button>
                {isSelectedGeneral===true?<button className="themeBtn"  onClick={() => {
                      setIsSelectedDetails(true), setIsSelectedGeneral(false);
                    }}>Next</button>:<button className="themeBtn" onClick={() => {
                      setIsSelectedGeneral(true), setIsSelectedDetails(false);
                    }}>Back</button>}
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
    </>
  );
}
