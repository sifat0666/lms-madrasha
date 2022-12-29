import React from "react";

const SalaryReport = () => {
  return (
    <div>
      <section class="user-form-section">
        <div class="section-bg">
          <div class="row">
            <div class="col-md-12 w-100">
              <div class="main-container">
                <div class="row d-print-none">
                  <div class="col-12">
                    <div class="section-title" style={{ marginTop: "2px" }}>
                      <h4>রিপোর্ট</h4>
                    </div>
                  </div>
                </div>
                <div class="row">
                  {/* <!--Filter Menu Section--> */}
                  <div class="col-lg-4 col-12 col-md-12 d-print-none">
                    <form>
                      <div class="row">
                        <div class="col-12">
                          <div class="filter-menu report-menu">
                            <select
                              class="form-select"
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
                      <div class="row mt-2">
                        <div class="col-12">
                          <div class="filter-menu report-menu">
                            <select
                              class="form-select"
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
                      <div class="row mt-3">
                        <div class="col-12">
                          <div class="row">
                            <div class="col-12 col-lg-5 col-md-12">
                              <input type="date" class="form-control" />
                            </div>
                            <label class="col-lg-2 col-12 col-md-12 col-form-label info-lable">
                              হতে
                            </label>
                            <div class="col-12 col-lg-5 col-md-12">
                              <input type="date" class="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row mt-3">
                        <div class="col-12">
                          <button
                            type="submit"
                            class="custom-btn btn-primary d-block w-100"
                          >
                            Preview
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* <!--Preview Page Section--> */}
                  <div class="col-lg-8 col-12 col-md-12 mt-lg-0 mt-4">
                    <div class="preview-page d-print-block">
                      <span
                        class="print-button d-print-none"
                        onclick="window.print()"
                      >
                        <i class="bi bi-printer-fill"></i>
                      </span>
                      <div class="pages-title">
                        <h5>জামিয়া আরাবিয়া ইমদাদুল ফরিদাবাদ</h5>
                        <p>১১/১২ মাদরাসা রোড, গেন্ডারিয়া, ঢাকা-১২০৪</p>
                        <span>01832-061454 # 027440235</span>
                        <br />
                        <span class="pages-subtitle">
                          দৈনিক ফি গ্রহনের তালিকা
                        </span>
                        <br />
                      </div>
                      <div class="pages-content">
                        <div class="row my-3 justify-content-center align-items-center">
                          <div class="col-5">
                            <p class="my-2">২৯/০৯/২০২২ ইং থেকে ২৯/১০/২০২২ ইং</p>
                          </div>
                          <div class="col-3"></div>
                          <div class="col-4 d-flex justify-content-end">
                            <p class="my-2">
                              <span>রিপোর্ট প্রিন্ট তারিখঃ</span>
                              ০৩/১২/২০২২
                            </p>
                          </div>
                        </div>
                        <div
                          class="table-responsive"
                          data-pattern="priority-columns"
                        >
                          <table class="table  bg-white table-bordered text-center report-table">
                            <thead class="text-center">
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
                          <div class="short-report">
                            <div class="report-item">
                              <div class="items">
                                <span class="report-text">সর্বমোট জমা =</span>
                                <span class="report-amount">৩৪৫৪৩৫৪.০০</span>
                              </div>
                              <div class="items">
                                <span>সর্বমোট খরচ =</span>
                                <span>৩৪৫৪৩৫৪.০০</span>
                              </div>
                              <hr class="lines" />
                              <div class="items">
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
