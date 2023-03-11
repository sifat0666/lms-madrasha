import dayjs from "dayjs";
import React from "react";
import { useQuery } from "react-query";
import { serverUrl } from "../../../../utils/config";

const MonthlyBokeyaList = ({ notPaidTable }) => {
  const { data: instituteInfo } = useQuery("instituteInfo", () =>
    fetch(`${serverUrl}/api/institute-info`).then((res) => res.json())
  );

  return (
    <div className="preview-page d-print-block">
      <div className="pages-title">
        <h5>{instituteInfo?.name}</h5>
        <p>{instituteInfo?.address}</p>
        <span>{instituteInfo?.num}</span>
        <br />
        <span className="pages-subtitle">মাস ভিত্তিক বকেয়া তালিকা</span>
        <br />
      </div>
      <div className="pages-content">
        <div className="row my-3 justify-content-center align-items-center">
          <div className="col-5"></div>
          <div className="col-3"></div>
          <div className="col-4 d-flex justify-content-end">
            <p className="my-2">
              <span>রিপোর্ট প্রিন্ট তারিখঃ</span>
              {dayjs().format("YYYY-MM-DD")}
            </p>
          </div>
        </div>
        <div className="table-responsive" data-pattern="priority-columns">
          <table className="table  bg-white table-bordered text-center report-table">
            <thead className="text-center">
              <tr>
                <th>আইডি</th>
                <th> নাম</th>
                <th>পদবি</th>
                <th>মোট বেতন</th>
              </tr>
            </thead>
            <tbody>
              {notPaidTable?.data?.map((item) => (
                <tr>
                  <td>{item.employee_id}</td>
                  <td>{item.name}</td>
                  <td>{item.podobi}</td>
                  <td>{item.total}</td>
                </tr>
              ))}

              <tr>
                <td
                  colspan="3"
                  style={{
                    textAlign: "right",
                    fontWeight: "bold",
                  }}
                >
                  মোট
                </td>
                <td>৬৪৫৫৪২৩৪২৩.০০</td>
              </tr>
            </tbody>
          </table>
          <div className="short-report">
            <div className="report-item">
              <div className="items">
                <span className="report-text">সর্বমোট জমা =</span>
                <span className="report-amount">৩৪৫৪৩৫৪.০০</span>
              </div>
              <div className="items">
                <span>সর্বমোট খরচ =</span>
                <span>৩৪৫৪৩৫৪.০০</span>
              </div>
              <hr className="lines" />
              <div className="items">
                <span>উদ্ধৃত্ব</span>
                <span>৬৫৪৬.০০</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyBokeyaList;
