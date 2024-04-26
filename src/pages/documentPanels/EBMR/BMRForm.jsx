import React, { useState } from "react";
import "./BMR.css";
import HeaderTop from "../../../components/Header/HeaderTop";
import { NoteAdd } from "@mui/icons-material";

const BMRForm = () => {
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
                  {" "}
                  Details
                </div> */}
      </div>

      {tab === "General" ? (
        <div className="document-form">
          <div className="section-body">
            <div className="dual-group-input">
              <div className="group-input">
                <label>Product Name</label>
                <input value="" type="text" />
              </div>

              <div className="group-input">
                <label>Document No</label>
                <input value="" type="text" />
              </div>

              <div className="group-input">
                <label>Product Code </label>
                <input value="" type="text" />
              </div>

              <div className="group-input">
                <label>Effective Date </label>
                <input value="" type="text" />
              </div>

              <div className="group-input">
                <label>Stage </label>
                <input value="" type="text" />
              </div>

              <div className="group-input">
                <label>Supersedes No </label>
                <input value="" type="text" />
              </div>

              <div className="group-input">
                <label>Batch No</label>
                <input value="" type="text" />
              </div>

              <div className="group-input">
                <label>Page No</label>
                <input value="" type="text" />
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {tab === "QA" ? (
        <div className="document-form">
          {" "}
          <div className="section-body">
            <div className="dual-group-input">
              <div className="group-input">
                <label>Standard Batch Size </label>
                <input value="" type="text" />
              </div>
              <div className="group-input">
                <label>Actual Batch Size </label>
                <input value="" type="text" />
              </div>

              <div className="group-input">
                <label>Batch Starting Date </label>
                <input value="" type="text" />
              </div>

              <div className="group-input">
                <label> Time </label>
                <input value="" type="text" />
              </div>

              <div className="group-input">
                <label>Batch Complition Date </label>
                <input value="" type="text" />
              </div>

              <div className="group-input">
                <label>Time </label>
                <input value="" type="text" />
              </div>

              <div className="group-input">
                <label>Expected Output (kg) </label>
                <input value="" type="text" />
              </div>

              <div className="group-input">
                <label>Actual Output (Kg)</label>
                <input value="" type="text" />
              </div>

              <div className="group-input">
                <label>Expected Yield (%)</label>
                <input value="" type="text" />
              </div>

              <div className="group-input">
                <label>Actual Yield (%) </label>
                <input value="" type="text" />
              </div>
              <div className="group-input">
                <label>Manufacturing Date </label>
                <input value="" type="text" />
              </div>
              <div className="group-input">
                <label>Expiry/Retest Date</label>
                <input value="" type="text" />
              </div>

              <div className="group-input">
                <label>Packing And Storage Condition</label>
                <input value="" type="text" />
              </div>

           


            </div>
            <div className="sub-head">Input Raw Material Details</div>

<div className="AddRows d-flex">
        <NoteAdd onClick={()=>{}} />
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
          <th >Qty. Used </th>
          <th>A.R. No/Batch No.</th>
          <th >Checked By Sign </th>
          <th >Date </th>

        </tr>
      </thead>
      <tbody>
       
        <tr>
            <td></td>
            <td></td>
            <td></td>
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

    <div className="sub-head">Packing Material Details</div>

<div className="AddRows d-flex">
        <NoteAdd onClick={()=>{}} />
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
          <th >Qty. Used </th>
          <th>A.R. No/Batch No.</th>
          <th >Checked By Sign </th>
          <th >Date </th>

        </tr>
      </thead>
      <tbody>
       
        <tr>
            <td></td>
            <td></td>
            <td></td>
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

    <div className="sub-head">Solvent For Batch To Batch Cleaning </div>

<div className="AddRows d-flex">
        <NoteAdd onClick={()=>{}} />
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
          <th >Qty. Used </th>
          <th>A.R. No/Batch No.</th>
          <th >Checked By Sign </th>
          <th >Date </th>

        </tr>
      </thead>
      <tbody>
       
        <tr>
            <td></td>
            <td></td>
            <td></td>
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

    <div className="sub-head">Solvent For Container/Hosepipe And Accessories Cleaning </div>

<div className="AddRows d-flex">
        <NoteAdd onClick={()=>{}} />
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
          <th >Qty. Used </th>
          <th>A.R. No/Batch No.</th>
          <th >Checked By Sign </th>
          <th >Date </th>

        </tr>
      </thead>
      <tbody>
       
        <tr>
            <td></td>
            <td></td>
            <td></td>
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
 
    <div className="sub-head">Intermediate Issuance</div>

<div className="AddRows d-flex">
        <NoteAdd onClick={()=>{}} />
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
       
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
           

            </tr> 
       
      </tbody>
    </table>



    <div className="sub-head">HAZOP Recommendations</div>

<div className="AddRows d-flex">
        <NoteAdd onClick={()=>{}} />
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
       
        <tr>
            <td></td>
            <td></td>
            <td> <select>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>

                </select></td>
        
            </tr> 
       
      </tbody>
    </table>


    <div className="sub-head">Process Safety Study Details And Gas /By Product Generation Details</div>

<div className="AddRows d-flex">
        <NoteAdd onClick={()=>{}} />
        <div className="addrowinstruction"></div>
      </div>
   
    <table>
      <thead>
        <tr>
          <th>S no.</th>
          <th>Test  </th>
          <th> Result </th>
          <th>Remark</th>
        </tr>
      </thead>
      <tbody>
       
        <tr>
            <td></td>
            <td></td>
            <td> </td>
            <td> </td>

        
            </tr> 
       
      </tbody>
    </table>


    <div className="sub-head">Personal Protective Equipment (PPE) Matrix</div>

<div className="AddRows d-flex">
        <NoteAdd onClick={()=>{}} />
        <div className="addrowinstruction"></div>
      </div>
   
    <table>
      <thead>
        <tr>
          <th>S no.</th>
          <th>Chemical Name  </th>
          <th> Hand Protection</th>
 <th>Eye Protection</th>
 <th>Respiratory protection</th>
 <th>Foot Shoes</th>
 <th>Body Protection</th>

        </tr>
      </thead>
      <tbody>
       
        <tr>
            <td></td>
            <td></td>
            <td> </td>
            <td> </td>
            <td></td>
            <td> </td>
            <td> </td>

        
            </tr> 
       
      </tbody>
    </table>


    <div className="sub-head">Identification Of Hazards And Control</div>

<div className="AddRows d-flex">
        <NoteAdd onClick={()=>{}} />
        <div className="addrowinstruction"></div>
      </div>
   
    <table>
      <thead>
        <tr>
          <th>S no.</th>
          <th>Name  </th>
          <th> Antidote </th>
          <th>Specific Hazard</th>
          <th>Precaution</th>
        </tr>
      </thead>
      <tbody>
       
        <tr>
            <td></td>
            <td></td>
            <td> </td>
            <td> </td>
            <td></td>

        
            </tr> 
       
      </tbody>
    </table>


    <div className="sub-head">Critical Process Parameterfor Safety</div>

<div className="AddRows d-flex">
        <NoteAdd onClick={()=>{}} />
        <div className="addrowinstruction"></div>
      </div>
   
    <table>
      <thead>
        <tr>
          <th>S no.</th>
          <th>BMR Step No.  </th>
          <th> Critical Process Parameter </th>
          <th>Justification</th>
        </tr>
      </thead>
      <tbody>
       
        <tr>
            <td></td>
            <td></td>
            <td> </td>
            <td> </td>

        
            </tr> 
       
      </tbody>
    </table>


    <div className="sub-head">Critical Process Parameterfor Quality</div>

<div className="AddRows d-flex">
        <NoteAdd onClick={()=>{}} />
        <div className="addrowinstruction"></div>
      </div>
   
    <table>
      <thead>
        <tr>
        <th>S no.</th>
          <th>BMR Step No.  </th>
          <th> Critical Process Parameter </th>
          <th>Justification</th>
        </tr>
      </thead>
      <tbody>
       
        <tr>
            <td></td>
            <td></td>
            <td> </td>
            <td> </td>

        
            </tr> 
       
      </tbody>
    </table>

    <div className="sub-head">Read And Understood</div>

<div className="AddRows d-flex">
        <NoteAdd onClick={()=>{}} />
        <div className="addrowinstruction"></div>
      </div>
   
    <table>
      <thead>
        <tr>
        <th>S no.</th>
          <th>Name Of Person  </th>
          <th> Sign </th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
       
        <tr>
            <td></td>
            <td></td>
            <td> </td>
            <td> </td>

        
            </tr> 
       
      </tbody>
    </table>

    <div className="sub-head">Material compatibility sheet</div>

<div> iski Table bnani h</div>

<div className="sub-head">Manufacturing Process</div>
<div> iski 3 Table bnani h</div>


          </div>
        </div>
      ) : null}
    </div>
  );
};

export default BMRForm;
