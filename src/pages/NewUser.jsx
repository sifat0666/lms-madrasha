import React from "react";

const NewUser = () => {
  return (
    <div>
      <main class="page-bg">
        {/* <!-- Create New User form Start --> */}
        <section class="user-form-section">
          <div class="section-bg">
            <div class="user-form">
              <div class="">
                <div class="row">
                  <div class="col-md-12 col-lg-6 col-sm-12 user-form-create d-block">
                    <form action="">
                      <div class="row bottom-border">
                        <div class="col-md-12 col-sm-12 col-lg-12 w-100">
                          <div class="user-create-form">
                            <div class="title">
                              <span>
                                <i class="bi bi-person-square"></i>
                              </span>
                              <span>ব্যবহারকারীর প্রোফাইল তৈরি</span>
                            </div>
                            <div class="my-4">
                              <div class="row form-group mb-3">
                                <label class="col-sm-12 col-md-12 col-lg-3 col-form-label">
                                  আইডিঃ
                                </label>
                                <div class="col-sm-12 col-lg-7">
                                  <input
                                    class="form-control"
                                    type="text"
                                    placeholder="আইডি"
                                  />
                                </div>
                              </div>
                              <div class="row form-group mb-3">
                                <label class="col-sm-12 col-lg-3 col-form-label">
                                  ইউজার নেমঃ
                                </label>
                                <div class="col-lg-7 col-sm-12">
                                  <input
                                    class="form-control"
                                    type="text"
                                    placeholder="ইউজার নেম"
                                  />
                                </div>
                              </div>
                              <div class="row form-group mb-3">
                                <label class="col-lg-3 col-sm-12 col-form-label">
                                  পাসওয়ার্ডঃ
                                </label>
                                <div class="col-lg-7 col-sm-12 position-relative">
                                  <input
                                    class="form-control"
                                    type="password"
                                    placeholder="পাসওয়ার্ড"
                                    id="password"
                                  />
                                  <i
                                    class="bi bi-eye pass-show"
                                    onclick="passwordshowhide()"
                                  ></i>
                                </div>
                              </div>
                              <div class="row form-group mb-3">
                                <label class="col-lg-3 col-sm-12 col-form-label">
                                  পুর্ন নামঃ
                                </label>
                                <div class="col-lg-7 col-sm-12">
                                  <input
                                    class="form-control"
                                    type="text"
                                    placeholder="পুর্ন নাম"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="user-role position-relative">
                        <div class="section-subtitle">ক্ষমতা প্রদান</div>
                        <div class="role-all">
                          <div class="input-group d-flex align-items-center gap-3">
                            <input
                              class="form-check-input mt-0"
                              type="checkbox"
                              value=""
                              aria-label="Checkbox for following text input"
                              onclick="allSelect(this)"
                            />
                            <span class="">সব নির্বাচন</span>
                          </div>
                        </div>
                        <div class="user-permission">
                          <div class="user-permission-left">
                            <div class="input-group d-flex align-items-center gap-3">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                              />
                              <span class="">ক্ষমতার নাম</span>
                            </div>
                            <div class="input-group d-flex align-items-center gap-3">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                              />
                              <span class="">ক্ষমতার নাম</span>
                            </div>
                            <div class="input-group d-flex align-items-center gap-3">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                              />
                              <span class="">ক্ষমতার নাম</span>
                            </div>
                            <div class="input-group d-flex align-items-center gap-3">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                              />
                              <span class="">ক্ষমতার নাম</span>
                            </div>
                            <div class="input-group d-flex align-items-center gap-3">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                              />
                              <span class="">ক্ষমতার নাম</span>
                            </div>
                            <div class="input-group d-flex align-items-center gap-3">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                              />
                              <span class="">ক্ষমতার নাম</span>
                            </div>
                            <div class="input-group d-flex align-items-center gap-3">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                              />
                              <span class="">ক্ষমতার নাম</span>
                            </div>
                            <div class="input-group d-flex align-items-center gap-3">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                              />
                              <span class="">ক্ষমতার নাম</span>
                            </div>
                          </div>
                          <div class="user-permission-right">
                            <div class="input-group d-flex align-items-center gap-3">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                              />
                              <span class="">ক্ষমতার নাম</span>
                            </div>
                            <div class="input-group d-flex align-items-center gap-3">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                              />
                              <span class="">ক্ষমতার নাম</span>
                            </div>
                            <div class="input-group d-flex align-items-center gap-3">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                              />
                              <span class="">ক্ষমতার নাম</span>
                            </div>
                            <div class="input-group d-flex align-items-center gap-3">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                              />
                              <span class="">ক্ষমতার নাম</span>
                            </div>
                            <div class="input-group d-flex align-items-center gap-3">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                              />
                              <span class="">ক্ষমতার নাম</span>
                            </div>
                            <div class="input-group d-flex align-items-center gap-3">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                              />
                              <span class="">ক্ষমতার নাম</span>
                            </div>
                            <div class="input-group d-flex align-items-center gap-3">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                              />
                              <span class="">ক্ষমতার নাম</span>
                            </div>
                            <div class="input-group d-flex align-items-center gap-3">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                              />
                              <span class="">ক্ষমতার নাম</span>
                            </div>
                            <div class="input-group d-flex align-items-center gap-3">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                              />
                              <span class="">ক্ষমতার নাম</span>
                            </div>
                          </div>
                        </div>
                        <div class="button-group">
                          <button class="custom-btn btn-primary" type="submit">
                            Save
                          </button>
                          <button class="custom-btn btn-dark" type="submit">
                            Create New
                          </button>
                          <button class="custom-btn btn-danger">Delete</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="col-lg-6 col-sm-12">
                    <div class="table-data">
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
                              <th></th>
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
                              <th data-priority="1">আইডি</th>
                              <th data-priority="3">ইউজারনেম</th>
                              <th data-priority="1">পূর্ণ নাম</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
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
                              <td>@id</td>
                              <td>@username</td>
                              <td>Aminul Islam</td>
                            </tr>
                            <tr>
                              <td></td>
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
                              <td>@id</td>
                              <td>@username</td>
                              <td>Aminul Islam</td>
                            </tr>
                            <tr>
                              <td></td>
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
                              <td>@id</td>
                              <td>@username</td>
                              <td>Aminul Islam</td>
                            </tr>
                            <tr>
                              <td></td>
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
                              <td>@id</td>
                              <td>@username</td>
                              <td>Aminul Islam</td>
                            </tr>
                            <tr>
                              <td></td>
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
                              <td>@id</td>
                              <td>@username</td>
                              <td>Aminul Islam</td>
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
        {/* <!-- Create New User form END --> */}
      </main>
    </div>
  );
};

export default NewUser;
