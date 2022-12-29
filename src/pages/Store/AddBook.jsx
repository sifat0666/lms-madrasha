import React from "react";

const AddBook = () => {
  return (
    <div>
      <section class="user-form-section d-print-none">
        <div class="section-bg">
          <div class="row">
            <div class="col-md-12 w-100">
              <div class="main-container">
                <div class="row">
                  <div class="col-12">
                    <div class="section-title">
                      <h4>বই যোগ করুন</h4>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="row">
                      <div class="col-lg-5 col-md-4 col-12">
                        <div class="row mb-3">
                          <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            বইয়ের নাম
                            <i>*</i>
                          </label>
                          <div class="col-lg-8 col-md-8 col-12">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="বইয়ের নাম"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-2 col-md-4 col-12"></div>
                      <div class="col-lg-5 col-md-4 col-12">
                        <div class="row mb-3">
                          <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            সিরিয়াল নাম্বার
                            <i>*</i>
                          </label>
                          <div class="col-lg-8 col-md-8 col-12">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="সিরিয়াল নাম্বার"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="row">
                      <div class="col-lg-5 col-md-4 col-12">
                        <div class="row mb-3">
                          <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            ক্যাটাগরি
                            <i>*</i>
                          </label>
                          <div class="col-lg-8 col-md-8 col-12">
                            <select name="" id="" class="form-select">
                              <option value="">সিলেক্ট করুন</option>
                              <option value="">পাঠ্য বই</option>
                              <option value="">সাহিত্য</option>
                              <option value="">হাদিস</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-2 col-md-4 col-12"></div>
                      <div class="col-lg-5 col-md-4 col-12">
                        <div class="row mb-3">
                          <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            শ্রেনী/মারহালা
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
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="row">
                      <div class="col-lg-5 col-md-4 col-12">
                        <div class="row mb-3">
                          <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            বিক্রির মূল্য
                            <i>*</i>
                          </label>
                          <div class="col-lg-8 col-md-8 col-12">
                            <input
                              type="number"
                              class="form-control"
                              value="0.00"
                              placeholder="বিক্রির মূল্য"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-2 col-md-4 col-12"></div>
                      <div class="col-lg-5 col-md-4 col-12">
                        <div class="row mb-3">
                          <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            ইউনিট
                            <i>*</i>
                          </label>
                          <div class="col-lg-8 col-md-8 col-12">
                            <select name="" id="" class="form-select">
                              <option value="">সিলেক্ট করুন</option>
                              <option value="">পিচ</option>
                              <option value="">সেট</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="row">
                      <div class="col-lg-5 col-md-4 col-12">
                        <div class="row mb-3">
                          <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            কেনা মূল্য
                            <i>*</i>
                          </label>
                          <div class="col-lg-8 col-md-8 col-12">
                            <input
                              type="number"
                              class="form-control"
                              value="0.00"
                              placeholder="বিক্রির মূল্য"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-2 col-md-4 col-12"></div>
                      <div class="col-lg-5 col-md-4 col-12">
                        <div class="row mb-3">
                          <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            বইয়ের ডিটেইলস
                            <i>*</i>
                          </label>
                          <div class="col-lg-8 col-md-8 col-12">
                            <textarea class="form-control"></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="row">
                      <div class="col-lg-5 col-md-4 col-12">
                        <div class="row mb-3">
                          <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            ছবি
                            <i>*</i>
                          </label>
                          <div class="col-lg-8 col-md-8 col-12">
                            <input type="file" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-2 col-md-4 col-12"></div>
                      <div class="col-lg-5 col-md-4 col-12">
                        <div class="row mb-3">
                          <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            সাপ্লাইয়ার
                            <i>*</i>
                          </label>
                          <div class="col-lg-8 col-md-8 col-12">
                            <select name="" id="" class="form-select">
                              <option value="">সিলেক্ট করুন</option>
                              <option value="">লেকচার পাবলিকেশন</option>
                              <option value="">সাইমুম প্রকাশনী</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 d-flex justify-content-center w-100 payroll">
                    <div class="button-group w-100">
                      <button class="custom-btn btn-primary">Save</button>
                      <button class="custom-btn btn-dark">New</button>
                    </div>
                  </div>
                </div>
                <div class="row my-3">
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
                            <th>ক্রঃ</th>
                            <th>বইয়ের নাম</th>
                            <th>সাপ্লাইয়ার</th>
                            <th>মূল্য</th>
                            <th>কেনা মূল্য</th>
                            <th>ছবি</th>
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
                            <td></td>
                            <td></td>
                            <td>
                              <img
                                src="../../assets/images/book image.jpg"
                                alt=""
                              />
                            </td>
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
        </div>
      </section>
      {/* <!-- Employe Add Section End -->
            <!--রির্পোট প্রিন্ট সেকশন-->
            <!--Preview Page Section--> */}
      <div class="preview-page d-print-block d-none">
        <span class="print-button d-print-none" onclick="window.print()">
          <i class="bi bi-printer-fill"></i>
        </span>
        <div class="pages-title">
          <h5>জামিয়া আরাবিয়া ইমদাদুল ফরিদাবাদ</h5>
          <p>১১/১২ মাদরাসা রোড, গেন্ডারিয়া, ঢাকা-১২০৪</p>
          <span>01832-061454 # 027440235</span>
          <br />
          <span class="pages-subtitle">জমা-খরচ লেজার ভিত্তিক</span>
          <br />
        </div>
        <div class="pages-content">
          <div class="row my-3 justify-content-center align-items-center">
            <div class="col-5">
              <p class="my-2">২৯/০৯/২০২২ ইং থেকে ২৯/১০/২০২২ ইং</p>
            </div>
            <div class="col-3">
              <span class="title-ladger">গোরাবা ফান্ড</span>
            </div>
            <div class="col-4 d-flex justify-content-end">
              <p class="my-2">
                <span>রিপোর্ট প্রিন্ট তারিখঃ</span>
                ০৩/১২/২০২২
              </p>
            </div>
          </div>
          <div class="table-responsive" data-pattern="priority-columns">
            <table class="table  bg-white table-bordered text-center report-table">
              <thead class="text-center">
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
      {/* <!--Modal Section-->
            <!-- Monthly Fees Collection Defualt Modal Start--> */}
      <div class="modal fade" id="monthly-fee" aria-hidden="true" tabindex="-1">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="section-title">
              <h4>মাসিক ফি কালেকশান</h4>
            </div>
            <form>
              <div class="modal-body">
                <div class="row">
                  <div class="col-7">
                    <div class="section-title">
                      <h4>মাসিক ফি গ্রহণ</h4>
                    </div>
                    <div class="my-4">
                      <form class="accounts-form">
                        <div class="row">
                          <div class="col-4">
                            <div class="row mb-3">
                              <label class="col-sm-6 col-form-label info-lable">
                                অর্ডার নং
                                <i>*</i>
                              </label>
                              <div class="col-6">
                                <input type="text" class="form-control" />
                              </div>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="row mb-3">
                              <label class="col-sm-2 col-form-label info-lable">
                                নামঃ
                              </label>
                              <div class="col-10">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="নাম"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="row mb-3">
                              <label class="col-sm-2 col-form-label info-lable">
                                তারিখ
                              </label>
                              <div class="col-10">
                                <input type="date" class="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4">
                            <div class="row mb-3">
                              <label class="col-sm-6 col-form-label info-lable">
                                আইডি
                              </label>
                              <div class="col-6">
                                <input type="text" class="form-control" />
                              </div>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="row mb-3">
                              <label class="col-sm-2 col-form-label info-lable">
                                পিতা
                              </label>
                              <div class="col-10">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="নাম"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="row mb-3">
                              <label class="col-sm-2 col-form-label info-lable">
                                শ্রেণী
                              </label>
                              <div class="col-10">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="জামাত"
                                  readonly
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4 offset-4">
                            <div class="row mb-3">
                              <label class="col-sm-4 col-form-label info-lable">
                                মোবাইল
                              </label>
                              <div class="col-8">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="মোবাইল"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="row mb-3">
                              <label class="col-sm-6 col-form-label info-lable">
                                শিক্ষার্থী অবস্থা
                              </label>
                              <div class="col-6">
                                <input
                                  type="text"
                                  class="form-control"
                                  value="সক্রিয়"
                                  readonly
                                />
                              </div>
                            </div>
                          </div>
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
                                  <th>মাস</th>
                                  <th>ফি নাম</th>
                                  <th>কর্তন</th>
                                  <th>পূর্ব জমা</th>
                                  <th>বর্তমান জমা</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
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
                                  <td>জুলাই</td>
                                  <td>ভর্তি ফি</td>
                                  <td>২০০.০০</td>
                                  <td>০.০০</td>
                                  <td>১৫০০.০০</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="my-2">
                      <div class="row">
                        <div class="col-12">
                          <div class="filter-container py-2">
                            <div class="row">
                              <div class="col-3">
                                <div class="row">
                                  <label class="col-sm-3 col-form-label info-lable">
                                    <i class="bi bi-search text-white"></i>
                                  </label>
                                  <div class="col-9">
                                    <input type="date" class="form-control" />
                                  </div>
                                </div>
                              </div>
                              <div class="col-5">
                                <div class="row">
                                  <div class="col-8 d-flex align-items-center justify-content-between">
                                    <div class="form-check">
                                      <input
                                        class="form-check-input"
                                        type="radio"
                                        name="options"
                                      />
                                      <label
                                        class="form-check-label"
                                        for="options"
                                      >
                                        আইডি
                                      </label>
                                    </div>
                                    <div class="form-check">
                                      <input
                                        class="form-check-input"
                                        type="radio"
                                        name="options"
                                      />
                                      <label
                                        class="form-check-label"
                                        for="options"
                                      >
                                        অর্ডার
                                      </label>
                                    </div>
                                  </div>
                                  <div class="col-4">
                                    <input type="text" class="form-control" />
                                  </div>
                                </div>
                              </div>
                              <div class="col-4">
                                <div class="row">
                                  <label class="col-sm-9 col-form-label info-lable">
                                    আজকের গ্রহন: ২৭০০
                                  </label>
                                  <div class="col-3 d-flex align-items-center">
                                    <i
                                      class="bi bi-gear-fill"
                                      style={{ cursor: "pointer" }}
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="my-2">
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
                                  <th>অর্ডার নং</th>
                                  <th>শিক্ষার্থীর আইডি</th>
                                  <th>নাম</th>
                                  <th>পিতার নাম</th>
                                  <th>ফির পরিমান</th>
                                  <th>গ্রহিতা</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
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
                                  <td>৪৩৪৩</td>
                                  <td>৬৫৬</td>
                                  <td>আশিকুর রহমান</td>
                                  <td>আবু বক্কর</td>
                                  <td>১৫০০.০০</td>
                                  <td>এডমিন</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="section-title">
                      <h4>খাবারের ফি গ্রহণ</h4>
                    </div>
                    {/* <!--Right Site top Table--> */}
                    <div class="row">
                      <div class="col-7">
                        <div class="row mt-3">
                          <div class="col-12">
                            <div class="row">
                              <div class="col-6">
                                <div class="student-image">
                                  <span class="student-image-title">
                                    শিক্ষার্থীর ছবি
                                  </span>
                                  <img
                                    src="../../assets/images/takrim.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div class="col-6 meal-fee-btn">
                                <div class="button-group">
                                  <button class="custom-btn btn-primary">
                                    Save
                                  </button>
                                  <button class="custom-btn btn-danger">
                                    Print
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="mt-3">
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
                                  <th>মাস</th>
                                  <th>ফি</th>
                                  <th>গ্রহন</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div class="col-5">
                        <div class="row">
                          <label
                            class="col-12 col-form-label info-lable"
                            style={{ textAlign: "left" }}
                          >
                            মন্তব্য
                          </label>
                          <div class="col-12">
                            <textarea
                              class="form-control"
                              placeholder="মন্তব্য লিখুন"
                              rows="3"
                            ></textarea>
                          </div>
                          <div class="col-12 meal-fee">
                            <div class="button-group">
                              <a class="custom-btn btn-primary" href="#">
                                Edit
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12 others-menu">
                            <div class="section-title">
                              <h4>গুরুত্বপূর্ণ লিংক</h4>
                            </div>
                          </div>
                          <div class="col-12 others-navigation">
                            <ul class="navbar-nav">
                              <li class="others-nav-item">
                                <i class="bi bi-gear-fill"></i>
                                <a href="" class="others-nav-link">
                                  {" "}
                                  অর্ডার নং সেটিংস
                                </a>
                              </li>
                              <li class="others-nav-item">
                                <i class="bi bi-calendar-month"></i>
                                <a
                                  href="#"
                                  class="others-nav-link"
                                  data-bs-toggle="modal"
                                  data-bs-target="#monthname"
                                >
                                  {" "}
                                  মাসের নাম
                                </a>
                              </li>
                              <li class="others-nav-title my-1">
                                <i class="bi bi-arrow-down-square"></i>
                                <a href="#" class="others-nav-link px-1">
                                  মাসিক ফি
                                </a>
                              </li>
                              <li class="others-nav-item">
                                <i class="bi bi-cash-coin"></i>
                                <a href="#" class="others-nav-link">
                                  {" "}
                                  ফি নির্ধারণ
                                </a>
                              </li>
                              <li class="others-nav-item">
                                <i class="bi bi-card-checklist"></i>
                                <a href="#" class="others-nav-link">
                                  {" "}
                                  তালিকা তৈরি
                                </a>
                                <li class="others-nav-item">
                                  <i class="bi bi-arrow-down-up"></i>
                                  <a href="#" class="others-nav-link">
                                    {" "}
                                    বাড়ানো কমানো
                                  </a>
                                </li>
                              </li>
                              <li class="others-nav-title my-1">
                                <i class="bi bi-arrow-down-square"></i>
                                <a href="#" class="others-nav-link px-1">
                                  মাসিক ফি
                                </a>
                              </li>
                              <li class="others-nav-item">
                                <i class="bi bi-cash-coin"></i>
                                <a href="#" class="others-nav-link">
                                  {" "}
                                  ফি নির্ধারণ
                                </a>
                              </li>
                              <li class="others-nav-item">
                                <i class="bi bi-card-checklist"></i>
                                <a href="#" class="others-nav-link">
                                  {" "}
                                  তালিকা তৈরি
                                </a>
                                <li class="others-nav-item">
                                  <i class="bi bi-arrow-down-up"></i>
                                  <a href="#" class="others-nav-link">
                                    {" "}
                                    বাড়ানো কমানো
                                  </a>
                                </li>
                              </li>
                            </ul>
                            <div class="button-group">
                              <button class="custom-btn btn-info">Show</button>
                              <button class="custom-btn btn-primary">
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!--Right Site Top Table End--> */}
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="section-title">
                      <h4>মাসিক ফি গ্রহণ</h4>
                    </div>
                  </div>
                  <div class="my-2">
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
                                <th>শিক্ষাবর্ষ</th>
                                <th>জানুয়ারী</th>
                                <th>ফেব্রুয়ারী</th>
                                <th>মার্চ</th>
                                <th>এপ্রিল</th>
                                <th>মে</th>
                                <th>জুন</th>
                                <th>জুলাই</th>
                                <th>আগস্ট</th>
                                <th>সেপটেম্বর</th>
                                <th>অক্টোবর</th>
                                <th>নভেম্বর</th>
                                <th>ডিসেম্বর</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>২০২২</td>
                                <td>৫০০.০০</td>
                                <td>৬০০.০০</td>
                                <td>০০.০০</td>
                                <td>০০.০০</td>
                                <td>০০.০০</td>
                                <td>০০.০০</td>
                                <td>০০.০০</td>
                                <td>০০.০০</td>
                                <td>০০.০০</td>
                                <td>০০.০০</td>
                                <td>০০.০০</td>
                                <td>০০.০০</td>
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
                  <button class="custom-btn btn-primary" type="submit">
                    Save
                  </button>
                  <button
                    class="custom-btn btn-dark"
                    data-bs-dismiss="modal"
                    onclick="javascript:void(0)"
                    type="button"
                  >
                    Close
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!--Monthly Fees Collection Defualt  Modal End-->
            <!--Month Name Add Modal Start--> */}
      <div class="modal fade" id="monthname" aria-hidden="true" tabindex="-1">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="section-title">
              <h4>মাসের নাম এন্ট্রি</h4>
            </div>
            <form>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-12 w-100">
                    <div class="row">
                      <div class="col-12">
                        <div class="row mb-3">
                          <div class="col-5">
                            <div class="row">
                              <label class="col-sm-5 col-form-label info-lable">
                                শিক্ষাবর্ষ
                              </label>
                              <div class="col-7">
                                <select class="form-select">
                                  <option value="" selected>
                                    সিলেক্ট করুন
                                  </option>
                                  <option>২০২২</option>
                                  <option>২০২৩</option>
                                  <option>২০২৪</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="col-7">
                            <div class="row">
                              <label class="col-sm-5 col-form-label info-lable">
                                জামাত/শ্রেনী
                              </label>
                              <div class="col-7">
                                <select class="form-select">
                                  <option selected="">
                                    শ্রেণী নির্বাচন করুন
                                  </option>
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
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="row mb-3">
                          <div class="col-12">
                            <div class="section-title special-bg">
                              <h4>মাসের নাম</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="row mb-3">
                          <div class="col-4">
                            <div class="row">
                              <label class="col-sm-5 col-form-label info-lable">
                                ১ম মাস
                              </label>
                              <div class="col-7">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="মাসের নাম"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="row">
                              <label class="col-sm-5 col-form-label info-lable">
                                ২য় মাস
                              </label>
                              <div class="col-7">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="মাসের নাম"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="row">
                              <label class="col-sm-5 col-form-label info-lable">
                                ৩য় মাস
                              </label>
                              <div class="col-7">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="মাসের নাম"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="row mb-3">
                          <div class="col-4">
                            <div class="row">
                              <label class="col-sm-5 col-form-label info-lable">
                                ৪র্থ মাস
                              </label>
                              <div class="col-7">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="মাসের নাম"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="row">
                              <label class="col-sm-5 col-form-label info-lable">
                                ৫ম মাস
                              </label>
                              <div class="col-7">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="মাসের নাম"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="row">
                              <label class="col-sm-5 col-form-label info-lable">
                                ৬ষ্ঠ মাস
                              </label>
                              <div class="col-7">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="মাসের নাম"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="row mb-3">
                          <div class="col-4">
                            <div class="row">
                              <label class="col-sm-5 col-form-label info-lable">
                                ৭ম মাস
                              </label>
                              <div class="col-7">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="মাসের নাম"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="row">
                              <label class="col-sm-5 col-form-label info-lable">
                                ৮ম মাস
                              </label>
                              <div class="col-7">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="মাসের নাম"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="row">
                              <label class="col-sm-5 col-form-label info-lable">
                                ৯ম মাস
                              </label>
                              <div class="col-7">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="মাসের নাম"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="row mb-3">
                          <div class="col-4">
                            <div class="row">
                              <label class="col-sm-5 col-form-label info-lable">
                                ১০ম মাস
                              </label>
                              <div class="col-7">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="মাসের নাম"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="row">
                              <label class="col-sm-5 col-form-label info-lable">
                                ১১তম মাস
                              </label>
                              <div class="col-7">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="মাসের নাম"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="row">
                              <label class="col-sm-5 col-form-label info-lable">
                                ১২তম মাস
                              </label>
                              <div class="col-7">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="মাসের নাম"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 addbank">
                        <div class="button-group">
                          <a href="#" class="custom-btn btn-primary">
                            Save
                          </a>
                          <button class="custom-btn btn-dark" type="submit">
                            Edit
                          </button>
                          <button class="custom-btn btn-primary" type="submit">
                            New
                          </button>
                          <button
                            class="custom-btn btn-danger"
                            data-bs-dismiss="modal"
                            onclick="javascript:void(0)"
                            type="button"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                      {/* <!--Table Area Start--> */}
                      <div class="col-md-12">
                        <div class="table-data mt-4">
                          <div
                            class="table-responsive"
                            data-pattern="priority-columns"
                          >
                            <table
                              id="tech-companies-1"
                              class="table  bg-white table-bordered text-center"
                            >
                              <thead
                                class="text-center"
                                style={{
                                  backgroundColor: "#62659B",
                                  color: "white",
                                }}
                              >
                                <tr>
                                  <th>
                                    <span class="action-edit">
                                      <i class="bi bi-pencil-square"></i>
                                    </span>
                                  </th>
                                  <th>শিক্ষাবর্ষ</th>
                                  <th>জামাত</th>
                                  <th>১ম মাস</th>
                                  <th>২য় মাস</th>
                                  <th>৩য় মাস</th>
                                  <th>৪র্থ মাস</th>
                                  <th>৫ম মাস</th>
                                  <th>৬ষ্ঠ মাস</th>
                                  <th>৭ম মাস</th>
                                  <th>৮ম মাস</th>
                                  <th>৯ম মাস</th>
                                  <th>১০ম মাস</th>
                                  <th>১১তম মাস</th>
                                  <th>১২তম মাস</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <span class="action-edit">
                                      <i class="bi bi-pencil-square"></i>
                                    </span>
                                  </td>
                                  <td>২০২২</td>
                                  <td>তাকমীল</td>
                                  <td>জানুয়ারী</td>
                                  <td>ফেব্রুয়ারী</td>
                                  <td>মার্চ</td>
                                  <td>এপ্রিল</td>
                                  <td>মে</td>
                                  <td>জুন</td>
                                  <td>জুলাই</td>
                                  <td>আগস্ট</td>
                                  <td>সেপটেম্বর</td>
                                  <td>অক্টোবর</td>
                                  <td>নভেম্বর</td>
                                  <td>ডিসেম্বর</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      {/* <!--Table Area End--> */}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!--Month Add Modal End-->
            <!--ছুটি বা দিন Add Modal Start--> */}
      <div class="modal fade" id="holiday" aria-hidden="true" tabindex="-1">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="section-title">
              <h4>ছুটি বা দিন এন্ট্রি</h4>
            </div>
            <form>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-12 w-100">
                    <div class="row">
                      <div class="col-12">
                        <div class="row mb-3">
                          <div class="col-5">
                            <div class="row">
                              <label class="col-sm-5 col-form-label info-lable">
                                শিক্ষাবর্ষ
                              </label>
                              <div class="col-7">
                                <select class="form-select">
                                  <option value="" selected>
                                    সিলেক্ট করুন
                                  </option>
                                  <option>২০২২</option>
                                  <option>২০২৩</option>
                                  <option>২০২৪</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="col-7">
                            <div class="row">
                              <label class="col-sm-5 col-form-label info-lable">
                                জামাত/শ্রেনী
                              </label>
                              <div class="col-7">
                                <select class="form-select">
                                  <option selected="">
                                    শ্রেণী নির্বাচন করুন
                                  </option>
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
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="row mb-3">
                          <div class="col-8">
                            <div class="row">
                              <label class="col-sm-5 col-form-label info-lable">
                                ছাত্রের আইডি দিয়ে এন্টার
                              </label>
                              <div class="col-7">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="মাসের নাম"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-4">
                            <button class="custom-btn btn-primary">
                              খুজুন
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="row mb-3">
                          <div class="col-6">
                            <div class="row">
                              <label class="col-sm-5 col-form-label info-lable">
                                মাসের নাম
                              </label>
                              <div class="col-7">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="মাসের নাম"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="row">
                              <label class="col-sm-5 col-form-label info-lable">
                                মাসের মোট দিন
                              </label>
                              <div class="col-7">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="মাসের মোট দিন"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="row mb-3">
                          <div class="col-6">
                            <div class="row">
                              <label class="col-sm-5 col-form-label info-lable">
                                মাসে মোট বন্ধ
                              </label>
                              <div class="col-7">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="মাসে মোট বন্ধ"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 addbank">
                        <div class="button-group">
                          <a href="#" class="custom-btn btn-primary">
                            Save
                          </a>
                          <button class="custom-btn btn-dark" type="submit">
                            Edit
                          </button>
                          <button class="custom-btn btn-primary" type="submit">
                            New
                          </button>
                          <button
                            class="custom-btn btn-danger"
                            data-bs-dismiss="modal"
                            onclick="javascript:void(0)"
                            type="button"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                      {/* <!--Table Area Start--> */}
                      <div class="col-md-12">
                        <div class="table-data mt-4">
                          <div
                            class="table-responsive"
                            data-pattern="priority-columns"
                          >
                            <table
                              id="tech-companies-1"
                              class="table  bg-white table-bordered text-center"
                            >
                              <thead
                                class="text-center"
                                style={{
                                  backgroundColor: "#62659B",
                                  color: "white",
                                }}
                              >
                                <tr>
                                  <th>
                                    <span class="action-edit">
                                      <i class="bi bi-pencil-square"></i>
                                    </span>
                                  </th>
                                  <th>শিক্ষাবর্ষ</th>
                                  <th>জামাত</th>
                                  <th>১ম মাস</th>
                                  <th>২য় মাস</th>
                                  <th>৩য় মাস</th>
                                  <th>৪র্থ মাস</th>
                                  <th>৫ম মাস</th>
                                  <th>৬ষ্ঠ মাস</th>
                                  <th>৭ম মাস</th>
                                  <th>৮ম মাস</th>
                                  <th>৯ম মাস</th>
                                  <th>১০ম মাস</th>
                                  <th>১১তম মাস</th>
                                  <th>১২তম মাস</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <span class="action-edit">
                                      <i class="bi bi-pencil-square"></i>
                                    </span>
                                  </td>
                                  <td>২০২২</td>
                                  <td>তাকমীল</td>
                                  <td>জানুয়ারী</td>
                                  <td>ফেব্রুয়ারী</td>
                                  <td>মার্চ</td>
                                  <td>এপ্রিল</td>
                                  <td>মে</td>
                                  <td>জুন</td>
                                  <td>জুলাই</td>
                                  <td>আগস্ট</td>
                                  <td>সেপটেম্বর</td>
                                  <td>অক্টোবর</td>
                                  <td>নভেম্বর</td>
                                  <td>ডিসেম্বর</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      {/* <!--Table Area End--> */}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!--ছুটি বা দিন Add Modal End-->
            <!--খাবারের খরচ বাড়ানো কমানো Modal Start--> */}
      <div
        class="modal fade"
        id="mealfeeincrase"
        aria-hidden="true"
        tabindex="-1"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="section-title">
              <h4>ছাত্রের খাবারের খরচ বাড়ানো কমানো</h4>
            </div>
            <form>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-12 w-100">
                    <div class="row">
                      <div class="col-12">
                        <div class="row mb-3">
                          <div class="col-12">
                            <div class="row mb-3">
                              <div class="col-8">
                                <div class="row">
                                  <label class="col-sm-5 col-form-label info-lable">
                                    ছাত্রের আইডি দিয়ে এন্টার
                                  </label>
                                  <div class="col-7">
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="ছাত্রের আইডি দিন"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="col-4">
                                <button class="custom-btn btn-primary">
                                  খুজুন
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="row my-3">
                          <label class="col-sm-3 col-form-label info-lable">
                            খাবারের ধরন
                          </label>
                          <div class="col-6">
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
                          <div class="col-3">
                            <span class="addbutton">
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#foodentry"
                              >
                                <i class="bi bi-plus-circle-fill"></i>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="row mb-3">
                          <div class="col-12">
                            <div class="row">
                              <label class="col-sm-3 col-form-label info-lable">
                                নির্ধারিত খাবারের ফি
                              </label>
                              <div class="col-6">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="নির্ধারিত খাবারের ফি"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 addbank">
                        <div class="button-group">
                          <a href="#" class="custom-btn btn-primary">
                            Save
                          </a>
                          <button class="custom-btn btn-dark" type="submit">
                            Update
                          </button>
                          <button class="custom-btn btn-primary" type="submit">
                            New
                          </button>
                          <button
                            class="custom-btn btn-danger"
                            data-bs-dismiss="modal"
                            onclick="javascript:void(0)"
                            type="button"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                      {/* <!--Table Area Start--> */}
                      <div class="col-md-12">
                        <div class="table-data mt-4">
                          <div
                            class="table-responsive"
                            data-pattern="priority-columns"
                          >
                            <table
                              id="tech-companies-1"
                              class="table  bg-white table-bordered text-center"
                            >
                              <thead
                                class="text-center"
                                style={{
                                  backgroundColor: "#62659B",
                                  color: "white",
                                }}
                              >
                                <tr>
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
                                  <th>মাসের নাম</th>
                                  <th>নির্ধারিত ফি</th>
                                  <th>সিলেক্ট</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
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
                                  <td>জানুয়ারী</td>
                                  <td>২৩০০</td>
                                  <td>
                                    <input
                                      class="form-check-input mt-0"
                                      type="checkbox"
                                    />
                                  </td>
                                </tr>
                                <tr>
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
                                  <td>ফেব্রুয়ারী</td>
                                  <td>২৩০০</td>
                                  <td>
                                    <input
                                      class="form-check-input mt-0"
                                      type="checkbox"
                                    />
                                  </td>
                                </tr>
                                <tr>
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
                                  <td>মার্চ</td>
                                  <td>২৭০০</td>
                                  <td>
                                    <input
                                      class="form-check-input mt-0"
                                      type="checkbox"
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      {/* <!--Table Area End--> */}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!--খাবারের খরচ বাড়ানো কমানো Modal End-->
            <!--খাবার এন্ট্রি  Modal Start--> */}
      <div class="modal fade" id="foodentry" aria-hidden="true" tabindex="-1">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="section-title">
              <h4>খাবার এন্ট্রি</h4>
            </div>
            <form>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-12 w-100">
                    <div class="row">
                      <div class="col-12">
                        <div class="row mb-3">
                          <div class="col-6">
                            <div class="row">
                              <label class="col-sm-3 col-form-label info-lable">
                                শিক্ষাবর্ষ
                              </label>
                              <div class="col-9">
                                <select class="form-select">
                                  <option selected="">নির্বাচন করুন</option>
                                  <option>২০২২</option>
                                  <option>২০২৩</option>
                                  <option>২০২৪</option>
                                  <option>২০২৫</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="row">
                              <label class="col-sm-3 col-form-label info-lable">
                                আইডি
                              </label>
                              <div class="col-9">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="আইডি"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="row mb-3">
                          <div class="col-6">
                            <div class="row">
                              <label class="col-sm-3 col-form-label info-lable">
                                খাবারের নাম
                              </label>
                              <div class="col-9">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="আইডি"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="row">
                              <label class="col-sm-3 col-form-label info-lable">
                                খাবারের ফি
                              </label>
                              <div class="col-9">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="নির্ধারিত খাবারের ফি"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 addbank">
                        <div class="button-group">
                          <a href="#" class="custom-btn btn-primary">
                            Save
                          </a>
                          <button class="custom-btn btn-dark" type="submit">
                            Update
                          </button>
                          <button class="custom-btn btn-primary" type="submit">
                            New
                          </button>
                          <button
                            class="custom-btn btn-danger"
                            data-bs-dismiss="modal"
                            onclick="javascript:void(0)"
                            type="button"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                      {/* <!--Table Area Start--> */}
                      <div class="col-md-12">
                        <div class="table-data mt-4">
                          <div
                            class="table-responsive"
                            data-pattern="priority-columns"
                          >
                            <table
                              id="tech-companies-1"
                              class="table  bg-white table-bordered text-center"
                            >
                              <thead
                                class="text-center"
                                style={{
                                  backgroundColor: "#62659B",
                                  color: "white",
                                }}
                              >
                                <tr>
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
                                  <th>আইডি</th>
                                  <th>খাবারের নাম</th>
                                  <th>খাবার ফি</th>
                                  <th>শিক্ষাবর্ষ</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
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
                      {/* <!--Table Area End--> */}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!--খাবার এন্ট্রি Modal End-->
            <!-- Add Desegnation  Modal Start--> */}
      <div
        class="modal fade"
        id="adddesignation"
        aria-hidden="true"
        tabindex="-1"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="section-title">
              <h4>পদবীর নাম যোগ করুন</h4>
            </div>
            <form>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-12 w-100">
                    <div class="row">
                      <div class="col-12">
                        <div class="my-4">
                          <div class="row mb-3">
                            <label class="col-sm-3 col-form-label info-lable">
                              পদবীর নামঃ
                            </label>
                            <div class="col-8">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="পদবীর নাম"
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label class="col-sm-3 col-form-label info-lable">
                              মন্তব্যঃ
                            </label>
                            <div class="col-8">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="মন্তব্য"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 addbank">
                        <div class="button-group">
                          <a href="#" class="custom-btn btn-primary">
                            Save
                          </a>
                          <button class="custom-btn btn-dark" type="submit">
                            Update
                          </button>
                          <button class="custom-btn btn-primary" type="submit">
                            New
                          </button>
                          <button
                            class="custom-btn btn-danger"
                            data-bs-dismiss="modal"
                            onclick="javascript:void(0)"
                            type="button"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="table-data mt-4">
                          <div
                            class="table-responsive"
                            data-pattern="priority-columns"
                          >
                            <table
                              id="tech-companies-1"
                              class="table  bg-white table-bordered text-center"
                            >
                              <thead
                                class="text-center"
                                style={{
                                  backgroundColor: "#62659B",
                                  color: "white",
                                }}
                              >
                                <tr>
                                  <th></th>
                                  <th>ক্রমিক নং</th>
                                  <th>পদবীর নাম</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th></th>
                                  <td>০১</td>
                                  <td>মুহতামিম</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০২</td>
                                  <td>নায়েবে মুহতামিম শায়খুল হাদীস</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০৩</td>
                                  <td>প্রধান মুফতী কাম- শায়খে ছানী</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০৪</td>
                                  <td>শিক্ষাসচিব কাম- সিনিয়র মুহাদ্দিস</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০৪</td>
                                  <td>সিনিয়র মুহাদ্দিস</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০৪</td>
                                  <td>মুহাদ্দিস</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০৪</td>
                                  <td>সিনিয়র ইস্তাদ</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০৪</td>
                                  <td>উস্তাদে মুহতারাম</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০৪</td>
                                  <td>উস্তাদ হিফজ বিভাগ</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০৪</td>
                                  <td>উস্তাদ নাজেরা বিভাগ</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০৪</td>
                                  <td>উস্তাদ নূরানী বিভাগ</td>
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
              <div class="modal-footer">
                <div class="button-group">
                  <button class="custom-btn btn-primary" type="submit">
                    Save
                  </button>
                  <button
                    class="custom-btn btn-dark"
                    data-bs-dismiss="modal"
                    onclick="javascript:void(0)"
                    type="button"
                  >
                    Close
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!--Add Desegnation  Modal End-->
            <!-- Salary Sheet  Modal Start--> */}
      <div class="modal fade" id="salarysheet" aria-hidden="true" tabindex="-1">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="section-title">
              <h4>বেতন শীট</h4>
            </div>
            <form>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-12 w-100">
                    <div class="row">
                      <div class="col-12">
                        <div class="row">
                          <div class="col-3">
                            <div class="row">
                              <label class="col-sm-5 col-form-label info-lable">
                                এন্ট্রি তারিথ
                              </label>
                              <div class="col-7">
                                <input type="date" class="form-control" />
                              </div>
                            </div>
                          </div>
                          <div class="col-3">
                            <div class="row">
                              <label class="col-sm-5 col-form-label info-lable">
                                শিক্ষাবর্ষ
                              </label>
                              <div class="col-7">
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
                          </div>
                          <div class="col-6">
                            <div class="row">
                              <label class="col-sm-2 col-form-label info-lable">
                                মাস
                              </label>
                              <div class="col-5">
                                <select class="form-select">
                                  <option value="" selected="">
                                    সিলেক্ট করুন
                                  </option>
                                  <option value="">জানুয়ারী</option>
                                  <option value="">ফেব্রুয়ারী</option>
                                  <option value="">মার্চ</option>
                                  <option value="">এপ্রিল</option>
                                </select>
                              </div>
                              <div class="col-5">
                                <button
                                  type="submit"
                                  class="custom-btn btn-primary d-block w-100"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-5 d-print-none">
                        <form>
                          <div class="row mt-3">
                            <div class="col-12">
                              <div
                                class="table-responsive"
                                data-pattern="priority-columns"
                              >
                                <table
                                  id="tech-companies-1"
                                  class="table  bg-white table-bordered text-center"
                                >
                                  <thead
                                    class="text-center"
                                    style={{
                                      backgroundColor: "#62659B",
                                      color: "white",
                                    }}
                                  >
                                    <tr>
                                      <th>
                                        <input
                                          type="checkbox"
                                          class=" form-check-input"
                                          name="checkbox"
                                          onclick="allSelect(this)"
                                        />
                                      </th>
                                      <th>ক্রমিক নং</th>
                                      <th>শিক্ষকের নাম</th>
                                      <th>নির্ধারিত বেতন</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <th>
                                        <input
                                          type="checkbox"
                                          class=" form-check-input"
                                          name="checkbox"
                                        />
                                      </th>
                                      <td>০১</td>
                                      <td>মুহতামিম</td>
                                      <td>৪০০০০.০০</td>
                                    </tr>
                                    <tr>
                                      <th>
                                        <input
                                          type="checkbox"
                                          class=" form-check-input"
                                          name="checkbox"
                                        />
                                      </th>
                                      <td>০২</td>
                                      <td>মুহতামিম</td>
                                      <td>৪০০০০.০০</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div class="row mt-3">
                            <div class="col-12">
                              <button
                                type="submit"
                                class="custom-btn btn-primary d-block w-100"
                              >
                                Generate Salary
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div class="col-md-7 col-sm-12 d-print-none">
                        <div class="row mt-3">
                          <div class="col-12">
                            <div
                              class="table-responsive"
                              data-pattern="priority-columns"
                            >
                              <table
                                id="tech-companies-1"
                                class="table  bg-white table-bordered text-center"
                              >
                                <thead
                                  class="text-center"
                                  style={{
                                    backgroundColor: "#62659B",
                                    color: "white",
                                  }}
                                >
                                  <tr>
                                    <th>
                                      <span class="action-edit">
                                        <i class="bi bi-pencil-square"></i>
                                      </span>
                                    </th>
                                    <th>শিক্ষকের নাম</th>
                                    <th>নির্ধারিত বেতন</th>
                                    <th>জৈষ্ঠতা</th>
                                    <th>বাড়ী ভাড়া</th>
                                    <th>ইনক্রিমেন্ট</th>
                                    <th>চিকিৎসা</th>
                                    <th>অতিরিক্ত</th>
                                    <th>কর্তন</th>
                                    <th>মোট বেতন</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th>
                                      <span class="action-edit">
                                        <i class="bi bi-pencil-square"></i>
                                      </span>
                                    </th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
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
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <div class="button-group">
                  <button class="custom-btn btn-primary" type="submit">
                    Save
                  </button>
                  <button
                    class="custom-btn btn-dark"
                    data-bs-dismiss="modal"
                    onclick="javascript:void(0)"
                    type="button"
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

export default AddBook;
