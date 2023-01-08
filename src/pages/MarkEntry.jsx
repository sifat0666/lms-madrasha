import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { serverUrl } from "../../utils/config";

const MarkEntry = () => {
  const { data: marhalaClass } = useQuery("marhalaclass", () =>
    fetch(`${serverUrl}/api/marhalaclass`).then((res) => res.json())
  );

  const { data: academicYear } = useQuery("academicyear", () =>
    fetch(`${serverUrl}/api/academicyear`).then((res) => res.json())
  );

  const { data: examName } = useQuery("examEnty", () =>
    fetch(`${serverUrl}/api/exam-entry`).then((res) => res.json())
  );

  const [student, setStudent] = useState();

  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/custom-student-call`, data);
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

  console.log(student);

  const { register, handleSubmit } = useForm();

  const [id, setId] = useState();
  const [mark, setMark] = useState();
  const [subject, setSubject] = useState();
  const [exam, setExam] = useState();
  const { register: register2, handleSubmit: handleSubmit2 } = useForm();

  const [value, setValue] = useState();

  const onSubmit = (data) => {
    console.log(data);
    mutation.mutate(data);
    setValue(data);
  };

  const onMarkSubmit = (e) => {
    e.preventDefault();
    const value = {
      student_id: id,
      mark: { mark: mark, subject: subject },
      exam: exam,
    };
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
                <form onSubmit={onMarkSubmit}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
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
                            onChange={(e) => setExam(e.target.value)}
                          >
                            {examName?.data.map((item) => (
                              <option key={item.id}>{item.exam_name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="row mb-3">
                        <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                          কিতাব
                          <i>*</i>
                        </label>
                        <div className="col-lg-6 col-md-6 col-10">
                          <select
                            // {...register2("subject")}
                            onChange={(e) => setSubject(e.target.value)}
                            className="form-select"
                          >
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
                  </div>
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
                              <th>আইডি</th>

                              <th>নাম</th>
                              <th>ID</th>
                              <th>নাম্বার</th>

                              <th>Submit</th>
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
                            {student?.map((item) => (
                              <tr key={item.id}>
                                <td>
                                  {item.id}
                                  {/* {item.id} */}
                                </td>
                                <td>{item.student_name}</td>
                                <td>
                                  <input
                                    onChange={(e) => setId(e.target.value)}
                                  />
                                </td>
                                <td>
                                  <input
                                    onChange={(e) => setMark(e.target.value)}
                                  />
                                </td>
                                <td>
                                  <button type="submit">submit</button>
                                </td>
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
