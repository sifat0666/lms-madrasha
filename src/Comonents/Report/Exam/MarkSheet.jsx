import dayjs from "dayjs";
import React from "react";
import { useQuery } from "react-query";
import { serverUrl } from "../../../../utils/config";

const MarkSheet = ({ data, val, classData }) => {
  // const { data: instituteInfo } = useQuery("instituteInfo", () =>
  //   fetch(`${serverUrl}/api/institute-info`).then((res) => res.json())
  // );
  return (
    <div className="preview-page d-print-block" style={{ zIndex: 1 }}>
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
                    <td colspan="4">
                      <div className="pages-title">
                        <h5>{instituteInfo?.name}</h5>
                        <p>{instituteInfo?.address}</p>
                        <span>{instituteInfo?.num}</span>
                        <br />
                        <span className="pages-subtitle"> নাম্বরপত্র</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4">
                      <div className="d-flex justify-content-between">
                        <div>
                          <strong>মারহালাঃ</strong>
                          {val?.class}
                        </div>
                        <div>
                          <strong>কিতাব</strong>
                          <input type="text" />
                        </div>
                        <div>
                          <strong>প্রিন্ট তারিখঃ</strong>
                          {dayjs().format("YYYY-MM-DD")}
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>ক্রঃ</th>
                    <th>আইডি</th>
                    <th>পরীক্ষার্থী</th>
                    <tr
                      className="font-weight-bold"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      নাম্বার
                    </tr>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item, i) => (
                    <tr key={item.id}>
                      <td>{i}</td>
                      <td>{item.id}</td>
                      <td>{item.student_name}</td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkSheet;
