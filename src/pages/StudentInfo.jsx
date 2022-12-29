import React from "react";

const StudentInfo = () => {
  return (
    <div>
      <section class="user-form-section">
        <div class="section-bg">
          <div class="row">
            <div class="col-md-12 w-100">
              <div class="main-container">
                <div class="row">
                  <div class="col-lg-7 col-md-12 col-sm-12">
                    <div class="section-title">
                      <h4>শিক্ষার্থীর তথ্য</h4>
                    </div>
                    <div class="my-4">
                      <form class="studentsinfo-form">
                        <div class="row">
                          <div class="col-lg-7 col-md-10 col-10">
                            <div class="row mb-3">
                              <label class="col-12 col-md-12 col-lg-4 col-form-label info-lable">
                                শিক্ষাবর্ষঃ
                                <i>*</i>
                              </label>
                              <div class="col-lg-8 col-sm-12 col-md-12">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="শিক্ষাবর্ষ"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-5 col-md-2 col-2">
                            <div class="row mb-3">
                              <div class="option-icon">
                                <span>
                                  <a href="#">
                                    <i class="bi bi-info-circle-fill"></i>
                                  </a>
                                </span>
                                <span>
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#admissonModal"
                                  >
                                    <i class="bi bi-gear-fill"></i>
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12 col-md-12 col-lg-7">
                            <div class="row mb-3">
                              <label class="col-12 col-md-12 col-lg-4 col-form-label info-lable">
                                ক্লাশঃ
                                <i>*</i>
                              </label>
                              <div class="col-12 col-md-12 col-lg-8">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="ক্লাশ"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-12 col-md-12 col-lg-5">
                            <div class="row">
                              <div class="option-subtext">
                                <h6>স্থায়ী ঠিকানা</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-7 col-md-12 col-12">
                            <div class="row mb-3">
                              <label class="col-12 col-md-12 col-lg-4 col-form-label info-lable">
                                নতুন/পুরাতনঃ
                                <i>*</i>
                              </label>
                              <div class="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="নতুন/পুরাতন"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-5 col-md-12 col-12">
                            <div class="row mb-3">
                              <label class="col-12 col-md-12 col-lg-4 col-form-label info-lable">
                                গ্রামঃ
                                <i>*</i>
                              </label>
                              <div class="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="গ্রাম"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-7 col-md-12 col-12">
                            <div class="row mb-1 mb-lg-3">
                              <label class="col-12 col-md-12 col-lg-4 col-form-label info-lable">
                                ছাত্রের আইডিঃ
                                <i>*</i>
                              </label>
                              <div class="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="ছাত্রের আইডি"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-5 col-md-12 col-12">
                            <div class="row mb-1 mb-lg-3">
                              <label class="col-12 col-md-12 col-lg-4 col-form-label info-lable">
                                ডাকঃ
                                <i>*</i>
                              </label>
                              <div class="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="ডাক"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-7 col-md-12 col-12">
                            <div class="row mb-3">
                              <label class="col-12 col-md-12 col-lg-4 col-form-label info-lable">
                                রোল নংঃ
                                <i>*</i>
                              </label>
                              <div class="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="রোল নং"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-5 col-md-12 col-12">
                            <div class="row mb-3">
                              <label class="col-12 col-md-12 col-lg-4 col-form-label info-lable">
                                থানাঃ
                                <i>*</i>
                              </label>
                              <div class="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="থানা"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-7 col-md-12 col-12">
                            <div class="row mb-3">
                              <div class="col-lg-7 col-md-12 col-12">
                                <div class="row">
                                  <label class="col-lg-7 col-12 col-md-12 col-form-label info-lable">
                                    ছাত্র/ছাত্রীঃ
                                    <i>*</i>
                                  </label>
                                  <div class="col-lg-5 col-12 col-md-12">
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="ছাত্র/ছাত্রী"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-5 col-md-12 col-12">
                                <div class="row">
                                  <label class="col-lg-5 col-12 col-md-12 col-form-label info-lable">
                                    ফর্ম নাঃ
                                    <i>*</i>
                                  </label>
                                  <div class="col-lg-7 col-12 col-md-12">
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="ফর্ম নাঃ"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-5 col-12 col-md-12">
                            <div class="row mb-lg-3 mb-1">
                              <label class="col-lg-4 col-12 col-md-12 col-form-label info-lable">
                                জেলাঃ
                                <i>*</i>
                              </label>
                              <div class="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="জেলা"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-7 col-12 col-md-12">
                            <div class="row">
                              <label class="col-lg-4 col-12 col-md-12 col-form-label info-lable">
                                অনাবাসিক/অনাবাসিকঃ
                                <i>*</i>
                              </label>
                              <div class="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="অনাবাসিক/অনাবাসিক"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-5 col-12 col-md-12">
                            <div class="row mb-lg-3 mb-1">
                              <div class="option-subtext">
                                <h6>বর্তমান ঠিকানা</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-7 col-12 col-md-12">
                            <div class="row mb-lg-3 mb-1">
                              <label class="col-lg-4 col-12 col-md-12 col-form-label info-lable">
                                শিক্ষার্থী নামঃ
                                <i>*</i>
                              </label>
                              <div class="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="শিক্ষার্থী নাম"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-5 col-12 col-md-12">
                            <div class="row mb-lg-3 mb-1">
                              <label class="col-lg-4 col-12 col-md-12 col-form-label info-lable">
                                গ্রামঃ
                                <i>*</i>
                              </label>
                              <div class="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="গ্রাম"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-7 col-12 col-md-12">
                            <div class="row mb-lg-3 mb-1">
                              <label class="col-lg-4 col-12 col-md-12 col-form-label info-lable">
                                পিতার নামঃ
                                <i>*</i>
                              </label>
                              <div class="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="পিতার নাম"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-5 col-12 col-md-12">
                            <div class="row mb-lg-3 mb-1">
                              <label class="col-lg-4 col-12 col-md-12 col-form-label info-lable">
                                থানাঃ
                                <i>*</i>
                              </label>
                              <div class="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="থানা"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-7 col-12 col-md-12">
                            <div class="row mb-lg-3 mb-1">
                              <label class="col-lg-4 col-12 col-md-12 col-form-label info-lable">
                                মাতার নামঃ
                                <i>*</i>
                              </label>
                              <div class="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="মাতার নাম"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-5 col-12 col-md-12">
                            <div class="row mb-lg-3 mb-1">
                              <label class="col-lg-4 col-12 col-md-12 col-form-label info-lable">
                                জেলাঃ
                                <i>*</i>
                              </label>
                              <div class="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="জেলা"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-7 col-12 col-md-12">
                            <div class="row mb-lg-3 mb-1">
                              <label class="col-lg-4 col-12 col-md-12 col-form-label info-lable">
                                জন্ম তারিখঃ
                                <i>*</i>
                              </label>
                              <div class="col-lg-8 col-12 col-md-12">
                                <input
                                  type="date"
                                  class="form-control"
                                  placeholder="মাতার নাম"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-5 col-12 col-md-12">
                            <div class="row mb-lg-3 mb-1">
                              <label class="col-lg-4 col-12 col-md-12 col-form-label info-lable">
                                মন্তব্যঃ
                                <i>*</i>
                              </label>
                              <div class="col-lg-8 col-12 col-md-12">
                                <textarea
                                  class="form-control"
                                  placeholder=" মন্তব্য"
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-7 col-12 col-md-12">
                            <div class="row mb-lg-3 mb-1">
                              <label class="col-lg-4 col-12 col-md-12 col-form-label info-lable">
                                NID/জন্ম নিবন্ধন
                                <i>*</i>
                              </label>
                              <div class="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="NID/জন্ম নিবন্ধন নং"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-5 col-12 col-md-12"></div>
                        </div>
                        <div class="row">
                          <div class="col-lg-7 col-12 col-md-12">
                            <div class="row mb-lg-3 mb-1">
                              <label class="col-sm-4 col-form-label info-lable">
                                জাতীয়তাঃ
                                <i>*</i>
                              </label>
                              <div class="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="জাতীয়তা"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-5 col-12 col-md-12"></div>
                        </div>
                        <div class="row">
                          <div class="col-lg-7 col-12 col-md-12">
                            <div class="row mb-lg-3 mb-1">
                              <label class="col-lg-4 col-12 col-md-12 col-form-label info-lable">
                                রক্তের গ্রুপঃ
                                <i>*</i>
                              </label>
                              <div class="col-lg-8 col-12 col-md-12">
                                <select class="form-select">
                                  <option selected>
                                    রক্তের গ্রুপ নির্বাচন করুন
                                  </option>
                                  <option>A+</option>
                                  <option>A-</option>
                                  <option>B+</option>
                                  <option>B-</option>
                                  <option>O+</option>
                                  <option>O-</option>
                                  <option>AB+</option>
                                  <option>AB-</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-5 col-12 col-md-12"></div>
                        </div>
                        <div class="row">
                          <div class="col-lg-7 col-12 col-md-12">
                            <div class="row mb-lg-3 mb-1">
                              <label class="col-sm-4 col-form-label info-lable">
                                এস. এম. এস যাবেঃ
                                <i>*</i>
                              </label>
                              <div class="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="এস. এম. এস যাবে"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-5 col-12 col-md-12"></div>
                        </div>
                        <div class="row">
                          <div class="col-lg-7 col-12 col-md-12">
                            <div class="row mb-lg-3 mb-1">
                              <label class="col-lg-4 col-12 col-md-12 col-form-label info-lable">
                                <i>*</i>
                              </label>
                              <div class="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="এস. এম. এস যাবে"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-5 col-12 col-md-12">
                            <div class="option-subtext">
                              <h6>ডাটাবেজ তথ্য</h6>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-7 col-12 col-md-12 offset-lg-5 offset-0">
                            <div class="row mb-lg-3 mb-1">
                              <label class="col-lg-7 col-12 col-md-12 col-form-label info-lable">
                                সর্বমোট ছাত্র সংখ্যাঃ
                                <i>*</i>
                              </label>
                              <div class="col-lg-5 col-12 col-md-12">
                                <input
                                  type="text"
                                  value="২০০"
                                  class="form-control"
                                  placeholder="সর্বমোট ছাত্র সংখ্যা"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-7 col-12 col-md offset-lg-5 offset-0">
                            <div class="row mb-lg-3 mb-1">
                              <label class="col-lg-7 col-12 col-md-12 col-form-label info-lable">
                                এই বছরের মোট ছাত্র সংখ্যাঃ
                                <i>*</i>
                              </label>
                              <div class="col-lg-5 col-12 col-md-12">
                                <input
                                  type="text"
                                  value="০৫"
                                  class="form-control"
                                  placeholder="এই বছরের মোট ছাত্র সংখ্যা"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="button-group my-4">
                          <a
                            href="#"
                            class="custom-btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#admissonfees"
                          >
                            Save
                          </a>
                          <button class="custom-btn btn-dark" type="submit">
                            Show
                          </button>
                          <button class="custom-btn btn-dark" type="submit">
                            Update
                          </button>
                          <button class="custom-btn btn-primary" type="submit">
                            New
                          </button>
                          <button class="custom-btn btn-dark" type="submit">
                            Close
                          </button>
                          <button class="custom-btn btn-danger" type="submit">
                            Delete
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-lg-5 col-12 col-md-12">
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
                                <select class="form-select">
                                  <option value=""></option>
                                  <option>তাকমিল</option>
                                  <option>মক্তব</option>
                                  <option>হিফজুল কুরআন</option>
                                  <option>পরীক্ষামূলক মারহালা</option>
                                </select>
                              </th>
                              <th>
                                <select class="form-select">
                                  <option value=""></option>
                                  <option>তাকমিল</option>
                                  <option>মক্তব</option>
                                  <option>হিফজুল কুরআন</option>
                                  <option>পরীক্ষামূলক মারহালা</option>
                                </select>
                              </th>
                              <th>
                                <select class="form-select">
                                  <option value=""></option>
                                  <option>তাকমিল</option>
                                  <option>মক্তব</option>
                                  <option>হিফজুল কুরআন</option>
                                  <option>পরীক্ষামূলক মারহালা</option>
                                </select>
                              </th>
                              <th>
                                <button class="btn btn-success btn-sm">
                                  খুজুন
                                </button>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                              <th></th>
                              <th></th>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <th></th>
                              <th></th>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <th></th>
                              <th></th>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <th></th>
                              <th></th>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <th></th>
                              <th></th>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <th></th>
                              <th></th>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <th></th>
                              <th></th>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <th></th>
                              <th></th>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <th></th>
                              <th></th>
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
      {/* <!-- Create Student Information form END --> */}
      {/* <!--Modal Section--> */}
      {/* <!--Admisson settings Releted Modal Start--> */}
      <div
        class="modal fade"
        id="admissonModal"
        aria-hidden="true"
        tabindex="-1"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="section-title">
              <h4>ছাত্রের তথ্য এন্ট্রি সেটিংস</h4>
            </div>
            <div class="modal-body">
              <div class="settings-container">
                <div class="settings-item">
                  <div>
                    <h6>ভর্তির রশিদ</h6>
                  </div>
                  <div class="settings-options">
                    <div class="options">
                      <input
                        class="form-check-input mt-0"
                        type="checkbox"
                        value=""
                        aria-label="Checkbox for following text input"
                        name="checkbox"
                      />
                      <span class="">সেইভ এর সাথে সাথে রসিদ</span>
                    </div>
                    <div class="options">
                      <input
                        class="form-check-input mt-0"
                        type="checkbox"
                        value=""
                        aria-label="Checkbox for following text input"
                        name="checkbox"
                      />
                      <span class="">পরে</span>
                    </div>
                    <div class="options">
                      <input
                        class="form-check-input mt-0"
                        type="checkbox"
                        value=""
                        aria-label="Checkbox for following text input"
                        name="checkbox"
                      />
                      <span class="">ভর্তি ফি বিহীন (ফ্রি)</span>
                    </div>
                  </div>
                  <p>
                    ছাত্র এন্ট্রির সময় যে সকল বক্সে তথ্য এন্ট্রি করার প্রয়োজন
                    মনে হয় সেগুলোকে ঠিক চিহ্ন দিতে হবে।
                  </p>
                </div>
                <div class="entrytype-option">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="options"
                    />
                    <label class="form-check-label" for="options">
                      রোল নাম্বার
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="options"
                    />
                    <label class="form-check-label" for="options">
                      ফরম নাম্বার
                    </label>
                  </div>
                </div>
                <div class="settings-item mt-3">
                  <div>
                    <h6>থাকা খাওয়ার অবস্থা</h6>
                  </div>
                  <div class="settings-options">
                    <div class="options">
                      <input
                        class="form-check-input mt-0"
                        type="checkbox"
                        value=""
                        aria-label="Checkbox for following text input"
                        name="checkbox"
                      />
                      <span class="">আবাসিক</span>
                    </div>
                    <div class="options">
                      <input
                        class="form-check-input mt-0"
                        type="checkbox"
                        value=""
                        aria-label="Checkbox for following text input"
                        name="checkbox"
                      />
                      <span class="">অনাবাসিক</span>
                    </div>
                    <div class="options">
                      <input
                        class="form-check-input mt-0"
                        type="checkbox"
                        value=""
                        aria-label="Checkbox for following text input"
                        name="checkbox"
                      />
                      <span class="">এন্ট্রির মাধ্যমে</span>
                    </div>
                  </div>
                  <p class="text-center my-2">
                    "ক খ" মাদরাসায় আপনার সন্তানের ভর্তি সম্পন্ন করা হয়েছে।
                  </p>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <div class="button-group">
                <button class="custom-btn btn-primary" type="submit">
                  Save
                </button>
                <button class="custom-btn btn-dark" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Admisson settings Releted Modal End--> */}
      {/* <!--Admisson Fees Collect Modal Start--> */}
      <div
        class="modal fade"
        id="admissonfees"
        aria-hidden="true"
        tabindex="-1"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="section-title">
              <h4>ভর্তি ফি গ্রহণ</h4>
            </div>
            <form>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-12 w-100">
                    <div class="row">
                      <div class="col-6">
                        <div class="my-4">
                          <div class="row mb-3">
                            <label class="col-sm-4 col-form-label info-lable">
                              ভাউচার নংঃ
                            </label>
                            <div class="col-8">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="ভাউচার নং"
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label class="col-sm-4 col-form-label info-lable">
                              ছাত্রের আইডিঃ
                            </label>
                            <div class="col-8">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="ছাত্রের আইডি"
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label class="col-sm-4 col-form-label info-lable">
                              কর্তনঃ
                            </label>
                            <div class="col-8">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="কর্তন"
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label class="col-sm-4 col-form-label info-lable">
                              পরিমাণঃ
                            </label>
                            <div class="col-8">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="পরিমাণ"
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label class="col-sm-4 col-form-label info-lable">
                              মন্তব্যঃ
                            </label>
                            <div class="col-8">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="মন্তব্য"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
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
                                  <th>ফি এর ধরন</th>
                                  <th>টাকা</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th></th>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
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
      {/* <!--Admisson Fees Collect Modal End--> */}
      {/* <!--Class Migration  Modal Start--> */}
      <div
        class="modal fade"
        id="stdentmigrattion"
        aria-hidden="true"
        tabindex="-1"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="section-title">
              <h4>শিক্ষার্থীর ক্লাস পরিবর্তন</h4>
            </div>
            <form>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-12 w-100">
                    <div class="row">
                      <div class="col-12">
                        <div class="my-4">
                          <div class="row mb-3">
                            <label class="col-sm-4 col-form-label info-lable">
                              সিরিয়াল নংঃ
                              <i>*</i>
                            </label>
                            <div class="col-8">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="সিরিয়াল নং"
                                required
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label class="col-sm-4 col-form-label info-lable">
                              ছাত্র/ছাত্রীর নামঃ
                              <i>*</i>
                            </label>
                            <div class="col-8">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="ছাত্র/ছাত্রীর নাম"
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label class="col-sm-4 col-form-label info-lable">
                              পিতার নামঃ
                            </label>
                            <div class="col-8">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="পিতার নাম"
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label class="col-sm-4 col-form-label info-lable">
                              শ্রেণী/মারহালাঃ
                            </label>
                            <div class="col-8">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="শ্রেণী/মারহালা"
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label class="col-sm-4 col-form-label info-lable">
                              শিক্ষার্থীর আইডিঃ
                            </label>
                            <div class="col-8">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="শিক্ষার্থীর আইডি"
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label class="col-sm-4 col-form-label info-lable">
                              যে ক্লাশে স্থানান্তরিত হবেঃ
                              <i>*</i>
                            </label>
                            <div class="col-8">
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
                          <div class="row mb-3">
                            <label class="col-sm-4 col-form-label info-lable">
                              নতুন আইডিঃ
                            </label>
                            <div class="col-8">
                              <input
                                type="text"
                                class="form-control"
                                placeholder=" নতুন আইডি"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row mt-4">
                      <div class="col-12">
                        <div class="migration-container">
                          <div class="migration-title">
                            ক্লাস পরিবর্তনের ধরন
                          </div>
                          <div class="migration-type">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="options"
                              />
                              <label class="form-check-label" for="options">
                                আইডি পরিবর্তন না করে ক্লাস স্থানান্তর
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="options"
                              />
                              <label class="form-check-label" for="options">
                                আইডি পরিবর্তন করে ক্লাস স্থানান্তর
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <div class="button-group">
                  <button
                    class="custom-btn btn-primary"
                    type="submit"
                    data-bs-toggle="modal"
                    data-bs-target="#admissonfees"
                  >
                    Save
                  </button>
                  <button class="custom-btn btn-dark" type="submit">
                    New
                  </button>
                  <button
                    class="custom-btn btn-danger d-block"
                    type="button"
                    data-bs-dismiss="modal"
                    onclick="javascript:void(0)"
                  >
                    Close
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!--Class Migration Modal End--> */}
    </div>
  );
};

export default StudentInfo;
