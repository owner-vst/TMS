"use client";
import Link from "next/link";
import { useEffect } from "react";
import Logo from "../../components/Logo";

function Signin() {
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
    <div className="vh-100 main-bnr bg-light"
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
                      <h4 className="text-center mb-4">Sign In</h4>
                      <form className="needs-validation" noValidate>
                        <div className="mb-3">
                          <label className="mb-1">
                            <strong>Email</strong>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Email"
                            required={true}
                          />
                          <div className="invalid-feedback">
                            Please enter Email.
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="mb-1">
                            <strong>Password</strong>
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Enter Password"
                            required={true}
                          />
                          <div className="invalid-feedback">
                            Please enter Password.
                          </div>
                        </div>
                        <div className="row d-flex justify-content-between mt-4 mb-2">
                          <div className="mb-3">
                            <Link href="/auth/forgot">Forgot Password?</Link>
                          </div>
                        </div>
                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block"
                          >
                            Sign In
                          </button>
                        </div>
                      </form>
                      <div className="new-account mt-3">
                        <p>
                          Don't have an account?{" "}
                          <Link className="" href="/auth/signup">
                            Sign up
                          </Link>
                        </p>
                      </div>
                      <div className="d-flex justify-content-around">
                        <Link href="/dashboard/admin">Admin</Link>
                        <Link href="/dashboard/scholar">Scholar</Link>
                        <Link href="/dashboard/user">User</Link>
                      </div>
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

export default Signin;
