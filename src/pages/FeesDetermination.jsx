import React from "react";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { serverUrl } from "../../utils/config";
import Select from "react-select";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";

const FeesDetermination = () => {
  const { data: marhalaClass } = useQuery("marhalaclass", () =>
    fetch(`${serverUrl}/api/marhalaclass`).then((res) => res.json())
  );
  const { data: academicYear } = useQuery("academicyear", () =>
    fetch(`${serverUrl}/api/academicyear`).then((res) => res.json())
  );

  const { data: fee } = useQuery("feesDitermination", () =>
    fetch(`${serverUrl}/api/fees-determination`).then((res) => res.json())
  );

  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/fees-determination`, data);
    },
    onError: (error, variable, context) => {
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      toast.success("successfull");
    },
  });

  const { register, handleSubmit } = useForm();
  const onSubmit = async (value) => {
    mutation.mutate({ ...value, fee_type: "empty" });
  };

  const onDelete = async (id) => {
    const data = await axios.delete(
      `${serverUrl}/api/fees-determination/${id}`
    );
  };

  // const options2 = academicYear?.data.map(item => [{`${item.academic_year}`: `${item.academic_year}`},])
  return (
    <div>
      <section className="user-form-section">
        <div className="section-bg">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12 w-100">
              <div className="main-container">
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-7">
                    <div className="section-title">
                      <h4>ফি নির্ধারণ</h4>
                    </div>
                    <div className="my-4">
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="feesdeterminationa-form"
                      >
                        <div className="filter-menu">
                          <select
                            className="form-select"
                            size="4"
                            style={{ border: "none" }}
                            {...register("fee_name")}
                          >
                            <option> ভর্তি ফি</option>
                            <option> মাসিক ফি</option>
                            <option> খাবারের ফি</option>
                          </select>
                        </div>
                        <div className="row mb-3">
                          <div className="section-title">
                            <h4>শিক্ষাবর্ষঃ</h4>
                          </div>
                          <div className="filter-menu">
                            <select
                              className="form-select"
                              size="4"
                              style={{ border: "none" }}
                              {...register("academic_year")}
                            >
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

                        <div className="row mb-3">
                          <div className="section-title">
                            <h4>মারহালা/শ্রেণীঃ</h4>
                          </div>
                          <div className="filter-menu">
                            <select
                              className="form-select"
                              size="4"
                              style={{ border: "none" }}
                              {...register("class_name")}
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

                        {/* <!--Card Section--> */}
                        <div className="group-card-container">
                          <div className="row">
                            <div className="col-sm-12 col-lg-6 col-md-6">
                              <div className="custom-group-card">
                                <div className="custom-card-title section-title">
                                  <h4>ছাত্র</h4>
                                </div>
                                <div className="card-container">
                                  <div className="custom-card">
                                    <div className="custom-card-subtitle">
                                      আবাসিক
                                    </div>
                                    <div className="row">
                                      <div className="col-6">
                                        <span>নতুন</span>
                                        <div className="input-box">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                            {...register("boy_resi_new")}
                                          />
                                        </div>
                                      </div>
                                      <div className="col-6">
                                        <span>পুরাতন</span>
                                        <div className="input-box">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                            {...register("boy_resi_old")}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="custom-card">
                                    <div className="custom-card-subtitle">
                                      অনাবাসিক
                                    </div>
                                    <div className="row">
                                      <div className="col-6">
                                        <span>নতুন</span>
                                        <div className="input-box">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                            {...register("boy_unresi_new")}
                                          />
                                        </div>
                                      </div>
                                      <div className="col-6">
                                        <span>পুরাতন</span>
                                        <div className="input-box">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                            {...register("boy_unresi_old")}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12 col-lg-6 col-md-6">
                              <div className="custom-group-card">
                                <div className="custom-card-title section-title">
                                  <h4>ছাত্রী</h4>
                                </div>
                                <div className="card-container">
                                  <div className="custom-card">
                                    <div className="custom-card-subtitle">
                                      আবাসিক
                                    </div>
                                    <div className="row">
                                      <div className="col-6">
                                        <span>নতুন</span>
                                        <div className="input-box">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                            {...register("girl_resi_new")}
                                          />
                                        </div>
                                      </div>
                                      <div className="col-6">
                                        <span>পুরাতন</span>
                                        <div className="input-box">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                            {...register("girl_resi_old")}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="custom-card">
                                    <div className="custom-card-subtitle">
                                      অনাবাসিক
                                    </div>
                                    <div className="row">
                                      <div className="col-6">
                                        <span>নতুন</span>
                                        <div className="input-box">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                            {...register("girl_unresi_new")}
                                          />
                                        </div>
                                      </div>
                                      <div className="col-6">
                                        <span>পুরাতন</span>
                                        <div className="input-box">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                            {...register("girl_unresi_old")}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- ButtonGroup --> */}
                        <div className="button-group">
                          <button
                            className="custom-btn btn-primary d-sm-block"
                            type="submit"
                          >
                            Save
                          </button>
                          <button
                            className="custom-btn btn-dark d-sm-block"
                            type="submit"
                          >
                            New
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-5">
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
                                <span className="action-edit">
                                  <i className="bi bi-pencil-square"></i>
                                </span>
                              </th>
                              <th>
                                <span className="action-delete">
                                  <i className="bi bi-trash3"></i>
                                </span>
                              </th>
                              <th>শিক্ষাবর্ষ</th>
                              <th>মারহালা শ্রেণি</th>
                              <th>ফি এর নাম</th>
                            </tr>
                          </thead>
                          <tbody>
                            {fee?.data.map((item) => (
                              <tr key={item.id}>
                                <td>
                                  <span className="action-edit">
                                    <i className="bi bi-pencil-square"></i>
                                  </span>
                                </td>
                                <td>
                                  <span
                                    onClick={(id) => onDelete(item.id)}
                                    className="action-delete"
                                  >
                                    <i className="bi bi-trash3"></i>
                                  </span>
                                </td>
                                <th>{item.academic_year}</th>
                                <td>{item.class_name}</td>
                                <td>{item.fee_name}</td>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeesDetermination;
