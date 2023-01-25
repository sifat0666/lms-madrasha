import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import { serverUrl } from "../../utils/config";

const ExpenceEntry = () => {
  const [name, setName] = useState("ক্যাশ");
  const [coa, setCoa] = useState("জমা");
  const [ledger, setLedger] = useState();
  // const [entry, setEntry] = useState();

  const { data } = useQuery("payment-method", () =>
    fetch(`${serverUrl}/api/payment-method`).then((res) => res.json())
  );
  const { data: audit } = useQuery("audit", () =>
    fetch(`${serverUrl}/api/audit`).then((res) => res.json())
  );
  console.log(audit);
  const { data: generalLedger } = useQuery("general-ledger", () =>
    fetch(`${serverUrl}/api/general-ledger`).then((res) => res.json())
  );
  const { data: subLedger } = useQuery("sub-ledger", () =>
    fetch(`${serverUrl}/api/sub-ledger`).then((res) => res.json())
  );

  const { data: fundData } = useQuery("fund", () =>
    fetch(`${serverUrl}/api/fund`).then((res) => res.json())
  );

  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/audit`, data);
    },
    onError: (error, variable, context) => {
      toast.error(error?.data.data.message);
    },
    onSuccess: (data) => {
      toast.success(" added successfully");
      // setEntry(data?.data);
    },
  });

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <div>
      <section className="user-form-section">
        <div className="section-bg">
          <div className="row">
            <div className="col-md-12 w-100">
              <div className="main-container">
                <div className="row">
                  <div className="col-lg-5 col-md-12 col-sm-12">
                    <div className="section-title">
                      <h4>আয় এন্ট্রি</h4>
                    </div>
                    <div className="my-4">
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="incomeExpance-form"
                      >
                        <div className="filter-menu p-2 m-3">
                          <select
                            className="form-select"
                            size="4"
                            style={{ border: "none" }}
                            {...register("fund_name")}
                          >
                            <option disabled>ফান্ডঃ নির্বাচন করুন</option>
                            {fundData?.data.map((item) => (
                              <option
                                key={item.id}
                                // onClick={() => setClasss(item.academicYear)}
                              >
                                {item.fund_name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className=" p-2 m-3 ">
                          <div className="row mt-3">
                            <div className="col-12">
                              <div className="filter-menu">
                                <select
                                  className="form-select"
                                  size="4"
                                  style={{ border: "none" }}
                                  {...register("general_ledger")}
                                  onChange={(e) => setLedger(e.target.value)}
                                >
                                  <option disabled>জেনারেল লেজারঃ</option>
                                  {generalLedger?.data.map((item) => {
                                    if (item.chart_of_account === "জমা") {
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
                        <div className=" p-2 m-3 ">
                          <div className="row mt-3">
                            <div className="col-12">
                              <div className="filter-menu">
                                <select
                                  className="form-select"
                                  size="4"
                                  style={{ border: "none" }}
                                  {...register("sub_ledger")}
                                >
                                  <option disabled> সাব লেজারঃ</option>
                                  {subLedger?.data.map((item) => {
                                    if (item.general_ledger === ledger) {
                                      return <option>{item.sub_ledger}</option>;
                                    }
                                    return null;
                                  })}
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label className="col-12 col-md-4 col-lg-4 col-form-label info-lable">
                            আয়/ব্যয় তারিখঃ
                          </label>
                          <div className="col-12 col-md-8 col-lg-8">
                            <input
                              {...register("submit_date")}
                              type="date"
                              className="form-control"
                              placeholder="আয়/ব্যয় তারিখ"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-12 col-md-4 col-lg-4 col-form-label info-lable">
                            চার্ট অফ একাউন্টঃ
                          </label>
                          <div className="col-12 col-md-8 col-lg-8">
                            <input
                              {...register("chart_of_account")}
                              value={"জমা"}
                              type="text"
                              className="form-control"
                              placeholder="চার্ট অফ একাউন্ট"
                            />
                          </div>
                        </div>
                        {/* <div className="row mb-3">
                          <label className="col-12 col-md-4 col-lg-4 col-form-label info-lable">
                            সাব লেজারঃ
                          </label>
                          <div className="col-12 col-md-8 col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="সাব লেজার"
                            />
                          </div>
                        </div> */}
                        <div className="row mb-3">
                          <label className="col-12 col-md-4 col-lg-4 col-form-label info-lable">
                            রশিদ/ভাউচার নংঃ
                          </label>
                          <div className="col-6 col-md-5 col-lg-5">
                            <input
                              {...register("voucher_slip")}
                              type="text"
                              className="form-control"
                              placeholder="রশিদ/ভাউচার নং"
                            />
                          </div>
                          {/* <div className="col-6 col-md-3 col-lg-3">
                            <div className="input-group d-flex align-items-center gap-3">
                              <span className="">ক্যাশ বই</span>
                              <input
                                className="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                name="checkbox"
                              />
                            </div>
                          </div> */}
                        </div>
                        <div className="row mb-3 mb-sm-2">
                          <label className="col-12 col-md-4 col-lg-4 col-form-label info-lable">
                            পরিমাণঃ
                          </label>
                          <div className="col-12 col-md-8 col-lg-8">
                            <input
                              {...register("ammount")}
                              type="number"
                              className="form-control"
                              placeholder="পরিমাণ "
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-12 col-md-4 col-lg-4 col-form-label info-lable">
                            মন্তব্যঃ
                          </label>
                          <div className="col-12 col-md-8 col-lg-8">
                            <textarea
                              {...register("comment")}
                              className="form-control"
                              placeholder="মন্তব্য"
                            ></textarea>
                          </div>
                        </div>
                        <div className="button-group">
                          <button
                            className="custom-btn btn-primary"
                            type="submit"
                          >
                            Save
                          </button>
                          <button className="custom-btn btn-dark" type="reset">
                            Close
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-7 col-sm-12">
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
                              <th>ভাউচার</th>
                              <th>ধরণ</th>
                              <th>জেনারেল লেজার</th>
                              <th>সাব্জিজারি লেজার</th>
                              <th>পরিমাণ</th>
                            </tr>
                          </thead>
                          <tbody>
                            {audit?.data.map((item) => {
                              if (item.chart_of_account === "জমা") {
                                return (
                                  <tr key={item.id}>
                                    <th>{item.voucher_slip}</th>
                                    <th>{item.chart_of_account}</th>
                                    <td>{item.general_ledger}</td>
                                    <td> {item.sub_ledger}</td>
                                    <td> {item.ammount}</td>
                                  </tr>
                                );
                              }
                            })}
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
    </div>
  );
};

export default ExpenceEntry;
