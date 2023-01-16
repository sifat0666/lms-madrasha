import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { serverUrl } from "../../utils/config";

const Report = () => {
  const [record, setRecord] = useState();
  const [value, setValue] = useState();

  const { data: marhalaClass } = useQuery("marhalaclass", () =>
    fetch(`${serverUrl}/api/marhalaclass`).then((res) => res.json())
  );
  const { data: academicYear } = useQuery("academicyear", () =>
    fetch(`${serverUrl}/api/academicyear`).then((res) => res.json())
  );
  const { data: months } = useQuery("months", () =>
    fetch(`${serverUrl}/api/month-entry`).then((res) => res.json())
  );

  const getStudent = (student_id) => {
    const { data: studentData } = useQuery("student", () =>
      fetch(`${serverUrl}/api/marhalaclass/${student_id}`).then((res) =>
        res.json()
      )
    );

    return studentData?.data.student_name;
  };

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

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    mutation.mutate(data);
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
                              {/* {academicYear?.data.map((item) => (
                                    <option
                                      key={item.id}
                                      // onClick={() => setClasss(item.academicYear)}
                                    >
                                      {item.academic_year}
                                    </option>
                                  ))} */}
                              <option>{months?.data[0].m1}</option>
                              <option>{months?.data[0].m2}</option>
                              <option>{months?.data[0].m3}</option>
                              <option>{months?.data[0].m4}</option>
                              <option>{months?.data[0].m5}</option>
                              <option>{months?.data[0].m6}</option>
                              <option>{months?.data[0].m7}</option>
                              <option>{months?.data[0].m8}</option>
                              <option>{months?.data[0].m9}</option>
                              <option>{months?.data[0].m10}</option>
                              <option>{months?.data[0].m11}</option>
                              <option>{months?.data[0].m12}</option>
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
                    <div
                      className="preview-page d-print-block"
                      style={{ zIndex: 1 }}
                    >
                      <span
                        className="print-button d-print-none"
                        onclick="window.print()"
                      >
                        <i className="bi bi-printer-fill"></i>
                      </span>
                      <div className="pages-title d-print-none">
                        <h5>জামিয়া আরাবিয়া ইমদাদুল ফরিদাবাদ</h5>
                        <p>১১/১২ মাদরাসা রোড, গেন্ডারিয়া, ঢাকা-১২০৪</p>
                        <span>01832-061454 # 027440235</span>
                        <br />
                        <span className="pages-subtitle">
                          মাসিক ফি উত্তোলন তালিকা
                        </span>
                      </div>
                      <div className="pages-content">
                        <div className="row my-3 justify-content-center align-items-center d-print-none">
                          <div className="col-5">
                            <p className="my-2">
                              <strong>শ্রেণী/মারহালাঃ</strong>
                              {value?.class}
                            </p>
                          </div>
                          <div className="col-3">
                            <p className="my-2">
                              <strong>শিক্ষবর্ষঃ</strong>
                              {value?.session}
                            </p>
                          </div>
                          <div className="col-4 d-flex justify-content-start justify-content-lg-end">
                            <p className="my-2">
                              <strong>প্রিন্ট তারিখঃ</strong>
                              ০৪/০৩/২০২২ ইং
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div
                              className="table-responsive"
                              data-pattern="priority-columns"
                            >
                              <table className="table  bg-white table-bordered text-center report-table">
                                <thead className="text-center">
                                  <tr>
                                    <td colspan="4">
                                      <div className="pages-title">
                                        <h5>
                                          জামিয়া আরাবিয়া ইমদাদুল ফরিদাবাদ
                                        </h5>
                                        <p>
                                          ১১/১২ মাদরাসা রোড, গেন্ডারিয়া,
                                          ঢাকা-১২০৪
                                        </p>
                                        <span>01832-061454 # 027440235</span>
                                        <br />
                                        <span className="pages-subtitle">
                                          মাসিক ফি উত্তোলন তালিকা
                                        </span>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="4">
                                      <div className="d-flex justify-content-between">
                                        <div>
                                          <strong>মারহালাঃ</strong>
                                          {value?.class}
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>আইডি</th>
                                    <th>ফি</th>
                                    <th>Date</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {record?.map((item) => (
                                    <tr>
                                      <td>{item?.id}</td>
                                      <td>{item?.fee}</td>
                                      <td>{item?.date}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="col-12 mt-3">
                            <div
                              className="table-responsive"
                              data-pattern="priority-columns"
                            ></div>
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

export default Report;
