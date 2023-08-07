import React from "react";
import { useQuery } from "react-query";
import { serverUrl } from "../../../../utils/config";

const ExamPass = ({ data, val }) => {
  const { data: instituteInfo } = useQuery("instituteInfo", () =>
    fetch(`${serverUrl}/api/institute-info`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  return (
    <div style={{ display: "flex", minWidth: "100%" }} className="p-3 ">
      <div style={{ maxWidth: "50%" }}>
        {data?.map((item) => {
          if (item.id % 2 == 1) {
            return (
              <div key={item.id} className=" bg-light">
                {" "}
                <div className="border border-black rounded p-2">
                  {" "}
                  <div className="pages-title bg-light">
                    <h5>{instituteInfo?.name}</h5>
                    <p>{instituteInfo?.address}</p>
                    <span>{instituteInfo?.num}</span>
                    <br />
                  </div>
                  <div>
                    <div>
                      <div style={{ width: "100%" }} class="col-4  ">
                        <div className="col " style={{ paddingLeft: "" }}>
                          <p className="p-2 text-align-center">
                            পরীক্ষার্থীর নাম :{item.student_name}{" "}
                          </p>
                          <p className="p-2">জামাত : {item.class}</p>
                        </div>
                        <div className="col">
                          <p className="p-2">রোল : {item.roll}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div style={{ maxWidth: "50%" }}>
        {data?.map((item) => {
          if (item.id % 2 == 0) {
            return (
              <div key={item.id} className=" bg-light">
                {" "}
                <div className="border border-black rounded p-2">
                  {" "}
                  <div className="pages-title bg-light">
                    <h5>{instituteInfo?.name}</h5>
                    <p>{instituteInfo?.address}</p>
                    <span>{instituteInfo?.num}</span>
                    <br />
                  </div>
                  <div>
                    <div>
                      <div style={{ width: "100%" }} class="col-4  ">
                        <div className="col " style={{ paddingLeft: "" }}>
                          <p className="p-2 text-align-center">
                            পরীক্ষার্থীর নাম :{item.student_name}{" "}
                          </p>
                          <p className="p-2">জামাত : {item.class}</p>
                        </div>
                        <div className="col">
                          <p className="p-2">রোল : {item.roll}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ExamPass;
