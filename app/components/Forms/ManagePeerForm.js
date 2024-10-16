"use client";
import { useEffect } from "react";

function ManagePeerForm() {
  useEffect(() => {
    // Bootstrap validation setup
    (function () {
      "use strict";
      const forms = document.querySelectorAll(".needs-validation");
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    })();
  }, []);
  return (
    <div className="col-lg-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Manage Peer Review</h4>
        </div>
        <div className="card-body">
          <div className="basic-form">
            <form className="needs-validation" noValidate>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label">Thesis Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Title"
                    required
                  />
                  <div className="invalid-feedback">Please enter a Title.</div>
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label">Date</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Date"
                    required
                  />
                  <div className="invalid-feedback">Please enter a Date.</div>
                </div>
              </div>

              
              <div className="row"></div>
              <div className="row">
                <label className="form-label">Review</label>
                <div className="basic-form">
                  <div className="mb-3">
                    <textarea
                      required
                      className="form-control"
                      rows={8}
                      id="comment"
                      defaultValue={""}
                    />
                    <div className="invalid-feedback">
                      Please enter Message.
                    </div>
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
    </div>
  );
}

export default ManagePeerForm;
