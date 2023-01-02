import React from "react";

const MarkEntry = () => {
  return (
    <div>
      <section className="user-form-section">
        <div className="section-bg">
          <div className="row">
            <div className="col-md-12 w-100">
              <div className="main-container">
                <div className="row">
                  <div className="col-12">
                    <div className="section-title">
                      <h4>ফলাফল প্রাপ্ত নাম্বার এন্ট্রি</h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="row mb-3">
                        <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                          শিক্ষাবর্ষ
                          <i>*</i>
                        </label>
                        <div className="col-lg-6 col-md-6 col-10">
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
                        <div className="col-2">
                          <span className="addbutton">
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#membertype"
                            >
                              <i className="bi bi-plus-circle-fill"></i>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="row mb-3">
                        <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                          ক্লাস/জামাত
                          <i>*</i>
                        </label>
                        <div className="col-lg-6 col-md-6 col-10">
                          <select className="form-select">
                            <option selected="">শ্রেণী নির্বাচন করুন</option>
                            <option>নাযেরা</option>
                            <option>হিফযুল কুরআন</option>
                            <option>ই-দাদী</option>
                            <option>ইবতিদায়ী আউয়াল</option>
                            <option>ইবতিদায়ী নানী</option>
                            <option>উস্তানী আউয়াল</option>
                            <option>উস্তানী সানী</option>
                            <option>সানাবী আউয়াল</option>
                            <option>সানাবী আউয়াল</option>
                            <option>সানাবী সানী</option>
                            <option>নিহায়ী আউয়াল</option>
                            <option>নিহায়ী সানী</option>
                            <option>তাকমীল</option>
                            <option>ইফতা ১ম</option>
                          </select>
                        </div>
                        <div className="col-2">
                          <span className="addbutton">
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#membertype"
                            >
                              <i className="bi bi-plus-circle-fill"></i>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="row mb-3">
                        <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                          পরীক্ষার নাম
                          <i>*</i>
                        </label>
                        <div className="col-lg-6 col-md-6 col-10">
                          <select className="form-select">
                            <option selected="">শ্রেণী নির্বাচন করুন</option>
                            <option>প্রথম সাময়িক পরীক্ষা</option>
                            <option>দ্বিতীয় সাময়িক পরীক্ষা</option>
                            <option>তৃতীয় সাময়িক পরীক্ষা</option>
                            <option>বোর্ড পরীক্ষা</option>
                            <option>মাসিক পরীক্ষা</option>
                          </select>
                        </div>
                        <div className="col-2">
                          <span className="addbutton">
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#membertype"
                            >
                              <i className="bi bi-plus-circle-fill"></i>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="row mb-3">
                        <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                          বিষয়
                          <i>*</i>
                        </label>
                        <div className="col-lg-6 col-md-6 col-12">
                          <select className="form-select">
                            <option value="">সিলেক্ট করুন</option>
                            <option value="">মিযান</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="row mb-3">
                        <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                          আইডি
                          <i>*</i>
                        </label>
                        <div className="col-lg-3 col-md-3 col-6">
                          <input type="text" className="form-control" />
                        </div>
                        <div className="col-lg-3 col-md-3 col-6">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="row mb-3">
                        <div className="col-lg-6 col-md-6 col-12">
                          <button className="custom-btn btn-primary d-block w-100">
                            Show Data
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sperator"></div>
                  <div className="row my-2">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="row mb-3">
                        <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                          আইডি
                          <i>*</i>
                        </label>
                        <div className="col-lg-6 col-md-6 col-12">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="row mb-3">
                        <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                          শিক্ষার্থীর নাম
                          <i>*</i>
                        </label>
                        <div className="col-lg-6 col-md-6 col-12">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="row mb-3">
                        <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                          প্রাপ্ত নাম্বার
                          <i>*</i>
                        </label>
                        <div className="col-lg-6 col-md-6 col-12">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="row mb-3">
                        <div className="col-lg-6 col-md-6 col-12">
                          <button className="custom-btn btn-primary d-block w-100">
                            Show Data
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-12">
                    <div
                      className="table-responsive accounts-table"
                      data-pattern="priority-columns"
                    >
                      <table
                        id="tech-companies-1"
                        className="table  bg-white text-center mb-0"
                      >
                        <thead className="text-center accounts-table-head">
                          <tr>
                            <th>ক্রমিক</th>
                            <th>আইডি</th>
                            <th>নাম</th>
                            <th>কিতাব</th>
                            <th>নাম্বার</th>
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
                              <span className="action-edit">
                                <i className="bi bi-pencil-square"></i>
                              </span>
                            </td>
                            <td>
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
      </section>
    </div>
  );
};

export default MarkEntry;
