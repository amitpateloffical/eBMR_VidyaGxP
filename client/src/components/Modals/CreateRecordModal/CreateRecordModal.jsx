import { useState } from "react";
import "../General.css";
import "./CreateRecordModal.css";
import { Link } from "react-router-dom";

function CreateRecordModal(_props) {
  const [division, setDivision] = useState("KSA");
  const [project, setProject] = useState("");
  const handleSelectProcess = (element) => {
    setProject(element.name);
    localStorage.removeItem("site");
    localStorage.setItem("site", division);
  };
  const divisionList = [
    // {
    //   id: 1,
    //   name: "India",
    //   projects: [
    //     {
    //       name: "eBMR",
    //       link: "/eBMR",
    //     },
    //     {
    //       name: "Capsule-eBMR",
    //       link: "/capsule-eBMR",
    //     },
    //   ],
    // },
    {
      id: 2,
      name: "Corporate",
      projects: [
        // {
        //   name: "Differential Pressure Record",
        //   link: "/differential-pressure-record",
        // },
        // {
        //   name: "Area & Equipment Usage Log",
        //   link: "/area-and-equiment-usage-log",
        // },
        // {
        //   name: "Equipment Cleaning Checklist",
        //   link: "/equipment-cleaning-checklist",
        // },
        // {
        //   name: "Temperature Records",
        //   link: "/temperature-records",
        // },
        {
          name: "eBMR",
          link: "/eBMR",
        },
        {
          name: "Capsule-eBMR",
          link: "/capsule-eBMR",
        },
      ],
    },
    {
      id: 3,
      name: "Jordan",
      projects: [
        {
          name: "eBMR",
          link: "/eBMR",
        },
        {
          name: "Capsule-eBMR",
          link: "/capsule-eBMR",
        },
      ],
    },
    {
      id: 4,
      name: "Pakistan",
      projects: [
        {
          name: "eBMR",
          link: "/eBMR",
        },
        {
          name: "Capsule-eBMR",
          link: "/capsule-eBMR",
        },
      ],
    },
    {
      id: 4,
      name: "Iraq",
      projects: [
        {
          name: "eBMR",
          link: "/eBMR",
        },
        {
          name: "Capsule-eBMR",
          link: "/capsule-eBMR",
        },
      ],
    },
  ];
  return (
    <>
      <div className="custom-modal" id="create-record-modal">
        <div className="modal-container">
          <div className="modal-top">
            <div className="head">Initiate eLog</div>
          </div>

          <div className="modal-middle">
            <div className="selection-block">
              <div className="division">
                <div className="head">Site/Location</div>
                <div className="select-list division-list">
                  {divisionList.map((item) => (
                    <div
                      className={division === item.name ? "active" : ""}
                      key={item.id}
                      onClick={() => setDivision(item.name)}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
              <div className="project">
                <div className="head">Process</div>
                {divisionList.map((item) =>
                  division === item.name ? (
                    <div className="select-list project-list" key={item.id}>
                      {item.projects.map((ele, index) => (
                        <Link
                          className={project === ele.name ? "active" : ""}
                          key={index}
                          to={ele.link}
                          onClick={() => handleSelectProcess(ele)}
                        >
                          {ele.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    ""
                  )
                )}
              </div>
            </div>
          </div>

          <div className="modal-bottom">
            <div className="modal-btn btn-2" onClick={_props.closeModal}>
              Cancel
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateRecordModal;
