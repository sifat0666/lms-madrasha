import React from "react";

const HishabNikash = () => {
  return (
    <div>
      {/* <!-- হিসাব নিকাশ সেকশন শুরু --> */}
      <section class="user-form-section d-print-none">
        <div class="section-bg">
          <div class="row">
            <div class="col-md-12 w-100">
              <div
                class="main-contai
              ......................ner"
              >
                <div class="row">
                  <div class="col-lg-6 col-12">
                    <div class="section-title">
                      <h4>হিসাব-নিকাশ</h4>
                    </div>
                    <div class="my-4">
                      <form class="accounts-form">
                        <div class="row">
                          <div class="col-lg-7 col-md-7 col-9">
                            <div class="row mb-3">
                              <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                                ফান্ডঃ
                                <i>*</i>
                              </label>
                              <div class="col-lg-6 col-md-6 col-10">
                                <select class="form-select">
                                  <option selected>ফান্ড নির্বাচন করুন</option>
                                  <option>সাধারণ ফান্ড</option>
                                  <option>লিল্লাহ ফান্ড</option>
                                  <option>মসজিদ ফান্ড</option>
                                  <option>মাদরাসা ফান্ড</option>
                                </select>
                              </div>
                              <div class="col-2">
                                <span class="addbutton">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#addfund"
                                  >
                                    <i class="bi bi-plus-circle-fill"></i>
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-5 col-md-5 col-3">
                            <div class="row mb-3">
                              <div class="option-icon">
                                <span>
                                  <a href="#">
                                    <i class="bi bi-info-circle-fill"></i>
                                  </a>
                                </span>
                                <span>
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#admissonModal"
                                  >
                                    <i class="bi bi-gear-fill"></i>
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-7 col-md-7 col-12">
                            <div class="row mb-3">
                              <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                                চার্ট অফ একাউন্ট
                                <i>*</i>
                              </label>
                              <div class="col-lg-6 col-md-6 col-10">
                                <select class="form-select">
                                  <option selected> সিলেক্ট করুন</option>
                                  <option>জমা</option>
                                  <option>খরচ</option>
                                </select>
                              </div>
                              <div class="col-2">
                                <span class="addbutton">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#addgenaralLadger"
                                  >
                                    <i class="bi bi-plus-circle-fill"></i>
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-5 col-12">
                            <div class="row mb-3">
                              <label class="col-md-4 col-12 col-form-label info-lable">
                                খাত
                                <i>*</i>
                              </label>
                              <div class="col-md-8 col-12">
                                <select class="form-select">
                                  <option selected> সিলেক্ট করুন</option>
                                  <option>ভর্তি ফি</option>
                                  <option>বেতন</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-7 col-md-7 col-12">
                            <div class="row mb-3">
                              <label class="col-md-4 col-12 col-form-label info-lable">
                                ভাউচার রশিদঃ
                                <i>*</i>
                              </label>
                              <div class="col-md-8 col-12">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="ভাউচার রশিদ"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-md-5 col-12">
                            <div class="row">
                              <label class="col-md-4 col-12 col-form-label info-lable">
                                বইঃ
                                <i>*</i>
                              </label>
                              <div class="col-md-8 col-12">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="বই"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-7 col-md-7 col-12">
                            <div class="row mb-3">
                              <label class="col-md-4 col-12 col-form-label info-lable">
                                জমা/খরচ তারিখঃ
                                <i>*</i>
                              </label>
                              <div class="col-md-8 col-12">
                                <input type="date" class="form-control" />
                              </div>
                            </div>
                          </div>
                          <div class="col-md-5 col-12">
                            <div class="row mb-3">
                              <label class="col-md-4 col-12 col-form-label info-lable">
                                আরবি তারিখঃ
                                <i>*</i>
                              </label>
                              <div class="col-md-8 col-12">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="আরবি(MM/DD/YY)"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-7 col-md-7 col-12">
                            <div class="row">
                              <div class="col-6">
                                <div class="row mb-3">
                                  <label class="col-sm-12 col-form-label info-lable">
                                    পেমেন্ট সিস্টেম
                                    <i>*</i>
                                  </label>
                                  <div class="col-12">
                                    <select class="form-select">
                                      <option selected>
                                        পেমেন্ট সিস্টেম সিলেক্ট
                                      </option>
                                      <option>ক্যাশ</option>
                                      <option>ব্যাংক</option>
                                      <option>মোবাইল ব্যাংকিং</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div class="col-6">
                                <div class="row mb-3">
                                  <label class="col-sm-12 col-form-label info-lable">
                                    একাউন্টের নামঃ
                                    <i>*</i>
                                  </label>
                                  <div class="col-12">
                                    <select class="form-select">
                                      <option selected>একাউন্ট সিলেক্ট</option>
                                      <option>মোহাম্মদ শহিদুল ইসলাম</option>
                                      <option>ইষলামি ব্যাংক</option>
                                      <option>বিকাশ</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-5 col-12">
                            <div class="row">
                              <div class="col-7">
                                <div class="row mb-3">
                                  <label class="col-sm-12 col-form-label info-lable">
                                    পেমেন্ট মন্তব্যঃ
                                    <i>*</i>
                                  </label>
                                  <div class="col-12">
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="মন্তব্য লিখুন"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="col-5">
                                <div class="row mb-3">
                                  <label class="col-sm-12 col-form-label info-lable">
                                    মেথড যোগঃ
                                  </label>
                                  <div class="col-12">
                                    <span class="addbutton">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#bankadd"
                                      >
                                        <i class="bi bi-plus-circle-fill"></i>
                                      </a>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12">
                            <div class="row">
                              <div class="col-6">
                                <div class="row mb-3">
                                  <label class="col-sm-12 col-form-label info-lable">
                                    পার্টিকোলার্স বর্ণনা
                                    <i>*</i>
                                  </label>
                                  <div class="col-12">
                                    <input
                                      class="form-control"
                                      placeholder="পার্টিকোলার্স বর্ণনা"
                                      type="text"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="col-6">
                                <div class="row mb-3">
                                  <label class="col-sm-12 col-form-label info-lable">
                                    পরিমাণ
                                    <i>*</i>
                                  </label>
                                  <div class="col-12">
                                    <input
                                      type="number"
                                      class="form-control"
                                      placeholder="পরিমাণ"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="button-group my-4 hisab-btn">
                          <a
                            href="#"
                            class="custom-btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#admissonfees"
                          >
                            Save
                          </a>
                          <button class="custom-btn btn-dark" type="submit">
                            Show
                          </button>
                          <button class="custom-btn btn-dark" type="submit">
                            Close
                          </button>
                          <button class="custom-btn btn-danger" type="submit">
                            Delete
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="my-4">
                      <div class="row">
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
                                  <th>জি.লেজার</th>
                                  <th>সা: আ</th>
                                  <th>পেমেন্ট মন্তব্য</th>
                                  <th>সাব: লেজার</th>
                                  <th>পার্টিকোলার্স</th>
                                  <th>পরিমাণ</th>
                                </tr>
                              </thead>
                              <tbody>
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
                                <tr class="table-footer">
                                  <td colspan="5" style="text-align: right;">
                                    মোট
                                  </td>
                                  <td>৩০০ ৳</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-12 mt-4">
                    <div class="row">
                      <div class="col-12">
                        <div class="row">
                          <div class="col-7">
                            <div class="row">
                              <div class="col-12">
                                <select class="form-select">
                                  <option selected>ফান্ড নির্বাচন করুন</option>
                                  <option>সাধারণ ফান্ড</option>
                                  <option>লিল্লাহ ফান্ড</option>
                                  <option>মসজিদ ফান্ড</option>
                                  <option>মাদরাসা ফান্ড</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="col-5">
                            <input
                              type="text"
                              placeholder=""
                              class="form-control"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row mt-3">
                      <div class="col-12">
                        <div class="row">
                          <div class="col-md-6 col-12">
                            <div class="row">
                              <div class="col-md-9 col-12">
                                <input
                                  type="date"
                                  placeholder=""
                                  class="form-control"
                                />
                              </div>
                              <label class="col-md-3 col-12 col-form-label info-lable">
                                পর্যন্ত
                                <i>*</i>
                              </label>
                            </div>
                          </div>
                          <div class="col-md-6 col-12">
                            <div class="row">
                              <div class="col-md-7 col-8">
                                <input
                                  type="date"
                                  placeholder=""
                                  class="form-control"
                                />
                              </div>
                              <div class="col-md-5 col-4">
                                <button class="custom-btn btn-primary">
                                  Show
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!--Right Site top Table--> */}
                    <div class="row">
                      <div class="col-12">
                        <div class="mt-4">
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
                                  <th>অর্ডার</th>
                                  <th>তারিখ</th>
                                  <th>ধরণ</th>
                                  <th>ভাউচার</th>
                                  <th>বই</th>
                                  <th>পরিমাণ</th>
                                </tr>
                              </thead>
                              <tbody>
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
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!--Right Site Top Table End--> */}
                    {/* <!--Right Site Bottom Table Start--> */}
                    <div class="row mt-4">
                      <div class="col-6">
                        <div
                          class="table-responsive accounts-table"
                          data-pattern="priority-columns"
                        >
                          <table
                            id="tech-companies-1"
                            class="table  bg-white text-center mb-0"
                          >
                            <thead class="text-center ">
                              <tr class="accounts-table-head">
                                <td colspan="2">আজকের তহবিল</td>
                              </tr>
                              <tr>
                                <th>অর্ডার</th>
                                <th>তারিখ</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div class="col-6">
                        <div
                          class="table-responsive accounts-table"
                          data-pattern="priority-columns"
                        >
                          <table
                            id="tech-companies-1"
                            class="table  bg-white text-center mb-0"
                          >
                            <thead class="text-center ">
                              <tr class="accounts-table-head">
                                <td colspan="2">আজকের তহবিল</td>
                              </tr>
                              <tr>
                                <th>অর্ডার</th>
                                <th>তারিখ</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Right Site Bottom Table End --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- হিসাব নিকাশ সেকশন শেষ --> */}
    </div>
  );
};

export default HishabNikash;
