import axios from "axios";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import ReactToPrint from "react-to-print";
import { serverUrl } from "../../utils/config";

const MarkSheet = () => {
  const ref = useRef();

  const [student, setStudent] = useState();
  const [students, setStudents] = useState();
  const [value, setValue] = useState();
  const [results, setResults] = useState();
  const [division, setDivision] = useState([]);

  console.log("students ", students);

  console.log(student?.id);

  const { data: instituteInfo } = useQuery("instituteInfo", () =>
    fetch(`${serverUrl}/api/institute-info`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );
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

  const fetchResult = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/filter-result-per-class`, data, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
    onError: (error, variable, context) => {
      console.log("🚀 ~ file: MarkSheet.jsx:36 ~ MarkSheet ~ error", error);
    },
    onSuccess: (data) => {
      console.log(data?.data);
      setResults(data?.data);
    },
  });

  const customStudent = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/custom-student-call`, data, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
    onError: (error, variable, context) => {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      console.log("userdata", data.data);
      setStudents(data?.data);
      // window.location.reload(true);
    },
  });

  const fetchDivision = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/division-by-class`, data, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
    onError: (error, variable, context) => {
      console.log("🚀 ~ file: MarkSheet.jsx:36 ~ MarkSheet ~ error", error);
    },
    onSuccess: (data) => {
      console.log("dibi", data?.data);
      setDivision(data?.data);
    },
  });

  const { register, handleSubmit } = useForm();

  // const totalNumber = (x) => {
  //   return results
  //     ?.map((item) => {
  //       if (item.student_id === x) {
  //         return parseInt(item?.number);
  //       }
  //     })
  //     ?.reduce((accumulator, currentValue) => accumulator + currentValue);
  // };

  // const getTotalNumber = (x) => {
  //   const total = results
  //     ?.map((i) => {
  //       if (i.student_id == x) {
  //         return parseInt(i?.number);
  //       }
  //     })
  //     ?.reduce((accumulator, currentValue) => accumulator + currentValue);
  //   return total || 0;
  // };

  // const totalt = getTotalNumber(1);

  // console.log("totalt", getTotalNumber);

  // console.log("reshults", results);

  // con st total = students?.map((i) =>
  //   results
  //     ?.map((item) => {
  //       if (item.student_id == i.id) {
  //         return parseInt(item?.number);
  //       }
  //       return null;
  //     })
  //     ?.reduce((accumulator, currentValue) => accumulator + currentValue)
  // );

  // console.log("total", total);

  const onSubmit = async (data) => {
    customStudent.mutate(data);
    setStudent(student?.data);
    console.log(data);
    setValue(data);
    fetchResult.mutate(data);
    fetchDivision.mutate({
      session: data?.session,
      exam_name: data?.exam,
      class: data?.class,
    });
  };

  console.log("val", value);

  return (
    <div>
      <section className="user-form-section">
        <div className="section-bg">
          <div className="row bg-light h-100  ">
            <div className="col-md-12 w-100">
              <div className="main-container">
                <div className="row d-print-none">
                  <div className="col-12">
                    <div className="section-title" style={{ marginTop: "2px" }}>
                      <h4>মার্কশিট</h4>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* <!--Filter Menu Section--> */}
                  <div className="col-lg-4 col-md-12 col-12 d-print-none">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      {/* <div className="row mb-3">
                        <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                          রিপোর্ট
                          <i>*</i>
                        </label>
                        <div className="col-lg-8 col-md-8 col-12">
                          <select className="form-select">
                            <option value="" selected="">
                              সিলেক্ট করুন
                            </option>
                            <option value="">A4 পেপার</option>
                            <option value="">Ligal Paper</option>
                          </select>
                        </div>
                      </div> */}
                      <div className="row mb-3">
                        <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                          শিক্ষাবর্ষ
                          <i>*</i>
                        </label>
                        <div className="col-lg-8 col-md-8 col-12">
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
                      <div className="row mb-3">
                        <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                          পরীক্ষার নাম
                          <i>*</i>
                        </label>
                        <div className="col-lg-8 col-md-8 col-12">
                          <select
                            required
                            className="form-select"
                            size="3"
                            style={{ border: "none" }}
                            {...register("exam")}
                          >
                            {examName?.data.map((item) => (
                              <option key={item.id}>{item.exam_name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                          মারহালা
                          <i>*</i>
                        </label>
                        <div className="col-lg-8 col-md-8 col-12">
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
                                className="custom-btn btn-primary my-3"
                                type="submit"
                              >
                                Save
                              </button>
                            )}
                            content={() => ref.current}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* <!--Preview Page Section--> */}

                  <div className="col-lg-8 col-md-12 col-12 mt-2 mt-lg-0 ">
                    <div ref={ref}>
                      {students?.map((item) => (
                        <div
                          className=" m-1 mx-auto d-flex flex-column justify-content-center"
                          style={{
                            // borderStyle: "dashed",
                            borderBottom: "dashed",

                            zIndex: 1,
                            background: "white",
                            height: "1056px",
                          }}
                        >
                          <div className="pages-title mx-auto">
                            <h5>{instituteInfo?.name}</h5>
                            <p>{instituteInfo?.address}</p>
                            <span>{instituteInfo?.num}</span>
                            <br />
                            <span>শিক্ষবর্ষঃ {value?.session}ইং</span>
                            <br />
                            <span
                              className="pages-subtitle"
                              style={{ marginTop: "11px" }}
                            >
                              {value?.exam}
                            </span>
                          </div>
                          <div className="pages-content">
                            <div className="row">
                              <div className="col-5 flex-wrap align-content-center">
                                <div className="">
                                  <strong>আইডিঃ</strong>
                                  <span> {item.id}</span>
                                </div>
                                <div className="student-name">
                                  <strong>পরীক্ষার্থীর নামঃ </strong>
                                  <span> {item.student_name}</span>
                                </div>
                                <div className="student-fname">
                                  <strong>পিতার নামঃ </strong>
                                  <span>{item.father_name}</span>
                                </div>
                                <div className="student-dob">
                                  <strong>জন্ম তারিখঃ</strong>
                                  <span> {item.dob} ইং</span>
                                </div>
                              </div>
                              <div className="col-1"></div>
                              <div className="col-6">
                                <div
                                  className="short-info"
                                  style={{ marginTop: "0px" }}
                                >
                                  <div
                                    className="table-responsive"
                                    data-pattern="priority-columns"
                                  >
                                    <table
                                      style={{ height: "20px" }}
                                      className=" m-1 mx-auto bg-white table-bordered text-center"
                                    >
                                      <thead
                                        className="text-center"
                                        style={{ backgroundColor: "gray" }}
                                      >
                                        <tr>
                                          <th colspan="4">
                                            মোট বিষয় {results?.length}টি
                                            পূর্নমান 100 x {results?.length} ={" "}
                                            {100 * results?.length}
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>{division[0]?.case1_div}</td>
                                          <td>
                                            {division[0]?.case1} *{" "}
                                            {results?.length}
                                          </td>
                                          <td>=</td>
                                          <td>
                                            {division[0]?.case1 *
                                              results?.length}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>{division[0]?.case2_div}</td>
                                          <td>
                                            {division[0]?.case2} *{" "}
                                            {results?.length}
                                          </td>
                                          <td>=</td>
                                          <td>
                                            {division[0]?.case2 *
                                              results?.length}
                                          </td>
                                        </tr>{" "}
                                        <tr>
                                          <td>{division[0]?.case3_div}</td>
                                          <td>
                                            {division[0]?.case3} *{" "}
                                            {results?.length}
                                          </td>
                                          <td>=</td>
                                          <td>
                                            {division[0]?.case3 *
                                              results?.length}
                                          </td>
                                        </tr>{" "}
                                        <tr>
                                          <td>{division[0]?.case4_div}</td>
                                          <td>
                                            {division[0]?.case4} *{" "}
                                            {results?.length}
                                          </td>
                                          <td>=</td>
                                          <td>
                                            {division[0]?.case4 *
                                              results?.length}
                                          </td>
                                        </tr>{" "}
                                        <tr>
                                          <td>{division[0]?.case5_div}</td>
                                          <td>
                                            {division[0]?.case5} *{" "}
                                            {results?.length}
                                          </td>
                                          <td>=</td>
                                          <td>
                                            {division[0]?.case5 *
                                              results?.length}
                                          </td>
                                        </tr>{" "}
                                        <tr>
                                          <td>{division[0]?.case6_div}</td>
                                          <td>
                                            {division[0]?.case6} *{" "}
                                            {results?.length}
                                          </td>
                                          <td>=</td>
                                          <td>
                                            {division[0]?.case6 *
                                              results?.length}
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
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
                                        {/* <th>ক্রঃ</th> */}
                                        <th>বিষয়</th>
                                        <th>প্রাপ্ত নম্বর</th>
                                        <th>পাশ নম্বর</th>
                                        <th>সব্বোচ্চ নম্বর</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {results?.map((x) => {
                                        if (x.student_id == item.id) {
                                          return (
                                            <tr>
                                              <td>{x.subject}</td>
                                              <td>{x.number}</td>
                                              <td>{x.pass_number}</td>
                                              <td>{x.highest_number}</td>
                                            </tr>
                                          );
                                        }
                                      })}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className="col-12">
                                <div
                                  className="table-responsive"
                                  data-pattern="priority-columns"
                                >
                                  <table className="table  bg-white table-bordered text-center report-table">
                                    <tbody>
                                      <tr>
                                        <th>
                                          মোট নম্বর
                                          <td>
                                            {/* {results
                                              ?.map((x) => {
                                                if (x.student_id === item.id) {
                                                  return parseInt(item?.number);
                                                }
                                              })
                                              ?.reduce(
                                                (accumulator, currentValue) =>
                                                  accumulator + currentValue
                                              )} */}
                                            {results
                                              ?.map((i) => {
                                                if (i.student_id == item.id) {
                                                  return parseInt(i?.number);
                                                }
                                                return null;
                                              })
                                              ?.reduce(
                                                (accumulator, currentValue) =>
                                                  accumulator + currentValue,
                                                0
                                              )}
                                          </td>
                                        </th>
                                        <th>
                                          প্রাপ্ত বিভাগ
                                          <td>মকবুল</td>
                                        </th>
                                        <th>
                                          মেধা স্থান
                                          <td>০</td>
                                        </th>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="row">
                                  <div className="col-6">
                                    <div
                                      className="table-responsive"
                                      data-pattern="priority-columns"
                                    >
                                      <table className="table  bg-white table-bordered text-center report-table">
                                        <thead className="text-center">
                                          <tr>
                                            <th>
                                              শ্রেনী শিক্ষক/শিক্ষিকার মন্তব্য ও
                                              স্বাক্ষর
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td style={{ height: "90px" }}></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div
                                      className="table-responsive"
                                      data-pattern="priority-columns"
                                    >
                                      <table className="table  bg-white table-bordered text-center report-table">
                                        <thead className="text-center">
                                          <tr>
                                            <th>
                                              অভিবাবকের মন্তব্য ও স্বাক্ষর
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td style={{ height: "90px" }}></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="row mt-5">
                                  <div className="col-6 d-flex justify-content-start">
                                    <div className="marksheet-sing">
                                      <span>মুহতামিম এর স্বাক্ষর</span>
                                      <br />
                                      <span>তারিখঃ</span>
                                    </div>
                                  </div>
                                  <div className="col-6 d-flex justify-content-end">
                                    <div className="marksheet-sing">
                                      <span>পরীক্ষা নিয়ন্ত্রকের স্বাক্ষর</span>
                                      <br />
                                      <span>তারিখঃ</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Report Section END -->
            <!--Admit Card Modal--> */}
    </div>
  );
};

export default MarkSheet;
