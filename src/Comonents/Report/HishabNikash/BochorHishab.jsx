import React from "react";
import dayjs from "dayjs";
import { useQuery } from "react-query";
import { serverUrl } from "../../../../utils/config";

const BoschorHishab = ({ value }) => {
  const bochor = value?.session;
  const { data: instituteInfo } = useQuery("instituteInfo", () =>
    fetch(`${serverUrl}/api/institute-info`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  const { data: audit } = useQuery("audit", () =>
    fetch(`${serverUrl}/api/audit`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  const totalJoma = audit?.data
    .map((item) => {
      if (
        item.submit_date.slice(0, 4) === bochor &&
        item.chart_of_account === "জমা"
      ) {
        return parseInt(item?.ammount);
      }
      return null;
    })
    ?.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const totalKhoroch = audit?.data
    .map((item) => {
      if (
        item.submit_date.slice(0, 4) === bochor &&
        item.chart_of_account === "খরচ"
      ) {
        return parseInt(item?.ammount);
      }
      return null;
    })
    ?.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return (
    <>
      <div className=" d-print-block" style={{ zIndex: 1 }}>
        <div className="pages-content">
          <div className="row my-3 justify-content-center align-items-center "></div>
          <div className="row">
            <div className="">
              <div className="table-responsive" data-pattern="priority-columns">
                {" "}
                <div className="bg-white w-100 p-3 d-flex flex-column">
                  {" "}
                  <td colspan="8" className="place-items-center">
                    <div className="pages-title">
                      <h5>{instituteInfo?.name}</h5>
                      <p>{instituteInfo?.address}</p>
                      <span>{instituteInfo?.num}</span>
                      <br />
                      {/* <span className="pages-subtitle">
                        {month} এর হিসাব এন্ট্রি
                      </span> */}
                      <div className="d-flex justify-content-between">
                        <div>
                          <strong>প্রিন্ট তারিখঃ</strong>
                          {dayjs().format("YYYY-MM-DD")}
                        </div>
                      </div>
                    </div>
                  </td>
                </div>
                <table className="table  bg-white table-bordered text-center report-table">
                  <thead className="text-center">
                    <tr>
                      <td colspan="8"></td>
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
                        {item.submit_date.slice(0, 4) === bochor &&
                          item.chart_of_account === "জমা" && (
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
                      <td colspan={6} className="fs-6 fw-bold p-4">
                        মোট জমা
                      </td>
                      <td className="fs-6 fw-bold py-4">জমা: {totalJoma}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    {audit?.data.map((item, i) => (
                      <tr key={item.id}>
                        {item.submit_date.slice(0, 4) === bochor &&
                          item.chart_of_account === "খরচ" && (
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
                      <td colspan={6} className="fs-6 fw-bold">
                        মোট খরচ
                      </td>
                      <td className="fs-6 fw-bold">খরচ: {totalKhoroch}</td>
                    </tr>
                    <tr>
                      <td colspan={7} className="p-3 fs-4 fw-bolder">
                        জমা খরচ নিট হিসাবে : {totalJoma - totalKhoroch}
                      </td>
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

export default BoschorHishab;
