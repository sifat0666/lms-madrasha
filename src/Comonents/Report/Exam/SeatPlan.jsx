import React from "react";
import { useQuery } from "react-query";
import { serverUrl } from "../../../../utils/config";

const ExamPass = ({ data, val }) => {
  const { data: instituteInfo } = useQuery("instituteInfo", () =>
    fetch(`${serverUrl}/api/institute-info`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );
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
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div class="p-5">
                <div
                  style={{ width: "290px" }}
                  class="col-4  justify-content-center"
                >
                  <h2 className="p-2">জামাত : {item.class}</h2>
                  <h2 className="p-2">
                    পরীক্ষার্থীর নাম :{item.student_name}{" "}
                  </h2>
                  <h2 className="p-2">রোল : {item.roll}</h2>
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
