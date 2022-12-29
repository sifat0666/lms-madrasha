import React from "react";

const ExamFeesDetermination = () => {
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
                      <h4>পরীক্ষার নাম এন্ট্রি ফর্ম</h4>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-12">
                      <div class="row mb-3">
                        <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                          শিক্ষাবর্ষ
                          <i>*</i>
                        </label>
                        <div class="col-lg-6 col-md-6 col-10">
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
                        <div class="col-2">
                          <span class="addbutton">
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#membertype"
                            >
                              <i class="bi bi-plus-circle-fill"></i>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                      <div class="row mb-3">
                        <label class="col-sm-4 col-form-label info-lable">
                          ক্লাস/জামাত
                          <i>*</i>
                        </label>
                        <div class="col-lg-6 col-md-6 col-10">
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
                        <div class="col-2">
                          <span class="addbutton">
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#membertype"
                            >
                              <i class="bi bi-plus-circle-fill"></i>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-12">
                      <div class="row mb-3">
                        <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                          পরীক্ষার নাম
                          <i>*</i>
                        </label>
                        <div class="col-lg-6 col-md-6 col-10">
                          <select class="form-select">
                            <option selected="">শ্রেণী নির্বাচন করুন</option>
                            <option>প্রথম সাময়িক পরীক্ষা</option>
                            <option>দ্বিতীয় সাময়িক পরীক্ষা</option>
                            <option>তৃতীয় সাময়িক পরীক্ষা</option>
                            <option>বোর্ড পরীক্ষা</option>
                            <option>মাসিক পরীক্ষা</option>
                          </select>
                        </div>
                        <div class="col-2">
                          <span class="addbutton">
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#membertype"
                            >
                              <i class="bi bi-plus-circle-fill"></i>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                      <div class="row mb-3">
                        <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                          ফি
                          <i>*</i>
                        </label>
                        <div class="col-lg-6 col-md-6 col-10">
                          <input
                            type="number"
                            class="form-control"
                            placeholder="পরীক্ষার ফি"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 d-flex justify-content-center w-100 payroll">
                    <div class="button-group w-100">
                      <button class="custom-btn btn-primary">Save</button>
                      <button class="custom-btn btn-info">Show</button>
                      <button class="custom-btn btn-dark">New</button>
                      <button class="custom-btn btn-danger">Delete</button>
                    </div>
                  </div>
                </div>
                <div class="row my-3">
                  <div class="col-12">
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
                            <th>শিক্ষাবর্ষ</th>
                            <th>ক্লাস</th>
                            <th>পরীক্ষার নাম</th>
                            <th>ফি</th>
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
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
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

export default ExamFeesDetermination;
