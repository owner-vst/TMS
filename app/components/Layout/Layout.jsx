import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="page-wraper">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
