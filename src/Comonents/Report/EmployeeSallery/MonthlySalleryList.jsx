import dayjs from "dayjs";
import React from "react";
import { useQuery } from "react-query";
import { serverUrl } from "../../../../utils/config";

const MonthlySalleryList = ({ paidTable }) => {
  const { data: instituteInfo } = useQuery("instituteInfo", () =>
    fetch(`${serverUrl}/api/institute-info`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  return (
    <div className="bg-white d-print-block">
      <div className="pages-title">
        <h5>{instituteInfo?.name}</h5>
        <p>{instituteInfo?.address}</p>
        <span>{instituteInfo?.num}</span>
        <br />
        <span className="pages-subtitle"> মাস ভিত্তিক বেতন তালিকা</span>
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
                <th>কর্তন</th>

                <th>তারিখ</th>
              </tr>
            </thead>
            <tbody>
              {paidTable?.data?.map((item) => (
                <tr>
                  <td>{item.employee_id}</td>
                  <td>{item.name}</td>
                  <td>{item.podobi}</td>
                  <td>{item.sallery}</td>
                  <td>{item.korton}</td>
                  <td>{item.updated_at.slice(0, 10)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <div className="short-report">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MonthlySalleryList;
