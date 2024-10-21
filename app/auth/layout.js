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
          href="/dash/vendor/scholarvault-select/dist/css/scholarvault-select.min.css"
          rel="stylesheet"
        />
        <link href="/dash/css/style.css" rel="stylesheet" />
      </div>
      <div>{children}</div>
      <div>
        <Script src="/dash/vendor/global/global.min.js"></Script>
        <Script src="/dash/vendor/scholarvault-select/dist/js/scholarvault-select.min.js"></Script>
        <Script src="/dash/js/custom.min.js"></Script>
        <Script src="https://code.jquery.com/jquery-3.6.0.min.js"></Script>
      </div>
    </div>
  );
}
export default layout;
