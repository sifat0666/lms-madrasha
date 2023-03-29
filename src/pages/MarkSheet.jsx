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

  console.log(student?.id);

  const { data: instituteInfo } = useQuery("instituteInfo", () =>
    fetch(`${serverUrl}/api/institute-info`).then((res) => res.json())
  );
  const { data: marhalaClass } = useQuery("marhalaclass", () =>
    fetch(`${serverUrl}/api/marhalaclass`).then((res) => res.json())
  );

  const { data: academicYear } = useQuery("academicyear", () =>
    fetch(`${serverUrl}/api/academicyear`).then((res) => res.json())
  );

  const { data: examName } = useQuery("examEnty", () =>
    fetch(`${serverUrl}/api/exam-entry`).then((res) => res.json())
  );

  const [results, setResults] = useState();

  const fetchResult = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/result`, data, {
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

  const { register, handleSubmit } = useForm();
  const [value, setValue] = useState();
  const onSubmit = async (data) => {
    const student = await axios.get(
      `${serverUrl}/api/student/${data?.student_id}`
    );
    setStudent(student?.data);
    console.log(data);
    setValue(data);
    fetchResult.mutate(data);
  };

  console.log("val", value);

  console.log("results", results);

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
                      {/* <div className="row mb-3">
                        <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                          কিতাব
                          <i>*</i>
                        </label>
                        <div className="col-lg-8 col-md-8 col-12">
                          <select className="form-select">
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
                      </div> */}
                      <div className="row mb-3">
                        <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                          আইডি
                          <i>*</i>
                        </label>
                        <div className="col-lg-3 col-md-3 col-5">
                          <input
                            {...register("student_id")}
                            type="text"
                            className="form-control"
                          />
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
                    <div
                      className="  d-flex flex-column justify-content-center"
                      style={{ zIndex: 1, background: "white" }}
                      ref={ref}
                    >
                      <div className="pages-title">
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
                              <span> {student?.id}</span>
                            </div>
                            <div className="student-name">
                              <strong>পরীক্ষার্থীর নামঃ </strong>
                              <span> {student?.student_name}</span>
                            </div>
                            <div className="student-fname">
                              <strong>পিতার নামঃ </strong>
                              <span>{student?.father_name}</span>
                            </div>
                            <div className="student-dob">
                              <strong>জন্ম তারিখঃ</strong>
                              <span> {student?.dob} ইং</span>
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
                                <table className="table  bg-white table-bordered text-center report-table">
                                  <thead
                                    className="text-center"
                                    style={{ backgroundColor: "gray" }}
                                  >
                                    <tr>
                                      <th colspan="4">
                                        মোট বিষয় ৪টি পূর্নমান ১০০ x ৪ =৪০০
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>মুমতাজ</td>
                                      <td>৮০x4</td>
                                      <td>=</td>
                                      <td>৩২০</td>
                                    </tr>
                                    <tr>
                                      <td>মুমতাজ</td>
                                      <td>৮০x4</td>
                                      <td>=</td>
                                      <td>৩২০</td>
                                    </tr>
                                    <tr>
                                      <td>মুমতাজ</td>
                                      <td>৮০x4</td>
                                      <td>=</td>
                                      <td>৩২০</td>
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
                                  {results?.map((item) => (
                                    <tr>
                                      {/* <td>১৮১</td> */}
                                      <td>{item.subject}</td>
                                      <td>{item.number}</td>
                                      <td>{item.pass_number}</td>
                                      <td>{item.highest_number}</td>
                                    </tr>
                                  ))}
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
                                      <td>২০০</td>
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
                                        <th>অভিবাবকের মন্তব্য ও স্বাক্ষর</th>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Report Section END -->
            <!--Admit Card Modal--> */}
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
                            style={{ paddingLeft: "1.5ems" }}
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

export default MarkSheet;
