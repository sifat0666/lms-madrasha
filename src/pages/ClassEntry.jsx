import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { serverUrl } from "../../utils/config";

const ClassEntry = () => {
  const { register, handleSubmit } = useForm();
  const { data } = useQuery("marhalaclass", () =>
    fetch(`${serverUrl}/api/marhalaclass`).then((res) => res.json())
  );

  // console.log(data);
  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/marhalaclass`, data);
    },
    onError: (error, variable, context) => {
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      toast.success("student registered successfully");
    },
  });

  const onSubmit = async (value) => {
    mutation.mutate(value);
    // console.log(value);
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
                        {/* <div className="row mb-3">
                          <label className="col-sm-12 col-md-12 col-lg-4 col-form-label info-lable">
                            শিক্ষাবর্ষ নির্বাচন করুনঃ
                          </label>
                          <div className="col-sm-12 col-md-12 col-lg-8">
                            <select
                              data-placeholder="শ্রেণী নির্বাচন করুন...."
                              multiple
                              className="chosen-select"
                            >
                              <option value=""></option>
                              <option>তাকমিল</option>
                              <option>মক্তব</option>
                              <option>হিফজুল কুরআন</option>
                              <option>পরীক্ষামূলক মারহালা</option>
                            </select>
                          </div>
                        </div> */}
                        {/* <div className="row mb-3">
                          <label className="col-sm-12 col-md-12 col-lg-4 col-form-label info-lable">
                            ক্লাস আইডি
                            <i>*</i>
                          </label>
                          <div className="col-sm-12 col-md-12 col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="ক্লাস আইডি"
                              required
                            />
                          </div>
                        </div> */}
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
                        {/* <div className="row mb-3">
                          <label className="col-sm-12 col-md-12 col-lg-4 col-form-label info-lable">
                            আরবী হিজরী
                          </label>
                          <div className="col-sm-12 col-md-12 col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="আরবী হিজরী"
                            />
                          </div>
                        </div> */}
                        {/* <!-- ButtonGroup --> */}
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
          </tr>
        </thead>
        <tbody>
          {data?.data.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.class_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassEntry;
