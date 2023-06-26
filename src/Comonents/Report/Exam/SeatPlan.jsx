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
        <div key={item.id} className=" bg-light ">
          {" "}
          <div className="border border-black rounded p-2">
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
              <div class=" ">
                <div
                  style={{ width: "900px" }}
                  class="col-4  justify-content-center row"
                >
                  <div className="col " style={{ paddingLeft: "40px" }}>
                    <h5 className="p-2 text-align-center">
                      পরীক্ষার্থীর নাম :{item.student_name}{" "}
                    </h5>
                    <h5 className="p-2">জামাত : {item.class}</h5>
                  </div>
                  <div className="col">
                    <h2 className="p-2">রোল : {item.roll}</h2>
                  </div>
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
