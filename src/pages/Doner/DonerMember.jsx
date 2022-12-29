import React from "react";

const DonerMember = () => {
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
                      <h4>দাতা সদস্য এন্ট্রি</h4>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-12">
                        <div class="row mb-3">
                          <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            তারিখঃ
                            <i>*</i>
                          </label>
                          <div class="col-lg-8 col-md-8 col-12">
                            <input
                              type="date"
                              class="form-control"
                              placeholder=" তারিখ"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-5 col-md-5 offset-md-2 offset-0">
                        <div class="row mb-3">
                          <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            সদস্যের নামঃ
                            <i>*</i>
                          </label>
                          <div class="col-lg-8 col-md-8 col-12">
                            <input
                              type="text"
                              class="form-control"
                              placeholder=" সদস্যের নাম"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-12">
                        <div class="row mb-3">
                          <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            সদস্যের ধরণঃ
                            <i>*</i>
                          </label>
                          <div class="col-lg-6 col-md-6 col-10">
                            <select class="form-select">
                              <option selected>নির্বাচন করুন</option>
                              <option>বদরী</option>
                            </select>
                          </div>
                          <div class="col-2">
                            <span class="addbutton">
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#membertype"
                              >
                                <i class="bi bi-plus-circle-fill"></i>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-5 col-md-5 offset-md-2 offset-0">
                        <div class="row mb-3">
                          <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            পিতার নামঃ
                            <i>*</i>
                          </label>
                          <div class="col-lg-8 col-md-8 col-12">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="  পিতার নাম"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-12">
                        <div class="row mb-3">
                          <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            সময়কালঃ
                            <i>*</i>
                          </label>
                          <div class="col-lg-6 col-md-6 col-10">
                            <select class="form-select">
                              <option selected>নির্বাচন করুন</option>
                              <option>মাসিক</option>
                              <option>সাপ্তাহিক</option>
                              <option>বার্ষিক</option>
                            </select>
                          </div>
                          <div class="col-2">
                            <span class="addbutton">
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#payterm"
                              >
                                <i class="bi bi-plus-circle-fill"></i>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-5 col-md-5 offset-md-2 offset-0">
                        <div class="row mb-3">
                          <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            মাতার নামঃ
                            <i>*</i>
                          </label>
                          <div class="col-lg-8 col-md-8 col-12">
                            <input
                              type="text"
                              class="form-control"
                              placeholder=" মাতার নাম"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-12">
                        <div class="row mb-3">
                          <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            আইডিঃ
                          </label>
                          <div class="col-lg-8 col-md-8 col-12">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="আইডি"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-5 col-md-5 offset-md-2 offset-0">
                        <div class="row mb-3">
                          <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            স্বামী/স্ত্রীর নামঃ
                            <i>*</i>
                          </label>
                          <div class="col-lg-8 col-md-8 col-12">
                            <input
                              type="text"
                              class="form-control"
                              placeholder=" স্বামী/স্ত্রীর নাম"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-12">
                        <div class="row mb-3">
                          <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            ফি
                          </label>
                          <div class="col-lg-8 col-md-8 col-12">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="ফি"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-5 col-md-5 offset-md-2 offset-0">
                        <div class="row mb-3">
                          <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            পরিচয়পত্র নংঃ
                            <i>*</i>
                          </label>
                          <div class="col-lg-8 col-md-8 col-12">
                            <input
                              class="form-control"
                              placeholder="  NID/ জন্ম নিবন্ধন নং"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-12 offset-0 offset-md-7">
                        <div class="row mb-3">
                          <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            পেশাঃ
                            <i>*</i>
                          </label>
                          <div class="col-lg-8 col-md-8 col-12">
                            <input class="form-control" placeholder="পেশা" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-12 offset-0 offset-md-7">
                        <div class="row mb-3">
                          <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            কপিলঃ
                            <i>*</i>
                          </label>
                          <div class="col-lg-8 col-md-8 col-12">
                            <input class="form-control" placeholder="কপিল" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="row">
                      <div class="col-lg-4 col-md-4 col-12">
                        <div class="row">
                          <label class="col-12 col-form-label info-lable">
                            স্থায়ী ঠিকানা
                          </label>
                        </div>
                      </div>
                      <div class="col-4"></div>
                      <div class="col-4">
                        <div class="row">
                          <label class="col-sm-12 d-none d-md-block col-form-label info-lable">
                            বর্তমান ঠিকানা
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-12">
                        <div class="row mb-3">
                          <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            গ্রাম/বাসাঃ
                            <i>*</i>
                          </label>
                          <div class="col-lg-8 col-md-8 col-12">
                            <input
                              class="form-control"
                              placeholder="গ্রাম/বাসা"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-2 d-none d-md-block"></div>
                      <div class="col-lg-5 col-md-5 col-12">
                        <div class="row mb-3">
                          <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            গ্রাম/বাসাঃ
                            <i>*</i>
                          </label>
                          <div class="col-lg-8 col-md-8 col-12">
                            <input
                              class="form-control"
                              placeholder="গ্রাম/বাসা"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-12">
                        <div class="row mb-3">
                          <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            ডাকঃ
                            <i>*</i>
                          </label>
                          <div class="col-lg-8 col-md-8 col-12">
                            <input class="form-control" placeholder="ডাক" />
                          </div>
                        </div>
                      </div>
                      <div class="col-2 d-none d-md-block"></div>
                      <div class="col-lg-5 col-md-5 col-12">
                        <div class="row mb-3">
                          <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            ডাকঃ
                            <i>*</i>
                          </label>
                          <div class="col-lg-8 col-md-8 col-12">
                            <input class="form-control" placeholder="ডাক" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-12">
                        <div class="row mb-3">
                          <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            থানাঃ
                            <i>*</i>
                          </label>
                          <div class="col-lg-8 col-md-8 col-12">
                            <input class="form-control" placeholder="থানা" />
                          </div>
                        </div>
                      </div>
                      <div class="col-2 d-none d-md-block"></div>
                      <div class="col-lg-5 col-md-5 col-12">
                        <div class="row mb-3">
                          <label class="col-sm-4 col-form-label info-lable">
                            থানাঃ
                            <i>*</i>
                          </label>
                          <div class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            <input class="form-control" placeholder="থানা" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="row">
                      <div class="col-lg-5 col-md-5 col-12">
                        <div class="row mb-3">
                          <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            জেলাঃ
                            <i>*</i>
                          </label>
                          <div class="col-lg-8 col-md-8 col-12">
                            <input class="form-control" placeholder="জেলা" />
                          </div>
                        </div>
                      </div>
                      <div class="col-2 d-none d-md-block"></div>
                      <div class="col-lg-5 col-md-5 col-12">
                        <div class="row mb-3">
                          <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            জেলাঃ
                            <i>*</i>
                          </label>
                          <div class="col-lg-8 col-md-8 col-12">
                            <input class="form-control" placeholder="জেলা" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Image Upload section --> */}
                  <div class="col-12 mb-3">
                    <div class="upload-container">
                      <div class="file-upload">
                        <div class="file-image">
                          <div class="file-title">দাতার ছবি</div>
                          <img
                            src="../../assets/images/fileupload.png"
                            alt=""
                            width="144"
                            height="144"
                          />
                          <div class="mt-2">
                            144px
                            <i class="bi bi-x"></i>
                            144px
                          </div>
                        </div>
                        <div class="upload-button">
                          <div class="upload-btn-wrapper">
                            <button class="upload-btn">Browse</button>
                            <input type="file" name="file" />
                          </div>
                          <button class="upload-btn">save</button>
                        </div>
                      </div>
                      <div class="file-upload">
                        <div class="file-image">
                          <div class="file-title">NID/জন্মনিবন্ধন কার্ড</div>
                          <img
                            src="../../assets/images/fileupload.png"
                            alt=""
                            width="144"
                            height="144"
                          />
                          <div class="mt-2">
                            144px
                            <i class="bi bi-x"></i>
                            144px
                          </div>
                        </div>
                        <div class="upload-button">
                          <div class="upload-btn-wrapper">
                            <button class="upload-btn">Browse</button>
                            <input type="file" name="file" />
                          </div>
                          <button class="upload-btn">save</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Button Area --> */}
                  <div class="col-6 d-flex justify-content-center w-100 donoate">
                    <div class="button-group w-100">
                      <button class="custom-btn btn-info">New</button>
                      <button class="custom-btn btn-primary">
                        Save & Finish
                      </button>
                      <button class="custom-btn btn-dark">Close</button>
                      <button class="custom-btn btn-danger">
                        Edit & Finish
                      </button>
                    </div>
                  </div>
                </div>
                {/* <!-- Table Area --> */}
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
                            <th>আইডি</th>
                            <th>সদস্যের নাম</th>
                            <th>পিতার নাম</th>
                            <th>সদস্য ধরন</th>
                            <th>মোবাইল</th>
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
            <!-- Add Member Type  Modal Start--> */}
      <div class="modal fade" id="membertype" aria-hidden="true" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="section-title">
              <h4>সদস্যর ধরণ এন্ট্রি করুন</h4>
            </div>
            <form>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-12 w-100">
                    <div class="row">
                      <div class="col-12">
                        <div class="my-4">
                          <div class="row mb-3">
                            <label class="col-lg-3 col-md-3 col-12 col-form-label info-lable">
                              সদস্যর ধরণঃ
                            </label>
                            <div class="col-lg-8 col-md-8 col-12">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="সদস্যর ধরণ"
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label class="col-lg-3 col-md-3 col-12 col-form-label info-lable">
                              মন্তব্যঃ
                            </label>
                            <div class="col-lg-8 col-md-8 col-12">
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
                                  <th>সদস্যর ধরণ</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th></th>
                                  <td>০১</td>
                                  <td>বদরী</td>
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
      {/* <!--Add Member Type  Modal End-->
            <!-- Add Payment Term  Modal Start--> */}
      <div class="modal fade" id="payterm" aria-hidden="true" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="section-title">
              <h4>টাকা দেওয়ার সময়কাল এন্ট্রি</h4>
            </div>
            <form>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-12 w-100">
                    <div class="row">
                      <div class="col-12">
                        <div class="my-4">
                          <div class="row mb-3">
                            <label class="col-lg-3 col-md-3 col-12 col-form-label info-lable">
                              সময়কাল
                            </label>
                            <div class="col-lg-8 col-md-8 col-12">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="সময়কাল"
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label class="col-lg-3 col-md-3 col-12 col-form-label info-lable">
                              মন্তব্যঃ
                            </label>
                            <div class="col-lg-8 col-md-8 col-12">
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
                                  <th>সময়কাল</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th></th>
                                  <td>০১</td>
                                  <td>মাসিক</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০২</td>
                                  <td>বার্ষিক</td>
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
    </div>
  );
};

export default DonerMember;
