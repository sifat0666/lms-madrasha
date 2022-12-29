import React from "react";

const AdmitCardPrint = () => {
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
                      <h4>পরীক্ষার প্রবেশপত্র</h4>
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
                      <div class="row mt-3">
                        <div class="col-12">
                          <div class="filter-menu">
                            <select
                              class="form-select"
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
                      <div class="row mt-3">
                        <div class="col-12">
                          <div class="filter-menu">
                            <select
                              class="form-select"
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
                      <div class="row mt-3">
                        <div class="col-12">
                          <div class="filter-menu">
                            <select
                              class="form-select"
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
                      <div class="row mt-3">
                        <div class="col-12">
                          <div class="filter-menu">
                            <select
                              class="form-select"
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
                    <div
                      class="preview-page d-print-block"
                      style={{ zIndex: 1 }}
                    >
                      <span
                        class="print-button d-print-none"
                        onclick="window.print()"
                      >
                        <i class="bi bi-printer-fill"></i>
                      </span>
                      <div class="admitcard-container">
                        <div class="pages-title">
                          <h5>জামিয়া আরাবিয়া ইমদাদুল ফরিদাবাদ</h5>
                          <p>১১/১২ মাদরাসা রোড, গেন্ডারিয়া, ঢাকা-১২০৪</p>
                          <span>01832-061454 # 027440235</span>
                          <span>২য় সাময়িক পরীক্ষা</span>
                          <br />
                          <span class="pages-subtitle">প্রবেশপত্র</span>
                        </div>
                        <div class="admitcard-logo">
                          <span class="image-title">
                            <img
                              src="../../assets/images/Madrashs logo.png"
                              alt=""
                            />
                          </span>
                        </div>
                        <div class="admitcard-image">
                          <span class="image-title">
                            <img src="../../assets/images/takrim.jpg" alt="" />
                          </span>
                        </div>
                        <div class="pages-content admitcard-content">
                          <div class="row mt-3">
                            <div class="col-6 admitcard-info">
                              <div class="info">
                                <strong>পরীক্ষার্থীর নামঃ</strong>
                                <span>আবু আদনান</span>
                              </div>
                              <div class="info">
                                <strong>জামাতঃ</strong>
                                <span>মিযান</span>
                              </div>
                            </div>
                            <div class="col-6 admitcard-info">
                              <div class="info">
                                <strong>কোড নংঃ</strong>
                                <span>৮২০১</span>
                              </div>
                              <div class="info">
                                <strong> জন্ম তারিখঃ</strong>
                                <span>২৩/০৪/২০০০ ইং</span>
                              </div>
                            </div>
                          </div>
                          <div class="row mt-5">
                            <div class="col-6 d-flex justify-content-center">
                              <div class="admit-sing">
                                <span>নাযেমে ইমতিহান</span>
                                <br />
                                <span>তারিখঃ ৩০/০৪/২০০০ ইং</span>
                              </div>
                            </div>
                            <div class="col-6 d-flex justify-content-center">
                              <div class="admit-sing">
                                <span>মুহতামিম</span>
                                <br />
                                <span>তারিখঃ ৩০/০৪/২০০০ ইং</span>
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
      {/* <!-- Report Section END --> */}
      {/* <!--Admit Card Modal--> */}
      <div class="modal fade" id="admitcard" aria-hidden="true" tabindex="-1">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="section-title">
              <h4>প্রবেশপত্র</h4>
            </div>
            <form>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-12 w-100">
                    <div class="row">
                      <div class="col-12 d-flex justify-content-center">
                        <div class="entrytype-option">
                          <div
                            class="form-check"
                            style={{ paddingLeft: "1.5em" }}
                          >
                            <input
                              class="form-check-input"
                              type="radio"
                              name="options"
                            />
                            <label class="form-check-label" for="options">
                              সকল শিক্ষার্থী
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="options"
                            />
                            <label class="form-check-label" for="options">
                              আলাদা এন্ট্রি
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="my-4">
                          <div class="row">
                            <div class="col-3">
                              <div class="row mb-3">
                                <div class="col-12">
                                  <div class="row">
                                    <label class="col-sm-12 col-form-label info-lable text-center">
                                      শিক্ষবর্ষ
                                      <i>*</i>
                                    </label>
                                  </div>
                                </div>
                                <div class="col-12">
                                  <select class="form-select">
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
                            <div class="col-3">
                              <div class="row mb-3">
                                <div class="col-12">
                                  <div class="row">
                                    <label class="col-sm-12 col-form-label info-lable text-center">
                                      পরীক্ষা
                                      <i>*</i>
                                    </label>
                                  </div>
                                </div>
                                <div class="col-12">
                                  <select class="form-select">
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
                            <div class="col-3">
                              <div class="row mb-3">
                                <div class="col-12">
                                  <div class="row">
                                    <label class="col-sm-12 col-form-label info-lable text-center">
                                      মারহালা/শ্রেণী
                                      <i>*</i>
                                    </label>
                                  </div>
                                </div>
                                <div class="col-12">
                                  <select class="form-select">
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
                            <div class="col-3">
                              <div class="row mb-3">
                                <div class="col-12">
                                  <div class="row">
                                    <label class="col-sm-12 col-form-label info-lable text-center">
                                      রিপোর্টের ধরন
                                      <i>*</i>
                                    </label>
                                  </div>
                                </div>
                                <div class="col-12">
                                  <select class="form-select">
                                    <option selected="">নির্বাচন করুন</option>
                                    <option>A4 পেপারে বাংলা</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-12">
                              <div class="row">
                                <div class="col-12">
                                  <div class="row">
                                    <label class="col-sm-2 col-form-label info-lable">
                                      শিক্ষার্থীর আইডি
                                    </label>
                                    <div class="col-6">
                                      <input
                                        type="search"
                                        class="form-control"
                                        placeholder="শিক্ষার্থীর আইডি"
                                      />
                                    </div>
                                    <div class="col-2">
                                      <input
                                        type="button"
                                        class="custom-btn btn-primary"
                                        value="Save"
                                      />
                                    </div>
                                    <div class="col-2">
                                      <input
                                        type="button"
                                        class="custom-btn btn-danger"
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
                    <div class="row mt-4">
                      <div class="col-12">
                        <div class="migration-container">
                          <div class="migration-title">কালার নির্বাচন করুন</div>
                          <div class="migration-type">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="options-2"
                              />
                              <label class="form-check-label" for="options">
                                রঙিন
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="options-2"
                              />
                              <label class="form-check-label" for="options">
                                সাদা কালো
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="options-2"
                              />
                              <label class="form-check-label" for="options">
                                প্রেসে ছাপানো কাগজে
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row mt-4">
                      <div class="col-12 d-flex justify-content-center">
                        <a
                          href="#"
                          class="custom-btn btn-primary"
                          onclick="javascript:void(0)"
                        >
                          <i class="bi bi-printer"></i>
                          প্রিন্ট
                        </a>
                      </div>
                    </div>
                    <div class="row mt-4">
                      <div class="col-12">
                        <div
                          class="table-responsive accounts-table"
                          data-pattern="priority-columns"
                        >
                          <table
                            id="tech-companies-1"
                            class="table  bg-white text-center mb-0"
                          >
                            <thead class="text-center accounts-table-head">
                              <tr>
                                <th>দাখেলা</th>
                                <th>শিক্ষার্থীর নাম</th>
                                <th>ক্লাস</th>
                                <th>
                                  <span class="action-edit">
                                    <i class="bi bi-pencil-square"></i>
                                  </span>
                                </th>
                                <th>
                                  <span class="action-delete">
                                    <i class="bi bi-trash3"></i>
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
                                  <span class="action-edit">
                                    <i class="bi bi-pencil-square"></i>
                                  </span>
                                </td>
                                <td>
                                  <span class="action-delete">
                                    <i class="bi bi-trash3"></i>
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
              <div class="modal-footer">
                <div class="button-group">
                  <button
                    class="custom-btn btn-primary"
                    type="submit"
                    data-bs-toggle="modal"
                    data-bs-target="#admissonfees"
                  >
                    Save
                  </button>
                  <button class="custom-btn btn-dark" type="submit">
                    New
                  </button>
                  <button
                    class="custom-btn btn-danger d-block"
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

export default AdmitCardPrint;
