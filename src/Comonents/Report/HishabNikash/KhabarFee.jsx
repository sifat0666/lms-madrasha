import React from "react";
import { useQuery } from "react-query";
import { serverUrl } from "../../../../utils/config";

const KhabarFee = ({ value, student, months }) => {
  const { data: instituteInfo } = useQuery("instituteInfo", () =>
    fetch(`${serverUrl}/api/institute-info`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );
  const { data: monthlyFee } = useQuery("monthly_fee", () =>
    fetch(`${serverUrl}/api/monthly-fee`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  console.log("monthlyFee", monthlyFee?.data);

  return (
    <div>
      {" "}
      <div>
        <div className=" d-print-block" style={{ zIndex: 1 }}>
          <div className="pages-content">
            <div className="row">
              <div className="col-12">
                <div
                  className="table-responsive"
                  data-pattern="priority-columns"
                >
                  <table
                    style={{ width: "100%" }}
                    className="table  bg-white table-bordered text-center report-table"
                  >
                    <thead className="text-center">
                      <tr>
                        <td colspan="16">
                          <div className="pages-title">
                            <h5>{instituteInfo?.name}</h5>
                            <p>{instituteInfo?.address}</p>
                            <span>{instituteInfo?.num}</span>
                            <br />
                            <span className="pages-subtitle">
                              খাবারের ফি উত্তোলন তালিকা {value?.session}
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3">
                          <div className="d-flex justify-content-between">
                            <div>
                              <strong>মারহালাঃ </strong>
                              {value?.class}
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>আইডি</th>
                        <th>শিক্ষার্থী নাম</th>
                        <th>নিরধারিত ফি</th>
                        <th>{months?.data[0]?.m1}</th>
                        <th>{months?.data[0]?.m2}</th>
                        <th>{months?.data[0]?.m3}</th>
                        <th>{months?.data[0]?.m4}</th>
                        <th>{months?.data[0]?.m5}</th>
                        <th>{months?.data[0]?.m6}</th>
                        <th>{months?.data[0]?.m7}</th>
                        <th>{months?.data[0]?.m8}</th>
                        <th>{months?.data[0]?.m9}</th>
                        <th>{months?.data[0]?.m10}</th>
                        <th>{months?.data[0]?.m11}</th>
                        <th>{months?.data[0]?.m12}</th>
                      </tr>
                    </thead>
                    {student?.map((item) => (
                      <tbody>
                        <tr>
                          <td rowSpan={3}>{item.id}</td>
                          <td rowSpan={3}>{item.student_name}</td>
                          <td>ফি জমা</td>
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m1 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.submitted_fee}</span>;
                              }
                              return null;
                            })}
                          </td>
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m2 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.submitted_fee}</span>;
                              }
                              return null;
                            })}
                          </td>
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m3 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.submitted_fee}</span>;
                              }
                              return null;
                            })}
                          </td>
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m4 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.submitted_fee}</span>;
                              }
                              return null;
                            })}
                          </td>{" "}
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m5 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.submitted_fee}</span>;
                              }
                              return null;
                            })}
                          </td>{" "}
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m6 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.submitted_fee}</span>;
                              }
                              return null;
                            })}
                          </td>{" "}
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m7 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.submitted_fee}</span>;
                              }
                              return null;
                            })}
                          </td>{" "}
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m8 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.submitted_fee}</span>;
                              }
                              return null;
                            })}
                          </td>{" "}
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m9 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.submitted_fee}</span>;
                              }
                              return null;
                            })}
                          </td>{" "}
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m10 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.submitted_fee}</span>;
                              }
                              return null;
                            })}
                          </td>{" "}
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m11 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.submitted_fee}</span>;
                              }
                              return null;
                            })}
                          </td>{" "}
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m12 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.submitted_fee}</span>;
                              }
                              return null;
                            })}
                          </td>
                        </tr>
                        <tr>
                          <td>নিরধারিত ফি</td>
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m1 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.determined_fee}</span>;
                              }
                              return null;
                            })}
                          </td>
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m2 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.determined_fee}</span>;
                              }
                              return null;
                            })}
                          </td>
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m3 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.determined_fee}</span>;
                              }
                              return null;
                            })}
                          </td>
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m4 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.determined_fee}</span>;
                              }
                              return null;
                            })}
                          </td>{" "}
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m5 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.determined_fee}</span>;
                              }
                              return null;
                            })}
                          </td>{" "}
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m6 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.determined_fee}</span>;
                              }
                              return null;
                            })}
                          </td>{" "}
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m7 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.determined_fee}</span>;
                              }
                              return null;
                            })}
                          </td>{" "}
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m8 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.determined_fee}</span>;
                              }
                              return null;
                            })}
                          </td>{" "}
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m9 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.determined_fee}</span>;
                              }
                              return null;
                            })}
                          </td>{" "}
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m10 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.determined_fee}</span>;
                              }
                              return null;
                            })}
                          </td>{" "}
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m11 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.determined_fee}</span>;
                              }
                              return null;
                            })}
                          </td>{" "}
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m12 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.determined_fee}</span>;
                              }
                              return null;
                            })}
                          </td>
                        </tr>
                        <tr>
                          <td>কর্তন</td>
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m1 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.discount}</span>;
                              }
                              return null;
                            })}
                          </td>
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m2 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.discount}</span>;
                              }
                              return null;
                            })}
                          </td>
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m3 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.discount}</span>;
                              }
                              return null;
                            })}
                          </td>
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m4 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.discount}</span>;
                              }
                              return null;
                            })}
                          </td>{" "}
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m5 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.discount}</span>;
                              }
                              return null;
                            })}
                          </td>{" "}
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m6 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.discount}</span>;
                              }
                              return null;
                            })}
                          </td>{" "}
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m7 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.discount}</span>;
                              }
                              return null;
                            })}
                          </td>{" "}
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m8 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.discount}</span>;
                              }
                              return null;
                            })}
                          </td>{" "}
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m9 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.discount}</span>;
                              }
                              return null;
                            })}
                          </td>{" "}
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m10 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.discount}</span>;
                              }
                              return null;
                            })}
                          </td>{" "}
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m11 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.discount}</span>;
                              }
                              return null;
                            })}
                          </td>{" "}
                          <td>
                            {" "}
                            {monthlyFee?.data.map((fee) => {
                              if (
                                fee.student_id == item.id &&
                                fee.month === months?.data[0]?.m12 &&
                                fee.fee_name === "খাবারের ফি"
                              ) {
                                return <span>{fee.discount}</span>;
                              }
                              return null;
                            })}
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
              <div className="col-12 mt-3">
                <div
                  className="table-responsive"
                  data-pattern="priority-columns"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KhabarFee;
