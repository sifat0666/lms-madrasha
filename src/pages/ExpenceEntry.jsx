import React from "react";

const ExpenceEntry = () => {
  return (
    <div>
      <section class="user-form-section">
        <div class="section-bg">
          <div class="row">
            <div class="col-md-12 w-100">
              <div class="main-container">
                <div class="row">
                  <div class="col-lg-5 col-md-12 col-sm-12">
                    <div class="section-title">
                      <h4>ব্যয় এন্ট্রি</h4>
                    </div>
                    <div class="my-4">
                      <form class="incomeExpance-form">
                        <div class="row mb-3">
                          <label class="col-12 col-md-4 col-lg-4 col-form-label info-lable">
                            ফান্ডঃ
                          </label>
                          <div class="col-12 col-md-8 col-lg-8">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="ফান্ড"
                            />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-12 col-md-4 col-lg-4 col-form-label info-lable">
                            ট্রানজেকশন আইডিঃ
                          </label>
                          <div class="col-12 col-md-8 col-lg-8">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="ট্রানজেকশন আইডি"
                            />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-12 col-md-4 col-lg-4 col-form-label info-lable">
                            আয়/ব্যয় তারিখঃ
                          </label>
                          <div class="col-12 col-md-8 col-lg-8">
                            <input
                              type="date"
                              class="form-control"
                              placeholder="আয়/ব্যয় তারিখ"
                            />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-12 col-md-4 col-lg-4 col-form-label info-lable">
                            চার্ট অফ একাউন্টঃ
                          </label>
                          <div class="col-12 col-md-8 col-lg-8">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="চার্ট অফ একাউন্ট"
                            />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-12 col-md-4 col-lg-4 col-form-label info-lable">
                            জেনারেল লেজারঃ
                          </label>
                          <div class="col-12 col-md-8 col-lg-8">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="জেনারেল লেজার"
                            />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-12 col-md-4 col-lg-4 col-form-label info-lable">
                            সাব লেজারঃ
                          </label>
                          <div class="col-12 col-md-8 col-lg-8">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="সাব লেজার"
                            />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-12 col-md-4 col-lg-4 col-form-label info-lable">
                            রশিদ/ভাউচার নংঃ
                          </label>
                          <div class="col-6 col-md-5 col-lg-5">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="রশিদ/ভাউচার নং"
                            />
                          </div>
                          <div class="col-6 col-md-3 col-lg-3">
                            <div class="input-group d-flex align-items-center gap-3">
                              <span class="">ক্যাশ বই</span>
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                name="checkbox"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row mb-3 mb-sm-2">
                          <label class="col-12 col-md-4 col-lg-4 col-form-label info-lable">
                            পরিমাণঃ
                          </label>
                          <div class="col-12 col-md-8 col-lg-8">
                            <input
                              type="number"
                              class="form-control"
                              placeholder="পরিমাণ "
                            />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-12 col-md-4 col-lg-4 col-form-label info-lable">
                            মন্তব্যঃ
                          </label>
                          <div class="col-12 col-md-8 col-lg-8">
                            <textarea
                              class="form-control"
                              placeholder="মন্তব্য"
                            ></textarea>
                          </div>
                        </div>
                        <div class="button-group">
                          <button class="custom-btn btn-primary" type="submit">
                            Save
                          </button>
                          <button class="custom-btn btn-dark" type="reset">
                            Close
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-7 col-sm-12">
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

export default ExpenceEntry;
