import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import { serverUrl } from "../../utils/config";

const ExamEntry = () => {
  const { data: marhalaClass } = useQuery("marhalaclass", () =>
    fetch(`${serverUrl}/api/marhalaclass`).then((res) => res.json())
  );
  const { data: academicYear } = useQuery("academicyear", () =>
    fetch(`${serverUrl}/api/academicyear`).then((res) => res.json())
  );
  const { data: examEntry } = useQuery("examEntry", () =>
    fetch(`${serverUrl}/api/exam-entry`).then((res) => res.json())
  );

  console.log(examEntry);
  const { register, handleSubmit } = useForm();

  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/exam-entry`, data);
    },
    onError: (error, variable, context) => {
      // console.log(error.response.data.message);
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      toast.success("posted successfully");
      console.log(data?.data.id);
    },
  });

  const onSubmit = (value) => {
    console.log(value);
    mutation.mutate(value);
  };
  const onDelete = async (id) => {
    const data = await axios.delete(`${serverUrl}/api/exam-entry/${id}`);
    location.reload();
  };

  return (
    <div>
      <section className="user-form-section">
        <div className="section-bg">
          <div className="row">
            <div className="col-md-12 w-100">
              <div className="main-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-12">
                      <div className="section-title">
                        <h4>পরীক্ষার নাম এন্ট্রি ফর্ম</h4>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-1 col-12">
                        {/* <div className="row mb-3">
                        <label className="col-lg-4 col-12 col-form-label info-lable">
                          আইডিঃ
                          <i>*</i>
                        </label>
                        <div className="col-lg-8 col-12">
                          <input required
                            type="text"
                            className="form-control"
                            placeholder="আইডি"
                          />
                        </div>
                      </div> */}
                      </div>
                      <div className="col-lg-4 col-12">
                        <div className="row mb-3">
                          <label className="col-sm-4 col-form-label info-lable">
                            পরীক্ষার নামঃ
                            <i>*</i>
                          </label>
                          <div className="col-lg-8 col-12">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="পরীক্ষার নাম"
                              {...register("exam_name")}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-12">
                        <div className="row mb-3">
                          <label className="col-lg-4 col-md-12 col-12 col-form-label info-lable">
                            পরীক্ষার নাম আরবীঃ
                            <i>*</i>
                          </label>
                          <div className="col-lg-8 col-12">
                            <input
                              type="text"
                              className="form-control"
                              placeholder=" পরীক্ষার নাম আরবী"
                              {...register("exam_namea")}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="row mb-3">
                            <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                              শিক্ষাবর্ষ
                              <i>*</i>
                            </label>
                            <div className="col-lg-6 col-md-6 col-10">
                              <div className="filter-menu">
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
                            </div>
                            {/* <div className="col-2">
                            <span className="addbutton">
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#membertype"
                              >
                                <i className="bi bi-plus-circle-fill"></i>
                              </a>
                            </span>
                          </div> */}
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                          <div className="row mb-3">
                            <label className="col-sm-4 col-form-label info-lable">
                              ক্লাস/জামাত
                              <i>*</i>
                            </label>
                            <div className="col-lg-6 col-md-6 col-10">
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
                            {/*                        <div className="col-2">
                            <span className="addbutton">
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#membertype"
                              >
                                <i className="bi bi-plus-circle-fill"></i>
                              </a>
                            </span>
                          </div> */}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        {/* <div className="col-lg-6 col-md-6 col-12">
                        <div className="row mb-3">
                          <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                            পরীক্ষার নাম
                            <i>*</i>
                          </label>
                          <div className="col-lg-6 col-md-6 col-10">
                            <select className="form-select">
                              <option selected="">শ্রেণী নির্বাচন করুন</option>
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
                      </div> */}
                        <div className="col-lg-4 col-md-6 col-12">
                          <div className="row mb-3">
                            <label className="col-lg-6 col-md-4 col-12 col-form-label info-lable">
                              ফি
                              <i>*</i>
                            </label>
                            <div className="col-lg-6 col-md-6 col-10">
                              <input
                                type="number"
                                className="form-control"
                                placeholder="পরীক্ষার ফি"
                                {...register("fee")}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 d-flex justify-content-center w-100 payroll">
                      <div className="button-group w-100">
                        <button
                          type="submit"
                          className="custom-btn btn-primary"
                        >
                          Save
                        </button>
                        {/* <button className="custom-btn btn-info">Show</button>
                      <button className="custom-btn btn-dark">New</button>
                      <button className="custom-btn btn-danger">Delete</button> */}
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
                            <th>আইডি</th>
                            <th>পরীক্ষার নাম</th>
                            <th>ফি</th>

                            <th>
                              <span className="action-delete">
                                <i className="bi bi-trash3"></i>
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {examEntry?.data.map((item) => (
                            <tr key={item.id}>
                              <td>{item.id}</td>
                              <td>{item.exam_name}</td>
                              <td>{item.fee}</td>

                              <td>
                                <span
                                  onClick={(id) => onDelete(item.id)}
                                  className="action-delete"
                                >
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExamEntry;
