"use client";
import Logo from "@/app/components/Logo";
import Link from "next/link";
import { useEffect } from "react";

function Reset() {
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
    <div className="vh-100"
    style={{
      backgroundImage: "url('/dash/images/bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <div className="authentication h-100">
        <div className="container h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-md-6">
              <div className="authentication-content">
                <div className="row no-gutters">
                  <div className="col-xl-12">
                    <div className="auth-form">
                      <div className="text-center mb-3">
                      <Link href="/" className="brand-logo">
                          <Logo />
                        </Link>
                      </div>
                      <h4 className="text-center mb-4">Reset Password</h4>
                      <form
                        action="/dashboard/admin"
                        className="needs-validation"
                        noValidate
                      >
                        <div className="mb-3">
                          <label className="mb-1">
                            <strong>Verification Code</strong>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder="Enter verification Code"
                          />
                          <div className="invalid-feedback">
                            Please enter verification Code
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="mb-1">
                            <strong>New Password</strong>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder="Enter New Password"
                          />
                          <div className="invalid-feedback">
                            Please enter New Password
                          </div>
                        </div>

                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
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

export default Reset;
