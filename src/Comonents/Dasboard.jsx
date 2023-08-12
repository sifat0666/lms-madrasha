import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { serverUrl } from "../../utils/config";
import { useNavigate } from "react-router-dom";
import { PiStudentBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const Dasboard = () => {
  // const { data } = useQuery("dashboard", () =>
  //   fetch(`${serverUrl}/api/dashboard`, {headers:  {Authorization: { Authorization: `Bearer ${localStorage.getItem("token")}` } }}).then((res) => res.json())
  // );

  const { data, isLoading } = useQuery(["dashboard"], () =>
    axios.get(`${serverUrl}/api/dashboard`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
  );
  const { navigate } = useNavigate();

  console.log("data", data?.data);

  return (
    <div>
      {" "}
      {/* <!--Dashbord Container--> */}
      <section className="dashbord-section my-4">
        <div className="containers">
          <div className="row">
            <div className="col-lg-8">
              <div className="grid-container" style={{ cursor: "pointer" }}>
                {/* <div className="grid-card">Total Users: {data?.data?.total_user}</div>
                <div className="grid-card">
                  Total Students: {data?.data?.total_student}
                </div> */}
                <Link to="/student-info">
                  <div className="grid-card">
                    {/* <PiStudentBold /> */}
                    ছাত্র ছাত্রি রেজিস্টার
                  </div>
                </Link>
                <div className="grid-card">ক্লাস ও সাবজেক্ট রেজিস্টার</div>
                <div className="grid-card">পরিক্ষা রেজিস্টার</div>
                <div className="grid-card">ভর্তি রিপোর্ট</div>
                <div className="grid-card">আইডি কার্ড প্রিন্ট</div>
                <div className="grid-card">পরিক্ষা রিপোর্ট</div>
                {/* <div className="grid-card">
                  Total Class: {data?.data?.total_class}
                </div> */}
                <div className="grid-card">রেজাল্ট এন্ট্রি</div>
                <div className="grid-card">রেজাল্ট প্রিন্ট</div>
                <div className="grid-card">বেতন নির্ধারণ</div>
                <div className="grid-card">বেতন গ্রহন</div>
                <div className="grid-card">বকেয়া ভর্তি ফি গ্রহন</div>
                <div className="grid-card">আয় এন্ট্রি</div>
              </div>
              <div
                className="grid-container pt-2"
                style={{ cursor: "pointer" }}
              >
                <div className="grid-card bg-">ব্যয় এন্ট্রি</div>
                <div className="grid-card">আয়-ব্যয় হিসাব</div>
                <div className="grid-card">শিক্ষক/কর্মচারী রেজিস্টার</div>
                <div className="grid-card">শিক্ষক/কর্মচারী পেয়রোল</div>
                <div className="grid-card">শিক্ষক/কর্মচারী রিপোর্ট</div>
                <div className="grid-card">দাতা সদস্য রেজিস্টার</div>
                <div className="grid-card">দাতা সদস্য ফি গ্রহণ</div>
                <div className="grid-card">বই এন্ট্রি</div>
                <div className="grid-card">বই বিক্রি</div>
                <div className="grid-card">মেনেজ সেল</div>
              </div>
            </div>
            <div className="col-lg-4 company-about">
              <div className="card">
                <div className="card-body">
                  <div className="card-top text-center">
                    <h4>কওমী মাদ্রাসা ম্যানেজমেন্ট সফটওয়্যার</h4>
                  </div>
                  <div className="card-content text-center">
                    <h5>যোগাযোগ</h5>
                    <p>+88018xxxxxxxxx</p>
                    <p>
                      যোগাযোগের সময়
                      <br />
                      সকাল ১০:০০ টা থেকে সন্ধা ০৭:০০ টা পর্যন্ত
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dasboard;
