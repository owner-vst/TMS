import ManageThesisForm from "@/app/components/Forms/ManageThesisForm";
import UserForm from "@/app/components/Forms/UserForm";
import ValidationsForm from "@/app/components/Forms/ValidationsForm";

function Manage_Thesis() {
  return (
    <div>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            {/* <div className=" col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Manage Thesis</h4>
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
                        <div className="mb-3 col-md-6">
                          <label className="form-label">Author</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Author Name"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="mb-3 col-md-6">
                          <label className="form-label">Caterogy</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Category"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="mb-3 col-md-6">
                          <label className="form-label">Keywords</label>
                          
                           <select id="multi-value-select" multiple="multiple">
                                    <option selected="selected">orange</option>
                                    <option>white</option>
                                    <option selected="selected">purple</option>
                                </select>
                        </div>
                      </div>
                      <div className="row"></div>
                      <div className="row">
                        <label className="form-label">Abstract</label>
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
                        <div className="mb-3 col-md-6">
                          <label className="form-label">Status</label>
                          <select
                            id="inputState"
                            className="default-select form-control wide"
                            defaultValue="Choose Role"
                          >
                            <option disabled>Choose Status</option>
                            <option>Pending</option>
                            <option>Accepted</option>
                            <option>Rejected</option>
                          </select>
                        </div>
                      </div>

                      <button type="submit" className="btn btn-primary">
                        Edit Thesis
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div> */}
            <ManageThesisForm />

            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">List of Thesis</h4>
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
                            <strong>Author</strong>
                          </th>
                          <th>
                            <strong>Category</strong>
                          </th>
                          <th>
                            <strong>Keywords</strong>
                          </th>
                          <th>
                            <strong>Abstract</strong>
                          </th>
                          <th>
                            <strong>Views</strong>
                          </th>
                          <th>
                            <strong>Downloads</strong>
                          </th>
                          <th>
                            <strong>Status</strong>
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
                          <td>David</td>
                          <td>Medicine</td>
                          <td>Bioinformatics</td>
                          <td>The use of AI in health care</td>
                          <td>740</td>
                          <td>210</td>
                          <td>Pending</td>
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
                          <td>Susan</td>
                          <td>Education</td>
                          <td>Data Science</td>
                          <td>Leveraging ML to enhance learning outcomes</td>
                          <td>900</td>
                          <td>200</td>
                          <td>Accepted</td>
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
                          <td>Michael</td>
                          <td>Computer Science</td>
                          <td>Security</td>
                          <td>
                            Exploring blockchain for enhancing data security
                          </td>
                          <td>600</td>
                          <td>120</td>
                          <td>Pending</td>
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
                          <td>Emma</td>
                          <td>Environmental Science</td>
                          <td>Climate Studies</td>
                          <td>AI-based climate prediction models</td>
                          <td>720</td>
                          <td>98</td>
                          <td>Pending</td>
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
    </div>
  );
}

export default Manage_Thesis;
