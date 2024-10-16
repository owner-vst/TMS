import ThesisHorizontal from "@/app/components/Cards/ThesisHorizontal";
import AdvancedSearch from "@/app/components/Search/AdvancedSearch";
import Sidebar from "@/app/components/Search/Search";
import Link from "next/link";

function Search() {
  return (
    <div>
      {/* Banner  */}
      <div
        className="dz-bnr-inr dz-bnr-inr-sm text-center overlay-primary-dark"
        style={{ backgroundImage: "url(/assets/images/banner/bnr2.jpg)" }}
      >
        <div className="container">
          <div className="dz-bnr-inr-entry">
            <h1>Search Thesis</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row m-t15">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Search Thesis
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* Banner End */}
      {/* blog-list section start */}
      <section className="content-inner bg-white position-relative">
        <div className="container">
          <div className="row ">
            <div className="col-xl-8 col-lg-8">
              <div className="row">
                <ThesisHorizontal
                  title="Use of AI in healtcare"
                  abstract="
              AI has been used in healthcare for a long time. It has been used to
              diagnose diseases, develop treatments, and even to predict the
              future. In this thesis, we will discuss the use of AI in
              "
                  author="KK Sharma"
                  date="25 Sep 2015"
                  img_src="/assets/images/blog/t2.png"
                />
                <ThesisHorizontal
                  author="ELon "
                  date="18 Jun 2020"
                  title="Impact of Climate Change on Marine Biodiversity"
                  abstract="Analyzes the effects of global climate change on marine ecosystems and species diversity."
                  img_src="/assets/images/blog/t5.png"
                />
                <ThesisHorizontal
                  author="Chris"
                  date="18 Jun 2020"
                  title="Advancements in Quantum Computing"
                  abstract="A study of the potential breakthroughs in quantum computing and its future applications"
                  img_src="/assets/images/blog/t6.png"
                />
                <ThesisHorizontal
                  author="David"
                  date="18 Jun 2020"
                  title="Mental Health Awareness in Modern Workplaces"
                  abstract="Focuses on promoting mental health initiatives and support systems within corporate environments."
                  img_src="/assets/images/blog/t7.png"
                />
                <div className="col-xl-12 col-lg-12 m-b30 m-t30 m-lg-t10">
                  <nav aria-label="Blog Pagination">
                    <ul
                      className="pagination style-2 text-center wow fadeInUp"
                      data-wow-delay="0.8s"
                    >
                      <li className="page-item">
                        <a className="page-link prev">
                          <i className="fas fa-chevron-left" />
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link active">1</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link">2</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link">3</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link next">
                          <i className="fas fa-chevron-right" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* <div className="col-xl-4 col-lg-4">
              <aside className="side-bar sticky-top right">
                <div className="widget">
                  <div className="widget-title">
                    <h4 className="title">Search</h4>
                  </div>
                  <div className="search-bx">
                    <form role="search" method="post">
                      <div className="input-group">
                        <input
                          name="text"
                          className="form-control style-1"
                          placeholder="Search.."
                          type="text"
                        />
                        <span className="input-group-btn">
                          <button
                            type="submit"
                            className="btn btn-primary sharp radius-no"
                          >
                            <i className="fa-solid fa-magnifying-glass scale3" />
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="widget widget_categories">
                  <div className="widget-title">
                    <h4 className="title">Categories</h4>
                  </div>
                  <ul>
                    <li className="cat-item">
                      <a href="#">Categories(10)</a>
                    </li>
                    <li className="cat-item">
                      <a href="#">Education(13)</a>
                    </li>
                    <li className="cat-item">
                      <a href="#">Information(9)</a>
                    </li>
                    <li className="cat-item">
                      <a href="#">Jobs(3)</a>
                    </li>
                    <li className="cat-item">
                      <a href="#">Learn(12)</a>
                    </li>
                    <li className="cat-item">
                      <a href="#">Skill(6)</a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div> */}
            {/* <Sidebar/> */}
            <AdvancedSearch />
          </div>
        </div>
      </section>
      {/* blog-list section start */}
    </div>
  );
}

export default Search;
