import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import { serverUrl } from "../../utils/config";
import AdmissionFeeModal from "../Comonents/AdmissionFeeModal";

const VortiFee = () => {
  const [student, setStudent] = useState();

  const [value, setValue] = useState();

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

  const mutation = useMutation({
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
                      <h4>ভর্তি ফি</h4>
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
                            <th>নাম</th>
                            <th>রোল নং</th>
                            <th>হাজিরা</th>
                            {/* <th>Submit</th> */}
                          </tr>
                        </thead>

                        {student?.map((item) => (
                          <AdmissionFeeModal
                            key={item.id}
                            item={item}
                            otherData={value}
                          />
                        ))}
                      </table>
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

export default VortiFee;
