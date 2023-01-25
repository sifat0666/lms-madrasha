import React from "react";
import { useMutation, useQuery } from "react-query";
import { serverUrl } from "../../../../utils/config";

const Survey = ({ value, survey }) => {
  const { data: instituteInfo } = useQuery("instituteInfo", () =>
    fetch(`${serverUrl}/api/institute-info`).then((res) => res.json())
  );

  console.log("first", survey);

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
            মারহালাওয়ারী নতুন পুরাতন মোট শিক্ষার্থী: {value?.session}
          </span>
        </div>
        <div className="pages-content">
          <p className="my-2">জামাত/ক্লাশ : {value?.class}</p>
          <div
            className="text-center table-responsive"
            data-pattern="priority-columns"
          >
            <table class="table text-center">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">ধরন</th>
                  <th scope="col">সংখ্যা</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">১</th>
                  <td>মোট</td>
                  <td>{survey?.total}</td>
                </tr>
                <tr>
                  <th scope="row">২</th>
                  <td>ছেলে</td>
                  <td>{survey?.boy}</td>
                </tr>
                <tr>
                  <th scope="row">৩</th>
                  <td>মেয়ে</td>
                  <td>{survey?.girl}</td>
                </tr>
                <tr>
                  <th scope="row">৪</th>
                  <td>নতুন</td>
                  <td>{survey?.new}</td>
                </tr>
                <tr>
                  <th scope="row">৫</th>
                  <td>পুরাতন</td>
                  <td>{survey?.old}</td>
                </tr>
                <tr>
                  <th scope="row">৬</th>
                  <td>আবাসিক</td>
                  <td>{survey?.resi}</td>
                </tr>
                <tr>
                  <th scope="row">৭</th>
                  <td>অনাবাসিক</td>
                  <td>{survey?.unresi}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Survey;
