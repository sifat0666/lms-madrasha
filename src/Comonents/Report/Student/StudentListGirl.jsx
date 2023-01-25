import React from "react";
import { useQuery } from "react-query";
import { serverUrl } from "../../../../utils/config";

const StudentListGirl = ({ student, value }) => {
  const { data: instituteInfo } = useQuery("instituteInfo", () =>
    fetch(`${serverUrl}/api/institute-info`).then((res) => res.json())
  );

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
            {" "}
            ছাত্রি ভর্তি রেজিস্টার: {value?.session}
          </span>
        </div>
        <div className="pages-content">
          <p className="my-2">জামাত/ক্লাশ : {value?.class}</p>
          <div className="table-responsive" data-pattern="priority-columns">
            <table className="table  bg-white table-bordered text-center report-table">
              <thead className="text-center">
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
              {/* <tbody>
                {student?.map((item) => {
                  if (item.notun_puraton === "old") {
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
                    </tr>;
                  }
                })}
              </tbody> */}
              <tbody>
                {student?.map((item) => (
                  <tr key={item.id}>
                    {item.gender === "girl" && (
                      <>
                        <td>{item.id}</td>
                        <td>{item.student_name}</td>
                        <td>{item.father_name}</td>
                        <td>{item.dob}</td>
                        <td>{item.blood_group}</td>
                        <td>{item.phn_no}</td>
                        <td>{item.graam}</td>
                        <td>{item.jela}</td>
                        <td>{item.notun_puraton}</td>
                      </>
                    )}
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

export default StudentListGirl;
