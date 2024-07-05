import { useEffect, useReducer, useState } from "react";
import HeaderTop from "../../components/Header/HeaderTop";
import HeaderBottom from "../../components/Header/HeaderBottom";
import "./Desktop.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Desktop() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const Ebmr = useSelector((state) => state.ebmrData.EBMRFormData);
  console.log(Ebmr, "Ebmr");

  const handleRowClick = (row) => {
    dispatch({ type: "SELECT_ROW", payload: row });
    navigate("/eBMR-panel");
  };

  const pankaj = useSelector((state) => state.dprPanelData.selectedRow);
  console.log(pankaj, "ghj");

  return (
    <>
      <HeaderTop />
      <HeaderBottom />
      <div className="desktop-input-table-wrapper">
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
            {Ebmr?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td
                    onClick={() => handleRowClick(item)}
                    className="cursor-pointer hover:text-blue-600"
                  >
                    {item.eBMRId}
                  </td>
                  <td>{item.productName}</td>
                  <td>{item.productCode}</td>
                  <td>{item.process}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Desktop;
