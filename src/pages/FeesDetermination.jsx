import React from "react";

const FeesDetermination = () => {
  return (
    <div>
      <section class="user-form-section">
        <div class="section-bg">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-lg-12 w-100">
              <div class="main-container">
                <div class="row">
                  <div class="col-12 col-md-12 col-lg-7">
                    <div class="section-title">
                      <h4>ফি নির্ধারণ</h4>
                    </div>
                    <div class="my-4">
                      <form class="feesdeterminationa-form">
                        <div class="row mb-3">
                          <div class="offset-lg-2 offset-sm-0 col-lg-4 col-6">
                            <div class="input-group d-flex align-items-center gap-3">
                              <span class="">ভর্তি ফি</span>
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                name="checkbox"
                              />
                            </div>
                          </div>
                          <div class="offset-lg-2 offset-sm-0 col-lg-4 col-6">
                            <div class="input-group d-flex align-items-center gap-3">
                              <span class="">মাসিক ফি</span>
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                name="checkbox"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-12 col-md-12 col-lg-4 col-form-label info-lable">
                            শিক্ষাবর্ষঃ
                          </label>
                          <div class="col-12 col-md-12 col-lg-8">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="শিক্ষাবর্ষ"
                            />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-12 col-md-12 col-lg-4 col-form-label info-lable">
                            মারহালা/শ্রেণীঃ
                          </label>
                          <div class="col-12 col-md-12 col-lg-8">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="মারহালা/শ্রেণী"
                            />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-12 col-md-12 col-lg-4 col-form-label info-lable">
                            ফি এর নামঃ
                          </label>
                          <div class="col-12 col-md-12 col-lg-8">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="ফি এর নাম"
                            />
                          </div>
                        </div>
                        {/* <!--Card Section--> */}
                        <div class="group-card-container">
                          <div class="row">
                            <div class="col-sm-12 col-lg-6 col-md-6">
                              <div class="custom-group-card">
                                <div class="custom-card-title section-title">
                                  <h4>ছাত্র</h4>
                                </div>
                                <div class="card-container">
                                  <div class="custom-card">
                                    <div class="custom-card-subtitle">
                                      আবাসিক
                                    </div>
                                    <div class="row">
                                      <div class="col-6">
                                        <span>নতুন</span>
                                        <div class="input-box">
                                          <input
                                            type="text"
                                            class="form-control"
                                            placeholder=""
                                          />
                                        </div>
                                      </div>
                                      <div class="col-6">
                                        <span>পুরাতন</span>
                                        <div class="input-box">
                                          <input
                                            type="text"
                                            class="form-control"
                                            placeholder=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="custom-card">
                                    <div class="custom-card-subtitle">
                                      অনাবাসিক
                                    </div>
                                    <div class="row">
                                      <div class="col-6">
                                        <span>নতুন</span>
                                        <div class="input-box">
                                          <input
                                            type="text"
                                            class="form-control"
                                            placeholder=""
                                          />
                                        </div>
                                      </div>
                                      <div class="col-6">
                                        <span>পুরাতন</span>
                                        <div class="input-box">
                                          <input
                                            type="text"
                                            class="form-control"
                                            placeholder=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-12 col-lg-6 col-md-6">
                              <div class="custom-group-card">
                                <div class="custom-card-title section-title">
                                  <h4>ছাত্রী</h4>
                                </div>
                                <div class="card-container">
                                  <div class="custom-card">
                                    <div class="custom-card-subtitle">
                                      আবাসিক
                                    </div>
                                    <div class="row">
                                      <div class="col-6">
                                        <span>নতুন</span>
                                        <div class="input-box">
                                          <input
                                            type="text"
                                            class="form-control"
                                            placeholder=""
                                          />
                                        </div>
                                      </div>
                                      <div class="col-6">
                                        <span>পুরাতন</span>
                                        <div class="input-box">
                                          <input
                                            type="text"
                                            class="form-control"
                                            placeholder=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="custom-card">
                                    <div class="custom-card-subtitle">
                                      অনাবাসিক
                                    </div>
                                    <div class="row">
                                      <div class="col-6">
                                        <span>নতুন</span>
                                        <div class="input-box">
                                          <input
                                            type="text"
                                            class="form-control"
                                            placeholder=""
                                          />
                                        </div>
                                      </div>
                                      <div class="col-6">
                                        <span>পুরাতন</span>
                                        <div class="input-box">
                                          <input
                                            type="text"
                                            class="form-control"
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
                        <div class="button-group">
                          <button
                            class="custom-btn btn-primary d-sm-block"
                            type="submit"
                          >
                            Save
                          </button>
                          <button
                            class="custom-btn btn-dark d-sm-block"
                            type="submit"
                          >
                            New
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-12 col-lg-5">
                    <div class="table-data mt-4">
                      <div class="row form-group searchbar">
                        <div class="col-sm-6 position-relative search">
                          <i class="bi bi-search search-icon"></i>
                          <input
                            class="form-control"
                            type="search"
                            placeholder="Search"
                          />
                        </div>
                      </div>
                      <div
                        class="table-responsive"
                        data-pattern="priority-columns"
                      >
                        <table
                          id="tech-companies-1"
                          class="table  bg-white table-bordered text-center"
                        >
                          <thead class="text-center accounts-table-head">
                            <tr>
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
                              <th>শিক্ষাবর্ষ</th>
                              <th>মারহালা শ্রেণি</th>
                              <th>ফি এর নাম</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
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
                              <th></th>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
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
                              <th></th>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
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
                              <th></th>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
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
