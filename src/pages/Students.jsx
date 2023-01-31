import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { serverUrl } from "../../utils/config";
import { Router } from "react-router-dom";

const Students = () => {
  const { register, handleSubmit } = useForm();
  const { data } = useQuery("academicyear", () =>
    fetch(`${serverUrl}/api/academicyear`).then((res) => res.json())
  );

  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/academicyear`, data);
    },
    onError: (error, variable, context) => {
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      toast.success("session registered successfully");
    },
  });

  const onSubmit = async (value) => {
    mutation.mutate({ ...value, academic_year_id: "filled" });
  };

  const onDelete = async (id) => {
    const data = await axios.delete(`${serverUrl}/api/academicyear/${id}`);
    location.reload();
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
                      <h4>শিক্ষাবর্ষ</h4>
                    </div>
                    <div className="my-4">
                      <form
                        className="feesdeterminationa-form"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        {/* <div className="row mb-sm-1 mb-lg-3">
                          <label className="col-sm-12 col-md-12 col-lg-4 col-form-label info-lable">
                            শিক্ষাবর্ষ নির্বাচন করুনঃ
                          </label>
                          <div className="col-sm-12 col-md-12 col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="শিক্ষাবর্ষ (২০২২-২৩)"
                              required
                              {...register('academic_year')}
                            />
                          </div>
                        </div> */}

                        <div className="row mb-3">
                          <label className="col-sm-12 col-md-12 col-lg-4 col-form-label info-lable">
                            শিক্ষাবর্ষের নাম
                            <i>*</i>
                          </label>
                          <div className="col-sm-12 col-md-12 col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="শিক্ষাবর্ষের নাম"
                              {...register("academic_year")}
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-12 col-md-12 col-lg-4 col-form-label info-lable">
                            বাংলা সন
                            <i>*</i>
                          </label>
                          <div className="col-sm-12 col-md-12 col-md-8 col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="বাংলা সন"
                              {...register("bangla_year")}
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-12 col-lg-4 col-form-label info-lable">
                            আরবী হিজরী
                          </label>
                          <div className="col-sm-12 col-md-12 col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="আরবী হিজরী"
                              {...register("arabic_year")}
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-12 col-lg-4 col-form-label info-lable">
                            আইডি কার্ড ইস্যু
                          </label>
                          <div className="col-sm-12 col-md-12 col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="আইডি কার্ড ইস্যু"
                              {...register("id_card_issue")}
                            />
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
                              Show
                            </button>
                            <button
                              className="custom-btn btn-dark"
                              type="submit"
                            >
                              Update
                            </button>
                          </div>
                          <div className="button-group">
                            <button
                              className="custom-btn btn-primary"
                              type="submit"
                            >
                              New
                            </button>
                            <button
                              className="custom-btn btn-dark"
                              type="submit"
                            >
                              Close
                            </button>
                            <button
                              className="custom-btn btn-danger"
                              type="submit"
                            >
                              Delete
                            </button> */}
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-12 col-md-12">
          <div className="table-data mt-4">
            <div className="row form-group searchbar"></div>
            {/* <div className="table-responsive" data-pattern="priority-columns">
              <table
                id="tech-companies-1"
                className="table  bg-white table-bordered text-center"
              >
                <thead className="text-center accounts-table-head">
                  <tr>
                    <th>
                      <p>আইডি</p>
                    </th>
                    <th>
                      <p>শিক্ষাবর্ষের নাম</p>
                    </th>
                    <th>বাংলা সন</th>
                    <th>আরবী হিজরী</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data.map}
                  <tr>
                    <td></td>
                    <th></th>
                    <th></th>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <th></th>
                    <th></th>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <th></th>
                    <th></th>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <th></th>
                    <th></th>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <th></th>
                    <th></th>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <th></th>
                    <th></th>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <th></th>
                    <th></th>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <th></th>
                    <th></th>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div> */}
            <table class="table bg-white">
              <thead>
                <tr>
                  <th scope="col">আইডি</th>
                  <th scope="col">শিক্ষাবর্ষের নাম</th>
                  <th scope="col">বাংলা সন</th>
                  <th scope="col">আরবী হিজরী</th>
                  <span className="action-delete">
                    <i className="bi bi-trash3"></i>
                  </span>
                </tr>
              </thead>
              <tbody>
                {data?.data.map((item) => (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.academic_year}</td>
                    <td>{item.bangla_year}</td>
                    <td>{item.arabic_year}</td>
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
      </section>
    </div>
  );
};

export default Students;
