import axios from "axios";
import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { serverUrl } from "../../../utils/config";
import BookSaleTable from "../../Comonents/BookSaleTable";

const NewSale = () => {
  const { data: book } = useQuery("doner_member", () =>
    fetch(`${serverUrl}/api/book`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  const { data, isLoading } = useQuery(["me"], () =>
    axios.get(`${serverUrl}/api/user`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
  );

  const { data: instituteInfo } = useQuery("instituteInfo", () =>
    fetch(`${serverUrl}/api/institute-info`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  const [name, setName] = useState();
  const [date, setDate] = useState();

  return (
    <div>
      <section className="user-form-section d-print-none">
        <div className="section-bg">
          <div className="row">
            <div className="col-md-12 w-100">
              <div className="main-container">
                <div className="row">
                  <div className="col-12">
                    <div className="section-title">
                      <h4>New Sale</h4>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-lg-5 col-md-4 col-12">
                        <div className="row mb-3">
                          <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            কাস্ট্মার/ছাত্রের নাম
                            <i>*</i>
                          </label>
                          <div className="col-lg-6 col-md-6 col-10">
                            <input
                              onChange={(e) => setName(e.target.value)}
                              type="text"
                              className="form-control"
                              placeholder="কাস্ট্মার/ছাত্রের নাম"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-12"></div>
                      <div className="col-lg-5 col-md-4 col-12"></div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-lg-5 col-md-4 col-12">
                        <div className="row mb-3">
                          <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            তারিখ
                            <i>*</i>
                          </label>
                          <div className="col-lg-6 col-md-8 col-12">
                            <input
                              onChange={(e) => setDate(e.target.value)}
                              type="date"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-12"></div>
                      <div className="col-lg-5 col-md-4 col-12"></div>
                    </div>
                  </div>
                  <div className="col-12 my-2">
                    <div
                      className="table-responsive accounts-table"
                      data-pattern="priority-columns"
                    >
                      <table
                        id="tech-companies-1"
                        className="table table-bordered  bg-white text-center mb-0"
                      >
                        <thead className="text-center accounts-table-head">
                          <tr>
                            <th>বইয়ের নাম</th>
                            <th>মারহালা</th>
                            <th>কেনা মূল্য</th>
                            <th>বিক্রয় মূল্য</th>
                            <th>মূল্য</th>
                            <th>পরিমাণ</th>
                            <th>Total</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {book?.map((item) => (
                            <BookSaleTable
                              key={item.id}
                              item={item}
                              data={data}
                              namedate={{ name, date }}
                              instituteInfo={instituteInfo}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Employe Add Section End -->
            <!--রির্পোট প্রিন্ট সেকশন-->
            <!--Preview Page Section--> */}
      {/* <div className="bg-white d-print-block d-none">
        <span className="print-button d-print-none" onclick="window.print()">
          <i className="bi bi-printer-fill"></i>
        </span>
        <div className="pages-title">
          <h5>জামিয়া আরাবিয়া ইমদাদুল ফরিদাবাদ</h5>
          <p>১১/১২ মাদরাসা রোড, গেন্ডারিয়া, ঢাকা-১২০৪</p>
          <span>01832-061454 # 027440235</span>
          <br />
          <span className="pages-subtitle">জমা-খরচ লেজার ভিত্তিক</span>
          <br />
        </div>
        <div className="pages-content">
          <div className="row my-3 justify-content-center align-items-center">
            <div className="col-5">
              <p className="my-2">২৯/০৯/২০২২ ইং থেকে ২৯/১০/২০২২ ইং</p>
            </div>
            <div className="col-3">
              <span className="title-ladger">গোরাবা ফান্ড</span>
            </div>
            <div className="col-4 d-flex justify-content-end">
              <p className="my-2">
                <span>রিপোর্ট প্রিন্ট তারিখঃ</span>
                ০৩/১২/২০২২
              </p>
            </div>
          </div>
          <div className="table-responsive" data-pattern="priority-columns">
            <table className="table  bg-white table-bordered text-center report-table">
              <thead className="text-center">
                <tr>
                  <th>ক্রমিক নং</th>
                  <th>জেনারেল লেজার</th>
                  <th>পরিমাণ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th colspan="3">জমা</th>
                </tr>
                <tr>
                  <td>০১</td>
                  <td>শিক্ষার্থীদের মাধ্যম</td>
                  <td>২,৬৭,৮০০.০০</td>
                </tr>
                <tr>
                  <td>০১</td>
                  <td>শিক্ষার্থীদের মাধ্যম</td>
                  <td>২,৬৭,৮০০.০০</td>
                </tr>
                <tr>
                  <td>০১</td>
                  <td>শিক্ষার্থীদের মাধ্যম</td>
                  <td>২,৬৭,৮০০.০০</td>
                </tr>
                <tr>
                  <td>০১</td>
                  <td>শিক্ষার্থীদের মাধ্যম</td>
                  <td>২,৬৭,৮০০.০০</td>
                </tr>
                <tr>
                  <td
                    colspan="2"
                    style={{ textAlign: "right", fontWeight: "bold" }}
                  >
                    মোট
                  </td>
                  <td>৬৪৫৫৪২৩৪২৩.০০</td>
                </tr>
                <tr>
                  <th colspan="3">খরচ</th>
                </tr>
                <tr>
                  <td>০১</td>
                  <td>শিক্ষার্থীদের মাধ্যম</td>
                  <td>২,৬৭,৮০০.০০</td>
                </tr>
                <tr>
                  <td>০১</td>
                  <td>শিক্ষার্থীদের মাধ্যম</td>
                  <td>২,৬৭,৮০০.০০</td>
                </tr>
                <tr>
                  <td>০১</td>
                  <td>শিক্ষার্থীদের মাধ্যম</td>
                  <td>২,৬৭,৮০০.০০</td>
                </tr>
                <tr>
                  <td>০১</td>
                  <td>শিক্ষার্থীদের মাধ্যম</td>
                  <td>২,৬৭,৮০০.০০</td>
                </tr>
                <tr>
                  <td
                    colspan="2"
                    style={{ textAlign: "right", fontWeight: "bold" }}
                  >
                    মোট
                  </td>
                  <td>৬৪৫৫৪২৩৪২৩.০০</td>
                </tr>
              </tbody>
            </table>
            <div className="short-report">
              <div className="report-item">
                <div className="items">
                  <span className="report-text">সর্বমোট জমা =</span>
                  <span className="report-amount">৩৪৫৪৩৫৪.০০</span>
                </div>
                <div className="items">
                  <span>সর্বমোট খরচ =</span>
                  <span>৩৪৫৪৩৫৪.০০</span>
                </div>
                <hr className="lines" />
                <div className="items">
                  <span>উদ্ধৃত্ব</span>
                  <span>৬৫৪৬.০০</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!--Modal Section-->
            <!--খাবার এন্ট্রি  Modal Start--> */}
    </div>
  );
};

export default NewSale;
