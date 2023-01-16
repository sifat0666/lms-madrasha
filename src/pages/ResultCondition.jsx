import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import { serverUrl } from "../../utils/config";

const ResultCondition = () => {
  const { data: academicYear } = useQuery("academicyear", () =>
    fetch(`${serverUrl}/api/academicyear`).then((res) => res.json())
  );

  const { data: marhalaClass } = useQuery("marhalaclass", () =>
    fetch(`${serverUrl}/api/marhalaclass`).then((res) => res.json())
  );

  const { data: examName } = useQuery("examEnty", () =>
    fetch(`${serverUrl}/api/exam-entry`).then((res) => res.json())
  );

  const { data: passMarkData } = useQuery("passmark", () =>
    fetch(`${serverUrl}/api/pass-mark`).then((res) => res.json())
  );

  const { data: divisionEntryData } = useQuery("divisionentry", () =>
    fetch(`${serverUrl}/api/division-entry`).then((res) => res.json())
  );

  // console.log(divisionEntryData?.data);

  console.log(passMarkData?.data);

  const { register, handleSubmit } = useForm();
  const { register: register2, handleSubmit: handleSubmit2 } = useForm();

  const passMark = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/pass-mark`, data);
    },
    onError: (error, variable, context) => {
      // console.log(error.response.data.message);
      // toast.error(error.response.data.message);
      console.log(error);
    },
    onSuccess: (data) => {
      toast.success("posted successfully");
      console.log(data?.data.id);
    },
  });

  const divisionEntry = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/division-entry`, data);
    },
    onError: (error, variable, context) => {
      // console.log(error.response.data.message);
      // toast.error(error.response.data.message);
      console.log(error);
    },
    onSuccess: (data) => {
      toast.success("posted successfully");
      console.log(data?.data.id);
    },
  });

  const onSubmit = (value) => {
    console.log("division", value);
    divisionEntry.mutate(value);
  };

  const onMarkSubmit = (value) => {
    console.log(value);
    passMark.mutate({ ...value, subject_a: "empty" });
  };

  return (
    <div>
      <section className="user-form-section">
        <div className="section-bg">
          <div className="row">
            <div className="col-md-12 w-100">
              <div className="main-container">
                <div className="row">
                  <div className="col-12">
                    <ul
                      className="nav nav-pills mb-3 justify-content-center"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          গড় নির্নয়
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          বিষয় ও পাশ নাম্বার
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-contact-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-contact"
                          type="button"
                          role="tab"
                          aria-controls="pills-contact"
                          aria-selected="false"
                        >
                          ফলাফল কন্ডিশন
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        tabindex="0"
                      >
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="row">
                            <div className="col-12">
                              <div className="sperator mb-2"></div>
                              <div className="row">
                                <div className="col-lg-3 col-md-3 col-12">
                                  <div className="row mb-3">
                                    <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                                      note
                                      <i>*</i>
                                    </label>
                                    <div className="col-lg-8 col-md-8 col-12">
                                      <input
                                        required
                                        type="text"
                                        className="form-control"
                                        placeholder="note"
                                        {...register("note")}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-12">
                                  <div className="row mb-3">
                                    <label className="col-lg-6 col-md-6 col-12 col-form-label info-lable">
                                      সর্বোচ্চ নম্বর
                                      <i>*</i>
                                    </label>
                                    <div className="col-lg-6 col-md-6 col-12">
                                      <input
                                        required
                                        type="text"
                                        className="form-control"
                                        placeholder="১০০"
                                        {...register("highest_mark")}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-6 offset-lg-4 offset-0">
                                      <div className="row mb-3">
                                        <label className="col-sm-12 col-form-label info-lable text-center">
                                          বাংলা
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6">
                                      <div className="row mb-3">
                                        <label className="col-sm-12 col-form-label info-lable text-center">
                                          আরবি
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-3 col-md-3 col-12">
                                  <div className="row mb-3">
                                    <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                                      শিক্ষাবর্ষ
                                      <i>*</i>
                                    </label>
                                    <div className="col-lg-6 col-md-6 col-10">
                                      <select
                                        className="form-select"
                                        size="3"
                                        style={{ border: "none" }}
                                        {...register("session")}
                                      >
                                        {academicYear?.data.map((item) => (
                                          <option key={item.id}>
                                            {item.academic_year}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                    <div className="col-2">
                                      <span className="addbutton">
                                        <a
                                          href="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#membertype"
                                        >
                                          <i className="bi bi-plus-circle-fill"></i>
                                        </a>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-12">
                                  <div className="row mb-3">
                                    <label className="col-lg-6 col-md-6 col-12 col-form-label info-lable">
                                      যদি --
                                    </label>
                                    <div className="col-lg-6 col-md-6 col-12">
                                      <input
                                        required
                                        type="number"
                                        className="form-control"
                                        {...register("case1")}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                  <div className="row">
                                    <div className="col-4">
                                      <div className="row mb-3">
                                        <label className="col-sm-12 col-form-label info-lable">
                                          তাহলে ডিভিশন
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-4">
                                      <div className="row mb-3">
                                        <div className="col-sm-12">
                                          <input
                                            required
                                            type="text"
                                            className="form-control"
                                            {...register("case1_div")}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-4">
                                      <div className="row mb-3">
                                        <div className="col-sm-12">
                                          <input
                                            required
                                            type="text"
                                            className="form-control"
                                            {...register("case1_div_a")}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-3 col-md-3 col-12">
                                  <div className="row mb-3">
                                    <label className="col-lg-4 col-md-4 col-form-label info-lable">
                                      পরীক্ষা
                                      <i>*</i>
                                    </label>
                                    <div className="col-lg-6 col-md-6 col-10">
                                      <select
                                        className="form-select"
                                        size="3"
                                        style={{ border: "none" }}
                                        {...register("exam_name")}
                                      >
                                        {examName?.data.map((item) => (
                                          <option key={item.id}>
                                            {item.exam_name}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-12">
                                  <div className="row mb-3">
                                    <label className="col-lg-6 col-md-6 col-12 col-form-label info-lable">
                                      অথবা যদি --
                                    </label>
                                    <div className="col-lg-6 col-md-6 col-12">
                                      <input
                                        required
                                        type="number"
                                        className="form-control"
                                        {...register("case2")}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-12">
                                      <div className="row mb-md-3 mb-1">
                                        <label className="col-sm-12 col-form-label info-lable">
                                          তাহলে ডিভিশন
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6">
                                      <div className="row mb-md-3 mb-1">
                                        <div className="col-sm-12">
                                          <input
                                            required
                                            type="text"
                                            className="form-control"
                                            {...register("case2_div")}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6">
                                      <div className="row mb-3">
                                        <div className="col-sm-12">
                                          <input
                                            required
                                            type="text"
                                            className="form-control"
                                            {...register("case2_div_a")}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-3 col-md-3 col-12">
                                  <div className="row mb-3">
                                    <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                                      মারহালা
                                      <i>*</i>
                                    </label>
                                    <div className="col-lg-6 col-md-6 col-10">
                                      <select
                                        className="form-select"
                                        size="4"
                                        style={{ border: "none" }}
                                        {...register("class")}
                                      >
                                        {marhalaClass?.data.map((item) => (
                                          <option
                                            key={item.id}
                                            // onClick={() => setClasss(item.academicYear)}
                                          >
                                            {item.class_name}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                    <div className="col-2">
                                      {/* <span className="addbutton">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#membertype"
                                      >
                                        <i className="bi bi-plus-circle-fill"></i>
                                      </a>
                                    </span> */}
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-12">
                                  <div className="row mb-3">
                                    <label className="col-sm-6 col-form-label info-lable">
                                      অথবা যদি --
                                    </label>
                                    <div className="col-lg-6 col-md-6 col-12">
                                      <input
                                        required
                                        type="number"
                                        className="form-control"
                                        {...register("case3")}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-12">
                                      <div className="row mb-3">
                                        <label className="col-sm-12 col-form-label info-lable">
                                          তাহলে ডিভিশন
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6">
                                      <div className="row mb-3">
                                        <div className="col-sm-12">
                                          <input
                                            required
                                            type="text"
                                            className="form-control"
                                            {...register("case3_div")}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6">
                                      <div className="row mb-3">
                                        <div className="col-sm-12">
                                          <input
                                            required
                                            type="text"
                                            className="form-control"
                                            {...register("case3_div_a")}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-3 d-md-block d-none"></div>
                                <div className="col-lg-3 col-md-3 col-12">
                                  <div className="row mb-3">
                                    <label className="col-lg-6 col-md-6 col-12 col-form-label info-lable">
                                      অথবা যদি --
                                    </label>
                                    <div className="col-lg-6 col-md-6 col-12">
                                      <input
                                        required
                                        type="number"
                                        className="form-control"
                                        {...register("case4")}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-12">
                                      <div className="row mb-lg-3 mb-1">
                                        <label className="col-sm-12 col-form-label info-lable">
                                          তাহলে ডিভিশন
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6">
                                      <div className="row mb-lg-3 mb-1">
                                        <div className="col-sm-12">
                                          <input
                                            required
                                            type="text"
                                            className="form-control"
                                            {...register("case4_div")}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6">
                                      <div className="row mb-lg-3 mb-1">
                                        <div className="col-sm-12">
                                          <input
                                            required
                                            type="text"
                                            className="form-control"
                                            {...register("case4_div_a")}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row mt-lg-0 mt-2">
                                <div className="col-3 d-md-block d-none"></div>
                                <div className="col-lg-3 col-md-3 col-12">
                                  <div className="row mb-3">
                                    <label className="col-lg-6 col-md-6 col-12 col-form-label info-lable">
                                      অথবা যদি --
                                    </label>
                                    <div className="col-lg-6 col-md-6 col-12">
                                      <input
                                        required
                                        type="number"
                                        className="form-control"
                                        {...register("case5")}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-12">
                                      <div className="row mb-3">
                                        <label className="col-sm-12 col-form-label info-lable">
                                          তাহলে ডিভিশন
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6">
                                      <div className="row mb-3">
                                        <div className="col-sm-12">
                                          <input
                                            required
                                            type="text"
                                            className="form-control"
                                            {...register("case5_div")}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6">
                                      <div className="row mb-3">
                                        <div className="col-sm-12">
                                          <input
                                            required
                                            type="text"
                                            className="form-control"
                                            {...register("case5_div_a")}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-3 d-md-block d-none"></div>
                                <div className="col-lg-3 col-md-3 col-12">
                                  <div className="row mb-3">
                                    <label className="col-lg-6 col-md-6 col-12 col-form-label info-lable">
                                      অথবা যদি --
                                    </label>
                                    <div className="col-lg-6 col-md-6 col-12">
                                      <input
                                        required
                                        type="number"
                                        className="form-control"
                                        {...register("case6")}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-12">
                                      <div className="row mb-md-3 mb-1">
                                        <label className="col-sm-12 col-form-label info-lable">
                                          তাহলে ডিভিশন
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6">
                                      <div className="row mb-3">
                                        <div className="col-sm-12">
                                          <input
                                            required
                                            type="text"
                                            className="form-control"
                                            {...register("case6_div")}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6">
                                      <div className="row mb-3">
                                        <div className="col-sm-12">
                                          <input
                                            required
                                            type="text"
                                            className="form-control"
                                            {...register("case6_div_a")}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-6 d-flex justify-content-center w-100 payroll">
                              <div className="button-group w-100">
                                <button
                                  type="submit"
                                  className="custom-btn btn-primary"
                                >
                                  Save
                                </button>
                                <button
                                  type="reset"
                                  className="custom-btn btn-info"
                                >
                                  Reset
                                </button>
                                {/* <button className="custom-btn btn-dark">
                                New
                              </button>
                              <button className="custom-btn btn-danger">
                                Delete
                              </button> */}
                              </div>
                            </div>
                          </div>
                        </form>
                        <div className="row my-3">
                          <div className="col-12">
                            <div
                              className="table-responsive accounts-table"
                              data-pattern="priority-columns"
                            >
                              <table
                                id="tech-companies-1"
                                className="table  bg-white text-center mb-0"
                              >
                                <thead className="text-center accounts-table-head">
                                  <tr>
                                    <th>পরীক্ষার নাম</th>
                                    <th>মারহালা/ক্লাশ</th>
                                    <th>নাম্বার</th>
                                    <th>ডিভিশন-১</th>
                                    <th>নাম্বার</th>
                                    <th>ডিভিশন-2</th>
                                    <th>নাম্বার</th>
                                    <th>ডিভিশন-৩</th>
                                    <th>নাম্বার</th>
                                    <th>ডিভিশন-4</th>

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
                                  </tr>
                                </thead>
                                <tbody>
                                  {divisionEntryData?.data.map((item) => (
                                    <tr key={item.id}>
                                      <td>{item.exam_name}</td>
                                      <td>{item.class}</td>
                                      <td>{item.case1}</td>
                                      <td>{item.case1_div}</td>
                                      <td>{item.case2}</td>
                                      <td>{item.case2_div}</td>
                                      <td>{item.case3}</td>
                                      <td>{item.case3_div}</td>
                                      <td>{item.case4}</td>
                                      <td>{item.case4_div} </td>
                                      <td>
                                        <span className="action-edit">
                                          <i className="bi bi-pencil-square"></i>
                                        </span>
                                      </td>
                                      <td>
                                        <span className="action-delete">
                                          <i className="bi bi-trash3"></i>
                                        </span>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                        tabindex="0"
                      >
                        <form onSubmit={handleSubmit2(onMarkSubmit)}>
                          <div className="row">
                            <div className="col-12">
                              <div className="row">
                                <div className="col-lg-4 col-md-12 col-12">
                                  <div className="row mb-3">
                                    <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                                      শিক্ষাবর্ষ
                                      <i>*</i>
                                    </label>
                                    <div className="col-lg-6 col-md-6 col-10">
                                      <select
                                        className="form-select"
                                        size="3"
                                        style={{ border: "none" }}
                                        {...register2("session")}
                                      >
                                        {academicYear?.data.map((item) => (
                                          <option key={item.id}>
                                            {item.academic_year}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                    <div className="col-2">
                                      <span className="addbutton">
                                        <a
                                          href="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#membertype"
                                        >
                                          <i className="bi bi-plus-circle-fill"></i>
                                        </a>
                                      </span>
                                    </div>
                                  </div>
                                  <div className="row mb-3">
                                    <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                                      পরীক্ষার নাম
                                      <i>*</i>
                                    </label>
                                    <div className="col-lg-6 col-md-6 col-10">
                                      <select
                                        className="form-select"
                                        size="3"
                                        style={{ border: "none" }}
                                        {...register2("exam_name")}
                                      >
                                        {examName?.data.map((item) => (
                                          <option key={item.id}>
                                            {item.exam_name}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                    <div className="col-2">
                                      <span className="addbutton">
                                        <a
                                          href="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#membertype"
                                        >
                                          <i className="bi bi-plus-circle-fill"></i>
                                        </a>
                                      </span>
                                    </div>
                                  </div>
                                  <div className="row mb-3">
                                    <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                                      মারহালা
                                      <i>*</i>
                                    </label>
                                    <div className="col-lg-6 col-md-6 col-10">
                                      <select
                                        className="form-select"
                                        size="4"
                                        style={{ border: "none" }}
                                        {...register2("class")}
                                      >
                                        {marhalaClass?.data.map((item) => (
                                          <option
                                            key={item.id}
                                            // onClick={() => setClasss(item.academicYear)}
                                          >
                                            {item.class_name}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                    <div className="col-2">
                                      <span className="addbutton">
                                        <a
                                          href="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#membertype"
                                        >
                                          <i className="bi bi-plus-circle-fill"></i>
                                        </a>
                                      </span>
                                    </div>
                                  </div>
                                  <div className="row mb-3">
                                    <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                                      কিতাব
                                      <i>*</i>
                                    </label>
                                    <div className="col-lg-6 col-md-6 col-10">
                                      <select
                                        {...register2("book")}
                                        className="form-select"
                                      >
                                        <option selected="">
                                          শ্রেণী নির্বাচন করুন
                                        </option>
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
                                    <div className="col-2">
                                      {/* <span className="addbutton">
                                        <a
                                          href="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#membertype"
                                        >
                                          <i className="bi bi-plus-circle-fill"></i>
                                        </a>
                                      </span> */}
                                    </div>
                                  </div>
                                  {/* <div className="row mb-3">
                                    <label
                                      hidden
                                      className="col-lg-4 col-md-4 col-12 col-form-label info-lable"
                                    >
                                      বিষয় আরবি
                                      <i>*</i>
                                    </label>
                                    <div
                                      
                                      className="col-lg-6 col-md-6 col-12"
                                    >
                                      <input
                                        required
                                        type="text"
                                        className="form-control"
                                        placeholder="বিষয় আরবি"
                                        {...register2("subject_a")}
                                      />
                                    </div>
                                    <div className="col-2"></div>
                                  </div> */}
                                  <div className="row mb-3">
                                    <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                                      পাশ নাম্বার
                                      <i>*</i>
                                    </label>
                                    <div className="col-lg-6 col-md-6 col-12">
                                      <input
                                        required
                                        type="text"
                                        className="form-control"
                                        {...register2("pass_mark")}
                                        placeholder=" পাশ নাম্বার"
                                      />
                                    </div>
                                    <div className="col-2"></div>
                                  </div>
                                  <div className="row mb-3">
                                    <div className="col-12 result-btn">
                                      <div className="button-group">
                                        <button
                                          type="submit"
                                          className="custom-btn btn-primary"
                                        >
                                          Save
                                        </button>
                                        <button
                                          type="reset"
                                          className="custom-btn btn-info"
                                        >
                                          New
                                        </button>
                                      </div>
                                    </div>
                                    <div className="col-2"></div>
                                  </div>
                                  {/* <div className="row mb-3">
                                    <div className="col-12 my-2">
                                      <p>
                                        উল্লেখিত সংখ্যা ব্যতিত অন্য সংথ্যা
                                        দ্বারা যদি মোট নাম্বার ভাগ দেয়ার প্রয়োজন
                                        হয় তাহলে নিচের বক্সে তা লিখে সেইভ বাটনে
                                        চাপ দিন।
                                      </p>
                                    </div>
                                    <div className="col-12">
                                      <div className="row">
                                        <div className="col-8">
                                          <input required
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                          />
                                        </div>
                                        <div className="col-4">
                                          <input required
                                            type="button"
                                            className="custom-btn btn-primary d-block w-100"
                                            value="Save"
                                            placeholder=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div> */}
                                </div>
                                <div className="col-lg-8 col-md-12 col-12">
                                  <div
                                    className="table-responsive accounts-table"
                                    data-pattern="priority-columns"
                                  >
                                    <table
                                      id="tech-companies-1"
                                      className="table  bg-white text-center mb-0"
                                    >
                                      <thead className="text-center accounts-table-head">
                                        <tr>
                                          <th>শিক্ষাবর্ষ</th>
                                          <th>পরীক্ষার নাম</th>
                                          <th>মারহালা/ক্লাশ</th>
                                          <th>সিরিয়াল</th>
                                          <th>কিতাব</th>
                                          {/* <th>কিতাব আরাবী</th> */}
                                          <th>পাশ নাম্বার</th>
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
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {passMarkData?.data.map((item) => (
                                          <tr>
                                            <td>{item.session}</td>
                                            <td>{item.exam_name}</td>
                                            <td>{item.class}</td>
                                            <td>{item.id}</td>
                                            <td>{item.book}</td>
                                            {/* <td>{item.exam_namea}</td> */}
                                            <td>{item.pass_mark}</td>
                                            <td>
                                              <span className="action-edit">
                                                <i className="bi bi-pencil-square"></i>
                                              </span>
                                            </td>
                                            <td>
                                              <span className="action-delete">
                                                <i className="bi bi-trash3"></i>
                                              </span>
                                            </td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                        tabindex="0"
                      >
                        <div className="row">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-lg-4 col-md-6 col-12">
                                <div className="row mb-3">
                                  <label className="col-md-4 col-12 col-form-label info-lable">
                                    পরীক্ষার নাম
                                    <i>*</i>
                                  </label>
                                  <div className="col-md-6 col-10">
                                    <select className="form-select">
                                      <option selected="">
                                        শ্রেণী নির্বাচন করুন
                                      </option>
                                      <option>প্রথম সাময়িক পরীক্ষা</option>
                                      <option>দ্বিতীয় সাময়িক পরীক্ষা</option>
                                      <option>তৃতীয় সাময়িক পরীক্ষা</option>
                                      <option>বোর্ড পরীক্ষা</option>
                                      <option>মাসিক পরীক্ষা</option>
                                    </select>
                                  </div>
                                  <div className="col-2">
                                    <span className="addbutton">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#membertype"
                                      >
                                        <i className="bi bi-plus-circle-fill"></i>
                                      </a>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-12">
                                <div className="row mb-3">
                                  <label className="col-md-4 col-12 col-form-label info-lable">
                                    মারহালা
                                    <i>*</i>
                                  </label>
                                  <div className="col-md-6 col-10">
                                    <select className="form-select">
                                      <option selected="">
                                        শ্রেণী নির্বাচন করুন
                                      </option>
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
                                  <div className="col-2">
                                    <span className="addbutton">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#membertype"
                                      >
                                        <i className="bi bi-plus-circle-fill"></i>
                                      </a>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sperator"></div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-lg-6 col-md-12 col-12">
                                <div className="row my-2">
                                  <div className="col-12">
                                    <div className="input-group d-flex align-items-center gap-lg-3 gap-1">
                                      <input
                                        required
                                        className="form-check-input mt-0"
                                        type="checkbox"
                                      />
                                      <span className="">
                                        কন্ডিশন ১ (মিয়ারী বিষয়ে ফেল সংক্রান্ত
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <label className="col-sm-2 col-form-label info-lable">
                                    কিতাব
                                    <i>*</i>
                                  </label>
                                  <div className="col-md-4 col-12 mb-md-0 mb-2">
                                    <select className="form-select">
                                      <option selected="">
                                        শ্রেণী নির্বাচন করুন
                                      </option>
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
                                  <div className="col-md-3 col-6">
                                    <input
                                      required
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="col-md-3 col-6">
                                    <input
                                      required
                                      type="button"
                                      className="custom-btn btn-primary d-block w-100"
                                      value="Save"
                                      placeholder=""
                                    />
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12">
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
                                            <th>কিতাব/বিষয়ের নাম</th>
                                            <th>নাম্বার</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <th></th>
                                            <td></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-12 col-12">
                                <div className="row my-2">
                                  <div className="col-12">
                                    <p>
                                      যদি এ কিতাবগুলোর কোন এক বিষয়ে ফেল করে
                                      তাহলে ডিভিশন হবে
                                    </p>
                                  </div>
                                </div>
                                <div className="row mb-1">
                                  <label className="col-md-2 col-12 col-form-label info-lable">
                                    বাংলা
                                    <i>*</i>
                                  </label>
                                  <div className="col-md-10 col-12">
                                    <input
                                      required
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <label className="col-md-2 col-12 col-form-label info-lable">
                                    আরাবী
                                    <i>*</i>
                                  </label>
                                  <div className="col-md-10 col-12">
                                    <input
                                      required
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-2 col-md-12 col-12 d-flex justify-content-center align-items-center">
                                <div className="row my-2">
                                  <div className="col-12">
                                    <div className="input-group d-flex align-items-center gap-3">
                                      <input
                                        required
                                        className="form-check-input mt-0"
                                        type="checkbox"
                                      />
                                      <span className="">Silver Color</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sperator"></div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-lg-6 col-12">
                                <div className="row my-2">
                                  <div className="col-12">
                                    <div className="input-group d-flex align-items-center gap-3">
                                      <input
                                        required
                                        className="form-check-input mt-0"
                                        type="checkbox"
                                      />
                                      <span className="">
                                        কন্ডিশন ২ (গড় মিয়ারী বিষয়ে ফেল সংক্রান্ত
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <label className="col-md-4 col-12 col-form-label info-lable">
                                    গড় মিয়রীর যে কোন
                                  </label>
                                  <div className="col-md-3 col-12">
                                    <input
                                      required
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="col-md-5 col-12">
                                    কিতাব অথবা এর চেয়ে ফেল করে তাহলে এর চেয়ে
                                    বেশী ফেল করলে
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-12 col-12">
                                <div className="row my-2">
                                  <div className="col-lg-4 col-md-6 col-12">
                                    <div className="row mb-lg-1 mb-md-1 mb-0">
                                      <label className="col-sm-3 col-form-label info-lable">
                                        বাংলা
                                      </label>
                                      <div className="col-lg-7 col-md-7 col-12">
                                        <input
                                          required
                                          type="text"
                                          className="form-control"
                                        />
                                      </div>
                                      <label className="col-sm-2 col-form-label info-lable">
                                        হবে
                                      </label>
                                    </div>
                                    <div className="row mb-lg-3 mb-1">
                                      <label className="col-sm-3 col-form-label info-lable">
                                        আরাবী
                                      </label>
                                      <div className="col-lg-7 col-md-7 col-12">
                                        <input
                                          required
                                          type="text"
                                          className="form-control"
                                        />
                                      </div>
                                      <label className="col-sm-2 col-form-label info-lable">
                                        হবে
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-6 col-12">
                                    <div className="row mb-lg-1 mb-md-1 mb-0">
                                      <label className="col-sm-3 col-form-label info-lable">
                                        বাংলা
                                      </label>
                                      <div className="col-lg-7 col-md-7 col-12">
                                        <input
                                          required
                                          type="text"
                                          className="form-control"
                                        />
                                      </div>
                                      <label className="col-sm-2 col-form-label info-lable">
                                        হবে
                                      </label>
                                    </div>
                                    <div className="row mb-lg-3 mb-1">
                                      <label className="col-sm-3 col-form-label info-lable">
                                        আরাবী
                                      </label>
                                      <div className="col-lg-7 col-md-7 col-12">
                                        <input
                                          required
                                          type="text"
                                          className="form-control"
                                        />
                                      </div>
                                      <label className="col-sm-2 col-form-label info-lable">
                                        হবে
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-12 d-flex justify-content-center align-items-center">
                                    <div className="row my-2">
                                      <div className="col-lg-12 col-md-6 col-6">
                                        <div className="input-group d-flex align-items-center gap-3">
                                          <input
                                            required
                                            className="form-check-input mt-0"
                                            type="checkbox"
                                          />
                                          <span className="">Silver Color</span>
                                        </div>
                                      </div>
                                      <div className="col-lg-12 col-md-6 col-6">
                                        <div className="input-group d-flex align-items-center gap-3">
                                          <input
                                            required
                                            className="form-check-input mt-0"
                                            type="checkbox"
                                          />
                                          <span className="">Silver Color</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sperator"></div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-12">
                                <div className="row my-2">
                                  <div className="col-12">
                                    <div className="input-group d-flex align-items-center gap-3">
                                      <input
                                        required
                                        className="form-check-input mt-0"
                                        type="checkbox"
                                      />
                                      <span className="">
                                        কন্ডিশন ৩ (যদি কোন এক বিষয়ে নাম্বার
                                        এন্ট্রি না হয়)
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <label className="col-lg-4 col-12 col-form-label info-lable">
                                    যদি কোন এক বিষয়ে নাম্বার এন্ট্রি না হয় তাহলে
                                    ডিভিশন হবে
                                  </label>
                                  <div className="col-lg-3 col-md-6 col-12 mb-md-0 mb-1">
                                    <input
                                      required
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-12 mb-md-0 mb-1">
                                    <input
                                      required
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="col-lg-2 col-12 d-flex justify-content-center align-items-center">
                                    <div className="input-group d-flex align-items-center gap-3">
                                      <input
                                        required
                                        className="form-check-input mt-0"
                                        type="checkbox"
                                      />
                                      <span className="">Silver Color</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sperator"></div>
                          <div className="col-12">
                            <div className="row my-2">
                              <div className="col-12">
                                <div className="row mb-3">
                                  <label className="col-lg-4 col-md-6 col-12 col-form-label info-lable">
                                    মেধার সংখ্যা কত হবে তা উল্ল্যেখ করুন
                                  </label>
                                  <div className="col-lg-3 col-md-6 col-12">
                                    <input
                                      required
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sperator"></div>
                          <div className="col-6 my-2 d-flex justify-content-center w-100 payroll">
                            <div className="button-group w-100">
                              <button className="custom-btn btn-outline-info">
                                Update All
                              </button>
                              <button className="custom-btn btn-primary">
                                Save All
                              </button>
                              <button className="custom-btn btn-dark">
                                New
                              </button>
                              <button className="custom-btn btn-danger">
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default ResultCondition;
