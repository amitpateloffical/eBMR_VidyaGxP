export const site = localStorage.getItem("site");
export const currentDate = new Date();
export const currentYear = currentDate.getFullYear();

export const formList = [
  "Document Information",
  "Chemistry SOP",
  "Instrument SOP",
  "Instrumental Chemistry SOP",
  "Microbiology SOP",
  "Good Laboratory Practices",
  "Wet Chemistry",
  "If Others",
  "Training Information",
  "Distribution & Retrieval",
  "Print & Download Control",
  "Activity Log",
];

export const workFlow = [
  "Opened",
  "HOD Review",
  "Pending QA Review",
  "CFT/SME Review",
  "Pending Change Implementation",
  "Closed-Done",
];

export const NotifyTo = [
  { label: "Amit Guru (Originator)", value: "1" },
  { label: "Shaleen Mishra (HOD)", value: "mango" },
  { label: "Vikas Prajapati (Approver)", value: "2" },
  { label: "Amit Patel (Reviewer)", value: "3" },
  { label: "Anshul Patel (CFT) ", value: "4" },
];
export const interpretationOfResult = {
  label: "8.0 Interpretation of Result",
  instruction: "",
  required: false,
  coloredLabel: true,
  columnList: [
    { id: "1", name: "Result", type: "text" },
    { id: "2", name: "Interpretation", type: "text" },
    { id: "3", name: "Time Restriction (Date)", type: "date" },
    { id: "4", name: "Time Restriction (Time)", type: "time" },
    { id: "5", name: "Precaution/Notes (If any)", type: "text" },
  ],
};
export const criticalSteps = {
  label: "8.0 Critical Steps",
  instruction: "",
  required: false,
  coloredLabel: true,
  columnList: [
    { id: "1", name: "Step", type: "text" },
    { id: "2", name: "Reasons", type: "text" },
    { id: "3", name: "Expected Tests Outcomes", type: "text" },
    { id: "4", name: "Acceptable values, if any", type: "text" },
    { id: "5", name: "Attachment, if any", type: "file" },
    { id: "6", name: "Remarks", type: "text" },
  ],
};
export const referenceProcedures = {
  label: "9.0 Reference Procedures/Forms",
  instruction: "Related SOP's, QPS Forms etc.",
  required: false,
  coloredLabel: true,
  columnList: [
    { id: "2.1.1.1", name: "Title of Document", type: "text" },
    { id: "2.1.1.2", name: "Attached File", type: "File" },
    { id: "2.1.1.3", name: "Remark", type: "text" },
  ],
};
export const approvers = [{ label: "Amit", value: "" }];
export const responsibilities = [
  { label: "Amit", value: "Amit" },
  { label: "Manish", value: "Manish" },
  { label: "Piyush", value: "piyush" },
];
export const reviewers = [{ label: "Vikash", value: "" }];
export const testData = {
  label: "Test(0)",
  instruction: <div></div>,
  required: true,
  columnList: [
    { id: "2.1.1", name: "Question", type: "text" },
    { id: "2.1.2", name: "Answer", type: "text" },
    { id: "2.1.3", name: "Result", type: "text" },
    { id: "2.1.4", name: "Comment", type: "text" },
    { id: "2.1.5", name: "Remarks", type: "text" },
  ],
};
export const Survey = {
  label: "Survey(0)",
  instruction: <div></div>,
  required: true,
  columnList: [
    { id: "2.1.1", name: "Subject", type: "text" },
    { id: "2.1.2", name: "Topic", type: "text" },
    { id: "2.1.3", name: "Rating", type: "text" },
    { id: "2.1.4", name: "Comment", type: "text" },
    { id: "2.1.5", name: "Remarks", type: "text" },
  ],
};
export const docFormFile = [
  {
    label: "Attach Draft Document",
    instruction: "Please Attach all relevant or supporting documents",
    required: true,
    columnList: [
      { id: "2.1.1.0", name: "Date", type: "text" },
      { id: "2.1.1.1", name: "Product", type: "text" },
      { id: "2.1.1.2", name: "Batch No.", type: "text" },
      { id: "2.1.1.3", name: "Type Of Activity", type: "text" },
      { id: "2.1.1.4", name: "Reason For Cleaning", type: "text" },
      { id: "2.1.1.5", name: "Area", type: "text" },
      { id: "2.1.1.6", name: "Equipment Name:", type: "text" },
      { id: "2.1.1.7", name: "Equipment Name:", type: "text" },
      { id: "2.1.1.8", name: "Checked by", type: "text" },
    ],
  },
  {
    label: "Attach Effective Document",
    instruction: "Please Attach all relevant or supporting documents",
    required: true,
    columnList: [
      { id: "2.1.1.1", name: "Title of Document", type: "text" },
      { id: "2.1.1.2", name: "Attached File", type: "File" },
      { id: "2.1.1.3", name: "Remark", type: "text" },
    ],
  },
  {
    label: "File Attachment",
    instruction: "Add relevant attachments, if any.",
    coloredLabel: true,
    required: false,
    columnList: [
      { id: "2.1.1.1", name: "Title of Document", type: "text" },
      { id: "2.1.1.2", name: "Attached File", type: "File" },
      { id: "2.1.1.3", name: "Remark", type: "text" },
    ],
  },
];
export const docDetails = {
  label: "Distribution & Retrieval ",
  instruction: <div></div>,
  required: true,
  columnList: [
    { id: "1", name: "Document Title", type: "text" },
    { id: "2", name: "Document Number", type: "text" },
    { id: "3", name: "Document Printed By", type: "text" },
    { id: "4", name: "Document Printed on", type: "text" },
    { id: "5", name: "Number of Print Copies", type: "text" },
    { id: "6", name: "Issuance Date", type: "date" },
    { id: "7", name: "Department/Location", type: "text" },
    { id: "8", name: "Number of Issued Copies	", type: "text" },
    { id: "9", name: "Reason for Issuance", type: "text" },
    { id: "10", name: "Retrieval Date", type: "date" },
    { id: "11", name: "Retrieved By", type: "text" },
    { id: "12", name: "Retrieved Person Department", type: "text" },
    { id: "13", name: "Number of Retrieved Copies", type: "number" },
    { id: "14", name: "Reason for Retrieval", type: "text" },
    { id: "15", name: "Remarks", type: "text" },
  ],
};
export const PersonPrintPermission = [
  { label: "Anshul Patel", value: "1" },
  { label: "Shaleen", value: "shaleen" },
  { label: "Amit", value: "2" },
  { label: "Piyush", value: "Piyush" },
];
export const PersonDownloadPermission = [
  { label: "Anshul Patel", value: "1" },
  { label: "Shaleen", value: "shaleen" },
  { label: "Amit", value: "2" },
  { label: "Piyush", value: "Piyush" },
];
