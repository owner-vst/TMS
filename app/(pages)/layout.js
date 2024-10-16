import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

function layout({ children }) {
  return (
    <div className="page-wraper">
      <Header />
      <div className="page-content">
      {children}
      </div>
      
      <Footer/>
    </div>
  );
}

export default layout;
