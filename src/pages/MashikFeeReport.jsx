import axios from "axios";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import ReactToPrint from "react-to-print";
import { serverUrl } from "../../utils/config";
import DateHishab from "../Comonents/Report/HishabNikash/DateHishab";
import JomaLedger from "../Comonents/Report/HishabNikash/JomaLedger";
import KhabarFee from "../Comonents/Report/HishabNikash/KhabarFee";
import KhorochLedger from "../Comonents/Report/HishabNikash/KhorochLedger";
import MonthlyFee from "../Comonents/Report/HishabNikash/MonthlyFee";
import MoukufHishab from "../Comonents/Report/HishabNikash/MoukufHishab";

const Report = () => {
  const ref = useRef();

  const [record, setRecord] = useState();
  const [report, setReport] = useState();
  const [value, setValue] = useState();
  const [student, setStudent] = useState();
  const [moukuf, setMoukuf] = useState();
  console.log("🚀 ~ file: MashikFeeReport.jsx:13 ~ Report ~ student", student);

  const { data: marhalaClass } = useQuery("marhalaclass", () =>
    fetch(`${serverUrl}/api/marhalaclass`).then((res) => res.json())
  );
  const { data: academicYear } = useQuery("academicyear", () =>
    fetch(`${serverUrl}/api/academicyear`).then((res) => res.json())
  );
  const { data: months } = useQuery("months", () =>
    fetch(`${serverUrl}/api/month-entry`).then((res) => res.json())
  );

  // const getStudent = (student_id) => {
  //   const { data: studentData } = useQuery("student", () =>
  //     fetch(`${serverUrl}/api/marhalaclass/${student_id}`).then((res) =>
  //       res.json()
  //     )
  //   );

  //   return studentData?.data.student_name;
  // };

  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/monthly-fee-report`, data);
    },
    onError: (error, variable, context) => {
      // console.log(error.response.data.message);
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      console.log("userdasdfata", data.data);
      setRecord(data.data);
      // getStudent(data?.data.id)

      // window.location.reload(true);
    },
  });

  const studentMutation = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/filter-student-by-class`, data);
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

  const { mutate } = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/moukuf-student`, data);
    },
    onError: (error, variable, context) => {
      // console.log(error.response.data.message);
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      // console.log("userdata", data.data);
      setMoukuf(data.data);
      // window.location.reload(true);
    },
  });

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    mutation.mutate(data);
    setValue(data);
    studentMutation.mutate(data);
    mutate(data);
  };
  console.log(report);

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
                      <h4>রিপোর্ট</h4>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* <!--Filter Menu Section--> */}
                  <div className="col-lg-4 col-12 col-md-12 d-print-none">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div class="col-12">
                        <div class="filter-menu">
                          <select
                            onChange={(e) => setReport(e.target.value)}
                            class="form-select"
                            size="9"
                            aria-label="size 3 select example"
                          >
                            <option disabled>নির্বাচন করুন</option>
                            <option>১. সংক্ষিপ্ত মাসিক ফির তালিকা</option>
                            <option>২. সংক্ষিপ্ত খাবার ফির তালিকা</option>
                            <option>৩ জমা লেজার</option>
                            <option>৪ খরচ লেজার</option>
                            <option>৫ তারিখ ধরে হিসাব</option>
                            <option>৬. ছাত্র/ছাত্রি মওকুফ তালিকা</option>
                          </select>
                        </div>
                      </div>
                      {report === "৫ তারিখ ধরে হিসাব" && (
                        <div className="col-lg-7 col-12 col-md-12 m-3">
                          <div className="row mb-lg-3 mb-1">
                            <label className="col-lg-4 col-12 col-md-12 col-form-label info-lable">
                              তারিখঃ
                              <i>*</i>
                            </label>
                            <div className="col-lg-8 col-12 col-md-12">
                              <input
                                required
                                type="date"
                                className="form-control"
                                placeholder="মাতার নাম"
                                {...register("date")}
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="row mt-3">
                        <div className="col-12">
                          <div className="filter-menu">
                            <select
                              className="form-select"
                              size="4"
                              style={{ border: "none" }}
                              {...register("month")}
                            >
                              <option disabled>মাস নির্বাচন করুন</option>

                              <option>{months?.data[0]?.m1}</option>
                              <option>{months?.data[0]?.m2}</option>
                              <option>{months?.data[0]?.m3}</option>
                              <option>{months?.data[0]?.m4}</option>
                              <option>{months?.data[0]?.m5}</option>
                              <option>{months?.data[0]?.m6}</option>
                              <option>{months?.data[0]?.m7}</option>
                              <option>{months?.data[0]?.m8}</option>
                              <option>{months?.data[0]?.m9}</option>
                              <option>{months?.data[0]?.m10}</option>
                              <option>{months?.data[0]?.m11}</option>
                              <option>{months?.data[0]?.m12}</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-12">
                          <div className="filter-menu">
                            <select
                              className="form-select"
                              size="4"
                              style={{ border: "none" }}
                              {...register("session")}
                            >
                              <option disabled>সাল নির্বাচন করুন</option>
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
                      <div className="row mt-3">
                        <div className="col-12">
                          <div className="filter-menu">
                            <select
                              className="form-select"
                              size="4"
                              style={{ border: "none" }}
                              {...register("class")}
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
                      {/* <div className="row mt-3">
                        <div className="col-12">
                          <div className="filter-menu">
                            <select
                              className="form-select"
                              size="4"
                              aria-label="size 3 select example"
                            >
                              <option selected>
                                শিক্ষার্থীর ধরণ নির্বাচন করুন
                              </option>
                              <option>নতুন</option>
                              <option>পুরাতন</option>
                              <option>উভয়</option>
                            </select>
                          </div>
                        </div>
                      </div> */}
                      <div className="row mt-3">
                        <div className="col-12">
                          <button
                            type="submit"
                            className="custom-btn btn-primary d-block w-100"
                          >
                            Preview
                          </button>
                          <ReactToPrint
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
                    {/* <form action="">
                      <div className="row p-3">
                        <div className="col-12">
                          <div className="filter-menu">
                            <select
                              className="form-select"
                              size="9"
                              aria-label="size 3 select example"
                            >
                              <option disabled>নির্বাচন করুন</option>
                 
                              <option>অনাবাসিক</option>
                              <option>আবাসিক</option>
                              <option>নতুন</option>
                              <option>পুরাতন</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </form> */}
                  </div>
                  {/* <!--Preview Page Section--> */}
                  {/* <div className="col-lg-8 col-12 col-md-12 mt-lg-0 mt-4">
                    <div className="preview-page d-print-block">
                      <span
                        className="print-button d-print-none"
                        onclick="window.print()"
                      >
                        <i className="bi bi-printer-fill"></i>
                      </span>
                      <div className="pages-title">
                        <h5>জামিয়া আরাবিয়া ইমদাদুল ফরিদাবাদ</h5>
                        <p>১১/১২ মাদরাসা রোড, গেন্ডারিয়া, ঢাকা-১২০৪</p>
                        <span>01832-061454 # 027440235</span>
                        <br />
                        <span className="pages-subtitle">
                          ভর্তি রেজিস্টার: ২০২২
                        </span>
                      </div>
                      <div className="pages-content">
                        <p className="my-2">জামাত/ক্লাশ : তাকমীল (ক)</p>
                        <div
                          className="table-responsive"
                          data-pattern="priority-columns"
                        >
                          <table className="table  bg-white table-bordered text-center report-table">
                            <thead className="text-center">
                              <tr>
                                <th>দাখেল</th>
                                <th>নাম</th>
                                <th>পিতার নাম</th>
                                <th>জন্ম তারিখ</th>
                                <th>রক্তের গ্রুপ</th>
                                <th>মোবাইল নাম্বার</th>
                              </tr>
                            </thead>
                            <tbody>
                              {student?.map((item) => (
                                <tr key={item.id}>
                                  <td>{item.id}</td>
                                  <td>{item.student_name}</td>
                                  <td>{item.father_name}</td>
                                  <td>{item.dob}</td>
                                  <td>A+</td>
                                  <td>{item.phn_no}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="col-lg-8 col-12 col-md-12 mt-lg-0 mt-4">
                    <div ref={ref}>
                      {report === "১. সংক্ষিপ্ত মাসিক ফির তালিকা" && (
                        <MonthlyFee
                          value={value}
                          months={months}
                          student={student}
                        />
                      )}
                      {report === "২. সংক্ষিপ্ত খাবার ফির তালিকা" && (
                        <KhabarFee
                          value={value}
                          months={months}
                          student={student}
                        />
                      )}
                      {report === "৩ জমা লেজার" && (
                        <JomaLedger
                          value={value}
                          months={months}
                          student={student}
                        />
                      )}
                      {report === "৪ খরচ লেজার" && (
                        <KhorochLedger
                          value={value}
                          months={months}
                          student={student}
                        />
                      )}
                      {report === "৫ তারিখ ধরে হিসাব" && (
                        <DateHishab
                          value={value}
                          months={months}
                          student={student}
                        />
                      )}
                      {report === "৬. ছাত্র/ছাত্রি মওকুফ তালিকা" && (
                        <MoukufHishab value={value} data={moukuf} />
                      )}
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

export default Report;
