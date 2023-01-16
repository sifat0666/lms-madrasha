import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { serverUrl } from "../../../utils/config";

const HishabNikash = () => {
  const { data } = useQuery("payment-method", () =>
    fetch(`${serverUrl}/api/payment-method`).then((res) => res.json())
  );

  const [name, setName] = useState("ক্যাশ");

  const { register, handleSubmit } = useForm();

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
                      <form className="accounts-form">
                        <div className="row">
                          <div className="col-lg-7 col-md-7 col-9">
                            <div className="row mb-3">
                              <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                                ফান্ডঃ
                                <i>*</i>
                              </label>
                              <div className="col-lg-6 col-md-6 col-10">
                                <select className="form-select">
                                  <option selected>ফান্ড নির্বাচন করুন</option>
                                  <option>সাধারণ ফান্ড</option>
                                  <option>লিল্লাহ ফান্ড</option>
                                  <option>মসজিদ ফান্ড</option>
                                  <option>মাদরাসা ফান্ড</option>
                                </select>
                              </div>
                              <div className="col-2">
                                <span className="addbutton">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#addfund"
                                  >
                                    <i className="bi bi-plus-circle-fill"></i>
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5 col-md-5 col-3">
                            <div className="row mb-3">
                              <div className="option-icon">
                                <span>
                                  <a href="#">
                                    <i className="bi bi-info-circle-fill"></i>
                                  </a>
                                </span>
                                <span>
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#admissonModal"
                                  >
                                    <i className="bi bi-gear-fill"></i>
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-7 col-md-7 col-12">
                            <div className="row mb-3">
                              <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                                চার্ট অফ একাউন্ট
                                <i>*</i>
                              </label>
                              <div className="col-lg-6 col-md-6 col-10">
                                <select className="form-select">
                                  <option selected> সিলেক্ট করুন</option>
                                  <option>জমা</option>
                                  <option>খরচ</option>
                                </select>
                              </div>
                              <div className="col-2">
                                <span className="addbutton">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#addgenaralLadger"
                                  >
                                    <i className="bi bi-plus-circle-fill"></i>
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-5 col-12">
                            <div className="row mb-3">
                              <label className="col-md-4 col-12 col-form-label info-lable">
                                খাত
                                <i>*</i>
                              </label>
                              <div className="col-md-8 col-12">
                                <select className="form-select">
                                  <option selected> সিলেক্ট করুন</option>
                                  <option>ভর্তি ফি</option>
                                  <option>বেতন</option>
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
                                  type="text"
                                  className="form-control"
                                  placeholder="বই"
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
                                <input type="date" className="form-control" />
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
                                    <select className="form-select">
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
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-5">
                                <div className="row mb-3">
                                  <label className="col-sm-12 col-form-label info-lable">
                                    মেথড যোগঃ
                                  </label>
                                  <div className="col-12">
                                    <span className="addbutton">
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#bankadd"
                                      >
                                        <i className="bi bi-plus-circle-fill"></i>
                                      </a>
                                    </span>
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
                          <a
                            href="#"
                            className="custom-btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#admissonfees"
                          >
                            Save
                          </a>
                          <button className="custom-btn btn-dark" type="submit">
                            Show
                          </button>
                          <button className="custom-btn btn-dark" type="submit">
                            Close
                          </button>
                          <button
                            className="custom-btn btn-danger"
                            type="submit"
                          >
                            Delete
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="my-4">
                      <div className="row">
                        <div className="col-12">
                          <div
                            className="table-responsive accounts-table"
                            data-pattern="priority-columns"
                          >
                            <table
                              id="tech-companies-1"
                              className="table  bg-white text-center mb-0"
                            >
                              <thead className="text-center accounts-table-head">
                                <tr>
                                  <th>জি.লেজার</th>
                                  <th>সা: আ</th>
                                  <th>পেমেন্ট মন্তব্য</th>
                                  <th>সাব: লেজার</th>
                                  <th>পার্টিকোলার্স</th>
                                  <th>পরিমাণ</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr className="table-footer">
                                  <td
                                    colspan="5"
                                    style={{ textAlign: "right" }}
                                  >
                                    মোট
                                  </td>
                                  <td>৩০০ ৳</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 mt-4">
                    <div className="row">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-7">
                            <div className="row">
                              <div className="col-12">
                                <select className="form-select">
                                  <option selected>ফান্ড নির্বাচন করুন</option>
                                  <option>সাধারণ ফান্ড</option>
                                  <option>লিল্লাহ ফান্ড</option>
                                  <option>মসজিদ ফান্ড</option>
                                  <option>মাদরাসা ফান্ড</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-5">
                            <input
                              type="text"
                              placeholder=""
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-md-6 col-12">
                            <div className="row">
                              <div className="col-md-9 col-12">
                                <input
                                  type="date"
                                  placeholder=""
                                  className="form-control"
                                />
                              </div>
                              <label className="col-md-3 col-12 col-form-label info-lable">
                                পর্যন্ত
                                <i>*</i>
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 col-12">
                            <div className="row">
                              <div className="col-md-7 col-8">
                                <input
                                  type="date"
                                  placeholder=""
                                  className="form-control"
                                />
                              </div>
                              <div className="col-md-5 col-4">
                                <button className="custom-btn btn-primary">
                                  Show
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!--Right Site top Table--> */}
                    <div className="row">
                      <div className="col-12">
                        <div className="mt-4">
                          <div
                            className="table-responsive accounts-table"
                            data-pattern="priority-columns"
                          >
                            <table
                              id="tech-companies-1"
                              className="table  bg-white text-center mb-0"
                            >
                              <thead className="text-center accounts-table-head">
                                <tr>
                                  <th>অর্ডার</th>
                                  <th>তারিখ</th>
                                  <th>ধরণ</th>
                                  <th>ভাউচার</th>
                                  <th>বই</th>
                                  <th>পরিমাণ</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!--Right Site Top Table End--> */}
                    {/* <!--Right Site Bottom Table Start--> */}
                    <div className="row mt-4">
                      <div className="col-6">
                        <div
                          className="table-responsive accounts-table"
                          data-pattern="priority-columns"
                        >
                          <table
                            id="tech-companies-1"
                            className="table  bg-white text-center mb-0"
                          >
                            <thead className="text-center ">
                              <tr className="accounts-table-head">
                                <td colspan="2">আজকের তহবিল</td>
                              </tr>
                              <tr>
                                <th>অর্ডার</th>
                                <th>তারিখ</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="col-6">
                        <div
                          className="table-responsive accounts-table"
                          data-pattern="priority-columns"
                        >
                          <table
                            id="tech-companies-1"
                            className="table  bg-white text-center mb-0"
                          >
                            <thead className="text-center ">
                              <tr className="accounts-table-head">
                                <td colspan="2">আজকের তহবিল</td>
                              </tr>
                              <tr>
                                <th>অর্ডার</th>
                                <th>তারিখ</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Right Site Bottom Table End --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- হিসাব নিকাশ সেকশন শেষ --> */}
    </div>
  );
};

export default HishabNikash;
