import React from "react";
import { useQuery } from "react-query";
import { serverUrl } from "../../../../utils/config";

const ExamPass = ({ data, val }) => {
  const { data: instituteInfo } = useQuery("instituteInfo", () =>
    fetch(`${serverUrl}/api/institute-info`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );
  console.log("dat", instituteInfo);
  return (
    <div>
      {data?.map((item) => (
        <div className="bg-light">
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
                <div class="row ">
                  <div
                    style={{ width: "290px" }}
                    class="col-4  justify-content-center"
                  >
                    <div className="p-2" style={{ textAlign: "center" }}>
                      পরীক্ষার্থীর নাম :{item.student_name}{" "}
                    </div>
                    <div className="p-2" style={{ textAlign: "center" }}>
                      জামাত : {item.class}
                    </div>

                    <img
                      style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "50%",
                      }}
                      height={"100px"}
                      src={instituteInfo?.mumtamim_sign}
                      alt=" মুমতামিম এর স্বাক্ষর"
                    />
                    <hr />
                    <p
                      className="px-3 pb-3 text-justify fs-6 fw-bold"
                      style={{ textAlign: "center" }}
                    >
                      মুমতামিম এর স্বাক্ষর
                    </p>
                  </div>
                  <div
                    style={{ width: "290px" }}
                    class="col-4 justify-content-center"
                  >
                    <div className="p-2" style={{ textAlign: "center" }}>
                      {" "}
                      পরিক্ষা: {val.exam_name}{" "}
                    </div>
                    <div className="p-2" style={{ textAlign: "center" }}>
                      রোল : {item.roll}
                    </div>
                    <div
                      class="d-flex justify-content-center "
                      style={{ flexDirection: "column" }}
                    >
                      {" "}
                      <img
                        style={{
                          display: "block",
                          marginLeft: "auto",
                          marginRight: "auto",
                          width: "50%",
                        }}
                        height={"100px"}
                        width={""}
                        src={instituteInfo?.najeme_talim_sign}
                        alt=""
                      />
                      <hr />
                      <p
                        className="px-3 pb-3 text-justify fs-6 fw-bold"
                        style={{ textAlign: "center" }}
                      >
                        নাজেমে তালিম এর স্বাক্ষর
                      </p>
                    </div>
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
