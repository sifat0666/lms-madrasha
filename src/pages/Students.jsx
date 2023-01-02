import React from "react";

const Students = () => {
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
                      <h4>শিক্ষাবর্ষ</h4>
                    </div>
                    <div className="my-4">
                      <form className="feesdeterminationa-form">
                        <div className="row mb-sm-1 mb-lg-3">
                          <label className="col-sm-12 col-md-12 col-lg-4 col-form-label info-lable">
                            শিক্ষাবর্ষ নির্বাচন করুনঃ
                          </label>
                          <div className="col-sm-12 col-md-12 col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="শিক্ষাবর্ষ (২০২২-২৩)"
                              required
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-12 col-md-12 col-lg-4 col-form-label info-lable">
                            আইডি
                            <i>*</i>
                          </label>
                          <div className="col-sm-12 col-md-12 col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="শিক্ষাবর্ষ"
                              required
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-12 col-md-12 col-lg-4 col-form-label info-lable">
                            শিক্ষাবর্ষের নাম
                            <i>*</i>
                          </label>
                          <div className="col-sm-12 col-md-12 col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="শিক্ষাবর্ষের নাম"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-12 col-md-12 col-lg-4 col-form-label info-lable">
                            বাংলা সন
                            <i>*</i>
                          </label>
                          <div className="col-sm-12 col-md-12 col-md-8 col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="বাংলা সন"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-12 col-lg-4 col-form-label info-lable">
                            আরবী হিজরী
                          </label>
                          <div className="col-sm-12 col-md-12 col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="আরবী হিজরী"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-12 col-lg-4 col-form-label info-lable">
                            আইডি কার্ড ইস্যু
                          </label>
                          <div className="col-sm-12 col-md-12 col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="আইডি কার্ড ইস্যু"
                            />
                          </div>
                        </div>
                        {/* <!-- ButtonGroup --> */}
                        <div className="button-container">
                          <div className="button-group">
                            <button
                              className="custom-btn btn-primary"
                              type="submit"
                            >
                              Save
                            </button>
                            <button
                              className="custom-btn btn-dark"
                              type="submit"
                            >
                              Show
                            </button>
                            <button
                              className="custom-btn btn-dark"
                              type="submit"
                            >
                              Update
                            </button>
                          </div>
                          <div className="button-group">
                            <button
                              className="custom-btn btn-primary"
                              type="submit"
                            >
                              New
                            </button>
                            <button
                              className="custom-btn btn-dark"
                              type="submit"
                            >
                              Close
                            </button>
                            <button
                              className="custom-btn btn-danger"
                              type="submit"
                            >
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
