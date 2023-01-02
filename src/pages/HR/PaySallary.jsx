import React from "react";

const PaySallary = () => {
  return (
    <div>
      <section className="user-form-section">
        <div className="section-bg">
          <div className="row">
            <div className="col-md-12 w-100">
              <div className="main-container">
                <div className="row d-print-none">
                  <div className="col-12">
                    <div className="section-title" style={{ marginTop: "2px" }}>
                      <h4> শিক্ষক/স্টাফদের বেতন প্রদান</h4>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-lg-3 col-12 col-md-12">
                        <div className="row">
                          <label className="col-lg-2 d-none d-lg-block col-form-label info-lable">
                            <i className="bi bi-search"></i>
                          </label>
                          <div className="col-lg-7 col-9 col-md-10">
                            <input
                              type="search"
                              className="form-control"
                              placeholder="সার্চ করুন..."
                            />
                          </div>
                          <div className="col-lg-3 col-3 col-md-2">
                            <input
                              type="button"
                              className="custom-btn btn-primary"
                              value="খুজুন"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-12 col-md-12">
                        <div className="row">
                          <label className="col-lg-5 col-12 col-form-label info-lable">
                            শিক্ষাবর্ষ
                          </label>
                          <div className="col-lg-7 col-12 col-md-12">
                            <select className="form-select">
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
                      <div className="col-lg-6 col-12 col-md-12">
                        <div className="row">
                          <label className="col-lg-2 col-12 col-form-label info-lable">
                            মাস
                          </label>
                          <div className="col-lg-5 col-md-6 col-12">
                            <select className="form-select">
                              <option value="" selected="">
                                সিলেক্ট করুন
                              </option>
                              <option value="">জানুয়ারী</option>
                              <option value="">ফেব্রুয়ারী</option>
                              <option value="">মার্চ</option>
                              <option value="">এপ্রিল</option>
                            </select>
                          </div>
                          <div className="col-lg-5 col-md-6 col-12 mt-2 mt-md-0">
                            <button
                              type="submit"
                              className="custom-btn btn-primary d-block w-100"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sperator"></div>
                <div className="row">
                  <div className="col-lg-3 col-12 d-print-none">
                    <form>
                      <div className="row mt-3">
                        <div className="col-12">
                          <div
                            className="table-responsive"
                            data-pattern="priority-columns"
                          >
                            <table
                              id="tech-companies-1"
                              className="table  bg-white table-bordered text-center"
                            >
                              <thead
                                className={{
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
                  <div className="col-lg-3 col-12 d-print-none">
                    <form>
                      <div className="row mt-3">
                        <div className="col-12">
                          <div className="row mb-2">
                            <label
                              className="col-lg-5 col-12 col-md-5 col-form-label info-lable"
                              style={{ textAlign: "left" }}
                            >
                              লেনদেনের ধরণ
                            </label>
                            <div className="col-lg-7 col-12 col-md-7">
                              <select className="form-select">
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
                        <div className="col-12">
                          <div className="row mb-2">
                            <label
                              className="col-lg-5 col-12 col-md-5 col-form-label info-lable"
                              style={{ textAlign: "left" }}
                            >
                              এন্ট্রির তারিখ
                            </label>
                            <div className="col-lg-7 col-12 col-md-7">
                              <input type="date" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="row mb-2">
                            <label
                              className="col-lg-5 col-12 col-md-5 col-form-label info-lable"
                              style={{ textAlign: "left" }}
                            >
                              শিক্ষাবর্ষ
                            </label>
                            <div className="col-lg-7 col-12 col-md-7">
                              <select className="form-select">
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
                        <div className="col-12">
                          <div className="row mb-2">
                            <label
                              className="col-lg-5 col-12 col-md-5 col-form-label info-lable"
                              style={{ textAlign: "left" }}
                            >
                              মাস
                            </label>
                            <div className="col-lg-7 col-12 col-md-7">
                              <select className="form-select">
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
                        <div className="col-12">
                          <div className="row mb-2">
                            <label
                              className="col-lg-5 col-12 col-md-5 col-form-label info-lable"
                              style={{ textAlign: "left" }}
                            >
                              শিক্ষক নাম
                            </label>
                            <div className="col-lg-7 col-12 col-md-7">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="শিক্ষক/স্টাফের নাম"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="row mb-2">
                            <label
                              className="col-lg-5 col-12 col-md-5 col-form-label info-lable"
                              style={{ textAlign: "left" }}
                            >
                              পরিমান
                            </label>
                            <div className="col-lg-7 col-12 col-md-7">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="বেতনের পরিমান"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="row mb-2">
                            <label
                              className="col-lg-5 col-12 col-md-5 col-form-label info-lable"
                              style={{ textAlign: "left" }}
                            >
                              মন্তব্য
                            </label>
                            <div className="col-lg-7 col-12 col-md-7">
                              <textarea
                                className="form-control"
                                rows="2"
                                placeholder="মন্তব্য"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-12 paysalary-btn">
                          <div className="row">
                            <div className="col-6">
                              <button className="custom-btn btn-primary d-block w-100 mb-2">
                                Save
                              </button>
                              <button className="custom-btn btn-dark d-block w-100">
                                Update
                              </button>
                            </div>
                            <div className="col-6">
                              <button className="custom-btn btn-dark d-block w-100 mb-2">
                                New
                              </button>
                              <button className="custom-btn btn-danger d-block w-100">
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-6 col-12 d-print-none">
                    <div className="row mt-3">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-lg-6 col-12 col-md-6">
                            <div className="row">
                              <div className="col-lg-9 col-md-9 col-12">
                                <input
                                  type="date"
                                  placeholder=""
                                  className="form-control"
                                />
                              </div>
                              <label className="col-lg-3 col-md-3 col-12 col-form-label info-lable">
                                পর্যন্ত
                                <i>*</i>
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="row">
                              <div className="col-lg-7 col-md-7 col-12">
                                <input
                                  type="date"
                                  placeholder=""
                                  className="form-control"
                                />
                              </div>
                              <div className="col-lg-5 col-md-5 col-12 mt-2 mt-md-0">
                                <button className="custom-btn btn-primary d-block w-100">
                                  Show
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-12">
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
                                  <span className="action-edit">
                                    <i className="bi bi-pencil-square"></i>
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
