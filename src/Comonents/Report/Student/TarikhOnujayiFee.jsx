import React from "react";
import { useQuery } from "react-query";
import { serverUrl } from "../../../../utils/config";

const ParentNo = ({ student, value }) => {
  const { data: instituteInfo } = useQuery("instituteInfo", () =>
    fetch(`${serverUrl}/api/institute-info`).then((res) => res.json())
  );

  const { data: payfees } = useQuery("payfees", () =>
    fetch(`${serverUrl}/api/pay-fees`).then((res) => res.json())
  );
  console.log("payfees", payfees);

  return (
    <div>
      <div className="preview-page d-print-block">
        <span className="print-button d-print-none" onclick="window.print()">
          <i className="bi bi-printer-fill"></i>
        </span>
        <div className="pages-title">
          <h5>{instituteInfo?.name}</h5>
          <p>{instituteInfo?.address}</p>
          <span>{instituteInfo?.num}</span>
          <br />
          <span className="pages-subtitle">
            ভর্তি রেজিস্টার: {value?.session}
          </span>
        </div>
        <div className="pages-content">
          <p className="my-2">জামাত/ক্লাশ : {value?.class}</p>
          <div className="table-responsive" data-pattern="priority-columns">
            <table className="table  bg-white table-bordered text-center report-table">
              <thead className="text-center">
                <tr>
                  <th>আইডি</th>
                  <th>নাম</th>
                  <th>মারহালা</th>
                  <th>মোবাইল নাম্বার</th>
                  <th>ফি</th>
                </tr>
              </thead>
              <tbody>
                {student?.map((item) => (
                  <tr>
                    {payfees?.map((x) => {
                      if (
                        x.student_id === item.id &&
                        value?.date === x.created_at.slice(0, 10)
                      ) {
                        return (
                          <>
                            <td>{item.id}</td>
                            <td>{item.student_name}</td>
                            <td>{item.father_name}</td>
                            <td>{item.phn_no}</td>
                            <td>
                              {payfees?.map((x) => {
                                if (x.student_id === item.id) {
                                  return <span key={x.id}>{x.ammount}</span>;
                                }
                              })}
                              {!item.vorti_fee_dibe && "মওকুফ"}
                            </td>
                            <td>
                              {payfees?.map((x) => {
                                if (x.student_id === item.id) {
                                  return (
                                    <span key={x.id}>
                                      {x.created_at.slice(0, 10)}
                                    </span>
                                  );
                                }
                              })}
                            </td>
                          </>
                        );
                      }
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentNo;
