import React from "react";

const FeesDetermination = () => {
  return (
    <div>
      <section className="user-form-section">
        <div className="section-bg">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12 w-100">
              <div className="main-container">
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-7">
                    <div className="section-title">
                      <h4>ফি নির্ধারণ</h4>
                    </div>
                    <div className="my-4">
                      <form className="feesdeterminationa-form">
                        <div className="row mb-3">
                          <div className="offset-lg-2 offset-sm-0 col-lg-4 col-6">
                            <div className="input-group d-flex align-items-center gap-3">
                              <span className="">ভর্তি ফি</span>
                              <input
                                className="form-check-input mt-0"
                                type="checkbox"
                                name="checkbox"
                              />
                            </div>
                          </div>
                          <div className="offset-lg-2 offset-sm-0 col-lg-4 col-6">
                            <div className="input-group d-flex align-items-center gap-3">
                              <span className="">মাসিক ফি</span>
                              <input
                                className="form-check-input mt-0"
                                type="checkbox"
                                name="checkbox"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-12 col-md-12 col-lg-4 col-form-label info-lable">
                            শিক্ষাবর্ষঃ
                          </label>
                          <div className="col-12 col-md-12 col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="শিক্ষাবর্ষ"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-12 col-md-12 col-lg-4 col-form-label info-lable">
                            মারহালা/শ্রেণীঃ
                          </label>
                          <div className="col-12 col-md-12 col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="মারহালা/শ্রেণী"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-12 col-md-12 col-lg-4 col-form-label info-lable">
                            ফি এর নামঃ
                          </label>
                          <div className="col-12 col-md-12 col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="ফি এর নাম"
                            />
                          </div>
                        </div>
                        {/* <!--Card Section--> */}
                        <div className="group-card-container">
                          <div className="row">
                            <div className="col-sm-12 col-lg-6 col-md-6">
                              <div className="custom-group-card">
                                <div className="custom-card-title section-title">
                                  <h4>ছাত্র</h4>
                                </div>
                                <div className="card-container">
                                  <div className="custom-card">
                                    <div className="custom-card-subtitle">
                                      আবাসিক
                                    </div>
                                    <div className="row">
                                      <div className="col-6">
                                        <span>নতুন</span>
                                        <div className="input-box">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-6">
                                        <span>পুরাতন</span>
                                        <div className="input-box">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="custom-card">
                                    <div className="custom-card-subtitle">
                                      অনাবাসিক
                                    </div>
                                    <div className="row">
                                      <div className="col-6">
                                        <span>নতুন</span>
                                        <div className="input-box">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-6">
                                        <span>পুরাতন</span>
                                        <div className="input-box">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12 col-lg-6 col-md-6">
                              <div className="custom-group-card">
                                <div className="custom-card-title section-title">
                                  <h4>ছাত্রী</h4>
                                </div>
                                <div className="card-container">
                                  <div className="custom-card">
                                    <div className="custom-card-subtitle">
                                      আবাসিক
                                    </div>
                                    <div className="row">
                                      <div className="col-6">
                                        <span>নতুন</span>
                                        <div className="input-box">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-6">
                                        <span>পুরাতন</span>
                                        <div className="input-box">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="custom-card">
                                    <div className="custom-card-subtitle">
                                      অনাবাসিক
                                    </div>
                                    <div className="row">
                                      <div className="col-6">
                                        <span>নতুন</span>
                                        <div className="input-box">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-6">
                                        <span>পুরাতন</span>
                                        <div className="input-box">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- ButtonGroup --> */}
                        <div className="button-group">
                          <button
                            className="custom-btn btn-primary d-sm-block"
                            type="submit"
                          >
                            Save
                          </button>
                          <button
                            className="custom-btn btn-dark d-sm-block"
                            type="submit"
                          >
                            New
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-5">
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
                              <th>শিক্ষাবর্ষ</th>
                              <th>মারহালা শ্রেণি</th>
                              <th>ফি এর নাম</th>
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
                              <th></th>
                              <td></td>
                              <td></td>
                            </tr>
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
                              <th></th>
                              <td></td>
                              <td></td>
                            </tr>
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
                              <th></th>
                              <td></td>
                              <td></td>
                            </tr>
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
                              <th></th>
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
      </section>
    </div>
  );
};

export default FeesDetermination;
