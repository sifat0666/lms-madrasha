import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { serverUrl } from "../../utils/config";
import { useNavigate } from "react-router-dom";
import {
  PiExamBold,
  PiFilmScriptBold,
  PiFilmScriptThin,
  PiMoneyFill,
  PiStudentBold,
} from "react-icons/pi";
import { Link } from "react-router-dom";
import { MdClass, MdOutlineSell } from "react-icons/md";
import { TbCalendarDue, TbReport } from "react-icons/tb";
import { AiOutlineIdcard, AiFillPrinter } from "react-icons/ai";
import {
  BiBookBookmark,
  BiDonateHeart,
  BiMoneyWithdraw,
  BiPencil,
  BiSolidReport,
} from "react-icons/bi";
import { FiInbox } from "react-icons/fi";
import { BsCashCoin } from "react-icons/bs";
import { FaAmazonPay, FaDonate, FaMoneyBillWaveAlt } from "react-icons/fa";
import { GiBlackBook, GiTeacher } from "react-icons/gi";
// import { FaBeer } from "react-icons/all-files/fa/FaBeer";

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
                  <div className="grid-card" style={{ height: "200px" }}>
                    {" "}
                    <PiStudentBold style={{ fontSize: "80px" }} /> <br />
                    ছাত্র ছাত্রি রেজিস্টার
                  </div>
                </Link>
                <Link to="/class-entry">
                  <div className="grid-card" style={{ height: "200px" }}>
                    {" "}
                    <MdClass style={{ fontSize: "80px" }} /> <br />
                    ক্লাস ও সাবজেক্ট রেজিস্টার
                  </div>
                </Link>
                <Link to="/exam-entry">
                  <div className="grid-card" style={{ height: "200px" }}>
                    {" "}
                    <PiExamBold style={{ fontSize: "80px" }} /> <br />
                    পরিক্ষা রেজিস্টার
                  </div>
                </Link>
                <Link to="/student-report">
                  <div className="grid-card" style={{ height: "200px" }}>
                    {" "}
                    <TbReport style={{ fontSize: "80px" }} /> <br />
                    ভর্তি রিপোর্ট
                  </div>
                </Link>{" "}
                <Link to="/student-report">
                  <div className="grid-card" style={{ height: "200px" }}>
                    {" "}
                    <AiOutlineIdcard style={{ fontSize: "80px" }} /> <br />
                    আইডি কার্ড প্রিন্ট
                  </div>
                </Link>
                <Link to="/exam-report">
                  <div className="grid-card" style={{ height: "200px" }}>
                    {" "}
                    <PiFilmScriptBold style={{ fontSize: "80px" }} /> <br />
                    পরিক্ষা রিপোর্ট
                  </div>
                </Link>
                {/* <div className="grid-card" style={{height: "150px"}}>
                  Total Class: {data?.data?.total_class}
                </div> */}
                <Link to="/marks-entry">
                  <div className="grid-card" style={{ height: "200px" }}>
                    {" "}
                    <BiPencil style={{ fontSize: "80px" }} /> <br />
                    রেজাল্ট এন্ট্রি
                  </div>
                </Link>
                <Link to="/mark-sheet-class">
                  <div className="grid-card" style={{ height: "200px" }}>
                    {" "}
                    <AiFillPrinter style={{ fontSize: "80px" }} /> <br />
                    রেজাল্ট প্রিন্ট
                  </div>
                </Link>
                <Link to="/fees-determination">
                  <div className="grid-card" style={{ height: "200px" }}>
                    {" "}
                    <FiInbox style={{ fontSize: "80px" }} /> <br />
                    ফি নির্ধারণ
                  </div>
                </Link>
                <Link to="/accounting/monthly-fees">
                  <div className="grid-card" style={{ height: "200px" }}>
                    {" "}
                    <BsCashCoin style={{ fontSize: "80px" }} /> <br />
                    ফি গ্রহন
                  </div>
                </Link>
                <Link to="/bokeya-vorti-fee">
                  <div className="grid-card" style={{ height: "200px" }}>
                    {" "}
                    <TbCalendarDue style={{ fontSize: "80px" }} /> <br />
                    বকেয়া ভর্তি ফি গ্রহন
                  </div>
                </Link>{" "}
                <Link to="/income-entry">
                  <div className="grid-card" style={{ height: "200px" }}>
                    {" "}
                    <PiMoneyFill style={{ fontSize: "80px" }} /> <br />
                    আয় এন্ট্রি
                  </div>
                </Link>
                <Link to="/expence-entry">
                  <div className="grid-card" style={{ height: "200px" }}>
                    {" "}
                    <BiMoneyWithdraw style={{ fontSize: "80px" }} /> <br />
                    ব্যয় এন্ট্রি
                  </div>
                </Link>
                <Link to="/mashik-fee-report">
                  <div className="grid-card" style={{ height: "200px" }}>
                    {" "}
                    <FaMoneyBillWaveAlt style={{ fontSize: "80px" }} /> <br />
                    আয়-ব্যয় হিসাব
                  </div>
                </Link>{" "}
                <Link to="/teacher-staff">
                  <div className="grid-card" style={{ height: "200px" }}>
                    {" "}
                    <GiTeacher style={{ fontSize: "80px" }} /> <br />
                    শিক্ষক/কর্মচারী রেজিস্টার
                  </div>
                </Link>
                <Link to="/payroll">
                  <div className="grid-card" style={{ height: "200px" }}>
                    {" "}
                    <FaAmazonPay style={{ fontSize: "80px" }} /> <br />
                    শিক্ষক/কর্মচারী পেয়রোল
                  </div>
                </Link>
                <Link to="/salary-report">
                  <div className="grid-card" style={{ height: "200px" }}>
                    {" "}
                    <BiSolidReport style={{ fontSize: "80px" }} /> <br />
                    শিক্ষক/কর্মচারী রিপোর্ট
                  </div>
                </Link>
                <Link to="/doner-member">
                  <div className="grid-card" style={{ height: "200px" }}>
                    {" "}
                    <BiDonateHeart style={{ fontSize: "80px" }} /> <br />
                    দাতা সদস্য রেজিস্টার
                  </div>
                </Link>
                <Link to="/donate-recive">
                  <div className="grid-card" style={{ height: "200px" }}>
                    {" "}
                    <FaDonate style={{ fontSize: "80px" }} /> <br />
                    দাতা সদস্য ফি গ্রহণ
                  </div>
                </Link>
                <Link to="/add-book">
                  <div className="grid-card" style={{ height: "200px" }}>
                    {" "}
                    <BiBookBookmark style={{ fontSize: "80px" }} /> <br />
                    বই এন্ট্রি
                  </div>
                </Link>
                <Link to="/new-sale">
                  <div className="grid-card" style={{ height: "200px" }}>
                    {" "}
                    <GiBlackBook style={{ fontSize: "80px" }} /> <br />
                    বই বিক্রি
                  </div>
                </Link>{" "}
                <Link to="/manage-sell">
                  <div className="grid-card" style={{ height: "200px" }}>
                    {" "}
                    <MdOutlineSell style={{ fontSize: "80px" }} /> <br />
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
                    <p>+8801842-709014</p>
                    <p>
                      যোগাযোগের সময়
                      <br />
                      সকাল ১০:০০ টা থেকে রাত ১০:০০ টা পর্যন্ত
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
