import axios from "axios";
import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import { serverUrl } from "../../../utils/config";
import DonerMemberPayTable from "./../../Comonents/DonerMemberPayTable";

const DonateRecive = () => {
  const { data: doner_member } = useQuery("doner_member", () =>
    fetch(`${serverUrl}/api/doner-member`).then((res) => res.json())
  );

  const [session, setSession] = useState();
  const [month, setMonth] = useState();
  const [paidTable, setPaidTable] = useState();
  const [notPaidTable, setNotPaidTable] = useState([]);

  console.log("paid table", paidTable);

  //দাতা সদস্যদের ফি গ্রহণ
  const { data: academicYear } = useQuery("academicyear", () =>
    fetch(`${serverUrl}/api/academicyear`).then((res) => res.json())
  );

  const { data: sallery_sheet } = useQuery("sallery-sheet", () =>
    fetch(`${serverUrl}/api/sallery-sheet`).then((res) => res.json())
  );

  const { data: paid_sallery } = useQuery("paid_sallery", () =>
    fetch(`${serverUrl}/api/monthly-sallery-entry`).then((res) => res.json())
  );

  const { data: months } = useQuery("teacher_month", () =>
    fetch(`${serverUrl}/api/teacher-month-entry`).then((res) => res.json())
  );

  const findMonth = months?.find((i) => i.session === session);

  //payroll-filter

  const { mutate } = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/doner-fee`, data);
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
      return axios.post(`${serverUrl}/api/employee-payroll-queue`, data);
    },
    onError: (error, variable, context) => {
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      console.log("return", data);
      setNotPaidTable(data);
    },
  });

  const searchStaff = () => {
    mutate({ session, month });
    notPaidMutate({ session, month });
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
                      <h4>
                        {" "}
                        দাতা সদস্যদের ফি গ্রহণ / {month} / {session}
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-lg-4 col-12 col-md-12">
                        <div className="row">
                          <label className="col-lg-5 col-12 col-form-label info-lable">
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
                      </div>
                      <div className="col-lg-6 col-12 col-md-12">
                        <div className="row">
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
                          <div className="col-lg-5 col-md-6 col-12 mt-2 mt-md-0">
                            <button
                              onClick={searchStaff}
                              type="submit"
                              className="custom-btn btn-primary d-block w-100"
                            >
                              Search
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8 col-12 d-print-none">
                    <div className="row mt-3">
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
                              className={{
                                backgroundColor: "#62659B",
                                color: "white",
                              }}
                            >
                              <tr>
                                <th>আইডি নং</th>
                                <th>নাম</th>
                                <th>নির্ধারিত ফি</th>
                                <th> ফি</th>
                                <th> কর্তন</th>
                                <th> </th>
                              </tr>
                            </thead>
                            <tbody>
                              {doner_member?.map((item) => (
                                <tr key={item.id}>
                                  <DonerMemberPayTable
                                    month={month}
                                    session={session}
                                    item={item}
                                  />
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-12 d-print-none">
                    <div className="row mt-3">
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
                                {/* <th></th> */}
                                <th> নাম</th>
                                <th>জমা</th>
                                <th>কর্তন</th>

                                <th>তারিখ</th>
                              </tr>
                            </thead>
                            <tbody>
                              {paidTable?.data?.map((item) => (
                                <tr>
                                  {/* <th>
                                    <span className="action-edit">
                                      <i className="bi bi-pencil-square"></i>
                                    </span>
                                  </th> */}
                                  <td>{item.name}</td>

                                  <td>{item.fee}</td>
                                  <td>{item.korton}</td>
                                  <td>{item.updated_at.slice(0, 10)}</td>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonateRecive;
