"use client";
import { useEffect } from "react";

function ManageUserForm() {
  useEffect(() => {
    // Bootstrap validation setup
    (function () {
      "use strict";
      const forms = document.querySelectorAll(".needs-validation");
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            const genderRadios = form.querySelectorAll(
              'input[name="optradio"]'
            );
            let genderSelected = false;
            for (const radio of genderRadios) {
              if (radio.checked) {
                genderSelected = true;
                break;
              }
            }
            if (!genderSelected) {
              const genderGroup = form.querySelector(".gender-group");
              genderGroup.classList.add("is-invalid");
              event.preventDefault();
              event.stopPropagation();
            } else {
              form
                .querySelector(".gender-group")
                .classList.remove("is-invalid");
            }

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
    <div className=" col-lg-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Manage Users</h4>
        </div>
        <div className="card-body">
          <div className="basic-form">
            <form className="needs-validation" noValidate>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter First Name"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter First Name.
                  </div>
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Last Name"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter Last Name.
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label">User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter User Name"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter User Name.
                  </div>
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter email address"
                    required
                  />
                  <div className="invalid-feedback">Please enter email</div>
                </div>
              </div>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label">Gender</label>
                  <div className="gender-group">
                    <label className="radio-inline me-3">
                      <input
                        type="radio"
                        name="optradio"
                        className="form-check-input"
                        required
                      />{" "}
                      Male
                    </label>
                    <label className="radio-inline me-3">
                      <input
                        type="radio"
                        name="optradio"
                        className="form-check-input"
                        required
                      />{" "}
                      Female
                    </label>
                  </div>
                  <div className="invalid-feedback">Please select Gender.</div>
                </div>

                <div className="mb-3 col-md-6">
                  <label className="form-label">DOB</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Date of Birth"
                    required
                  />
                  <div className="invalid-feedback">Please enter DOB.</div>
                </div>
              </div>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label">Address</label>
                  <textarea
                    className="form-control"
                    rows={6}
                    id="comment"
                    defaultValue={""}
                    required
                  />
                  <div className="invalid-feedback">Please enter Address.</div>
                </div>

                <div className="mb-3 col-md-6">
                  <label className="form-label">Phone no</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Phone no"
                    required
                  />
                  <div className="invalid-feedback">Please enter Phone no.</div>
                  <div></div>
                  <br></br>
                  <label className="form-label">Profile Picture URL</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Profile picture url"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter Profile picture url.
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label">Role</label>
                  <select
                    id="inputState"
                    className="form-control"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Choose Role
                    </option>
                    <option>Admin</option>
                    <option>Scholar</option>
                    <option>User</option>
                  </select>
                  <div className="invalid-feedback">Please select a Role.</div>
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label">Status</label>
                  <select
                    id="inputState"
                    className="form-control"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Choose Status
                    </option>
                    <option>Pending</option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a Status.
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Edit User
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageUserForm;
