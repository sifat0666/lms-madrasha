import React from "react";

const StudentAttandance = () => {
  return (
    <div>
      <section class="user-form-section d-print-none">
        <div class="section-bg">
          <div class="row">
            <div class="col-md-12 w-100">
              <div class="main-container">
                <div class="row">
                  <div class="col-12">
                    <div class="section-title">
                      <h4>শিক্ষার্থীদের হাজিরা</h4>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="row">
                      <div class="col-lg-3 col-md-6 col-12">
                        <div class="row">
                          <label class="col-lg-5 col-md-5 col-12 col-form-label info-lable">
                            ক্লাস/জামাত
                          </label>
                          <div class="col-lg-7 col-md-7 col-12">
                            <select class="form-select">
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
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-6 col-12">
                        <div class="row">
                          <label class="col-lg-5 col-md-5 col-12 col-form-label info-lable">
                            শিক্ষাবর্ষ
                          </label>
                          <div class="col-lg-7 col-md-7 col-12">
                            <select class="form-select">
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
                      <div class="col-lg-6 col-md-12 col-12 mt-md-2">
                        <div class="row">
                          <label class="col-lg-2 col-md-2 col-12 col-form-label info-lable">
                            এন্ট্রি তারিখ
                          </label>
                          <div class="col-lg-5 col-md-4 col-12">
                            <input type="date" class="form-control" />
                          </div>
                          <div class="col-lg-5 col-md-4 col-12 mt-2 mt-md-0">
                            <button
                              type="submit"
                              class="custom-btn btn-primary d-block w-100"
                            >
                              Search
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mt-4">
                    <div
                      class="table-responsive accounts-table"
                      data-pattern="priority-columns"
                    >
                      <table
                        id="tech-companies-1"
                        class="table  bg-white text-center mb-0"
                      >
                        <thead class="text-center accounts-table-head">
                          <tr>
                            <th>ক্রমিক</th>
                            <th>আইডি</th>
                            <th>নাম</th>
                            <th>রোল নং</th>
                            <th>হাজিরা</th>
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
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>01</td>
                            <td>8052</td>
                            <td>আমিনুল ইসলাম</td>
                            <td>০৪</td>
                            <td>
                              <div class="entrytype-option justify-content-center">
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="options"
                                    onclick="presetAttendance()"
                                  />
                                  <label class="form-check-label" for="options">
                                    Present
                                  </label>
                                </div>
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="options"
                                    onclick="absentAttendance()"
                                  />
                                  <label class="form-check-label" for="options">
                                    Absent
                                  </label>
                                </div>
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="options"
                                    onclick=""
                                  />
                                  <label class="form-check-label" for="options">
                                    Half Day
                                  </label>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span class="action-edit">
                                <i class="bi bi-telephone"></i>
                              </span>
                            </td>
                            <td>
                              <span class="action-delete">
                                <i class="bi bi-trash3"></i>
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
      {/* <!-- Employe Add Section End --> */}
      {/* <!--Modal Section--> */}
      {/* <!-- Add Member Type  Modal Start--> */}
      <div class="modal fade" id="membertype" aria-hidden="true" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="section-title">
              <h4>সদস্যর ধরণ এন্ট্রি করুন</h4>
            </div>
            <form>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-12 w-100">
                    <div class="row">
                      <div class="col-12">
                        <div class="my-4">
                          <div class="row mb-3">
                            <label class="col-lg-3 col-md-3 col-12 col-form-label info-lable">
                              সদস্যর ধরণঃ
                            </label>
                            <div class="col-lg-8 col-md-8 col-12">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="সদস্যর ধরণ"
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label class="col-lg-3 col-md-3 col-12 col-form-label info-lable">
                              মন্তব্যঃ
                            </label>
                            <div class="col-lg-8 col-md-8 col-12">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="মন্তব্য"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 addbank">
                        <div class="button-group">
                          <a href="#" class="custom-btn btn-primary">
                            Save
                          </a>
                          <button class="custom-btn btn-dark" type="submit">
                            Update
                          </button>
                          <button class="custom-btn btn-primary" type="submit">
                            New
                          </button>
                          <button
                            class="custom-btn btn-danger"
                            data-bs-dismiss="modal"
                            onclick="javascript:void(0)"
                            type="button"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="table-data mt-4">
                          <div
                            class="table-responsive"
                            data-pattern="priority-columns"
                          >
                            <table
                              id="tech-companies-1"
                              class="table  bg-white table-bordered text-center"
                            >
                              <thead
                                class="text-center"
                                style={{
                                  backgroundColor: "#62659B",
                                  color: "white",
                                }}
                              >
                                <tr>
                                  <th></th>
                                  <th>ক্রমিক নং</th>
                                  <th>সদস্যর ধরণ</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th></th>
                                  <td>০১</td>
                                  <td>বদরী</td>
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
              <div class="modal-footer">
                <div class="button-group">
                  <button class="custom-btn btn-primary" type="submit">
                    Save
                  </button>
                  <button
                    class="custom-btn btn-dark"
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
      {/* <!--Add Member Type  Modal End--> */}
      {/* <!-- Add Payment Term  Modal Start--> */}
      <div class="modal fade" id="payterm" aria-hidden="true" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="section-title">
              <h4>টাকা দেওয়ার সময়কাল এন্ট্রি</h4>
            </div>
            <form>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-12 w-100">
                    <div class="row">
                      <div class="col-12">
                        <div class="my-4">
                          <div class="row mb-3">
                            <label class="col-lg-3 col-md-3 col-12 col-form-label info-lable">
                              সময়কাল
                            </label>
                            <div class="col-lg-8 col-md-8 col-12">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="সময়কাল"
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label class="col-lg-3 col-md-3 col-12 col-form-label info-lable">
                              মন্তব্যঃ
                            </label>
                            <div class="col-lg-8 col-md-8 col-12">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="মন্তব্য"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 addbank">
                        <div class="button-group">
                          <a href="#" class="custom-btn btn-primary">
                            Save
                          </a>
                          <button class="custom-btn btn-dark" type="submit">
                            Update
                          </button>
                          <button class="custom-btn btn-primary" type="submit">
                            New
                          </button>
                          <button
                            class="custom-btn btn-danger"
                            data-bs-dismiss="modal"
                            onclick="javascript:void(0)"
                            type="button"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="table-data mt-4">
                          <div
                            class="table-responsive"
                            data-pattern="priority-columns"
                          >
                            <table
                              id="tech-companies-1"
                              class="table  bg-white table-bordered text-center"
                            >
                              <thead
                                class="text-center"
                                style={{
                                  backgroundColor: "#62659B",
                                  color: "white",
                                }}
                              >
                                <tr>
                                  <th></th>
                                  <th>ক্রমিক নং</th>
                                  <th>সময়কাল</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th></th>
                                  <td>০১</td>
                                  <td>মাসিক</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০২</td>
                                  <td>বার্ষিক</td>
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
              <div class="modal-footer">
                <div class="button-group">
                  <button class="custom-btn btn-primary" type="submit">
                    Save
                  </button>
                  <button
                    class="custom-btn btn-dark"
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

export default StudentAttandance;
