// import ManageGuidelineForm from "@/app/components/Forms/ManageGuidelineForm";
// import Pagination from "@/app/components/misc/Pagination";

// function Manage_Guidelines() {
//   return (
//     <div className="content-body">
//       <div className="container-fluid">
//         <div className="row">
//           <ManageGuidelineForm />
//           <div className="col-lg-12">
//             <div className="card">
//               <div className="card-header">
//                 <h4 className="card-title">List of Guidelines</h4>
//               </div>
//               <div className="card-body">
//                 <div className="table-responsive">
//                   <table className="table table-responsive-md">
//                     <thead>
//                       <tr>
//                         <th style={{ width: 80 }}>
//                           <strong>ID</strong>
//                         </th>

//                         <th>
//                           <strong>Title</strong>
//                         </th>
//                         <th>
//                           <strong>Description</strong>
//                         </th>
//                         <th>
//                           <strong>Added By</strong>
//                         </th>

//                         <th>Action</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr>
//                         <td>
//                           <strong>01</strong>
//                         </td>
//                         <td>Layout</td>

//                         <td>Should be in not more than 3 columns per page</td>
//                         <td>Dr. Bobby Schol</td>
//                         <td>
//                           <div className="dropdown">
//                             <button
//                               type="button"
//                               className="btn btn-success light sharp"
//                               data-bs-toggle="dropdown"
//                             >
//                               <svg
//                                 width="20px"
//                                 height="20px"
//                                 viewBox="0 0 24 24"
//                                 version="1.1"
//                               >
//                                 <g
//                                   stroke="none"
//                                   strokeWidth={1}
//                                   fill="none"
//                                   fillRule="evenodd"
//                                 >
//                                   <rect x={0} y={0} width={24} height={24} />
//                                   <circle fill="#000000" cx={5} cy={12} r={2} />
//                                   <circle
//                                     fill="#000000"
//                                     cx={12}
//                                     cy={12}
//                                     r={2}
//                                   />
//                                   <circle
//                                     fill="#000000"
//                                     cx={19}
//                                     cy={12}
//                                     r={2}
//                                   />
//                                 </g>
//                               </svg>
//                             </button>
//                             <div className="dropdown-menu">
//                               <a className="dropdown-item" href="#">
//                                 Edit
//                               </a>
//                               <a className="dropdown-item" href="#">
//                                 Delete
//                               </a>
//                             </div>
//                           </div>
//                         </td>
//                       </tr>
//                       <tr>
//                         <td>
//                           <strong>02</strong>
//                         </td>
//                         <td>Size</td>

//                         <td>Should not exceed 50mb</td>
//                         <td> Dr.Brad Pitt</td>
//                         <td>
//                           <div className="dropdown">
//                             <button
//                               type="button"
//                               className="btn btn-success light sharp"
//                               data-bs-toggle="dropdown"
//                             >
//                               <svg
//                                 width="20px"
//                                 height="20px"
//                                 viewBox="0 0 24 24"
//                                 version="1.1"
//                               >
//                                 <g
//                                   stroke="none"
//                                   strokeWidth={1}
//                                   fill="none"
//                                   fillRule="evenodd"
//                                 >
//                                   <rect x={0} y={0} width={24} height={24} />
//                                   <circle fill="#000000" cx={5} cy={12} r={2} />
//                                   <circle
//                                     fill="#000000"
//                                     cx={12}
//                                     cy={12}
//                                     r={2}
//                                   />
//                                   <circle
//                                     fill="#000000"
//                                     cx={19}
//                                     cy={12}
//                                     r={2}
//                                   />
//                                 </g>
//                               </svg>
//                             </button>
//                             <div className="dropdown-menu">
//                               <a className="dropdown-item" href="#">
//                                 Edit
//                               </a>
//                               <a className="dropdown-item" href="#">
//                                 Delete
//                               </a>
//                             </div>
//                           </div>
//                         </td>
//                       </tr>
//                       <tr>
//                         <td>
//                           <strong>03</strong>
//                         </td>
//                         <td>Pages</td>

//                         <td>Not more than 150 pages</td>
//                         <td>Dr.Mark Schol</td>

//                         <td>
//                           <div className="dropdown">
//                             <button
//                               type="button"
//                               className="btn btn-success light sharp"
//                               data-bs-toggle="dropdown"
//                             >
//                               <svg
//                                 width="20px"
//                                 height="20px"
//                                 viewBox="0 0 24 24"
//                                 version="1.1"
//                               >
//                                 <g
//                                   stroke="none"
//                                   strokeWidth={1}
//                                   fill="none"
//                                   fillRule="evenodd"
//                                 >
//                                   <rect x={0} y={0} width={24} height={24} />
//                                   <circle fill="#000000" cx={5} cy={12} r={2} />
//                                   <circle
//                                     fill="#000000"
//                                     cx={12}
//                                     cy={12}
//                                     r={2}
//                                   />
//                                   <circle
//                                     fill="#000000"
//                                     cx={19}
//                                     cy={12}
//                                     r={2}
//                                   />
//                                 </g>
//                               </svg>
//                             </button>
//                             <div className="dropdown-menu">
//                               <a className="dropdown-item" href="#">
//                                 Edit
//                               </a>
//                               <a className="dropdown-item" href="#">
//                                 Delete
//                               </a>
//                             </div>
//                           </div>
//                         </td>
//                       </tr>
//                       <tr>
//                         <td>
//                           <strong>04</strong>
//                         </td>
//                         <td>Format</td>

