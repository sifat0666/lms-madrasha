import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import { serverUrl } from "../../../utils/config";

const AddPaymentSystem = () => {
  const { data, refetch } = useQuery("payment-method", () =>
    fetch(`${serverUrl}/api/payment-method`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  console.log("payment", data?.data);
  const { register, handleSubmit } = useForm();

  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/payment-method`, data, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
    onError: (error, variable, context) => {
      toast.error("error");
    },
    onSuccess: (data) => {
      refetch();
      toast.success("method added successfully");
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <div className="user-form-section">
      <div className="section-bg" style={{ padding: "100px" }}>
        <div className="section-title">
          <h4>অ্যাকাউন্ট</h4>
        </div>
        <form className="container" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="row mt-3">
              <div className="col-12">
                <div className="filter-menu">
                  <select
                    className="form-select"
                    size="4"
                    style={{ border: "none" }}
                    {...register("account_type")}
                  >
                    <option disabled>একাউন্ট ধরণ</option>
                    <option>ব্যাংক</option>
                    <option>ক্যাশ</option>
                    <option>মোবাইল ব্যাংকিং</option>
                  </select>
                </div>
              </div>
            </div>

            <div className=" mb-3 mt-3">
              <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                অ্যাকাউন্ট নাম
                <i>*</i>
              </label>
              <div className="col-10">
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder="অ্যাকাউন্ট নাম"
                  {...register("account_name")}
                />
              </div>
            </div>

            <div className=" mb-3 mt-3">
              <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                মোবাইল নাম্বার
                <i>*</i>
              </label>
              <div className="col-10">
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder="মোবাইল নাম্বার"
                  {...register("mobile_number")}
                />
              </div>
            </div>
          </div>
          <button className="custom-btn btn-primary" type="submit">
            Submit
          </button>{" "}
        </form>

        <table class="table bg-white">
          <thead>
            <tr>
              <th scope="col">আইডি</th>
              <th scope="col">একাউন্ট ধরণ</th>
              <th scope="col">অ্যাকাউন্ট নাম</th>
              <th scope="col">মোবাইল নাম্বার</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.account_type}</td>
                <td>{item.account_name}</td>
                <td>{item.mobile_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddPaymentSystem;
