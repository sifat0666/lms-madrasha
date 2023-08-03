import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { sendSms, serverUrl } from "../../utils/config";
import { useState } from "react";
import { useRef } from "react";
import ReactToPrint from "react-to-print";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  preview: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
  },
  image: { maxWidth: "144px", maxHeight: "144px" },
  delete: {
    cursor: "pointer",
    padding: 15,
    background: "red",
    color: "white",
    border: "none",
  },
};

const StudentInfo = () => {
  const ref = useRef();

  const [student, setStudent] = useState();
  const [joma, setJoma] = useState(0);
  const [fees, setFees] = useState(0);
  const [student_ids, setStudentids] = useState("");
  const [image, setImage] = useState();

  const { data: msg } = useQuery("msg", () =>
    fetch(`${serverUrl}/api/msg/${1}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );
  const { data: studentData, refetch } = useQuery("student", () =>
    fetch(`${serverUrl}/api/student`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  const [id, setId] = useState("");

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const onDelete = async (id) => {
    const data = await axios.delete(`${serverUrl}/api/student/${id}`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    refetch();
  };

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${day}-${month}-${year}`;
  const { register, handleSubmit } = useForm();
  const { register: register2, handleSubmit: handleSubmit2 } = useForm();
  const { register: register3, handleSubmit: handleSubmit3 } = useForm();
  const mutation = useMutation({
    mutationFn: (newUser) => {
      return axios.post(`${serverUrl}/api/student`, newUser, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
    onError: (error, variable, context) => {
      // console.log(error.response.data.message);
      toast.error(error.response.data.message);
      console.log(error);
    },
    onSuccess: (data) => {
      toast.success(`student registered successfully, ID ${data?.data.id}`);
      console.log("data student", data?.data.id);
      setStudentids(data?.data.id);
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
    onError: (error, variable, context) => {
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      console.log("fee", data?.data);
      setFees(data?.data);
    },
  });

  const crustomStudent = useMutation({
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
      setStudent(data?.data);
      // window.location.reload(true);
    },
  });

  const submitFee = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/pay-fees`, data, {
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
      console.log("data", data?.data);
      toast.success("fee submitted");

      console.log("msg", msg);
      if (true) {
        sendSms(
          value?.phn_no,
          `${value.student_name} জমা দিয়েছে ${data?.data.ammount} টাকা ভর্তি ফি`
        );
      }
    },
  });
  const { data: me } = useQuery(["me"]);

  // console.log("student", me?.data);

  // console.log("first", fees);

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
  const [value, setValue] = useState({});

  const onSubmit = async (value) => {
    const data = `${value.gender}_${value.abashik_onabashik}_${value.old_new}`;

    const imageData = new FormData();
    imageData.append("file", image);
    imageData.append("upload_preset", "hwcadnsm");
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dlmyqzumr/image/upload",
      imageData
    );

    console.log("img", response?.data.secure_url);

    if (id) {
      mutation.mutate({
        ...value,
        id: id,
        notun_puraton: value.old_new,
        image: response?.data.secure_url,
      });
    } else {
      mutation.mutate({
        ...value,
        notun_puraton: value.old_new,
        image: response?.data.secure_url,
      });
    }

    const params = {
      state: data,
    };
    params.academic_year = value.session;
    params.class_name = value.class;
    // console.log("params", params);
    Fee.mutate({ ...params, fee_name: "ভর্তি ফি" });
    setValue(value);
  };

  const onSubmit3 = (data) => {
    crustomStudent.mutate(data);
  };

  const [feeVal, setFeeVal] = useState();

  // console.log("feeVal", feeVal);

  let korton = joma ? parseInt(fees) - parseInt(joma) : 0;

  const onSubmit2 = (value) => {
    value.determined_fee = fees;
    value.student_id = student_ids;
    setFeeVal();
    // console.log("fess submit", value);
    submitFee.mutate({ ...value, ammount: joma, discount: korton });
  };

  const [studentsInfo, setStudentInfo] = useState();
  const [stat, setStat] = useState("");
  console.log(stat);

  console.log(
    "🚀 ~ file: StudentInfo.jsx:233 ~ StudentInfo ~ studentsInfo:",
    studentsInfo
  );

  const fetchById = async () => {
    console.log("first", id);
    const student = await axios.get(`${serverUrl}/api/student/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    setStudentInfo(student?.data);
  };
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
                      <h4>শিক্ষার্থীর খুঁজুন</h4>
                    </div>
                    <input
                      type="text"
                      placeholder="আইডি দিয়ে সার্চ করুন"
                      name=""
                      id=""
                      className="m-3 p-2 w-75"
                      onChange={(e) => setId(e.target.value)}
                    />
                    <button
                      className="custom-btn btn-primary "
                      onClick={fetchById}
                    >
                      Search
                    </button>
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
                                required
                                className="form-select"
                                size="3"
                                style={{ border: "none" }}
                                {...register("session")}
                              >
                                {academicYear?.data.map((item) => (
                                  <option
                                    // value={item.academic_year}
                                    key={item.id}
                                    selected={
                                      studentsInfo?.session ==
                                      item.academic_year
                                    }
                                  >
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
                              required
                              defaultValue={studentsInfo?.class}
                              className="form-select"
                              size="4"
                              style={{ border: "none" }}
                              {...register("class")}
                            >
                              {marhalaClass?.data.map((item) => (
                                <option
                                  key={item.id}
                                  selected={
                                    studentsInfo?.class === item.class_name
                                  }
                                  // onClick={() => setClasss(item.academicYear)}
                                >
                                  {item.class_name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        {/* <div className="col-lg-5 col-md-2 col-2">
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
                        </div> */}

                        <div className="row">
                          {/* <div className="col-lg-7 col-md-12 col-12 ">
                            <label className="col-12 col-md-12 col-lg-4 col-form-label info-lable p-">
                              নতুন/পুরাতনঃ
                              <i>*</i>
                            </label>
                            <select
                              class="form-select form-select-sm mx-auto m-3"
                              {...register("old_new")}
                            >
                              <option value="new">নতুন</option>
                              <option value="old">পুরাতনঃ</option>
                            </select>
                          </div> */}
                          <div className="col-lg-7 col-md-12 col-12">
                            <div className="row mb-1 mb-lg-3">
                              <label className="col-12 col-md-12 col-lg-4 col-form-label info-lable">
                                নতুন/পুরাতনঃ
                                <i>*</i>
                              </label>
                              <div className="col-lg-8 col-12 col-md-12">
                                <select
                                  required
                                  class="form-select form-select-sm mx-auto m-3"
                                  {...register("old_new")}
                                  defaultValue={studentsInfo?.notun_puraton}
                                  style={{
                                    textAlign: "center",
                                    justifyItems: "center",
                                    alignContent: "center",
                                    alignItems: "center",
                                  }}
                                  onChange={(e) => setStat(e.target.value)}
                                >
                                  <option value="new">নতুন</option>
                                  <option value="old">পুরাতনঃ</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5 col-md-12 col-12">
                            <div className="row mb-3">
                              <label className="col-12 col-md-12 col-lg-4 col-form-label info-lable">
                                স্থায়ী গ্রামঃ
                                <i>*</i>
                              </label>
                              <div className="col-lg-8 col-12 col-md-12">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="গ্রাম"
                                  defaultValue={studentsInfo?.perm_graam}
                                  {...register("perm_graam")}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div
                            className="col-lg-7 col-md-12 col-12"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            {stat == "old" && (
                              <div className="row d-flex  mb-1 mb-lg-3">
                                <input
                                  type="text"
                                  placeholder="আইডি দিয়ে সার্চ করুন"
                                  name=""
                                  id=""
                                  className="m-2 p-2 w-50"
                                  onChange={(e) => setId(e.target.value)}
                                />
                                <button
                                  className="m-2 custom-btn btn-primary "
                                  onClick={fetchById}
                                  style={{ width: "100px", height: "50px" }}
                                >
                                  Search
                                </button>
                              </div>
                            )}
                          </div>
                          <div className="col-lg-5 col-md-12 col-12">
                            <div className="row mb-1 mb-lg-3">
                              <label className="col-12 col-md-12 col-lg-4 col-form-label info-lable">
                                স্থায়ী ডাকঃ
                                <i>*</i>
                              </label>
                              <div className="col-lg-8 col-12 col-md-12">
                                <input
                                  defaultValue={studentsInfo?.perm_daak}
                                  required
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
                                  defaultValue={studentsInfo?.roll}
                                  required
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
                                  defaultValue={studentsInfo?.perm_thana}
                                  required
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
                          {/* <div className="col-lg-7 col-md-12 col-12">
                            <div className="row mb-3">
                              <div className="col-lg-7 col-md-12 col-12">
                                <div className="row">
                                  <label className="col-lg-7 col-12 col-md-12 col-form-label info-lable">
                                    ছাত্র/ছাত্রীঃ
                                    <i>*</i>
                                  </label>
                                  <select
                                    class="form-select  mx-auto m-3 col-lg-7 col-md-12 col-12"
                                    {...register("gender")}
                                  >
                                    <option value="boy">ছাত্র</option>
                                    <option value="girl">ছাত্রীঃ</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div> */}
                          <div className="col-lg-7 col-md-12 col-12">
                            <div className="row mb-1 mb-lg-3">
                              <label className="col-12 col-md-12 col-lg-4 col-form-label info-lable">
                                ছাত্র/ছাত্রীঃ
                                <i>*</i>
                              </label>
                              <div className="col-lg-8 col-12 col-md-12">
                                <select
                                  required
                                  defaultValue={studentsInfo?.gender}
                                  class="form-select form-select-sm mx-auto m-3"
                                  {...register("gender")}
                                >
                                  <option value="boy">ছাত্র</option>
                                  <option value="girl">ছাত্রীঃ</option>
                                </select>
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
                                  defaultValue={studentsInfo?.perm_jela}
                                  required
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
                          {/* <div className="col-lg-7 col-12 col-md-12">
                            <div className="row">
                              <label className="col-lg-4 col-12 col-md-12 col-form-label info-lable">
                                অনাবাসিক/অনাবাসিকঃ
                                <i>*</i>
                              </label>
                              <select
                                class="form-select form-select-sm m-3"
                                {...register("abashik_onabashik")}
                              >
                                <option value="resi">অবাসিক</option>
                                <option value="unresi">অনাবাসিকঃ</option>
                              </select>
                            </div>
                          </div> */}
                          <div className="col-lg-7 col-md-12 col-12">
                            <div className="row mb-1 mb-lg-3">
                              <label className="col-12 col-md-12 col-lg-4 col-form-label info-lable">
                                অনাবাসিক/অনাবাসিকঃ
                                <i>*</i>
                              </label>
                              <div className="col-lg-8 col-12 col-md-12">
                                <select
                                  defaultValue={studentsInfo?.abashik_onabashik}
                                  required
                                  class="form-select form-select-sm mx-auto m-3"
                                  {...register("abashik_onabashik")}
                                >
                                  <option value="resi">অবাসিক</option>
                                  <option value="unresi">অনাবাসিকঃ</option>
                                </select>
                              </div>
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
                                  defaultValue={studentsInfo?.student_name}
                                  required
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
                                  defaultValue={studentsInfo?.graam}
                                  required
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
                                  defaultValue={studentsInfo?.father_name}
                                  required
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
                                  defaultValue={studentsInfo?.thana}
                                  required
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
                                  defaultValue={studentsInfo?.mother_name}
                                  required
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
                                  defaultValue={studentsInfo?.jela}
                                  required
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
                                  defaultValue={studentsInfo?.dob}
                                  required
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
                                  defaultValue={studentsInfo?.comment}
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
                                  defaultValue={studentsInfo?.nid_no}
                                  type="text"
                                  className="form-control"
                                  placeholder="NID/জন্ম নিবন্ধন নং"
                                  {...register("nid_no")}
                                />
                              </div>
                            </div>
                          </div>
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
                                  defaultValue={studentsInfo?.nationality}
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="জাতীয়তা"
                                  {...register("nationality")}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5 col-12 col-md-12">
                            <div className="row mb-lg-3 mb-1">
                              <label className="col-sm-4 col-form-label info-lable">
                                ভর্তি ফি
                                <i>*</i>
                              </label>
                              <div className="col-lg-8 col-12 col-md-12">
                                <input
                                  // required
                                  type="number"
                                  className="form-control"
                                  placeholder="ভর্তি ফি"
                                  defaultValue={fees}
                                  onChange={(e) => setFees(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
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
                                  defaultValue={studentsInfo?.blood_group}
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
                                মোবাইল নাম্বার <i>*</i>
                              </label>
                              <div className="col-lg-8 col-12 col-md-12">
                                <input
                                  defaultValue={studentsInfo?.phn_no}
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="মোবাইল নাম্বার "
                                  {...register("phn_no")}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="file-upload">
                            <div className="file-image">
                              {image ? (
                                <div style={styles.preview}>
                                  <div className="file-title">
                                    শিক্ষার্থীর ছবি
                                  </div>
                                  <img
                                    src={URL.createObjectURL(image)}
                                    style={styles.image}
                                    alt="Thumb"
                                  />
                                </div>
                              ) : (
                                <img
                                  src="https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg"
                                  alt=""
                                  width="144"
                                  height="144"
                                />
                              )}

                              <div className="mt-2">
                                144px
                                <i className="bi bi-x"></i>
                                144px
                              </div>
                            </div>
                            <div className="upload-button">
                              <div>
                                <input
                                  className="my-4"
                                  accept="image/*"
                                  type="file"
                                  onChange={imageChange}
                                />
                              </div>
                              <button
                                onClick={() => setImage()}
                                style={styles.delete}
                                // className="upload-btn"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                          <div className="col-lg-5 col-12 col-md-12 m-5">
                            <div class="form-check form-switch">
                              <input
                                {...register("vorti_fee_dibe")}
                                class="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                                defaultChecked={studentsInfo?.vorti_fee_dibe}
                              />
                              <label
                                class="form-check-label"
                                for="flexSwitchCheckDefault"
                              >
                                ভর্তি ফি দিবে
                              </label>
                            </div>
                            <div class="form-check form-switch">
                              <input
                                defaultChecked={studentsInfo?.mashik_fee_dibe}
                                {...register("mashik_fee_dibe")}
                                class="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                              />
                              <label
                                class="form-check-label"
                                for="flexSwitchCheckDefault"
                              >
                                মাসিক ফী দিবে
                              </label>
                            </div>
                            <div class="form-check form-switch">
                              <input
                                defaultChecked={studentsInfo?.khabar_fee_dibe}
                                {...register("khabar_fee_dibe")}
                                class="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                              />
                              <label
                                class="form-check-label"
                                for="flexSwitchCheckDefault"
                              >
                                খাবারের ফী দিবে
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          {/* <div className="col-lg-7 col-12 col-md-12">
                            <div className="row mb-lg-3 mb-1">
                              <label className="col-lg-4 col-12 col-md-12 col-form-label info-lable">
                                <i>*</i>
                              </label>
                              <div className="col-lg-8 col-12 col-md-12">
                                <input required
                                  type="text"
                                  className="form-control"
                                  placeholder="এস. এম. এস যাবে"
                                />
                              </div>
                            </div>
                          </div> */}
                          {/* <div className="col-lg-5 col-12 col-md-12">
                            <div className="option-subtext">
                              <h6>ডাটাবেজ তথ্য</h6>
                            </div>
                          </div> */}
                        </div>
                        {/* <div className="row">
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
                        </div> */}
                        {/* <div className="row">
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
                        </div> */}
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
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-5 col-12 col-md-12">
                    <div className="table-data mt-4">
                      <div
                        className="table-responsive"
                        data-pattern="priority-columns"
                      >
                        <form className="" onSubmit={handleSubmit3(onSubmit3)}>
                          <div>
                            <select
                              {...register3("session")}
                              className="form-select"
                            >
                              <option>শিক্ষাবর্ষ নির্বাচন করুন</option>
                              {academicYear?.data.map((item) => (
                                <option key={item.id}>
                                  {item.academic_year}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <select
                              {...register3("class")}
                              className="form-select"
                            >
                              <option>শ্রেণী নির্বাচন করুন</option>
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

                          <button className="btn btn-success btn-sm">
                            খুজুন
                          </button>
                        </form>
                        <table
                          id="tech-companies-1"
                          className="table  bg-white table-bordered text-center"
                        >
                          <thead className="text-center accounts-table-head">
                            {" "}
                            <tr>
                              <td>ID</td>
                              <th>নাম</th>
                              <th>রোল</th>
                              <td>
                                {" "}
                                <span className="action-delete">
                                  <i className="bi bi-trash3"></i>
                                </span>
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            {student?.map((item) => (
                              <tr key={item.id}>
                                <td>{item.id}</td>
                                <th>{item.student_name}</th>
                                <th>{item.roll}</th>
                                <td>
                                  {" "}
                                  <span
                                    onClick={(id) => onDelete(item.id)}
                                    className="action-delete"
                                  >
                                    <i className="bi bi-trash3"></i>
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <table
                    id="tech-companies-1"
                    className="table  bg-white table-bordered text-center"
                    style={{ maxHeight: "200px" }}
                  >
                    <thead className="text-center accounts-table-head">
                      {" "}
                      <tr>
                        <td>ID</td>
                        <th>সেশন</th>
                        <th>নাম</th>
                        <th>শ্রেণী</th>
                        <th>রোল</th>
                        <td></td>
                      </tr>
                    </thead>
                    <tbody>
                      {studentData?.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.session}</td>
                          <th>{item.student_name}</th>
                          <td>{item.class}</td>
                          <th>{item.roll}</th>
                          <td>
                            {" "}
                            <span
                              onClick={(id) => onDelete(item.id)}
                              className="action-delete"
                            >
                              <i className="bi bi-trash3"></i>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* admission modal */}
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
                                required
                                type="text"
                                className="form-control"
                                placeholder="ভাউচার নং"
                                value={"auto-filled"}
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
                                required
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
                              <input required
                                type="text"
                                className="form-control"
                                placeholder="কর্তন"
                              />
                            </div>
                          </div> */}
                          <div className="row mb-3">
                            <label className="col-sm-4 col-form-label info-lable">
                              নিরধারিত ফি
                            </label>
                            <div className="col-8">
                              <input
                                required
                                type="text"
                                className="form-control"
                                placeholder=" নিরধারিত ফি"
                                value={fees}
                                {...register2("determined_fee")}
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <label className="col-sm-4 col-form-label info-lable">
                              জমা
                            </label>
                            <div className="col-8">
                              <input
                                required
                                type="text"
                                className="form-control"
                                placeholder="জমা"
                                defaultValue={fees}
                                // {...register2("ammount")}
                                onChange={(e) => setJoma(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <label className="col-sm-4 col-form-label info-lable">
                              কর্তন
                            </label>
                            <div className="col-8">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="কর্তন"
                                value={korton}
                                // value={fees}
                                // {...register2("discount")}
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="button-group">
                  <button className="custom-btn btn-primary" type="submit">
                    Save
                  </button>
                  <ReactToPrint
                    trigger={() => (
                      <button className="custom-btn btn-primary" type="button">
                        Print
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

      <div style={{ display: "none" }} id="invoice">
        <div ref={ref} className="bg-white d-print-block" style={{ zIndex: 1 }}>
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
                  <strong className="dtitle">শিক্ষার্থীর নামঃ</strong>
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
                        <th>নিরধারিত ফি</th>
                        <th>জমা ফি</th>
                        <th>কর্তন</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>০১</td>
                        <td>{fees}</td>
                        <td>{joma}</td>
                        <td>{korton}</td>
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
                        <th colspan="4" className="text-right">
                          Paid Amount
                        </th>
                        <td>{joma}</td>
                      </tr>
                    </tbody>
                  </table>
                  <span>মন্তব্যঃ </span>
                  <span>{feeVal?.comment}</span>
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

export default StudentInfo;
