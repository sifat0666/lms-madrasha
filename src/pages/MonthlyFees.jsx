import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import { serverUrl } from "../../utils/config";

const MonthlyFees = () => {
  const { data: marhalaClass } = useQuery("marhalaclass", () =>
    fetch(`${serverUrl}/api/marhalaclass`).then((res) => res.json())
  );
  const { data: academicYear } = useQuery("academicyear", () =>
    fetch(`${serverUrl}/api/academicyear`).then((res) => res.json())
  );
  const { data: months } = useQuery("months", () =>
    fetch(`${serverUrl}/api/month-entry`).then((res) => res.json())
  );
  const { data: user } = useQuery("me");
  const { data: monthlyFee } = useQuery("monthlyFee", () =>
    fetch(`${serverUrl}/api/monthly-fee`).then((res) => res.json())
  );
  const { data: foodFee } = useQuery("FoodFee", () =>
    fetch(`${serverUrl}/api/food-fee`).then((res) => res.json())
  );

  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/month-entry`, data);
    },
    onError: (error, variable, context) => {
      // console.log(error.response.data.message);
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      console.log("userdata", data.data);
      toast.success("success");
      // setStudent(data.data);
      // window.location.reload(true);
    },
  });

  const monthlyFeeMutation = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/monthly-fee`, data);
    },
    onError: (error, variable, context) => {
      // console.log(error.response.data.message);
      toast.error("every field is required");
    },
    onSuccess: (data) => {
      // console.log("userdata", data.data);
      toast.success("success");
      // setStudent(data.data);
      // window.location.reload(true);
    },
  });

  const foodFeeMutaion = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/food-fee`, data);
    },
    onError: (error, variable, context) => {
      // console.log(error.response.data.message);
      toast.error("every field is required");
    },
    onSuccess: (data) => {
      // console.log("userdata", data.data);
      toast.success("success");
      // setStudent(data.data);
      // window.location.reload(true);
    },
  });
  const { register, handleSubmit } = useForm();
  const { register: register2, handleSubmit: handleSubmit2 } = useForm();
  const { register: register3, handleSubmit: handleSubmit3 } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    mutation.mutate(data);
  };
  const onSubmit2 = (data) => {
    console.log(data);
    monthlyFeeMutation.mutate({ ...data, receiver: user?.data.name });
    // mutation.mutate(data);
  };
  const onSubmit3 = (data) => {
    console.log(data);

    foodFeeMutaion.mutate({ ...data, receiver: user?.data.name });
    // mutation.mutate(data);
  };

  return (
    <div>
      <section className="user-form-section d-print-none">
        <div className="section-bg">
          <div className="row">
            <div className="col-md-12 w-100">
              <div className="main-container">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="section-title">
                      <h4>মাসিক ফি গ্রহণ</h4>
                    </div>
                    <div className="my-4">
                      <form
                        onSubmit={handleSubmit2(onSubmit2)}
                        className="accounts-form"
                      >
                        <div className="row">
                          {/* <div className="col-md-4 col-lg-4 col-12">
                            <div className="row mb-3">
                              <label className="col-lg-6 col-md-6 col-12 col-form-label info-lable">
                                অর্ডার নং
                                <i>*</i>
                              </label>
                              <div className="col-lg-6 col-md-6 col-12">
                                <input required type="text" className="form-control" />
                              </div>
                            </div>
                          </div> */}
                          {/* <div className="col-md-4 col-lg-4 col-12">
                            <div className="row mb-3">
                              <label className="col-lg-2 col-md-2 col-12 col-form-label info-lable">
                                নামঃ
                              </label>
                              <div className="col-lg-10 col-md-10 col-12">
                                <input required
                                  type="text"
                                  className="form-control"
                                  placeholder="নাম"
                                />
                              </div>
                            </div>
                          </div> */}
                          <div className="row mt-3">
                            <div className="col-12">
                              <div className="filter-menu">
                                <select
                                  className="form-select"
                                  size="4"
                                  style={{ border: "none" }}
                                  {...register2("month")}
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
                                      {...register2("session")}
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
                                  {...register2("class")}
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
                        </div>
                        <div className="row">
                          <div className="col-md-4 col-lg-4 col-12">
                            <div className="row mb-3">
                              <label className="col-lg-6 col-md-6 col-12 col-form-label info-lable">
                                আইডি
                              </label>
                              <div className="col-lg-6 col-md-6 col-12">
                                <input
                                  required
                                  {...register2("student_id")}
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-lg-4 col-12">
                            <div className="row mb-3">
                              <label className="col-lg-2 col-md-2 col-12 col-form-label info-lable">
                                তারিখ
                              </label>
                              <div className="col-lg-10 col-md-10 col-12">
                                <input
                                  required
                                  {...register2("date")}
                                  type="date"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          {/* <div className="col-md-4 col-lg-4 col-12">
                            <div className="row mb-3">
                              <label className="col-lg-2 col-md-2 col-12 col-form-label info-lable">
                                শ্রেণী
                              </label>
                              <div className="col-lg-10 col-md-10 col-12">
                                <input required
                                  type="text"
                                  className="form-control"
                                  placeholder="জামাত"
                                  readonly
                                />
                              </div>
                            </div>
                          </div> */}
                        </div>
                        <div className="col-md-4 col-lg-4 col-12">
                          <div className="row mb-3">
                            <label className="col-lg-6 col-md-6 col-12 col-form-label info-lable">
                              ফি
                            </label>
                            <div className="col-lg-6 col-md-6 col-12">
                              <input
                                required
                                {...register2("fee")}
                                type="text"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="custom-btn btn-primary"
                          >
                            Save
                          </button>
                          <button type="reset" className="custom-btn btn-info">
                            reset
                          </button>
                        </div>
                        {/* <div className="row">
                          <div className="col-lg-4 col-md-4 offset-md-4 offset-0">
                            <div className="row mb-3">
                              <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                                মোবাইল
                              </label>
                              <div className="col-lg-8 col-md-8 col-12">
                                <input required
                                  type="text"
                                  className="form-control"
                                  placeholder="মোবাইল"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-12">
                            <div className="row mb-3">
                              <label className="col-lg-6 col-md-6 col-12 col-form-label info-lable">
                                শিক্ষার্থী অবস্থা
                              </label>
                              <div className="col-lg-6 col-md-6 col-12">
                                <input required
                                  type="text"
                                  className="form-control"
                                  value="সক্রিয়"
                                  readonly
                                />
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </form>
                    </div>
                    {/* <div className="my-4">
                      <div className="row">
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
                                  <th>মাস</th>
                                  <th>ফি নাম</th>
                                  <th>কর্তন</th>
                                  <th>পূর্ব জমা</th>
                                  <th>বর্তমান জমা</th>
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
                                  <td>জুলাই</td>
                                  <td>ভর্তি ফি</td>
                                  <td>২০০.০০</td>
                                  <td>০.০০</td>
                                  <td>১৫০০.০০</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="my-2">
                      <div className="row">
                        <div className="col-12">
                          <div className="filter-container py-2">
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-12">
                                <div className="row">
                                  <label className="col-lg-3 col-md-3 col-12 d-lg-block d-none col-form-label info-lable">
                                    <i className="bi bi-search text-white"></i>
                                  </label>
                                  <div className="col-lg-9 col-md-9 col-12">
                                    <input required
                                      type="date"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-12 mt-2 mt-md-0">
                                <div className="row">
                                  <div className="col-8 d-flex align-items-center justify-content-between">
                                    <div className="form-check">
                                      <input required
                                        className="form-check-input"
                                        type="radio"
                                        name="options"
                                      />
                                      <label
                                        className="form-check-label"
                                        for="options"
                                      >
                                        আইডি
                                      </label>
                                    </div>
                                    <div className="form-check">
                                      <input required
                                        className="form-check-input"
                                        type="radio"
                                        name="options"
                                      />
                                      <label
                                        className="form-check-label"
                                        for="options"
                                      >
                                        অর্ডার নং
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    <input required
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-12">
                                <div className="row">
                                  <label className="col-lg-9 col-md-9 col-8 col-form-label info-lable">
                                    আজকের গ্রহন: ২৭০০
                                  </label>
                                  <div className="col-3 d-flex align-items-center">
                                    <i
                                      className="bi bi-gear-fill"
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
                    <div className="my-2">
                      <div className="row">
                        <div className="col-12">
                          <li className="others-nav-title my-1">
                            <i className="bi bi-arrow-down-square"></i>
                            <a href="#" className="others-nav-link px-1">
                              মাসিক ফি
                            </a>
                          </li>
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
                                  <th>অর্ডার নং</th>
                                  <th>শিক্ষার্থীর আইডি</th>
                                  <th>ফির পরিমান</th>
                                  <th>গ্রহিতা</th>
                                  <th>Date</th>
                                </tr>
                              </thead>
                              <tbody>
                                {monthlyFee?.data.map((item) => (
                                  <tr>
                                    <td>{item.id}</td>
                                    <td>{item.student_id}</td>
                                    <td>{item.fee}</td>
                                    <td>{item.receiver}</td>
                                    <td>{item.date}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="my-2">
                      <div className="row">
                        <div className="col-12">
                          <li className="others-nav-title my-1">
                            <i className="bi bi-arrow-down-square"></i>
                            <a href="#" className="others-nav-link px-1">
                              খাবারের ফি
                            </a>
                          </li>
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
                                  <th>অর্ডার নং</th>
                                  <th>শিক্ষার্থীর আইডি</th>
                                  <th>ফির পরিমান</th>
                                  <th>গ্রহিতা</th>
                                  <th>Date</th>
                                </tr>
                              </thead>
                              <tbody>
                                {foodFee?.data.map((item) => (
                                  <tr>
                                    <td>{item.id}</td>
                                    <td>{item.student_id}</td>
                                    <td>{item.fee}</td>
                                    <td>{item.receiver}</td>
                                    <td>{item.date}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="section-title">
                      <h4>খাবারের ফি গ্রহণ</h4>
                    </div>
                    {/* <!--Right Site top Table--> */}
                    <div className="row">
                      <form
                        onSubmit={handleSubmit3(onSubmit3)}
                        className="accounts-form"
                      >
                        <div className="row">
                          {/* <div className="col-md-4 col-lg-4 col-12">
                            <div className="row mb-3">
                              <label className="col-lg-6 col-md-6 col-12 col-form-label info-lable">
                                অর্ডার নং
                                <i>*</i>
                              </label>
                              <div className="col-lg-6 col-md-6 col-12">
                                <input required type="text" className="form-control" />
                              </div>
                            </div>
                          </div> */}
                          {/* <div className="col-md-4 col-lg-4 col-12">
                            <div className="row mb-3">
                              <label className="col-lg-2 col-md-2 col-12 col-form-label info-lable">
                                নামঃ
                              </label>
                              <div className="col-lg-10 col-md-10 col-12">
                                <input required
                                  type="text"
                                  className="form-control"
                                  placeholder="নাম"
                                />
                              </div>
                            </div>
                          </div> */}
                          <div className="row mt-3">
                            <div className="col-12">
                              <div className="filter-menu">
                                <select
                                  className="form-select"
                                  size="4"
                                  style={{ border: "none" }}
                                  {...register3("month")}
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
                                  {...register3("session")}
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
                                  {...register3("class")}
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
                        </div>
                        <div className="row">
                          <div className="col-md-4 col-lg-4 col-12">
                            <div className="row mb-3">
                              <label className="col-lg-6 col-md-6 col-12 col-form-label info-lable">
                                আইডি
                              </label>
                              <div className="col-lg-6 col-md-6 col-12">
                                <input
                                  required
                                  {...register3("student_id")}
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-lg-4 col-12">
                            <div className="row mb-3">
                              <label className="col-lg-2 col-md-2 col-12 col-form-label info-lable">
                                তারিখ
                              </label>
                              <div className="col-lg-10 col-md-10 col-12">
                                <input
                                  required
                                  {...register3("date")}
                                  type="date"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          {/* <div className="col-md-4 col-lg-4 col-12">
                            <div className="row mb-3">
                              <label className="col-lg-2 col-md-2 col-12 col-form-label info-lable">
                                শ্রেণী
                              </label>
                              <div className="col-lg-10 col-md-10 col-12">
                                <input required
                                  type="text"
                                  className="form-control"
                                  placeholder="জামাত"
                                  readonly
                                />
                              </div>
                            </div>
                          </div> */}
                        </div>
                        <div className="col-md-4 col-lg-4 col-12">
                          <div className="row mb-3">
                            <label className="col-lg-6 col-md-6 col-12 col-form-label info-lable">
                              ফি
                            </label>
                            <div className="col-lg-6 col-md-6 col-12">
                              <input
                                required
                                {...register3("fee")}
                                type="text"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <button
                            type="submit"
                            className="custom-btn btn-primary"
                          >
                            Save
                          </button>
                          <button type="reset" className="custom-btn btn-info">
                            reset
                          </button>
                        </div>
                        {/* <div className="row">
                          <div className="col-lg-4 col-md-4 offset-md-4 offset-0">
                            <div className="row mb-3">
                              <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                                মোবাইল
                              </label>
                              <div className="col-lg-8 col-md-8 col-12">
                                <input required
                                  type="text"
                                  className="form-control"
                                  placeholder="মোবাইল"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-12">
                            <div className="row mb-3">
                              <label className="col-lg-6 col-md-6 col-12 col-form-label info-lable">
                                শিক্ষার্থী অবস্থা
                              </label>
                              <div className="col-lg-6 col-md-6 col-12">
                                <input required
                                  type="text"
                                  className="form-control"
                                  value="সক্রিয়"
                                  readonly
                                />
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </form>
                      <div></div>

                      <div className="col-lg-7 col-md-7 col-12">
                        <div className="row mt-3">
                          <div className="col-12">
                            <div className="row">
                              {/* <div className="col-6">
                                <div className="student-image">
                                  <span className="student-image-title">
                                    শিক্ষার্থীর ছবি
                                  </span>
                             
                                </div>
                              </div> */}
                              {/* <div className="col-6 meal-fee-btn">
                                <div className="button-group">
                                  <button className="custom-btn btn-primary">
                                    Save
                                  </button>
                                  <button className="custom-btn btn-danger">
                                    Print
                                  </button>
                                </div>
                              </div> */}
                            </div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div
                            className="table-responsive accounts-table"
                            data-pattern="priority-columns"
                          >
                            {/* <table
                              id="tech-companies-1"
                              className="table  bg-white text-center mb-0"
                            >
                              <thead className="text-center accounts-table-head">
                                <tr>
                                  <th>মাস</th>
                                  <th>ফি</th>
                                  <th>গ্রহন</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 col-12">
                        {/* <div className="row">
                          <label
                            className="col-12 col-form-label info-lable"
                            style={{ textAlign: "right" }}
                          >
                            মন্তব্য
                          </label>
                          <div className="col-12">
                            <textarea
                              className="form-control"
                              placeholder="মন্তব্য লিখুন"
                              rows="3"
                            ></textarea>
                          </div>
                          <div className="col-12 meal-fee">
                            <div className="button-group">
                              <a className="custom-btn btn-primary" href="#">
                                Edit
                              </a>
                            </div>
                          </div>
                        </div> */}
                        <div className="row">
                          <div className="col-12 others-menu">
                            <div className="section-title">
                              <h4>গুরুত্বপূর্ণ লিংক</h4>
                            </div>
                          </div>
                          <div className="col-12 others-navigation">
                            <ul className="navbar-nav">
                              <li className="others-nav-item">
                                <i className="bi bi-gear-fill"></i>
                                <a href="" className="others-nav-link">
                                  {" "}
                                  অর্ডার নং সেটিংস
                                </a>
                              </li>
                              <li className="others-nav-item">
                                <i className="bi bi-calendar-month"></i>
                                <a
                                  href="#"
                                  className="others-nav-link"
                                  data-bs-toggle="modal"
                                  data-bs-target="#monthname"
                                >
                                  {" "}
                                  মাসের নাম
                                </a>
                              </li>
                              <li className="others-nav-title my-1">
                                <i className="bi bi-arrow-down-square"></i>
                                <a href="#" className="others-nav-link px-1">
                                  মাসিক ফি
                                </a>
                              </li>
                              <li className="others-nav-item">
                                <i className="bi bi-cash-coin"></i>
                                <a href="#" className="others-nav-link">
                                  {" "}
                                  ফি নির্ধারণ
                                </a>
                              </li>
                              <li className="others-nav-item">
                                <i className="bi bi-card-checklist"></i>
                                <a href="#" className="others-nav-link">
                                  {" "}
                                  তালিকা তৈরি
                                </a>
                                <li className="others-nav-item">
                                  <i className="bi bi-arrow-down-up"></i>
                                  <a href="#" className="others-nav-link">
                                    {" "}
                                    বাড়ানো কমানো
                                  </a>
                                </li>
                              </li>
                              <li className="others-nav-title my-1">
                                <i className="bi bi-arrow-down-square"></i>
                                <a href="#" className="others-nav-link px-1">
                                  খাবারের ফি
                                </a>
                              </li>
                              <li className="others-nav-item">
                                <i className="bi bi-cash-coin"></i>
                                <a href="#" className="others-nav-link">
                                  {" "}
                                  ফি নির্ধারণ
                                </a>
                              </li>
                              <li className="others-nav-item">
                                <i className="bi bi-card-checklist"></i>
                                <a href="#" className="others-nav-link">
                                  {" "}
                                  তালিকা তৈরি
                                </a>
                              </li>
                              <li className="others-nav-item">
                                <i className="bi bi-arrow-down-up"></i>
                                <a
                                  href="#"
                                  className="others-nav-link"
                                  data-bs-toggle="modal"
                                  data-bs-target="#mealfeeincrase"
                                >
                                  {" "}
                                  বাড়ানো কমানো
                                </a>
                              </li>
                              <li className="others-nav-item">
                                <i className="bi bi-calendar2-day-fill"></i>
                                <a
                                  href="#"
                                  className="others-nav-link"
                                  data-bs-toggle="modal"
                                  data-bs-target="#holiday"
                                >
                                  {" "}
                                  দিন ও ছুটি
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!--Right Site Top Table End--> */}
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-12">
                    <div className="section-title">
                      <h4>মাসিক ফি গ্রহণ</h4>
                    </div>
                  </div>
                  <div className="my-2">
                    <div className="row">
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
                                <th>শিক্ষাবর্ষ</th>
                                <th>জানুয়ারী</th>
                                <th>ফেব্রুয়ারী</th>
                                <th>মার্চ</th>
                                <th>এপ্রিল</th>
                                <th>মে</th>
                                <th>জুন</th>
                                <th>জুলাই</th>
                                <th>আগস্ট</th>
                                <th>সেপটেম্বর</th>
                                <th>অক্টোবর</th>
                                <th>নভেম্বর</th>
                                <th>ডিসেম্বর</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>২০২২</td>
                                <td>৫০০.০০</td>
                                <td>৬০০.০০</td>
                                <td>০০.০০</td>
                                <td>০০.০০</td>
                                <td>০০.০০</td>
                                <td>০০.০০</td>
                                <td>০০.০০</td>
                                <td>০০.০০</td>
                                <td>০০.০০</td>
                                <td>০০.০০</td>
                                <td>০০.০০</td>
                                <td>০০.০০</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- হিসাব নিকাশ সেকশন শেষ --> */}
      {/* <!--রির্পোট প্রিন্ট সেকশন--> */}
      {/* <!--Preview Page Section--> */}
      <div className="preview-page d-print-block  d-none">
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
      </div>
      {/* <!--Modal Section--> */}
      {/* <!-- Monthly Fees Collection  Modal Start--> */}
      <div
        className="modal fade"
        id="monthly-fee"
        aria-hidden="true"
        tabindex="-1"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="section-title">
              <h4>মাসিক ফি কালেকশান</h4>
            </div>
            <form>
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-7 col-md-12 col-12">
                    <div className="section-title">
                      <h4>মাসিক ফি গ্রহণ</h4>
                    </div>
                    <div className="my-4">
                      <form className="accounts-form">
                        <div className="row">
                          <div className="col-md-4 col-lg-4 col-12">
                            <div className="row mb-3">
                              <label className="col-lg-6 col-md-6 col-12 col-form-label info-lable">
                                অর্ডার নং
                                <i>*</i>
                              </label>
                              <div className="col-lg-6 col-md-6 col-12">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-lg-4 col-12">
                            <div className="row mb-3">
                              <label className="col-lg-2 col-md-2 col-12 col-form-label info-lable">
                                নামঃ
                              </label>
                              <div className="col-lg-10 col-md-10 col-12">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="নাম"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-lg-4 col-12">
                            <div className="row mb-3">
                              <label className="col-lg-2 col-md-2 col-12 col-form-label info-lable">
                                তারিখ
                              </label>
                              <div className="col-lg-10 col-md-10 col-12">
                                <input
                                  required
                                  type="date"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4 col-lg-4 col-12">
                            <div className="row mb-3">
                              <label className="col-lg-6 col-md-6 col-12 col-form-label info-lable">
                                আইডি
                              </label>
                              <div className="col-lg-6 col-md-6 col-12">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-lg-4 col-12">
                            <div className="row mb-3">
                              <label className="col-lg-2 col-md-2 col-12 col-form-label info-lable">
                                পিতা
                              </label>
                              <div className="col-lg-10 col-md-10 col-12">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="পিতার নাম"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-lg-4 col-12">
                            <div className="row mb-3">
                              <label className="col-lg-2 col-md-2 col-12 col-form-label info-lable">
                                শ্রেণী
                              </label>
                              <div className="col-lg-10 col-md-10 col-12">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="জামাত"
                                  readonly
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-4 col-md-4 offset-md-4 offset-0">
                            <div className="row mb-3">
                              <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                                মোবাইল
                              </label>
                              <div className="col-lg-8 col-md-8 col-12">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="মোবাইল"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-12">
                            <div className="row mb-3">
                              <label className="col-lg-6 col-md-6 col-12 col-form-label info-lable">
                                শিক্ষার্থী অবস্থা
                              </label>
                              <div className="col-lg-6 col-md-6 col-12">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  value="সক্রিয়"
                                  readonly
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="my-4">
                      <div className="row">
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
                                  <th>মাস</th>
                                  <th>ফি নাম</th>
                                  <th>কর্তন</th>
                                  <th>পূর্ব জমা</th>
                                  <th>বর্তমান জমা</th>
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
                                  <td>জুলাই</td>
                                  <td>ভর্তি ফি</td>
                                  <td>২০০.০০</td>
                                  <td>০.০০</td>
                                  <td>১৫০০.০০</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="my-2">
                      <div className="row">
                        <div className="col-12">
                          <div className="filter-container py-2">
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-12">
                                <div className="row">
                                  <label className="col-lg-3 col-md-3 col-12 d-lg-block d-none col-form-label info-lable">
                                    <i className="bi bi-search text-white"></i>
                                  </label>
                                  <div className="col-lg-9 col-md-9 col-12">
                                    <input
                                      required
                                      type="date"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-12 mt-2 mt-md-0">
                                <div className="row">
                                  <div className="col-8 d-flex align-items-center justify-content-between">
                                    <div className="form-check">
                                      <input
                                        required
                                        className="form-check-input"
                                        type="radio"
                                        name="options"
                                      />
                                      <label
                                        className="form-check-label"
                                        for="options"
                                      >
                                        আইডি
                                      </label>
                                    </div>
                                    <div className="form-check">
                                      <input
                                        required
                                        className="form-check-input"
                                        type="radio"
                                        name="options"
                                      />
                                      <label
                                        className="form-check-label"
                                        for="options"
                                      >
                                        অর্ডার নং
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    <input
                                      required
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-12">
                                <div className="row">
                                  <label className="col-lg-9 col-md-9 col-8 col-form-label info-lable">
                                    আজকের গ্রহন: ২৭০০
                                  </label>
                                  <div className="col-3 d-flex align-items-center">
                                    <i
                                      className="bi bi-gear-fill"
                                      style={{ cursor: "pointer" }}
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="my-2">
                      <div className="row">
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
                                    <span className="action-edit">
                                      <i className="bi bi-pencil-square"></i>
                                    </span>
                                  </td>
                                  <td>
                                    <span className="action-delete">
                                      <i className="bi bi-trash3"></i>
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
                    </div>
                  </div>
                  <div className="col-lg-5 col-12">
                    <div className="section-title">
                      <h4>খাবারের ফি গ্রহণ</h4>
                    </div>
                    {/* <!--Right Site top Table--> */}
                    <div className="row">
                      <div className="col-lg-7 col-md-7 col-12">
                        <div className="row mt-3">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <div className="student-image">
                                  <span className="student-image-title">
                                    শিক্ষার্থীর ছবি
                                  </span>
                                  {/* <img src="/" alt="" /> */}
                                </div>
                              </div>
                              <div className="col-6 meal-fee-btn">
                                <div className="button-group">
                                  <button className="custom-btn btn-primary">
                                    Save
                                  </button>
                                  <button className="custom-btn btn-danger">
                                    Print
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3">
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
                                  <th>মাস</th>
                                  <th>ফি</th>
                                  <th>গ্রহন</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 col-12">
                        <div className="row">
                          <label
                            className="col-12 col-form-label info-lable"
                            style={{ textAlign: "left" }}
                          >
                            মন্তব্য
                          </label>
                          <div className="col-12">
                            <textarea
                              className="form-control"
                              placeholder="মন্তব্য লিখুন"
                              rows="3"
                            ></textarea>
                          </div>
                          <div className="col-12 meal-fee">
                            <div className="button-group">
                              <a className="custom-btn btn-primary" href="#">
                                Edit
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 others-menu">
                            <div className="section-title">
                              <h4>গুরুত্বপূর্ণ লিংক</h4>
                            </div>
                          </div>
                          <div className="col-12 others-navigation">
                            <ul className="navbar-nav">
                              <li className="others-nav-item">
                                <i className="bi bi-gear-fill"></i>
                                <a href="" className="others-nav-link">
                                  {" "}
                                  অর্ডার নং সেটিংস
                                </a>
                              </li>
                              <li className="others-nav-item">
                                <i className="bi bi-calendar-month"></i>
                                <a
                                  href="#"
                                  className="others-nav-link"
                                  data-bs-toggle="modal"
                                  data-bs-target="#monthname"
                                >
                                  {" "}
                                  মাসের নাম
                                </a>
                              </li>
                              <li className="others-nav-title my-1">
                                <i className="bi bi-arrow-down-square"></i>
                                <a href="#" className="others-nav-link px-1">
                                  মাসিক ফি
                                </a>
                              </li>
                              <li className="others-nav-item">
                                <i className="bi bi-cash-coin"></i>
                                <a href="#" className="others-nav-link">
                                  {" "}
                                  ফি নির্ধারণ
                                </a>
                              </li>
                              <li className="others-nav-item">
                                <i className="bi bi-card-checklist"></i>
                                <a href="#" className="others-nav-link">
                                  {" "}
                                  তালিকা তৈরি
                                </a>
                                <li className="others-nav-item">
                                  <i className="bi bi-arrow-down-up"></i>
                                  <a href="#" className="others-nav-link">
                                    {" "}
                                    বাড়ানো কমানো
                                  </a>
                                </li>
                              </li>
                              <li className="others-nav-title my-1">
                                <i className="bi bi-arrow-down-square"></i>
                                <a href="#" className="others-nav-link px-1">
                                  খাবারের ফি
                                </a>
                              </li>
                              <li className="others-nav-item">
                                <i className="bi bi-cash-coin"></i>
                                <a href="#" className="others-nav-link">
                                  {" "}
                                  ফি নির্ধারণ
                                </a>
                              </li>
                              <li className="others-nav-item">
                                <i className="bi bi-card-checklist"></i>
                                <a href="#" className="others-nav-link">
                                  {" "}
                                  তালিকা তৈরি
                                </a>
                              </li>
                              <li className="others-nav-item">
                                <i className="bi bi-arrow-down-up"></i>
                                <a
                                  href="#"
                                  className="others-nav-link"
                                  data-bs-toggle="modal"
                                  data-bs-target="#mealfeeincrase"
                                >
                                  {" "}
                                  বাড়ানো কমানো
                                </a>
                              </li>
                              <li className="others-nav-item">
                                <i className="bi bi-calendar2-day-fill"></i>
                                <a
                                  href="#"
                                  className="others-nav-link"
                                  data-bs-toggle="modal"
                                  data-bs-target="#holiday"
                                >
                                  {" "}
                                  দিন ও ছুটি
                                </a>
                              </li>
                            </ul>
                            <div className="button-group">
                              <button className="custom-btn btn-info">
                                Show
                              </button>
                              <button className="custom-btn btn-primary">
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!--Right Site Top Table End--> */}
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="section-title">
                      <h4>মাসিক ফি গ্রহণ</h4>
                    </div>
                  </div>
                  <div className="my-2">
                    <div className="row">
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
                                <th>শিক্ষাবর্ষ</th>
                                <th>জানুয়ারী</th>
                                <th>ফেব্রুয়ারী</th>
                                <th>মার্চ</th>
                                <th>এপ্রিল</th>
                                <th>মে</th>
                                <th>জুন</th>
                                <th>জুলাই</th>
                                <th>আগস্ট</th>
                                <th>সেপটেম্বর</th>
                                <th>অক্টোবর</th>
                                <th>নভেম্বর</th>
                                <th>ডিসেম্বর</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>২০২২</td>
                                <td>৫০০.০০</td>
                                <td>৬০০.০০</td>
                                <td>০০.০০</td>
                                <td>০০.০০</td>
                                <td>০০.০০</td>
                                <td>০০.০০</td>
                                <td>০০.০০</td>
                                <td>০০.০০</td>
                                <td>০০.০০</td>
                                <td>০০.০০</td>
                                <td>০০.০০</td>
                                <td>০০.০০</td>
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
                  <button className="custom-btn btn-primary" type="submit">
                    Save
                  </button>
                  <button
                    className="custom-btn btn-dark"
                    data-bs-dismiss="modal"
                    onclick="javascript:void(0)"
                    type="button"
                  >
                    Close
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!--Monthly Fees Collection  Modal End--> */}
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
                          <div className="col-5">
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
                          </div>
                          <div className="col-7">
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
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row mb-3">
                          <div className="col-12">
                            <div className="section-title special-bg">
                              <h4>মাসের নাম</h4>
                            </div>
                          </div>
                        </div>
                      </div>
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
                                  {months?.data.map((item) => (
                                    <>
                                      <th>{item.session}</th>
                                      <th>{item.class}</th>
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
                                    </>
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
      {/* <!--খাবার এন্ট্রি Modal End--> */}
      {/* <!-- Add Desegnation  Modal Start--> */}
      <div
        className="modal fade"
        id="adddesignation"
        aria-hidden="true"
        tabindex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="section-title">
              <h4>পদবীর নাম যোগ করুন</h4>
            </div>
            <form>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12 w-100">
                    <div className="row">
                      <div className="col-12">
                        <div className="my-4">
                          <div className="row mb-3">
                            <label className="col-sm-3 col-form-label info-lable">
                              পদবীর নামঃ
                            </label>
                            <div className="col-8">
                              <input
                                required
                                type="text"
                                className="form-control"
                                placeholder="পদবীর নাম"
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <label className="col-sm-3 col-form-label info-lable">
                              মন্তব্যঃ
                            </label>
                            <div className="col-8">
                              <input
                                required
                                type="text"
                                className="form-control"
                                placeholder="মন্তব্য"
                              />
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
                                  <th></th>
                                  <th>ক্রমিক নং</th>
                                  <th>পদবীর নাম</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th></th>
                                  <td>০১</td>
                                  <td>মুহতামিম</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০২</td>
                                  <td>নায়েবে মুহতামিম শায়খুল হাদীস</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০৩</td>
                                  <td>প্রধান মুফতী কাম- শায়খে ছানী</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০৪</td>
                                  <td>শিক্ষাসচিব কাম- সিনিয়র মুহাদ্দিস</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০৪</td>
                                  <td>সিনিয়র মুহাদ্দিস</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০৪</td>
                                  <td>মুহাদ্দিস</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০৪</td>
                                  <td>সিনিয়র ইস্তাদ</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০৪</td>
                                  <td>উস্তাদে মুহতারাম</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০৪</td>
                                  <td>উস্তাদ হিফজ বিভাগ</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০৪</td>
                                  <td>উস্তাদ নাজেরা বিভাগ</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০৪</td>
                                  <td>উস্তাদ নূরানী বিভাগ</td>
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
              <div className="modal-footer">
                <div className="button-group">
                  <button className="custom-btn btn-primary" type="submit">
                    Save
                  </button>
                  <button
                    className="custom-btn btn-dark"
                    data-bs-dismiss="modal"
                    onclick="javascript:void(0)"
                    type="button"
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

export default MonthlyFees;
