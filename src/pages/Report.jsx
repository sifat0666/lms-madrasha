import React from "react";

const Report = () => {
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
                          <div className="filter-menu">
                            <select
                              className="form-select"
                              size="9"
                              aria-label="size 3 select example"
                            >
                              <option selected>নির্বাচন করুন</option>
                              <option>১. ভর্তি রেজিস্টার নতুন-পুরাতন</option>
                              <option>২. ভর্তি রেজিস্টার ছাত্র-ছাত্রী</option>
                              <option>
                                ৩. ভর্তি রেজিস্টার আবাসিক-অনাবাসিক
                              </option>
                              <option>৪. নতুন পুরাতন শিক্ষার্থীর তালিকা</option>
                              <option>
                                ৫. মারহালাওয়ারী নতুন পুরাতন মোট শিক্ষার্থী
                              </option>
                              <option>
                                ৬. শিক্ষার্থীদের সংক্ষিপ্ত তালিকা দুই কলামে
                              </option>
                              <option>৭. অভিবাবকের মোবাইল</option>
                              <option>
                                ৮. মারহালা ওয়ারী কিতাব/বিষয়ের তালিকা
                              </option>
                              <option>
                                ৯. শিক্ষার্থীদের পরিচয় পত্র (আইডি কার্ড)
                              </option>
                              <option>
                                ১০. শিক্ষার্থীদের পরিচয় পত্র (আইডি কার্ড)
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-12">
                          <div className="filter-menu">
                            <select
                              className="form-select"
                              size="4"
                              aria-label="size 3 select example"
                            >
                              <option selected>সাল নির্বাচন করুন</option>
                              <option>২০১৮</option>
                              <option>২০১৯</option>
                              <option>২০২০</option>
                              <option>২০২১</option>
                              <option>২০২২</option>
                              <option>২০২৩</option>
                              <option>২০২৪</option>
                              <option>২০২৫</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-12">
                          <div className="filter-menu">
                            <select
                              className="form-select"
                              size="4"
                              aria-label="size 3 select example"
                            >
                              <option selected>শ্রেণী নির্বাচন করুন</option>
                              <option>তাকমীল (ক)</option>
                              <option>তাকমীল (খ)</option>
                              <option>মক্তব</option>
                              <option>হিফযুল কুরআন পরীক্ষামুলক মারহালা</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-12">
                          <div className="filter-menu">
                            <select
                              className="form-select"
                              size="4"
                              aria-label="size 3 select example"
                            >
                              <option selected>
                                শিক্ষার্থীর ধরণ নির্বাচন করুন
                              </option>
                              <option>নতুন</option>
                              <option>পুরাতন</option>
                              <option>উভয়</option>
                            </select>
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
                          ভর্তি রেজিস্টার: ২০২২
                        </span>
                      </div>
                      <div className="pages-content">
                        <p className="my-2">জামাত/ক্লাশ : তাকমীল (ক)</p>
                        <div
                          className="table-responsive"
                          data-pattern="priority-columns"
                        >
                          <table className="table  bg-white table-bordered text-center report-table">
                            <thead className="text-center">
                              <tr>
                                <th>দাখেল</th>
                                <th>নাম</th>
                                <th>পিতার নাম</th>
                                <th>জন্ম তারিখ</th>
                                <th>রক্তের গ্রুপ</th>
                                <th>মোবাইল নাম্বার</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>১৮১</td>
                                <td>আব্দুল্লাহ</td>
                                <td>আবু তাহের</td>
                                <td>০১/০৫/১৯৮৮</td>
                                <td>A+</td>
                                <td>8577633464</td>
                              </tr>
                              <tr>
                                <td>১৮১</td>
                                <td>আব্দুল্লাহ</td>
                                <td>আবু তাহের</td>
                                <td>০১/০৫/১৯৮৮</td>
                                <td>A+</td>
                                <td>8577633464</td>
                              </tr>
                              <tr>
                                <td>১৮১</td>
                                <td>আব্দুল্লাহ</td>
                                <td>আবু তাহের</td>
                                <td>০১/০৫/১৯৮৮</td>
                                <td>A+</td>
                                <td>8577633464</td>
                              </tr>
                              <tr>
                                <td>১৮১</td>
                                <td>আব্দুল্লাহ</td>
                                <td>আবু তাহের</td>
                                <td>০১/০৫/১৯৮৮</td>
                                <td>A+</td>
                                <td>8577633464</td>
                              </tr>
                              <tr>
                                <td>১৮১</td>
                                <td>আব্দুল্লাহ</td>
                                <td>আবু তাহের</td>
                                <td>০১/০৫/১৯৮৮</td>
                                <td>A+</td>
                                <td>8577633464</td>
                              </tr>
                              <tr>
                                <td>১৮১</td>
                                <td>আব্দুল্লাহ</td>
                                <td>আবু তাহের</td>
                                <td>০১/০৫/১৯৮৮</td>
                                <td>A+</td>
                                <td>8577633464</td>
                              </tr>
                              <tr>
                                <td>১৮১</td>
                                <td>আব্দুল্লাহ</td>
                                <td>আবু তাহের</td>
                                <td>০১/০৫/১৯৮৮</td>
                                <td>A+</td>
                                <td>8577633464</td>
                              </tr>
                              <tr>
                                <td>১৮১</td>
                                <td>আব্দুল্লাহ</td>
                                <td>আবু তাহের</td>
                                <td>০১/০৫/১৯৮৮</td>
                                <td>A+</td>
                                <td>8577633464</td>
                              </tr>
                              <tr>
                                <td>১৮১</td>
                                <td>আব্দুল্লাহ</td>
                                <td>আবু তাহের</td>
                                <td>০১/০৫/১৯৮৮</td>
                                <td>A+</td>
                                <td>8577633464</td>
                              </tr>
                              <tr>
                                <td>১৮১</td>
                                <td>আব্দুল্লাহ</td>
                                <td>আবু তাহের</td>
                                <td>০১/০৫/১৯৮৮</td>
                                <td>A+</td>
                                <td>8577633464</td>
                              </tr>
                            </tbody>
                          </table>
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

export default Report;
