import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { serverUrl } from "../../utils/config";
import { useState } from "react";
import { useRef } from "react";
import ReactToPrint from "react-to-print";

const StudentInfo = () => {
  const ref = useRef();
  const { register, handleSubmit } = useForm();
  const mutation = useMutation({
    mutationFn: (newUser) => {
      return axios.post(`${serverUrl}/api/student`, newUser);
    },
    onError: (error, variable, context) => {
      // console.log(error.response.data.message);
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      toast.success("posted successfully");
      console.log(data?.data.id);
      setStudentids(data?.data.id);
    },
  });

  const [fees, setFees] = useState("");
  const [student_ids, setStudentids] = useState("");

  const Fee = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/customfeecall`, data);
    },
    onError: (error, variable, context) => {
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      setFees(data?.data);
    },
  });

  const submitFee = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/pay-fees`, data);
    },
    onError: (error, variable, context) => {
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      console.log("data", data?.data);
      toast.success("fee submitted");
    },
  });
  const { data: me, isLoading } = useQuery(["me"]);

  // console.log("student", me?.data);

  console.log("first", fees);

  const { data: marhalaClass } = useQuery("marhalaclass", () =>
    fetch(`${serverUrl}/api/marhalaclass`).then((res) => res.json())
  );
  const { data: academicYear } = useQuery("academicyear", () =>
    fetch(`${serverUrl}/api/academicyear`).then((res) => res.json())
  );
  const [value, setValue] = useState({});
  const onSubmit = async (value) => {
    console.log(value);
    mutation.mutate({ ...value, notun_puraton: value.old_new });

    const data = `${value.gender}_${value.abashik_onabashik}_${value.old_new}`;
    const params = {
      state: data,
    };
    params.academic_year = value.academic_year;
    params.class_name = value.class_name;
    console.log(params);
    Fee.mutate(params);
    setValue(value);
  };

  const { register: register2, handleSubmit: handleSubmit2 } = useForm();

  const onSubmit2 = (value) => {
    value.ammount = fees;
    value.student_id = student_ids;
    console.log(value);
    submitFee.mutate(value);
  };
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${day}-${month}-${year}`;
  return (
    <div>
      <section className="user-form-section">
        <div className="section-bg">
          <div className="row">
            <div className="col-md-12 w-100">
              <div className="main-container">
                <div className="row">
                  <div className="col-lg-7 col-md-12 col-sm-12">
                    <div className="section-title">
                      <h4>শিক্ষার্থীর তথ্য</h4>
                    </div>
                    <div className="my-4">
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="studentsinfo-form"
                      >
                        <div className="row">
                          <div className="row mb-3">
                            <div className="section-title">
                              <h4>শিক্ষাবর্ষঃ</h4>
                            </div>
                            <div className="filter-menu">
                              <select
                                className="form-select"
                                size="3"
                                style={{ border: "none" }}
                                {...register("session")}
                              >
                                {academicYear?.data.map((item) => (
                                  <option key={item.id}>
                                    {item.academic_year}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="section-title">
                            <h4>মারহালা/শ্রেণীঃ</h4>
                          </div>
                          <div className="filter-menu">
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
                        <div className="col-lg-5 col-md-2 col-2">
                          <div className="row mb-3">
                            <div className="option-icon">
                              <span>
                                <a href="#">
                                  <i className="bi bi-info-circle-fill"></i>
                                </a>
                              </span>
                              <span>
                                <a
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#admissonModal"
                                >
                                  <i className="bi bi-gear-fill"></i>
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-7 col-md-12 col-12 ">
                            <label className="col-12 col-md-12 col-lg-4 col-form-label info-lable">
                              নতুন/পুরাতনঃ
                              <i>*</i>
                            </label>
                            <select
                              class="form-select form-select-sm mx-auto"
                              aria-label=".form-select-sm example"
                              {...register("old_new")}
                            >
                              {/* <option disabled>নতুন/পুরাতনঃ</option> */}
                              <option value="new">নতুন</option>
                              <option value="old">পুরাতনঃ</option>
                            </select>
                          </div>
                          <div className="col-lg-5 col-md-12 col-12">
                            <div className="row mb-3">
                              <label className="col-12 col-md-12 col-lg-4 col-form-label info-lable">
                                স্থায়ী গ্রামঃ
                                <i>*</i>
                              </label>
                              <div className="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="গ্রাম"
                                  {...register("perm_graam")}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-7 col-md-12 col-12">
                            <div className="row mb-1 mb-lg-3">
                              <label className="col-12 col-md-12 col-lg-4 col-form-label info-lable">
                                ছাত্রের আইডিঃ
                                <i>*</i>
                              </label>
                              <div className="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="ছাত্রের আইডি"
                                  {...register("student_id")}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5 col-md-12 col-12">
                            <div className="row mb-1 mb-lg-3">
                              <label className="col-12 col-md-12 col-lg-4 col-form-label info-lable">
                                স্থায়ী ডাকঃ
                                <i>*</i>
                              </label>
                              <div className="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="ডাক"
                                  {...register("perm_daak")}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-7 col-md-12 col-12">
                            <div className="row mb-3">
                              <label className="col-12 col-md-12 col-lg-4 col-form-label info-lable">
                                রোল নংঃ
                                <i>*</i>
                              </label>
                              <div className="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="রোল নং"
                                  {...register("roll")}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5 col-md-12 col-12">
                            <div className="row mb-3">
                              <label className="col-12 col-md-12 col-lg-4 col-form-label info-lable">
                                স্থায়ী থানাঃ
                                <i>*</i>
                              </label>
                              <div className="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="থানা"
                                  {...register("perm_thana")}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-7 col-md-12 col-12">
                            <div className="row mb-3">
                              <div className="col-lg-7 col-md-12 col-12">
                                <div className="row">
                                  <label className="col-lg-7 col-12 col-md-12 col-form-label info-lable">
                                    ছাত্র/ছাত্রীঃ
                                    <i>*</i>
                                  </label>
                                  <select
                                    class="form-select form-select-sm mx-auto"
                                    aria-label=".form-select-sm example"
                                    {...register("gender")}
                                  >
                                    {/* <option disabled>নতুন/পুরাতনঃ</option> */}
                                    <option value="boy">ছাত্র</option>
                                    <option value="girl">ছাত্রীঃ</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-5 col-md-12 col-12">
                                <div className="row">
                                  <label className="col-lg-5 col-12 col-md-12 col-form-label info-lable">
                                    ফর্ম নাঃ
                                    <i>*</i>
                                  </label>
                                  <div className="col-lg-7 col-12 col-md-12">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="ফর্ম নাঃ"
                                      {...register("form_number")}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5 col-12 col-md-12">
                            <div className="row mb-lg-3 mb-1">
                              <label className="col-lg-4 col-12 col-md-12 col-form-label info-lable">
                                স্থায়ী জেলাঃ
                                <i>*</i>
                              </label>
                              <div className="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="জেলা"
                                  {...register("perm_jela")}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-7 col-12 col-md-12">
                            <div className="row">
                              <label className="col-lg-4 col-12 col-md-12 col-form-label info-lable">
                                অনাবাসিক/অনাবাসিকঃ
                                <i>*</i>
                              </label>
                              <select
                                class="form-select form-select-sm"
                                aria-label=".form-select-sm example"
                                {...register("abashik_onabashik")}
                              >
                                {/* <option disabled>নতুন/পুরাতনঃ</option> */}
                                <option value="resi">অবাসিক</option>
                                <option value="unresi">অনাবাসিকঃ</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-7 col-12 col-md-12">
                            <div className="row mb-lg-3 mb-1">
                              <label className="col-lg-4 col-12 col-md-12 col-form-label info-lable">
                                শিক্ষার্থী নামঃ
                                <i>*</i>
                              </label>
                              <div className="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="শিক্ষার্থী নাম"
                                  {...register("student_name")}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5 col-12 col-md-12">
                            <div className="row mb-lg-3 mb-1">
                              <label className="col-lg-4 col-12 col-md-12 col-form-label info-lable">
                                গ্রামঃ
                                <i>*</i>
                              </label>
                              <div className="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="গ্রাম"
                                  {...register("graam")}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-7 col-12 col-md-12">
                            <div className="row mb-lg-3 mb-1">
                              <label className="col-lg-4 col-12 col-md-12 col-form-label info-lable">
                                পিতার নামঃ
                                <i>*</i>
                              </label>
                              <div className="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="পিতার নাম"
                                  {...register("father_name")}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5 col-12 col-md-12">
                            <div className="row mb-lg-3 mb-1">
                              <label className="col-lg-4 col-12 col-md-12 col-form-label info-lable">
                                থানাঃ
                                <i>*</i>
                              </label>
                              <div className="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="থানা"
                                  {...register("thana")}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-7 col-12 col-md-12">
                            <div className="row mb-lg-3 mb-1">
                              <label className="col-lg-4 col-12 col-md-12 col-form-label info-lable">
                                মাতার নামঃ
                                <i>*</i>
                              </label>
                              <div className="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="মাতার নাম"
                                  {...register("mother_name")}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5 col-12 col-md-12">
                            <div className="row mb-lg-3 mb-1">
                              <label className="col-lg-4 col-12 col-md-12 col-form-label info-lable">
                                জেলাঃ
                                <i>*</i>
                              </label>
                              <div className="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="জেলা"
                                  {...register("jela")}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-7 col-12 col-md-12">
                            <div className="row mb-lg-3 mb-1">
                              <label className="col-lg-4 col-12 col-md-12 col-form-label info-lable">
                                জন্ম তারিখঃ
                                <i>*</i>
                              </label>
                              <div className="col-lg-8 col-12 col-md-12">
                                <input
                                  type="date"
                                  className="form-control"
                                  placeholder="মাতার নাম"
                                  {...register("dob")}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5 col-12 col-md-12">
                            <div className="row mb-lg-3 mb-1">
                              <label className="col-lg-4 col-12 col-md-12 col-form-label info-lable">
                                মন্তব্যঃ
                                <i>*</i>
                              </label>
                              <div className="col-lg-8 col-12 col-md-12">
                                <textarea
                                  className="form-control"
                                  placeholder=" মন্তব্য"
                                  {...register("comment")}
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-7 col-12 col-md-12">
                            <div className="row mb-lg-3 mb-1">
                              <label className="col-lg-4 col-12 col-md-12 col-form-label info-lable">
                                NID/জন্ম নিবন্ধন
                                <i>*</i>
                              </label>
                              <div className="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="NID/জন্ম নিবন্ধন নং"
                                  {...register("nid_no")}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5 col-12 col-md-12"></div>
                        </div>
                        <div className="row">
                          <div className="col-lg-7 col-12 col-md-12">
                            <div className="row mb-lg-3 mb-1">
                              <label className="col-sm-4 col-form-label info-lable">
                                জাতীয়তাঃ
                                <i>*</i>
                              </label>
                              <div className="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="জাতীয়তা"
                                  {...register("nationality")}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5 col-12 col-md-12"></div>
                        </div>
                        <div className="row">
                          <div className="col-lg-7 col-12 col-md-12">
                            <div className="row mb-lg-3 mb-1">
                              <label className="col-lg-4 col-12 col-md-12 col-form-label info-lable">
                                রক্তের গ্রুপঃ
                                <i>*</i>
                              </label>
                              <div className="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="রক্তের গ্রুপঃ"
                                  {...register("blood_group")}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5 col-12 col-md-12"></div>
                        </div>
                        <div className="row">
                          <div className="col-lg-7 col-12 col-md-12">
                            <div className="row mb-lg-3 mb-1">
                              <label className="col-sm-4 col-form-label info-lable">
                                এস. এম. এস যাবেঃ
                                <i>*</i>
                              </label>
                              <div className="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="এস. এম. এস যাবে"
                                  {...register("phn_no")}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5 col-12 col-md-12"></div>
                        </div>
                        <div className="row">
                          {/* <div className="col-lg-7 col-12 col-md-12">
                            <div className="row mb-lg-3 mb-1">
                              <label className="col-lg-4 col-12 col-md-12 col-form-label info-lable">
                                <i>*</i>
                              </label>
                              <div className="col-lg-8 col-12 col-md-12">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="এস. এম. এস যাবে"
                                />
                              </div>
                            </div>
                          </div> */}
                          <div className="col-lg-5 col-12 col-md-12">
                            <div className="option-subtext">
                              <h6>ডাটাবেজ তথ্য</h6>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-7 col-12 col-md-12 offset-lg-5 offset-0">
                            <div className="row mb-lg-3 mb-1">
                              <label className="col-lg-7 col-12 col-md-12 col-form-label info-lable">
                                সর্বমোট ছাত্র সংখ্যাঃ
                                <i>*</i>
                              </label>
                              <div className="col-lg-5 col-12 col-md-12">
                                <input
                                  type="text"
                                  value="২০০"
                                  className="form-control"
                                  placeholder="সর্বমোট ছাত্র সংখ্যা"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-7 col-12 col-md offset-lg-5 offset-0">
                            <div className="row mb-lg-3 mb-1">
                              <label className="col-lg-7 col-12 col-md-12 col-form-label info-lable">
                                এই বছরের মোট ছাত্র সংখ্যাঃ
                                <i>*</i>
                              </label>
                              <div className="col-lg-5 col-12 col-md-12">
                                <input
                                  type="text"
                                  value="০৫"
                                  className="form-control"
                                  placeholder="এই বছরের মোট ছাত্র সংখ্যা"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="button-group my-4">
                          <a
                            href="#"
                            className="custom-btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#admissonfees"
                          >
                            Pay fees
                          </a>
                          <button className="custom-btn btn-dark" type="submit">
                            Register Student
                          </button>
                          <button className="custom-btn btn-dark" type="reset">
                            Reset
                          </button>
                          {/* <button
                            className="custom-btn btn-primary"
                            type="submit"
                          >
                            New
                          </button> */}
                          {/* <button className="custom-btn btn-dark" type="submit">
                            Close
                          </button> */}
                          {/* <button
                            className="custom-btn btn-danger"
                            type="submit"
                          >
                            Delete
                          </button> */}
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-5 col-12 col-md-12">
                    <div className="table-data mt-4">
                      <div className="row form-group searchbar">
                        <div className="col-sm-6 position-relative search">
                          <i className="bi bi-search search-icon"></i>
                          <input
                            className="form-control"
                            type="search"
                            placeholder="Search"
                          />
                        </div>
                      </div>
                      <div
                        className="table-responsive"
                        data-pattern="priority-columns"
                      >
                        <table
                          id="tech-companies-1"
                          className="table  bg-white table-bordered text-center"
                        >
                          <thead className="text-center accounts-table-head">
                            <tr>
                              <th>
                                <select className="form-select">
                                  <option value=""></option>
                                  <option>তাকমিল</option>
                                  <option>মক্তব</option>
                                  <option>হিফজুল কুরআন</option>
                                  <option>পরীক্ষামূলক মারহালা</option>
                                </select>
                              </th>
                              <th>
                                <select className="form-select">
                                  <option value=""></option>
                                  <option>তাকমিল</option>
                                  <option>মক্তব</option>
                                  <option>হিফজুল কুরআন</option>
                                  <option>পরীক্ষামূলক মারহালা</option>
                                </select>
                              </th>
                              <th>
                                <select className="form-select">
                                  <option value=""></option>
                                  <option>তাকমিল</option>
                                  <option>মক্তব</option>
                                  <option>হিফজুল কুরআন</option>
                                  <option>পরীক্ষামূলক মারহালা</option>
                                </select>
                              </th>
                              <th>
                                <button className="btn btn-success btn-sm">
                                  খুজুন
                                </button>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                              <th></th>
                              <th></th>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <th></th>
                              <th></th>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <th></th>
                              <th></th>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <th></th>
                              <th></th>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <th></th>
                              <th></th>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <th></th>
                              <th></th>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <th></th>
                              <th></th>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <th></th>
                              <th></th>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <th></th>
                              <th></th>
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
      </section>
      {/* <!-- Create Student Information form END --> */}
      {/* <!--Modal Section--> */}
      {/* <!--Admisson settings Releted Modal Start--> */}
      {/* <div
        className="modal fade"
        id="admissonModal"
        aria-hidden="true"
        tabindex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="section-title">
              <h4>ছাত্রের তথ্য এন্ট্রি সেটিংস</h4>
            </div>
            <div className="modal-body">
              <div className="settings-container">
                <div className="settings-item">
                  <div>
                    <h6>ভর্তির রশিদ</h6>
                  </div>
                  <div className="settings-options">
                    <div className="options">
                      <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        value=""
                        aria-label="Checkbox for following text input"
                        name="checkbox"
                      />
                      <span className="">সেইভ এর সাথে সাথে রসিদ</span>
                    </div>
                    <div className="options">
                      <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        value=""
                        aria-label="Checkbox for following text input"
                        name="checkbox"
                      />
                      <span className="">পরে</span>
                    </div>
                    <div className="options">
                      <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        value=""
                        aria-label="Checkbox for following text input"
                        name="checkbox"
                      />
                      <span className="">ভর্তি ফি বিহীন (ফ্রি)</span>
                    </div>
                  </div>
                  <p>
                    ছাত্র এন্ট্রির সময় যে সকল বক্সে তথ্য এন্ট্রি করার প্রয়োজন
                    মনে হয় সেগুলোকে ঠিক চিহ্ন দিতে হবে।
                  </p>
                </div>
                <div className="entrytype-option">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="options"
                    />
                    <label className="form-check-label" for="options">
                      রোল নাম্বার
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="options"
                    />
                    <label className="form-check-label" for="options">
                      ফরম নাম্বার
                    </label>
                  </div>
                </div>
                <div className="settings-item mt-3">
                  <div>
                    <h6>থাকা খাওয়ার অবস্থা</h6>
                  </div>
                  <div className="settings-options">
                    <div className="options">
                      <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        value=""
                        aria-label="Checkbox for following text input"
                        name="checkbox"
                      />
                      <span className="">আবাসিক</span>
                    </div>
                    <div className="options">
                      <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        value=""
                        aria-label="Checkbox for following text input"
                        name="checkbox"
                      />
                      <span className="">অনাবাসিক</span>
                    </div>
                    <div className="options">
                      <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        value=""
                        aria-label="Checkbox for following text input"
                        name="checkbox"
                      />
                      <span className="">এন্ট্রির মাধ্যমে</span>
                    </div>
                  </div>
                  <p className="text-center my-2">
                    "ক খ" মাদরাসায় আপনার সন্তানের ভর্তি সম্পন্ন করা হয়েছে।
                  </p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="button-group">
                <button className="custom-btn btn-primary" type="submit">
                  Save
                </button>
                <button className="custom-btn btn-dark" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!--Admisson settings Releted Modal End--> */}
      {/* <!--Admisson Fees Collect Modal Start--> */}
      <div
        className="modal fade"
        id="admissonfees"
        aria-hidden="true"
        tabindex="-1"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="section-title">
              <h4>ভর্তি ফি গ্রহণ</h4>
            </div>
            <form onSubmit={handleSubmit2(onSubmit2)}>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12 w-100">
                    <div className="row">
                      <div className="col-6">
                        <div className="my-4">
                          <div className="row mb-3">
                            <label className="col-sm-4 col-form-label info-lable">
                              ভাউচার নংঃ
                            </label>
                            <div className="col-8">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="ভাউচার নং"
                                {...register2("voucher_no")}
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <label className="col-sm-4 col-form-label info-lable">
                              ছাত্রের আইডিঃ
                            </label>
                            <div className="col-8">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="ছাত্রের আইডি"
                                value={student_ids}
                                {...register2("student_id")}
                              />
                            </div>
                          </div>
                          {/* <div className="row mb-3">
                            <label className="col-sm-4 col-form-label info-lable">
                              কর্তনঃ
                            </label>
                            <div className="col-8">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="কর্তন"
                              />
                            </div>
                          </div> */}
                          <div className="row mb-3">
                            <label className="col-sm-4 col-form-label info-lable">
                              পরিমাণঃ
                            </label>
                            <div className="col-8">
                              <input
                                type="text"
                                className="form-control"
                                // placeholder={fees}
                                value={fees}
                                {...register2("ammount")}
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <label className="col-sm-4 col-form-label info-lable">
                              মন্তব্যঃ
                            </label>
                            <div className="col-8">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="মন্তব্য"
                                {...register2("comment")}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="col-md-6">
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
                                  <th>ফি এর ধরন</th>
                                  <th>টাকা</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th></th>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td></td>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="button-group">
                  <ReactToPrint
                    trigger={() => (
                      <button className="custom-btn btn-primary" type="submit">
                        Save
                      </button>
                    )}
                    content={() => ref.current}
                  />
                  {/* <button
                    className="custom-btn btn-dark"
                    data-bs-dismiss="modal"
                    onclick="javascript:void(0)"
                    type="button"
                  >
                    Close
                  </button> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!--Admisson Fees Collect Modal End--> */}
      {/* <!--Class Migration  Modal Start--> */}
      {/* <div
        className="modal fade"
        id="stdentmigrattion"
        aria-hidden="true"
        tabindex="-1"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="section-title">
              <h4>শিক্ষার্থীর ক্লাস পরিবর্তন</h4>
            </div>
            <form>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12 w-100">
                    <div className="row">
                      <div className="col-12">
                        <div className="my-4">
                          <div className="row mb-3">
                            <label className="col-sm-4 col-form-label info-lable">
                              সিরিয়াল নংঃ
                              <i>*</i>
                            </label>
                            <div className="col-8">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="সিরিয়াল নং"
                                required
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <label className="col-sm-4 col-form-label info-lable">
                              ছাত্র/ছাত্রীর নামঃ
                              <i>*</i>
                            </label>
                            <div className="col-8">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="ছাত্র/ছাত্রীর নাম"
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <label className="col-sm-4 col-form-label info-lable">
                              পিতার নামঃ
                            </label>
                            <div className="col-8">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="পিতার নাম"
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <label className="col-sm-4 col-form-label info-lable">
                              শ্রেণী/মারহালাঃ
                            </label>
                            <div className="col-8">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="শ্রেণী/মারহালা"
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <label className="col-sm-4 col-form-label info-lable">
                              শিক্ষার্থীর আইডিঃ
                            </label>
                            <div className="col-8">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="শিক্ষার্থীর আইডি"
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <label className="col-sm-4 col-form-label info-lable">
                              যে ক্লাশে স্থানান্তরিত হবেঃ
                              <i>*</i>
                            </label>
                            <div className="col-8">
                              <select className="form-select">
                                <option selected>শ্রেণী নির্বাচন করুন</option>
                                <option>নাযেরা</option>
                                <option>হিফযুল কুরআন</option>
                                <option>ই দাদী</option>
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
                          <div className="row mb-3">
                            <label className="col-sm-4 col-form-label info-lable">
                              নতুন আইডিঃ
                            </label>
                            <div className="col-8">
                              <input
                                type="text"
                                className="form-control"
                                placeholder=" নতুন আইডি"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-12">
                        <div className="migration-container">
                          <div className="migration-title">
                            ক্লাস পরিবর্তনের ধরন
                          </div>
                          <div className="migration-type">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="options"
                              />
                              <label className="form-check-label" for="options">
                                আইডি পরিবর্তন না করে ক্লাস স্থানান্তর
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="options"
                              />
                              <label className="form-check-label" for="options">
                                আইডি পরিবর্তন করে ক্লাস স্থানান্তর
                              </label>
                            </div>
                          </div>
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
      </div> */}
      {/* <!--Class Migration Modal End--> */}
      <div style={{ display: "none" }} id="invoice">
        <div
          ref={ref}
          className="preview-page d-print-block"
          style={{ zIndex: 1 }}
        >
          <span className="print-button d-print-none" onclick="window.print()">
            <i className="bi bi-printer-fill"></i>
          </span>
          <div className="pages-title">
            <h5>জামিয়া আরাবিয়া ইমদাদুল ফরিদাবাদ</h5>
            <p>১১/১২ মাদরাসা রোড, গেন্ডারিয়া, ঢাকা-১২০৪</p>
            <span>01832-061454 # 027440235</span>
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
                  <strong className="dtitle">কাস্টমারের নামঃ</strong>
                  <div className="border-line w-100">{value?.student_name}</div>
                </div>
                <div className="donor-name">
                  <strong className="dtitle">পিতার নামঃ</strong>
                  <div className="border-line w-100">{value?.father_name}</div>
                </div>
                <div className="donor-name">
                  <strong className="dtitle">ঠিকানাঃ</strong>
                  <div className="border-line w-100">{value?.jela}</div>
                </div>
                {/* <div className="donor-name mt-1">
                  <strong className="dtitle">টাকাঃ</strong>
                  <div className="border-all w-100">৫০০.০০ টাকা</div>
                </div> */}
              </div>
              <div className="col-6">
                <div className="donor-name">
                  <strong className="dtitle">মোবাইলঃ</strong>
                  <div className="border-line w-100">{value?.phn_no}</div>
                </div>
                <div className="donor-name">
                  <strong className="dtitle">শ্রেণীঃ</strong>
                  <div className="border-line w-100">{value?.class}</div>
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
                        {/* <th>বইয়ের নাম</th> */}শ্রে ণ<th>নির্ধারিত ফি</th>
                        {/* <th>সংখ্যা</th> */}
                        {/* <th>মূল্য</th> */}
                        <th>এমাউন্ট</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>০১</td>
                        {/* <td>সহীহ বুখারি</td> */}
                        <td>{fees}</td>
                        {/* <td>০২</td> */}
                        {/* <td>১০০</td> */}
                        <td>{fees}</td>
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
                        <td>{fees}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-12">
                <div className="row mt-5">
                  <div className="col-lg-4 col-12 d-flex justify-content-lg-start justify-content-center">
                    <div className="marksheet-sing">
                      <span>কাস্টমারের স্বাক্ষর</span>
                      <br />
                    </div>
                  </div>
                  <div className="col-lg-4 col-12 d-flex justify-content-lg-end justify-content-center mt-lg-0 mt-3">
                    <div className="marksheet-sing">
                      <span>পরিচালকের স্বাক্ষর</span>
                      <br />
                      <span>{me?.data.name}</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12 d-flex justify-content-lg-end justify-content-center mt-lg-0 mt-3">
                    <div className="marksheet-sing">
                      <span>আদায়কারীর স্বাক্ষর</span>
                      <br />
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

export default StudentInfo;
