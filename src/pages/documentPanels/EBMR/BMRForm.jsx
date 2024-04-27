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
                <input value="" type="text" onChange={() => {}} />
              </div>

              <div className="group-input">
                <label>Document No</label>
                <input value="" type="text" onChange={() => {}} />
              </div>

              <div className="group-input">
                <label>Product Code </label>
                <input value="" type="text" onChange={() => {}} />
              </div>

              <div className="group-input">
                <label>Effective Date </label>
                <input value="" type="text" onChange={() => {}} />
              </div>

              <div className="group-input">
                <label>Stage </label>
                <input value="" type="text" onChange={() => {}} />
              </div>

              <div className="group-input">
                <label>Supersedes No </label>
                <input value="" type="text" onChange={() => {}} />
              </div>

              <div className="group-input">
                <label>Batch No</label>
                <input value="" type="text" onChange={() => {}} />
              </div>

              <div className="group-input">
                <label>Page No</label>
                <input value="" type="text" onChange={() => {}} />
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
                <input value="" type="text" onChange={() => {}} />
              </div>
              <div className="group-input">
                <label>Actual Batch Size </label>
                <input value="" type="text" onChange={() => {}} />
              </div>

              <div className="group-input">
                <label>Batch Starting Date </label>
                <input value="" type="text" onChange={() => {}} />
              </div>

              <div className="group-input">
                <label> Time </label>
                <input value="" type="text" onChange={() => {}} />
              </div>

              <div className="group-input">
                <label>Batch Complition Date </label>
                <input value="" type="text" onChange={() => {}} />
              </div>

              <div className="group-input">
                <label>Time </label>
                <input value="" type="text" onChange={() => {}} />
              </div>

              <div className="group-input">
                <label>Expected Output (kg) </label>
                <input value="" type="text" onChange={() => {}} />
              </div>

              <div className="group-input">
                <label>Actual Output (Kg)</label>
                <input value="" type="text" onChange={() => {}} />
              </div>

              <div className="group-input">
                <label>Expected Yield (%)</label>
                <input value="" type="text" onChange={() => {}} />
              </div>

              <div className="group-input">
                <label>Actual Yield (%) </label>
                <input value="" type="text" onChange={() => {}} />
              </div>
              <div className="group-input">
                <label>Manufacturing Date </label>
                <input value="" type="text" onChange={() => {}} />
              </div>
              <div className="group-input">
                <label>Expiry/Retest Date</label>
                <input value="" type="text" onChange={() => {}} />
              </div>

              <div className="group-input">
                <label>Packing And Storage Condition</label>
                <input value="" type="text" onChange={() => {}} />
              </div>
            </div>
            <div className="sub-head">Input Raw Material Details</div>

            <div className="AddRows d-flex">
              <NoteAdd onClick={() => {}} />
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
              <NoteAdd onClick={() => {}} />
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
              <NoteAdd onClick={() => {}} />
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

            <div className="sub-head">
              Solvent For Container/Hosepipe And Accessories Cleaning{" "}
            </div>

            <div className="AddRows d-flex">
              <NoteAdd onClick={() => {}} />
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
              <NoteAdd onClick={() => {}} />
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
              <NoteAdd onClick={() => {}} />
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
                  <td>
                    {" "}
                    <select>
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="sub-head">
              Process Safety Study Details And Gas /By Product Generation
              Details
            </div>

            <div className="AddRows d-flex">
              <NoteAdd onClick={() => {}} />
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
                <tr>
                  <td></td>
                  <td></td>
                  <td> </td>
                  <td> </td>
                </tr>
              </tbody>
            </table>

            <div className="sub-head">
              Personal Protective Equipment (PPE) Matrix
            </div>

            <div className="AddRows d-flex">
              <NoteAdd onClick={() => {}} />
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

            <div className="sub-head">
              Identification Of Hazards And Control
            </div>

            <div className="AddRows d-flex">
              <NoteAdd onClick={() => {}} />
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
              <NoteAdd onClick={() => {}} />
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
                <tr>
                  <td></td>
                  <td></td>
                  <td> </td>
                  <td> </td>
                </tr>
              </tbody>
            </table>

            <div className="sub-head">
              Critical Process Parameterfor Quality
            </div>

            <div className="AddRows d-flex">
              <NoteAdd onClick={() => {}} />
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
              <NoteAdd onClick={() => {}} />
              <div className="addrowinstruction"></div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>S no.</th>
                  <th>Name Of Person </th>
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

            <table>
 <thead>
 <tr>
    <th colspan="4">Material Compatibility sheet </th>
    <th colspan="2">Name of chemical</th>
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
           <table border="1" align="center" width="700">
		<thead>
			<tr>
				<th colspan="10" className="font-bold text-lg text-center"> Intermediate Dispensing</th>


			</tr>
			<tr>
				<th> Sr.<br />No.</th>
				<th> Material <br /> Code</th>
				<th>Batch <br /> No.</th>
				<th colspan="2">Time</th>


				<th colspan="3"> Dispensing</th>
				<th>Done by </th>
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
				<td></td>


			</tr>


			</tbody>
	</table>
  <table border="1" align="center" width="700">
		<thead>
			<tr className="">
				<th colspan="10" className="font-bold text-lg text-center"> After dispensing, clean the dispensing area and weighing balance using a lint-free
					cloth.
				</th>
			</tr>
			<tr>

				<th>Sr. Operation No.</th>
				<th>Cleaning After dispensing</th>
				<th>Recordings and observations</th>
				<th>Date</th>
				<th>Time (Hrs.)</th>
				<th>From</th>
				<th>To</th>
				<th>Done By/Date</th>
				<th>Clean/Not cleaned</th>
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
				<td></td>
			</tr>
		</tbody>
	</table>

            <table className="Main-table">
          <thead>
            <tr>
              <th>Step No.</th>
              <th>Operation</th>
              <th>Date</th>
              <th>
                Time (hrs)
                <tr colSpan="2">
                  <th>Fro</th>
                  <th>To</th>
                </tr>
              </th>
              <th>Recordings and Observations</th>
              <th>Done by</th>
            </tr>
            </thead>
           <tbody>
           <tr>
              <td>1.</td>
              <td></td>
              <td></td>
              <td></td>
              <td>Pressure -------kg/cm2 Leakage <br />
              Observed/Not observed
              </td>
              <td>
                <hr />
                Checked by:
              </td>
            </tr>

            <tr>
              <td>2.</td>
              <td></td>
              <td></td>
              <td></td>
              <td>---</td>
              <td></td>
            </tr>
           </tbody>
        
        </table>
           </div>

            <div className="sub-head">
              Milling, Sifting and Packing Operation:
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
                <tr>
                  <td>1 </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td colspan="3">Total Qty. </td>
                  <td> </td>
                  <td> </td>
                  <td colspan="2"></td>
                  <td> </td>
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
                  <th>
                    Time
                    <tr >
                      <th>Fro</th>
                      <th>To</th>
                    </tr>
                  </th>
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
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
          
                </tr>
           

              <tr>
                <td colSpan="7">
                  <b>Batch to Batch Cleaning:</b>
                </td>
              </tr>

              <tr>
                <td>1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            
                <td></td>
              </tr>
              </tbody>
            </table>

<div className="sub-head">Reconciliation of Batch output</div>
        <table className="">
          <thead><tr>
            <th>Sr.No</th>
            <th colspan="3">Output reconciliation</th>
          </tr></thead>
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
            <td>Final pack quantity is to offered for complete analysis</td>
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
                    <tr>
                      <td>1</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
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
                    <tr>
                      <td>1/02/2024</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>1/02/2024</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>1/02/2024</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>1/02/2024</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>1/02/2024</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>1/02/2024</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>1/02/2024</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default BMRForm;
