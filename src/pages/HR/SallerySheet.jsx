import React from "react";

const SallerySheet = () => {
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
                      <h4>বেতন শীট</h4>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-12">
                        <div className="row">
                          <label className="col-lg-5 col-md-5 col-12 col-form-label info-lable">
                            এন্ট্রি তারিথ
                          </label>
                          <div className="col-lg-7 col-md-7 col-12">
                            <input type="date" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-12">
                        <div className="row">
                          <label className="col-lg-5 col-md-5 col-12 col-form-label info-lable">
                            শিক্ষাবর্ষ
                          </label>
                          <div className="col-lg-7 col-md-7 col-12">
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
                      <div className="col-lg-6 col-md-12 col-12 mt-md-2">
                        <div className="row">
                          <label className="col-lg-2 col-md-2 col-12 col-form-label info-lable">
                            মাস
                          </label>
                          <div className="col-lg-5 col-md-4 col-12">
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
                          <div className="col-lg-5 col-md-4 col-12 mt-2 mt-md-0">
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
                <div className="row">
                  <div className="col-lg-5 col-md-12 col-12 d-print-none">
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
                                className="text-center"
                                style={{
                                  backgroundColor: "#62659B",
                                  color: "white",
                                }}
                              >
                                <tr>
                                  <th>
                                    <input
                                      type="checkbox"
                                      className=" form-check-input"
                                      name="checkbox"
                                      onclick="allSelect(this)"
                                    />
                                  </th>
                                  <th>ক্রমিক নং</th>
                                  <th>শিক্ষকের নাম</th>
                                  <th>নির্ধারিত বেতন</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th>
                                    <input
                                      type="checkbox"
                                      className=" form-check-input"
                                      name="checkbox"
                                    />
                                  </th>
                                  <td>০১</td>
                                  <td>মুহতামিম</td>
                                  <td>৪০০০০.০০</td>
                                </tr>
                                <tr>
                                  <th>
                                    <input
                                      type="checkbox"
                                      className=" form-check-input"
                                      name="checkbox"
                                    />
                                  </th>
                                  <td>০২</td>
                                  <td>মুহতামিম</td>
                                  <td>৪০০০০.০০</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-12">
                          <button
                            type="submit"
                            className="custom-btn btn-primary d-block w-100"
                          >
                            Generate Salary
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-12 col-lg-7 col-12 d-print-none">
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
                                <th>শিক্ষকের নাম</th>
                                <th>নির্ধারিত বেতন</th>
                                <th>জৈষ্ঠতা</th>
                                <th>বাড়ী ভাড়া</th>
                                <th>ইনক্রিমেন্ট</th>
                                <th>চিকিৎসা</th>
                                <th>অতিরিক্ত</th>
                                <th>কর্তন</th>
                                <th>মোট বেতন</th>
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

export default SallerySheet;
