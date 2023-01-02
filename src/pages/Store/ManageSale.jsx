import React from "react";

const ManageSale = () => {
  return (
    <div>
      <section className="user-form-section d-print-none">
        <div className="section-bg">
          <div className="row">
            <div className="col-md-12 w-100">
              <div className="main-container">
                <div className="row">
                  <div className="col-12">
                    <div className="section-title">
                      <h4>Manage Sale</h4>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="table-data mt-4">
                      <div className="row form-group searchbar">
                        <div className="col-sm-6 position-relative search">
                          <i className="bi bi-search search-icon"></i>
                          <input
                            className="form-control"
                            type="search"
                            placeholder="Search"
                          />
                        </div>
                      </div>
                      <div
                        className="table-responsive"
                        data-pattern="priority-columns"
                      >
                        <table
                          id="tech-companies-1"
                          className="table  bg-white table-bordered text-center"
                        >
                          <thead className="text-center accounts-table-head">
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
                                  className="text-decoration-none text-success"
                                >
                                  1000
                                </a>
                              </td>
                              <td>Admin User</td>
                              <td>Aminul Islam</td>
                              <td>08-Aug-2022</td>
                              <td>$13,352.00</td>
                              <td>
                                <span className="action-view">
                                  <i className="bi bi-eye"></i>
                                </span>
                                <span
                                  className="action-print"
                                  onclick="window.print()"
                                >
                                  <i className="bi bi-printer-fill"></i>
                                </span>
                                <span className="action-edit">
                                  <i className="bi bi-pencil-fill"></i>
                                </span>
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
          </div>
        </div>
      </section>
      {/* <!-- Employe Add Section End -->
            <!--রির্পোট প্রিন্ট সেকশন--> */}
      <div className="preview-page d-print-block d-none" style={{ zIndex: 1 }}>
        <span className="print-button d-print-none" onclick="window.print()">
          <i className="bi bi-printer-fill"></i>
        </span>
        <div className="pages-title">
          <h5>জামিয়া আরাবিয়া ইমদাদুল ফরিদাবাদ</h5>
          <p>১১/১২ মাদরাসা রোড, গেন্ডারিয়া, ঢাকা-১২০৪</p>
          <span>01832-061454 # 027440235</span>
        </div>
        <div className="row my-3">
          <div className="col-4 d-flex align-items-center">
            <div className="slip-no">
              <strong>ইনভয়েস নং</strong>
              <span className=""> ০০৪</span>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <span className="pages-subtitle-slip">ইনভয়েস</span>
          </div>
          <div className="col-4 d-flex align-items-center justify-content-end">
            <div className="slip-date">
              <strong>তারিখঃ</strong>
              <span className="">৩০/১২/২০২২ ইং</span>
            </div>
          </div>
        </div>
        <div className="pages-content">
          <div className="row mb-1">
            <div className="col-6 d-flex flex-wrap align-content-center">
              <div className="donor-name">
                <strong className="dtitle">কাস্টমারের নামঃ</strong>
                <div className="border-line w-100">মুহাঃ ইমদাদুল</div>
              </div>
              <div className="donor-name">
                <strong className="dtitle">পিতার নামঃ</strong>
                <div className="border-line w-100">মুহাঃ আব্দুল্লাহ</div>
              </div>
              <div className="donor-name">
                <strong className="dtitle">ঠিকানাঃ</strong>
                <div className="border-line w-100">বাংলাদেশ</div>
              </div>
              <div className="donor-name mt-1">
                <strong className="dtitle">টাকাঃ</strong>
                <div className="border-all w-100">৫০০.০০ টাকা</div>
              </div>
            </div>
            <div className="col-6">
              <div className="donor-name">
                <strong className="dtitle">মোবাইলঃ</strong>
                <div className="border-line w-100">01853569311</div>
              </div>
              <div className="donor-name">
                <strong className="dtitle">শ্রেণীঃ</strong>
                <div className="border-line w-100">মিযান</div>
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-12">
              <div className="donor-name">
                <strong className="dtitle">কথায়ঃ</strong>
                <div className="border-line w-100">পাচশত টাকা মাত্র।</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="table-responsive" data-pattern="priority-columns">
                <table className="table  bg-white table-bordered text-center report-table">
                  <thead className="text-center">
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
                      <th colspan="5" className="text-right">
                        Total Price After Discount
                      </th>
                      <td>০.০০</td>
                    </tr>
                    <tr>
                      <th colspan="5" className="text-right">
                        Grand Total
                      </th>
                      <td>০.০০</td>
                    </tr>
                    <tr>
                      <th colspan="5" className="text-right">
                        Paid Amount
                      </th>
                      <td>০.০০</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-12">
              <div className="row mt-5">
                <div className="col-4 d-flex justify-content-start">
                  <div className="marksheet-sing">
                    <span>কাস্টমারের স্বাক্ষর</span>
                    <br />
                  </div>
                </div>
                <div className="col-4 d-flex justify-content-end">
                  <div className="marksheet-sing">
                    <span>পরিচালকের স্বাক্ষর</span>
                    <br />
                  </div>
                </div>
                <div className="col-4 d-flex justify-content-end">
                  <div className="marksheet-sing">
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
        className="modal fade"
        id="customerentry"
        aria-hidden="true"
        tabindex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="section-title">
              <h4>কাস্টমার এন্ট্রি</h4>
            </div>
            <form>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12 w-100">
                    <div className="row">
                      <div className="col-12">
                        <div className="row mb-3">
                          <div className="col-12">
                            <div className="row">
                              <label className="col-sm-3 col-form-label info-lable">
                                কাস্টমারের নাম
                              </label>
                              <div className="col-8">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="কাস্টমারের নাম"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row mb-3">
                          <div className="col-12">
                            <div className="row">
                              <label className="col-sm-3 col-form-label info-lable">
                                ই-মেইল
                              </label>
                              <div className="col-8">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="কাস্টমারের ই-মেইল"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row mb-3">
                          <div className="col-12">
                            <div className="row">
                              <label className="col-sm-3 col-form-label info-lable">
                                মোবাইল
                              </label>
                              <div className="col-8">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="কাস্টমারের মোবাইল"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row mb-3">
                          <div className="col-12">
                            <div className="row">
                              <label className="col-sm-3 col-form-label info-lable">
                                ঠিকানা
                              </label>
                              <div className="col-8">
                                <textarea
                                  className="form-control"
                                  placeholder="ঠিকানা"
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 addbank">
                        <div className="button-group">
                          <a href="#" className="custom-btn btn-primary">
                            Save
                          </a>
                          <button className="custom-btn btn-dark" type="submit">
                            Update
                          </button>
                          <button
                            className="custom-btn btn-primary"
                            type="submit"
                          >
                            New
                          </button>
                          <button
                            className="custom-btn btn-danger"
                            data-bs-dismiss="modal"
                            onclick="javascript:void(0)"
                            type="button"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                      {/* <!--Table Area Start--> */}
                      <div className="col-md-12">
                        <div className="table-data mt-4">
                          <div
                            className="table-responsive"
                            data-pattern="priority-columns"
                          >
                            <table
                              id="tech-companies-1"
                              className="table  bg-white table-bordered text-center"
                            >
                              <thead
                                className="text-center"
                                style={{
                                  backgroundColor: "#62659B",
                                  color: "white",
                                }}
                              >
                                <tr>
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
                                  <th>ক্রমিক</th>
                                  <th>কাস্টমারের নাম</th>
                                  <th>মোবাইল</th>
                                  <th>ইনভয়েস</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
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
