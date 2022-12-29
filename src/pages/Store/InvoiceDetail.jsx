import React from "react";

const InvoiceDetail = () => {
  return (
    <div>
      <section class="user-form-section">
        <div class="section-bg">
          <div class="row">
            <div class="col-md-12 w-100">
              <div class="main-container">
                <div class="row">
                  <div class="col-12 d-print-none">
                    <div class="section-title">
                      <h4>Sales Invoice</h4>
                    </div>
                  </div>
                </div>
                <div class="preview-page d-print-block" style={{ zIndex: 1 }}>
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
                  </div>
                  <div class="row my-3 invoice-title">
                    <div class="col-4 d-flex align-items-center">
                      <div class="slip-no">
                        <strong>ইনভয়েস নং</strong>
                        <span class=""> ০০৪</span>
                      </div>
                    </div>
                    <div class="col-4 d-flex justify-content-center align-items-center">
                      <span class="pages-subtitle-slip">ইনভয়েস</span>
                    </div>
                    <div class="col-4 d-flex align-items-center justify-content-lg-end justify-content-start">
                      <div class="slip-date">
                        <strong>তারিখঃ</strong>
                        <span class="">৩০/১২/২০২২ ইং</span>
                      </div>
                    </div>
                  </div>
                  <div class="pages-content">
                    <div class="row mb-1 customer-info">
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
                        <div
                          class="table-responsive"
                          data-pattern="priority-columns"
                        >
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
                          <div class="col-lg-4 col-12 d-flex justify-content-lg-start justify-content-center">
                            <div class="marksheet-sing">
                              <span>কাস্টমারের স্বাক্ষর</span>
                              <br />
                            </div>
                          </div>
                          <div class="col-lg-4 col-12 d-flex justify-content-lg-end justify-content-center mt-lg-0 mt-3">
                            <div class="marksheet-sing">
                              <span>পরিচালকের স্বাক্ষর</span>
                              <br />
                            </div>
                          </div>
                          <div class="col-lg-4 col-12 d-flex justify-content-lg-end justify-content-center mt-lg-0 mt-3">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvoiceDetail;
