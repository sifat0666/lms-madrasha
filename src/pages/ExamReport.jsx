import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import { serverUrl } from "../../utils/config";
import Attandance from "../Comonents/Report/Exam/AttandencePaper";
import ExamPass from "../Comonents/Report/Exam/ExamPass";
import FeeCollectionList from "../Comonents/Report/Exam/FeeCollectionList";
import MarkSheet from "../Comonents/Report/Exam/MarkSheet";
import SeatPlan from "../Comonents/Report/Exam/SeatPlan";
import ReactPrint from "react-to-print";
import { useRef } from "react";

const ExamReport = () => {
  const ref = useRef();

  const [data, setData] = useState();
  const [val, setVal] = useState();
  const [report, setReport] = useState();
  const [classData, setClassData] = useState();
  console.log("data", classData);
  console.log("rep", report);

  const { data: instituteInfo } = useQuery("instituteInfo", () =>
    fetch(`${serverUrl}/api/institute-info`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  const { data: academicYear } = useQuery("academicyear", () =>
    fetch(`${serverUrl}/api/academicyear`).then((res) => res.json())
  );

  const { data: marhalaClass } = useQuery("marhalaclass", () =>
    fetch(`${serverUrl}/api/marhalaclass`).then((res) => res.json())
  );

  const { data: examName } = useQuery("examEnty", () =>
    fetch(`${serverUrl}/api/exam-entry`).then((res) => res.json())
  );

  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/filter-student-by-class`, data, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
    onError: (error, variable, context) => {
      // console.log(error.response.data.message);
      console.log(error);
    },
    onSuccess: (data) => {
      setData(data?.data);
      // console.log("data", data);
    },
  });

  const subjectByClass = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/filter-subject-by-class`, data, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
    onError: (error, variable, context) => {
      // console.log(error.response.data.message);
      console.log("error");
      console.log(error);
    },
    onSuccess: (data) => {
      console.log("success");
      setClassData(data?.data);
    },
  });

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setVal(data);
    mutation.mutate(data);
    subjectByClass.mutate({ class: data.class });
    // console.log({ class: data.class });
  };

  return (
    <div>
      <section className="user-form-section">
        <div className="section-bg">
          <div className="row">
            <div className="col-md-12 w-100">
              <div className="main-container">
                <div className="row d-print-none">
                  <div className="col-12">
                    <div className="section-title" style={{ marginTop: "2px" }}>
                      <h4>পরীক্ষার রিপোর্ট</h4>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* <!--Filter Menu Section--> */}
                  <div className="col-lg-4 col-12 col-md-12 d-print-none">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="row">
                        <div className="col-12">
                          <div className="filter-menu report-menu">
                            <select
                              className="form-select"
                              size="5"
                              style={{ border: "none" }}
                              onChange={(e) => setReport(e.target.value)}
                            >
                              <option>নির্বাচন করুন</option>
                              <option selected>
                                ১. পরীক্ষার ফি উত্তোলন তালিকা
                              </option>
                              <option
                              // data-bs-toggle="modal"
                              // data-bs-target="#admitcard"
                              >
                                ২. প্রবেশপত্র
                              </option>
                              <option>৩. দস্তখতপত্র</option>
                              <option>৪. নাম্বরপত্র</option>
                              <option>৫. সীট নং</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-12">
                          <div className="filter-menu">
                            <select
                              {...register("session")}
                              className="form-select"
                              size="4"
                              style={{ border: "none" }}
                            >
                              <option disabled>সাল নির্বাচন করুন</option>
                              {academicYear?.data.map((item) => (
                                <option>{item.academic_year}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-12">
                          <div className="filter-menu">
                            <select
                              {...register("exam_name")}
                              className="form-select"
                              size="4"
                              style={{ border: "none" }}
                            >
                              <option disabled>পরীক্ষা নির্বাচন করুন</option>
                              {examName?.data.map((item) => (
                                <option>{item.exam_name}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-12">
                          <div className="filter-menu">
                            <select
                              {...register("class")}
                              className="form-select"
                              size="4"
                              style={{ border: "none" }}
                            >
                              <option disabled>শ্রেণী নির্বাচন করুন</option>
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

                      <div className="row mt-3">
                        <div className="col-12">
                          <button
                            type="submit"
                            className="custom-btn btn-primary d-block w-100"
                          >
                            Preview
                          </button>
                          <ReactPrint
                            trigger={() => (
                              <button
                                type="submit"
                                className="m-2 custom-btn btn-primary d-block w-"
                              >
                                Print
                              </button>
                            )}
                            content={() => ref.current}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* <!--Preview Page Section--> */}
                  <div className="col-lg-8 col-12 col-md-12 mt-lg-0 mt-4">
                    <div ref={ref}>
                      {report === "১. পরীক্ষার ফি উত্তোলন তালিকা" ? (
                        <FeeCollectionList data={data} val={val} />
                      ) : null}
                      {report === "২. প্রবেশপত্র" ? (
                        <ExamPass
                          data={data}
                          val={val}
                          // instituteInfo={instituteInfo}
                        />
                      ) : null}
                      {report === "৩. দস্তখতপত্র" ? (
                        <Attandance
                          classData={classData}
                          data={data}
                          val={val}
                        />
                      ) : null}
                      {report === "৪. নাম্বরপত্র" ? (
                        <MarkSheet data={data} val={val} />
                      ) : null}
                      {report === "৫. সীট নং" ? (
                        <SeatPlan
                          data={data}
                          val={val}
                          instituteInfo={instituteInfo}
                        />
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Report Section END --> */}
      {/* <!--Admit Card Modal--> */}
      <div
        className="modal fade"
        id="admitcard"
        aria-hidden="true"
        tabindex="-1"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="section-title">
              <h4>প্রবেশপত্র</h4>
            </div>
            <form>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12 w-100">
                    <div className="row">
                      <div className="col-12 d-flex justify-content-center">
                        <div className="entrytype-option">
                          <div
                            className="form-check"
                            style={{ paddingLeft: "1.5em" }}
                          >
                            <input
                              className="form-check-input"
                              type="radio"
                              name="options"
                            />
                            <label className="form-check-label" for="options">
                              সকল শিক্ষার্থী
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="options"
                            />
                            <label className="form-check-label" for="options">
                              আলাদা এন্ট্রি
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="my-4">
                          <div className="row">
                            <div className="col-3">
                              <div className="row mb-3">
                                <div className="col-12">
                                  <div className="row">
                                    <label className="col-sm-12 col-form-label info-lable text-center">
                                      শিক্ষবর্ষ
                                      <i>*</i>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <select className="form-select">
                                    <option selected="">
                                      {" "}
                                      শিক্ষবর্ষ নির্বাচন করুন
                                    </option>
                                    <option>২০১৮</option>
                                    <option>২০১৯</option>
                                    <option>২০২০</option>
                                    <option>২০২১</option>
                                    <option>২০২২</option>
                                    <option>২০২৩</option>
                                    <option>২০২৪</option>
                                    <option>২০২৫</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              <div className="row mb-3">
                                <div className="col-12">
                                  <div className="row">
                                    <label className="col-sm-12 col-form-label info-lable text-center">
                                      পরীক্ষা
                                      <i>*</i>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <select className="form-select">
                                    <option selected="">
                                      পরীক্ষা নির্বাচন করুন
                                    </option>
                                    <option>প্রথম সাময়িক পরীক্ষা</option>
                                    <option>দ্বিতীয় সাময়িক পরীক্ষা</option>
                                    <option>তৃতীয় সাময়িক পরীক্ষা</option>
                                    <option>বোর্ড পরীক্ষা</option>
                                    <option>মাসিক পরীক্ষা</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              <div className="row mb-3">
                                <div className="col-12">
                                  <div className="row">
                                    <label className="col-sm-12 col-form-label info-lable text-center">
                                      মারহালা/শ্রেণী
                                      <i>*</i>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <select className="form-select">
                                    <option selected="">
                                      শ্রেণী নির্বাচন করুন
                                    </option>
                                    <option>তাকমীল (ক)</option>
                                    <option>তাকমীল (খ)</option>
                                    <option>মক্তব</option>
                                    <option>
                                      হিফযুল কুরআন পরীক্ষামুলক মারহালা
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              <div className="row mb-3">
                                <div className="col-12">
                                  <div className="row">
                                    <label className="col-sm-12 col-form-label info-lable text-center">
                                      রিপোর্টের ধরন
                                      <i>*</i>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <select className="form-select">
                                    <option selected="">নির্বাচন করুন</option>
                                    <option>A4 পেপারে বাংলা</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <div className="row">
                                <div className="col-12">
                                  <div className="row">
                                    <label className="col-sm-2 col-form-label info-lable">
                                      শিক্ষার্থীর আইডি
                                    </label>
                                    <div className="col-6">
                                      <input
                                        type="search"
                                        className="form-control"
                                        placeholder="শিক্ষার্থীর আইডি"
                                      />
                                    </div>
                                    <div className="col-2">
                                      <input
                                        type="button"
                                        className="custom-btn btn-primary"
                                        value="Save"
                                      />
                                    </div>
                                    <div className="col-2">
                                      <input
                                        type="button"
                                        className="custom-btn btn-danger"
                                        value="Close"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-12">
                        <div className="migration-container">
                          <div className="migration-title">
                            কালার নির্বাচন করুন
                          </div>
                          <div className="migration-type">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="options-2"
                              />
                              <label className="form-check-label" for="options">
                                রঙিন
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="options-2"
                              />
                              <label className="form-check-label" for="options">
                                সাদা কালো
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="options-2"
                              />
                              <label className="form-check-label" for="options">
                                প্রেসে ছাপানো কাগজে
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-12 d-flex justify-content-center">
                        <a
                          href="#"
                          className="custom-btn btn-primary"
                          onclick="javascript:void(0)"
                        >
                          <i className="bi bi-printer"></i>
                          প্রিন্ট
                        </a>
                      </div>
                    </div>
                    <div className="row mt-4">
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
                                <th>দাখেলা</th>
                                <th>শিক্ষার্থীর নাম</th>
                                <th>ক্লাস</th>
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
                              <tr>
                                <td></td>
                                <td></td>
                                <td></td>
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
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="button-group">
                  <button
                    className="custom-btn btn-primary"
                    type="submit"
                    data-bs-toggle="modal"
                    data-bs-target="#admissonfees"
                  >
                    Save
                  </button>
                  <button className="custom-btn btn-dark" type="submit">
                    New
                  </button>
                  <button
                    className="custom-btn btn-danger d-block"
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
    </div>
  );
};

export default ExamReport;