//                         <td>Should be pdf</td>
//                         <td>Dr.Danny Devito</td>
//                         <td>
//                           <div className="dropdown">
//                             <button
//                               type="button"
//                               className="btn btn-success light sharp"
//                               data-bs-toggle="dropdown"
//                             >
//                               <svg
//                                 width="20px"
//                                 height="20px"
//                                 viewBox="0 0 24 24"
//                                 version="1.1"
//                               >
//                                 <g
//                                   stroke="none"
//                                   strokeWidth={1}
//                                   fill="none"
//                                   fillRule="evenodd"
//                                 >
//                                   <rect x={0} y={0} width={24} height={24} />
//                                   <circle fill="#000000" cx={5} cy={12} r={2} />
//                                   <circle
//                                     fill="#000000"
//                                     cx={12}
//                                     cy={12}
//                                     r={2}
//                                   />
//                                   <circle
//                                     fill="#000000"
//                                     cx={19}
//                                     cy={12}
//                                     r={2}
//                                   />
//                                 </g>
//                               </svg>
//                             </button>
//                             <div className="dropdown-menu">
//                               <a className="dropdown-item" href="#">
//                                 Edit
//                               </a>
//                               <a className="dropdown-item" href="#">
//                                 Delete
//                               </a>
//                             </div>
//                           </div>
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <Pagination />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Manage_Guidelines;
"use client";
// import React, { useState } from "react";
import ManageGuidelineForm from "@/app/components/Forms/ManageGuidelineForm";
import Pagination from "@/app/components/misc/Pagination";
import { useState } from "react";

function Manage_Guidelines() {
  const [formMode, setFormMode] = useState("create");
  const [currentGuideline, setCurrentGuideline] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const guidelines = [
    {
      id: "01",
      title: "Research Ethics",
      description: "Guidelines for conducting ethical research.",
      addedBy: "Dr. Smith",
    },
    {
      id: "02",
      title: "Data Management",
      description: "Best practices for data collection and storage.",
      addedBy: "Prof. Johnson",
    },
    {
      id: "03",
      title: "Publication Standards",
      description: "Guidelines for publishing academic papers.",
      addedBy: "Dr. Lee",
    },
    {
      id: "04",
      title: "Grant Writing",
      description: "How to write effective grant proposals.",
      addedBy: "Dr. Williams",
    },
  ];

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleEdit = (guideline) => {
    setCurrentGuideline(guideline);
    setFormMode("edit");
  };

  const handleCreateMode = () => {
    setCurrentGuideline(null);
    setFormMode("create");
  };

  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <ManageGuidelineForm mode={formMode} onCreate={handleCreateMode} guideline={currentGuideline} />
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">List of Guidelines</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-responsive-md">
                    <thead>
                      <tr>
                        <th style={{ width: 80 }}>
                          <strong>ID</strong>
                        </th>
                        <th>
                          <strong>Title</strong>
                        </th>
                        <th>
                          <strong>Description</strong>
                        </th>
                        <th>
                          <strong>Added By</strong>
                        </th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {guidelines.map((guideline, index) => (
                        <tr key={guideline.id}>
                          <td>
                            <strong>{guideline.id}</strong>
                          </td>
                          <td>{guideline.title}</td>
                          <td>{guideline.description}</td>
                          <td>{guideline.addedBy}</td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-success light sharp"
                                onClick={() => toggleDropdown(index)}
                              >
                                <svg
                                  width="20px"
                                  height="20px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    strokeWidth={1}
                                    fill="none"
                                    fillRule="evenodd"
                                  >
                                    <rect x={0} y={0} width={24} height={24} />
                                    <circle fill="#000000" cx={5} cy={12} r={2} />
                                    <circle fill="#000000" cx={12} cy={12} r={2} />
                                    <circle fill="#000000" cx={19} cy={12} r={2} />
                                  </g>
                                </svg>
                              </button>
                              {dropdownOpen === index && (
                                <div className="dropdown-menu show">
                                  <button
                                    className="dropdown-item"
                                    onClick={() => handleEdit(guideline)}
                                  >
                                    Edit
                                  </button>
                                  <a className="dropdown-item" href="#">
                                    Delete
                                  </a>
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default Manage_Guidelines;
