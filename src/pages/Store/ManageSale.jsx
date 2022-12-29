import React from "react";

const ManageSale = () => {
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
                      <h4>Manage Sale</h4>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="table-data mt-4">
                      <div class="row form-group searchbar">
                        <div class="col-sm-6 position-relative search">
                          <i class="bi bi-search search-icon"></i>
                          <input
                            class="form-control"
                            type="search"
                            placeholder="Search"
                          />
                        </div>
                      </div>
                      <div
                        class="table-responsive"
                        data-pattern="priority-columns"
                      >
                        <table
                          id="tech-companies-1"
                          class="table  bg-white table-bordered text-center"
                        >
                          <thead class="text-center accounts-table-head">
                            <tr>
                              <th>SL.</th>
                              <th>Invoice No</th>
                              <th>Sale By</th>
                              <th>Customer Name</th>
                              <th>Date</th>
                              <th>Total Amount</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>01</td>
                              <td>
                                <a
                                  href="./invoice-details.html"
                                  class="text-decoration-none text-success"
                                >
                                  1000
                                </a>
                              </td>
                              <td>Admin User</td>
                              <td>Aminul Islam</td>
                              <td>08-Aug-2022</td>
                              <td>$13,352.00</td>
                              <td>
                                <span class="action-view">
                                  <i class="bi bi-eye"></i>
                                </span>
                                <span
                                  class="action-print"
                                  onclick="window.print()"
                                >
                                  <i class="bi bi-printer-fill"></i>
                                </span>
                                <span class="action-edit">
                                  <i class="bi bi-pencil-fill"></i>
                                </span>
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
        </div>
      </section>
      {/* <!-- Employe Add Section End -->
            <!--রির্পোট প্রিন্ট সেকশন--> */}
      <div class="preview-page d-print-block d-none" style={{ zIndex: 1 }}>
        <span class="print-button d-print-none" onclick="window.print()">
          <i class="bi bi-printer-fill"></i>
        </span>
        <div class="pages-title">
          <h5>জামিয়া আরাবিয়া ইমদাদুল ফরিদাবাদ</h5>
          <p>১১/১২ মাদরাসা রোড, গেন্ডারিয়া, ঢাকা-১২০৪</p>
          <span>01832-061454 # 027440235</span>
        </div>
        <div class="row my-3">
          <div class="col-4 d-flex align-items-center">
            <div class="slip-no">
              <strong>ইনভয়েস নং</strong>
              <span class=""> ০০৪</span>
            </div>
          </div>
          <div class="col-4 d-flex justify-content-center align-items-center">
            <span class="pages-subtitle-slip">ইনভয়েস</span>
          </div>
          <div class="col-4 d-flex align-items-center justify-content-end">
            <div class="slip-date">
              <strong>তারিখঃ</strong>
              <span class="">৩০/১২/২০২২ ইং</span>
            </div>
          </div>
        </div>
        <div class="pages-content">
          <div class="row mb-1">
            <div class="col-6 d-flex flex-wrap align-content-center">
              <div class="donor-name">
                <strong class="dtitle">কাস্টমারের নামঃ</strong>
                <div class="border-line w-100">মুহাঃ ইমদাদুল</div>
              </div>
              <div class="donor-name">
                <strong class="dtitle">পিতার নামঃ</strong>
                <div class="border-line w-100">মুহাঃ আব্দুল্লাহ</div>
              </div>
              <div class="donor-name">
                <strong class="dtitle">ঠিকানাঃ</strong>
                <div class="border-line w-100">বাংলাদেশ</div>
              </div>
              <div class="donor-name mt-1">
                <strong class="dtitle">টাকাঃ</strong>
                <div class="border-all w-100">৫০০.০০ টাকা</div>
              </div>
            </div>
            <div class="col-6">
              <div class="donor-name">
                <strong class="dtitle">মোবাইলঃ</strong>
                <div class="border-line w-100">01853569311</div>
              </div>
              <div class="donor-name">
                <strong class="dtitle">শ্রেণীঃ</strong>
                <div class="border-line w-100">মিযান</div>
              </div>
            </div>
          </div>
          <div class="row mb-2">
            <div class="col-12">
              <div class="donor-name">
                <strong class="dtitle">কথায়ঃ</strong>
                <div class="border-line w-100">পাচশত টাকা মাত্র।</div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="table-responsive" data-pattern="priority-columns">
                <table class="table  bg-white table-bordered text-center report-table">
                  <thead class="text-center">
                    <tr>
                      <th>ক্রঃ</th>
                      <th>বইয়ের নাম</th>
                      <th>নির্ধারিত ফি</th>
                      <th>সংখ্যা</th>
                      <th>মূল্য</th>
                      <th>এমাউন্ট</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>০১</td>
                      <td>সহীহ বুখারি</td>
                      <td>৫০০.০০</td>
                      <td>০২</td>
                      <td>১০০</td>
                      <td>২০০.০০</td>
                    </tr>
                    <tr>
                      <th colspan="5" class="text-right">
                        Total Price After Discount
                      </th>
                      <td>০.০০</td>
                    </tr>
                    <tr>
                      <th colspan="5" class="text-right">
                        Grand Total
                      </th>
                      <td>০.০০</td>
                    </tr>
                    <tr>
                      <th colspan="5" class="text-right">
                        Paid Amount
                      </th>
                      <td>০.০০</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-12">
              <div class="row mt-5">
                <div class="col-4 d-flex justify-content-start">
                  <div class="marksheet-sing">
                    <span>কাস্টমারের স্বাক্ষর</span>
                    <br />
                  </div>
                </div>
                <div class="col-4 d-flex justify-content-end">
                  <div class="marksheet-sing">
                    <span>পরিচালকের স্বাক্ষর</span>
                    <br />
                  </div>
                </div>
                <div class="col-4 d-flex justify-content-end">
                  <div class="marksheet-sing">
                    <span>আদায়কারীর স্বাক্ষর</span>
                    <br />
                  </div>
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

export default ManageSale;
