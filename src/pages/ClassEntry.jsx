import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { serverUrl } from "../../utils/config";

const ClassEntry = () => {
  const { register, handleSubmit } = useForm();
  const { register: register2, handleSubmit: handleSubmit2 } = useForm();
  const { data } = useQuery("marhalaclass", () =>
    fetch(`${serverUrl}/api/marhalaclass`).then((res) => res.json())
  );
  const { data: sub } = useQuery("subject", () =>
    fetch(`${serverUrl}/api/subject`).then((res) => res.json())
  );

  // console.log(data);
  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/marhalaclass`, data, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
    onError: (error, variable, context) => {
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      toast.success("class created successfully");
    },
  });

  const mutation2 = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/subject`, data, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
    onError: (error, variable, context) => {
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      toast.success("subject created successfully");
    },
  });

  const onSubmit = async (value) => {
    mutation.mutate(value);
    // console.log(value);
  };
  const onSubmit2 = async (value) => {
    mutation2.mutate(value);
    console.log(value);
  };

  const onDelete1 = async (id) => {
    const data = await axios.delete(`${serverUrl}/api/marhalaclass/${id}`);
    location.reload();
  };

  const onDelete2 = async (id) => {
    const data = await axios.delete(`${serverUrl}/api/subject/${id}`);
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
                      <h4>জামাত /শ্রেণী তত্ত্ব</h4>
                    </div>
                    <div className="my-4">
                      <form
                        className="feesdeterminationa-form"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <div className="row mb-3">
                          <label className="col-sm-12 col-md-12 col-lg-4 col-form-label info-lable">
                            ক্লাসের নাম
                            <i>*</i>
                          </label>
                          <div className="col-sm-12 col-md-12 col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="ক্লাসের নাম"
                              {...register("class_name")}
                            />
                          </div>
                        </div>

                        <div className="button-container">
                          <div className="button-group">
                            <input
                              className="custom-btn btn-dark"
                              type="reset"
                            ></input>
                            <button
                              className="custom-btn btn-primary"
                              type="submit"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="section-title">
                      <h4>কিতাব/ বিষয়</h4>
                    </div>
                    <div className="my-4">
                      <form
                        className="feesdeterminationa-form"
                        onSubmit={handleSubmit2(onSubmit2)}
                      >
                        <div className="filter-menu">
                          <select
                            className="form-select"
                            size="4"
                            style={{ border: "none" }}
                            {...register2("class")}
                          >
                            {data?.data.map((item) => (
                              <option
                                key={item.id}
                                // onClick={() => setClasss(item.academicYear)}
                              >
                                {item.class_name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-12 col-md-12 col-lg-4 col-form-label info-lable">
                            কিতাবের নাম
                            <i>*</i>
                          </label>
                          <div className="col-sm-12 col-md-12 col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="কিতাবের নাম"
                              {...register2("subject")}
                            />
                          </div>
                        </div>

                        <div className="button-container">
                          <div className="button-group">
                            <input
                              className="custom-btn btn-dark"
                              type="reset"
                            ></input>
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
      </section>
      <table class="table bg-white">
        <thead>
          <tr>
            <th scope="col">আইডি</th>
            <th scope="col">ক্লাসের নাম</th>
            <th>
              <span className="action-delete">
                <i className="bi bi-trash3"></i>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.class_name}</td>
              <td>
                {" "}
                <span
                  onClick={(id) => onDelete1(item.id)}
                  className="action-delete"
                >
                  <i className="bi bi-trash3"></i>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table class="table bg-white">
        <thead>
          <tr>
            <th scope="col">আইডি</th>
            <th scope="col">ক্লাসের নাম</th>
            <th scope="col">কিতাবের নাম</th>
            <th>
              <span className="action-delete">
                <i className="bi bi-trash3"></i>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {sub?.data.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.class}</td>
              <td>{item.subject}</td>
              <td>
                {" "}
                <span
                  onClick={(id) => onDelete2(item.id)}
                  className="action-delete"
                >
                  <i className="bi bi-trash3"></i>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassEntry;
