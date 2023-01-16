import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import { serverUrl } from "../../../utils/config";
import Attandence from "../../Comonents/Attandence";

const StudentAttandance = () => {
  const [student, setStudent] = useState();

  const [value, setValue] = useState();

  const { data: marhalaClass } = useQuery("marhalaclass", () =>
    fetch(`${serverUrl}/api/marhalaclass`).then((res) => res.json())
  );
  const { data: academicYear } = useQuery("academicyear", () =>
    fetch(`${serverUrl}/api/academicyear`).then((res) => res.json())
  );

  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/custom-student-call`, data);
    },
    onError: (error, variable, context) => {
      // console.log(error.response.data.message);
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      console.log("userdata", data.data);
      setStudent(data.data);
      // window.location.reload(true);
    },
  });

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setValue(data);
    mutation.mutate(data);
  };

  return (
    <div>
      <section className="user-form-section d-print-none">
        <div className="section-bg">
          <div className="row">
            <div className="col-md-12 w-100">
              <div className="main-container">
                <div className="row">
                  <div className="col-12">
                    <div className="section-title">
                      <h4>শিক্ষার্থীদের হাজিরা</h4>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-12">
                      <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                          <div className="row">
                            <label className="col-lg-5 col-md-5 col-12 col-form-label info-lable">
                              ক্লাস/জামাত
                            </label>
                            <div className="col-lg-7 col-md-7 col-12">
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
                        <div className="col-lg-3 col-md-6 col-12">
                          <div className="row">
                            <label className="col-lg-5 col-md-5 col-12 col-form-label info-lable">
                              শিক্ষাবর্ষ
                            </label>
                            <div className="col-lg-7 col-md-7 col-12">
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
                        <div className="col-lg-6 col-md-12 col-12 mt-md-2">
                          <div className="row">
                            <label className="col-lg-2 col-md-2 col-12 col-form-label info-lable">
                              এন্ট্রি তারিখ
                            </label>
                            <div className="col-lg-5 col-md-4 col-12">
                              <input
                                type="date"
                                className="form-control"
                                {...register("date")}
                                required
                              />
                            </div>
                            <div className="col-lg-5 col-md-4 col-12 mt-2 mt-md-0">
                              <button
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
                  </form>
                  <div className="col-12 mt-4">
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
                            <th>আইডি</th>
                            <th>শ্রেণী</th>
                            <th>নাম</th>
                            <th>রোল নং</th>
                            <th>হাজিরা</th>
                            {/* <th>Submit</th> */}
                          </tr>
                        </thead>
                        <tbody>
                          {student?.map((item) => (
                            <Attandence
                              key={item.id}
                              item={item}
                              otherData={value}
                            />
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
      </section>
      {/* <!-- Employe Add Section End --> */}
      {/* <!--Modal Section--> */}
      {/* <!-- Add Member Type  Modal Start--> */}
      <div
        className="modal fade"
        id="membertype"
        aria-hidden="true"
        tabindex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="section-title">
              <h4>সদস্যর ধরণ এন্ট্রি করুন</h4>
            </div>
            <form>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12 w-100">
                    <div className="row">
                      <div className="col-12">
                        <div className="my-4">
                          <div className="row mb-3">
                            <label className="col-lg-3 col-md-3 col-12 col-form-label info-lable">
                              সদস্যর ধরণঃ
                            </label>
                            <div className="col-lg-8 col-md-8 col-12">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="সদস্যর ধরণ"
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <label className="col-lg-3 col-md-3 col-12 col-form-label info-lable">
                              মন্তব্যঃ
                            </label>
                            <div className="col-lg-8 col-md-8 col-12">
                              <input
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
                                  <th>সদস্যর ধরণ</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th></th>
                                  <td>০১</td>
                                  <td>বদরী</td>
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
      {/* <!--Add Member Type  Modal End--> */}
      {/* <!-- Add Payment Term  Modal Start--> */}
      <div className="modal fade" id="payterm" aria-hidden="true" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="section-title">
              <h4>টাকা দেওয়ার সময়কাল এন্ট্রি</h4>
            </div>
            <form>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12 w-100">
                    <div className="row">
                      <div className="col-12">
                        <div className="my-4">
                          <div className="row mb-3">
                            <label className="col-lg-3 col-md-3 col-12 col-form-label info-lable">
                              সময়কাল
                            </label>
                            <div className="col-lg-8 col-md-8 col-12">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="সময়কাল"
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <label className="col-lg-3 col-md-3 col-12 col-form-label info-lable">
                              মন্তব্যঃ
                            </label>
                            <div className="col-lg-8 col-md-8 col-12">
                              <input
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
                                  <th>সময়কাল</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th></th>
                                  <td>০১</td>
                                  <td>মাসিক</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>০২</td>
                                  <td>বার্ষিক</td>
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

export default StudentAttandance;
