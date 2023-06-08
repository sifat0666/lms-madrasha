import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { serverUrl } from "../../../utils/config";
import { useState } from "react";
// import { serverUrl } from "../../utils/config";
// import { serverUrl } from "../../utils/config";

const Fund = () => {
  const { data, refetch: fundRefetch } = useQuery("fund", () =>
    fetch(`${serverUrl}/api/fund`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  const { data: generalLedger, refetch: generalLedgerRefetch } = useQuery(
    "general-ledger",
    () =>
      fetch(`${serverUrl}/api/general-ledger`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }).then((res) => res.json())
  );

  console.log("general-ledger", generalLedger?.data);

  const [x, setX] = useState("জমা");
  const [fun, setFund] = useState("");

  console.log(x);

  // console.log("fund", data?.data);

  // console.log(data);
  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/fund`, data, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
    onError: (error, variable, context) => {
      toast.error("fund exists");
    },
    onSuccess: (data) => {
      toast.success("fund added successfully");
      fundRefetch();
    },
  });

  const generalLedgerMutation = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/general-ledger`, data, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
    onError: (error, variable, context) => {
      // toast.error("fund exists");
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      generalLedgerRefetch();
      toast.success("fund added successfully");
    },
  });
  const subLedgerMutation = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/sub-ledger`, data, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
    onError: (error, variable, context) => {
      // toast.error("fund exists");
      toast.error("add missing fields");
    },
    onSuccess: (data) => {
      toast.success("sub-ledger added successfully");
    },
  });

  const onSubmit = async (value) => {
    mutation.mutate(value);
    console.log(value);
  };

  const onSubmit2 = async (value) => {
    generalLedgerMutation.mutate(value);
    console.log(value);
  };
  const onSubmit3 = async (value) => {
    subLedgerMutation.mutate(value);
    console.log(value);
  };

  const { register: register2, handleSubmit: handleSubmit2 } = useForm();
  const { register: register3, handleSubmit: handleSubmit3 } = useForm();
  const { register, handleSubmit } = useForm();

  const onDelete = async (id) => {
    const data = await axios.delete(`${serverUrl}/api/fund/${id}`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    fundRefetch();
    toast.success("deleted successfully");
  };

  return (
    <div>
      <section className="user-form-section">
        <div className="section-bg">
          <div className="row">
            <div className="col-md-12 w-100">
              <div className="main-container">
                <div className="row">
                  <div className="col-12">
                    <div className="section-title">
                      <h4>ফান্ডঃ</h4>
                    </div>
                    <div className="my-4 ">
                      <div>
                        {" "}
                        <form className="" onSubmit={handleSubmit(onSubmit)}>
                          <div className="row mb-3 p-3">
                            <label className="col-sm-12 col-md-12 col-lg-4 col-form-label info-lable">
                              ফান্ডঃ নাম
                              <i>*</i>
                            </label>
                            <div className="">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="ফান্ডঃ নাম"
                                {...register("fund_name")}
                              />
                            </div>
                          </div>

                          {/* <!-- ButtonGroup --> */}
                          <div className="button-container pb-4">
                            <div className="button-group">
                              <button
                                className="custom-btn btn-primary"
                                type="submit"
                              >
                                Save
                              </button>{" "}
                            </div>
                          </div>
                        </form>
                      </div>
                      <div>
                        <table class="table bg-white">
                          <thead>
                            <tr>
                              <th scope="col">আইডি</th>
                              <th scope="col">ফান্ডঃ নাম</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {data?.data.map((item) => (
                              <tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                <td>{item.fund_name}</td>
                                <th>
                                  <span
                                    className="action-delete"
                                    onClick={(id) => onDelete(item.id)}
                                  >
                                    <i className="bi bi-trash3"></i>
                                  </span>
                                </th>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="section-title">
                        <h4>জেনারেল লেজারঃ</h4>
                      </div>
                      <form
                        className="container"
                        onSubmit={handleSubmit2(onSubmit2)}
                      >
                        <div className="row">
                          <div className="row mt-3">
                            <div className="col-12">
                              <div className="filter-menu">
                                <select
                                  className="form-select"
                                  size="4"
                                  style={{ border: "none" }}
                                  {...register2("fund")}
                                >
                                  <option>ফান্ডঃ নির্বাচন করুন</option>
                                  {data?.data.map((item) => (
                                    <option
                                      key={item.id}
                                      // onClick={() => setClasss(item.academicYear)}
                                    >
                                      {item.fund_name}
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
                                  {...register2("chart_of_account")}
                                >
                                  <option disabled>চার্ট অফ একাউন্ট</option>
                                  <option>জমা</option>
                                  <option>খরচ</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className=" mb-3 mt-3">
                            <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                              জেনারেল লেজারঃ
                              <i>*</i>
                            </label>
                            <div className="col-10">
                              <input
                                required
                                type="text"
                                className="form-control"
                                placeholder="জেনারেল লেজারঃ"
                                {...register2("general_ledger")}
                              />
                            </div>
                          </div>
                        </div>
                        <button
                          className="custom-btn btn-primary"
                          type="submit"
                        >
                          Submit
                        </button>{" "}
                      </form>
                      <div className="section-title">
                        <h4>সাব লেজারঃ</h4>
                      </div>
                      <form
                        className="container"
                        onSubmit={handleSubmit3(onSubmit3)}
                      >
                        <div className="row">
                          <div className="row mt-3">
                            <div className="col-12">
                              <div className="filter-menu">
                                <select
                                  className="form-select"
                                  size="4"
                                  style={{ border: "none" }}
                                  {...register3("fund")}
                                  onChange={(e) => setFund(e.target.value)}
                                >
                                  <option>ফান্ডঃ নির্বাচন করুন</option>
                                  {data?.data.map((item) => (
                                    <option
                                      key={item.id}
                                      value={item.fund_name}
                                    >
                                      {item.fund_name}
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
                                  {...register3("chart_of_account")}
                                  onChange={(e) => setX(e.target.value)}
                                >
                                  <option disabled>চার্ট অফ একাউন্ট</option>
                                  <option>জমা</option>
                                  <option>খরচ</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className=" mb-3 mt-3">
                            <div className="row mt-3">
                              <div className="col-12">
                                <div className="filter-menu">
                                  <select
                                    className="form-select"
                                    size="4"
                                    style={{ border: "none" }}
                                    {...register3("general_ledger")}
                                  >
                                    <option>জেনারেল লেজারঃ {x}</option>
                                    {/* {generalLedger?.data.map((item) => {
                                      if (item.chart_of_account === x) {
                                        return (
                                          <option>{item.general_ledger}</option>
                                        );
                                      }
                                      return null;
                                    })} */}
                                    {generalLedger?.data.map((item) => {
                                      if (
                                        item.chart_of_account === x &&
                                        item.fund === fun
                                      ) {
                                        return (
                                          <option>{item.general_ledger}</option>
                                        );
                                      }
                                    })}
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className=" mb-3 mt-3">
                            <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                              সাব: লেজার
                              <i>*</i>
                            </label>
                            <div className="col-10">
                              <input
                                required
                                type="text"
                                className="form-control"
                                placeholder="সাব: লেজার"
                                {...register3("sub_ledger")}
                              />
                            </div>
                          </div>
                        </div>
                        <button
                          className="custom-btn btn-primary"
                          type="submit"
                        >
                          Submit
                        </button>{" "}
                      </form>
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

export default Fund;
