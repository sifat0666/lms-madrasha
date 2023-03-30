import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { serverUrl } from "../../utils/config";
import StudentList from "../Comonents/Report/Student/StudentList";
import StudentListNew from "../Comonents/Report/Student/StudentListNew";
import StudentListOld from "../Comonents/Report/Student/StudentListOld";
import StudentListBoy from "../Comonents/Report/Student/StudentListBoy";
import StudentListGirl from "../Comonents/Report/Student/StudentListGirl";
import StudentListResi from "../Comonents/Report/Student/StudentListResi";
import StudentListUnresi from "../Comonents/Report/Student/StudentListUnresi";
import Survey from "../Comonents/Report/Student/Survey";
import ParentNo from "../Comonents/Report/Student/ParentNo";
import TarikhOnijayiFee from "../Comonents/Report/Student/TarikhOnujayiFee";
import VortiFeeReport from "../Comonents/Report/Student/VortiFeeReport";
import { useRef } from "react";
import ReactToPrint from "react-to-print";
import HajiraKhata from "../Comonents/Report/Student/HajiraKhata";

const Report = () => {
  const ref = useRef();

  const [student, setStudent] = useState();
  const [value, setValue] = useState();
  const [report, setReport] = useState();
  const [survey, setSurvey] = useState();

  const { data: marhalaClass } = useQuery("marhalaclass", () =>
    fetch(`${serverUrl}/api/marhalaclass`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );
  // const { data: studentData } = useQuery("marhalaclass", () =>
  //   fetch(`${serverUrl}/api/marhalaclass`).then((res) => res.json())
  // );
  const { data: academicYear } = useQuery("academicyear", () =>
    fetch(`${serverUrl}/api/academicyear`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

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

  const surveyMutaion = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/student-servey`, data, {
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
      // window.location.reload(true);
      setSurvey(data?.data);
    },
  });

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    mutation.mutate(data);
    surveyMutaion.mutate(data);
    setValue(data);
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
                            class="form-select"
                            size="9"
                            aria-label="size 3 select example"
                            onChange={(e) => setReport(e.target.value)}
                          >
                            <option disabled>নির্বাচন করুন</option>
                            <option>১. ভর্তি রেজিস্টার</option>
                            <option>২. ভর্তি রেজিস্টার নতুন</option>
                            <option>৩. ভর্তি রেজিস্টার পুরাতন</option>
                            <option>৪. ভর্তি রেজিস্টার ছাত্র</option>
                            <option>৫. ভর্তি রেজিস্টার ছাত্রী</option>
                            <option>৬. ভর্তি রেজিস্টার আবাসিক</option>
                            <option>৭. ভর্তি রেজিস্টার অনাবাসিক</option>
                            {/* <option>৮. নতুন পুরাতন শিক্ষার্থীর তালিকা</option> */}
                            <option>
                              ৮. মারহালাওয়ারী নতুন পুরাতন মোট শিক্ষার্থী
                            </option>
                            {/* <option>
                              ৬. শিক্ষার্থীদের সংক্ষিপ্ত তালিকা দুই কলামে
                            </option> */}
                            <option>৯. অভিবাবকের মোবাইল</option>
                            <option>১০. ভর্তি ফি এর রিপোর্ট</option>
                            <option>১১. আজকের ভর্তি রিপোর্ট</option>
                            <option>১২. হাজিরা খাতা</option>
                            <option>১৩. হাজিরা রিপোর্ট</option>
                            {/* <option>
                              ৮. মারহালা ওয়ারী কিতাব/বিষয়ের তালিকা
                            </option>
                            <option>
                              ৯. শিক্ষার্থীদের পরিচয় পত্র (আইডি কার্ড)
                            </option>
                            <option>
                              ১০. শিক্ষার্থীদের পরিচয় পত্র (আইডি কার্ড)
                            </option> */}
                          </select>
                        </div>
                      </div>
                      {report === "১১. আজকের ভর্তি রিপোর্ট" && (
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
                  </div>
                  {/* <!--Preview Page Section--> */}
                  <div className="col-lg-8 col-12 col-md-12 mt-lg-0 mt-4">
                    <div ref={ref}>
                      {report === "১. ভর্তি রেজিস্টার" && (
                        <StudentList student={student} value={value} />
                      )}{" "}
                      {report === "২. ভর্তি রেজিস্টার নতুন" && (
                        <StudentListNew student={student} value={value} />
                      )}{" "}
                      {report === "৩. ভর্তি রেজিস্টার পুরাতন" && (
                        <StudentListOld student={student} value={value} />
                      )}{" "}
                      {report === "৪. ভর্তি রেজিস্টার ছাত্র" && (
                        <StudentListBoy student={student} value={value} />
                      )}{" "}
                      {report === "৫. ভর্তি রেজিস্টার ছাত্রী" && (
                        <StudentListGirl student={student} value={value} />
                      )}{" "}
                      {report === "৬. ভর্তি রেজিস্টার আবাসিক" && (
                        <StudentListResi student={student} value={value} />
                      )}{" "}
                      {report === "৭. ভর্তি রেজিস্টার অনাবাসিক" && (
                        <StudentListUnresi student={student} value={value} />
                      )}
                      {report ===
                        "৮. মারহালাওয়ারী নতুন পুরাতন মোট শিক্ষার্থী" && (
                        <Survey survey={survey} value={value} />
                      )}
                      {report === "৯. অভিবাবকের মোবাইল" && (
                        <ParentNo student={student} value={value} />
                      )}{" "}
                      {report === "১০. ভর্তি ফি এর রিপোর্ট" && (
                        <VortiFeeReport student={student} value={value} />
                      )}{" "}
                      {report === "১১. আজকের ভর্তি রিপোর্ট" && (
                        <TarikhOnijayiFee student={student} value={value} />
                      )}
                      {report === "১২. হাজিরা খাতা" && (
                        <HajiraKhata student={student} value={value} />
                      )}{" "}
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
