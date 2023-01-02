import React from "react";

const NewSale = () => {
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
                      <h4>New Sale</h4>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-lg-5 col-md-4 col-12">
                        <div className="row mb-3">
                          <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            কাস্ট্মার/ছাত্রের নাম
                            <i>*</i>
                          </label>
                          <div className="col-lg-6 col-md-6 col-10">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="কাস্ট্মার/ছাত্রের নাম"
                            />
                          </div>
                          <div className="col-2">
                            <span className="addbutton">
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#customerentry"
                              >
                                <i className="bi bi-plus-circle-fill"></i>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-12"></div>
                      <div className="col-lg-5 col-md-4 col-12"></div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-lg-5 col-md-4 col-12">
                        <div className="row mb-3">
                          <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            তারিখ
                            <i>*</i>
                          </label>
                          <div className="col-lg-6 col-md-8 col-12">
                            <input type="date" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-12"></div>
                      <div className="col-lg-5 col-md-4 col-12"></div>
                    </div>
                  </div>
                  <div className="col-12 my-2">
                    <div
                      className="table-responsive accounts-table"
                      data-pattern="priority-columns"
                    >
                      <table
                        id="tech-companies-1"
                        className="table table-bordered  bg-white text-center mb-0"
                      >
                        <thead className="text-center accounts-table-head">
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
                              <span className="action-edit">
                                <i className="bi bi-pencil-square"></i>
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <input
                                type="text"
                                className="form-control"
                                name=""
                                id=""
                                placeholder="বইয়ের নাম লিখুন....."
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                className="form-control"
                                readonly
                                value="0"
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="0"
                              />
                            </td>
                            <td>
                              <input type="text" className="form-control" />
                            </td>
                            <td>
                              <input
                                type="text"
                                className="form-control"
                                name=""
                                id=""
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                className="form-control"
                                name=""
                                id=""
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                className="form-control"
                                name=""
                                id=""
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                className="form-control"
                                name=""
                                id=""
                              />
                            </td>
                            <td>
                              <span className="action-delete">
                                <i className="bi bi-trash3"></i>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th colspan="6">Sale Details</th>
                            <th>Sale Discount</th>
                            <td>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="0.00"
                              />
                            </td>
                            <td>
                              <span className="action-edit">
                                <i className="bi bi-plus-square-fill"></i>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th colspan="6">
                              <textarea
                                className="form-control"
                                placeholder="Sale Details"
                              ></textarea>
                            </th>
                            <th>Total Discount</th>
                            <td>
                              <input
                                type="text"
                                className="form-control"
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
                                className="form-control"
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
                                className="form-control"
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
                                className="form-control"
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
                                className="form-control"
                                placeholder="0.00"
                              />
                            </td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-12 my-2">
                    <div className="row">
                      <div className="col-6">
                        <div
                          className="table-responsive accounts-table"
                          data-pattern="priority-columns"
                        >
                          <table
                            id="tech-companies-1"
                            className="table table-bordered  bg-white text-center mb-0"
                          >
                            <thead className="accounts-table-head">
                              <th>Payment Type</th>
                              <th>Paid Amount</th>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <select name="" id="" className="form-select">
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
                                    className="form-control"
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
                  <div className="col-6 d-flex justify-content-center w-100 payroll">
                    <div className="button-group w-100">
                      <button className="custom-btn btn-primary">Submit</button>
                      <button className="custom-btn btn-dark">New</button>
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
      <div className="preview-page d-print-block d-none">
        <span className="print-button d-print-none" onclick="window.print()">
          <i className="bi bi-printer-fill"></i>
        </span>
        <div className="pages-title">
          <h5>জামিয়া আরাবিয়া ইমদাদুল ফরিদাবাদ</h5>
          <p>১১/১২ মাদরাসা রোড, গেন্ডারিয়া, ঢাকা-১২০৪</p>
          <span>01832-061454 # 027440235</span>
          <br />
          <span className="pages-subtitle">জমা-খরচ লেজার ভিত্তিক</span>
          <br />
        </div>
        <div className="pages-content">
          <div className="row my-3 justify-content-center align-items-center">
            <div className="col-5">
              <p className="my-2">২৯/০৯/২০২২ ইং থেকে ২৯/১০/২০২২ ইং</p>
            </div>
            <div className="col-3">
              <span className="title-ladger">গোরাবা ফান্ড</span>
            </div>
            <div className="col-4 d-flex justify-content-end">
              <p className="my-2">
                <span>রিপোর্ট প্রিন্ট তারিখঃ</span>
                ০৩/১২/২০২২
              </p>
            </div>
          </div>
          <div className="table-responsive" data-pattern="priority-columns">
            <table className="table  bg-white table-bordered text-center report-table">
              <thead className="text-center">
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
            <div className="short-report">
              <div className="report-item">
                <div className="items">
                  <span className="report-text">সর্বমোট জমা =</span>
                  <span className="report-amount">৩৪৫৪৩৫৪.০০</span>
                </div>
                <div className="items">
                  <span>সর্বমোট খরচ =</span>
                  <span>৩৪৫৪৩৫৪.০০</span>
                </div>
                <hr className="lines" />
                <div className="items">
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

export default NewSale;
