import Comment from "@/app/components/Forms/Comment";
import Pagination from "@/app/components/misc/Pagination";
import Redender from "@/app/components/misc/Render";
import RenderPdf from "@/app/components/pdfRender/RenderPdf";

function View_Thesis() {
  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-4 col-xxl-4">
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header border-0 pb-0">
                    <h4 className="fs-20 mb-0">Thesis List</h4>
                  </div>
                  <div className="table-responsive">
                    {/* <table className="table table-responsive-md">
                      <thead>
                        <tr>
                          
                          <th>
                            <strong>Title</strong>
                          </th>
                          <th>
                            <strong>Author</strong>
                          </th>
                        
                          <th>
                            <strong>Views</strong>
                          </th>
                          <th>
                            <strong>Downloads</strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <strong>01</strong>
                          </td>
                          <td>AI in health care</td>
                          <td>David</td>
                          
                          <td>740</td>
                          <td>210</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>02</strong>
                          </td>
                          <td>Machine Learning in Education</td>
                          <td>Susan</td>
                          
                          <td>900</td>
                          <td>200</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>03</strong>
                          </td>
                          <td>Blockchain for Data Security</td>
                          <td>Michael</td>
                          
                          <td>600</td>
                          <td>120</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>04</strong>
                          </td>
                          <td>Climate Change Modeling</td>
                          <td>Emma</td>
                          
                          <td>720</td>
                          <td>98</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>04</strong>
                          </td>
                          <td>Climate Change Modeling</td>
                          <td>Emma</td>
                          
                          <td>720</td>
                          <td>98</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>04</strong>
                          </td>
                          <td>Climate Change Modeling</td>
                          <td>Emma</td>
                          
                          <td>720</td>
                          <td>98</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>04</strong>
                          </td>
                          <td>Climate Change Modeling</td>
                          <td>Emma</td>
                          
                          <td>720</td>
                          <td>98</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>04</strong>
                          </td>
                          <td>Climate Change Modeling</td>
                          <td>Emma</td>
                          
                          <td>720</td>
                          <td>98</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>04</strong>
                          </td>
                          <td>Climate Change Modeling</td>
                          <td>Emma</td>
                          
                          <td>720</td>
                          <td>98</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>04</strong>
                          </td>
                          <td>Climate Change Modeling</td>
                          <td>Emma</td>
                          
                          <td>720</td>
                          <td>98</td>
                        </tr>
                      </tbody>
                    </table> */}
                    <table className="table table-responsive-md">
                      <thead>
                        <tr>
                          <th>
                            <strong>ID</strong>
                          </th>
                          <th>
                            <strong>Title</strong>
                          </th>
                          <th>
                            <strong>Author</strong>
                          </th>
                          <th>
                            <strong>Views</strong>
                          </th>
                          <th>
                            <strong>Downloads</strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <strong>01</strong>
                          </td>
                          <td>AI in Health Care</td>
                          <td>David</td>
                          <td>740</td>
                          <td>210</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>02</strong>
                          </td>
                          <td>Machine Learning in Education</td>
                          <td>Susan</td>
                          <td>900</td>
                          <td>200</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>03</strong>
                          </td>
                          <td>Blockchain for Data Security</td>
                          <td>Michael</td>
                          <td>600</td>
                          <td>120</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>04</strong>
                          </td>
                          <td>Climate Change Modeling</td>
                          <td>Emma</td>
                          <td>720</td>
                          <td>98</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>05</strong>
                          </td>
                          <td>Quantum Computing Applications</td>
                          <td>John</td>
                          <td>820</td>
                          <td>320</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>06</strong>
                          </td>
                          <td>Robotics in Surgery</td>
                          <td>Alice</td>
                          <td>400</td>
                          <td>140</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>07</strong>
                          </td>
                          <td>5G Technology Adoption</td>
                          <td>Chris</td>
                          <td>980</td>
                          <td>450</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>08</strong>
                          </td>
                          <td>Renewable Energy Innovations</td>
                          <td>Olivia</td>
                          <td>560</td>
                          <td>240</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>09</strong>
                          </td>
                          <td>Cybersecurity in IoT</td>
                          <td>Lucas</td>
                          <td>1100</td>
                          <td>500</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>10</strong>
                          </td>
                          <td>Deep Learning in NLP</td>
                          <td>Lily</td>
                          <td>690</td>
                          <td>230</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>11</strong>
                          </td>
                          <td>Augmented Reality in Education</td>
                          <td>Henry</td>
                          <td>450</td>
                          <td>170</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>12</strong>
                          </td>
                          <td>Virtual Reality for Training</td>
                          <td>Isabella</td>
                          <td>720</td>
                          <td>300</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>13</strong>
                          </td>
                          <td>Autonomous Vehicles</td>
                          <td>James</td>
                          <td>810</td>
                          <td>340</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>14</strong>
                          </td>
                          <td>AI in Financial Forecasting</td>
                          <td>Grace</td>
                          <td>980</td>
                          <td>410</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>15</strong>
                          </td>
                          <td>Wearable Health Devices</td>
                          <td>Ethan</td>
                          <td>590</td>
                          <td>290</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>16</strong>
                          </td>
                          <td>Big Data Analytics in Retail</td>
                          <td>Sophia</td>
                          <td>780</td>
                          <td>310</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>17</strong>
                          </td>
                          <td>Edge Computing for IoT</td>
                          <td>Oliver</td>
                          <td>660</td>
                          <td>260</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>18</strong>
                          </td>
                          <td>AI in Agriculture</td>
                          <td>Charlotte</td>
                          <td>880</td>
                          <td>390</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>19</strong>
                          </td>
                          <td>Data Privacy in Social Media</td>
                          <td>William</td>
                          <td>920</td>
                          <td>410</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>20</strong>
                          </td>
                          <td>Neural Networks in Image Processing</td>
                          <td>Ava</td>
                          <td>710</td>
                          <td>310</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>21</strong>
                          </td>
                          <td>Machine Learning for Financial Analysis</td>
                          <td>John</td>
                          <td>710</td>
                          <td>310</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>22</strong>
                          </td>
                          <td>BlockChain for Medical Records</td>
                          <td>Danny</td>
                          <td>310</td>
                          <td>360</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>23</strong>
                          </td>
                          <td>BlockChain for Voting</td>
                          <td>Garry</td>
                          <td>610</td>
                          <td>360</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <Pagination />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-xxl-8">
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <RenderPdf />
                  {/* <Redender/> */}
                  <div className="card-footer border-0">
                    <div className="clear" id="comment-list">
                      <div className="comments-area" id="comments">
                        <div className="widget-title style-1">
                          <h4 className="title">Comments</h4>
                        </div>
                        <div className="clearfix">
                          {/* comment list END */}
                          <ol className="comment-list">
                            <li className="comment">
                              <div className="comment-body">
                                <img
                                  className="avatar photo"
                                  src="/assets/images/avatar/user.png"
                                  alt="Image"
                                  width="40"
                                />
                                <cite className="fn">David</cite>
                                <p>
                                  Good to know that you are working on this
                                  project which clarifies my doubts about the AI
                                  in healthcare.
                                </p>
                              </div>
                            </li>
                            <li className="comment">
                              <div className="comment-body">
                                <img
                                  className="avatar photo"
                                  src="/assets/images/avatar/user.png"
                                  alt="Image"
                                  width="40"
                                />
                                <cite className="fn">Mark</cite>
                                <p>
                                  Deep insights on ai influence on healthcare
                                </p>
                              </div>
                            </li>
                            <li className="comment">
                              <div className="comment-body">
                                <img
                                  className="avatar photo"
                                  src="/assets/images/avatar/user.png"
                                  alt="Image"
                                  width="40"
                                />
                                <cite className="fn">Chris</cite>
                                <p>
                                  I am working on this project and I would like
                                  to know more about the AI in healthcare.
                                </p>
                                <br></br>
                              </div>
                            </li>
                          </ol>

                          <div className="widget-title style-1">
                            <h4 className="title" id="reply-title">
                              Leave Your Comment
                            </h4>
                          </div>

                          <Comment />
                          
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
    </div>
  );
}

export default View_Thesis;
