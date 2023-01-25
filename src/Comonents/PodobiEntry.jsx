import React from "react";

const PodobiEntry = () => {
  return (
    <div>
      {" "}
      <div
        className="modal fade"
        id="adddesignation"
        aria-hidden="true"
        tabindex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="section-title">
              <h4>পদবীর নাম যোগ করুন</h4>
            </div>
            <form>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12 w-100">
                    <div className="row">
                      <div className="col-12">
                        <div className="my-4">
                          <div className="row mb-3">
                            <label className="col-sm-3 col-form-label info-lable">
                              পদবীর নামঃ
                            </label>
                            <div className="col-8">
                              <input
                                required
                                type="text"
                                className="form-control"
                                placeholder="পদবীর নাম"
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <label className="col-sm-3 col-form-label info-lable">
                              মন্তব্যঃ
                            </label>
                            <div className="col-8">
                              <input
                                required
                                type="text"
                                className="form-control"
                                placeholder="মন্তব্য"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 addbank">
                        <div className="button-group">
                          <a href="#" className="custom-btn btn-primary">
                            Save
                          </a>
                          <button className="custom-btn btn-dark" type="submit">
                            Update
                          </button>
                          <button
                            className="custom-btn btn-primary"
                            type="submit"
                          >
                            New
                          </button>
                          <button
                            className="custom-btn btn-danger"
                            data-bs-dismiss="modal"
                            onclick="javascript:void(0)"
                            type="button"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="table-data mt-4">
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
                                  <th></th>
                                  <th>ক্রমিক নং</th>
                                  <th>পদবীর নাম</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th></th>
                                  <td>০১</td>
                                  <td>মুহতামিম</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০২</td>
                                  <td>নায়েবে মুহতামিম শায়খুল হাদীস</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০৩</td>
                                  <td>প্রধান মুফতী কাম- শায়খে ছানী</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০৪</td>
                                  <td>শিক্ষাসচিব কাম- সিনিয়র মুহাদ্দিস</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০৪</td>
                                  <td>সিনিয়র মুহাদ্দিস</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০৪</td>
                                  <td>মুহাদ্দিস</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০৪</td>
                                  <td>সিনিয়র ইস্তাদ</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০৪</td>
                                  <td>উস্তাদে মুহতারাম</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০৪</td>
                                  <td>উস্তাদ হিফজ বিভাগ</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০৪</td>
                                  <td>উস্তাদ নাজেরা বিভাগ</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০৪</td>
                                  <td>উস্তাদ নূরানী বিভাগ</td>
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
              <div className="modal-footer">
                <div className="button-group">
                  <button className="custom-btn btn-primary" type="submit">
                    Save
                  </button>
                  <button
                    className="custom-btn btn-dark"
                    data-bs-dismiss="modal"
                    onclick="javascript:void(0)"
                    type="button"
                  >
                    Close
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodobiEntry;
