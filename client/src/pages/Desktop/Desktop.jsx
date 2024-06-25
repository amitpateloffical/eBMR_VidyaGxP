import { useEffect, useReducer, useState } from "react";
import HeaderTop from "../../components/Header/HeaderTop";
import HeaderBottom from "../../components/Header/HeaderBottom";
import "./Desktop.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Desktop() {
  const navigate = useNavigate();


 
  const dispatch = useDispatch();
const Ebmr=useSelector((state)=>state.ebmrData.EBMRFormData)
console.log(Ebmr,"Ebmr")
  const handleRowClick = (row) => {
    dispatch({ type: "SELECT_ROW", payload: row });
  };



  return (
    <>
      <HeaderTop />
      <HeaderBottom />
      <div className="desktop-input-table-wrapper">
        {/* <div className="input-wrapper">
          <div className="group-input-2">
            <label>eBMR</label>
            <select
              value={eLogSelect}
              onChange={(e) => setELogSelect(e.target.value)}
            >
              <option value="All_Records">All Records</option>
              <option value="diffrential_pressure">
                Diffrential Pressure Record
              </option>
              <option value="area_and_equipment">
                Area & Equipment Usage Log
              </option>
              <option value="equipment_cleaning">
                Equipment Cleaning Checklist
              </option>
              <option value="temperature_records">Temperature Records</option>
            </select>
          </div>
          <button className="btn">Print</button>
        </div> */}

        <table>
          <thead>
            <tr>
              <th>S no</th>
              <th>eBMR no</th>
              <th>Product Name</th>
              <th>Product Code</th>
              <th>Process</th>
            </tr>
          </thead>
          <tbody>
                  
                {Ebmr?.map((item,index)=>{
                  return (
                    <tr key={item.index}>
                    <td> {index + 1}</td>
                    <td onClick={() => navigate("/dpr-panel")}>
                      {item.eBMRId}
                    </td>
                    <td>{item.productName}</td>
                    <td>{item.productCode}</td>
                    <td>{item.process}</td>
                  </tr>
                  )
                })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Desktop;
