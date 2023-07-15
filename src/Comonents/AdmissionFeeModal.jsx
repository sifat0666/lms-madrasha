import axios from "axios";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import ReactToPrint from "react-to-print";
import { sendSms, serverUrl } from "../../utils/config";
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;

const AdmissionFeeModal = ({ item }) => {
  console.log("item", item);
  const ref = useRef();

  const [student_id, setStudent_Id] = useState();
  const [student, setStudent] = useState();
  const [fee, setFee] = useState();

  const [joma, setJoma] = useState();

  const korton = parseInt(fee) - parseInt(joma);

  console.log("fee", fee);

  const { register: register2, handleSubmit: handleSubmit2 } = useForm();

  const { data: payfees } = useQuery("payfees", () =>
    fetch(`${serverUrl}/api/pay-fees`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );
  const { data: msg } = useQuery("msg", () =>
    fetch(`${serverUrl}/api/msg/${1}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );
  const { data: me, isLoading } = useQuery(["me"]);

  const Fee = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/customfeecall`, data, {
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
      console.log("fee", data?.data);
      setFee(data?.data);
    },
  });

  const submitFee = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/pay-fees`, data, {
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
      console.log("data", data?.data);
      toast.success("fee submitted");

      console.log("msg", msg);
      if (msg.vorti) {
        sendSms(
          student?.phn_no,
          `${student.student_name} জমা দিয়েছে ${data?.data.ammount} টাকা ভর্তি ফি`
        );
      }
    },
  });

  const onStudentSubmit = async (e) => {
    e.preventDefault();
    const student = await axios.get(`${serverUrl}/api/student/${student_id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    setStudent(student?.data);

    const data = `${student?.data.gender}_${student?.data.abashik_onabashik}_${student?.data.notun_puraton}`;
    const params = {
      state: data,
    };
    params.academic_year = student?.data.session;
    params.class_name = student?.data.class;
    console.log("params", params);
    Fee.mutate({ ...params, fee_name: "ভর্তি ফি" });
  };

  const [feeVal, setFeeVal] = useState();
  const onSubmit2 = (data) => {
    setFeeVal(data);
    submitFee.mutate({
      ...data,
      student_id: student?.id,
      determined_fee: fee,
      discount: korton,
      ammount: joma,
    });
  };

  console.log("stu", student);
  return (
    <tbody>
      <tr key={item.id}>
        <th scope="row">{item.id}</th>
        <td>{item.student_name}</td>
        <td>{item.class}</td>
        <td>{item.session}</td>
        <td>
          {" "}
          {payfees?.map((x) => {
            if (x.student_id === item.id) {
              return <span>Paid</span>;
            }
          })}
          {item?.vorti_fee_dibe == 0 && <span>মৌকুফ</span>}
        </td>
        <td>
          {item?.vorti_fee_dibe == 1 && (
            <a
              href="#"
              className="custom-btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#admissonfees"
            >
              Pay fees
            </a>
          )}{" "}
          <div
            className="modal fade"
            id="admissonfees"
            aria-hidden="true"
            tabindex="-1"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="section-title">
                  <h4>ভর্তি ফি গ্রহণ</h4>
                </div>
                <form onSubmit={onStudentSubmit}>
                  <div className="row mb-3">
                    <label className="col-sm-4 col-form-label info-lable">
                      ছাত্রের আইডিঃ
                    </label>
                    <div className="col-8">
                      <input
                        // value={item.id}
                        required
                        type="text"
                        className="form-control"
                        placeholder="ছাত্রের আইডি"
                        onChange={(e) => setStudent_Id(e.target.value)}
                      />
                      <button
                        className="custom-btn btn-primary m-2"
                        // style={{
                        //   width: "200px",
                        //   marginRight: "200px",
                        //   position: "absolute",
                        //   left: 0,
                        // }}
                        type="submit"
                      >
                        Find
                      </button>
                    </div>
                  </div>
                </form>

                <form onSubmit={handleSubmit2(onSubmit2)}>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-md-12 w-100">
                        <div className="row">
                          <div className="col-6">
                            <div className="my-4">
                              <div className="row mb-3">
                                <label className="col-sm-4 col-form-label info-lable">
                                  ভাউচার নংঃ
                                </label>
                                <div className="col-8">
                                  <input
                                    required
                                    type="text"
                                    className="form-control"
                                    placeholder="ভাউচার নং"
                                    value={"auto-filled"}
                                    {...register2("voucher_no")}
                                  />
                                </div>
                              </div>

                              <div className="row mb-3">
                                <label className="col-sm-4 col-form-label info-lable">
                                  নিরধারিত ফি
                                </label>
                                <div className="col-8">
                                  <input
                                    required
                                    type="text"
                                    className="form-control"
                                    placeholder=" নিরধারিত ফি"
                                    value={fee}
                                    {...register2("determined_fee")}
                                  />
                                </div>
                              </div>
                              <div className="row mb-3">
                                <label className="col-sm-4 col-form-label info-lable">
                                  জমা
                                </label>
                                <div className="col-8">
                                  <input
                                    required
                                    type="text"
                                    className="form-control"
                                    placeholder="জমা"
                                    // defaultValue={fees}
                                    // {...register2("ammount")}
                                    onChange={(e) => setJoma(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="row mb-3">
                                <label className="col-sm-4 col-form-label info-lable">
                                  কর্তন
                                </label>
                                <div className="col-8">
                                  <input
                                    required
                                    type="number"
                                    className="form-control"
                                    placeholder="কর্তন"
                                    value={korton}
                                    {...register2("discount")}
                                  />
                                </div>
                              </div>
                              <div className="row mb-3">
                                <label className="col-sm-4 col-form-label info-lable">
                                  মন্তব্যঃ
                                </label>
                                <div className="col-8">
                                  <input
                                    required
                                    type="text"
                                    className="form-control"
                                    placeholder="মন্তব্য"
                                    {...register2("comment")}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <div className="button-group">
                      <button className="custom-btn btn-primary" type="submit">
                        Save
                      </button>
                      <ReactToPrint
                        trigger={() => (
                          <button
                            className="custom-btn btn-primary"
                            type="button"
                          >
                            Print
                          </button>
                        )}
                        content={() => ref.current}
                      />
                      <button
                        className="custom-btn btn-dark"
                        data-bs-dismiss="modal"
                        onclick="javascript:void(0)"
                        type="button"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <div style={{ display: "none" }} id="invoice">
        <div
          ref={ref}
          className="bg-white d-print-block"
          style={{ zIndex: 1 }}
        >
          <span className="print-button d-print-none" onclick="window.print()">
            <i className="bi bi-printer-fill"></i>
          </span>
          <div className="pages-title">
            <h5>জামিয়া আরাবিয়া ইমদাদুল ফরিদাবাদ</h5>
            <p>১১/১২ মাদরাসা রোড, গেন্ডারিয়া, ঢাকা-১২০৪</p>
            <span>01832-061454 # 027440235</span>
          </div>
          <div className="row my-3 invoice-title">
            <div className="col-4 d-flex align-items-center">
              {/* <div className="slip-no">
                <strong>ইনভয়েস নং</strong>
                <span className=""> ০০৪</span>
              </div> */}
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center">
              <span className="pages-subtitle-slip">ইনভয়েস</span>
            </div>
            <div className="col-4 d-flex align-items-center justify-content-lg-end justify-content-start">
              <div className="slip-date">
                <strong>তারিখঃ</strong>
                <span className="">{currentDate}</span>
              </div>
            </div>
          </div>
          <div className="pages-content">
            <div className="row mb-1 customer-info">
              <div className="col-6 d-flex flex-wrap align-content-center">
                <div className="donor-name">
                  <strong className="dtitle">শিক্ষার্থীর নামঃ</strong>
                  <div className="border-line w-100">
                    {student?.student_name}
                  </div>
                </div>
                <div className="donor-name">
                  <strong className="dtitle">পিতার নামঃ</strong>
                  <div className="border-line w-100">
                    {student?.father_name}
                  </div>
                </div>
                <div className="donor-name">
                  <strong className="dtitle">ঠিকানাঃ</strong>
                  <div className="border-line w-100">{student?.jela}</div>
                </div>
                {/* <div className="donor-name mt-1">
                  <strong className="dtitle">টাকাঃ</strong>
                  <div className="border-all w-100">৫০০.০০ টাকা</div>
                </div> */}
              </div>
              <div className="col-6">
                <div className="donor-name">
                  <strong className="dtitle">মোবাইলঃ</strong>
                  <div className="border-line w-100">{student?.phn_no}</div>
                </div>
                <div className="donor-name">
                  <strong className="dtitle">শ্রেণীঃ</strong>
                  <div className="border-line w-100">{student?.class}</div>
                </div>
              </div>
            </div>
            {/* <div className="row mb-2">
              <div className="col-12">
                <div className="donor-name">
                  <strong className="dtitle">কথায়ঃ</strong>
                  <div className="border-line w-100">পাচশত টাকা মাত্র।</div>
                </div>
              </div>
            </div> */}
            <div className="row">
              <div className="col-12">
                <div
                  className="table-responsive"
                  data-pattern="priority-columns"
                >
                  <table className="table  bg-white table-bordered text-center report-table">
                    <thead className="text-center">
                      <tr>
                        <th>ক্রঃ</th>
                        <th>নিরধারিত ফি</th>
                        <th>জমা ফি</th>
                        <th>কর্তন</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>০১</td>
                        <td>{fee}</td>
                        <td>{joma}</td>
                        <td>{korton}</td>
                      </tr>
                      {/* <tr>
                        <th colspan="5" className="text-right">
                          Total Price After Discount
                        </th>
                        <td>০.০০</td>
                      </tr>
                      <tr>
                        <th colspan="5" className="text-right">
                          Grand Total
                        </th>
                        <td>০.০০</td>
                      </tr> */}
                      <tr>
                        <th colspan="3" className="text-right">
                          Paid Amount
                        </th>
                        <td>{joma}</td>
                      </tr>
                    </tbody>
                  </table>
                  <span>মন্তব্যঃ </span>
                  <span>{feeVal?.comment}</span>
                </div>
              </div>
              <div className="col-12">
                <div className="row mt-5">
                  <div className="col-lg-4 col-12 d-flex justify-content-lg-start justify-content-center">
                    <div className="marksheet-sing">
                      <span>শিক্ষার্থীর স্বাক্ষর</span>
                      <br />
                    </div>
                  </div>
                  <div className="col-lg-4 col-12 d-flex justify-content-lg-end justify-content-center mt-lg-0 mt-3">
                    <div className="marksheet-sing">
                      <span>পরিচালকের স্বাক্ষর</span>
                      <br />
                    </div>
                  </div>
                  <div className="col-lg-4 col-12 d-flex justify-content-lg-end justify-content-center mt-lg-0 mt-3">
                    <div className="marksheet-sing">
                      <span>আদায়কারীর স্বাক্ষর</span>
                      <br />
                      <span>{me?.data.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </tbody>
  );
};

export default AdmissionFeeModal;
