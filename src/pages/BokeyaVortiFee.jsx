import axios from "axios";
import { toFormData } from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import ReactToPrint from "react-to-print";
import { serverUrl } from "../../utils/config";
import AdmissionFeeModal from "../Comonents/AdmissionFeeModal";

const BokeyaVortiFee = () => {
  const [student, setStudent] = useState();

  const { data: marhalaClass } = useQuery("marhalaclass", () =>
    fetch(`${serverUrl}/api/marhalaclass`).then((res) => res.json())
  );
  const { data: academicYear } = useQuery("academicyear", () =>
    fetch(`${serverUrl}/api/academicyear`).then((res) => res.json())
  );

  const custonStudentMutation = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/custom-student-call`, data);
    },
    onError: (error, variable, context) => {
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      console.log("fee", data?.data);
      setStudent(data?.data);
    },
  });

  const [fees, setFees] = useState("");
  // const [student_ids, setStudentids] = useState("");

  const korton = parseInt(fees) - parseInt(joma);

  const Fee = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/customfeecall`, data);
    },
    onError: (error, variable, context) => {
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      console.log("fee", data?.data);
      setFees(data?.data);
    },
  });

  const { data: me, isLoading } = useQuery(["me"]);

  const { register, handleSubmit } = useForm();
  const { register: register2, handleSubmit: handleSubmit2 } = useForm();

  const onSubmit = (data) => custonStudentMutation.mutate(data);
  const onSubmit2 = (data) => custonStudentMutation.mutate(data);
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
                      <h4>বকেয়া ভর্তি ফি</h4>
                    </div>
                    <div>
                      <form
                        className="container"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <div className="row">
                          <div className="row mt-3">
                            <div className="col-12">
                              <div className="filter-menu">
                                <select
                                  className="form-select"
                                  size="3"
                                  style={{ border: "none" }}
                                  {...register("session")}
                                >
                                  <option disabled>শিক্ষাবর্ষঃ</option>
                                  {academicYear?.data.map((item) => (
                                    <option key={item.id}>
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
                                  <option disabled>মারহালা</option>
                                  {marhalaClass?.data.map((item) => (
                                    <option>{item.class_name}</option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          className="custom-btn btn-primary m-2"
                          type="submit"
                        >
                          Search
                        </button>{" "}
                      </form>
                    </div>
                    <table class="table bg-white">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">নাম</th>
                          <th scope="col">মারহালা</th>
                          <th scope="col">বছর</th>
                          <th scope="col">স্ট্যাটাস</th>
                          {/* <th scope="col">ফি</th> */}
                        </tr>
                      </thead>

                      {student?.map((item) => (
                        <AdmissionFeeModal item={item} />
                      ))}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* admission modal */}

      {/* <!--Admisson Fees Collect Modal End--> */}
    </div>
  );
};

export default BokeyaVortiFee;
