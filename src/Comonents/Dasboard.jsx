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
                {/* <div className="grid-card" style={{height: "150px"}}>Total Users: {data?.data?.total_user}</div>
                <div className="grid-card" style={{height: "150px"}}>
                  Total Students: {data?.data?.total_student}
                </div> */}
                <Link to="/student-info">
                  <div className="grid-card" style={{ height: "150px" }}>
                    {/* <PiStudentBold /> */}
                    ছাত্র ছাত্রি রেজিস্টার
                  </div>
                </Link>
                <Link to="/class-entry">
                  <div className="grid-card" style={{ height: "150px" }}>
                    ক্লাস ও সাবজেক্ট রেজিস্টার
                  </div>
                </Link>
                <Link to="/exam-entry">
                  <div className="grid-card" style={{ height: "150px" }}>
                    পরিক্ষা রেজিস্টার
                  </div>
                </Link>
                <Link to="/student-report">
                  <div className="grid-card" style={{ height: "150px" }}>
                    ভর্তি রিপোর্ট
                  </div>
                </Link>{" "}
                <Link to="/student-report">
                  <div className="grid-card" style={{ height: "150px" }}>
                    আইডি কার্ড প্রিন্ট
                  </div>
                </Link>
                <Link to="/exam-report">
                  <div className="grid-card" style={{ height: "150px" }}>
                    পরিক্ষা রিপোর্ট
                  </div>
                </Link>
                {/* <div className="grid-card" style={{height: "150px"}}>
                  Total Class: {data?.data?.total_class}
                </div> */}
                <Link to="/marks-entry">
                  <div className="grid-card" style={{ height: "150px" }}>
                    রেজাল্ট এন্ট্রি
                  </div>
                </Link>
                <Link to="/mark-sheet-class">
                  <div className="grid-card" style={{ height: "150px" }}>
                    রেজাল্ট প্রিন্ট
                  </div>
                </Link>
                <Link to="/fees-determination">
                  <div className="grid-card" style={{ height: "150px" }}>
                    ফি নির্ধারণ
                  </div>
                </Link>
                <Link to="/accounting/monthly-fees">
                  <div className="grid-card" style={{ height: "150px" }}>
                    ফি গ্রহন
                  </div>
                </Link>
                <Link to="/bokeya-vorti-fee">
                  <div className="grid-card" style={{ height: "150px" }}>
                    বকেয়া ভর্তি ফি গ্রহন
                  </div>
                </Link>{" "}
                <Link to="/income-entry">
                  <div className="grid-card" style={{ height: "150px" }}>
                    আয় এন্ট্রি
                  </div>
                </Link>
                <Link to="/expence-entry">
                  <div className="grid-card" style={{ height: "150px" }}>
                    ব্যয় এন্ট্রি
                  </div>
                </Link>
                <Link to="/mashik-fee-report">
                  <div className="grid-card" style={{ height: "150px" }}>
                    আয়-ব্যয় হিসাব
                  </div>
                </Link>{" "}
                <Link to="/teacher-staff">
                  <div className="grid-card" style={{ height: "150px" }}>
                    শিক্ষক/কর্মচারী রেজিস্টার
                  </div>
                </Link>
                <Link to="/payroll">
                  <div className="grid-card" style={{ height: "150px" }}>
                    শিক্ষক/কর্মচারী পেয়রোল
                  </div>
                </Link>
                <Link to="/salary-report">
                  <div className="grid-card" style={{ height: "150px" }}>
                    শিক্ষক/কর্মচারী রিপোর্ট
                  </div>
                </Link>
                <Link to="/doner-member">
                  <div className="grid-card" style={{ height: "150px" }}>
                    দাতা সদস্য রেজিস্টার
                  </div>
                </Link>
                <Link to="/donate-recive">
                  <div className="grid-card" style={{ height: "150px" }}>
                    দাতা সদস্য ফি গ্রহণ
                  </div>
                </Link>
                <Link to="/add-book">
                  <div className="grid-card" style={{ height: "150px" }}>
                    বই এন্ট্রি
                  </div>
                </Link>
                <Link to="/new-sale">
                  <div className="grid-card" style={{ height: "150px" }}>
                    বই বিক্রি
                  </div>
                </Link>{" "}
                <Link to="/manage-sell">
                  <div className="grid-card" style={{ height: "150px" }}>
                    মেনেজ সেল
                  </div>
                </Link>
              </div>
              <div
                className="grid-container pt-2"
                style={{ cursor: "pointer" }}
              ></div>
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
