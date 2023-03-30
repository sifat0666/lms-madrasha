import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import { serverUrl } from "../../utils/config";

const MarkEntry = () => {
  const { data: marhalaClass } = useQuery("marhalaclass", () =>
    fetch(`${serverUrl}/api/marhalaclass`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  const { data: academicYear } = useQuery("academicyear", () =>
    fetch(`${serverUrl}/api/academicyear`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  const { data: examName } = useQuery("examEnty", () =>
    fetch(`${serverUrl}/api/exam-entry`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );
  const { data: sub } = useQuery("subject", () =>
    fetch(`${serverUrl}/api/subject`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  const { data: marks } = useQuery("marks", () =>
    fetch(`${serverUrl}/api/marks`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  const [student, setStudent] = useState();

  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/custom-student-call`, data, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
    onError: (error, variable, context) => {
      // console.log(error.response.data.message);
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      console.log("userdata", data.data);
      setStudent(data.data);
      // window.location.reload(true);
    },
  });

  const [classname, setClassname] = useState();
  const markEntry = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/marks`, data, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
    onError: (error, variable, context) => {
      // console.log(error.response.data.message);
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      console.log("marks", data.data);
      toast.success("mark submitted successfully");
    },
  });

  console.log(classname);

  const { register, handleSubmit } = useForm();

  const { register: register2, handleSubmit: handleSubmit2 } = useForm();

  const [valuee, setValue] = useState();
  console.log("value", valuee);

  const onSubmit = (data) => {
    console.log(data);
    mutation.mutate(data);
    setValue(data);
  };

  const onMarkSubmit = (value) => {
    const params = {
      ...value,
      session: valuee.session,
      class: valuee.class,
    };
    console.log(params);
    markEntry.mutate(params);
  };

  return (
    <div>
      <section className="user-form-section">
        <div className="section-bg">
          <div className="row">
            <div className="col-md-12 w-100">
              <div className="main-container">
                <div className="col-12">
                  <div className="section-title">
                    <h4>ফলাফল প্রাপ্ত নাম্বার এন্ট্রি</h4>
                  </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="row mb-3">
                        <div className="section-title">
                          <h4>শিক্ষাবর্ষঃ</h4>
                        </div>
                        <div className="filter-menu">
                          <select
                            className="form-select"
                            size="4"
                            style={{ border: "none" }}
                            {...register("session")}
                          >
                            {academicYear?.data.map((item) => (
                              <option
                                key={item.id}
                                // onClick={() => setClasss(item.academicYear)}
                              >
                                {item.academic_year}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="section-title">
                        <h4>মারহালা/শ্রেণীঃ</h4>
                      </div>
                      <div className="filter-menu">
                        <select
                          className="form-select"
                          size="4"
                          style={{ border: "none" }}
                          {...register("class")}
                          onChange={(e) => setClassname(e.target.value)}
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
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12"></div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="row mb-3">
                        <div className="col-lg-6 col-md-6 col-12">
                          <button className="custom-btn btn-primary d-block w-100">
                            Show Data
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="sperator"></div>
                <form onSubmit={handleSubmit2(onMarkSubmit)}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="row mb-3">
                        <label className="col-lg-4 col-md-4 col-form-label info-lable">
                          পরীক্ষা
                          <i>*</i>
                        </label>
                        <div className="col-lg-6 col-md-6 col-10">
                          <select
                            required
                            className="form-select"
                            size="3"
                            style={{ border: "none" }}
                            // onChange={(e) => setExam(e.target.value)}
                            {...register2("exam")}
                          >
                            {examName?.data.map((item) => (
                              <option key={item.id}>{item.exam_name}</option>
                            ))}
                          </select>
                        </div>
                        <label className="col-lg-4 col-md-4 col-form-label info-lable">
                          বিষয়
                          <i>*</i>
                        </label>
                        <div className="col-lg-6 col-md-6 col-10">
                          <select
                            required
                            className="form-select"
                            size="3"
                            style={{ border: "none" }}
                            // onChange={(e) => setExam(e.target.value)}
                            {...register2("subject")}
                          >
                            {sub?.data.map((item) => {
                              if (item.class === classname) {
                                return (
                                  <option key={item.id}>{item.subject}</option>
                                );
                              }
                            })}
                          </select>
                        </div>
                        <label
                          className="col-lg-4 col-md-4 col-12 col-form-label info-lable mt-3"
                          style={{ padding: "10px" }}
                        >
                          নাম্বার
                          <i>*</i>
                        </label>
                        <div className="col-lg-6 col-md-6 col-10 mt-3">
                          <input
                            required
                            type="text"
                            className="form-control"
                            placeholder="নাম্বার"
                            {...register2("number")}
                          />
                        </div>
                        <label
                          className="col-lg-4 col-md-4 col-12 col-form-label info-lable mt-3"
                          style={{ padding: "10px" }}
                        >
                          পাশ নম্বর
                          <i>*</i>
                        </label>
                        <div className="col-lg-6 col-md-6 col-10 mt-3">
                          <input
                            required
                            type="text"
                            className="form-control"
                            placeholder="পাশ নম্বর"
                            {...register2("pass_number")}
                          />
                        </div>
                        <label
                          className="col-lg-4 col-md-4 col-12 col-form-label info-lable mt-3"
                          style={{ padding: "10px" }}
                        >
                          সব্বোচ্চ নম্বর
                          <i>*</i>
                        </label>
                        <div className="col-lg-6 col-md-6 col-10 mt-3">
                          <input
                            required
                            type="text"
                            className="form-control"
                            placeholder="সব্বোচ্চ নম্বর"
                            {...register2("highest_number")}
                          />
                        </div>
                        <label
                          className="col-lg-4 col-md-4 col-12 col-form-label info-lable mt-3"
                          style={{ padding: "10px" }}
                        >
                          আইডি
                          <i>*</i>
                        </label>
                        <div className="col-lg-6 col-md-6 col-10 mt-3">
                          <input
                            required
                            type="text"
                            className="form-control"
                            placeholder="আইডি"
                            {...register2("student_id")}
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 mx-auto p-5">
                          <button className="custom-btn btn-primary d-block w-100 ">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="row mb-3">
                        <table
                          id="tech-companies-1"
                          className="table  bg-white text-center mb-0"
                        >
                          <thead className="text-center accounts-table-head">
                            <tr>
                              <th>আইডি</th>

                              <th>নাম</th>
                              <th>শিক্ষাবর্ষঃ</th>
                              <th>মারহালা/শ্রেণীঃ</th>

                              {/* <th>Submit</th> */}

                              <th>
                                <span className="action-delete">
                                  <i className="bi bi-trash3"></i>
                                </span>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {student?.map((item) => (
                              <tr key={item.id}>
                                <td>
                                  {item.id}
                                  {/* {item.id} */}
                                </td>
                                <td>{item.student_name}</td>
                                <td>{item.session}</td>
                                <td>{item.class}</td>
                                {/* <td>
                                  <button type="submit">submit</button>
                                </td> */}

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
                  <div className="row my-3">
                    <div className="col-12">
                      <div
                        className="table-responsive accounts-table"
                        data-pattern="priority-columns"
                      ></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarkEntry;
