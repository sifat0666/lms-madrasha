import React from "react";

const ExamReport = () => {
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
                      <h4>পরীক্ষার রিপোর্ট</h4>
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
                              size="5"
                              style={{ border: "none" }}
                            >
                              <option>নির্বাচন করুন</option>
                              <option selected>
                                ১. পরীক্ষার ফি উত্তোলন তালিকা
                              </option>
                              <option
                                data-bs-toggle="modal"
                                data-bs-target="#admitcard"
                              >
                                ২. প্রবেশপত্র
                              </option>
                              <option>৩. দস্তখতপত্র</option>
                              <option>৪. নাম্বরপত্র</option>
                              <option>৫. সীট নং</option>
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
                              style={{ border: "none" }}
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
                              style={{ border: "none" }}
                            >
                              <option selected="">পরীক্ষা নির্বাচন করুন</option>
                              <option>প্রথম সাময়িক পরীক্ষা</option>
                              <option>দ্বিতীয় সাময়িক পরীক্ষা</option>
                              <option>তৃতীয় সাময়িক পরীক্ষা</option>
                              <option>বোর্ড পরীক্ষা</option>
                              <option>মাসিক পরীক্ষা</option>
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
                              style={{ border: "none" }}
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
                              size="3"
                              style={{ border: "none" }}
                            >
                              <option selected>ভাষা নির্বাচন করুন</option>
                              <option>বাংলা</option>
                              <option>আরাবী</option>
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
                    <div
                      className="preview-page d-print-block"
                      style={{ zIndex: 1 }}
                    >
                      <span
                        className="print-button d-print-none"
                        onclick="window.print()"
                      >
                        <i className="bi bi-printer-fill"></i>
                      </span>
                      <div className="pages-title d-print-none">
                        <h5>জামিয়া আরাবিয়া ইমদাদুল ফরিদাবাদ</h5>
                        <p>১১/১২ মাদরাসা রোড, গেন্ডারিয়া, ঢাকা-১২০৪</p>
                        <span>01832-061454 # 027440235</span>
                        <br />
                        <span className="pages-subtitle">
                          পরীক্ষা ফি উত্তোলন তালিকা
                        </span>
                      </div>
                      <div className="pages-content">
                        <div className="row my-3 justify-content-center align-items-center d-print-none">
                          <div className="col-5">
                            <p className="my-2">
                              <strong>শ্রেণী/মারহালাঃ</strong>
                              মিযান
                            </p>
                          </div>
                          <div className="col-3">
                            <p className="my-2">
                              <strong>শিক্ষবর্ষঃ</strong>
                              ২০২১-২০২২ইং
                            </p>
                          </div>
                          <div className="col-4 d-flex justify-content-start justify-content-lg-end">
                            <p className="my-2">
                              <strong>প্রিন্ট তারিখঃ</strong>
                              ০৪/০৩/২০২২ ইং
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div
                              className="table-responsive"
                              data-pattern="priority-columns"
                            >
                              <table className="table  bg-white table-bordered text-center report-table">
                                <thead className="text-center">
                                  <tr>
                                    <td colspan="4">
                                      <div className="pages-title">
                                        <h5>
                                          জামিয়া আরাবিয়া ইমদাদুল ফরিদাবাদ
                                        </h5>
                                        <p>
                                          ১১/১২ মাদরাসা রোড, গেন্ডারিয়া,
                                          ঢাকা-১২০৪
                                        </p>
                                        <span>01832-061454 # 027440235</span>
                                        <br />
                                        <span className="pages-subtitle">
                                          পরীক্ষা ফি উত্তোলন তালিকা
                                        </span>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="4">
                                      <div className="d-flex justify-content-between">
                                        <div>
                                          <strong>মারহালাঃ</strong>
                                          মিযান
                                        </div>
                                        <div>
                                          <strong>মারহালাঃ</strong>
                                          মিযান
                                        </div>
                                        <div>
                                          <strong>প্রিন্ট তারিখঃ</strong>
                                          ০৪/০৩/২২ ইং
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>ক্রঃ</th>
                                    <th>আইডি</th>
                                    <th>পরীক্ষার্থী</th>
                                    <th>ফি</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>১৮১</td>
                                    <td>আব্দুল্লাহ</td>
                                    <td>আবু তাহের</td>
                                    <td>০১/০৫/১৯৮৮</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="col-12 mt-3">
                            <div
                              className="table-responsive"
                              data-pattern="priority-columns"
                            >
                              <table className="table  bg-white table-bordered text-center report-table">
                                <thead className="text-center">
                                  <tr>
                                    <td colspan="4">
                                      <div className="pages-title">
                                        <h5>
                                          জামিয়া আরাবিয়া ইমদাদুল ফরিদাবাদ
                                        </h5>
                                        <p>
                                          ১১/১২ মাদরাসা রোড, গেন্ডারিয়া,
                                          ঢাকা-১২০৪
                                        </p>
                                        <span>01832-061454 # 027440235</span>
                                        <br />
                                        <span className="pages-subtitle">
                                          পরীক্ষা ফি উত্তোলন তালিকা
                                        </span>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="4">
                                      <div className="d-flex justify-content-between">
                                        <div>
                                          <strong>মারহালাঃ</strong>
                                          মিযান
                                        </div>
                                        <div>
                                          <strong>মারহালাঃ</strong>
                                          মিযান
                                        </div>
                                        <div>
                                          <strong>প্রিন্ট তারিখঃ</strong>
                                          ০৪/০৩/২২ ইং
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>ক্রঃ</th>
                                    <th>আইডি</th>
                                    <th>পরীক্ষার্থী</th>
                                    <th>ফি</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>১৮১</td>
                                    <td>আব্দুল্লাহ</td>
                                    <td>আবু তাহের</td>
                                    <td>০১/০৫/১৯৮৮</td>
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
          </div>
        </div>
      </section>
      {/* <!-- Report Section END --> */}
      {/* <!--Admit Card Modal--> */}
      <div
        className="modal fade"
        id="admitcard"
        aria-hidden="true"
        tabindex="-1"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="section-title">
              <h4>প্রবেশপত্র</h4>
            </div>
            <form>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12 w-100">
                    <div className="row">
                      <div className="col-12 d-flex justify-content-center">
                        <div className="entrytype-option">
                          <div
                            className="form-check"
                            style={{ paddingLeft: "1.5em" }}
                          >
                            <input
                              className="form-check-input"
                              type="radio"
                              name="options"
                            />
                            <label className="form-check-label" for="options">
                              সকল শিক্ষার্থী
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="options"
                            />
                            <label className="form-check-label" for="options">
                              আলাদা এন্ট্রি
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="my-4">
                          <div className="row">
                            <div className="col-3">
                              <div className="row mb-3">
                                <div className="col-12">
                                  <div className="row">
                                    <label className="col-sm-12 col-form-label info-lable text-center">
                                      শিক্ষবর্ষ
                                      <i>*</i>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <select className="form-select">
                                    <option selected="">
                                      {" "}
                                      শিক্ষবর্ষ নির্বাচন করুন
                                    </option>
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
                            <div className="col-3">
                              <div className="row mb-3">
                                <div className="col-12">
                                  <div className="row">
                                    <label className="col-sm-12 col-form-label info-lable text-center">
                                      পরীক্ষা
                                      <i>*</i>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <select className="form-select">
                                    <option selected="">
                                      পরীক্ষা নির্বাচন করুন
                                    </option>
                                    <option>প্রথম সাময়িক পরীক্ষা</option>
                                    <option>দ্বিতীয় সাময়িক পরীক্ষা</option>
                                    <option>তৃতীয় সাময়িক পরীক্ষা</option>
                                    <option>বোর্ড পরীক্ষা</option>
                                    <option>মাসিক পরীক্ষা</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              <div className="row mb-3">
                                <div className="col-12">
                                  <div className="row">
                                    <label className="col-sm-12 col-form-label info-lable text-center">
                                      মারহালা/শ্রেণী
                                      <i>*</i>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <select className="form-select">
                                    <option selected="">
                                      শ্রেণী নির্বাচন করুন
                                    </option>
                                    <option>তাকমীল (ক)</option>
                                    <option>তাকমীল (খ)</option>
                                    <option>মক্তব</option>
                                    <option>
                                      হিফযুল কুরআন পরীক্ষামুলক মারহালা
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              <div className="row mb-3">
                                <div className="col-12">
                                  <div className="row">
                                    <label className="col-sm-12 col-form-label info-lable text-center">
                                      রিপোর্টের ধরন
                                      <i>*</i>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <select className="form-select">
                                    <option selected="">নির্বাচন করুন</option>
                                    <option>A4 পেপারে বাংলা</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <div className="row">
                                <div className="col-12">
                                  <div className="row">
                                    <label className="col-sm-2 col-form-label info-lable">
                                      শিক্ষার্থীর আইডি
                                    </label>
                                    <div className="col-6">
                                      <input
                                        type="search"
                                        className="form-control"
                                        placeholder="শিক্ষার্থীর আইডি"
                                      />
                                    </div>
                                    <div className="col-2">
                                      <input
                                        type="button"
                                        className="custom-btn btn-primary"
                                        value="Save"
                                      />
                                    </div>
                                    <div className="col-2">
                                      <input
                                        type="button"
                                        className="custom-btn btn-danger"
                                        value="Close"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-12">
                        <div className="migration-container">
                          <div className="migration-title">
                            কালার নির্বাচন করুন
                          </div>
                          <div className="migration-type">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="options-2"
                              />
                              <label className="form-check-label" for="options">
                                রঙিন
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="options-2"
                              />
                              <label className="form-check-label" for="options">
                                সাদা কালো
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="options-2"
                              />
                              <label className="form-check-label" for="options">
                                প্রেসে ছাপানো কাগজে
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-12 d-flex justify-content-center">
                        <a
                          href="#"
                          className="custom-btn btn-primary"
                          onclick="javascript:void(0)"
                        >
                          <i className="bi bi-printer"></i>
                          প্রিন্ট
                        </a>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-12">
                        <div
                          className="table-responsive accounts-table"
                          data-pattern="priority-columns"
                        >
                          <table
                            id="tech-companies-1"
                            className="table  bg-white text-center mb-0"
                          >
                            <thead className="text-center accounts-table-head">
                              <tr>
                                <th>দাখেলা</th>
                                <th>শিক্ষার্থীর নাম</th>
                                <th>ক্লাস</th>
                                <th>
                                  <span className="action-edit">
                                    <i className="bi bi-pencil-square"></i>
                                  </span>
                                </th>
                                <th>
                                  <span className="action-delete">
                                    <i className="bi bi-trash3"></i>
                                  </span>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                  <span className="action-edit">
                                    <i className="bi bi-pencil-square"></i>
                                  </span>
                                </td>
                                <td>
                                  <span className="action-delete">
                                    <i className="bi bi-trash3"></i>
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="button-group">
                  <button
                    className="custom-btn btn-primary"
                    type="submit"
                    data-bs-toggle="modal"
                    data-bs-target="#admissonfees"
                  >
                    Save
                  </button>
                  <button className="custom-btn btn-dark" type="submit">
                    New
                  </button>
                  <button
                    className="custom-btn btn-danger d-block"
                    type="button"
                    data-bs-dismiss="modal"
                    onclick="javascript:void(0)"
                  >
                    Close
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamReport;
