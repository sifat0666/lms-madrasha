import React from "react";
import { useQuery } from "react-query";
import { serverUrl } from "../../../../utils/config";

const IDCardLayout = ({ student }) => {
  const { data: instituteInfo } = useQuery("instituteInfo", () =>
    fetch(`${serverUrl}/api/institute-info`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  console.log(instituteInfo);
  console.log("stu", student);
  return (
    <div className="bg-light">
      {student?.map((item) => (
        <div class="black-whiteid m-2 p-2" key={item.id}>
          <div class="id-card part-one mx-4">
            <div class="idcard-institute-info">
              <h6>{instituteInfo?.name}</h6>
              <p>{instituteInfo?.address}</p>
              <span>{instituteInfo?.num}</span>
            </div>
            <div class="idcard-info">
              <div class="idcard-avator">
                <img src={item?.image} width="100%" height="100%" />
              </div>
            </div>
            <div class="authorized-sing">
              <img
                src={instituteInfo?.mumtamim_sign}
                width="80"
                height="50"
                class="sign"
              />
              <span>মুহতামিম এর সাক্ষর</span>
            </div>
          </div>
          <div class="id-card part-two mx-4 ">
            <div class="idcard-info-part-two ">
              <div class="idcard-title"> শিক্ষার্থীর পরিচিতি</div>
              <div class="info">
                <strong>শিক্ষার্থীর নামঃ</strong>
                <span>{item.student_name}</span>
              </div>
              <div class="info">
                <strong>পিতার নামঃ</strong>
                <span>{item.father_name}</span>
              </div>
              <div class="info">
                <strong>মারহালা/শ্রেণীঃ</strong>
                <span>{item.class}</span>
              </div>
              <div class="info">
                <strong>মোবাইলঃ</strong>
                <span>{item.phn_no}</span>
              </div>
              <div class="info">
                <strong>জাতীয় পরিচয়পত্রঃ</strong>
                <span>{item.nid_no}</span>
              </div>
              <div class="info">
                <strong>শিক্ষার্থীর ধরণঃ</strong>
                <span>{item.abashik_onabashik}</span>
              </div>
              <div class="info">
                <strong>থানাঃ</strong>
                <span>{item.thana}</span>
              </div>
              <div class="info">
                <strong>জেলাঃ</strong>
                <span>{item.jela}</span>
              </div>
              <div class="info-sign">
                <div class="authorized-sing">
                  <span>স্বাক্ষর</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IDCardLayout;
