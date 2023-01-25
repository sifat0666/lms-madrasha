import React from "react";

const MonthEntryModal = () => {
  return (
    <div className="modal fade" id="monthname" aria-hidden="true" tabindex="-1">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="section-title">
            <h4>মাসের নাম এন্ট্রি</h4>
          </div>
          <form style={{ padding: "100px" }} onSubmit={handleSubmit(onSubmit)}>
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
                        <div className="col-7">
                          <div className="row">
                            <label className="col-sm-5 col-form-label info-lable">
                              জামাত/শ্রেনী
                            </label>
                            <div className="col-7">
                              <select
                                className="form-select"
                                size="4"
                                style={{ border: "none" }}
                                {...register("class")}
                              >
                                <option disabled>শ্রেণী নির্বাচন করুন</option>
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
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="row mb-3">
                        <div className="col-12">
                          <div className="section-title special-bg">
                            <h4>মাসের নাম</h4>
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
                        <button className="custom-btn btn-primary">Save</button>
                        {/* <button className="custom-btn btn-dark" type="submit">
                            Edit
                          </button>
                          <button
                            className="custom-btn btn-primary"
                            type="submit"
                          >
                            New
                          </button>
                          <button
                            className="custom-btn btn-danger"
                            data-bs-dismiss="modal"
                            onclick="javascript:void(0)"
                            type="button"
                          >
                            Close
                          </button> */}
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
                                <th>
                                  <span className="action-edit">
                                    <i className="bi bi-pencil-square"></i>
                                  </span>
                                </th>
                                <th>শিক্ষাবর্ষ</th>
                                <th>জামাত</th>
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
                              <tr>
                                <td>
                                  <span className="action-edit">
                                    <i className="bi bi-pencil-square"></i>
                                  </span>
                                </td>
                                {months?.data.map((item) => (
                                  <>
                                    <th>{item.session}</th>
                                    <th>{item.class}</th>
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
                                  </>
                                ))}
                              </tr>
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
  );
};

export default MonthEntryModal;
