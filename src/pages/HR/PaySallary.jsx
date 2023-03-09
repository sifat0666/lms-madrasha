import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { serverUrl } from "../../../utils/config";

const PaySallary = () => {
  const [session, setSession] = useState();
  const [month, setMonth] = useState();

  const { data: academicYear } = useQuery("academicyear", () =>
    fetch(`${serverUrl}/api/academicyear`).then((res) => res.json())
  );

  const { data: sallery_sheet } = useQuery("sallery-sheet", () =>
    fetch(`${serverUrl}/api/sallery-sheet`).then((res) => res.json())
  );

  const { data: months } = useQuery("teacher_month", () =>
    fetch(`${serverUrl}/api/teacher-month-entry`).then((res) => res.json())
  );

  const findMonth = months?.find((i) => i.session === session);

  console.log("sessoin state", session);
  console.log("findMonth", findMonth);

  const searchStaff = () => {
    console.log({ session, month });
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
                      <h4> শিক্ষক/স্টাফদের বেতন প্রদান</h4>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-lg-3 col-12 col-md-12">
                        <div className="row">
                          <label className="col-lg-5 col-12 col-form-label info-lable">
                            শিক্ষাবর্ষ
                          </label>
                          <div className="col-lg-7 col-12 col-md-12">
                            <select
                              onChange={(e) => setSession(e.target.value)}
                              className="form-select"
                            >
                              <option disabled>সিলেক্ট করুন</option>
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
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sperator"></div>
                <div className="row">
                  <div className="col-lg-3 col-12 d-print-none">
                    <form>
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
                                  <th>শিক্ষকের নাম</th>
                                  <th>নির্ধারিত বেতন</th>
                                </tr>
                              </thead>
                              <tbody>
                                {sallery_sheet?.map((item) => (
                                  <tr key={item.id}>
                                    <th>{item.employee_id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.total}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-3 col-12 d-print-none">
                    <form>
                      <div className="row mt-3">
                        <div className="col-12">
                          <div className="row mb-2">
                            <label
                              className="col-lg-5 col-12 col-md-5 col-form-label info-lable"
                              style={{ textAlign: "left" }}
                            >
                              লেনদেনের ধরণ
                            </label>
                            <div className="col-lg-7 col-12 col-md-7">
                              <select className="form-select">
                                <option value="" selected="">
                                  সিলেক্ট করুন
                                </option>
                                <option value="">বেতন প্রদান</option>
                                <option value="">লোন প্রদান</option>
                                <option value="">আমানত প্রদান</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="row mb-2">
                            <label
                              className="col-lg-5 col-12 col-md-5 col-form-label info-lable"
                              style={{ textAlign: "left" }}
                            >
                              এন্ট্রির তারিখ
                            </label>
                            <div className="col-lg-7 col-12 col-md-7">
                              <input type="date" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="row mb-2">
                            <label
                              className="col-lg-5 col-12 col-md-5 col-form-label info-lable"
                              style={{ textAlign: "left" }}
                            >
                              শিক্ষাবর্ষ
                            </label>
                            <div className="col-lg-7 col-12 col-md-7">
                              <select className="form-select">
                                <option value="" selected="">
                                  সিলেক্ট করুন
                                </option>
                                <option value="">২০২২</option>
                                <option value="">২০২৩</option>
                                <option value="">২০২৪</option>
                                <option value="">২০২৫</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="row mb-2">
                            <label
                              className="col-lg-5 col-12 col-md-5 col-form-label info-lable"
                              style={{ textAlign: "left" }}
                            >
                              মাস
                            </label>
                            <div className="col-lg-7 col-12 col-md-7">
                              <select className="form-select">
                                <option value="" selected="">
                                  সিলেক্ট করুন
                                </option>
                                <option value="">জানুয়ারী</option>
                                <option value="">ফেব্রুয়ারী</option>
                                <option value="">মার্চ</option>
                                <option value="">এপ্রিল</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="row mb-2">
                            <label
                              className="col-lg-5 col-12 col-md-5 col-form-label info-lable"
                              style={{ textAlign: "left" }}
                            >
                              শিক্ষক নাম
                            </label>
                            <div className="col-lg-7 col-12 col-md-7">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="শিক্ষক/স্টাফের নাম"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="row mb-2">
                            <label
                              className="col-lg-5 col-12 col-md-5 col-form-label info-lable"
                              style={{ textAlign: "left" }}
                            >
                              পরিমান
                            </label>
                            <div className="col-lg-7 col-12 col-md-7">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="বেতনের পরিমান"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="row mb-2">
                            <label
                              className="col-lg-5 col-12 col-md-5 col-form-label info-lable"
                              style={{ textAlign: "left" }}
                            >
                              মন্তব্য
                            </label>
                            <div className="col-lg-7 col-12 col-md-7">
                              <textarea
                                className="form-control"
                                rows="2"
                                placeholder="মন্তব্য"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-12 paysalary-btn">
                          <div className="row">
                            <div className="col-6">
                              <button className="custom-btn btn-primary d-block w-100 mb-2">
                                Save
                              </button>
                              <button className="custom-btn btn-dark d-block w-100">
                                Update
                              </button>
                            </div>
                            <div className="col-6">
                              <button className="custom-btn btn-dark d-block w-100 mb-2">
                                New
                              </button>
                              <button className="custom-btn btn-danger d-block w-100">
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-6 col-12 d-print-none">
                    <div className="row mt-3">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-lg-6 col-12 col-md-6">
                            <div className="row">
                              <div className="col-lg-9 col-md-9 col-12">
                                <input
                                  type="date"
                                  placeholder=""
                                  className="form-control"
                                />
                              </div>
                              <label className="col-lg-3 col-md-3 col-12 col-form-label info-lable">
                                পর্যন্ত
                                <i>*</i>
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="row">
                              <div className="col-lg-7 col-md-7 col-12">
                                <input
                                  type="date"
                                  placeholder=""
                                  className="form-control"
                                />
                              </div>
                              <div className="col-lg-5 col-md-5 col-12 mt-2 mt-md-0">
                                <button className="custom-btn btn-primary d-block w-100">
                                  Show
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                                <th>
                                  <span className="action-edit">
                                    <i className="bi bi-pencil-square"></i>
                                  </span>
                                </th>
                                <th>আইডি</th>
                                <th>শিক্ষকের নাম</th>
                                <th>মোট বেতন</th>
                                <th>মাস</th>
                                <th>তারিখ</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th>
                                  <span className="action-edit">
                                    <i className="bi bi-pencil-square"></i>
                                  </span>
                                </th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
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

export default PaySallary;
