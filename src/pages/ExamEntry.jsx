import React from "react";

const ExamEntry = () => {
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
                    <div class="col-lg-3 col-12">
                      <div class="row mb-3">
                        <label class="col-lg-4 col-12 col-form-label info-lable">
                          আইডিঃ
                          <i>*</i>
                        </label>
                        <div class="col-lg-8 col-12">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="আইডি"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-12">
                      <div class="row mb-3">
                        <label class="col-sm-4 col-form-label info-lable">
                          পরীক্ষার নামঃ
                          <i>*</i>
                        </label>
                        <div class="col-lg-8 col-12">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="পরীক্ষার নাম"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-5 col-12">
                      <div class="row mb-3">
                        <label class="col-lg-4 col-md-12 col-12 col-form-label info-lable">
                          পরীক্ষার নাম আরবীঃ
                          <i>*</i>
                        </label>
                        <div class="col-lg-8 col-12">
                          <input
                            type="text"
                            class="form-control"
                            placeholder=" পরীক্ষার নাম আরবী"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-12 d-flex justify-content-center w-100 payroll">
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
                            <th>আইডি</th>
                            <th>পরীক্ষার নাম</th>
                            <th>পরীক্ষার নাম আরবী</th>
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

export default ExamEntry;
