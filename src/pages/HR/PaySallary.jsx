import React from "react";

const PaySallary = () => {
  return (
    <div>
      <section class="user-form-section">
        <div class="section-bg">
          <div class="row">
            <div class="col-md-12 w-100">
              <div class="main-container">
                <div class="row d-print-none">
                  <div class="col-12">
                    <div class="section-title" style={{ marginTop: "2px" }}>
                      <h4> শিক্ষক/স্টাফদের বেতন প্রদান</h4>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="row">
                      <div class="col-lg-3 col-12 col-md-12">
                        <div class="row">
                          <label class="col-lg-2 d-none d-lg-block col-form-label info-lable">
                            <i class="bi bi-search"></i>
                          </label>
                          <div class="col-lg-7 col-9 col-md-10">
                            <input
                              type="search"
                              class="form-control"
                              placeholder="সার্চ করুন..."
                            />
                          </div>
                          <div class="col-lg-3 col-3 col-md-2">
                            <input
                              type="button"
                              class="custom-btn btn-primary"
                              value="খুজুন"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-12 col-md-12">
                        <div class="row">
                          <label class="col-lg-5 col-12 col-form-label info-lable">
                            শিক্ষাবর্ষ
                          </label>
                          <div class="col-lg-7 col-12 col-md-12">
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
                      <div class="col-lg-6 col-12 col-md-12">
                        <div class="row">
                          <label class="col-lg-2 col-12 col-form-label info-lable">
                            মাস
                          </label>
                          <div class="col-lg-5 col-md-6 col-12">
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
                          <div class="col-lg-5 col-md-6 col-12 mt-2 mt-md-0">
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
                <div class="sperator"></div>
                <div class="row">
                  <div class="col-lg-3 col-12 d-print-none">
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
                                class={{
                                  backgroundColor: "#62659B",
                                  color: "white",
                                }}
                              >
                                <tr>
                                  <th>আইডি নং</th>
                                  <th>শিক্ষকের নাম</th>
                                  <th>নির্ধারিত বেতন</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th>৫৪৩</th>
                                  <td>মুহতামিম</td>
                                  <td>৪০০০০.০০</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="col-lg-3 col-12 d-print-none">
                    <form>
                      <div class="row mt-3">
                        <div class="col-12">
                          <div class="row mb-2">
                            <label
                              class="col-lg-5 col-12 col-md-5 col-form-label info-lable"
                              style={{ textAlign: "left" }}
                            >
                              লেনদেনের ধরণ
                            </label>
                            <div class="col-lg-7 col-12 col-md-7">
                              <select class="form-select">
                                <option value="" selected="">
                                  সিলেক্ট করুন
                                </option>
                                <option value="">বেতন প্রদান</option>
                                <option value="">লোন প্রদান</option>
                                <option value="">আমানত প্রদান</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="row mb-2">
                            <label
                              class="col-lg-5 col-12 col-md-5 col-form-label info-lable"
                              style={{ textAlign: "left" }}
                            >
                              এন্ট্রির তারিখ
                            </label>
                            <div class="col-lg-7 col-12 col-md-7">
                              <input type="date" class="form-control" />
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="row mb-2">
                            <label
                              class="col-lg-5 col-12 col-md-5 col-form-label info-lable"
                              style={{ textAlign: "left" }}
                            >
                              শিক্ষাবর্ষ
                            </label>
                            <div class="col-lg-7 col-12 col-md-7">
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
                        <div class="col-12">
                          <div class="row mb-2">
                            <label
                              class="col-lg-5 col-12 col-md-5 col-form-label info-lable"
                              style={{ textAlign: "left" }}
                            >
                              মাস
                            </label>
                            <div class="col-lg-7 col-12 col-md-7">
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
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="row mb-2">
                            <label
                              class="col-lg-5 col-12 col-md-5 col-form-label info-lable"
                              style={{ textAlign: "left" }}
                            >
                              শিক্ষক নাম
                            </label>
                            <div class="col-lg-7 col-12 col-md-7">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="শিক্ষক/স্টাফের নাম"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="row mb-2">
                            <label
                              class="col-lg-5 col-12 col-md-5 col-form-label info-lable"
                              style={{ textAlign: "left" }}
                            >
                              পরিমান
                            </label>
                            <div class="col-lg-7 col-12 col-md-7">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="বেতনের পরিমান"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="row mb-2">
                            <label
                              class="col-lg-5 col-12 col-md-5 col-form-label info-lable"
                              style={{ textAlign: "left" }}
                            >
                              মন্তব্য
                            </label>
                            <div class="col-lg-7 col-12 col-md-7">
                              <textarea
                                class="form-control"
                                rows="2"
                                placeholder="মন্তব্য"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row mt-3">
                        <div class="col-12 paysalary-btn">
                          <div class="row">
                            <div class="col-6">
                              <button class="custom-btn btn-primary d-block w-100 mb-2">
                                Save
                              </button>
                              <button class="custom-btn btn-dark d-block w-100">
                                Update
                              </button>
                            </div>
                            <div class="col-6">
                              <button class="custom-btn btn-dark d-block w-100 mb-2">
                                New
                              </button>
                              <button class="custom-btn btn-danger d-block w-100">
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="col-lg-6 col-12 d-print-none">
                    <div class="row mt-3">
                      <div class="col-12">
                        <div class="row">
                          <div class="col-lg-6 col-12 col-md-6">
                            <div class="row">
                              <div class="col-lg-9 col-md-9 col-12">
                                <input
                                  type="date"
                                  placeholder=""
                                  class="form-control"
                                />
                              </div>
                              <label class="col-lg-3 col-md-3 col-12 col-form-label info-lable">
                                পর্যন্ত
                                <i>*</i>
                              </label>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6 col-12">
                            <div class="row">
                              <div class="col-lg-7 col-md-7 col-12">
                                <input
                                  type="date"
                                  placeholder=""
                                  class="form-control"
                                />
                              </div>
                              <div class="col-lg-5 col-md-5 col-12 mt-2 mt-md-0">
                                <button class="custom-btn btn-primary d-block w-100">
                                  Show
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                                <th>আইডি</th>
                                <th>শিক্ষকের নাম</th>
                                <th>মোট বেতন</th>
                                <th>মাস</th>
                                <th>তারিখ</th>
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
        </div>
      </section>
    </div>
  );
};

export default PaySallary;
