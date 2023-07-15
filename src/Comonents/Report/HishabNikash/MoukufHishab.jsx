import React from "react";
import dayjs from "dayjs";
import { useQuery } from "react-query";
import { serverUrl } from "../../../../utils/config";

const MoukufHishab = ({ data, value }) => {
  const { data: instituteInfo } = useQuery("instituteInfo", () =>
    fetch(`${serverUrl}/api/institute-info`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  const { data: audit } = useQuery("audit", () =>
    fetch(`${serverUrl}/api/audit`).then((res) => res.json())
  );

  return (
    <>
      <div className="bg-white d-print-block" style={{ zIndex: 1 }}>
        {/* <span className="print-button d-print-none" onclick="window.print()">
          <i className="bi bi-printer-fill"></i>
        </span> */}

        <div className="pages-content">
          <div className="row my-3 justify-content-center align-items-center d-print-none"></div>
          <div className="row">
            <div className="col-12">
              <div className="table-responsive" data-pattern="priority-columns">
                <table className="table  bg-white table-bordered text-center report-table">
                  <thead className="text-center">
                    <tr>
                      <td colspan="9">
                        <div className="pages-title">
                          <h5>{instituteInfo?.name}</h5>
                          <p>{instituteInfo?.address}</p>
                          <span>{instituteInfo?.num}</span>
                          <br />
                          <span className="pages-subtitle">
                            {value?.date} এর হিসাব এন্ট্রি
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="9">
                        <div className="d-flex justify-content-between">
                          <div>
                            <strong>ভর্তি ফি মওকুফ</strong>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>দাখেল</th>
                      <th>নাম</th>
                      <th>পিতার নাম</th>
                      <th>জন্ম তারিখ</th>
                      <th>রক্তের গ্রুপ</th>
                      <th>মোবাইল নাম্বার</th>
                      <th>গ্রাম</th>
                      <th>জেলা</th>
                      <th>থানা</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.vortiFee?.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.student_name}</td>
                        <td>{item.father_name}</td>
                        <td>{item.dob}</td>
                        <td>{item.blood_group}</td>
                        <td>{item.phn_no}</td>
                        <td>{item.graam}</td>
                        <td>{item.jela}</td>
                        <td>{item.thana}</td>
                      </tr>
                    ))}
                    <tr>
                      <td colspan="9">
                        <div className="d-flex justify-content-between">
                          <div>
                            <strong>মাসিক ফি মওকুফ</strong>
                          </div>
                        </div>
                      </td>
                    </tr>{" "}
                    <tr>
                      <th>দাখেল</th>
                      <th>নাম</th>
                      <th>পিতার নাম</th>
                      <th>জন্ম তারিখ</th>
                      <th>রক্তের গ্রুপ</th>
                      <th>মোবাইল নাম্বার</th>
                      <th>গ্রাম</th>
                      <th>জেলা</th>
                      <th>থানা</th>
                    </tr>
                    {data?.mashikFee?.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.student_name}</td>
                        <td>{item.father_name}</td>
                        <td>{item.dob}</td>
                        <td>{item.blood_group}</td>
                        <td>{item.phn_no}</td>
                        <td>{item.graam}</td>
                        <td>{item.jela}</td>
                        <td>{item.thana}</td>
                      </tr>
                    ))}
                    <tr>
                      <td colspan="9">
                        <div className="d-flex justify-content-between">
                          <div>
                            <strong>খাবার ফি মওকুফ</strong>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>দাখেল</th>
                      <th>নাম</th>
                      <th>পিতার নাম</th>
                      <th>জন্ম তারিখ</th>
                      <th>রক্তের গ্রুপ</th>
                      <th>মোবাইল নাম্বার</th>
                      <th>গ্রাম</th>
                      <th>জেলা</th>
                      <th>থানা</th>
                    </tr>
                    {data?.vortiFee?.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.student_name}</td>
                        <td>{item.father_name}</td>
                        <td>{item.dob}</td>
                        <td>{item.blood_group}</td>
                        <td>{item.phn_no}</td>
                        <td>{item.graam}</td>
                        <td>{item.jela}</td>
                        <td>{item.thana}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoukufHishab;
