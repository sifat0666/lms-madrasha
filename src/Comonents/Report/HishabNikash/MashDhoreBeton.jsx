import React from "react";
import dayjs from "dayjs";
import { useQuery } from "react-query";
import { serverUrl } from "../../../../utils/config";

const MashDhoreBeton = ({ data, value }) => {
  const { data: instituteInfo } = useQuery("instituteInfo", () =>
    fetch(`${serverUrl}/api/institute-info`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  console.log("val", value);

  const totalMashikFee = data
    ?.map((item) => {
      if (item.fee_name === "মাসিক ফি") {
        return parseInt(item.submitted_fee);
      }
      return null;
    })
    ?.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const totalKhabarFee = data
    ?.map((item) => {
      if (item.fee_name === "খাবারের ফি") {
        return parseInt(item.submitted_fee);
      }
      return null;
    })
    ?.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  //   console.log(instituteInfo);
  return (
    <>
      <div className="bg-white d-print-block" style={{ zIndex: 1 }}>
        {/* <span className="print-button d-print-none" onclick="window.print()">
          <i className="bi bi-printer-fill"></i>
        </span> */}

        <div className="pages-content">
          <div className="row my-3 justify-content-center align-items-center d-print-none"></div>
          <div className="row">
            <div className="col-12">
              <div className="table-responsive" data-pattern="priority-columns">
                <table
                  // style={{ width: "900" }}
                  className="table  bg-white table-bordered text-center report-table"
                >
                  <thead className="text-center">
                    <tr>
                      <td colspan="8">
                        <div className="pages-title">
                          <h5>{instituteInfo?.name}</h5>
                          <p>{instituteInfo?.address}</p>
                          <span>{instituteInfo?.num}</span>
                          <br />
                          <span className="pages-subtitle">
                            মাসিক বেতন্ জমা লিস্ট
                          </span>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td colspan="8">
                        <div className="d-flex justify-content-between">
                          <div>
                            <strong>শিক্ষাবর্ষ: </strong>
                            {value?.session}
                          </div>
                          <div>
                            <strong>মাস: </strong>
                            {value?.month}
                          </div>
                          <div>
                            <strong>প্রিন্ট তারিখঃ</strong>
                            {dayjs().format("YYYY-MM-DD")}
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="5">
                        <h2>মাসিক বেতন</h2>
                      </td>
                    </tr>
                    <tr>
                      <th>স্টুডেন্ট আইডি</th>
                      <th>নাম</th>
                      <th>মারহালা</th>
                      <th>তারিখ</th>
                      <th>জমা</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((item, i) => {
                      if (item.fee_name === "মাসিক ফি") {
                        return (
                          <tr key={item.id}>
                            <td>{item.student_id}</td>
                            <td>{item.student_name}</td>
                            <td>{item.class}</td>
                            <td>{item.updated_at}</td>
                            <td>{item.submitted_fee}</td>
                          </tr>
                        );
                      }
                    })}
                    <tr>
                      <td colspan={4}></td>
                      <td colspan={2}>মোট: {totalMashikFee}</td>
                    </tr>
                    <tr>
                      <td colspan="5">
                        <h2>খাবার ফি</h2>
                      </td>
                    </tr>
                    <tr>
                      <th>স্টুডেন্ট আইডি</th>
                      <th>নাম</th>
                      <th>মারহালা</th>
                      <th>জমা</th>
                      <th>তারিখ</th>
                    </tr>
                    {data?.map((item, i) => {
                      if (item.fee_name === "খাবারের ফি") {
                        return (
                          <tr key={item.id}>
                            <td>{item.student_id}</td>
                            <td>{item.student_name}</td>
                            <td>{item.class}</td>
                            <td>{item.submitted_fee}</td>
                            <td>{item.updated_at}</td>
                          </tr>
                        );
                      }
                    })}
                    <tr>
                      <td colspan={4}></td>
                      <td colspan={2}>মোট: {totalKhabarFee}</td>
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

export default MashDhoreBeton;
