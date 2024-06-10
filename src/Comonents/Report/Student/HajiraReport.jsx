import React from "react";
import { useQuery } from "react-query";
import { serverUrl } from "../../../../utils/config";

const HajiraReport = ({ student, value, hajira }) => {
  const month = value?.month?.slice(0, 2);
  console.log("🚀 ~ file: HajiraReport.jsx:7 ~ HajiraReport ~ month:", month);
  console.log("hajire", hajira[0]?.updated_at.slice(5, 7));
  console.log("st", student);

  const { data: instituteInfo } = useQuery("instituteInfo", () =>
    fetch(`${serverUrl}/api/institute-info`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  const attendanceMap = {};
  hajira?.forEach((att) => {
    const studentId = att.student_id;
    if (!attendanceMap[studentId]) {
      attendanceMap[studentId] = [];
    }
    attendanceMap[studentId]?.push(att);
  });

  // Merge attendance data into students array
  const mergedStudents = student?.map((student) => {
    const studentId = student.id;
    const studentAttendance = attendanceMap[studentId] || [];

    // Initialize the columns
    const present = [];
    const absent = [];
    const escaped = [];

    // Categorize attendance data into columns
    studentAttendance.forEach((att) => {
      if (
        att.attandance === "Present" &&
        att.updated_at.slice(5, 7) == month &&
        true
      ) {
        present?.push(att);
      } else if (
        att.attandance === "Absent" &&
        att.updated_at.slice(5, 7) == month &&
        true
      ) {
        absent?.push(att);
      } else if (
        att.attandance === "Escaped" &&
        att.updated_at.slice(5, 7) === month
      ) {
        escaped?.push(att);
      }
    });

    // Add attendance-related columns to the student object
    student.Present = present;
    student.Absent = absent;
    student.Escaped = escaped;

    // You can add other columns or modifications as needed here

    return student;
  });

  console.log("mrege", mergedStudents);

  // const total = student?.map((student) => {
  //   const studentResults = hajira
  //     ?.filter((result) => result.student_id === student.id)
  //     ?.map((result) => result);

  //   const attended = student?.map(
  //     (item) => student.student_id === item.student_id
  //   ); // Calculate the sum

  //   console.log("attend", attended);

  //   return {
  //     ...student,
  //     student_id: student.id,
  //     total_sum: sum, // Include the sum in the returned object
  //     attended: attended?.length,
  //   };
  // });

  // console.log("total", total);
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
                  <th>Present</th>
                  <th>Absent</th>
                  <th>Escaped</th>
                </tr>
              </thead>

              <tbody>
                {mergedStudents?.map((item, i) => (
                  <tr key={item.id}>
                    {item.notun_puraton === "new" && (
                      <>
                        <td>
                          {item.session}-00{item.id}
                        </td>
                        <td>{item.student_name}</td>
                        <td>{item.roll}</td>
                        <td>{item.Present?.length}</td>
                        <td>{item.Absent?.length}</td>
                        <td>{item.Escaped?.length}</td>
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
