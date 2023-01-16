import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { json } from "react-router-dom";
import { serverUrl } from "../../utils/config";

const ClassMigration = () => {
  const { data: marhalaClass } = useQuery("marhalaclass", () =>
    fetch(`${serverUrl}/api/marhalaclass`).then((res) => res.json())
  );

  const [student, setStudent] = useState("");
  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/update-student`, data);
    },
    onError: (error, variable, context) => {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      console.log("userdata", data.data);
      setStudent(data.data);
      // window.location.reload(true);
    },
  });

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => mutation.mutate(data);

  return (
    <div>
      <div className="user-form-section">
        <div className="section-bg">
          <div className="row">
            <div className="col-md-12 w-100">
              <div className="main-container">
                <div className="row">
                  <div className="col-12">
                    <div className="section-title">
                      <h4>শিক্ষার্থীর ক্লাস পরিবর্তন</h4>
                    </div>
                    <div className="my-4">
                      <form
                        className="feesdeterminationa-form"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        {/* <div className="row mb-lg-3 mb-1">
                          <label className="col-md-4 col-sm-12 col-form-label info-lable">
                            সিরিয়াল নংঃ
                            <i>*</i>
                          </label>
                          <div className="col-md-8 col-sm-12">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="সিরিয়াল নং"
                              required
                            />
                          </div>
                        </div> */}
                        {/* <div className="row mb-lg-3 mb-1">
                          <label className="col-md-4 col-sm-12 col-form-label info-lable">
                            ছাত্র/ছাত্রীর নামঃ
                            <i>*</i>
                          </label>
                          <div className="col-md-8 col-sm-12">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="ছাত্র/ছাত্রীর নাম"
                            />
                          </div>
                        </div> */}
                        {/* <div className="row mb-lg-3 mb-1">
                          <label className="col-md-4 col-sm-12 col-form-label info-lable">
                            পিতার নামঃ
                          </label>
                          <div className="col-md-8 col-sm-12">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="পিতার নাম"
                            />
                          </div>
                        </div> */}
                        {/* <div className="row mb-lg-3 mb-1">
                          <label className="col-md-4 col-sm-12 col-form-label info-lable">
                            শ্রেণী/মারহালাঃ
                          </label>
                          <div className="col-md-8 col-sm-12">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="শ্রেণী/মারহালা"
                            />
                          </div>
                        </div> */}
                        <div className="row mb-lg-3 mb-1">
                          <label className="col-md-4 col-sm-12 col-form-label info-lable">
                            শিক্ষার্থীর আইডিঃ
                          </label>
                          <div className="col-md-8 col-sm-12">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="শিক্ষার্থীর আইডি"
                              {...register("id")}
                            />
                          </div>
                        </div>
                        <div className="row mb-lg-3 mb-1">
                          <label className="col-md-4 col-sm-12 col-form-label info-lable">
                            যে ক্লাশে স্থানান্তরিত হবেঃ
                            <i>*</i>
                          </label>
                          <div className="col-md-8 col-sm-12">
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
                        {/* <div className="row mb-lg-3 mb-1">
                          <label className="col-md-4 col-sm-12 col-form-label info-lable">
                            নতুন আইডিঃ
                          </label>
                          <div className="col-md-8 col-sm-12">
                            <input
                              type="text"
                              className="form-control"
                              placeholder=" নতুন আইডি"
                            />
                          </div>
                        </div> */}
                        <div className="row mt-5">
                          <div className="col-md-8 col-sm-12 offset-md-2 offset-0">
                            {/* <div className="migration-container">
                              <div
                                className="migration-title"
                                style={{ backgroundColor: "#ffd9f5" }}
                              >
                                ক্লাস পরিবর্তনের ধরন
                              </div>
                              <div className="migration-type">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="options"
                                  />
                                  <label
                                    className="form-check-label info-form-check"
                                    for="options"
                                  >
                                    আইডি পরিবর্তন না করে ক্লাস স্থানান্তর
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="options"
                                  />
                                  <label
                                    className="form-check-label info-form-check"
                                    for="options"
                                  >
                                    আইডি পরিবর্তন করে ক্লাস স্থানান্তর
                                  </label>
                                </div>
                              </div>
                            </div> */}
                          </div>
                        </div>
                        {/* <!-- ButtonGroup --> */}
                        <div className="button-container">
                          <div className="button-group">
                            <button
                              className="custom-btn btn-primary"
                              type="submit"
                            >
                              Save
                            </button>
                            {/* <button
                              className="custom-btn btn-dark"
                              type="submit"
                            >
                              New
                            </button>
                            <button
                              className="custom-btn btn-danger"
                              type="submit"
                            >
                              Close
                            </button> */}
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  class="col-xs-4 col-xs-offset-4"
                  style={{ width: "800px" }}
                >
                  {student ? (
                    <div>{JSON.stringify(student, null, 2)}</div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassMigration;
