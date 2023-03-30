import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import { serverUrl } from "../../utils/config";

const TeacherMonthEntry = () => {
  const { register, handleSubmit } = useForm();

  const { mutate } = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/teacher-month-entry`, data, {
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
      console.log("return", data);
      toast.success("submitted successfully");
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    mutate(data);
  };

  const onDelete = async (id) => {
    const data = await axios.delete(
      `${serverUrl}/api/teacher-month-entry/${id}`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    location.reload();
  };

  const { data: academicYear } = useQuery("academicyear", () =>
    fetch(`${serverUrl}/api/academicyear`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  const { data: months } = useQuery("teacher_month", () =>
    fetch(`${serverUrl}/api/teacher-month-entry`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  return (
    <div>
      <div>
        <div className="">
          <div className="modal-content">
            <div className="section-title">
              <h4>শিক্ষকের মাসের নাম এন্ট্রি</h4>
            </div>
            <form
              style={{ padding: "100px" }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12 w-100">
                    <div className="row">
                      <div className="col-12">
                        <div className="row mb-3">
                          <div className="col-5">
                            <div className="row">
                              <label className="col-sm-5 col-form-label info-lable">
                                শিক্ষাবর্ষ
                              </label>
                              <div className="col-7">
                                <select
                                  required
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
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row mb-3">
                          <div className="col-12">
                            <div className="section-title special-bg">
                              <h4>শিক্ষকের মাসের নাম</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row mb-3">
                          <div className="col-4">
                            <div className="row">
                              <label className="col-sm-5 col-form-label info-lable">
                                ১ম মাস
                              </label>
                              <div className="col-7">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="প্রথম মাসের নাম"
                                  {...register("m1")}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="row">
                              <label className="col-sm-5 col-form-label info-lable">
                                ২য় মাস
                              </label>
                              <div className="col-7">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="মাসের নাম"
                                  {...register("m2")}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="row">
                              <label className="col-sm-5 col-form-label info-lable">
                                ৩য় মাস
                              </label>
                              <div className="col-7">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="মাসের নাম"
                                  {...register("m3")}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row mb-3">
                          <div className="col-4">
                            <div className="row">
                              <label className="col-sm-5 col-form-label info-lable">
                                ৪র্থ মাস
                              </label>
                              <div className="col-7">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="মাসের নাম"
                                  {...register("m4")}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="row">
                              <label className="col-sm-5 col-form-label info-lable">
                                ৫ম মাস
                              </label>
                              <div className="col-7">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="মাসের নাম"
                                  {...register("m5")}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="row">
                              <label className="col-sm-5 col-form-label info-lable">
                                ৬ষ্ঠ মাস
                              </label>
                              <div className="col-7">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="মাসের নাম"
                                  {...register("m6")}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row mb-3">
                          <div className="col-4">
                            <div className="row">
                              <label className="col-sm-5 col-form-label info-lable">
                                ৭ম মাস
                              </label>
                              <div className="col-7">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="মাসের নাম"
                                  {...register("m7")}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="row">
                              <label className="col-sm-5 col-form-label info-lable">
                                ৮ম মাস
                              </label>
                              <div className="col-7">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="মাসের নাম"
                                  {...register("m8")}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="row">
                              <label className="col-sm-5 col-form-label info-lable">
                                ৯ম মাস
                              </label>
                              <div className="col-7">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="মাসের নাম"
                                  {...register("m9")}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row mb-3">
                          <div className="col-4">
                            <div className="row">
                              <label className="col-sm-5 col-form-label info-lable">
                                ১০ম মাস
                              </label>
                              <div className="col-7">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="মাসের নাম"
                                  {...register("m10")}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="row">
                              <label className="col-sm-5 col-form-label info-lable">
                                ১১তম মাস
                              </label>
                              <div className="col-7">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="এগারোতম মাসের নাম"
                                  {...register("m11")}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="row">
                              <label className="col-sm-5 col-form-label info-lable">
                                ১২তম মাস
                              </label>
                              <div className="col-7">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="বারতম মাসের নাম"
                                  {...register("m12")}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 addbank">
                        <div className="button-group">
                          <button className="custom-btn btn-primary">
                            Save
                          </button>
                        </div>
                      </div>
                      {/* <!--Table Area Start--> */}
                      <div className="col-md-12">
                        <div className="table-data mt-4">
                          <div
                            className="table-responsive"
                            data-pattern="priority-columns"
                          >
                            <table
                              id="tech-companies-1"
                              className="table  bg-white table-bordered text-center"
                            >
                              <thead
                                className="text-center"
                                style={{
                                  backgroundColor: "#62659B",
                                  color: "white",
                                }}
                              >
                                <tr>
                                  <th></th>
                                  <th>শিক্ষাবর্ষ</th>
                                  <th>১ম মাস</th>
                                  <th>২য় মাস</th>
                                  <th>৩য় মাস</th>
                                  <th>৪র্থ মাস</th>
                                  <th>৫ম মাস</th>
                                  <th>৬ষ্ঠ মাস</th>
                                  <th>৭ম মাস</th>
                                  <th>৮ম মাস</th>
                                  <th>৯ম মাস</th>
                                  <th>১০ম মাস</th>
                                  <th>১১তম মাস</th>
                                  <th>১২তম মাস</th>
                                </tr>
                              </thead>
                              <tbody>
                                {months?.map((item) => (
                                  <tr>
                                    <td>
                                      <span
                                        onClick={(id) => onDelete(item.id)}
                                        className="action-delete"
                                      >
                                        <i className="bi bi-trash3"></i>
                                      </span>
                                    </td>
                                    <th>{item.session}</th>
                                    <th>{item.m1}</th>
                                    <th>{item.m2}</th>
                                    <th>{item.m3}</th>
                                    <th>{item.m4}</th>
                                    <th>{item.m5}</th>
                                    <th>{item.m6}</th>
                                    <th>{item.m7}</th>
                                    <th>{item.m8}</th>
                                    <th>{item.m9}</th>
                                    <th>{item.m10}</th>
                                    <th>{item.m11}</th>
                                    <th>{item.m12}</th>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      {/* <!--Table Area End--> */}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherMonthEntry;
