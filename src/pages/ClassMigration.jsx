import React from "react";

const ClassMigration = () => {
  return (
    <div>
      <div class="user-form-section">
        <div class="section-bg">
          <div class="row">
            <div class="col-md-12 w-100">
              <div class="main-container">
                <div class="row">
                  <div class="col-12">
                    <div class="section-title">
                      <h4>শিক্ষার্থীর ক্লাস পরিবর্তন</h4>
                    </div>
                    <div class="my-4">
                      <form class="feesdeterminationa-form">
                        <div class="row mb-lg-3 mb-1">
                          <label class="col-md-4 col-sm-12 col-form-label info-lable">
                            সিরিয়াল নংঃ
                            <i>*</i>
                          </label>
                          <div class="col-md-8 col-sm-12">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="সিরিয়াল নং"
                              required
                            />
                          </div>
                        </div>
                        <div class="row mb-lg-3 mb-1">
                          <label class="col-md-4 col-sm-12 col-form-label info-lable">
                            ছাত্র/ছাত্রীর নামঃ
                            <i>*</i>
                          </label>
                          <div class="col-md-8 col-sm-12">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="ছাত্র/ছাত্রীর নাম"
                            />
                          </div>
                        </div>
                        <div class="row mb-lg-3 mb-1">
                          <label class="col-md-4 col-sm-12 col-form-label info-lable">
                            পিতার নামঃ
                          </label>
                          <div class="col-md-8 col-sm-12">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="পিতার নাম"
                            />
                          </div>
                        </div>
                        <div class="row mb-lg-3 mb-1">
                          <label class="col-md-4 col-sm-12 col-form-label info-lable">
                            শ্রেণী/মারহালাঃ
                          </label>
                          <div class="col-md-8 col-sm-12">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="শ্রেণী/মারহালা"
                            />
                          </div>
                        </div>
                        <div class="row mb-lg-3 mb-1">
                          <label class="col-md-4 col-sm-12 col-form-label info-lable">
                            শিক্ষার্থীর আইডিঃ
                          </label>
                          <div class="col-md-8 col-sm-12">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="শিক্ষার্থীর আইডি"
                            />
                          </div>
                        </div>
                        <div class="row mb-lg-3 mb-1">
                          <label class="col-md-4 col-sm-12 col-form-label info-lable">
                            যে ক্লাশে স্থানান্তরিত হবেঃ
                            <i>*</i>
                          </label>
                          <div class="col-md-8 col-sm-12">
                            <select class="form-select">
                              <option selected>শ্রেণী নির্বাচন করুন</option>
                              <option>নাযেরা</option>
                              <option>হিফযুল কুরআন</option>
                              <option>ই দাদী</option>
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
                        </div>
                        <div class="row mb-lg-3 mb-1">
                          <label class="col-md-4 col-sm-12 col-form-label info-lable">
                            নতুন আইডিঃ
                          </label>
                          <div class="col-md-8 col-sm-12">
                            <input
                              type="text"
                              class="form-control"
                              placeholder=" নতুন আইডি"
                            />
                          </div>
                        </div>
                        <div class="row mt-5">
                          <div class="col-md-8 col-sm-12 offset-md-2 offset-0">
                            <div class="migration-container">
                              <div
                                class="migration-title"
                                style={{ backgroundColor: "#ffd9f5" }}
                              >
                                ক্লাস পরিবর্তনের ধরন
                              </div>
                              <div class="migration-type">
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="options"
                                  />
                                  <label
                                    class="form-check-label info-form-check"
                                    for="options"
                                  >
                                    আইডি পরিবর্তন না করে ক্লাস স্থানান্তর
                                  </label>
                                </div>
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="options"
                                  />
                                  <label
                                    class="form-check-label info-form-check"
                                    for="options"
                                  >
                                    আইডি পরিবর্তন করে ক্লাস স্থানান্তর
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- ButtonGroup --> */}
                        <div class="button-container">
                          <div class="button-group">
                            <button
                              class="custom-btn btn-primary"
                              type="submit"
                            >
                              Save
                            </button>
                            <button class="custom-btn btn-dark" type="submit">
                              New
                            </button>
                            <button class="custom-btn btn-danger" type="submit">
                              Close
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassMigration;
