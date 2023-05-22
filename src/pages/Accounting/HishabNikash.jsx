import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import { serverUrl } from "../../../utils/config";

const HishabNikash = () => {
  const [name, setName] = useState("ক্যাশ");
  const [coa, setCoa] = useState("জমা");
  const [ledger, setLedger] = useState();
  const [ledger2, setLedger2] = useState();
  const [fundSelector, setFundSelector] = useState("");

  const { data } = useQuery("payment-method", () =>
    fetch(`${serverUrl}/api/payment-method`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );
  const { data: audit, refetch: auditRefetch } = useQuery("audit", () =>
    fetch(`${serverUrl}/api/audit`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  console.log("audit", audit);
  const { data: generalLedger } = useQuery("general-ledger", () =>
    fetch(`${serverUrl}/api/general-ledger`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );
  const { data: subLedger } = useQuery("sub-ledger", () =>
    fetch(`${serverUrl}/api/sub-ledger`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  const { data: fundData } = useQuery("fund", () =>
    fetch(`${serverUrl}/api/fund`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/audit`, data, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
    onError: (error, variable, context) => {
      toast.error(error?.data.data.message);
    },
    onSuccess: (data) => {
      toast.success(" added successfully");
      auditRefetch();
    },
  });

  const [ledgerData, setLedgerData] = useState();
  const [auditDate, setAuditData] = useState();
  console.log("aidt date", auditDate);

  console.log("ledger data", ledgerData);

  const DataFetch = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/custom-ledger-call`, data, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
    onError: (error, variable, context) => {
      toast.error(error?.data.data.message);
    },
    onSuccess: (data) => {
      // toast.success(" added successfully");
      setLedgerData(data?.data);
    },
  });
  const { register, handleSubmit } = useForm();
  const { register: register2, handleSubmit: handleSubmit2 } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    mutation.mutate(data);
  };
  const onSubmit2 = (data) => {
    console.log("ledger submit", data);
    DataFetch.mutate(data);
  };

  console.log("ledger", ledger);

  const onDelete = async (id) => {
    const data = await axios.delete(`${serverUrl}/api/audit/${id}`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    location.reload();
  };

  return (
    <div>
      {/* <!-- হিসাব নিকাশ সেকশন শুরু --> */}
      <section className="user-form-section d-print-none">
        <div className="section-bg">
          <div className="row">
            <div className="col-md-12 w-100">
              <div className="main-container">
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <div className="section-title">
                      <h4>হিসাব-নিকাশ</h4>
                    </div>
                    <div className="my-4">
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="accounts-form"
                      >
                        <div className="row">
                          <div className="col-lg-7 col-md-7 col-9">
                            <div className="row mb-3">
                              <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                                ফান্ডঃ
                                <i>*</i>
                              </label>
                              <div className="col-lg-6 col-md-6 col-10">
                                <select
                                  required
                                  {...register("fund_name")}
                                  onChange={(e) =>
                                    setFundSelector(e.target.value)
                                  }
                                  className="form-select"
                                >
                                  <option value={""}>
                                    ফান্ড নির্বাচন করুন
                                  </option>
                                  {fundData?.data.map((item) => (
                                    <option>{item.fund_name}</option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-5 col-12">
                            <div className="row mb-3">
                              <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                                চার্ট অফ একাউন্ট
                                <i>*</i>
                              </label>
                              <div className="col-lg-6 col-md-6 col-10">
                                <select
                                  required
                                  {...register("chart_of_account")}
                                  onChange={(e) => setCoa(e.target.value)}
                                  className="form-select"
                                >
                                  <option disabled> সিলেক্ট করুন</option>
                                  <option>জমা</option>
                                  <option>খরচ</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-7 col-md-7 col-12">
                            <div className="row mb-3">
                              <label className="col-md-4 col-12 col-form-label info-lable">
                                জেনারাল লেজার
                                <i>*</i>
                              </label>
                              <div className="col-md-8 col-12">
                                <select
                                  required
                                  {...register("general_ledger")}
                                  onChange={(e) => setLedger(e.target.value)}
                                  className="form-select"
                                >
                                  <option value={""}> সিলেক্ট করুন</option>
                                  {generalLedger?.data.map((item) => {
                                    if (
                                      item.chart_of_account === coa &&
                                      fundSelector === item.fund
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
                          <div className="col-md-5 col-12">
                            <div className="row mb-3">
                              <label className="col-md-4 col-12 col-form-label info-lable">
                                সাব লেজার
                                <i>*</i>
                              </label>
                              <div className="col-md-8 col-12">
                                <select
                                  required
                                  {...register("sub_ledger")}
                                  className="form-select"
                                >
                                  <option value={""}> সিলেক্ট করুন</option>
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
                        <div className="row">
                          <div className="col-lg-7 col-md-7 col-12">
                            <div className="row mb-3">
                              <label className="col-md-4 col-12 col-form-label info-lable">
                                ভাউচার রশিদঃ
                                <i>*</i>
                              </label>
                              <div className="col-md-8 col-12">
                                <input
                                  required
                                  {...register("voucher_slip")}
                                  type="text"
                                  className="form-control"
                                  placeholder="ভাউচার রশিদ"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-5 col-12">
                            <div className="row">
                              <label className="col-md-4 col-12 col-form-label info-lable">
                                বইঃ
                                <i>*</i>
                              </label>
                              <div className="col-md-8 col-12">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="বই"
                                  {...register("book")}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-7 col-md-7 col-12">
                            <div className="row mb-3">
                              <label className="col-md-4 col-12 col-form-label info-lable">
                                জমা/খরচ তারিখঃ
                                <i>*</i>
                              </label>
                              <div className="col-md-8 col-12">
                                <input
                                  required
                                  {...register("submit_date")}
                                  type="date"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-5 col-12">
                            <div className="row mb-3">
                              <label className="col-md-4 col-12 col-form-label info-lable">
                                আরবি তারিখঃ
                                <i>*</i>
                              </label>
                              <div className="col-md-8 col-12">
                                <input
                                  required
                                  {...register("submit_date_arabic")}
                                  type="text"
                                  className="form-control"
                                  placeholder="আরবি(MM/DD/YY)"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-7 col-md-7 col-12">
                            <div className="row">
                              <div className="col-6">
                                <div className="row mb-3">
                                  <label className="col-sm-12 col-form-label info-lable">
                                    পেমেন্ট সিস্টেম
                                    <i>*</i>
                                  </label>
                                  <div className="col-12">
                                    <select
                                      required
                                      {...register("payment_system")}
                                      onChange={(e) => setName(e.target.value)}
                                      className="form-select"
                                    >
                                      <option disabled>
                                        পেমেন্ট সিস্টেম সিলেক্ট
                                      </option>
                                      <option>ক্যাশ</option>
                                      <option>ব্যাংক</option>
                                      <option>মোবাইল ব্যাংকিং</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="row mb-3">
                                  <label className="col-sm-12 col-form-label info-lable">
                                    একাউন্টের নামঃ
                                    <i>*</i>
                                  </label>
                                  <div className="col-12">
                                    <select
                                      required
                                      {...register("account_name")}
                                      className="form-select"
                                    >
                                      <option selected>একাউন্ট সিলেক্ট</option>
                                      {data?.data.map((item) => {
                                        if (item.account_type === name) {
                                          return (
                                            <option key={item.id}>
                                              {item.account_name}
                                            </option>
                                          );
                                        }
                                        return null;
                                      })}
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-5 col-12">
                            <div className="row">
                              <div className="col-7">
                                <div className="row mb-3">
                                  <label className="col-sm-12 col-form-label info-lable">
                                    পেমেন্ট মন্তব্যঃ
                                    <i>*</i>
                                  </label>
                                  <div className="col-12">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="মন্তব্য লিখুন"
                                      {...register("comment")}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <div className="row mb-3">
                                  <label className="col-sm-12 col-form-label info-lable">
                                    পার্টিকোলার্স বর্ণনা
                                    <i>*</i>
                                  </label>
                                  <div className="col-12">
                                    <input
                                      className="form-control"
                                      placeholder="পার্টিকোলার্স বর্ণনা"
                                      type="text"
                                      {...register("particulars_detail")}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="row mb-3">
                                  <label className="col-sm-12 col-form-label info-lable">
                                    পরিমাণ
                                    <i>*</i>
                                  </label>
                                  <div className="col-12">
                                    <input
                                      required
                                      {...register("ammount")}
                                      type="number"
                                      className="form-control"
                                      placeholder="পরিমাণ"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="button-group my-4 hisab-btn">
                          <button
                            className="custom-btn btn-primary"
                            type="submit"
                          >
                            Save
                          </button>
                          <button className="custom-btn btn-dark" type="reset">
                            Reset
                          </button>
                        </div>
                      </form>
                    </div>

                    {/* <!--Right Site top Table--> */}
                    <div className="row">
                      <div className="col-12">
                        <div className="mt-4">
                          <div
                            className="table-responsive accounts-table"
                            data-pattern="priority-columns"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="my-4"></div>
                  </div>
                  <div className="col-lg-6 col-12 mt-4">
                    <div className="my-4">
                      <div className="row">
                        {/* <input
                          type="date"
                          id="birthday"
                          name="birthday"
                          className="mx-3 my-2 p-3"
                          style={{ width: "300px" }}
                          onChange={(e) => setAuditData(e.target.value)}
                        /> */}
                        <div className="col-12">
                          <div
                            className="table-responsive accounts-table"
                            data-pattern="priority-columns"
                          >
                            <form
                              className="row"
                              onSubmit={handleSubmit2(onSubmit2)}
                            >
                              <div>
                                <select
                                  {...register2("general_ledger")}
                                  className="form-select"
                                  onChange={(e) => setLedger2(e.target.value)}
                                >
                                  <option>লেজার নির্বাচন করুন</option>
                                  {generalLedger?.data.map((item) => {
                                    if (item.chart_of_account === "জমা") {
                                      return (
                                        <option>{item.general_ledger}</option>
                                      );
                                    }
                                  })}
                                </select>
                              </div>
                              <div>
                                <select
                                  {...register2("sub_ledger")}
                                  className="form-select"
                                >
                                  <option>সাব লেজার নির্বাচন করুন</option>
                                  {subLedger?.data.map((item) => {
                                    if (item.general_ledger === ledger2) {
                                      return <option>{item.sub_ledger}</option>;
                                    }
                                    return null;
                                  })}
                                </select>
                              </div>

                              <button
                                className="btn btn-success btn-sm mx-3 my-1"
                                style={{ width: "100px" }}
                              >
                                খুজুন
                              </button>
                            </form>
                            <table
                              id="tech-companies-1"
                              className="table  bg-white text-center mb-0"
                            >
                              <thead className="text-center accounts-table-head">
                                <tr>
                                  <th>তারিখ</th>
                                  <th>জি.লেজার</th>
                                  <th>ফান্ডঃ</th>
                                  <th>পেমেন্ট মন্তব্য</th>
                                  <th>সাব: লেজার</th>
                                  <th>পার্টিকোলার্স</th>
                                  <th>পরিমাণ</th>
                                </tr>
                              </thead>
                              <tbody>
                                {ledgerData?.map((item) => (
                                  <tr key={item.id}>
                                    <td>{item.submit_date}</td>
                                    <td>{item.general_ledger}</td>
                                    <td>{item.fund_name}</td>
                                    <td>{item.comment}</td>
                                    <td>{item.sub_ledger}</td>
                                    <td>{item.particulars_detail}</td>
                                    <td>{item.ammount}</td>
                                    <span
                                      onClick={(id) => onDelete(item.id)}
                                      className="action-delete"
                                    >
                                      <i className="bi bi-trash3"></i>
                                    </span>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <table
                  id="tech-companies-1"
                  className="table  bg-white text-center mb-0"
                >
                  <thead className="text-center accounts-table-head">
                    <tr>
                      <th>তারিখ</th>
                      <th>জি.লেজার</th>
                      <th>ফান্ডঃ</th>
                      <th>পেমেন্ট মন্তব্য</th>
                      <th>সাব: লেজার</th>
                      <th>পার্টিকোলার্স</th>
                      <th>পরিমাণ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {audit?.data?.map((item) => (
                      <tr key={item.id}>
                        <td>{item.submit_date}</td>
                        <td>{item.general_ledger}</td>
                        <td>{item.fund_name}</td>
                        <td>{item.comment}</td>
                        <td>{item.sub_ledger}</td>
                        <td>{item.particulars_detail}</td>
                        <td>{item.ammount}</td>
                        <span
                          onClick={(id) => onDelete(item.id)}
                          className="action-delete"
                        >
                          <i className="bi bi-trash3"></i>
                        </span>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HishabNikash;
