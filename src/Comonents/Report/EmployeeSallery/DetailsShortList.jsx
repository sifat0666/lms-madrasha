import dayjs from "dayjs";
import React from "react";
import { useQuery } from "react-query";
import { serverUrl } from "../../../../utils/config";

const DetailsShortList = () => {
  const { data: instituteInfo } = useQuery("instituteInfo", () =>
    fetch(`${serverUrl}/api/institute-info`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  const { data: employee } = useQuery("employee", () =>
    fetch(`${serverUrl}/api/employee`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  console.log("data", employee?.data);

  return (
    <div className="preview-page d-print-block">
      <div className="pages-title">
        <h5>{instituteInfo?.name}</h5>
        <p>{instituteInfo?.address}</p>
        <span>{instituteInfo?.num}</span>
        <br />
        <span className="pages-subtitle">কর্মীদের নামের সংক্ষিপ্ত তালিকা</span>
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
                <th>পদবী</th>
                <th>স্টাফের নাম</th>
                <th>যোগদানের তারিখ</th>
                <th>মোবাইল নাম্বার</th>
              </tr>
            </thead>
            <tbody>
              {employee?.data?.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.position}</td>
                  <td>{item.employee_id}</td>
                  <td>{item.data_of_joining}</td>
                  <td>{item.phn_no}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetailsShortList;
