import React from "react";

const InvoiceDetail = () => {
  return (
    <div>
      <section className="user-form-section">
        <div className="section-bg">
          <div className="row">
            <div className="col-md-12 w-100">
              <div className="main-container">
                <div className="row">
                  <div className="col-12 d-print-none">
                    <div className="section-title">
                      <h4>Sales Invoice</h4>
                    </div>
                  </div>
                </div>
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
                  <div className="pages-title">
                    <h5>জামিয়া আরাবিয়া ইমদাদুল ফরিদাবাদ</h5>
                    <p>১১/১২ মাদরাসা রোড, গেন্ডারিয়া, ঢাকা-১২০৪</p>
                    <span>01832-061454 # 027440235</span>
                  </div>
                  <div className="row my-3 invoice-title">
                    <div className="col-4 d-flex align-items-center">
                      <div className="slip-no">
                        <strong>ইনভয়েস নং</strong>
                        <span className=""> ০০৪</span>
                      </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center">
                      <span className="pages-subtitle-slip">ইনভয়েস</span>
                    </div>
                    <div className="col-4 d-flex align-items-center justify-content-lg-end justify-content-start">
                      <div className="slip-date">
                        <strong>তারিখঃ</strong>
                        <span className="">৩০/১২/২০২২ ইং</span>
                      </div>
                    </div>
                  </div>
                  <div className="pages-content">
                    <div className="row mb-1 customer-info">
                      <div className="col-6 d-flex flex-wrap align-content-center">
                        <div className="donor-name">
                          <strong className="dtitle">কাস্টমারের নামঃ</strong>
                          <div className="border-line w-100">মুহাঃ ইমদাদুল</div>
                        </div>
                        <div className="donor-name">
                          <strong className="dtitle">পিতার নামঃ</strong>
                          <div className="border-line w-100">
                            মুহাঃ আব্দুল্লাহ
                          </div>
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
                          <div className="border-line w-100">
                            পাচশত টাকা মাত্র।
                          </div>
                        </div>
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
                          <div className="col-lg-4 col-12 d-flex justify-content-lg-start justify-content-center">
                            <div className="marksheet-sing">
                              <span>কাস্টমারের স্বাক্ষর</span>
                              <br />
                            </div>
                          </div>
                          <div className="col-lg-4 col-12 d-flex justify-content-lg-end justify-content-center mt-lg-0 mt-3">
                            <div className="marksheet-sing">
                              <span>পরিচালকের স্বাক্ষর</span>
                              <br />
                            </div>
                          </div>
                          <div className="col-lg-4 col-12 d-flex justify-content-lg-end justify-content-center mt-lg-0 mt-3">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvoiceDetail;
