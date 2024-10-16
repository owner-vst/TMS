import ManageGuidelineForm from "@/app/components/Forms/ManageGuidelineForm";

function Manage_Guidelines() {
  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          {/* <div className="col-xl-6 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Manage Guidelines and Template</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form>
                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Title</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Title"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <label className="form-label">Rule</label>
                      <div className="basic-form">
                        <div className="mb-3">
                          <textarea
                            className="form-control"
                            rows={2}
                            id="comment"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="formFileSm" className="form-label">
                          Input File
                        </label>
                        <input
                          className="form-control form-control-sm"
                          id="formFileSm"
                          type="file"
                        />
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Edit Guidelines
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div> */}
          <ManageGuidelineForm />
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

                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <strong>01</strong>
                        </td>
                        <td>Layout</td>

                        <td>Should be in not more than 3 columns per page</td>

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
                                  <circle fill="#000000" cx={5} cy={12} r={2} />
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
                        <td>Size</td>

                        <td>Should not exceed 50mb</td>

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
                                  <circle fill="#000000" cx={5} cy={12} r={2} />
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
                        <td>Pages</td>

                        <td>Not more than 150 pages</td>

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
                                  <circle fill="#000000" cx={5} cy={12} r={2} />
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
                        <td>Format</td>

                        <td>Should be pdf</td>

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
                                  <circle fill="#000000" cx={5} cy={12} r={2} />
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
  );
}

export default Manage_Guidelines;
