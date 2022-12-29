import React from "react";

const MarkSheet = () => {
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
                      <h4>মার্কশিট</h4>
                    </div>
                  </div>
                </div>
                <div class="row">
                  {/* <!--Filter Menu Section--> */}
                  <div class="col-lg-4 col-md-12 col-12 d-print-none">
                    <form>
                      <div class="row mb-3">
                        <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                          রিপোর্ট
                          <i>*</i>
                        </label>
                        <div class="col-lg-8 col-md-8 col-12">
                          <select class="form-select">
                            <option value="" selected="">
                              সিলেক্ট করুন
                            </option>
                            <option value="">A4 পেপার</option>
                            <option value="">Ligal Paper</option>
                          </select>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                          শিক্ষাবর্ষ
                          <i>*</i>
                        </label>
                        <div class="col-lg-8 col-md-8 col-12">
                          <select class="form-select">
                            <option value="" selected="">
                              সিলেক্ট করুন
                            </option>
                            <option value="">২০২২</option>
                            <option value="">২০২৩</option>
                            <option value="">২০২৪</option>
                            <option value="">২০২৫</option>
                          </select>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                          পরীক্ষার নাম
                          <i>*</i>
                        </label>
                        <div class="col-lg-8 col-md-8 col-12">
                          <select class="form-select">
                            <option selected="">শ্রেণী নির্বাচন করুন</option>
                            <option>প্রথম সাময়িক পরীক্ষা</option>
                            <option>দ্বিতীয় সাময়িক পরীক্ষা</option>
                            <option>তৃতীয় সাময়িক পরীক্ষা</option>
                            <option>বোর্ড পরীক্ষা</option>
                            <option>মাসিক পরীক্ষা</option>
                          </select>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                          মারহালা
                          <i>*</i>
                        </label>
                        <div class="col-lg-8 col-md-8 col-12">
                          <select class="form-select">
                            <option selected="">শ্রেণী নির্বাচন করুন</option>
                            <option>নাযেরা</option>
                            <option>হিফযুল কুরআন</option>
                            <option>ই-দাদী</option>
                            <option>ইবতিদায়ী আউয়াল</option>
                            <option>ইবতিদায়ী নানী</option>
                            <option>উস্তানী আউয়াল</option>
                            <option>উস্তানী সানী</option>
                            <option>সানাবী আউয়াল</option>
                            <option>সানাবী আউয়াল</option>
                            <option>সানাবী সানী</option>
                            <option>নিহায়ী আউয়াল</option>
                            <option>নিহায়ী সানী</option>
                            <option>তাকমীল</option>
                            <option>ইফতা ১ম</option>
                          </select>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                          কিতাব
                          <i>*</i>
                        </label>
                        <div class="col-lg-8 col-md-8 col-12">
                          <select class="form-select">
                            <option selected="">শ্রেণী নির্বাচন করুন</option>
                            <option>নাযেরা</option>
                            <option>হিফযুল কুরআন</option>
                            <option>ই-দাদী</option>
                            <option>ইবতিদায়ী আউয়াল</option>
                            <option>ইবতিদায়ী নানী</option>
                            <option>উস্তানী আউয়াল</option>
                            <option>উস্তানী সানী</option>
                            <option>সানাবী আউয়াল</option>
                            <option>সানাবী আউয়াল</option>
                            <option>সানাবী সানী</option>
                            <option>নিহায়ী আউয়াল</option>
                            <option>নিহায়ী সানী</option>
                            <option>তাকমীল</option>
                            <option>ইফতা ১ম</option>
                          </select>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                          আইডি
                          <i>*</i>
                        </label>
                        <div class="col-lg-3 col-md-3 col-5">
                          <input type="text" class="form-control" />
                        </div>
                        <div class="col-2">থেকে</div>
                        <div class="col-lg-3 col-md-3 col-5">
                          <input type="text" class="form-control" />
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
                  <div class="col-lg-8 col-md-12 col-12 mt-2 mt-lg-0">
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
                      <div class="pages-title">
                        <h5>জামিয়া আরাবিয়া ইমদাদুল ফরিদাবাদ</h5>
                        <p>১১/১২ মাদরাসা রোড, গেন্ডারিয়া, ঢাকা-১২০৪</p>
                        <span>01832-061454 # 027440235</span>
                        <br />
                        <span>শিক্ষবর্ষঃ ২০২১-২০২২ইং</span>
                        <br />
                        <span
                          class="pages-subtitle"
                          style={{ marginTop: "11px" }}
                        >
                          ২য় সাময়িক পরীক্ষা
                        </span>
                      </div>
                      <div class="pages-content">
                        <div class="row">
                          <div class="col-5 d-flex flex-wrap align-content-center">
                            <div class="student-id">
                              <strong>আইডিঃ</strong>
                              <span>৮৩৪</span>
                            </div>
                            <div class="student-name">
                              <strong>পরীক্ষার্থীর নামঃ</strong>
                              <span>মুহাঃ নাহিদুল ইসলাম</span>
                            </div>
                            <div class="student-fname">
                              <strong>পিতার নামঃ</strong>
                              <span>মুহাঃ আব্দুল্লাহ</span>
                            </div>
                            <div class="student-dob">
                              <strong>জন্ম তারিখঃ</strong>
                              <span>০৬/০১/২০২২ ইং</span>
                            </div>
                          </div>
                          <div class="col-1"></div>
                          <div class="col-6">
                            <div
                              class="short-info"
                              style={{ marginTop: "0px" }}
                            >
                              <div
                                class="table-responsive"
                                data-pattern="priority-columns"
                              >
                                <table class="table  bg-white table-bordered text-center report-table">
                                  <thead
                                    class="text-center"
                                    style={{ backgroundColor: "gray" }}
                                  >
                                    <tr>
                                      <th colspan="4">
                                        মোট বিষয় ৪টি পূর্নমান ১০০ x ৪ =৪০০
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>মুমতাজ</td>
                                      <td>৮০x4</td>
                                      <td>=</td>
                                      <td>৩২০</td>
                                    </tr>
                                    <tr>
                                      <td>মুমতাজ</td>
                                      <td>৮০x4</td>
                                      <td>=</td>
                                      <td>৩২০</td>
                                    </tr>
                                    <tr>
                                      <td>মুমতাজ</td>
                                      <td>৮০x4</td>
                                      <td>=</td>
                                      <td>৩২০</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12">
                            <div
                              class="table-responsive"
                              data-pattern="priority-columns"
                            >
                              <table class="table  bg-white table-bordered text-center report-table">
                                <thead class="text-center">
                                  <tr>
                                    <th>ক্রঃ</th>
                                    <th>বিষয়</th>
                                    <th>প্রাপ্ত নম্বর</th>
                                    <th>পাশ নম্বর</th>
                                    <th>সব্বোচ্চ নম্বর</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>১৮১</td>
                                    <td>মিযানুস সরফ</td>
                                    <td>৫০</td>
                                    <td>৩৫</td>
                                    <td>১০০</td>
                                  </tr>
                                  <tr>
                                    <td>১৮১</td>
                                    <td>পান্দেনামা</td>
                                    <td>৫০</td>
                                    <td>৩৫</td>
                                    <td>১০০</td>
                                  </tr>
                                  <tr>
                                    <td>১৮১</td>
                                    <td>মিযানুস সরফ</td>
                                    <td>৫০</td>
                                    <td>৩৫</td>
                                    <td>১০০</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div class="col-12">
                            <div
                              class="table-responsive"
                              data-pattern="priority-columns"
                            >
                              <table class="table  bg-white table-bordered text-center report-table">
                                <tbody>
                                  <tr>
                                    <th>
                                      মোট নম্বর
                                      <td>২০০</td>
                                    </th>
                                    <th>
                                      প্রাপ্ত বিভাগ
                                      <td>মকবুল</td>
                                    </th>
                                    <th>
                                      মেধা স্থান
                                      <td>০</td>
                                    </th>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="row">
                              <div class="col-6">
                                <div
                                  class="table-responsive"
                                  data-pattern="priority-columns"
                                >
                                  <table class="table  bg-white table-bordered text-center report-table">
                                    <thead class="text-center">
                                      <tr>
                                        <th>
                                          শ্রেনী শিক্ষক/শিক্ষিকার মন্তব্য ও
                                          স্বাক্ষর
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td style={{ height: "90px" }}></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div class="col-6">
                                <div
                                  class="table-responsive"
                                  data-pattern="priority-columns"
                                >
                                  <table class="table  bg-white table-bordered text-center report-table">
                                    <thead class="text-center">
                                      <tr>
                                        <th>অভিবাবকের মন্তব্য ও স্বাক্ষর</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td style={{ height: "90px" }}></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="row mt-5">
                              <div class="col-6 d-flex justify-content-start">
                                <div class="marksheet-sing">
                                  <span>মুহতামিম এর স্বাক্ষর</span>
                                  <br />
                                  <span>তারিখঃ</span>
                                </div>
                              </div>
                              <div class="col-6 d-flex justify-content-end">
                                <div class="marksheet-sing">
                                  <span>পরীক্ষা নিয়ন্ত্রকের স্বাক্ষর</span>
                                  <br />
                                  <span>তারিখঃ</span>
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
        </div>
      </section>
      {/* <!-- Report Section END -->
            <!--Admit Card Modal--> */}
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
                            style={{ paddingLeft: "1.5ems" }}
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

export default MarkSheet;
