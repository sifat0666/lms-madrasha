import React from "react";
import { useQuery, useMutation } from "react-query";
import { serverUrl } from "../../utils/config";
import axios from "axios";
import toast from "react-hot-toast";

// import { useRouter } from "next/router";
// import { useForm, SubmitHandler } from "react-hook-form";

import { useForm } from "react-hook-form";
import { useState } from "react";

const NewUser = () => {
  // const { data } = useQuery(
  //   "user",
  //   () => fetch(`${serverUrl}/api/users`).then((res) => res.json()),
  //   {
  //     refetchInterval: false,
  //     refetchIntervalInBackground: false,
  //     refetchOnWindowFocus: false,
  //   }
  // );

  const data = [];

  // console.log("🚀 ~ file: NewUser.jsx:8 ~ NewUser ~ data", data);

  const mutation = useMutation({
    mutationFn: (newUser) => {
      return axios.post(`${serverUrl}/api/users`, newUser);
    },
    onError: (error, variable, context) => {
      // console.log(error.response.data.message);
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      console.log(data.data);
    },
  });
  const [array, setArray] = useState([]);
  console.log(array);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (value) => {
    mutation.mutate({ ...value, permission: array });
    // toast.success("user successfully successfully");
    // console.log(value);?
  };

  function arrayRemove(arr, value) {
    return arr.filter(function (x) {
      return x != value;
    });
  }

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
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                  ইমেইল
                                </label>
                                <div class="col-sm-12 col-lg-7">
                                  <input
                                    class="form-control"
                                    type="email"
                                    placeholder="ইমেইল"
                                    {...register("email")}
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
                                    {...register("name")}
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
                                    {...register("password")}
                                  />
                                  <i
                                    class="bi bi-eye pass-show"
                                    onclick="passwordshowhide()"
                                  ></i>
                                </div>
                              </div>
                              <div class="row form-group mb-3">
                                <label class="col-lg-3 col-sm-12 col-form-label">
                                  কনফার্ম পাসওয়ার্ডঃ
                                </label>
                                <div class="col-lg-7 col-sm-12 position-relative">
                                  <input
                                    class="form-control"
                                    type="password"
                                    placeholder=" কনফার্ম পাসওয়ার্ড"
                                    id="password_confirmation"
                                    {...register("password_confirmation")}
                                  />
                                  <i
                                    class="bi bi-eye pass-show"
                                    onclick="passwordshowhide()"
                                  ></i>
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
                        {array}
                        <div class="user-permission">
                          <div class="user-permission-left">
                            <div class="input-group d-flex align-items-center gap-3">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                                onClick={() => {
                                  const findPermission = array.find(
                                    (x) => x === "audit_permission"
                                  );
                                  if (findPermission) {
                                    const newArray = arrayRemove(
                                      array,
                                      "audit_permission"
                                    );
                                    setArray(newArray);
                                  } else {
                                    setArray([...array, "audit_permission"]);
                                  }
                                }}
                              />
                              <span class="">হিসাব নিকাশ</span>
                            </div>
                            <div class="input-group d-flex align-items-center gap-3">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                                onClick={() => {
                                  const findPermission = array.find(
                                    (x) => x === "students_control"
                                  );
                                  if (findPermission) {
                                    const newArray = arrayRemove(
                                      array,
                                      "students_control"
                                    );
                                    setArray(newArray);
                                  } else {
                                    setArray([...array, "students_control"]);
                                  }
                                }}
                              />
                              <span class="">শিক্ষার্থী</span>
                            </div>
                            <div class="input-group d-flex align-items-center gap-3">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                                onClick={() => {
                                  const findPermission = array.find(
                                    (x) => x === "exam_control"
                                  );
                                  if (findPermission) {
                                    const newArray = arrayRemove(
                                      array,
                                      "exam_control"
                                    );
                                    setArray(newArray);
                                  } else {
                                    setArray([...array, "exam_control"]);
                                  }
                                }}
                              />
                              <span class="">পরীক্ষা</span>
                            </div>{" "}
                            <div class="input-group d-flex align-items-center gap-3">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                                onClick={() => {
                                  const findPermission = array.find(
                                    (x) => x === "result_control"
                                  );
                                  if (findPermission) {
                                    const newArray = arrayRemove(
                                      array,
                                      "result_control"
                                    );
                                    setArray(newArray);
                                  } else {
                                    setArray([...array, "result_control"]);
                                  }
                                }}
                              />
                              <span class="">ফলাফল</span>
                            </div>{" "}
                            <div class="input-group d-flex align-items-center gap-3">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                                onClick={() => {
                                  const findPermission = array.find(
                                    (x) => x === "teacther_control"
                                  );
                                  if (findPermission) {
                                    const newArray = arrayRemove(
                                      array,
                                      "teacther_control"
                                    );
                                    setArray(newArray);
                                  } else {
                                    setArray([...array, "teacther_control"]);
                                  }
                                }}
                              />
                              <span class="">শিক্ষক</span>
                            </div>{" "}
                            <div class="input-group d-flex align-items-center gap-3">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                                onClick={() => {
                                  const findPermission = array.find(
                                    (x) => x === "doner_control"
                                  );
                                  if (findPermission) {
                                    const newArray = arrayRemove(
                                      array,
                                      "doner_control"
                                    );
                                    setArray(newArray);
                                  } else {
                                    setArray([...array, "doner_control"]);
                                  }
                                }}
                              />
                              <span class="">দাতা সদস্য</span>
                            </div>{" "}
                            <div class="input-group d-flex align-items-center gap-3">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                                onClick={() => {
                                  const findPermission = array.find(
                                    (x) => x === "library_control"
                                  );
                                  if (findPermission) {
                                    const newArray = arrayRemove(
                                      array,
                                      "library_control"
                                    );
                                    setArray(newArray);
                                  } else {
                                    setArray([...array, "library_control"]);
                                  }
                                }}
                              />
                              <span class="">বই বিক্রি</span>
                            </div>
                            {/* <div class="input-group d-flex align-items-center gap-3">
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
                            </div> */}
                          </div>
                        </div>
                        <div class="button-group">
                          {/* <button class="custom-btn btn-primary" type="submit">
                            Save
                          </button> */}
                          <button class="custom-btn btn-dark" type="submit">
                            Create New
                          </button>
                          {/* <button class="custom-btn btn-danger">Delete</button> */}
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
                              <th data-priority="1"> ইমেইল</th>
                            </tr>
                          </thead>
                          {/* <tbody>
                            {data?.data.map((user) => (
                              <>
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
                                  <td>{user.id}</td>
                                  <td>{user.name}</td>
                                  <td>{user.email}</td>
                                </tr>
                              </>
                            ))}
                          </tbody> */}
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
