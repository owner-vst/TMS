"use client";

import { useEffect } from "react";

function Comment() {
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
    <form
      className="needs-validation"
      noValidate
      id="commentform"
      method="post"
    >
      <div className="mb-3 col-md-6">
        <label htmlFor="comment">Comment</label>
        
        <textarea
          type="text"
          className="form-control"
          id="comment"
          name="comment"
          placeholder="Enter Comment"
          required
          rows={4}
        />
        <div className="invalid-feedback">Please enter Comment.</div>
      </div>

      <div className="invalid-feedback">Please enter Comment.</div>

      <p className="form-submit">
        <button type="submit" className="btn btn-primary" id="submit">
          SUBMIT
        </button>
      </p>
    </form>
  );
}

export default Comment;
