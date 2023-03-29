import axios from "axios";
import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import { serverUrl } from "../../../utils/config";
import DetailsShortList from "../../Comonents/Report/EmployeeSallery/DetailsShortList";
import MonthlyBokeyaList from "../../Comonents/Report/EmployeeSallery/MonthlyBokeyaList";
import MonthlySalleryList from "../../Comonents/Report/EmployeeSallery/MonthlySalleryList";
import PodobiSalleryList from "../../Comonents/Report/EmployeeSallery/PodobiSalleryList";
import PodobiShortlist from "../../Comonents/Report/EmployeeSallery/PodobiShortlist";

const SalaryReport = () => {
  const [report, setReport] = useState();
  const [podobi, setPodobi] = useState();
  const [session, setSession] = useState();
  const [month, setMonth] = useState();
  const [paidTable, setPaidTable] = useState();
  const [notPaidTable, setNotPaidTable] = useState([]);

  console.log("paid table", paidTable);
  console.log("not paid table", notPaidTable);

  const { mutate } = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/payroll-filter`, data, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
    onError: (error, variable, context) => {
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      console.log("return", data);
      setPaidTable(data);
      // toast.success("submitted successfully");
    },
  });

  const { mutate: notPaidMutate } = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/employee-payroll-queue`, data, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
    onError: (error, variable, context) => {
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      console.log("return", data);
      setNotPaidTable(data);
    },
  });

  const searchPaid = () => {
    mutate({ session, month });
    notPaidMutate({ session, month });
  };

  const searchNotPaid = () => {
    mutate({ session, month });
    notPaidMutate({ session, month });
  };

  // console.log(report);

  const { data: podobis } = useQuery("podobi", () =>
    fetch(`${serverUrl}/api/podobi`).then((res) => res.json())
  );

  const { data: academicYear } = useQuery("academicyear", () =>
    fetch(`${serverUrl}/api/academicyear`).then((res) => res.json())
  );

  const { data: months } = useQuery("teacher_month", () =>
    fetch(`${serverUrl}/api/teacher-month-entry`).then((res) => res.json())
  );
  const findMonth = months?.find((i) => i.session === session);
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
                    <div className="row">
                      <div className="col-12">
                        <div className="filter-menu report-menu">
                          <select
                            onChange={(e) => setReport(e.target.value)}
                            className="form-select"
                            size="4"
                            style={{ border: "none" }}
                          >
                            <option disabled>নির্বাচন করুন</option>
                            <option>১. কর্মীদের নামের সংক্ষিপ্ত তালিকা</option>
                            <option>২. পদবি ভিত্তিক সংক্ষিপ্ত তালিকা</option>
                            <option>৩. মাস ভিত্তিক বেতন তালিকা</option>
                            <option>৪. মাস ভিত্তিক বকেয়া তালিকা</option>
                            {/* <option>
                              ৫. পদবি ভিত্তিক বেতন প্রদানের তালিকা
                            </option> */}
                            {/* <option>৬. বেতন শীট আলাদা</option> */}
                          </select>
                        </div>
                      </div>

                      {report === "৩. মাস ভিত্তিক বেতন তালিকা" ? (
                        <>
                          <div className="row mt-2">
                            <label className="col-lg-5 col-form-label ">
                              শিক্ষাবর্ষ
                            </label>
                            <div className="col-lg-7 col-12 col-md-12">
                              <select
                                onChange={(e) => setSession(e.target.value)}
                                className="form-select"
                              >
                                <option>সিলেক্ট করুন</option>
                                {academicYear?.data.map((item) => (
                                  <option key={item.id}>
                                    {item.academic_year}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="row mt-2 ">
                            <label className="col-lg-2 col-12 col-form-label info-lable">
                              মাস
                            </label>
                            <div className="col-lg-5 col-md-6 col-12">
                              <select
                                onChange={(e) => setMonth(e.target.value)}
                                className="form-select"
                              >
                                <option>সিলেক্ট করুন</option>
                                <option>{findMonth?.m1}</option>
                                <option>{findMonth?.m2}</option>
                                <option>{findMonth?.m3}</option>
                                <option>{findMonth?.m4}</option>
                                <option>{findMonth?.m5}</option>
                                <option>{findMonth?.m6}</option>
                                <option>{findMonth?.m7}</option>
                                <option>{findMonth?.m8}</option>
                                <option>{findMonth?.m9}</option>
                                <option>{findMonth?.m10}</option>
                                <option>{findMonth?.m11}</option>
                                <option>{findMonth?.m12}</option>
                              </select>
                            </div>
                            <button
                              onClick={searchPaid}
                              style={{ width: "100px" }}
                            >
                              submit
                            </button>
                          </div>
                        </>
                      ) : null}

                      {report === "৪. মাস ভিত্তিক বকেয়া তালিকা" ? (
                        <>
                          <div className="row mt-2">
                            <label className="col-lg-5 col-form-label info-lable ">
                              শিক্ষাবর্ষ
                            </label>
                            <div className="col-lg-7 col-12 col-md-12">
                              <select
                                onChange={(e) => setSession(e.target.value)}
                                className="form-select"
                              >
                                <option>সিলেক্ট করুন</option>
                                {academicYear?.data.map((item) => (
                                  <option key={item.id}>
                                    {item.academic_year}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="row mt-2 ">
                            <label className="col-lg-2 col-12 col-form-label info-lable">
                              মাস
                            </label>
                            <div className="col-lg-5 col-md-6 col-12">
                              <select
                                onChange={(e) => setMonth(e.target.value)}
                                className="form-select"
                              >
                                <option>সিলেক্ট করুন</option>
                                <option>{findMonth?.m1}</option>
                                <option>{findMonth?.m2}</option>
                                <option>{findMonth?.m3}</option>
                                <option>{findMonth?.m4}</option>
                                <option>{findMonth?.m5}</option>
                                <option>{findMonth?.m6}</option>
                                <option>{findMonth?.m7}</option>
                                <option>{findMonth?.m8}</option>
                                <option>{findMonth?.m9}</option>
                                <option>{findMonth?.m10}</option>
                                <option>{findMonth?.m11}</option>
                                <option>{findMonth?.m12}</option>
                              </select>
                            </div>
                            <button
                              onClick={searchNotPaid}
                              style={{ width: "100px" }}
                            >
                              submit
                            </button>
                          </div>
                        </>
                      ) : null}

                      {report === "২. পদবি ভিত্তিক সংক্ষিপ্ত তালিকা" ? (
                        <>
                          <label className="col-lg-2 col-md-2 col-12 col-form-label info-lable mt-3">
                            পদবীঃ
                            <i>*</i>
                          </label>
                          <div className="col-lg-5 col-md-5 col-6 mt-3">
                            <select
                              onChange={(e) => setPodobi(e.target.value)}
                              className="form-select"
                              // {...register("position")}
                            >
                              {podobis?.map((item) => (
                                <option>{item.podobi}</option>
                              ))}
                            </select>
                          </div>
                        </>
                      ) : null}
                      {report === "৫. পদবি ভিত্তিক বেতন প্রদানের তালিকা" ? (
                        <>
                          <label className="col-lg-2 col-md-2 col-12 col-form-label info-lable mt-3">
                            পদবীঃ
                            <i>*</i>
                          </label>
                          <div className="col-lg-5 col-md-5 col-6 mt-3">
                            <select
                              required
                              className="form-select"
                              // {...register("position")}
                            >
                              {podobis?.map((item) => (
                                <option>{item.podobi}</option>
                              ))}
                            </select>
                          </div>
                        </>
                      ) : null}
                    </div>
                    <div className="row mt-2"></div>

                    <div className="row mt-3">
                      <div className="col-12">
                        <button className="custom-btn btn-primary d-block w-100 mt-2">
                          Print
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <!--Preview Page Section--> */}
                  <div className="col-lg-8 col-12 col-md-12 mt-lg-0 mt-4">
                    {report === "১. কর্মীদের নামের সংক্ষিপ্ত তালিকা" ? (
                      <DetailsShortList />
                    ) : null}
                    {report === "২. পদবি ভিত্তিক সংক্ষিপ্ত তালিকা" ? (
                      <PodobiShortlist podobi={podobi} />
                    ) : null}{" "}
                    {report === "৩. মাস ভিত্তিক বেতন তালিকা" ? (
                      <MonthlySalleryList paidTable={paidTable} />
                    ) : null}{" "}
                    {report === "৪. মাস ভিত্তিক বকেয়া তালিকা" ? (
                      <MonthlyBokeyaList notPaidTable={notPaidTable} />
                    ) : null}{" "}
                    {report === "৫. পদবি ভিত্তিক বেতন প্রদানের তালিকা" ? (
                      <PodobiSalleryList podobi={podobi} />
                    ) : null}
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

export default SalaryReport;
