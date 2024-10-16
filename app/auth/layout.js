import Script from "next/script";

function layout({ children }) {
  return (
    <div>
      <div>
        <link
          rel="shortcut icon"
          type="image/png"
          href="/dash/images/favicon.png"
        />
        <link
          href="/dash/vendor/bootstrap-select/dist/css/bootstrap-select.min.css"
          rel="stylesheet"
        />
        <link href="/dash/css/style.css" rel="stylesheet" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </div>
      <div>{children}</div>
      <div>
        <Script src="/dash/vendor/global/global.min.js"></Script>
        <Script src="/dash/vendor/bootstrap-select/dist/js/bootstrap-select.min.js"></Script>
        <Script src="/dash/js/custom.min.js"></Script>
        <Script src="https://code.jquery.com/jquery-3.6.0.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></Script>
        <Script src="/dash/js/dlabnav-init.js"></Script>
      </div>
    </div>
  );
}
export default layout;
