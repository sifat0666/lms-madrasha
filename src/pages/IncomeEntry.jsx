import React from "react";

const IncomeEntry = () => {
  return (
    <div>
      <section className="user-form-section">
        <div className="section-bg">
          <div className="row">
            <div className="col-md-12 w-100">
              <div className="main-container">
                <div className="row">
                  <div className="col-lg-5 col-md-12 col-sm-12">
                    <div className="section-title">
                      <h4>আয় এন্ট্রি</h4>
                    </div>
                    <div className="my-4">
                      <form className="incomeExpance-form">
                        <div className="row mb-3">
                          <label className="col-12 col-md-4 col-lg-4 col-form-label info-lable">
                            ফান্ডঃ
                          </label>
                          <div className="col-12 col-md-8 col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="ফান্ড"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-12 col-md-4 col-lg-4 col-form-label info-lable">
                            ট্রানজেকশন আইডিঃ
                          </label>
                          <div className="col-12 col-md-8 col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="ট্রানজেকশন আইডি"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-12 col-md-4 col-lg-4 col-form-label info-lable">
                            আয়/ব্যয় তারিখঃ
                          </label>
                          <div className="col-12 col-md-8 col-lg-8">
                            <input
                              type="date"
                              className="form-control"
                              placeholder="আয়/ব্যয় তারিখ"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-12 col-md-4 col-lg-4 col-form-label info-lable">
                            চার্ট অফ একাউন্টঃ
                          </label>
                          <div className="col-12 col-md-8 col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="চার্ট অফ একাউন্ট"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-12 col-md-4 col-lg-4 col-form-label info-lable">
                            জেনারেল লেজারঃ
                          </label>
                          <div className="col-12 col-md-8 col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="জেনারেল লেজার"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-12 col-md-4 col-lg-4 col-form-label info-lable">
                            সাব লেজারঃ
                          </label>
                          <div className="col-12 col-md-8 col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="সাব লেজার"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-12 col-md-4 col-lg-4 col-form-label info-lable">
                            রশিদ/ভাউচার নংঃ
                          </label>
                          <div className="col-6 col-md-5 col-lg-5">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="রশিদ/ভাউচার নং"
                            />
                          </div>
                          <div className="col-6 col-md-3 col-lg-3">
                            <div className="input-group d-flex align-items-center gap-3">
                              <span className="">ক্যাশ বই</span>
                              <input
                                className="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                name="checkbox"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3 mb-sm-2">
                          <label className="col-12 col-md-4 col-lg-4 col-form-label info-lable">
                            পরিমাণঃ
                          </label>
                          <div className="col-12 col-md-8 col-lg-8">
                            <input
                              type="number"
                              className="form-control"
                              placeholder="পরিমাণ "
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-12 col-md-4 col-lg-4 col-form-label info-lable">
                            মন্তব্যঃ
                          </label>
                          <div className="col-12 col-md-8 col-lg-8">
                            <textarea
                              className="form-control"
                              placeholder="মন্তব্য"
                            ></textarea>
                          </div>
                        </div>
                        <div className="button-group">
                          <button
                            className="custom-btn btn-primary"
                            type="submit"
                          >
                            Save
                          </button>
                          <button className="custom-btn btn-dark" type="reset">
                            Close
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-7 col-sm-12">
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
                              <th>ট্রানঃ আইডি</th>
                              <th>ভাউচার</th>
                              <th>ধরণ</th>
                              <th>জেনারেল লেজার</th>
                              <th>সাব্জিজারি লেজার</th>
                              <th>পরিমাণ</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                              <th></th>
                              <th></th>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <th></th>
                              <th></th>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <th></th>
                              <th></th>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <th></th>
                              <th></th>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <th></th>
                              <th></th>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <th></th>
                              <th></th>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <th></th>
                              <th></th>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <th></th>
                              <th></th>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <th></th>
                              <th></th>
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
      </section>
    </div>
  );
};

export default IncomeEntry;
