import dayjs from "dayjs";
import React from "react";
import { useQuery } from "react-query";
import { serverUrl } from "../../../../utils/config";

const PodobiSalleryList = () => {
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
        <span className="pages-subtitle">
          পদবি ভিত্তিক বেতন প্রদানের তালিকা
        </span>
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
                <th>ক্রমিক নং</th>
                <th>স্টাফের ধরণ</th>
                <th>আইডি</th>
                <th>স্টাফের নাম</th>
                <th>মাসের নাম</th>
                <th>পরিমাণ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colspan="6">তারিখঃ ২২/০৫/২০২২ ইং</th>
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
                <td
                  colspan="5"
                  style={{
                    textAlign: "right",
                    fontWeight: "bold",
                  }}
                >
                  মোট
                </td>
                <td>৬৪৫৫৪২৩৪২৩.০০</td>
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
                <td
                  colspan="5"
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

export default PodobiSalleryList;
