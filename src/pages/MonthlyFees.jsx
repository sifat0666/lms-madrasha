import axios from "axios";
import dayjs from "dayjs";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import ReactToPrint from "react-to-print";
import { msg, sendSms, serverUrl } from "../../utils/config";
// import { currentDate } from "./../../utils";

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;

const MonthlyFees = () => {
  const ref = useRef();

  const [studentId, setStudentId] = useState();
  const [student, setStudent] = useState();
  const [feeName, setFeeName] = useState();
  const [fees, setFees] = useState();
  const [feesList, setFeesList] = useState();
  const [joma, setJoma] = useState(0);

  const [monthName, setMonthName] = useState();

  const { data: marhalaClass } = useQuery("marhalaclass", () =>
    fetch(`${serverUrl}/api/marhalaclass`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  const { data: instituteInfo } = useQuery("instituteInfo", () =>
    fetch(`${serverUrl}/api/institute-info`).then((res) => res.json())
  );

  console.log("inst info", instituteInfo);
  const { data: academicYear } = useQuery("academicyear", () =>
    fetch(`${serverUrl}/api/academicyear`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );
  const { data: months } = useQuery("months", () =>
    fetch(`${serverUrl}/api/month-entry`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );
  const { data: monthlyFee } = useQuery("monthlyFee", () =>
    fetch(`${serverUrl}/api/monthly-fee`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );
  const { data: foodFee } = useQuery("FoodFee", () =>
    fetch(`${serverUrl}/api/food-fee`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/month-entry`, data, {
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
      console.log("userdata", data.data);
      toast.success("success");
    },
  });

  const Fee = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/customfeecall`, data, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      console.log("fee", data?.data);
      setFees(data?.data);
    },
  });

  const monthlyFeeMutation = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/monthly-fee`, data, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
    onError: (error, variable, context) => {
      toast.error("every field is required");
      console.log(error.response.data.message);
    },
    onSuccess: (data) => {
      toast.success("success");
      console.log("monthly fee", data?.data);
      // if (data?.data.fee_name === "মাসিক ফি") {
      //   if (msg.mashik) {
      //     sendSms(
      //       student?.phn_no,
      //       `${student?.student_name} জমা দিয়েছে ${data?.data.submitted_fee} টাকা ${data?.data.month} এর মাসিক ফী `
      //     );
      //   }
      // }
      // if (data?.data.fee_name === "খাবারের ফি") {
      //   if (msg.khabar) {
      //     sendSms(
      //       student?.phn_no,
      //       `${student?.student_name} জমা দিয়েছে ${data?.data.submitted_fee} টাকা ${data?.data.month} এর খাবার ফী `
      //     );
      //   }
      // }
    },
  });

  const getMonthlyFeeById = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/filter-student-by-fee`, data, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
    onError: (error, variable, context) => {
      // toast.error("every field is required");
    },
    onSuccess: (data) => {
      // toast.success("success");
      setFeesList(data?.data);
    },
  });

  const { data: me, isLoading } = useQuery(["me"]);

  const onDelete = async (id) => {
    const data = await axios.delete(`${serverUrl}/api/monthly-fee/${id}`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    location.reload();
  };

  const onStudentSearch = async () => {
    const data = await axios.get(`${serverUrl}/api/student/${studentId}`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    console.log("stu", data?.data);
    getMonthlyFeeById.mutate({ student_id: studentId });

    setStudent(data?.data);

    const value = data?.data;

    const state = `${value.gender}_${value.abashik_onabashik}_${value.notun_puraton}`;

    const params = {
      state: state,
    };
    params.academic_year = data?.data.session;
    params.class_name = data?.data.class;
    console.log("params", params);
    Fee.mutate({ ...params, fee_name: feeName });
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    mutation.mutate({
      ...data,
      session: "null",
      academicYear: "null",
      class: "null",
    });
  };

  const { register: FeeRegister, handleSubmit: feeHandleSubmit } = useForm();

  const [feeVal, setFeeVal] = useState();

  const onFeeSubmit = (data) => {
    setFeeVal(data);

    let params = {
      ...data,
      receiver: me?.data.name,
      student_id: studentId,
      fee_name: feeName,
      session: student?.session,
      student_name: student?.student_name,
      determined_fee: fees,
      class: student?.class,
      discount: korton,
    };

    console.log(params, { ...params });
    monthlyFeeMutation.mutate(params);
  };

  const korton = parseInt(fees) - parseInt(joma);

  console.log("korteon", korton, fees, joma);

  return (
    <div>
      <section class="user-form-section d-print-none">
        <div class="section-bg">
          <div class="row">
            <div class="col-md-12 w-100">
              <div class="main-container">
                <div class="row">
                  <div class="col-lg-7 col-md-12 col-12">
                    <div class="section-title">
                      <h4>মাসিক ফি গ্রহণ</h4>
                    </div>
                    <div class="my-4">
                      <div
                        className="row"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        {" "}
                        <div class="col-md-4 col-lg-4 col-12">
                          <div class="row mb-3">
                            <label class="col-lg-6 col-md-6 col-12 col-form-label info-lable">
                              আইডি
                            </label>
                            <div class="col-lg-6 col-md-6 col-12">
                              <input
                                onChange={(e) => setStudentId(e.target.value)}
                                type="text"
                                class="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 col-lg-4 col-12">
                          <select
                            class="form-select form-select-sm mx-auto m-3"
                            // {...register("old_new")}
                            onChange={(e) => setFeeName(e.target.value)}
                          >
                            {/* <option disabled>নতুন/পুরাতনঃ</option> */}
                            <option selected disabled>
                              ফি সিলেক্ট করুন
                            </option>
                            <option>মাসিক ফি</option>
                            <option>খাবারের ফি</option>
                          </select>
                        </div>
                        <div class="col-md-4 col-lg-4 col-12">
                          <div class="row mb-3">
                            <button
                              onClick={onStudentSearch}
                              className="custom-btn btn-primary"
                            >
                              Find
                            </button>
                          </div>
                        </div>
                      </div>
                      <form
                        onSubmit={feeHandleSubmit(onFeeSubmit)}
                        class="accounts-form"
                      >
                        <div class="row">
                          <div class="col-md-4 col-lg-4 col-12">
                            <div class="row mb-3">
                              <label class="col-lg-6 col-md-6 col-12 col-form-label info-lable">
                                অর্ডার নং
                                <i>*</i>
                              </label>
                              <div class="col-lg-6 col-md-6 col-12">
                                <input
                                  value={
                                    feesList
                                      ? feesList[feesList?.length]?.id
                                      : "disabled"
                                  }
                                  {...FeeRegister("order_no")}
                                  type="text"
                                  class="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4 col-lg-4 col-12">
                            <div class="row mb-3">
                              <label class="col-lg-2 col-md-2 col-12 col-form-label info-lable">
                                নামঃ
                              </label>
                              <div class="col-lg-10 col-md-10 col-12">
                                <input
                                  value={student?.student_name}
                                  {...FeeRegister("student_name")}
                                  type="text"
                                  class="form-control"
                                  placeholder="নাম"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-4 col-12">
                            <div class="row mb-3">
                              <label class="col-lg-6 col-md-6 col-12 col-form-label info-lable">
                                শিক্ষার্থী অবস্থা
                              </label>
                              <div class="col-lg-6 col-md-6 col-12">
                                <input
                                  type="text"
                                  class="form-control"
                                  value="সক্রিয়"
                                  readonly
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-4 col-lg-4 col-12">
                            <div class="row mb-3">
                              <label class="col-lg-2 col-md-2 col-12 col-form-label info-lable">
                                পিতা
                              </label>
                              <div class="col-lg-10 col-md-10 col-12">
                                <input
                                  value={student?.father_name}
                                  type="text"
                                  class="form-control"
                                  placeholder="পিতার নাম"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4 col-lg-4 col-12">
                            <div class="row mb-3">
                              <label class="col-lg-2 col-md-2 col-12 col-form-label info-lable">
                                শ্রেণী
                              </label>
                              <div class="col-lg-10 col-md-10 col-12">
                                <input
                                  value={student?.class}
                                  {...FeeRegister("class")}
                                  type="text"
                                  class="form-control"
                                  placeholder="জামাত"
                                  readonly
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-4 col-lg-4 col-12">
                            <div class="row mb-3">
                              <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                                মোবাইল
                              </label>
                              <div class="col-lg-8 col-md-8 col-12">
                                <input
                                  value={student?.phn_no}
                                  type="text"
                                  class="form-control"
                                  placeholder="মোবাইল"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-4 col-lg-4 col-12">
                            <div class="row mb-3">
                              <label class="col-lg-2 col-md-2 col-12 col-form-label info-lable">
                                নির্ধারিত ফি
                              </label>
                              <div class="col-lg-10 col-md-10 col-12">
                                <input
                                  value={fees}
                                  {...FeeRegister("determined_fee")}
                                  type="text"
                                  class="form-control"
                                  placeholder="নির্ধারিত ফি
                                  "
                                />
                              </div>
                            </div>
                          </div>

                          <div class="col-lg-4 col-md-4 col-lg-4 col-12">
                            <div class="row mb-3">
                              <label class="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                                জমা
                              </label>
                              <div class="col-lg-8 col-md-8 col-12">
                                <input
                                  {...FeeRegister("submitted_fee")}
                                  onChange={(e) => setJoma(e.target.value)}
                                  type="number"
                                  class="form-control"
                                  placeholder="জমা"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4 col-lg-4 col-12">
                            <div class="row mb-3">
                              <label class="col-lg-2 col-md-2 col-12 col-form-label info-lable">
                                কর্তন
                              </label>
                              <div class="col-lg-10 col-md-10 col-12">
                                <input
                                  // {...FeeRegister("discount")}
                                  value={joma && korton}
                                  type="text"
                                  class="form-control"
                                  placeholder="কর্তন"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-12">
                            <div className="filter-menu">
                              <select
                                className="form-select"
                                size="4"
                                // style={{ border: "none" }}
                                {...FeeRegister("month")}
                                onChange={(e) => setMonthName(e.target.value)}
                                // {...register2("month")}
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
                        <button
                          // onClick={onStudentSearch}
                          className="custom-btn btn-primary m-3"
                        >
                          Submit
                        </button>
                        <ReactToPrint
                          trigger={() => (
                            <button
                              className="custom-btn btn-primary"
                              type="button"
                            >
                              Print
                            </button>
                          )}
                          content={() => ref.current}
                        />
                      </form>
                    </div>
                    <div class="my-4">
                      <div class="row">
                        <div class="col-12">
                          <div
                            class="table-responsive accounts-table"
                            data-pattern="priority-columns"
                          >
                            <table
                              id="tech-companies-1"
                              class="table  bg-white text-center mb-0"
                            >
                              <thead class="text-center accounts-table-head">
                                <tr>
                                  <th>
                                    <span class="action-delete">
                                      <i class="bi bi-trash3"></i>
                                    </span>
                                  </th>
                                  <th>মাস</th>
                                  <th>ফি নাম</th>
                                  <th>নির্ধারিত</th>
                                  <th>কর্তন</th>
                                  <th>জমা</th>
                                </tr>
                              </thead>
                              <tbody>
                                {feesList?.map((item) => (
                                  <tr key={item.id}>
                                    <td>
                                      <span
                                        onClick={(id) => onDelete(item.id)}
                                        class="action-delete"
                                      >
                                        <i class="bi bi-trash3"></i>
                                      </span>
                                    </td>
                                    <td>{item.month}</td>
                                    <td>{item.fee_name}</td>
                                    <td>{item.determined_fee}</td>
                                    <td>{item.discount}</td>
                                    <td>{item.submitted_fee}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div class="my-2">
                      <div class="row">
                        <div class="col-12">
                          <div class="filter-container py-2">
                            <div class="row">
                              <div class="col-lg-4 col-md-4 col-12">
                                <div class="row">
                                  <label class="col-lg-3 col-md-3 col-12 d-lg-block d-none col-form-label info-lable">
                                    <i class="bi bi-search text-white"></i>
                                  </label>
                                  <div class="col-lg-9 col-md-9 col-12">
                                    <input type="date" class="form-control" />
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4 col-md-4 col-12 mt-2 mt-md-0">
                                <div class="row">
                                  <div class="col-8 d-flex align-items-center justify-content-between">
                                    <div class="form-check">
                                      <input
                                        class="form-check-input"
                                        type="radio"
                                        name="options"
                                      />
                                      <label
                                        class="form-check-label"
                                        for="options"
                                      >
                                        আইডি
                                      </label>
                                    </div>
                                    <div class="form-check">
                                      <input
                                        class="form-check-input"
                                        type="radio"
                                        name="options"
                                      />
                                      <label
                                        class="form-check-label"
                                        for="options"
                                      >
                                        অর্ডার নং
                                      </label>
                                    </div>
                                  </div>
                                  <div class="col-4">
                                    <input type="text" class="form-control" />
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4 col-md-4 col-12">
                                <div class="row">
                                  <label class="col-lg-9 col-md-9 col-8 col-form-label info-lable">
                                    আজকের গ্রহন: ২৭০০
                                  </label>
                                  <div class="col-3 d-flex align-items-center">
                                    <i
                                      class="bi bi-gear-fill"
                                      style={{ cursor: "pointer" }}
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* <div class="my-2">
                      <div class="row">
                        <div class="col-12">
                          <div
                            class="table-responsive accounts-table"
                            data-pattern="priority-columns"
                          >
                            <table
                              id="tech-companies-1"
                              class="table  bg-white text-center mb-0"
                            >
                              <thead class="text-center accounts-table-head">
                                <tr>
                                  <th>
                                    <span class="action-edit">
                                      <i class="bi bi-pencil-square"></i>
                                    </span>
                                  </th>
                                  <th>
                                    <span class="action-delete">
                                      <i class="bi bi-trash3"></i>
                                    </span>
                                  </th>
                                  <th>অর্ডার নং</th>
                                  <th>শিক্ষার্থীর আইডি</th>
                                  <th>নাম</th>
                                  <th>পিতার নাম</th>
                                  <th>ফির পরিমান</th>
                                  <th>গ্রহিতা</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <span class="action-edit">
                                      <i class="bi bi-pencil-square"></i>
                                    </span>
                                  </td>
                                  <td>
                                    <span class="action-delete">
                                      <i class="bi bi-trash3"></i>
                                    </span>
                                  </td>
                                  <td>৪৩৪৩</td>
                                  <td>৬৫৬</td>
                                  <td>আশিকুর রহমান</td>
                                  <td>আবু বক্কর</td>
                                  <td>১৫০০.০০</td>
                                  <td>এডমিন</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div class="col-lg-5 col-12">
                    <div class="section-title">
                      <h4>খাবারের ফি গ্রহণ</h4>
                    </div>
                    {/* <!--Right Site top Table--> */}
                    <div class="row">
                      <div class="col-lg-7 col-md-7 col-12">
                        <div class="row mt-3">
                          <div class="col-12">
                            <div class="row">
                              <div class="col-6">
                                <div class="student-image">
                                  <span class="student-image-title">
                                    শিক্ষার্থীর ছবি
                                  </span>
                                  <img src={student?.image} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="mt-3">
                          <div
                            class="table-responsive accounts-table"
                            data-pattern="priority-columns"
                          >
                            <table
                              id="tech-companies-1"
                              class="table  bg-white text-center mb-0"
                            >
                              <thead class="text-center accounts-table-head">
                                <tr>
                                  <th>মাস</th>
                                  <th>নির্ধারিত</th>
                                  <th>জমা</th>
                                </tr>
                              </thead>
                              {feeName === "মাসিক ফি" ? null : (
                                <tbody>
                                  <tr>
                                    <td>{months?.data[0]?.m1}</td>
                                    <td>{feeName === "খাবারের ফি" && fees}</td>
                                    <td>
                                      {feesList?.map((item) => {
                                        if (
                                          item.month === months?.data[0]?.m1 &&
                                          item.fee_name === feeName
                                        ) {
                                          return <p>{item.submitted_fee}</p>;
                                        }
                                        return null;
                                      })}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>{months?.data[0]?.m2}</td>
                                    <td>{feeName === "খাবারের ফি" && fees}</td>
                                    <td>
                                      {" "}
                                      {feesList?.map((item) => {
                                        if (
                                          item.month === months?.data[0]?.m2 &&
                                          item.fee_name === feeName
                                        ) {
                                          return <p>{item.submitted_fee}</p>;
                                        }
                                        return null;
                                      })}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>{months?.data[0]?.m3}</td>
                                    <td>{feeName === "খাবারের ফি" && fees}</td>
                                    <td>
                                      {" "}
                                      {feesList?.map((item) => {
                                        if (
                                          item.month === months?.data[0]?.m3 &&
                                          item.fee_name === feeName
                                        ) {
                                          return <p>{item.submitted_fee}</p>;
                                        }
                                        return null;
                                      })}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>{months?.data[0]?.m4}</td>
                                    <td>{feeName === "খাবারের ফি" && fees}</td>
                                    <td>
                                      {" "}
                                      {feesList?.map((item) => {
                                        if (
                                          item.month === months?.data[0]?.m4 &&
                                          item.fee_name === feeName
                                        ) {
                                          return <p>{item.submitted_fee}</p>;
                                        }
                                        return null;
                                      })}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>{months?.data[0]?.m5}</td>
                                    <td>{feeName === "খাবারের ফি" && fees}</td>
                                    <td>
                                      {" "}
                                      {feesList?.map((item) => {
                                        if (
                                          item.month === months?.data[0]?.m5 &&
                                          item.fee_name === feeName
                                        ) {
                                          return <p>{item.submitted_fee}</p>;
                                        }
                                        return null;
                                      })}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>{months?.data[0]?.m6}</td>
                                    <td>{feeName === "খাবারের ফি" && fees}</td>
                                    <td>
                                      {" "}
                                      {feesList?.map((item) => {
                                        if (
                                          item.month === months?.data[0]?.m6 &&
                                          item.fee_name === feeName
                                        ) {
                                          return <p>{item.submitted_fee}</p>;
                                        }
                                        return null;
                                      })}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>{months?.data[0]?.m7}</td>
                                    <td>{feeName === "খাবারের ফি" && fees}</td>
                                    <td>
                                      {" "}
                                      {feesList?.map((item) => {
                                        if (
                                          item.month === months?.data[0]?.m7 &&
                                          item.fee_name === feeName
                                        ) {
                                          return <p>{item.submitted_fee}</p>;
                                        }
                                        return null;
                                      })}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>{months?.data[0]?.m8}</td>
                                    <td>{feeName === "খাবারের ফি" && fees}</td>
                                    <td>
                                      {" "}
                                      {feesList?.map((item) => {
                                        if (
                                          item.month === months?.data[0]?.m8 &&
                                          item.fee_name === feeName
                                        ) {
                                          return <p>{item.submitted_fee}</p>;
                                        }
                                        return null;
                                      })}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>{months?.data[0]?.m9}</td>
                                    <td>{feeName === "খাবারের ফি" && fees}</td>
                                    <td>
                                      {" "}
                                      {feesList?.map((item) => {
                                        if (
                                          item.month === months?.data[0]?.m9 &&
                                          item.fee_name === feeName
                                        ) {
                                          return <p>{item.submitted_fee}</p>;
                                        }
                                        return null;
                                      })}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>{months?.data[0]?.m10}</td>
                                    <td>{feeName === "খাবারের ফি" && fees}</td>
                                    <td>
                                      {" "}
                                      {feesList?.map((item) => {
                                        if (
                                          item.month === months?.data[0]?.m10 &&
                                          item.fee_name === feeName
                                        ) {
                                          return <p>{item.submitted_fee}</p>;
                                        }
                                        return null;
                                      })}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>{months?.data[0]?.m11}</td>
                                    <td>{feeName === "খাবারের ফি" && fees}</td>
                                    <td>
                                      {" "}
                                      {feesList?.map((item) => {
                                        if (
                                          item.month === months?.data[0]?.m11 &&
                                          item.fee_name === feeName
                                        ) {
                                          return <p>{item.submitted_fee}</p>;
                                        }
                                        return null;
                                      })}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>{months?.data[0]?.m12}</td>
                                    <td>{feeName === "খাবারের ফি" && fees}</td>
                                    <td>
                                      {" "}
                                      {feesList?.map((item) => {
                                        if (
                                          item.month === months?.data[0]?.m12 &&
                                          item.fee_name === feeName
                                        ) {
                                          return <p>{item.submitted_fee}</p>;
                                        }
                                        return null;
                                      })}
                                    </td>
                                  </tr>
                                </tbody>
                              )}
                            </table>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-5 col-md-5 col-12">
                        <div class="row">
                          <div class="col-12 others-menu">
                            <div class="section-title">
                              <h4>গুরুত্বপূর্ণ লিংক</h4>
                            </div>
                          </div>
                          <div class="col-12 others-navigation">
                            <ul class="navbar-nav">
                              {/* <li class="others-nav-item">
                                <i class="bi bi-gear-fill"></i>
                                <a href="" class="others-nav-link">
                                  {" "}
                                  অর্ডার নং সেটিংস
                                </a>
                              </li> */}
                              <li class="others-nav-item">
                                <i class="bi bi-calendar-month"></i>
                                <a
                                  href="#"
                                  class="others-nav-link"
                                  data-bs-toggle="modal"
                                  data-bs-target="#monthname"
                                >
                                  {" "}
                                  মাসের নাম
                                </a>
                              </li>
                              {/* <li class="others-nav-title my-1">
                                <i class="bi bi-arrow-down-square"></i>
                                <a href="#" class="others-nav-link px-1">
                                  মাসিক ফি
                                </a>
                              </li>

                              <li class="others-nav-item">
                                <i class="bi bi-card-checklist"></i>
                                <a
                                  href="#"
                                  class="others-nav-link"
                                  data-bs-toggle="modal"
                                  data-bs-target="#talika"
                                >
                                  {" "}
                                  তালিকা তৈরি
                                </a>
                                <li class="others-nav-item">
                                  <i class="bi bi-arrow-down-up"></i>
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#mealfeeincrase"
                                    class="others-nav-link"
                                  >
                                    {" "}
                                    বাড়ানো কমানো
                                  </a>
                                </li>
                              </li>
                              <li class="others-nav-title my-1">
                                <i class="bi bi-arrow-down-square"></i>
                                <a href="#" class="others-nav-link px-1">
                                  খাবারের ফি
                                </a>
                              </li> */}
                              {/* <li class="others-nav-item">
                                <i class="bi bi-cash-coin"></i>
                                <a href="#" class="others-nav-link">
                                  {" "}
                                  ফি নির্ধারণ
                                </a>
                              </li> */}
                              {/* <li class="others-nav-item">
                                <i class="bi bi-card-checklist"></i>
                                <a
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#talika"
                                  class="others-nav-link"
                                >
                                  {" "}
                                  তালিকা তৈরি
                                </a>
                              </li>
                              <li class="others-nav-item">
                                <i class="bi bi-arrow-down-up"></i>
                                <a
                                  href="#"
                                  class="others-nav-link"
                                  data-bs-toggle="modal"
                                  data-bs-target="#mealfeeincrase"
                                >
                                  {" "}
                                  বাড়ানো কমানো
                                </a>
                              </li>
                              <li class="others-nav-item">
                                <i class="bi bi-calendar2-day-fill"></i>
                                <a
                                  href="#"
                                  class="others-nav-link"
                                  data-bs-toggle="modal"
                                  data-bs-target="#holiday"
                                >
                                  {" "}
                                  দিন ও ছুটি
                                </a>
                              </li> */}
                            </ul>
                            {/* <div class="button-group">
                              <button class="custom-btn btn-info">Show</button>
                              <button class="custom-btn btn-primary">
                                Save
                              </button>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!--Right Site Top Table End--> */}
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="section-title">
                      <h4>মাসিক ফি গ্রহণ</h4>
                    </div>
                  </div>
                  <div class="my-2">
                    <div class="row">
                      <div class="col-12">
                        <div
                          class="table-responsive accounts-table"
                          data-pattern="priority-columns"
                        >
                          <table
                            id="tech-companies-1"
                            class="table  bg-white text-center mb-0"
                          >
                            <thead class="text-center accounts-table-head">
                              <tr>
                                <th>মাস</th>
                                <th>{months?.data[0]?.m1}</th>
                                <th>{months?.data[0]?.m2}</th>
                                <th>{months?.data[0]?.m3}</th>
                                <th>{months?.data[0]?.m4}</th>
                                <th>{months?.data[0]?.m5}</th>
                                <th>{months?.data[0]?.m6}</th>
                                <th>{months?.data[0]?.m7}</th>
                                <th>{months?.data[0]?.m8}</th>
                                <th>{months?.data[0]?.m9}</th>
                                <th>{months?.data[0]?.m10}</th>
                                <th>{months?.data[0]?.m11}</th>
                                <th>{months?.data[0]?.m12}</th>
                              </tr>
                            </thead>
                            {feeName === "খাবারের ফি" ? null : (
                              <tbody>
                                <tr>
                                  <td>নির্ধারিত</td>
                                  <td>{feeName === "মাসিক ফি" && fees}</td>
                                  <td>{feeName === "মাসিক ফি" && fees}</td>
                                  <td>{feeName === "মাসিক ফি" && fees}</td>
                                  <td>{feeName === "মাসিক ফি" && fees}</td>
                                  <td>{feeName === "মাসিক ফি" && fees}</td>
                                  <td>{feeName === "মাসিক ফি" && fees}</td>
                                  <td>{feeName === "মাসিক ফি" && fees}</td>
                                  <td>{feeName === "মাসিক ফি" && fees}</td>
                                  <td>{feeName === "মাসিক ফি" && fees}</td>
                                  <td>{feeName === "মাসিক ফি" && fees}</td>
                                  <td>{feeName === "মাসিক ফি" && fees}</td>
                                  <td>{feeName === "মাসিক ফি" && fees}</td>
                                </tr>
                                <tr>
                                  <td>জমা</td>
                                  <td>
                                    {feesList?.map((item) => {
                                      if (
                                        item.month === months?.data[0]?.m1 &&
                                        item.fee_name === "মাসিক ফি"
                                      ) {
                                        return <p>{item.submitted_fee}</p>;
                                      }
                                      return null;
                                    })}
                                  </td>{" "}
                                  <td>
                                    {feesList?.map((item) => {
                                      if (
                                        item.month === months?.data[0]?.m2 &&
                                        item.fee_name === "মাসিক ফি"
                                      ) {
                                        return <p>{item.submitted_fee}</p>;
                                      }
                                      return null;
                                    })}
                                  </td>{" "}
                                  <td>
                                    {feesList?.map((item) => {
                                      if (
                                        item.month === months?.data[0]?.m3 &&
                                        item.fee_name === "মাসিক ফি"
                                      ) {
                                        return <p>{item.submitted_fee}</p>;
                                      }
                                      return null;
                                    })}
                                  </td>{" "}
                                  <td>
                                    {feesList?.map((item) => {
                                      if (
                                        item.month === months?.data[0]?.m4 &&
                                        item.fee_name === "মাসিক ফি"
                                      ) {
                                        return <p>{item.submitted_fee}</p>;
                                      }
                                      return null;
                                    })}
                                  </td>{" "}
                                  <td>
                                    {feesList?.map((item) => {
                                      if (
                                        item.month === months?.data[0]?.m5 &&
                                        item.fee_name === "মাসিক ফি"
                                      ) {
                                        return <p>{item.submitted_fee}</p>;
                                      }
                                      return null;
                                    })}
                                  </td>{" "}
                                  <td>
                                    {feesList?.map((item) => {
                                      if (
                                        item.month === months?.data[0]?.m6 &&
                                        item.fee_name === "মাসিক ফি"
                                      ) {
                                        return <p>{item.submitted_fee}</p>;
                                      }
                                      return null;
                                    })}
                                  </td>{" "}
                                  <td>
                                    {feesList?.map((item) => {
                                      if (
                                        item.month === months?.data[0]?.m7 &&
                                        item.fee_name === "মাসিক ফি"
                                      ) {
                                        return <p>{item.submitted_fee}</p>;
                                      }
                                      return null;
                                    })}
                                  </td>{" "}
                                  <td>
                                    {feesList?.map((item) => {
                                      if (
                                        item.month === months?.data[0]?.m8 &&
                                        item.fee_name === "মাসিক ফি"
                                      ) {
                                        return <p>{item.submitted_fee}</p>;
                                      }
                                      return null;
                                    })}
                                  </td>{" "}
                                  <td>
                                    {feesList?.map((item) => {
                                      if (
                                        item.month === months?.data[0]?.m9 &&
                                        item.fee_name === "মাসিক ফি"
                                      ) {
                                        return <p>{item.submitted_fee}</p>;
                                      }
                                      return null;
                                    })}
                                  </td>{" "}
                                  <td>
                                    {feesList?.map((item) => {
                                      if (
                                        item.month === months?.data[0]?.m10 &&
                                        item.fee_name === "মাসিক ফি"
                                      ) {
                                        return <p>{item.submitted_fee}</p>;
                                      }
                                      return null;
                                    })}
                                  </td>{" "}
                                  <td>
                                    {feesList?.map((item) => {
                                      if (
                                        item.month === months?.data[0]?.m11 &&
                                        item.fee_name === "মাসিক ফি"
                                      ) {
                                        return <p>{item.submitted_fee}</p>;
                                      }
                                      return null;
                                    })}
                                  </td>{" "}
                                  <td>
                                    {feesList?.map((item) => {
                                      if (
                                        item.month === months?.data[0]?.m12 &&
                                        item.fee_name === "মাসিক ফি"
                                      ) {
                                        return <p>{item.submitted_fee}</p>;
                                      }
                                      return null;
                                    })}
                                  </td>
                                </tr>
                              </tbody>
                            )}
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
      {/* <!-- হিসাব নিকাশ সেকশন শেষ --> */}
      {/* <!--রির্পোট প্রিন্ট সেকশন--> */}
      {/* <!--Preview Page Section--> */}
      {/* <div className="bg-white d-print-block  d-none">
        <span className="print-button d-print-none" onclick="window.print()">
          <i className="bi bi-printer-fill"></i>
        </span>
        <div className="pages-title">
          <h5>জামিয়া আরাবিয়া ইমদাদুল ফরিদাবাদ</h5>
          <p>১১/১২ মাদরাসা রোড, গেন্ডারিয়া, ঢাকা-১২০৪</p>
          <span>01832-061454 # 027440235</span>
          <br />
          <span className="pages-subtitle">জমা-খরচ লেজার ভিত্তিক</span>
          <br />
        </div>
        <div className="pages-content">
          <div className="row my-3 justify-content-center align-items-center">
            <div className="col-5">
              <p className="my-2">২৯/০৯/২০২২ ইং থেকে ২৯/১০/২০২২ ইং</p>
            </div>
            <div className="col-3">
              <span className="title-ladger">গোরাবা ফান্ড</span>
            </div>
            <div className="col-4 d-flex justify-content-end">
              <p className="my-2">
                <span>রিপোর্ট প্রিন্ট তারিখঃ</span>
                ০৩/১২/২০২২
              </p>
            </div>
          </div>
          <div className="table-responsive" data-pattern="priority-columns">
            <table className="table  bg-white table-bordered text-center report-table">
              <thead className="text-center">
                <tr>
                  <th>ক্রমিক নং</th>
                  <th>জেনারেল লেজার</th>
                  <th>পরিমাণ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th colspan="3">জমা</th>
                </tr>
                <tr>
                  <td>০১</td>
                  <td>শিক্ষার্থীদের মাধ্যম</td>
                  <td>২,৬৭,৮০০.০০</td>
                </tr>
                <tr>
                  <td>০১</td>
                  <td>শিক্ষার্থীদের মাধ্যম</td>
                  <td>২,৬৭,৮০০.০০</td>
                </tr>
                <tr>
                  <td>০১</td>
                  <td>শিক্ষার্থীদের মাধ্যম</td>
                  <td>২,৬৭,৮০০.০০</td>
                </tr>
                <tr>
                  <td>০১</td>
                  <td>শিক্ষার্থীদের মাধ্যম</td>
                  <td>২,৬৭,৮০০.০০</td>
                </tr>
                <tr>
                  <td colspan="2" style={{ textAlign: "right" }}>
                    মোট
                  </td>
                  <td>৬৪৫৫৪২৩৪২৩.০০</td>
                </tr>
                <tr>
                  <th colspan="3">খরচ</th>
                </tr>
                <tr>
                  <td>০১</td>
                  <td>শিক্ষার্থীদের মাধ্যম</td>
                  <td>২,৬৭,৮০০.০০</td>
                </tr>
                <tr>
                  <td>০১</td>
                  <td>শিক্ষার্থীদের মাধ্যম</td>
                  <td>২,৬৭,৮০০.০০</td>
                </tr>
                <tr>
                  <td>০১</td>
                  <td>শিক্ষার্থীদের মাধ্যম</td>
                  <td>২,৬৭,৮০০.০০</td>
                </tr>
                <tr>
                  <td>০১</td>
                  <td>শিক্ষার্থীদের মাধ্যম</td>
                  <td>২,৬৭,৮০০.০০</td>
                </tr>
                <tr>
                  <td
                    colspan="2"
                    style={{ textAlign: "right", fontWeight: "bold" }}
                  >
                    মোট
                  </td>
                  <td>৬৪৫৫৪২৩৪২৩.০০</td>
                </tr>
              </tbody>
            </table>
            <div className="short-report">
              <div className="report-item">
                <div className="items">
                  <span className="report-text">সর্বমোট জমা =</span>
                  <span className="report-amount">৩৪৫৪৩৫৪.০০</span>
                </div>
                <div className="items">
                  <span>সর্বমোট খরচ =</span>
                  <span>৩৪৫৪৩৫৪.০০</span>
                </div>
                <hr className="lines" />
                <div className="items">
                  <span>উদ্ধৃত্ব</span>
                  <span>৬৫৪৬.০০</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!--Modal Section--> */}

      {/* <!--Month Name Add Modal Start--> */}
      <div
        className="modal fade"
        id="monthname"
        aria-hidden="true"
        tabindex="-1"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="section-title">
              <h4>মাসের নাম এন্ট্রি</h4>
            </div>
            <form
              style={{ padding: "100px" }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12 w-100">
                    <div className="row">
                      <div className="col-12">
                        <div className="row mb-3">
                          {/* <div className="col-5">
                            <div className="row">
                              <label className="col-sm-5 col-form-label info-lable">
                                শিক্ষাবর্ষ
                              </label>
                              <div className="col-7">
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
                          </div> */}
                          {/* <div className="col-7">
                            <div className="row">
                              <label className="col-sm-5 col-form-label info-lable">
                                জামাত/শ্রেনী
                              </label>
                              <div className="col-7">
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
                          </div> */}
                        </div>
                      </div>
                      {/* <div className="col-12">
                        <div className="row mb-3">
                          <div className="col-12">
                            <div className="section-title special-bg">
                              <h4>মাসের নাম</h4>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <div className="col-12">
                        <div className="row mb-3">
                          <div className="col-4">
                            <div className="row">
                              <label className="col-sm-5 col-form-label info-lable">
                                ১ম মাস
                              </label>
                              <div className="col-7">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="প্রথম মাসের নাম"
                                  {...register("m1")}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="row">
                              <label className="col-sm-5 col-form-label info-lable">
                                ২য় মাস
                              </label>
                              <div className="col-7">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="মাসের নাম"
                                  {...register("m2")}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="row">
                              <label className="col-sm-5 col-form-label info-lable">
                                ৩য় মাস
                              </label>
                              <div className="col-7">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="মাসের নাম"
                                  {...register("m3")}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row mb-3">
                          <div className="col-4">
                            <div className="row">
                              <label className="col-sm-5 col-form-label info-lable">
                                ৪র্থ মাস
                              </label>
                              <div className="col-7">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="মাসের নাম"
                                  {...register("m4")}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="row">
                              <label className="col-sm-5 col-form-label info-lable">
                                ৫ম মাস
                              </label>
                              <div className="col-7">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="মাসের নাম"
                                  {...register("m5")}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="row">
                              <label className="col-sm-5 col-form-label info-lable">
                                ৬ষ্ঠ মাস
                              </label>
                              <div className="col-7">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="মাসের নাম"
                                  {...register("m6")}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row mb-3">
                          <div className="col-4">
                            <div className="row">
                              <label className="col-sm-5 col-form-label info-lable">
                                ৭ম মাস
                              </label>
                              <div className="col-7">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="মাসের নাম"
                                  {...register("m7")}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="row">
                              <label className="col-sm-5 col-form-label info-lable">
                                ৮ম মাস
                              </label>
                              <div className="col-7">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="মাসের নাম"
                                  {...register("m8")}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="row">
                              <label className="col-sm-5 col-form-label info-lable">
                                ৯ম মাস
                              </label>
                              <div className="col-7">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="মাসের নাম"
                                  {...register("m9")}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row mb-3">
                          <div className="col-4">
                            <div className="row">
                              <label className="col-sm-5 col-form-label info-lable">
                                ১০ম মাস
                              </label>
                              <div className="col-7">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="মাসের নাম"
                                  {...register("m10")}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="row">
                              <label className="col-sm-5 col-form-label info-lable">
                                ১১তম মাস
                              </label>
                              <div className="col-7">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="এগারোতম মাসের নাম"
                                  {...register("m11")}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="row">
                              <label className="col-sm-5 col-form-label info-lable">
                                ১২তম মাস
                              </label>
                              <div className="col-7">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="বারতম মাসের নাম"
                                  {...register("m12")}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 addbank">
                        <div className="button-group">
                          <button className="custom-btn btn-primary">
                            Save
                          </button>
                          {/* <button className="custom-btn btn-dark" type="submit">
                            Edit
                          </button>
                          <button
                            className="custom-btn btn-primary"
                            type="submit"
                          >
                            New
                          </button>
                          <button
                            className="custom-btn btn-danger"
                            data-bs-dismiss="modal"
                            onclick="javascript:void(0)"
                            type="button"
                          >
                            Close
                          </button> */}
                        </div>
                      </div>
                      {/* <!--Table Area Start--> */}
                      <div className="col-md-12">
                        <div className="table-data mt-4">
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

                                  <th>১ম মাস</th>
                                  <th>২য় মাস</th>
                                  <th>৩য় মাস</th>
                                  <th>৪র্থ মাস</th>
                                  <th>৫ম মাস</th>
                                  <th>৬ষ্ঠ মাস</th>
                                  <th>৭ম মাস</th>
                                  <th>৮ম মাস</th>
                                  <th>৯ম মাস</th>
                                  <th>১০ম মাস</th>
                                  <th>১১তম মাস</th>
                                  <th>১২তম মাস</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <span className="action-edit">
                                      <i className="bi bi-pencil-square"></i>
                                    </span>
                                  </td>
                                  {months?.data.map((item) => (
                                    <React.Fragment key={item.id}>
                                      <th>{item.m1}</th>
                                      <th>{item.m2}</th>
                                      <th>{item.m3}</th>
                                      <th>{item.m4}</th>
                                      <th>{item.m5}</th>
                                      <th>{item.m6}</th>
                                      <th>{item.m7}</th>
                                      <th>{item.m8}</th>
                                      <th>{item.m9}</th>
                                      <th>{item.m10}</th>
                                      <th>{item.m11}</th>
                                      <th>{item.m12}</th>
                                    </React.Fragment>
                                  ))}
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      {/* <!--Table Area End--> */}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!--Month Add Modal End--> */}
      {/* <!--ছুটি বা দিন Add Modal Start--> */}
      <div className="modal fade" id="holiday" aria-hidden="true" tabindex="-1">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="section-title">
              <h4>ছুটি বা দিন এন্ট্রি</h4>
            </div>
            <form>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12 w-100">
                    <div className="row">
                      <div className="col-12">
                        <div className="row mb-3">
                          <div className="col-lg-5 col-md-6 col-6">
                            <div className="row">
                              <label className="col-sm-5 col-form-label info-lable">
                                শিক্ষাবর্ষ
                              </label>
                              <div className="col-lg-7 col-md-7 col-12">
                                <select className="form-select">
                                  <option value="" selected>
                                    সিলেক্ট করুন
                                  </option>
                                  <option>২০২২</option>
                                  <option>২০২৩</option>
                                  <option>২০২৪</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5 col-md-6 col-6">
                            <div className="row">
                              <label className="col-sm-5 col-form-label info-lable">
                                জামাত/শ্রেনী
                              </label>
                              <div className="col-lg-7 col-md-7 col-12">
                                <select className="form-select">
                                  <option selected="">
                                    শ্রেণী নির্বাচন করুন
                                  </option>
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
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row mb-3">
                          <div className="col-lg-8 col-md-9 col-12">
                            <div className="row">
                              <label className="col-sm-5 col-form-label info-lable">
                                ছাত্রের আইডি দিয়ে
                              </label>
                              <div className="col-lg-7 col-md-7 col-12">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="সার্চ করুন....."
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-3 col-4 mt-2 mt-md-0">
                            <button className="custom-btn btn-primary">
                              খুজুন
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row mb-3">
                          <div className="col-6">
                            <div className="row">
                              <label className="col-lg-5 col-12 col-form-label info-lable">
                                মাসের নাম
                              </label>
                              <div className="col-lg-7 col-md-12 col-12">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="মাসের নাম"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="row">
                              <label className="col-lg-5 col-12 col-form-label info-lable">
                                মাসের মোট দিন
                              </label>
                              <div className="col-lg-7 col-md-12 col-12">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="মাসের মোট দিন"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row mb-3">
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="row">
                              <label className="col-lg-5 col-12 col-form-label info-lable">
                                মাসে মোট বন্ধ
                              </label>
                              <div className="col-lg-7 col-md-12 col-12">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="মাসে মোট বন্ধ"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 addbank">
                        <div className="button-group">
                          <a href="#" className="custom-btn btn-primary">
                            Save
                          </a>
                          <button className="custom-btn btn-dark" type="submit">
                            Edit
                          </button>
                          <button
                            className="custom-btn btn-primary"
                            type="submit"
                          >
                            New
                          </button>
                          <button
                            className="custom-btn btn-danger"
                            data-bs-dismiss="modal"
                            onclick="javascript:void(0)"
                            type="button"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                      {/* <!--Table Area Start--> */}
                      <div className="col-md-12">
                        <div className="table-data mt-4">
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
                                  <th>শিক্ষাবর্ষ</th>
                                  <th>জামাত</th>
                                  <th>১ম মাস</th>
                                  <th>২য় মাস</th>
                                  <th>৩য় মাস</th>
                                  <th>৪র্থ মাস</th>
                                  <th>৫ম মাস</th>
                                  <th>৬ষ্ঠ মাস</th>
                                  <th>৭ম মাস</th>
                                  <th>৮ম মাস</th>
                                  <th>৯ম মাস</th>
                                  <th>১০ম মাস</th>
                                  <th>১১তম মাস</th>
                                  <th>১২তম মাস</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <span className="action-edit">
                                      <i className="bi bi-pencil-square"></i>
                                    </span>
                                  </td>
                                  <td>২০২২</td>
                                  <td>তাকমীল</td>
                                  <td>জানুয়ারী</td>
                                  <td>ফেব্রুয়ারী</td>
                                  <td>মার্চ</td>
                                  <td>এপ্রিল</td>
                                  <td>মে</td>
                                  <td>জুন</td>
                                  <td>জুলাই</td>
                                  <td>আগস্ট</td>
                                  <td>সেপটেম্বর</td>
                                  <td>অক্টোবর</td>
                                  <td>নভেম্বর</td>
                                  <td>ডিসেম্বর</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      {/* <!--Table Area End--> */}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!--ছুটি বা দিন Add Modal End--> */}
      {/* <!--খাবারের খরচ বাড়ানো কমানো Modal Start--> */}

      <div className="modal fade" id="talika" aria-hidden="true" tabindex="-1">
        <div className="modal-dialog modal-lg">
          <div className="modal-content"></div>
        </div>
      </div>

      <div
        className="modal fade"
        id="mealfeeincrase"
        aria-hidden="true"
        tabindex="-1"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="section-title">
              <h4>ছাত্রের খাবারের খরচ বাড়ানো কমানো</h4>
            </div>
            <form>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12 w-100">
                    <div className="row">
                      <div className="col-12">
                        <div className="row mb-3">
                          <div className="col-12">
                            <div className="row mb-3">
                              <div className="col-lg-8 col-md-9 col-12">
                                <div className="row">
                                  <label className="col-lg-5 col-md-5 col-12 col-form-label info-lable">
                                    ছাত্রের আইডি দিয়ে
                                  </label>
                                  <div className="col-lg-7 col-md-7 col-12">
                                    <input
                                      required
                                      type="text"
                                      className="form-control"
                                      placeholder="সার্চ করুন"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-3 col-4 mt-3 mt-md-0">
                                <button className="custom-btn btn-primary">
                                  খুজুন
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row my-3">
                          <label className="col-lg-3 col-md-5 col-12 col-form-label info-lable">
                            খাবারের ধরন
                          </label>
                          <div className="col-lg-6 col-md-5 col-10">
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
                          <div className="col-lg-3 col-md-2 col-2">
                            <span className="addbutton">
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#foodentry"
                              >
                                <i className="bi bi-plus-circle-fill"></i>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row mb-3">
                          <div className="col-12">
                            <div className="row">
                              <label className="col-lg-3 col-md-5 col-12 col-form-label info-lable">
                                নির্ধারিত খাবারের ফি
                              </label>
                              <div className="col-lg-6 col-md-5 col-12">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="নির্ধারিত খাবারের ফি"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 addbank">
                        <div className="button-group">
                          <a href="#" className="custom-btn btn-primary">
                            Save
                          </a>
                          <button className="custom-btn btn-dark" type="submit">
                            Update
                          </button>
                          <button
                            className="custom-btn btn-primary"
                            type="submit"
                          >
                            New
                          </button>
                          <button
                            className="custom-btn btn-danger"
                            data-bs-dismiss="modal"
                            onclick="javascript:void(0)"
                            type="button"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                      {/* <!--Table Area Start--> */}
                      <div className="col-md-12">
                        <div className="table-data mt-4">
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
                                  <th>
                                    <span className="action-delete">
                                      <i className="bi bi-trash3"></i>
                                    </span>
                                  </th>
                                  <th>মাসের নাম</th>
                                  <th>নির্ধারিত ফি</th>
                                  <th>সিলেক্ট</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
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
                                  <td>জানুয়ারী</td>
                                  <td>২৩০০</td>
                                  <td>
                                    <input
                                      required
                                      className="form-check-input mt-0"
                                      type="checkbox"
                                    />
                                  </td>
                                </tr>
                                <tr>
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
                                  <td>ফেব্রুয়ারী</td>
                                  <td>২৩০০</td>
                                  <td>
                                    <input
                                      required
                                      className="form-check-input mt-0"
                                      type="checkbox"
                                    />
                                  </td>
                                </tr>
                                <tr>
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
                                  <td>মার্চ</td>
                                  <td>২৭০০</td>
                                  <td>
                                    <input
                                      required
                                      className="form-check-input mt-0"
                                      type="checkbox"
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      {/* <!--Table Area End--> */}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!--খাবারের খরচ বাড়ানো কমানো Modal End--> */}
      {/* <!--খাবার এন্ট্রি  Modal Start--> */}
      <div
        className="modal fade"
        id="foodentry"
        aria-hidden="true"
        tabindex="-1"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="section-title">
              <h4>খাবার এন্ট্রি</h4>
            </div>
            <form>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12 w-100">
                    <div className="row">
                      <div className="col-12">
                        <div className="row mb-3">
                          <div className="col-6">
                            <div className="row">
                              <label className="col-sm-3 col-form-label info-lable">
                                শিক্ষাবর্ষ
                              </label>
                              <div className="col-lg-9 col-md-9 col-12">
                                <select className="form-select">
                                  <option selected="">নির্বাচন করুন</option>
                                  <option>২০২২</option>
                                  <option>২০২৩</option>
                                  <option>২০২৪</option>
                                  <option>২০২৫</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="row">
                              <label className="col-sm-3 col-form-label info-lable">
                                আইডি
                              </label>
                              <div className="col-lg-9 col-md-9 col-12">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="আইডি"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row mb-3">
                          <div className="col-6">
                            <div className="row">
                              <label className="col-sm-3 col-form-label info-lable">
                                খাবারের নাম
                              </label>
                              <div className="col-lg-9 col-md-9 col-12">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="আইডি"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="row">
                              <label className="col-sm-3 col-form-label info-lable">
                                খাবারের ফি
                              </label>
                              <div className="col-lg-9 col-md-9 col-12">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="নির্ধারিত খাবারের ফি"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 addbank">
                        <div className="button-group">
                          <a href="#" className="custom-btn btn-primary">
                            Save
                          </a>
                          <button className="custom-btn btn-dark" type="submit">
                            Update
                          </button>
                          <button
                            className="custom-btn btn-primary"
                            type="submit"
                          >
                            New
                          </button>
                          <button
                            className="custom-btn btn-danger"
                            data-bs-dismiss="modal"
                            onclick="javascript:void(0)"
                            type="button"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                      {/* <!--Table Area Start--> */}
                      <div className="col-md-12">
                        <div className="table-data mt-4">
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
                                  <th>
                                    <span className="action-delete">
                                      <i className="bi bi-trash3"></i>
                                    </span>
                                  </th>
                                  <th>আইডি</th>
                                  <th>খাবারের নাম</th>
                                  <th>খাবার ফি</th>
                                  <th>শিক্ষাবর্ষ</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
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
                      {/* <!--Table Area End--> */}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* fee invoice */}
      <div className="d-none" id="invoice">
        <div ref={ref} className="bg-white d-print-block" style={{ zIndex: 1 }}>
          <span className="print-button">
            <i className="bi bi-printer-fill"></i>
          </span>
          <div className="pages-title">
            <h5>{instituteInfo?.name}.</h5>
            <p>{instituteInfo?.address}.</p>
            <span>{instituteInfo?.num}.</span>
          </div>
          <div className="row my-3 invoice-title">
            <div className="col-4 d-flex align-items-center">
              {/* <div className="slip-no">
                <strong>ইনভয়েস নং</strong>
                <span className=""> ০০৪</span>
              </div> */}
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center">
              <span className="pages-subtitle-slip">ইনভয়েস</span>
            </div>
            <div className="col-4 d-flex align-items-center justify-content-lg-end justify-content-start">
              <div className="slip-date">
                <strong>তারিখঃ</strong>
                <span className="">{currentDate}</span>
              </div>
            </div>
          </div>
          <div className="pages-content">
            <div className="row mb-1 customer-info">
              <div className="col-6 d-flex flex-wrap align-content-center">
                <div className="donor-name">
                  <strong className="dtitle">শিক্ষার্থীর নামঃ</strong>
                  <div className="border-line w-100">
                    {student?.student_name}
                  </div>
                </div>
                <div className="donor-name">
                  <strong className="dtitle">পিতার নামঃ</strong>
                  <div className="border-line w-100">
                    {student?.father_name}
                  </div>
                </div>
                <div className="donor-name">
                  <strong className="dtitle">ঠিকানাঃ</strong>
                  <div className="border-line w-100">{student?.jela}</div>
                </div>
                {/* <div className="donor-name mt-1">
                  <strong className="dtitle">টাকাঃ</strong>
                  <div className="border-all w-100">৫০০.০০ টাকা</div>
                </div> */}
              </div>
              <div className="col-6">
                <div className="donor-name">
                  <strong className="dtitle">মোবাইলঃ</strong>
                  <div className="border-line w-100">{student?.phn_no}</div>
                </div>
                <div className="donor-name">
                  <strong className="dtitle">শ্রেণীঃ</strong>
                  <div className="border-line w-100">{student?.class}</div>
                </div>
              </div>
            </div>
            {/* <div className="row mb-2">
              <div className="col-12">
                <div className="donor-name">
                  <strong className="dtitle">কথায়ঃ</strong>
                  <div className="border-line w-100">পাচশত টাকা মাত্র।</div>
                </div>
              </div>
            </div> */}
            <div className="row">
              <div className="col-12">
                <div
                  className="table-responsive"
                  data-pattern="priority-columns"
                >
                  <table className="table  bg-white table-bordered text-center report-table">
                    <thead className="text-center">
                      <tr>
                        <th>ক্রঃ</th>
                        <th> মাসের নাম</th>
                        <th> ফি এর নাম </th>
                        <th>নিরধারিত ফি</th>
                        <th>কর্তন</th>
                        <th>জমা ফি</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>০১</td>
                        <td>{monthName}</td>
                        <td>{feeName}</td>
                        <td>{fees}</td>
                        <td>{korton}</td>
                        <td>{feeVal?.submitted_fee}</td>
                      </tr>
                      {/* <tr>
                        <th colspan="5" className="text-right">
                          Total Price After Discount
                        </th>
                        <td>০.০০</td>
                      </tr>
                      <tr>
                        <th colspan="5" className="text-right">
                          Grand Total
                        </th>
                        <td>০.০০</td>
                      </tr> */}
                      <tr>
                        <th colspan="5" className="text-right">
                          Paid Amount
                        </th>
                        <td>{feeVal?.ammount}</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* <span>মন্তব্যঃ </span>
                  <span>{feeVal?.comment}</span> */}
                </div>
              </div>
              <div className="col-12">
                <div className="row mt-5">
                  <div className="col-lg-4 col-12 d-flex justify-content-lg-start justify-content-center">
                    <div className="marksheet-sing">
                      <span>শিক্ষার্থীর স্বাক্ষর</span>
                      <br />
                    </div>
                  </div>
                  <div className="col-lg-4 col-12 d-flex justify-content-lg-end justify-content-center mt-lg-0 mt-3">
                    <div className="marksheet-sing">
                      <span>পরিচালকের স্বাক্ষর</span>
                      <br />
                    </div>
                  </div>
                  <div className="col-lg-4 col-12 d-flex justify-content-lg-end justify-content-center mt-lg-0 mt-3">
                    <div className="marksheet-sing">
                      <span>আদায়কারীর স্বাক্ষর</span>
                      <br />
                      <span>{me?.data.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyFees;
