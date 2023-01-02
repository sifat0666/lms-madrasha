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
  const { data } = useQuery("user", () =>
    fetch(`${serverUrl}/api/users`).then((res) => res.json())
  );

  // const data = [];

  // console.log("🚀 ~ file: NewUser.jsx:8 ~ NewUser ~ data", data);

  const mutation = useMutation({
    mutationFn: (newUser) => {
      return axios.post(`${serverUrl}/api/register`, newUser);
    },
    onError: (error, variable, context) => {
      // console.log(error.response.data.message);
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      console.log(data.data);
      window.location.reload(true);
    },
  });
  const [array, setArray] = useState([]);
  console.log(array);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (value) => {
    mutation.mutate({ ...value, permission: array });
    console.log({ ...value, permission: array });
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
      <main className="page-bg">
        {/* <!-- Create New User form Start --> */}
        <section className="user-form-section">
          <div className="section-bg">
            <div className="user-form">
              <div className="">
                <div className="row">
                  <div className="col-md-12 col-lg-6 col-sm-12 user-form-create d-block">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="row bottom-border">
                        <div className="col-md-12 col-sm-12 col-lg-12 w-100">
                          <div className="user-create-form">
                            <div className="title">
                              <span>
                                <i className="bi bi-person-square"></i>
                              </span>
                              <span>ব্যবহারকারীর প্রোফাইল তৈরি</span>
                            </div>
                            <div className="my-4">
                              <div className="row form-group mb-3">
                                <label className="col-sm-12 col-md-12 col-lg-3 col-form-label">
                                  ইমেইল
                                </label>
                                <div className="col-sm-12 col-lg-7">
                                  <input
                                    className="form-control"
                                    type="email"
                                    placeholder="ইমেইল"
                                    {...register("email")}
                                  />
                                </div>
                              </div>
                              <div className="row form-group mb-3">
                                <label className="col-sm-12 col-lg-3 col-form-label">
                                  ইউজার নেমঃ
                                </label>
                                <div className="col-lg-7 col-sm-12">
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="ইউজার নেম"
                                    {...register("name")}
                                  />
                                </div>
                              </div>
                              <div className="row form-group mb-3">
                                <label className="col-lg-3 col-sm-12 col-form-label">
                                  পাসওয়ার্ডঃ
                                </label>
                                <div className="col-lg-7 col-sm-12 position-relative">
                                  <input
                                    className="form-control"
                                    type="password"
                                    placeholder="পাসওয়ার্ড"
                                    id="password"
                                    {...register("password")}
                                  />
                                  <i
                                    className="bi bi-eye pass-show"
                                    onclick="passwordshowhide()"
                                  ></i>
                                </div>
                              </div>
                              <div className="row form-group mb-3">
                                <label className="col-lg-3 col-sm-12 col-form-label">
                                  কনফার্ম পাসওয়ার্ডঃ
                                </label>
                                <div className="col-lg-7 col-sm-12 position-relative">
                                  <input
                                    className="form-control"
                                    type="password"
                                    placeholder=" কনফার্ম পাসওয়ার্ড"
                                    id="password_confirmation"
                                    {...register("password_confirmation")}
                                  />
                                  <i
                                    className="bi bi-eye pass-show"
                                    onclick="passwordshowhide()"
                                  ></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="user-role position-relative">
                        <div className="section-subtitle">ক্ষমতা প্রদান</div>
                        <div className="role-all">
                          <div className="input-group d-flex align-items-center gap-3">
                            <input
                              className="form-check-input mt-0"
                              type="checkbox"
                              value=""
                              aria-label="Checkbox for following text input"
                              onclick="allSelect(this)"
                            />
                            <span className="">সব নির্বাচন</span>
                          </div>
                        </div>
                        {array}
                        <div className="user-permission">
                          <div className="user-permission-left">
                            <div className="input-group d-flex align-items-center gap-3">
                              <input
                                className="form-check-input mt-0"
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
                              <span className="">হিসাব নিকাশ</span>
                            </div>
                            <div className="input-group d-flex align-items-center gap-3">
                              <input
                                className="form-check-input mt-0"
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
                              <span className="">শিক্ষার্থী</span>
                            </div>
                            <div className="input-group d-flex align-items-center gap-3">
                              <input
                                className="form-check-input mt-0"
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
                              <span className="">পরীক্ষা</span>
                            </div>{" "}
                            <div className="input-group d-flex align-items-center gap-3">
                              <input
                                className="form-check-input mt-0"
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
                              <span className="">ফলাফল</span>
                            </div>{" "}
                            <div className="input-group d-flex align-items-center gap-3">
                              <input
                                className="form-check-input mt-0"
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
                              <span className="">শিক্ষক</span>
                            </div>{" "}
                            <div className="input-group d-flex align-items-center gap-3">
                              <input
                                className="form-check-input mt-0"
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
                              <span className="">দাতা সদস্য</span>
                            </div>{" "}
                            <div className="input-group d-flex align-items-center gap-3">
                              <input
                                className="form-check-input mt-0"
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
                              <span className="">বই বিক্রি</span>
                            </div>
                            {/* <div className="input-group d-flex align-items-center gap-3">
                              <input
                                className="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                              />
                              <span className="">ক্ষমতার নাম</span>
                            </div>
                            <div className="input-group d-flex align-items-center gap-3">
                              <input
                                className="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                              />
                              <span className="">ক্ষমতার নাম</span>
                            </div>
                            <div className="input-group d-flex align-items-center gap-3">
                              <input
                                className="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                              />
                              <span className="">ক্ষমতার নাম</span>
                            </div>
                            <div className="input-group d-flex align-items-center gap-3">
                              <input
                                className="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                              />
                              <span className="">ক্ষমতার নাম</span>
                            </div>
                            <div className="input-group d-flex align-items-center gap-3">
                              <input
                                className="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                              />
                              <span className="">ক্ষমতার নাম</span>
                            </div>
                          </div>
                          <div className="user-permission-right">
                            <div className="input-group d-flex align-items-center gap-3">
                              <input
                                className="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                              />
                              <span className="">ক্ষমতার নাম</span>
                            </div>
                            <div className="input-group d-flex align-items-center gap-3">
                              <input
                                className="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                              />
                              <span className="">ক্ষমতার নাম</span>
                            </div>
                            <div className="input-group d-flex align-items-center gap-3">
                              <input
                                className="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                              />
                              <span className="">ক্ষমতার নাম</span>
                            </div>
                            <div className="input-group d-flex align-items-center gap-3">
                              <input
                                className="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                              />
                              <span className="">ক্ষমতার নাম</span>
                            </div>
                            <div className="input-group d-flex align-items-center gap-3">
                              <input
                                className="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                              />
                              <span className="">ক্ষমতার নাম</span>
                            </div>
                            <div className="input-group d-flex align-items-center gap-3">
                              <input
                                className="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                              />
                              <span className="">ক্ষমতার নাম</span>
                            </div>
                            <div className="input-group d-flex align-items-center gap-3">
                              <input
                                className="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                              />
                              <span className="">ক্ষমতার নাম</span>
                            </div>
                            <div className="input-group d-flex align-items-center gap-3">
                              <input
                                className="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                              />
                              <span className="">ক্ষমতার নাম</span>
                            </div>
                            <div className="input-group d-flex align-items-center gap-3">
                              <input
                                className="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                name="checkbox"
                              />
                              <span className="">ক্ষমতার নাম</span>
                            </div> */}
                          </div>
                        </div>
                        <div className="button-group">
                          {/* <button className="custom-btn btn-primary" type="submit">
                            Save
                          </button> */}
                          <button className="custom-btn btn-dark" type="submit">
                            Create New
                          </button>
                          {/* <button className="custom-btn btn-danger">Delete</button> */}
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <div className="table-data">
                      <div className="row form-group searchbar">
                        <div className="col-sm-6 position-relative search">
                          <i className="bi bi-search search-icon"></i>
                          <input
                            className="form-control"
                            type="search"
                            placeholder="Search"
                          />
                        </div>
                      </div>
                      <div
                        className="table-responsive"
                        data-pattern="priority-columns"
                      >
                        <table
                          id="tech-companies-1"
                          className="table  bg-white table-bordered text-center"
                        >
                          <thead className="text-center accounts-table-head">
                            <tr>
                              <th></th>
                              <th>
                                <span className="action-edit">
                                  <i className="bi bi-pencil-square"></i>
                                </span>
                              </th>
                              <th>
                                <span className="action-delete">
                                  <i className="bi bi-trash3"></i>
                                </span>
                              </th>
                              <th data-priority="1">ক্ষমতা</th>
                              <th data-priority="3">ইউজারনেম</th>
                              <th data-priority="1"> ইমেইল</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data?.data.map((user) => (
                              <>
                                <tr>
                                  <td></td>
                                  <th>
                                    <span className="action-edit">
                                      <i className="bi bi-pencil-square"></i>
                                    </span>
                                  </th>
                                  <th>
                                    <span className="action-delete">
                                      <i className="bi bi-trash3"></i>
                                    </span>
                                  </th>
                                  <td>
                                    {user.permissions.map((permission) => (
                                      <div>{permission}</div>
                                    ))}
                                  </td>
                                  <td>{user.name}</td>
                                  <td>{user.email}</td>
                                </tr>
                              </>
                            ))}
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
