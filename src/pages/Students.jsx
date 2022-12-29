import React from "react";

const Students = () => {
  return (
    <div>
      <section class="user-form-section">
        <div class="section-bg">
          <div class="row">
            <div class="col-md-12 w-100">
              <div class="main-container">
                <div class="row">
                  <div class="col-12">
                    <div class="section-title">
                      <h4>শিক্ষাবর্ষ</h4>
                    </div>
                    <div class="my-4">
                      <form class="feesdeterminationa-form">
                        <div class="row mb-sm-1 mb-lg-3">
                          <label class="col-sm-12 col-md-12 col-lg-4 col-form-label info-lable">
                            শিক্ষাবর্ষ নির্বাচন করুনঃ
                          </label>
                          <div class="col-sm-12 col-md-12 col-lg-8">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="শিক্ষাবর্ষ (২০২২-২৩)"
                              required
                            />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-sm-12 col-md-12 col-lg-4 col-form-label info-lable">
                            আইডি
                            <i>*</i>
                          </label>
                          <div class="col-sm-12 col-md-12 col-lg-8">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="শিক্ষাবর্ষ"
                              required
                            />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-sm-12 col-md-12 col-lg-4 col-form-label info-lable">
                            শিক্ষাবর্ষের নাম
                            <i>*</i>
                          </label>
                          <div class="col-sm-12 col-md-12 col-lg-8">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="শিক্ষাবর্ষের নাম"
                            />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-sm-12 col-md-12 col-lg-4 col-form-label info-lable">
                            বাংলা সন
                            <i>*</i>
                          </label>
                          <div class="col-sm-12 col-md-12 col-md-8 col-lg-8">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="বাংলা সন"
                            />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-sm-12 col-lg-4 col-form-label info-lable">
                            আরবী হিজরী
                          </label>
                          <div class="col-sm-12 col-md-12 col-lg-8">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="আরবী হিজরী"
                            />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-sm-12 col-lg-4 col-form-label info-lable">
                            আইডি কার্ড ইস্যু
                          </label>
                          <div class="col-sm-12 col-md-12 col-lg-8">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="আইডি কার্ড ইস্যু"
                            />
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
                              Show
                            </button>
                            <button class="custom-btn btn-dark" type="submit">
                              Update
                            </button>
                          </div>
                          <div class="button-group">
                            <button
                              class="custom-btn btn-primary"
                              type="submit"
                            >
                              New
                            </button>
                            <button class="custom-btn btn-dark" type="submit">
                              Close
                            </button>
                            <button class="custom-btn btn-danger" type="submit">
                              Delete
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
      </section>
    </div>
  );
};

export default Students;
