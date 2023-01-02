import React from "react";

const SalaryReport = () => {
  return (
    <div>
      <section className="user-form-section">
        <div className="section-bg">
          <div className="row">
            <div className="col-md-12 w-100">
              <div className="main-container">
                <div className="row d-print-none">
                  <div className="col-12">
                    <div className="section-title" style={{ marginTop: "2px" }}>
                      <h4>রিপোর্ট</h4>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* <!--Filter Menu Section--> */}
                  <div className="col-lg-4 col-12 col-md-12 d-print-none">
                    <form>
                      <div className="row">
                        <div className="col-12">
                          <div className="filter-menu report-menu">
                            <select
                              className="form-select"
                              size="4"
                              style={{ border: "none" }}
                            >
                              <option selected>নির্বাচন করুন</option>
                              <option>১. দৈনিক ফি প্রদানের তালিকা</option>
                              <option>২. স্টাফ ভিত্তিক তালিকা</option>
                              <option>৩. মাস ভিত্তিক স্টাফদের তালিকা</option>
                              <option>
                                ৪. ইউজার ভিত্তিক ফি প্রদানের তালিকা
                              </option>
                              <option>৫. বেতন শীট আলাদা</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-12">
                          <div className="filter-menu report-menu">
                            <select
                              className="form-select"
                              size="4"
                              style={{ border: "none" }}
                            >
                              <option selected>
                                শিক্ষকের নাম নির্বাচন করুন
                              </option>
                              <option>১. নাহিদুল ইসলাম</option>
                              <option>১. নাহিদুল ইসলাম</option>
                              <option>১. নাহিদুল ইসলাম</option>
                              <option>১. নাহিদুল ইসলাম</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-12">
                          <div className="row">
                            <div className="col-12 col-lg-5 col-md-12">
                              <input type="date" className="form-control" />
                            </div>
                            <label className="col-lg-2 col-12 col-md-12 col-form-label info-lable">
                              হতে
                            </label>
                            <div className="col-12 col-lg-5 col-md-12">
                              <input type="date" className="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-12">
                          <button
                            type="submit"
                            className="custom-btn btn-primary d-block w-100"
                          >
                            Preview
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* <!--Preview Page Section--> */}
                  <div className="col-lg-8 col-12 col-md-12 mt-lg-0 mt-4">
                    <div className="preview-page d-print-block">
                      <span
                        className="print-button d-print-none"
                        onclick="window.print()"
                      >
                        <i className="bi bi-printer-fill"></i>
                      </span>
                      <div className="pages-title">
                        <h5>জামিয়া আরাবিয়া ইমদাদুল ফরিদাবাদ</h5>
                        <p>১১/১২ মাদরাসা রোড, গেন্ডারিয়া, ঢাকা-১২০৪</p>
                        <span>01832-061454 # 027440235</span>
                        <br />
                        <span className="pages-subtitle">
                          দৈনিক ফি গ্রহনের তালিকা
                        </span>
                        <br />
                      </div>
                      <div className="pages-content">
                        <div className="row my-3 justify-content-center align-items-center">
                          <div className="col-5">
                            <p className="my-2">
                              ২৯/০৯/২০২২ ইং থেকে ২৯/১০/২০২২ ইং
                            </p>
                          </div>
                          <div className="col-3"></div>
                          <div className="col-4 d-flex justify-content-end">
                            <p className="my-2">
                              <span>রিপোর্ট প্রিন্ট তারিখঃ</span>
                              ০৩/১২/২০২২
                            </p>
                          </div>
                        </div>
                        <div
                          className="table-responsive"
                          data-pattern="priority-columns"
                        >
                          <table className="table  bg-white table-bordered text-center report-table">
                            <thead className="text-center">
                              <tr>
                                <th>ক্রমিক নং</th>
                                <th>স্টাফের ধরণ</th>
                                <th>আইডি</th>
                                <th>স্টাফের নাম</th>
                                <th>মাসের নাম</th>
                                <th>পরিমাণ</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th colspan="6">তারিখঃ ২২/০৫/২০২২ ইং</th>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td
                                  colspan="5"
                                  style={{
                                    textAlign: "right",
                                    fontWeight: "bold",
                                  }}
                                >
                                  মোট
                                </td>
                                <td>৬৪৫৫৪২৩৪২৩.০০</td>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td
                                  colspan="5"
                                  style={{
                                    textAlign: "right",
                                    fontWeight: "bold",
                                  }}
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
                                <span className="report-text">
                                  সর্বমোট জমা =
                                </span>
                                <span className="report-amount">
                                  ৩৪৫৪৩৫৪.০০
                                </span>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalaryReport;
