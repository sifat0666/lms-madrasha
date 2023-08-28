import React from "react";
import { useQuery } from "react-query";
import { serverUrl } from "../../../../utils/config";

const HajiraReport = ({ students, value, hajira }) => {
  console.log("hajire", hajira);

  const { data: instituteInfo } = useQuery("instituteInfo", () =>
    fetch(`${serverUrl}/api/institute-info`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  const total = students?.map((student) => {
    const studentResults = results
      ?.filter((result) => result.student_id === student.id)
      ?.map((result) => parseInt(result?.number))
      ?.filter((number) => !isNaN(number));

    const sum = studentResults?.reduce((acc, curr) => acc + curr, 0); // Calculate the sum

    return {
      ...student,
      student_id: student.id,
      total_sum: sum, // Include the sum in the returned object
    };
  });
  return (
    <div>
      <div className="bg-white d-print-block">
        <div className="pages-title">
          <h5>{instituteInfo?.name}</h5>
          <p>{instituteInfo?.address}</p>
          <span>{instituteInfo?.num}</span>
          <br />
          <span className="pages-subtitle"> Result - {value?.session}</span>
        </div>
        <div className="pages-content">
          <p className="my-2 font-weight-bold">জামাত/ক্লাশ : {value?.class}</p>
          <div className="table-responsive" data-pattern="priority-columns">
            <table className="table  bg-white table-bordered text-center report-table">
              <thead className="text-center">
                <tr>
                  <th>ID</th>
                  <th>নাম</th>
                  <th>রোল</th>
                  <th>মেধা স্থান</th>
                  <th>মোট নাম্বার</th>
                </tr>
              </thead>

              <tbody>
                {total?.map((item, i) => (
                  <tr key={item.id}>
                    {item.notun_puraton === "new" && (
                      <>
                        <td>
                          {item.session}-00{item.id}
                        </td>
                        <td>{item.student_name}</td>
                        <td>{item.roll}</td>
                        <td>{i + 1}</td>
                        <td>{item.total_sum}</td>
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

export default HajiraReport;
