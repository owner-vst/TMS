import HeaderBar from "@/app/components/Dashboard/Charts/HeaderBar";
import PrimaryCharts from "@/app/components/Dashboard/Charts/PrimaryCharts";

function admin() {
  return (
    <>
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 mt-4">
            <div className="row">
              <HeaderBar />
               <PrimaryCharts/> 
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default admin;
