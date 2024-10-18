
import SubmitThesisForm from "@/app/components/Forms/SubmitThesisForm";
import AccordionComp from "@/app/components/misc/AccordionComp";


function Submit_Thesis() {

  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          {/* <div className="col-xl-6 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Submit Thesis</h4>
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
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Keywords"
                        />
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

                      <div className="mb-3">
                        <label htmlFor="formFileSm" className="form-label">
                          Input file
                        </label>
                        <input
                          className="form-control form-control-sm"
                          id="formFileSm"
                          type="file"
                        />
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Submit Thesis
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div> */}
          <SubmitThesisForm />
          <div className="col-xl-6">
            <div className="card">
            <AccordionComp/>
            </div>
          </div>

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
                          <strong>Status</strong>
                        </th>
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
                        <td>Pending</td>
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
                        <td>Accepted</td>
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
                        <td>Pending</td>
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
                        <td>Pending</td>
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

export default Submit_Thesis;
