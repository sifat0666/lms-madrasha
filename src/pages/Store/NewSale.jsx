import React from "react";

const NewSale = () => {
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
                      <h4>New Sale</h4>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="row">
                      <div class="col-lg-5 col-md-4 col-12">
                        <div class="row mb-3">
                          <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            কাস্ট্মার/ছাত্রের নাম
                            <i>*</i>
                          </label>
                          <div class="col-lg-6 col-md-6 col-10">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="কাস্ট্মার/ছাত্রের নাম"
                            />
                          </div>
                          <div class="col-2">
                            <span class="addbutton">
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#customerentry"
                              >
                                <i class="bi bi-plus-circle-fill"></i>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-2 col-md-4 col-12"></div>
                      <div class="col-lg-5 col-md-4 col-12"></div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="row">
                      <div class="col-lg-5 col-md-4 col-12">
                        <div class="row mb-3">
                          <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            তারিখ
                            <i>*</i>
                          </label>
                          <div class="col-lg-6 col-md-8 col-12">
                            <input type="date" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-2 col-md-4 col-12"></div>
                      <div class="col-lg-5 col-md-4 col-12"></div>
                    </div>
                  </div>
                  <div class="col-12 my-2">
                    <div
                      class="table-responsive accounts-table"
                      data-pattern="priority-columns"
                    >
                      <table
                        id="tech-companies-1"
                        class="table table-bordered  bg-white text-center mb-0"
                      >
                        <thead class="text-center accounts-table-head">
                          <tr>
                            <th>Book Information</th>
                            <th>Av. Qnty.</th>
                            <th>Unit</th>
                            <th>Qnty</th>
                            <th>Rate</th>
                            <th>Discount %</th>
                            <th>Dis. Value</th>
                            <th>Total</th>
                            <th>
                              <span class="action-edit">
                                <i class="bi bi-pencil-square"></i>
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <input
                                type="text"
                                class="form-control"
                                name=""
                                id=""
                                placeholder="বইয়ের নাম লিখুন....."
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                class="form-control"
                                readonly
                                value="0"
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                class="form-control"
                                placeholder="0"
                              />
                            </td>
                            <td>
                              <input type="text" class="form-control" />
                            </td>
                            <td>
                              <input
                                type="text"
                                class="form-control"
                                name=""
                                id=""
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                class="form-control"
                                name=""
                                id=""
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                class="form-control"
                                name=""
                                id=""
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                class="form-control"
                                name=""
                                id=""
                              />
                            </td>
                            <td>
                              <span class="action-delete">
                                <i class="bi bi-trash3"></i>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th colspan="6">Sale Details</th>
                            <th>Sale Discount</th>
                            <td>
                              <input
                                type="text"
                                class="form-control"
                                placeholder="0.00"
                              />
                            </td>
                            <td>
                              <span class="action-edit">
                                <i class="bi bi-plus-square-fill"></i>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th colspan="6">
                              <textarea
                                class="form-control"
                                placeholder="Sale Details"
                              ></textarea>
                            </th>
                            <th>Total Discount</th>
                            <td>
                              <input
                                type="text"
                                class="form-control"
                                placeholder="0.00"
                              />
                            </td>
                            <td></td>
                          </tr>
                          <tr>
                            <th colspan="6"></th>
                            <th>Grand Total</th>
                            <td>
                              <input
                                type="text"
                                class="form-control"
                                placeholder="0.00"
                              />
                            </td>
                            <td></td>
                          </tr>
                          <tr>
                            <th colspan="6"></th>
                            <th>Net Total</th>
                            <td>
                              <input
                                type="text"
                                class="form-control"
                                placeholder="0.00"
                              />
                            </td>
                            <td></td>
                          </tr>
                          <tr>
                            <th colspan="6"></th>
                            <th>Paid Amount</th>
                            <td>
                              <input
                                type="text"
                                class="form-control"
                                placeholder="0.00"
                              />
                            </td>
                            <td></td>
                          </tr>
                          <tr>
                            <th colspan="6"></th>
                            <th>Due</th>
                            <td>
                              <input
                                type="text"
                                class="form-control"
                                placeholder="0.00"
                              />
                            </td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="col-12 my-2">
                    <div class="row">
                      <div class="col-6">
                        <div
                          class="table-responsive accounts-table"
                          data-pattern="priority-columns"
                        >
                          <table
                            id="tech-companies-1"
                            class="table table-bordered  bg-white text-center mb-0"
                          >
                            <thead class="accounts-table-head">
                              <th>Payment Type</th>
                              <th>Paid Amount</th>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <select name="" id="" class="form-select">
                                    <option value="">
                                      Select Payment Method
                                    </option>
                                    <option value="">Cash in Hand</option>
                                    <option value="">Bank</option>
                                    <option value="">bKash</option>
                                  </select>
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="0.00"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 d-flex justify-content-center w-100 payroll">
                    <div class="button-group w-100">
                      <button class="custom-btn btn-primary">Submit</button>
                      <button class="custom-btn btn-dark">New</button>
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
            <!--খাবার এন্ট্রি  Modal Start--> */}
      <div
        class="modal fade"
        id="customerentry"
        aria-hidden="true"
        tabindex="-1"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="section-title">
              <h4>কাস্টমার এন্ট্রি</h4>
            </div>
            <form>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-12 w-100">
                    <div class="row">
                      <div class="col-12">
                        <div class="row mb-3">
                          <div class="col-12">
                            <div class="row">
                              <label class="col-sm-3 col-form-label info-lable">
                                কাস্টমারের নাম
                              </label>
                              <div class="col-8">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="কাস্টমারের নাম"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="row mb-3">
                          <div class="col-12">
                            <div class="row">
                              <label class="col-sm-3 col-form-label info-lable">
                                ই-মেইল
                              </label>
                              <div class="col-8">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="কাস্টমারের ই-মেইল"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="row mb-3">
                          <div class="col-12">
                            <div class="row">
                              <label class="col-sm-3 col-form-label info-lable">
                                মোবাইল
                              </label>
                              <div class="col-8">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="কাস্টমারের মোবাইল"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="row mb-3">
                          <div class="col-12">
                            <div class="row">
                              <label class="col-sm-3 col-form-label info-lable">
                                ঠিকানা
                              </label>
                              <div class="col-8">
                                <textarea
                                  class="form-control"
                                  placeholder="ঠিকানা"
                                ></textarea>
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
                                  <th>ক্রমিক</th>
                                  <th>কাস্টমারের নাম</th>
                                  <th>মোবাইল</th>
                                  <th>ইনভয়েস</th>
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
    </div>
  );
};

export default NewSale;
