"use client"
import { useEffect } from "react";


const AccordionComp = () => {
  useEffect(() => {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach((header) => {
      header.addEventListener("click", function () {
        const target = document.querySelector(this.getAttribute("data-bs-target"));

        if (target.classList.contains("show")) {
          // If already open, manually close it
          const bsCollapse = new bootstrap.Collapse(target, { toggle: false });
          bsCollapse.hide();
        } else {
          // Otherwise, let Bootstrap handle showing it
          const bsCollapse = new bootstrap.Collapse(target);
          bsCollapse.show();
        }
      });
    });

    return () => {
      // Clean up event listeners on component unmount
      accordionHeaders.forEach((header) => {
        header.removeEventListener("click", function () {});
      });
    };
  }, []);

  return (
    <div className="accordion accordion-no-gutter accordion-bordered" id="accordion-four">
      <div className="accordion-item">
        <div
          className="accordion-header rounded-lg"
          id="accord-4One"
          data-bs-toggle="collapse"
          data-bs-target="#collapse4One"
          aria-controls="collapse4One"
          aria-expanded="false"
          role="button"
        >
          <span className="accordion-header-text">Fonts and Desktop Publishing</span>
          <span className="accordion-header-indicator" />
        </div>
        <div
          id="collapse4One"
          className="accordion-collapse collapse"
          aria-labelledby="accord-4One"
          data-bs-parent="#accordion-four"
        >
          <div className="accordion-body-text">
            Features that should stand out in the thesis include the quality of the scholarship or research...
          </div>
        </div>
      </div>

      {/* Repeat for other accordion items */}
      <div className="accordion-item">
        <div
          className="accordion-header rounded-lg"
          id="accord-4Two"
          data-bs-toggle="collapse"
          data-bs-target="#collapse4Two"
          aria-controls="collapse4Two"
          aria-expanded="false"
          role="button"
        >
          <span className="accordion-header-text">Spacing</span>
          <span className="accordion-header-indicator" />
        </div>
        <div
          id="collapse4Two"
          className="accordion-collapse collapse"
          aria-labelledby="accord-4Two"
          data-bs-parent="#accordion-four"
        >
          <div className="accordion-body-text">
            Use 1.5 or double spaced text...
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionComp;
