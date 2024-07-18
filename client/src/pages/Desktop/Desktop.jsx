import { useEffect, useReducer, useState } from "react";
import HeaderTop from "../../components/Header/HeaderTop";
import HeaderBottom from "../../components/Header/HeaderBottom";
import "./Desktop.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Desktop() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  // const Ebmr = useSelector((state) => state.ebmrData.EBMRFormData);
  // console.log(Ebmr, "Ebmr");

  const handleRowClick = (row) => {
    dispatch({ type: "SELECT_ROW", payload: row });
  };

  // const pankaj = useSelector((state) => state.dprPanelData.selectedRow);
  // console.log(pankaj, "ghj");

  useEffect(() => {
    axios
      .get("http://localhost:1005/bmr/get-eBMR")
      .then((res) => setData(res.data)).catch((err)=>console.log(err))
  }, []);
  // console.log(data, "");
  return (
    <>
      <HeaderTop />
      <HeaderBottom />
      <div className="desktop-input-table-wrapper">
        <table>
          <thead>
            <tr>
              <th>eBMR No</th>
              <th>Product Name</th>
              <th>Product Code</th>
              <th>Process</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => {
              return (
                <tr key={index}>
                  <td
                    onClick={() => {
                      navigate("/eBMR-panel", { state: item });
                    }}
                    className="cursor-pointer hover:text-blue-700 flex items-center justify-center"
                  >
                    {item.form_id}
                  </td>
                  <td>{item.productName}</td>
                  <td>{item.productCode}</td>
                  <td>{item.documentNo}</td>
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
