import React from "react";
import dayjs from "dayjs";
import { useQuery } from "react-query";
import { serverUrl } from "../../../../utils/config";

const KhorochLedger = ({ data, val }) => {
  const { data: instituteInfo } = useQuery("instituteInfo", () =>
    fetch(`${serverUrl}/api/institute-info`).then((res) => res.json())
  );

  const { data: audit } = useQuery("audit", () =>
    fetch(`${serverUrl}/api/audit`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  const total = audit?.data
    .map((item) => {
      if (item.chart_of_account === "খরচ") {
        return parseInt(item?.ammount);
      }
      return null;
    })
    ?.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log("first", audit);

  return (
    <>
      <div className=" d-print-block" style={{ zIndex: 1 }}>
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
                      <td colspan="8">
                        <div className="pages-title">
                          <h5>{instituteInfo?.name}</h5>
                          <p>{instituteInfo?.address}</p>
                          <span>{instituteInfo?.num}</span>
                          <br />
                          <span className="pages-subtitle">খরচ লেজার</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="8">
                        <div className="d-flex justify-content-between">
                          <div>
                            <strong>মারহালাঃ</strong>
                            {val?.class}
                          </div>
                          <div>
                            <strong>মারহালাঃ</strong>
                            {val?.class}
                          </div>
                          <div>
                            <strong>প্রিন্ট তারিখঃ</strong>
                            {dayjs().format("YYYY-MM-DD")}
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>আইডি</th>
                      <th>ফান্ড</th>
                      <th>চার্ট অফ অ্যাকাউন্ট</th>
                      <th>লেজার</th>
                      <th>সাব লেজার</th>
                      <th>তারিখ</th>
                      <th>পরিমান</th>
                    </tr>
                  </thead>
                  <tbody>
                    {audit?.data.map((item, i) => (
                      <tr key={item.id}>
                        {item.chart_of_account === "খরচ" && (
                          <>
                            <td>{item.id}</td>
                            <td>{item.fund_name}</td>
                            <td>{item.chart_of_account}</td>
                            <td>{item.general_ledger}</td>
                            <td>{item.sub_ledger}</td>
                            <td>{item.submit_date}</td>
                            <td>{item.ammount}</td>
                          </>
                        )}
                      </tr>
                    ))}
                    <tr>
                      <td colspan={6}></td>
                      <td>total: {total}</td>
                    </tr>
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

export default KhorochLedger;
