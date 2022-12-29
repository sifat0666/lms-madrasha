import React from "react";

const DonateRecive = () => {
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
                      <h4>দাতা সদস্যদের ফি গ্রহণ</h4>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <form action="">
                    <div class="col-12">
                      <div class="row">
                        <div class="col-lg-4 col-md-12 col-12">
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
                                  <th>সদস্যের আইডি</th>
                                  <th>সদস্যের নাম</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th>৫৪৩</th>
                                  <td>মুহতামিম</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div class="col-lg-8 col-md-12 col-12">
                          <div class="row">
                            <div class="col-lg-5 col-md-6 col-12">
                              <div class="row mb-3">
                                <label class="col-lg-4 col-12 col-form-label info-lable">
                                  এন্ট্রি তারিখ
                                  <i>*</i>
                                </label>
                                <div class="col-lg-8 col-12">
                                  <input
                                    type="date"
                                    class="form-control"
                                    placeholder="এন্ট্রি তারিখ"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-5 col-md-6 col-12 offset-0 offset-lg-2">
                              <div class="row mb-3">
                                <label class="col-lg-4 col-12 col-form-label info-lable">
                                  নির্ধারিত ফিঃ
                                  <i>*</i>
                                </label>
                                <div class="col-lg-8 col-12">
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="নির্ধারিত ফি"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-lg-5 col-md-6 col-12">
                              <div class="row mb-3">
                                <label class="col-lg-4 col-12 col-form-label info-lable">
                                  সদস্যের ধরণঃ
                                  <i>*</i>
                                </label>
                                <div class="col-lg-6 col-md-10 col-10">
                                  <select class="form-select">
                                    <option selected="">নির্বাচন করুন</option>
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
                            <div class="col-lg-5 col-md-6 col-12 offset-0 offset-lg-2">
                              <div class="row mb-3">
                                <label class="col-lg-4 col-12 col-form-label info-lable">
                                  কর্তনঃ
                                  <i>*</i>
                                </label>
                                <div class="col-lg-8 col-12">
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder=" কর্তন"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-lg-5 col-md-6 col-12">
                              <div class="row mb-3">
                                <label class="col-lg-4 col-12 col-form-label info-lable">
                                  সময়কালঃ
                                  <i>*</i>
                                </label>
                                <div class="col-lg-6 col-md-10 col-10">
                                  <select class="form-select">
                                    <option selected="">নির্বাচন করুন</option>
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
                            <div class="col-lg-5 col-md-6 col-12 offset-0 offset-lg-2">
                              <div class="row mb-3">
                                <label class="col-lg-4 col-12 col-form-label info-lable">
                                  পূর্ব জমাঃ
                                  <i>*</i>
                                </label>
                                <div class="col-lg-8 col-12">
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="পূর্ব জমা"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-lg-5 col-md-6 col-12">
                              <div class="row mb-3">
                                <label class="col-lg-4 col-12 col-form-label info-lable">
                                  সদস্যের নামঃ
                                  <i>*</i>
                                </label>
                                <div class="col-lg-8 col-12">
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="সদস্যের নাম"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-5 col-md-6 col-12 offset-0 offset-lg-2">
                              <div class="row mb-3">
                                <label class="col-lg-4 col-12 col-form-label info-lable">
                                  বর্তমান জমাঃ
                                  <i>*</i>
                                </label>
                                <div class="col-lg-8 col-12">
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="বর্তমান জমা"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-lg-5 col-md-6 col-12">
                              <div class="row mb-3">
                                <label class="col-lg-4 col-12 col-form-label info-lable">
                                  মন্তব্যঃ
                                  <i>*</i>
                                </label>
                                <div class="col-lg-8 col-12">
                                  <textarea
                                    class="form-control"
                                    rows="2"
                                    placeholder="মন্তব্য"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-5 col-md-6 col-12 offset-0 offset-lg-2">
                              <div class="row mb-3">
                                <label class="col-lg-4 col-12 col-form-label info-lable">
                                  বকেয়া
                                  <i>*</i>
                                </label>
                                <div class="col-lg-8 col-12">
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="বকেয়া"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Button Area --> */}
                    <div class="col-6 d-flex justify-content-center w-100 donoate">
                      <div class="button-group w-100">
                        <button class="custom-btn btn-info">New</button>
                        <button class="custom-btn btn-primary">
                          Save &amp; Finish
                        </button>
                        <button class="custom-btn btn-dark">Close</button>
                        <button class="custom-btn btn-danger">
                          Edit &amp; Finish
                        </button>
                      </div>
                    </div>
                  </form>
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
                            <th>ট্রানজে.আইডি</th>
                            <th>প্রদানের তারিখ</th>
                            <th>নির্ধারিত ফি</th>
                            <th>মোট গ্রহণ</th>
                            <th>বকেয়া</th>
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
            <!--Modal Section-->
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

export default DonateRecive;
