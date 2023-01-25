import React from "react";
import { useQuery } from "react-query";
import { serverUrl } from "../../../../utils/config";

const ExamPass = ({ data, val, instituteInfo }) => {
  //   const { data: instituteInfo } = useQuery("instituteInfo", () =>
  //     fetch(`${serverUrl}/api/institute-info`).then((res) => res.json())
  //   );
  console.log("va;", val);
  console.log("pass", data);
  return (
    <div>
      {data?.map((item) => (
        <div key={item.id} className=" bg-light p-3">
          {" "}
          <div className="m-2 border border-black rounded">
            {" "}
            <div className="pages-title bg-light">
              <h5>{instituteInfo?.name}</h5>
              <p>{instituteInfo?.address}</p>
              <span>{instituteInfo?.num}</span>
              <br />
              <span className="pages-subtitle">প্রবেশপত্র</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div class="row p-5">
                <div
                  style={{ width: "290px" }}
                  class="col-4  justify-content-center"
                >
                  <div className="p-2">জামাত : {item.class}</div>
                  <div className="p-2">
                    পরীক্ষার্থীর নাম :{item.student_name}{" "}
                  </div>
                  <div className="p-2">পিতার নাম : {item.father_name}</div>
                </div>
                <div
                  style={{ width: "290px" }}
                  class="col-4 justify-content-center"
                >
                  <div className="p-2"> পরিক্ষা: {val.exam_name} </div>
                  <div className="p-2">জন্ম তারিখ :{item.dob} </div>
                  <div className="p-2">মোবাইল : {item.phn_no}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExamPass;
