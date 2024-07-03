import React, { useState } from "react";
import "./CapsuleEBMR.css";
import HeaderTop from "../../components/Header/HeaderTop";
import { CheckBox } from "@mui/icons-material";
import { Radio } from "@mui/material";
const CapsuleEBMR = () => {
  const [tab, setTab] = useState("General");
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
              <div>CAPSULE BATCH MANUFACTURING RECORD (CeBMR)</div>
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
          Batch Record Cover Sheet
        </div>
        <div
          onClick={() => setTab("BMF")}
          className={tab === "BMF" ? "active" : ""}
        >
          Batch Manufacturing Formula
        </div>
        <div
          onClick={() => setTab("PCOAAE")}
          className={tab === "PCOAAE" ? "active" : ""}
        >
          Potency Calculation of API and Excipients
        </div>
        <div
          onClick={() => setTab("GIFPP")}
          className={tab === "GIFPP" ? "active" : ""}
        >
          General instructions for product processing
        </div>

        <div
          onClick={() => setTab("LOPIID")}
          className={tab === "LOPIID" ? "active" : ""}
        >
          List of personnel involved in dispensing
        </div>

        <div
          onClick={() => setTab("D")}
          className={tab === "D" ? "active" : ""}
        >
          Dispensing
        </div>

        <div
          onClick={() => setTab("RMWR")}
          className={tab === "RMWR" ? "active" : ""}
        >
          Raw Materials Weighing Record
        </div>

        <div
          onClick={() => setTab("GIC")}
          className={tab === "GIC" ? "active" : ""}
        >
          Granulation-Initial checks
        </div>

        <div
          onClick={() => setTab("SIAR")}
          className={tab === "SIAR" ? "active" : ""}
        >
          Sifting Instructions and Record
        </div>

        <div
          onClick={() => setTab("BIAR")}
          className={tab === "BIAR" ? "active" : ""}
        >
          Blending Instructions and Records
        </div>

        <div
          onClick={() => setTab("WROLB")}
          className={tab === "WROLB" ? "active" : ""}
        >
          Weighing Record of Lubricated blend
        </div>

        <div
          onClick={() => setTab("TRF")}
          className={tab === "TRF" ? "active" : ""}
        >
          Test request form
        </div>

        <div
          onClick={() => setTab("R")}
          className={tab === "R" ? "active" : ""}
        >
          Reconciliation
        </div>

        <div
          onClick={() => setTab("CFIC")}
          className={tab === "CFIC" ? "active" : ""}
        >
          Capsule Filling-Initial checks
        </div>

        <div
          onClick={() => setTab("CFMS")}
          className={tab === "CFMS" ? "active" : ""}
        >
          Capsule Filling Machine setting
        </div>

        <div
          onClick={() => setTab("CFP")}
          className={tab === "CFP" ? "active" : ""}
        >
          Capsule Filling parameters
        </div>

        <div
          onClick={() => setTab("MSCFCF")}
          className={tab === "MSCFCF" ? "active" : ""}
        >
          Machine setting checks for Capsule filling
        </div>

        <div
          onClick={() => setTab("CFIAR")}
          className={tab === "CFIAR" ? "active" : ""}
        >
          Capsule filling instructions and record
        </div>

        <div
          onClick={() => setTab("IPC")}
          className={tab === "IPC" ? "active" : ""}
        >
          In-process checks
        </div>

        <div
          onClick={() => setTab("FCWR")}
          className={tab === "FCWR" ? "active" : ""}
        >
          Filled capsule weighing record
        </div>

        <div
          onClick={() => setTab("TRF")}
          className={tab === "TRF" ? "active" : ""}
        >
          Test request form
        </div>

        <div
          onClick={() => setTab("RCFS")}
          className={tab === "RCFS" ? "active" : ""}
        >
          Reconciliation (Capsule Filling Stage)
        </div>

        <div
          onClick={() => setTab("BR")}
          className={tab === "BR" ? "active" : ""}
        >
          Batch Reconciliation
        </div>

        <div
          onClick={() => setTab("PHS")}
          className={tab === "PHS" ? "active" : ""}
        >
          Process History Sheet
        </div>

        <div
          onClick={() => setTab("PIS")}
          className={tab === "PIS" ? "active" : ""}
        >
          Process Interruption Sheet
        </div>

        <div
          onClick={() => setTab("DS")}
          className={tab === "DS" ? "active" : ""}
        >
          Deviation Sheet
        </div>

        <div
          onClick={() => setTab("ROBMR")}
          className={tab === "ROBMR" ? "active" : ""}
        >
          Review Of Batch Manufacturing Record
        </div>
      </div>
      {tab === "General" ? (
        <div className="document-form">
          <div className="section-body">
            <div className="dual-group-input">
              <div className="group-input">
                <label>Product Name</label>
                <input />
              </div>

              <div className="group-input">
                <label>Generic Name</label>
                <input />
              </div>

              <div className="group-input">
                <label>BMR No </label>
                <input />
              </div>

              <div className="group-input">
                <label>Effective Date </label>
                <input />
              </div>

              <div className="group-input">
                <label>Batch Size </label>
                <input />
              </div>

              <div className="group-input">
                <label> Batch No. </label>
                <input />
              </div>

              <div className="group-input">
                <label>Supersedes No</label>
                <input />
              </div>

              <div className="group-input">
                <label> BMR Issue No</label>
                <input />
              </div>

              <div className="group-input">
                <label> MFR No</label>
                <input />
              </div>

              <div className="group-input">
                <label> BMR Issued By (QA)</label>
                <input />
              </div>

              <div className="group-input">
                <label> Date</label>
                <input />
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {tab === "QA" ? (
        <div className="document-form">
          <div className="section-body">
            <div className="sub-head"> Product Information</div>
            <div className="dual-group-input">
              <div className="group-input">
                <label>Mfg. Lic. No.</label>
                <input />
              </div>

              <div className="group-input">
                <label>Date Of Commencement</label>
                <input />
              </div>

              <div className="group-input">
                <label>PL No. </label>
                <input />
              </div>

              <div className="group-input">
                <label>Date Of Completion</label>
                <input />
              </div>

              <div className="group-input">
                <label>Shelf Life</label>
                <input />
              </div>

              <div className="group-input">
                <label>Mfg. Date </label>
                <input />
              </div>

              <div className="group-input">
                <label>M.A. Holder</label>
                <input />
              </div>
              <div className="group-input">
                <label>Expiry Date</label>
                <input />
              </div>
            </div>
            <div className="sub-head">
              {" "}
              Complition Details Of Batch Documents
            </div>

            <table>
              <thead>
                <tr>
                  <th>Total No. of pages of BMR & BPR </th>
                  <th>No. of pages</th>
                  <th>No. of pages of Analytical Reports</th>
                  <th>No. of pages </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>BMR + Annexure – I </td>
                  <td></td>
                  <td>COA of API (Micro Labs)</td>
                  <td></td>
                </tr>
                <tr>
                  <td>BPR 1 + Annexure – I</td>
                  <td></td>
                  <td>COA of API (Vendor)</td>
                  <td></td>
                </tr>
                <tr>
                  <td>BPR 2 + Annexure – I </td>
                  <td></td>
                  <td>COA of Finished Product </td>
                  <td></td>
                </tr>
                <tr>
                  <td>BPR 3 + Annexure – I </td>
                  <td></td>
                  <td>Blend Analysis Report</td>
                  <td></td>
                </tr>
                <tr>
                  <td>BPR 4 + Annexure – I </td>
                  <td></td>
                  <td>Filled capsule Report </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>Finished Product Report</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>Deviation Report (If any) </td>
                  <td></td>
                </tr>

                <tr>
                  <td></td>
                  <td></td>
                  <td>Batch Release Certificate</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td></td>
                  <td>COC / COM / Others………………</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Total (A)</td>
                  <td></td>
                  <td>Total (B)</td>
                  <td></td>
                </tr>
                <tr>Grand Total (A + B): ____________________</tr>
              </tbody>
            </table>

            <div className="sub-head">
              Review Of The Batch Records And Batch Release By QA Head
            </div>

            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Sign</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A) REVIEW OF BMR </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>B) REVIEW OF BPR </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>C) BATCH RELEASE </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>D) QUANTITY RELEASED</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : null}

      {tab === "BMF" ? (
        <div className="document-form">
          <div className="section-body">
            <table>
              <thead>
                <tr>
                  <th rowSpan="2">Sr. No.</th>
                  <th rowSpan="2">Name of Pharmaceutical Ingredient</th>
                  <th rowSpan="2">Grade </th>
                  <th rowSpan="2">Item code (SAP Code)</th>
                  <th rowSpan="2">Label Claim per capsule in mg</th>
                  <th rowSpan="2">Overages In % </th>
                  <th rowSpan="2">Input Qty. per capsule in mg</th>
                  <th colSpan="2">Quantity for the Batch in Kg</th>
                </tr>
                <tr>
                  <th>Theoretical Quantity</th>
                  <th>Actual Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <input />
                  </td>
                  <td>BP/ Ph.Eur/ IH</td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <input />
                  </td>
                  <td>BP</td>
                  <td>
                    <input />
                  </td>
                  <td className="bg-gray-300">
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <input />
                  </td>
                  <td>BP</td>
                  <td>
                    <input />
                  </td>
                  <td className="bg-gray-300">
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td colSpan="6" className=" text-end">
                    Total
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="sub-head">API Source</div>
            <table>
              <thead>
                <tr>
                  <th>Name of Pharmaceutical Ingredient </th>
                  <th>VENDOR </th>
                  <th>Item Code (SAP code)</th>
                  <th>Checked by (Sign/Date ) </th>
                  <th>Verified by (Sign/Date )</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="sub-head">
              {" "}
              Batch Manufacturing Formula (For Capsule filling)
            </div>
            <table>
              <thead>
                <tr>
                  <th>Sr. No. </th>
                  <th>Description of Empty Hard Gelatin Capsules </th>
                  <th>Grade</th>
                  <th>Item code (SAP Code)</th>
                  <th>Label Claim per capsule in mg</th>
                  <th>Overages %</th>
                  <th>Input Qty. per capsule in nos.</th>
                  <th>Actual Quantity for the Batch in nos.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : null}

      {tab === "PCOAAE" ? (
        <div className="document-form">
          <div className="section-body">
            <div className="sub-head">
              {" "}
              PART-I: Calculation For Dispensing Of __________________From
              Single A.R. No./SAP Batch No. (Continue)
            </div>
            <table>
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Parameter</th>
                  <th>
                    Column 1: (Example) Theoretical quantity of API required
                    based on Minimum potency, Maximum - Water content (Example)
                  </th>
                  <th>Column 2: Actual quantity of API required</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Name of the Product </td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>
                    Label Claim of the API in the finished product (as expressed
                    in FP monograph){" "}
                  </td>
                  <td>
                    Each Capsule contains:
                    <input />
                  </td>
                  <td>
                    Each Capsule contains:
                    <input />
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>Overages added </td>
                  <td>Nil</td>
                  <td>Nil</td>
                </tr>

                <tr>
                  <td>4</td>
                  <td>Input quantity / Capsule (a) </td>
                  <td>
                    <input />
                    (a)
                  </td>
                  <td>
                    <input />
                    (a)
                  </td>
                </tr>

                <tr>
                  <td>5</td>
                  <td>
                    API to be used on as is basis (Describe full salt including
                    Hydrate form) (A){" "}
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Pharmacopoeial Reference of API </td>
                  <td>BP</td>
                  <td>BP</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>
                    API Assay expressed in terms of (reproduce the statement
                    provided under the title in IP, Definition in BP, and after
                    in USP.){" "}
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>
                    Molecular weight of API to be used on as is basis including
                    Hydrate and/or Solvent{" "}
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>
                    Molecular weight of API salt excluding Hydrate and /or
                    Solvent{" "}
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>
                    Molecular weight of API as claimed on label of Finished
                    Product{" "}
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>
                    Minimum Assay (Purity ) of API or API salt on anhydrous
                    (dried) basis in %{" "}
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />% of <input />
                    on anhydrous basis A.R. No./SAP Batch No. of the material
                  </td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Maximum water content in % </td>
                  <td>Water content: 14.5%</td>
                  <td>
                    Water content:
                    <input /> ……………% w/w A.R. No./SAP Batch No. of the Material
                  </td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Maximum solvent content </td>
                  <td>NA</td>
                  <td>NA</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Minimum Assay of API or API salt on as is basis </td>
                  <td>
                    Minimum Assay x (100 - water Content ) /100 = 95.0 x
                    (100-14.5) / 100 =81.23% of __ <input /> on as basis.
                  </td>
                  <td>
                    Actual Assayx(100-water content) / 100 =<input />
                    .x (100-
                    <input />
                    ..) /100=
                    <input />
                    .. % of _<input /> on as basis(X). Signature of QC Manager:{" "}
                    <input />.
                  </td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Conversion factor Required or not required </td>
                  <td>
                    Not Required, Reason: Assay of API is in terms of anhydrous{" "}
                    <input />
                    and the label claim of finished product is in terms of{" "}
                    <input />
                  </td>
                  <td>
                    Not Required, Reason: Assay of API is in terms of anhydrous{" "}
                    <input />
                    and the label claim of finished product is in terms of{" "}
                  </td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>
                    Minimum content of the active entity (as required in the
                    finished product) in the API on as is basis (b) (Refer point
                    14){" "}
                  </td>
                  <td>
                    <input /> on as is basis=81.23%(b)
                  </td>
                  <td>
                    <input /> on as is basis=
                    <input />
                    %(b1)
                  </td>
                </tr>

                <tr>
                  <td>17</td>
                  <td>
                    Theoretical quantity of API on as is basis required for
                    selected batch size ‘A’
                  </td>
                  <td>
                    Theoretical quantity of API on as is basis required for
                    batch size a x Standard Batch size x 100 A= <input />
                    b <input />x 1000# x 1000##
                    <input /> x 20,00,000 x 100 = 81.23 x 1000# x 1000## ={" "}
                    <input />/{" "}
                    <span className="text-red-500">20,00,000 Capsules</span>#
                    For converting mg to g. ## For converting g to Kg a=Refer
                    point 4. b= Refer to point 16
                  </td>
                  <td>
                    Actual quantity of API on as is basis required for batch
                    size a x Actual Batch size x 100 A= <input />
                    b1 x 1000# x 1000##
                    <input /> x 20,00,000 x 100 = <input />
                    <input />
                    x1000# x 1000## = <input /> kg/ 20,00,000 Capsules # For
                    converting mg to g. ## For converting g to Kg a = Refer
                    point 4. b1 = Refer to point 16.
                  </td>
                </tr>
                <tr>
                  <td className="bg-gray-300"></td>
                  <td>Prepared by- Site QA </td>
                  <td>
                    $<input />
                  </td>
                  <td className="flex">
                    Calculations done by- Production
                    <input />
                  </td>
                </tr>
                <tr>
                  <td className="bg-gray-300"></td>
                  <td>Checked by- Production Head </td>
                  <td>
                    $<input />
                  </td>
                  <td className="flex">
                    Checked by- Head - Production <input />
                  </td>
                </tr>
                <tr>
                  <td className="bg-gray-300"></td>
                  <td>Checked by- Head QC </td>
                  <td>
                    $<input />
                  </td>
                  <td className="flex">
                    Approved by- Head QC <input />
                  </td>
                </tr>
                <tr>
                  <td className="bg-gray-300"></td>
                  <td>Authorised by- Manager QA </td>
                  <td>
                    $<input />
                  </td>
                  <td className="flex">
                    Authorised byManager QA <input />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="instruction flex flex-col">
              {" "}
              <span className="text-black font-semibold">Note:</span> 1. Column
              1 is given as an example used to the API quantity for the Batch.
              <span>
                {" "}
                2. Column 2 is to be calculated based on actual Potency of API
                for the Batch.
              </span>
            </div>
            <div className="py-3">
              <div className="sub-head">
                {" "}
                PART-II: Calculation For Dispensing Of __________________From
                Single A.R. No./SAP Batch No. (Continue)
              </div>
              <div className="instruction flex flex-col">
                If the quantity of ‘A’ of a single A.R. No./SAP Batch No. no. is
                not sufficient for the standard Batch size, calculate the Batch
                size that can be manufactured using the available quantity of
                the material after calculating b2 (the minimum content of
                _____________ (as required in the finished product) in
                _____________ on as is basis) from the following expression.
                <span>
                  <span className="text-black font-semibold">‘‘A1’</span> =
                  Available quantity of _____________{" "}
                  <span className="text-black font-semibold">‘A1’</span> in kg =
                  ___________ kg
                </span>{" "}
              </div>
              <table>
                <tbody>
                  <tr>
                    <td>Assay (Purity) on Anhydrous basis in % </td>
                    <td>
                      <input placeholder="......" />. % of{" "}
                      <input placeholder="________" />
                      on Anhydrous basis. A.R. No./SAP Batch No. of the 1st
                      material available:
                      <input placeholder="………………" />.
                    </td>
                  </tr>
                  <tr>
                    <td>Maximum water content in % w/w</td>
                    <td>
                      water content:
                      <input placeholder="………" />. % w/w A.R. No./SAP Batch No.
                      of the 1st material available:
                      <input placeholder="………………" />.
                    </td>
                  </tr>
                  <tr>
                    <td>Actual Assay on as is basis </td>
                    <td>
                      Actual Assay x (100 - Water Content) / 100 =
                      <input placeholder=" ……....." /> x (100 -
                      <input placeholder="………" /> / 100 ={" "}
                      <nput placeholder="……….…" /> % of{" "}
                      <input placeholder="__________________" /> on as is basis
                      (x). Signature of QC Manager:
                      <input placeholder="……………………" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Content of the active entity (as required in the finished
                      product) in the API on as is basis
                    </td>
                    <td>
                      <input placeholder="__________________" /> on as is basis
                      =<input placeholder="…………" />
                      .% (b2)
                    </td>
                  </tr>
                  <tr>
                    <td>Calculations done by- Production</td>
                    <td>
                      <input />
                    </td>
                  </tr>
                  <tr>
                    <td>Checked by- Manager -Production</td>
                    <td>
                      <input />
                    </td>
                  </tr>
                  <tr>
                    <td>Approved by- Manager -QC</td>
                    <td>
                      <input />
                    </td>
                  </tr>
                  <tr>
                    <td>Authorised by- Manager -QA</td>
                    <td>
                      <input />
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="py-3 flex gap-5">
                <div className="mt-6">Batch Size =</div>
                <div className="flex gap-4">
                  <div className="flex flex-col">
                    <span>‘A1’ x 1000# x 1000##</span>
                    <span>.........................................</span>
                    <span>a</span>
                  </div>
                  <div className="flex flex-col">
                    <span>b2</span>
                    <span>................</span>
                    <span>100</span>
                  </div>
                </div>
              </div>

              <div className="py-3 flex gap-5">
                <div className="mt-6">Batch Size =</div>
                <div className="flex gap-4">
                  <div className="flex flex-col">
                    <span>.... x 1000# x 1000##</span>
                    <span>
                      ......................................... &nbsp; x
                    </span>
                    <span>500</span>
                  </div>
                  <div className="flex flex-col">
                    <span>b2</span>
                    <span>................ &nbsp; =</span>
                    <span>100</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="mt-6">
                      ................ &nbsp; Capsules
                    </span>
                  </div>
                </div>
              </div>
              <div className="instruction flex flex-col">
                <span># For converting mg to g.</span>
                <span> ## For converting g to Kg</span>
              </div>
            </div>

            <div className="sub-head">
              {" "}
              PART-II: Calculation for dispensing of __________________from 3
              different A.R. Nos./SAP Batch Nos
            </div>
            <div className="instruction flex flex-col">
              If the quantity of ‘A’ of a single A.R. No./SAP Batch No. no. is
              not sufficient for the standard Batch size, calculate the Batch
              size that can be manufactured using the available quantity of the
              material after calculating b2 (the minimum content of
              _____________ (as required in the finished product) in
              _____________ on as is basis) from the following expression.
              <span>
                <span className="text-black font-semibold">‘‘A1’</span> =
                Available quantity of _____________{" "}
                <span className="text-black font-semibold">‘A1’</span> in kg =
                ___________ kg
              </span>{" "}
            </div>
            <table>
              <tbody>
                <tr>
                  <td>Assay (Purity) on Anhydrous basis in % </td>
                  <td>
                    <input placeholder="......" />. % of{" "}
                    <input placeholder="________" />
                    on Anhydrous basis. A.R. No./SAP Batch No. of the 1st
                    material available:
                    <input placeholder="………………" />.
                  </td>
                </tr>
                <tr>
                  <td>Maximum water content in % w/w</td>
                  <td>
                    water content:
                    <input placeholder="………" />. % w/w A.R. No./SAP Batch No. of
                    the 1st material available:
                    <input placeholder="………………" />.
                  </td>
                </tr>
                <tr>
                  <td>Actual Assay on as is basis </td>
                  <td>
                    Actual Assay x (100 - Water Content) / 100 =
                    <input placeholder=" ……....." /> x (100 -
                    <input placeholder="………" /> / 100 ={" "}
                    <nput placeholder="……….…" /> % of{" "}
                    <input placeholder="__________________" /> on as is basis
                    (x). Signature of QC Manager:
                    <input placeholder="……………………" />
                  </td>
                </tr>
                <tr>
                  <td>
                    Content of the active entity (as required in the finished
                    product) in the API on as is basis
                  </td>
                  <td>
                    <input placeholder="__________________" /> on as is basis =
                    <input placeholder="…………" />
                    .% (b2)
                  </td>
                </tr>
                <tr>
                  <td>Calculations done by- Production</td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>Checked by- Manager -Production</td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>Approved by- Manager -QC</td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>Authorised by- Manager -QA</td>
                  <td>
                    <input />
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="py-3 flex gap-5">
              <div className="mt-6">Batch Size =</div>
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <span>‘A1’ x 1000# x 1000##</span>
                  <span>.........................................</span>
                  <span>a</span>
                </div>
                <div className="flex flex-col">
                  <span>b2</span>
                  <span>................</span>
                  <span>100</span>
                </div>
              </div>
            </div>

            <div className="py-3 flex gap-5">
              <div className="mt-6">Batch Size =</div>
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <span>.... x 1000# x 1000##</span>
                  <span>
                    ......................................... &nbsp; x
                  </span>
                  <span>500</span>
                </div>
                <div className="flex flex-col">
                  <span>b2</span>
                  <span>................ &nbsp; =</span>
                  <span>100</span>
                </div>
                <div className="flex flex-col">
                  <span className="mt-6">................ &nbsp; Capsules</span>
                </div>
              </div>
            </div>
            <div className="instruction flex flex-col">
              <span># For converting mg to g.</span>
              <span> ## For converting g to Kg</span>
              <span>
                Further calculate the balance Batch size required by using the
                expression given below. Balance Batch Size = Standard Batch size
                (in Nos.) - Batch size obtained from first A.R. No./SAP Batch
                No. (in Nos.) + Second A.R. No./SAP Batch No. (in nos.){" "}
              </span>
            </div>
            <div>
              Balance Batch Size = …………………… - (………………………+…………………………) = ……………….
              Capsules.
            </div>

            <div className="sub-head">
              {" "}
              PART-II: Calculation for dispensing of __________________from 3
              different A.R. Nos./SAP Batch Nos
            </div>
            <div className="instruction flex flex-col">
              If the quantity of ‘A’ of a single A.R. No./SAP Batch No. no. is
              not sufficient for the standard Batch size, calculate the Batch
              size that can be manufactured using the available quantity of the
              material after calculating b2 (the minimum content of
              _____________ (as required in the finished product) in
              _____________ on as is basis) from the following expression.
              <span>
                <span className="text-black font-semibold">‘‘A1’</span> =
                Available quantity of _____________{" "}
                <span className="text-black font-semibold">‘A1’</span> in kg =
                ___________ kg
              </span>{" "}
            </div>
            <table>
              <tbody>
                <tr>
                  <td>Assay (Purity) on Anhydrous basis in % </td>
                  <td>
                    <input placeholder="......" />. % of{" "}
                    <input placeholder="________" />
                    on Anhydrous basis. A.R. No./SAP Batch No. of the 1st
                    material available:
                    <input placeholder="………………" />.
                  </td>
                </tr>
                <tr>
                  <td>Maximum water content in % w/w</td>
                  <td>
                    water content:
                    <input placeholder="………" />. % w/w A.R. No./SAP Batch No. of
                    the 1st material available:
                    <input placeholder="………………" />.
                  </td>
                </tr>
                <tr>
                  <td>Actual Assay on as is basis </td>
                  <td>
                    Actual Assay x (100 - Water Content) / 100 =
                    <input placeholder=" ……....." /> x (100 -
                    <input placeholder="………" /> / 100 ={" "}
                    <nput placeholder="……….…" /> % of{" "}
                    <input placeholder="__________________" /> on as is basis
                    (x). Signature of QC Manager:
                    <input placeholder="……………………" />
                  </td>
                </tr>
                <tr>
                  <td>
                    Content of the active entity (as required in the finished
                    product) in the API on as is basis
                  </td>
                  <td>
                    <input placeholder="__________________" /> on as is basis =
                    <input placeholder="…………" />
                    .% (b2)
                  </td>
                </tr>
                <tr>
                  <td>
                    Theoretical quantity of API on as is basis required for
                    selected Batch size ‘A3’
                  </td>
                  <td>
                    Actual Quantity of API on as is basis required for balance
                    Batch size 500 x balance Batch size x 100 ‘A3’={" "}
                    <input placeholder="--------------------------------------------" />
                    b4 x 1000# x 1000## 500 x …………….. x 100 ‘A3’={" "}
                    <input placeholder="--------------------------------------------" />{" "}
                    = <input placeholder="......" />
                    .…kg/Batch ……………..x 1000# x 1000## # For converting mg to g.
                    ## For converting g to Kg
                  </td>
                </tr>
                <tr>
                  <td>Calculations done by- Production</td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>Checked by- Manager -Production</td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>Approved by- Manager -QC</td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>Authorised by- Manager -QA</td>
                  <td>
                    <input />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="instruction">
              Add the quantities of{" "}
              <span className="text-black font-semibold">‘A1’, ’A2’</span> and{" "}
              <span className="text-black font-semibold">‘A3’</span> and record
              the quantity of’{" "}
              <span className="text-black font-semibold">‘A’</span> for the
              Batch in the weighing record page.{" "}
            </div>
            <div>
              A = A1 + A2 + A3 A = …………… + ………..… + ……...…… = ………………..kg.{" "}
            </div>
          </div>
        </div>
      ) : null}

      {tab === "LOPIID" ? (
        <div className="document-form">
          <div className="section-body">
            <table>
              <thead>
                <tr>
                  <th>Name of the person </th>
                  <th>Department </th>
                  <th>Specimen Signature </th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input type="date" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : null}

      {tab === "D" ? (
        <div className="document-form">
          <div className="section-type">
            <div className="sub-head">
              Equipment's PPM And Calibration Status
            </div>
            <table>
              <thead>
                <tr>
                  <th>Equipment’s Name</th>
                  <th>Equipment’s ID</th>
                  <th>PPM done on</th>
                  <th>PPM due on</th>
                  <th>Checked by (Sign/date)</th>
                  <th>Verified by (Sign/date)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dispensing booth </td>
                  <td>ST104</td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>Dispensing booth </td>
                  <td>ST105</td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>Dispensing booth </td>
                  <td>ST106</td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td className="bg-gray-300"> </td>
                  <td className="bg-gray-300"></td>
                  <th>Calibration done on</th>
                  <th>Calibration due on</th>
                  <th>Checked by (Sign/date)</th>
                  <th>Verified by (Sign/date)</th>
                </tr>

                <tr>
                  <td>EMS ID No. / Hygrometer ID No. </td>
                  <td>
                    <input placeholder="......." />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>EMS ID No. / Hygrometer ID No. </td>
                  <td>
                    <input placeholder="......." />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>EMS ID No. / Hygrometer ID No. </td>
                  <td>
                    <input placeholder="......." />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="sub-head">Initial Checks </div>
            <table>
              <tbody>
                <tr>
                  <td>Dispensing area</td>
                  <td>
                    W <input placeholder="......" />
                  </td>
                  <td>
                    W <input placeholder="......" />
                  </td>
                  <td>
                    W <input placeholder="......" />
                  </td>
                </tr>
                <tr>
                  <td>Dispensing Booth</td>
                  <td>ST104</td>
                  <td>ST105</td>
                  <td>ST106</td>
                </tr>
                <tr>
                  <td>Previous Product</td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>Batch No.</td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td className="bg-gray-300"></td>
                  <td>Day..</td>
                  <td>Day..</td>
                  <td>Day..</td>
                </tr>
                <tr>
                  <td>Date</td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>Type Of Cleaning Done</td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>Next Cleaning Due On</td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>Empty Container / Cage ID</td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>Performed by (Sign/date)</td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>Checked by (Sign/date)</td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="sub-head">Balance Verification</div>
            <table>
              <tr>
                <td>Balance ID No. </td>
                <td>ST….… </td>
                <td>ST….…</td>
                <td>ST….…</td>
                <td>ST….…</td>
                <td>ST….…</td>
                <td>ST….…</td>
              </tr>
              <tr>
                <td>Calibration Done on </td>
                <td>
                  <input />{" "}
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
              </tr>
              <tr>
                <td>Calibration Due on </td>
                <td>
                  <input />{" "}
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
              </tr>
              <tr>
                <td>Done by Sign/Date </td>
                <td>
                  <input />{" "}
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
              </tr>
            </table>

            <div className="sub-head"> Environmental Conditions</div>

            <table>
              <thead>
                <tr>
                  <th rowSpan={2}>Description Limits</th>
                  <th rowSpan={2}>Temprature (NMT 25C)</th>
                  <th rowSpan={2}>RH (NMT 45%)</th>
                  <th rowSpan={2}>* Zero Reading</th>
                  <th colSpan={4}>Pressure Differential</th>
                  <th rowSpan={2}>Time</th>
                  <th rowSpan={2}>Done by (Sign/ Date)</th>
                  <th rowSpan={2}>Verified by (Sign/Date)</th>
                </tr>
                <tr>
                  <th>Prefilter (2 to 8 mm)</th>
                  <th>Intermediate filter (Fine filter) (3 to 10 mm)</th>
                  <th>HEPA filter (10 to 20 mm)</th>
                  <th>Dispensing Area (-0.6 to -2.4 mm of water gauge)</th>
                </tr>
              </thead>
              <tbody>
                {/* Day */}
                <tr>
                  <td rowSpan={4}>
                    Day <input placeholder="......" />
                  </td>
                  <td rowSpan={4}></td>
                  <td rowSpan={4}></td>
                  <td></td>
                  <td rowSpan={4}></td>
                  <td rowSpan={4}></td>
                  <td rowSpan={4}></td>
                  <td rowSpan={4}></td>
                  <td rowSpan={4}></td>
                  <td rowSpan={4}></td>
                  <td rowSpan={4}></td>
                </tr>

                <tr>
                  <td>Prefilter</td>
                </tr>
                {/* Holiday */}
                <tr>
                  <td>Intermediate filter (Fine filter)</td>
                </tr>
                <tr>
                  <td>HEPA filter</td>
                </tr>

                <tr>
                  <td rowSpan={4}>
                    Day <input placeholder="......" />
                  </td>
                  <td rowSpan={4}></td>
                  <td rowSpan={4}></td>
                  <td></td>
                  <td rowSpan={4}></td>
                  <td rowSpan={4}></td>
                  <td rowSpan={4}></td>
                  <td rowSpan={4}></td>
                  <td rowSpan={4}></td>
                  <td rowSpan={4}></td>
                  <td rowSpan={4}></td>
                </tr>

                <tr>
                  <td>Prefilter</td>
                </tr>

                <tr>
                  <td>Intermediate filter (Fine filter)</td>
                </tr>
                <tr>
                  <td>HEPA filter</td>
                </tr>
              </tbody>
            </table>

            <div className="sub-head">
              {" "}
              Cleaning Verification And Line Clearance
            </div>
            <table>
              <thead>
                <tr>
                  <th rowSpan={0}>
                    Line Clearance checks as per SOP: ML11/SOP/QAGN/0001
                  </th>
                  <th colSpan={4}>Line Clearance</th>
                  <th colSpan={4}>Repeat Line Clearance</th>
                </tr>
                <tr>
                  <th colSpan={2}>Done by</th>
                  <th colSpan={2}>Verified by</th>
                  <th colSpan={2}>Done by</th>
                  <th colSpan={2}>Verified by</th>
                </tr>
                <tr>
                  <th>Sign</th>
                  <th>Date</th>
                  <th>Sign</th>
                  <th>Date</th>
                  <th>Sign</th>
                  <th>Date</th>
                  <th>Sign</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <div className="sub-head">
              Approval For Commencement Of Dispensing
            </div>
            <table>
              <thead>
                <tr>
                  <th rowSpan={0}></th>
                  <th colSpan={2}>Day...</th>
                  <th colSpan={2}>Day...</th>
                </tr>
                <tr>
                  <th>Sign</th>
                  <th>Date</th>
                  <th>Sign</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Line clearance <CheckBox /> / Repeat Line clearance{" "}
                    <CheckBox />
                    Receipt and Verification of Material to be Dispensed
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>

            <div className="sub-head">
              Monitoring Of Temprature And Relative Humidity
            </div>
            <table>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Temperature (NMT 25oC)</th>
                  <th>RH (NMT 45%)</th>
                  <th>Checked by (Sign/Date)</th>
                  <th>Verified by (Sign/Date)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12:00</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>12:00</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>{" "}
                <tr>
                  <td>12:00</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>{" "}
                <tr>
                  <td>12:00</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : null}

      {tab === "RMWR" ? (
        <div className="document-form">
          <div className="section-type">
            <div className="sub-head">Excipients Weighing Record</div>

            <table>
              <thead>
                <tr>
                  <th rowSpan={2}>S.No</th>
                  <th rowSpan={2}>Ingredients</th>
                  <th rowSpan={2}>Grade</th>
                  <th rowSpan={2}>Item Code (SAP Code)</th>
                  <th rowSpan={2}>Qty. To Be Weighed (Kg)</th>
                  <th rowSpan={2}>A.R.No./ SAP batch No.</th>
                  <th colSpan={3}>Quantity weighed</th>
                  <th rowSpan={2}>Balance ID.No.</th>
                  <th rowSpan={2}>Weighed by / date</th>
                  <th rowSpan={2}>Checked by / date</th>
                  <th colSpan={5}>
                    Material verification at the staging area before processing
                  </th>
                </tr>
                <tr>
                  <th>Gross Wt.</th>
                  <th>Tare Wt.</th>
                  <th>Net Wt.</th>

                  <th>Gross Wt.</th>
                  <th>Balance ID.No.</th>
                  <th>Done by Production</th>
                  <th>Checked by Production Sign/date</th>
                  <th>Verified by IPQA Sign/date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan={5}>1</td>
                  <td rowSpan={5}>Excipient 1</td>
                  <td rowSpan={5}>BP</td>
                  <td rowSpan={5}>SAP Code 1</td>
                  <td rowSpan={5}></td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td rowSpan={4}></td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td rowSpan={4}></td>
                  <td rowSpan={4}></td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>{" "}
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td colSpan={4}>No. of packs......Total Net wt.</td>
                  <td className="bg-gray-300"></td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td className="bg-gray-300"></td>
                  <td className="bg-gray-300"></td>
                  <td className="bg-gray-300"></td>
                  <td className="bg-gray-300"></td>
                  <td className="bg-gray-300"></td>
                </tr>
                <tr>
                  <td rowSpan={5}>2</td>
                  <td rowSpan={5}>Excipient 2</td>
                  <td rowSpan={5}>BP</td>
                  <td rowSpan={5}>SAP Code 2</td>
                  <td rowSpan={5}></td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td rowSpan={4}></td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td rowSpan={4}></td>
                  <td rowSpan={4}></td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>{" "}
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td colSpan={4}>No. of packs......Total Net wt.</td>
                  <td className="bg-gray-300"></td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td className="bg-gray-300"></td>
                  <td className="bg-gray-300"></td>
                  <td className="bg-gray-300"></td>
                  <td className="bg-gray-300"></td>
                  <td className="bg-gray-300"></td>
                </tr>
              </tbody>
            </table>
            <div className="sub-head">API Weighing Record</div>
            <table>
              <thead>
                <tr>
                  <th rowSpan={2}>S.No</th>
                  <th rowSpan={2}>Ingredients</th>
                  <th rowSpan={2}>Grade</th>
                  <th rowSpan={2}>Item Code (SAP Code)</th>
                  <th rowSpan={2}>Qty. To Be Weighed (Kg)</th>
                  <th rowSpan={2}>A.R.No./ SAP batch No.</th>
                  <th colSpan={3}>Quantity weighed</th>
                  <th rowSpan={2}>Balance ID.No.</th>
                  <th rowSpan={2}>Weighed by / date</th>
                  <th rowSpan={2}>Checked by / date</th>
                  <th colSpan={5}>
                    Material verification at the staging area before processing
                  </th>
                </tr>
                <tr>
                  <th>Gross Wt.</th>
                  <th>Tare Wt.</th>
                  <th>Net Wt.</th>

                  <th>Gross Wt.</th>
                  <th>Balance ID.No.</th>
                  <th>Done by Production</th>
                  <th>Checked by Production Sign/date</th>
                  <th>Verified by IPQA Sign/date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={18}>Active pharmaceutical ingredient</td>
                </tr>
                <tr>
                  <td rowSpan={14}>API</td>
                  <td rowSpan={14}>BP / Ph.Eur / IH</td>
                  <td rowSpan={14}>SAP Code</td>
                  <td rowSpan={14}>.....**</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td rowSpan={14}></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td rowSpan={14}></td>
                  <td rowSpan={14}></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>{" "}
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>{" "}
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>{" "}
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>{" "}
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>{" "}
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>{" "}
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>{" "}
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>{" "}
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>{" "}
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>{" "}
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>{" "}
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="sub-head">HEG Capsule Weighing Record</div>
            <table>
              <thead>
                <tr>
                  <th rowSpan={2}>S.No</th>
                  <th rowSpan={2}>Ingredients</th>
                  <th rowSpan={2}>Grade</th>
                  <th rowSpan={2}>Item Code (SAP Code)</th>
                  <th rowSpan={2}>Qty. To Be Weighed (Kg)</th>
                  <th rowSpan={2}>A.R.No./ SAP batch No.</th>
                  <th colSpan={3}>Quantity weighed</th>
                  <th rowSpan={2}>Balance ID.No.</th>
                  <th rowSpan={2}>Weighed by / date</th>
                  <th rowSpan={2}>Checked by / date</th>
                  <th colSpan={5}>
                    Material verification at the staging area before processing
                  </th>
                </tr>
                <tr>
                  <th>Gross Wt.</th>
                  <th>Tare Wt.</th>
                  <th>Net Wt.</th>

                  <th>Gross Wt.</th>
                  <th>Balance ID.No.</th>
                  <th>Done by Production</th>
                  <th>Checked by Production Sign/date</th>
                  <th>Verified by IPQA Sign/date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={18}>HEG Capsules</td>
                </tr>
                <tr>
                  <td rowSpan={14}>API</td>
                  <td rowSpan={14}>BP / Ph.Eur / IH</td>
                  <td rowSpan={14}>SAP Code</td>
                  <td rowSpan={14}>.....**</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td rowSpan={13}></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td rowSpan={13}></td>
                  <td rowSpan={13}></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>{" "}
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>{" "}
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>{" "}
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>{" "}
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>{" "}
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>{" "}
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>{" "}
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>{" "}
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>{" "}
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>{" "}
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>{" "}
                <tr>
                  <td colSpan={3}>No. of packs…...Total Net wt.</td>
                  <td>
                    <input />
                  </td>
                  <td className="bg-gray-300">
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td className="bg-gray-300">
                    <input />
                  </td>
                  <td className="bg-gray-300">
                    <input />
                  </td>
                  <td className="bg-gray-300">
                    <input />
                  </td>
                  <td className="bg-gray-300">
                    <input />
                  </td>
                  <td className="bg-gray-300">
                    <input />
                  </td>
                  <td className="bg-gray-300">
                    <input />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : null}

      {tab === "GIC" ? (
        <div className="document-form">
          <div className="section-type">
            <div className="sub-head">Initial Checks</div>
            <table>
              <thead>
                <tr>
                  <th rowSpan={2}>Particulars </th>
                  <th colSpan={3}>Observation </th>
                  <th colSpan={3}>Performed by (Production) Sign / date</th>
                </tr>
                <tr>
                  <th>Day...</th>
                  <th>Day...</th>
                  <th>Day...</th>
                  <th>Day...</th>
                  <th>Day...</th>
                  <th>Day...</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Previous Product </td>
                  <td colSpan={3}>
                    <input />
                  </td>
                  <td colSpan={3}>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>Batch No</td>
                  <td colSpan={3}>
                    <input />
                  </td>
                  <td colSpan={3}>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>Type Of Cleaning Done.</td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                </tr>
                <tr>
                  <td>Serial No. of Batches in the Campaign</td>
                  <td>
                    <input type="" />
                  </td>
                  <td className="bg-gray-300">
                    <input type="" />
                  </td>
                  <td className="bg-gray-300">
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                  <td className="bg-gray-300">
                    <input type="" />
                  </td>
                  <td className="bg-gray-300">
                    <input type="" />
                  </td>
                </tr>
                <tr>
                  <td>Serial No. of Days in the Campaign</td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                </tr>{" "}
                <tr>
                  <td>Time</td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                </tr>{" "}
                <tr>
                  <td>
                    Pressure Differential (-0.6 to -2.4 mm of water gauge)
                  </td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                </tr>{" "}
                <tr>
                  <td>Temperature (NMT 25°C)</td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                </tr>{" "}
                <tr>
                  <td>Relative Humidity (NMT 45%)</td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                </tr>{" "}
                <tr>
                  <td>
                    Cleanliness of the area checked and logs are updated with
                    correct type of cleaning.{" "}
                  </td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                  <td>
                    <input type="" />
                  </td>
                </tr>
                <tr>
                  <td colSpan={4} className="font-bold">
                    AREA / EQUIPMENTS TO BE USED
                  </td>
                  <td className="font-bold" colSpan={3}>
                    Performed by (Production) Sign / date
                  </td>
                </tr>
                <tr>
                  <td>Granulation Area </td>
                  <td colSpan={1}>M…….</td>
                  <td colSpan={2}>M…….</td>
                  <td colSpan={3}></td>
                </tr>
                <tr>
                  <td>Sifter </td>
                  <td colSpan={1}>PR…… </td>
                  <td colSpan={2}>PR…… </td>
                  <td colSpan={3}></td>
                </tr>
                <tr>
                  <td className="text-red-600">Blender</td>
                  <td className="text-red-600" colSpan={1}>
                    PR578
                  </td>
                  <td className="text-red-600" colSpan={2}>
                    PR578
                  </td>
                  <td colSpan={3}></td>
                </tr>
                <tr>
                  <td>Weighing Balance </td>
                  <td colSpan={1}>PR…….</td>
                  <td colSpan={2}>PR…….</td>
                  <td colSpan={3}></td>
                </tr>{" "}
                <tr>
                  <td>Hygrometer </td>
                  <td colSpan={3}></td>

                  <td colSpan={3}></td>
                </tr>{" "}
                <tr>
                  <td>EMS ID No </td>
                  <td colSpan={3}></td>

                  <td colSpan={3}></td>
                </tr>
                <tr>
                  <td>16 # for Sifter </td>
                  <td colSpan={3}></td>

                  <td colSpan={3}></td>
                </tr>
                <tr>
                  <td>40 # for Sifter </td>
                  <td colSpan={3}></td>

                  <td colSpan={3}></td>
                </tr>
              </tbody>
            </table>

            <div className="sub-head">
              Equipment’s PPM And Calibration Status
            </div>
            <table>
              <thead>
                <tr>
                  <th>Equipment’s Name </th>
                  <th>Equipment’s ID</th>
                  <th>PPM done on</th>
                  <th>PPM due on </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Shifter</td>
                  <td>PR...</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Blender</td>
                  <td>PR...</td>
                  <td></td>
                  <td></td>
                </tr>{" "}
                <tr>
                  <td className="bg-gray-300"></td>
                  <td className="bg-gray-300"></td>
                  <td className="font-bold">Calibration done on</td>
                  <td className="font-bold">Calibration due on</td>
                </tr>{" "}
                <tr>
                  <td>Weighing Balance</td>
                  <td>PR...</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>EMS ID No</td>
                  <td>...</td>
                  <td></td>
                  <td></td>
                </tr>{" "}
                <tr>
                  <td>Hygrometer ID No</td>
                  <td>...</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="font-bold">Checked by (Sign/date)</td>

                  <td colSpan={3}></td>
                </tr>
                <tr>
                  <td className="font-bold">Verified by (Sign/date)</td>

                  <td colSpan={3}></td>
                </tr>
              </tbody>
            </table>

            <div className="sub-head">
              {" "}
              Cleaning Verification And Line Clearance
            </div>
            <table>
              <thead>
                <tr>
                  <th rowSpan={10}>
                    Line Clearance checks as per SOP: ML11/SOP/QAGN/0001
                  </th>
                  <th colSpan={4}>Line Clearance</th>
                  <th colSpan={4}># Repeat Line Clearance</th>
                </tr>
                <tr>
                  <th colSpan={2}>Done by</th>
                  <th colSpan={2}>Verified by</th>
                  <th colSpan={2}>Done by</th>
                  <th colSpan={2}>Verified by</th>
                </tr>
                <tr>
                  <th>Sign</th>
                  <th>Date </th>
                  <th>Sign</th>
                  <th>Date </th>
                  <th>Sign</th>
                  <th>Date </th>
                  <th>Sign</th>
                  <th>Date </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="sub-head">
              Approval For Commencement Of Granulation
            </div>
            <table>
              <thead>
                <tr>
                  <th rowSpan={0}></th>
                  <th colSpan={2}>Day...</th>
                  <th colSpan={2}>Day...</th>
                </tr>
                <tr>
                  <th>Sign</th>
                  <th>Date</th>
                  <th>Sign</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Receipt and verification of materials dispensed for the
                    batch is done Line clearance <CheckBox /> / Repeat Line
                    clearance <CheckBox />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>

            <div className="sub-head">
              {" "}
              Monitring Of Temperature And Relative Humidity
            </div>
            <table>
              <thead>
                <tr>
                  <td>Time</td>
                  <td>Temperature (NMT 25oC)</td>
                  <td>RH (NMT 45%)</td>
                  <td>Checked by (Sign/Date)</td>
                  <td>Verified by (Sign/Date)</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>{" "}
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>{" "}
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>{" "}
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : null}

      {tab === "SIAR" ? (
        <div className="document-form">
          <div className="section-type">
            <table>
              <tr>
                <th>STEP No.</th>
                <th>MANUFACTURING PROCEDURE</th>
                <th>Done by</th>
                <th>Checked by sign & date</th>
              </tr>
              <tr>
                <td>1.0</td>
                <td colspan="3">
                  <b>SIFTING OF MATERIALS:</b> Carry out sifting operation as
                  per ML11/SOP/PROP/0052.
                </td>
              </tr>
              <tr>
                <td>1.1</td>
                <td>
                  Set the Sifter with sieve as specified below and check the
                  integrity of the sieve before use.
                  <table>
                    <tr>
                      <th>Sieve size</th>
                      <th>Sieve Code No.</th>
                      <th>Integrity check before use* (OK/Not OK)</th>
                    </tr>
                    <tr>
                      <td># Sieve</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td># Sieve</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </table>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1.2</td>
                <td>
                  Sift the following ingredients through Vibratory sifter using
                  sieves as specified in the table given below and load the
                  sifted materials to the blender. Sifting started at
                  Date........Time.......... completed at
                  Date........Time..........
                  <table>
                    <tr>
                      <th class="gray-bg">Ingredient</th>
                      <th>Sieve</th>
                    </tr>
                    <tr>
                      <td>a</td>
                      <td># Sieve</td>
                    </tr>
                    <tr>
                      <td>b</td>
                      <td># Sieve</td>
                    </tr>
                  </table>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1.3</td>
                <td>
                  Sifting started at Date........Time.......... completed at
                  Date........Time..........
                  <table>
                    <tr>
                      <th class="gray-bg">Ingredient</th>
                      <th>Sieve</th>
                    </tr>
                    <tr>
                      <td>c</td>
                      <td># Sieve</td>
                    </tr>
                  </table>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1.4</td>
                <td>
                  Check the integrity of the sieve after use.
                  <table>
                    <tr>
                      <th>Sieve size</th>
                      <th>Sieve Code No.</th>
                      <th>Integrity check after use* (OK/Not OK)</th>
                    </tr>
                    <tr>
                      <td># Sieve</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td># Sieve</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </table>
                </td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
      ) : null}

      {tab === "BIAR" ? (
        <div className="document-form">
          <table>
            <tr>
              <th>STEP No.</th>
              <th>MANUFACTURING PROCEDURE</th>
              <th>Done by</th>
              <th>Checked by sign & date</th>
            </tr>
            <tr>
              <td>1.0</td>
              <td colspan="3">
                <b>BLENDING AND LUBRICATION:</b>
              </td>
            </tr>
            <tr>
              <td>1.1</td>
              <td>
                Operate the Octagonal Blender as per ML11/SOP/PROP/0054 /{" "}
                <span>ML11/SOP/PROP/0037.</span>
                After loading the sifted <input placeholder="______________" />
                and <input placeholder="______________" /> in to the Octagonal
                Blender. Blend for <input placeholder="______________" />{" "}
                minutes at <input placeholder="______________" /> RPM. Record
                the Blending time and RPM of the blender.
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>1.2</td>
              <td>
                <table>
                  <tr>
                    <th>Loading</th>
                    <th colspan="2">Blender RPM</th>
                    <th colspan="2">Blending Time</th>
                    <th>Blending Duration</th>
                  </tr>
                  <tr>
                    <td>From</td>
                    <td>To</td>
                    <td rowspan="2">__ RPM</td>
                    <td>From</td>
                    <td>To</td>
                    <td rowspan="2"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>1.3</td>
              <td>
                Load the sifted ______________ in to the above Octagonal
                Blender. Lubricate for __ minutes at __ RPM. Record the Blending
                time and RPM of the blender.
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>1.4</td>
              <td>
                <table>
                  <tr>
                    <th>Loading</th>
                    <th colspan="2">Blender RPM</th>
                    <th colspan="2">Blending Time</th>
                    <th>Blending Duration</th>
                  </tr>
                  <tr>
                    <td>From</td>
                    <td>To</td>
                    <td rowspan="2">__ RPM</td>
                    <td>From</td>
                    <td>To</td>
                    <td rowspan="2"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>1.5</td>
              <td>
                Unload the blend into intermediate product container in double
                polyethylene bag after displacement of air from it.
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>1.6</td>
              <td>
                After completion of Blending collect the sample for QC analysis,
                fill the test request form and send Sample to AQA through IPQA.
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>1.7</td>
              <td>
                Record weighing details of the lubricated blend in Table 12.0
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>1.8</td>
              <td>
                Transfer the lubricated blend to 'granule storage area', store
                below 25°C and below 45% RH. Protect from light and moisture.
              </td>
              <td></td>
              <td></td>
            </tr>
          </table>
          <div className="sub-head">Lubricated Blend Parameters</div>

          <table>
            <tr>
              <div className="flex gap-14">
                <div className="flex">
                  <span className="w-[400px]">
                    {" "}
                    Bulk Density Apparatus ID No:
                  </span>
                  <input placeholder="……………………" />
                </div>
                <div className="flex">
                  <span className="w-[400px]"> Calibration Due On:</span>
                  <input placeholder="……………………" />
                </div>
              </div>
              <div className="flex gap-14">
                <div className="flex">
                  <span className="w-[400px]"> Balance ID No:</span>
                  <input placeholder="……………………" />
                </div>
                <div className="flex">
                  <span className="w-[400px]"> Calibration Due On:</span>
                  <input placeholder="……………………" />
                </div>
              </div>
            </tr>

            <tr>
              <td>% Fines (#100mesh passed) </td>
              <td></td>
            </tr>
            <tr>
              <td>Bulk Density </td>
              <td className="w-[1000px]"></td>
            </tr>
            <tr>
              <td>Tapped Density </td>
              <td></td>
            </tr>
            <tr>
              <td>Done by Production </td>
              <td></td>
            </tr>
            <tr>
              <td>Verified by IPQA </td>
              <td></td>
            </tr>
          </table>

          <div className="sub-head">Samples And Rejects</div>
          <table>
            <thead>
              <tr>
                <th>Sr.no</th>
                <th colSpan={3}>Type</th>
                <th>Quantity in Kg</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan={4}>01</td>
                <td rowspan={4}>Samples</td>
                <td>1.1</td>
                <td>In-Process Samples #</td>
                <td>
                  <input />
                </td>
              </tr>
              <tr>
                <td>1.2</td>
                <td>QC Samples – Lubrication</td>
                <td>
                  <input />
                </td>
              </tr>
              <tr>
                <td>1.3</td>
                <td>Validation Samples – Lubrication </td>
                <td>
                  <input />
                </td>
              </tr>
              <tr>
                <td>1.4</td>
                <td className="flex">
                  <span>Any other samples (Specify, if any)</span>
                  <input placeholder="…………………" />{" "}
                </td>
                <td>
                  <input />
                </td>
              </tr>
              <tr>
                <td rowspan={2}>02</td>
                <td rowspan={2}>Rejects#</td>
                <td>2.1</td>
                <td>Rejects (Process losses)</td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
              </tr>
              <tr>
                <td>2.2</td>
                <td className="flex">
                  <span>Other Rejects (Specify, if any)</span>
                  <input placeholder="…………………" />{" "}
                </td>
                <td>
                  <input />
                </td>
              </tr>

              <tr>
                <td className="bg-gray-300"></td>
                <td colSpan={4}>
                  {" "}
                  <b>Total Losses (Samples + Rejects) Lubrication</b>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : null}

      {tab === "WROLB" ? (
        <div className="document-form">
          <table>
            <thead>
              <tr>
                <td>
                  Ensure balance verification done as per SOP No.:
                  ML11/SOP/QAGN/0005
                </td>
              </tr>
              <tr>
                <th>Container cleanness Checked by</th>
                <th>Container Sr. No.</th>
                <th>Gross Weight(Kg) </th>
                <th>Tare Weight(Kg)</th>
                <th>Net weight(Kg) </th>
                <th>Weighed by</th>
                <th>Checked by Sign/Date</th>
              </tr>
            </thead>
          </table>
        </div>
      ) : null}

      {tab === "TRF" ? <div className="document-form"></div> : null}
      {tab === "R" ? (
        <div className="document-form">
          <div className="section-body">
            <table>
              <tr>
                <td>A</td>
                <td>Weight of total dispensed material (Batch size in kg)</td>
                <td className="flex">
                  <input />
                  <span>Kg</span>
                </td>
              </tr>
              <tr>
                <td>B</td>
                <td>
                  Weight of Total blend obtained (Record from Sr. No. 12.0,
                  Weighing record of lubricated blend){" "}
                </td>
                <td className="flex">
                  <input />
                  <span>Kg</span>
                </td>
              </tr>
              <tr>
                <td>C</td>
                <td># Total Samples </td>
                <td className="flex">
                  <input />
                  <span>Kg</span>
                </td>
              </tr>
              <tr>
                <td>D</td>
                <td># Total Rejets</td>
                <td className="flex">
                  <input />
                  <span>Kg</span>
                </td>
              </tr>
              <tr>
                <td>E</td>
                <td>Total Losses (Total Samples + Total Rejects) (C + D) </td>
                <td className="flex">
                  <input />
                  <span>Kg</span>
                </td>
              </tr>
              <tr>
                <td>F</td>
                <td>Total Quantity Reconciled (B + E) </td>
                <td className="flex">
                  <input />
                  <span>Kg</span>
                </td>
              </tr>
              <tr>
                <td>G</td>
                <td>% Reconciliation (F/A) X 100 </td>
                <td className="flex">
                  <input />
                  <span>%</span>
                </td>
              </tr>
              <tr>
                <td>H</td>
                <td>
                  % Yield: (B + C/ A [ Batch Size in kg] X100) Limit: 98.50% to
                  100.00%{" "}
                </td>
                <td className="flex">
                  <input />
                  <span>%</span>
                </td>
              </tr>
            </table>

            <div className="sub-head">Document Review </div>
            <table>
              <thead>
                <tr>
                  <th>Instructions</th>
                  <th>Production Sign/Date </th>
                  <th>IPQA Sign/Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Review of In-process parameters and batch details</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Review of Reconciliation (Lubrication Stage) </td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>

            <div className="sub-head">
              Blend Verified And Issued For Capsule Filling
            </div>
            <table>
              <thead>
                <tr>
                  <th rowSpan={2}>Date</th>
                  <th colSpan={2}>Sr. No. of containers</th>
                  <th rowSpan={2}>Issued by Production (Sign/Date)</th>
                  <th rowSpan={2}>Received by Production (Sign/Date)</th>
                  <th rowSpan={2}>Returned by Production (Sign/Date)</th>
                  <th rowSpan={2}>Retrieved by Production (Sign/Date)</th>
                </tr>
                <tr>
                  <th>From</th>
                  <th>To</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      ) : null}

      {tab === "CFIC" ? (
        <div className="document-form">
          <div className="section-body">
            <table>
              <thead>
                <tr>
                  <th rowSpan={2}>Particulars</th>
                  <th colSpan={3}>Observation</th>
                  <th colSpan={3}>Performed by (Production) Sign / dat</th>
                </tr>
                <tr>
                  <th>Day……… </th>
                  <th>Day……… </th>
                  <th>Day……… </th>
                  <th>Day……… </th>
                  <th>Day……… </th>
                  <th>Day……… </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Previous Product</td>
                  <td colSpan={3}></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Batch No </td>
                  <td colSpan={3}></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Type of Cleaning Done</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Serial No. of Batches in the Campaign</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>{" "}
                <tr>
                  <td>Serial No. of Days in the Campaign</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>{" "}
                <tr>
                  <td>Time</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>{" "}
                <tr>
                  <td>
                    Pressure Differential (-0.6 to -2.4 mm of water gauge)
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>{" "}
                <tr>
                  <td>Temperature (NMT 25oC)</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>{" "}
                <tr>
                  <td>Type of Cleaning Done</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>{" "}
                <tr>
                  <td>Relative Humidity (NMT 45%)</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>{" "}
                <tr>
                  <td>
                    Cleanliness of the area checked and logs are updated with
                    correct type of cleaning.
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan={4}>
                    <b>Area / Equipments To Be Used</b>
                  </td>
                  <td className="bg-gray-400"></td>
                  <td className="bg-gray-400"></td>
                  <td className="bg-gray-400"></td>
                </tr>
                <tr>
                  <td>Capsule Filling Area </td>
                  <td colSpan={2}>M…….. </td>
                  <td>M…….. </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Capsule Filling Machine</td>
                  <td colSpan={2}>
                    PR462 <CheckBox />{" "}
                  </td>
                  <td>
                    PR176 <CheckBox />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>{" "}
                <tr>
                  <td>Empty Capsule Sorter Elevator SE-100 </td>
                  <td colSpan={2}>
                    PR463 <CheckBox />{" "}
                  </td>
                  <td>
                    PR177 <CheckBox />{" "}
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>{" "}
                <tr>
                  <td>Mini Capsule Sorter </td>
                  <td colSpan={2}>
                    PR464 <CheckBox />{" "}
                  </td>
                  <td>
                    PR178 <CheckBox />{" "}
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>{" "}
                <tr>
                  <td>Empty Capsule Sorter ECS- 100 </td>
                  <td colSpan={2}>
                    PR465 <CheckBox />{" "}
                  </td>
                  <td>
                    PR179 <CheckBox />{" "}
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>{" "}
                <tr>
                  <td>Dedusting and Polishing machine </td>
                  <td colSpan={2}>
                    PR466 <CheckBox />{" "}
                  </td>
                  <td>
                    PR290 <CheckBox />{" "}
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>{" "}
                <tr>
                  <td>Metal Detector </td>
                  <td colSpan={2}>
                    PR467 <CheckBox />{" "}
                  </td>
                  <td>
                    PR184 <CheckBox />{" "}
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>{" "}
                <tr>
                  <td>ADU 100 </td>
                  <td colSpan={2}>
                    PR468 <CheckBox />{" "}
                  </td>
                  <td>
                    PR186 <CheckBox />{" "}
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>{" "}
                <tr>
                  <td>Product Conveying System </td>
                  <td colSpan={2}>
                    PR470 <CheckBox />{" "}
                  </td>
                  <td>
                    PR183 <CheckBox />{" "}
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td rowSpan={2}>Weighing balance </td>
                  <td colSpan={2}>PR... </td>
                  <td>PR... </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>PR...</td>
                  <td></td>PR...<td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Vacuum cleaner </td>
                  <td colSpan={2}>PR.. </td>
                  <td>PR...</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Hygrometer ID No</td>
                  <td colSpan={3}>
                    <input placeholder="....." />{" "}
                  </td>

                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>

            <div className="sub-head">
              Equipment’s PPM And Calibration Status
            </div>
            <table>
              <thead>
                <tr>
                  <th>Equipment’s Name </th>
                  <th>Equipment’s ID</th>
                  <th>PPM done on</th>
                  <th>PPM due on</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Capsule Filling Machine </td>
                  <td>PR………..</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Empty Capsule Sorter Elevator SE-100 </td>
                  <td>PR………..</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Mini Capsule Sorter </td>
                  <td>PR………..</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Empty Capsule Sorter ECS- 100 </td>
                  <td>PR………..</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Dedusting and Polishing machine </td>
                  <td>PR………..</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Metal Detector</td>
                  <td>PR……….. </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td rowSpan={2}>ADU 100</td>
                  <td>PR………..</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>PR.....</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Product Conveying System</td>
                  <td>PR...</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="bg-gray-400"></td>
                  <td className="bg-gray-400"></td>
                  <td>
                    <b>Calibration done on</b>
                  </td>
                  <td>
                    <b>Calibration due on</b>
                  </td>
                </tr>
                <tr>
                  <td>Weighing Balance</td>
                  <td>PR...</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Disintegration test apparatus </td>
                  <td>PR...</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Vernier Calipers</td>
                  <td>PR...</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Hygrometer ID No.</td>
                  <td>...</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <b>Checked by (Sign/date)</b>
                  </td>
                  <td colSpan={3}></td>
                </tr>
                <tr>
                  <td>
                    <b>Verified by (Sign/date)</b>
                  </td>
                  <td colSpan={3}></td>
                </tr>
              </tbody>
            </table>

            <div className="sub-head">
              Cleaning Verification And Line Clearance
            </div>
            <table>
              <thead>
                <tr>
                  <td rowSpan={10}>
                    Line Clearance checks as per SOP: ML11/SOP/QAGN/0001
                  </td>
                  <th colSpan={4}>
                    <b>Line Clearance </b>
                  </th>
                  <th colSpan={4}>
                    <b># Repeat Line Clearance</b>
                  </th>
                </tr>
                <tr>
                  <th colSpan={2}>Done by </th>
                  <th colSpan={2}>Verified by</th>
                  <th colSpan={2}>Done by </th>
                  <th colSpan={2}>Verified by</th>
                </tr>
                <tr>
                  <th>Sign </th>
                  <th>Date</th>
                  <th>Sign </th>
                  <th>Date</th>
                  <th>Sign </th>
                  <th>Date</th>
                  <th>Sign </th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="sub-head">
              Calcultion For Actual Fill Weight Per Capsule
            </div>

            <div></div>
          </div>
        </div>
      ) : null}

      {tab === "CFMS" ? (
        <div className="document-form">
          <table>
            <thead>
              <tr>
                <th>STEP No.</th>
                <th>INSTRUCTIONS</th>
                <th>Done by</th>
                <th>Checked by sign & date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  Verify the Labels on the containers of lubricated blend and
                  transfer the blend and Empty Hard Gelatin capsules to capsule
                  filling area.{" "}
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  Clean empty containers, Polybags & labels Verified and Issued
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>3</td>
                <td className="flex flex-col">
                  Determination of standard Empty capsule shell weight:
                  <span>
                    a) Take 20 empty capsules from the individual A.R number.
                  </span>
                  <span>
                    b) Determine and record the average weight of 20 empty
                    capsules.
                  </span>
                  <span>
                    c) The mean average of empty capsules should be considered
                    as standard empty capsule shell weight for initial machine
                    setting.
                  </span>
                  <span>d) Record the observations in the table 16.1</span>{" "}
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  Operate the Capsule filling machine (AF-90T / AF-150T) as per
                  ML11/SOP/PROP/0043 / ML11/SOP/PROP/0021 at speed of 80 to 104
                  / 100 to 140 Strokes per minute respectively.
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  Adjust the machine as per the parameters mentioned in table
                  no.:17.0
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>6</td>
                <td>
                  Run the machine, collect the samples and carry out machine
                  setting checks for Group mass (weight.), Uniformity of mass
                  (weight) and other parameters. Record the details in the
                  respective table in the BMR.{" "}
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>7</td>
                <td className="flex flex-col">
                  {" "}
                  Setting of empty capsule sorter (ECS100): Voltage limit: 145
                  to 155 volts.
                  <span>
                    a) Take 20 nos. filled capsules of the batch under filling
                    and 10 nos. empty capsule shells and load slowly to the
                    hopper.
                  </span>
                  <span>
                    b) Set the machine at 150 volts as per ML11/SOP/PROP/0043 /
                    ML11/SOP/PROP/0021.
                  </span>
                  <span>
                    c) Look for separation of empty capsule shells and the
                    filled capsules.
                  </span>
                  <span>d) Repeat the trial at 145 and 155 volts.</span>
                  <span>
                    e) Acceptance criteria: All the 10 empty capsule shells
                    should be separated in all the three trials.
                  </span>
                  <span>f) Record the observations in the table 18.1. 1</span>
                </td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <div className="sub-head">Empty Capsule Weight Determination</div>
          <table>
            <thead>
              <tr>
                <th>Sr. No</th>
                <th>Average weight of 20 empty capsules (mg)</th>
                <th>A.R. Number</th>
                <th>Mean Average (mg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
                <td rowSpan={3}>
                  <input />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
              </tr>
              <tr>
                <td colSpan={2}>Done by Production (Sign/Date): </td>
                <td colSpan={2}>Verified by IPQA (Sign/Date):</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : null}

      {tab === "CFP" ? (
        <div className="document-form">
          <table border="1">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Parameter</th>
                <th>Limits</th>
                <th>Theoretical</th>
                <th>Actual</th>
                <th>Frequency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>Appearance</td>
                <td colSpan="3">
                  Empty Hard Gelatin Capsules- Color and Size:
                  <br />
                  Cap: Maroon & Body: yellow
                  <br />
                  Size '0'EL' Printing: "____" printed on cap and body in white
                  ink linearly and containing white / off-white powder.
                </td>
                <td rowSpan="15">
                  Frequencies to be followed as per SOP.
                  <br />
                  [ML11/SOP/QAGN/0064# - Inprocess checks and challenges during
                  manufacturing and packing]
                </td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Target Fill Weight. (Theoretical Weight)</td>
                <td></td>
                <td>_____ mg</td>
                <td>
                  .......... mg ± 2.0 %<br />
                  (.......... to .......... mg)
                </td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Weight of Empty Capsule</td>
                <td></td>
                <td>_____ mg</td>
                <td>
                  .......... mg ± 10.0 %<br />
                  (.......... to .......... mg)
                </td>
              </tr>
              <tr>
                <td>4.</td>
                <td>Weight of Filled Capsule</td>
                <td></td>
                <td>_____ mg</td>
                <td>
                  .......... mg ± 2.0 %<br />
                  (.......... to .......... mg)
                </td>
              </tr>
              <tr>
                <td>5.</td>
                <td>Average Weight of 20 Filled Capsules</td>
                <td></td>
                <td>
                  _____ mg ± 2.0 %<br />
                  (_____ mg to _____ mg)
                </td>
                <td>
                  .......... mg ± 2.0 %<br />
                  (.......... to .......... mg)
                </td>
              </tr>
              <tr>
                <td>6.</td>
                <td>Group mass (Wt) of 20 Filled Capsules</td>
                <td></td>
                <td>
                  _____ g ± 2.0 %<br />
                  (_____ g to _____ g)
                </td>
                <td>
                  .......... g ± 2.0 %<br />
                  (.......... to .......... g)
                </td>
              </tr>
              <tr>
                <td>7.</td>
                <td>Uniformity of fill mass (wt.)</td>
                <td></td>
                <td>
                  ± 5 % of{" "}
                  <span style={{ color: "red" }}>target fill mass</span>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>8.</td>
                <td>Uniformity of mass (wt.) of filled capsule</td>
                <td></td>
                <td>
                  ± 5 % of <span style={{ color: "red" }}>target mass</span> of
                  filled capsule
                </td>
                <td></td>
              </tr>
              <tr>
                <td>9.</td>
                <td>Disintegration Time</td>
                <td>NMT 10 minutes at 37°C ± 2°C</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>10.</td>
                <td>Locking length</td>
                <td>23.10mm to 23.90mm</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>11.</td>
                <td>Machine speed</td>
                <td colSpan="3">
                  <table>
                    <tbody>
                      <tr>
                        <td>AF-90 T</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>AF-150 T</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="4" style={{ textAlign: "center" }}>
                          80-104 SPM <input type="checkbox" /> 100-140 SPM{" "}
                          <input type="checkbox" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>12.</td>
                <td>Metal Detection</td>
                <td colSpan="3">
                  For ferrous, nonferrous and SS deflection observed and for
                  blank no deflection.
                </td>
              </tr>
              <tr>
                <td>13.</td>
                <td>Environmental conditions</td>
                <td colSpan="3">Temperature: NMT 25°C and RH:NMT 45%</td>
              </tr>
              <tr>
                <td>14.</td>
                <td>ECS Challenging</td>
                <td colSpan="3">
                  20 Filled capsules + 10 Empty capsule shells.
                </td>
              </tr>
              <tr>
                <td>15.</td>
                <td>Voltage reading of ECS-100 and challenge</td>
                <td colSpan="3">± 5% volts from the set value</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : null}

      {tab === "MSCFCF" ? (
        <div className="document-form">
          <table>
            <thead>
              <tr>
                <th>Sr.No.</th>
                <th>Parameter</th>
                <th>Limits</th>
                <th>Observations</th>
                <th>Checked by Production (Sign/date)</th>
                <th>Verified by IPQA (Sign/date)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Group weight of 20 filled capsules </td>
                <td>……….g ±2.0% (……….…..to………....g)</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Average weight of filled capsule </td>
                <td>……..mg ±2.0% (………..to……….....mg)</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Uniformity of filled capsule weight </td>
                <td>……..mg ±5.0% (………..to……...mg) </td>
                <td>Min…………. Max…………</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Uniformity of mass </td>
                <td>……..mg ±5.0% (………..to………....mg) </td>
                <td>Min…………. Max…………</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>5</td>
                <td>Average weight of empty capsule </td>
                <td>………mg ± 10 % (………mg to ……… mg) </td>
                <td>Min…………. Max…………</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>6</td>
                <td>Tamping pin position</td>
                <td colSpan={2}>
                  1)…....mm 2)…....mm 3)……..mm 4)…….mm 5)…….mm
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>7</td>
                <td>Dosing disc </td>
                <td colSpan={2}> …….mm</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>8</td>
                <td>Disintegration time</td>
                <td>NMT 10 minutes at 37ºC ±2ºC</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="bg-gray-400"></td>
                <td>
                  <b>Description of capsule #</b>
                </td>
                <td>
                  <b>Weight of Filled capsule in mg</b>
                </td>
                <td>
                  <b>Weight of Empty capsule in mg</b>
                </td>
                <td>
                  <b>Net weight in mg</b>
                </td>
                <td>
                  <b>Lock Length in mm (23.10 to 23.90 mm)</b>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="flex gap-3">
                  Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] w-[30px] mt-2 mb-1"
                  />
                  /Not Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] mb-1 w-[30px] mt-2"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>2</td>
                <td className="flex gap-3">
                  Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] w-[30px] mt-2 mb-1"
                  />
                  /Not Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] mb-1 w-[30px] mt-2"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>3</td>
                <td className="flex gap-3">
                  Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] w-[30px] mt-2 mb-1"
                  />
                  /Not Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] mb-1 w-[30px] mt-2"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>4</td>
                <td className="flex gap-3">
                  Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] w-[30px] mt-2 mb-1"
                  />
                  /Not Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] mb-1 w-[30px] mt-2"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>5</td>
                <td className="flex gap-3">
                  Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] w-[30px] mt-2 mb-1"
                  />
                  /Not Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] mb-1 w-[30px] mt-2"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>6</td>
                <td className="flex gap-3">
                  Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] w-[30px] mt-2 mb-1"
                  />
                  /Not Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] mb-1 w-[30px] mt-2"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>7</td>
                <td className="flex gap-3">
                  Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] w-[30px] mt-2 mb-1"
                  />
                  /Not Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] mb-1 w-[30px] mt-2"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>8</td>
                <td className="flex gap-3">
                  Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] w-[30px] mt-2 mb-1"
                  />
                  /Not Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] mb-1 w-[30px] mt-2"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>9</td>
                <td className="flex gap-3">
                  Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] w-[30px] mt-2 mb-1"
                  />
                  /Not Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] mb-1 w-[30px] mt-2"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>10</td>
                <td className="flex gap-3">
                  Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] w-[30px] mt-2 mb-1"
                  />
                  /Not Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] mb-1 w-[30px] mt-2"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>12</td>
                <td className="flex gap-3">
                  Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] w-[30px] mt-2 mb-1"
                  />
                  /Not Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] mb-1 w-[30px] mt-2"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>13</td>
                <td className="flex gap-3">
                  Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] w-[30px] mt-2 mb-1"
                  />
                  /Not Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] mb-1 w-[30px] mt-2"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>14</td>
                <td className="flex gap-3">
                  Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] w-[30px] mt-2 mb-1"
                  />
                  /Not Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] mb-1 w-[30px] mt-2"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>15</td>
                <td className="flex gap-3">
                  Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] w-[30px] mt-2 mb-1"
                  />
                  /Not Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] mb-1 w-[30px] mt-2"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>16</td>
                <td className="flex gap-3">
                  Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] w-[30px] mt-2 mb-1"
                  />
                  /Not Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] mb-1 w-[30px] mt-2"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>17</td>
                <td className="flex gap-3">
                  Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] w-[30px] mt-2 mb-1"
                  />
                  /Not Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] mb-1 w-[30px] mt-2"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>18</td>
                <td className="flex gap-3">
                  Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] w-[30px] mt-2 mb-1"
                  />
                  /Not Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] mb-1 w-[30px] mt-2"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>19</td>
                <td className="flex gap-3">
                  Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] w-[30px] mt-2 mb-1"
                  />
                  /Not Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] mb-1 w-[30px] mt-2"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>20</td>
                <td className="flex gap-3">
                  Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] w-[30px] mt-2 mb-1"
                  />
                  /Not Ok{" "}
                  <input
                    type="checkbox"
                    className="h-[20px] mb-1 w-[30px] mt-2"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td colSpan={6}>
                  {" "}
                  <b>Done by Production:</b>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="sub-head">Set Voltage Record</div>
          <table>
            <thead>
              <tr>
                <th rowSpan={2}>Sr. No.</th>
                <th rowSpan={2}>Voltage value</th>
                <th rowSpan={2}>No. of capsules charged</th>
                <th colSpan={2}>Observation for separation of capsules</th>
                <th rowSpan={2}>Done by Production (Sign/date)</th>
                <th rowSpan={2}>Verified by IPQA (Sign/date)</th>
              </tr>
              <tr>
                <th>No. of filled capsules</th>
                <th>No. of empty capsules</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 </td>
                <td>145 volts</td>
                <td rowSpan={3}>
                  20 filled capsules + 10 empty capsule shells
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>2 </td>
                <td>150 volts</td>

                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>3 </td>
                <td>155 volts</td>

                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>4</td>
                <td colspan={4}>Set voltage: ……………….. volts</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <div className="sub-head"> Metal Detector Setting</div>
          <table>
            <thead>
              <tr>
                <td rowSpan={19}>
                  Initial Metal Detector Check as per ML11/SOP/PROP/0043 /
                  ML11/SOP/PROP/0021
                </td>
                <th>Date/Time</th>
                <th>Sr. No</th>
                <th>Check List</th>
                <th>Deflection Observation*</th>
                <th>Checked by Production (Sign/date)</th>
                <th>Verified by IPQA (Sign/date)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={19}></td>
                <td rowSpan={4}>
                  <input />
                </td>
                <td>1</td>
                <td>Ferrous standard </td>
                <td>Yes/No</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Non Ferrous standard</td>
                <td>Yes/No</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Non Ferrous standard</td>
                <td>Yes/No</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Non Ferrous standard</td>
                <td>Yes/No</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td rowSpan={4}>
                  <input />
                </td>
                <td>1</td>
                <td>Ferrous standard </td>
                <td>Yes / No </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Non Ferrous standard </td>
                <td>Yes / No </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>3</td>
                <td>S.S. standard </td>
                <td>Yes / No </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Blank </td>
                <td>Yes / No </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td rowSpan={4}>
                  <input />
                </td>
                <td>1</td>
                <td>Ferrous standard </td>
                <td>Yes / No </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Non Ferrous standard </td>
                <td>Yes / No </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>3</td>
                <td>S.S. standard </td>
                <td>Yes / No </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Blank </td>
                <td>Yes / No </td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <div className="sub-head">
            Approval For Commencement Of Capsule Filling
          </div>
          <table>
            <thead>
              <tr>
                <th rowSpan={0}></th>
                <th colSpan={2}>Day...</th>
                <th colSpan={2}>Day...</th>
              </tr>
              <tr>
                <th>Sign</th>
                <th>Date</th>
                <th>Sign</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Receipt and verification of materials dispensed for the batch
                  is done Line clearance <CheckBox /> / Repeat Line clearance{" "}
                  <CheckBox />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : null}

      {tab === "CFIAR" ? (
        <div className="document-form">
          <table>
            <thead>
              <tr>
                <th>Step No.</th>
                <th>Manufacturing Procedure</th>
                <th>Done by </th>
                <th>Checked by sign & date</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Start capsule filling of the batch. Record the In process capsule filling parameter
                    checks as per the Capsule Filling Parameters. </td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>In process checks to be performed as per SOP: ML11/SOP/QAGN/0064 </td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Record the quantity of samples and losses. </td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Collect samples at capsule filling stage for QC analysis, fill the test request form and
                    send Sample to AQA through IPQA. </td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Transfer the Filled capsules to the quarantine area. Store below 25°C and below 45%
                    RH. Protect from light and moisture. </td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>I Record the Net Weight of Filled capsules and calculate the Actual Net % Yield in
                    Reconciliation Sheet.  </td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
          </table>

          <div className="sub-head"> Metal Detector Sensitivity In-Process Checks.</div>

          <table>
            <thead>
                <tr>
                    <th rowSpan={3}>Date</th>
                    <th rowSpan={3}>Time</th>
                    <th colspan={4}>Metal detector Challenge Test</th>
                    <th rowSpan={3}>Checked by </th>
                    <th rowSpan={3}>Remarks</th>
                </tr>
                <tr>
                    <th colSpan={4}>Observation (Write YES or NO) </th>
                </tr>
                <tr>
                    <th>Ferrous </th>
                    <th>Non
                    Ferrous </th>
                    <th>SS 316</th>
                    <th>Blank
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input/></td>
                    <td><input/></td>
                    <td><input/></td>
                    <td><input/></td>
                    <td><input/></td>
                    <td><input/></td>
                    <td><input/></td>
                    <td><input/></td>
                </tr>
                <tr>
                    <td><input/></td>
                    <td><input/></td>
                    <td><input/></td>
                    <td><input/></td>
                    <td><input/></td>
                    <td><input/></td>
                    <td><input/></td>
                    <td><input/></td>
                </tr>   <tr>
                    <td><input/></td>
                    <td><input/></td>
                    <td><input/></td>
                    <td><input/></td>
                    <td><input/></td>
                    <td><input/></td>
                    <td><input/></td>
                    <td><input/></td>
                </tr>
            </tbody>
          </table>
          <div className="sub-head">ECS Challenging In-Process Checks</div>
          <table>
            <thead>
                <tr>
                    <th rowSpan={2}>Date </th>
                    <th rowSpan={2}>Time</th>
                    <th colSpan={2}>ECS Challenge Test</th>
                    <th rowSpan={2}>Checked by</th>
                    <th rowSpan={2}>Remarks </th>
                </tr>
                <tr>
                    <th>Voltage Observed </th>
                    <th>Observation*</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Complies / Does not complies</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Complies / Does not complies</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Complies / Does not complies</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Complies / Does not complies</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Complies / Does not complies</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td> 
                    <td>Complies / Does not complies</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Complies / Does not complies</td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
          </table>
        </div>
        
      ) : null}
      {tab==="IPC"?<div className="document-form">
        <div className="sub-head">Sample Collection Details To Perform The Inprocess Checks And Apperance Of Capsules</div>
        <table>
            
         <tr>
            <td>Date</td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>

         </tr>
              
         <tr>
            <td>Time
            </td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>

         </tr>
              
         <tr>
            <td>Sample collected by
            </td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>

         </tr>
              
         <tr>
            <td>Appearance* </td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>

         </tr>
              
         <tr>
            <td>Checked by</td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>
            <td><input/></td>

         </tr>
        </table>
        <div className="sub-head">Environmental Conditions And Machine Speed</div>
      </div>:null}
    </div>
  );
};

export default CapsuleEBMR;
