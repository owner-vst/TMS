import ManagePeerForm from "@/app/components/Forms/ManagePeerForm"

function Manage_Peer() {
    return (
      
        <div className="content-body">
          <div className="container-fluid">
            <div className="row">
              {/* <div className="col-xl-6 col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Manage Peer Review</h4>
                  </div>
                  <div className="card-body">
                    <div className="basic-form">
                      <form>
                        <div className="row">
                          <div className="mb-3 col-md-6">
                            <label className="form-label">Thesis Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Title"
                            />
                          </div>
                        </div>
                        
                        <div className="row">
                          <div className="mb-3 col-md-6">
                            <label className="form-label">Date</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Date"
                            />
                          </div>
                        </div>
                        <div className="row"></div>
                        <div className="row">
                          <label className="form-label">Message</label>
                          <div className="basic-form">
                            <div className="mb-3">
                              <textarea
                                className="form-control"
                                rows={8}
                                id="comment"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          
                        </div>
  
                        <button type="submit" className="btn btn-primary">
                          Edit Peer Review
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div> */}
              <ManagePeerForm/>
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">List of Peer Reviews</h4>
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
                              <strong>Thesis Name</strong>
                            </th>
                            <th>
                              <strong>Review</strong>
                            </th>
                            <th>
                              <strong>Date</strong>
                            </th>
                            
  
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <strong>01</strong>
                            </td>
                            <td>AI in health care</td>
                            
                          
                            <td>The use of AI in health care</td>
                            <td>2022-05-01</td>
                            <td>
                              <div className="dropdown">
                                <button
                                  type="button"
                                  className="btn btn-success light sharp"
                                  data-bs-toggle="dropdown"
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
                                      <circle
                                        fill="#000000"
                                        cx={5}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={12}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={19}
                                        cy={12}
                                        r={2}
                                      />
                                    </g>
                                  </svg>
                                </button>
                                <div className="dropdown-menu">
                                  <a className="dropdown-item" href="#">
                                    Edit
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>02</strong>
                            </td>
                            <td>Machine Learning in Education</td>
                           
                            <td>Leveraging ML to enhance learning outcomes</td>
                            <td>2022-05-02</td>
                            <td>
                              <div className="dropdown">
                                <button
                                  type="button"
                                  className="btn btn-success light sharp"
                                  data-bs-toggle="dropdown"
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
                                      <circle
                                        fill="#000000"
                                        cx={5}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={12}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={19}
                                        cy={12}
                                        r={2}
                                      />
                                    </g>
                                  </svg>
                                </button>
                                <div className="dropdown-menu">
                                  <a className="dropdown-item" href="#">
                                    Edit
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>03</strong>
                            </td>
                            <td>Blockchain for Data Security</td>
                           
                            <td>
                              Exploring blockchain for enhancing data security
                            </td>
                            <td>2022-05-03</td>
                            <td>
                              <div className="dropdown">
                                <button
                                  type="button"
                                  className="btn btn-success light sharp"
                                  data-bs-toggle="dropdown"
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
                                      <circle
                                        fill="#000000"
                                        cx={5}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={12}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={19}
                                        cy={12}
                                        r={2}
                                      />
                                    </g>
                                  </svg>
                                </button>
                                <div className="dropdown-menu">
                                  <a className="dropdown-item" href="#">
                                    Edit
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>04</strong>
                            </td>
                            <td>Climate Change Modeling</td>
                            
                            <td>AI-based climate prediction models</td>
                            <td>2022-05-04</td>
                            <td>
                              <div className="dropdown">
                                <button
                                  type="button"
                                  className="btn btn-success light sharp"
                                  data-bs-toggle="dropdown"
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
                                      <circle
                                        fill="#000000"
                                        cx={5}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={12}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={19}
                                        cy={12}
                                        r={2}
                                      />
                                    </g>
                                  </svg>
                                </button>
                                <div className="dropdown-menu">
                                  <a className="dropdown-item" href="#">
                                    Edit
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    )
}

export default Manage_Peer
