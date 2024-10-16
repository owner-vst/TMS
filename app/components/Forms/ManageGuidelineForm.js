"use client";

import { useEffect } from "react";

function ManageGuidelineForm() {
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
          <h4 className="card-title">Manage Guidelines and Template</h4>
        </div>
        <div className="card-body">
          <div className="basic-form">
            <form className="needs-validation" noValidate>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Title"
                    required
                  />
                  <div className="invalid-feedback">Please enter a Title.</div>
                </div>
              </div>

              <div className="row">
                <label className="form-label">Description</label>
                <div className="basic-form">
                  <div className="mb-3">
                    <textarea
                      required
                      className="form-control"
                      rows={2}
                      id="comment"
                      defaultValue={""}
                    />
                    <div className="invalid-feedback">Please Description.</div>
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
                    required
                  />
                  <div className="invalid-feedback">Please attach a file.</div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Edit Guidelines
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageGuidelineForm;
