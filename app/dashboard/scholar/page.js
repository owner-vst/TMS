import HeaderBar from "@/app/components/Dashboard/Charts/HeaderBar"
import HeaderBar_Scholar from "@/app/components/Dashboard/Charts/HeaderBar_Scholar"
import PrimaryCharts_Scholar from "@/app/components/Dashboard/Charts/PrimaryCharts_Scholar"

function Scholar() {
    return (
        <>
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 mt-4">
            <div className="row">
              <HeaderBar_Scholar />
              <PrimaryCharts_Scholar/>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
    )
}

export default Scholar
