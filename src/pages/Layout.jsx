import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { serverUrl } from "../../utils/config";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  // Validates if the current pathname includes one the routes you want to hide the sidebar is present on the current url
  // If that's true render null instead of the sidebar

  // if (withouSidebarRoutes.some((item) => pathname.includes(item))) return null;
  if (
    pathname === "/" ||
    pathname === "/forget-password" ||
    pathname.includes("password-reset")
  )
    return null;

  const navigate = useNavigate();
  // import {navigate} = useNavigate()

  const { data, isLoading } = useQuery(["me"], () =>
    axios.get(`${serverUrl}/api/user`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
  );

  return (
    <div>
      {/* <!-- Header Section Start--> */}
      <header class="header-section d-print-none">
        <div class="containers">
          <div class="navigaion-container">
            <div class="main-navbar my-4">
              <div class="top-navbar">
                <nav class="navbar navbar-bg navbar-expand-lg">
                  <div class="container-fluid">
                    <button
                      class="navbar-toggler"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasNavbar"
                      aria-controls="offcanvasNavbar"
                    >
                      <span class="toggler-icon">
                        <i class="bi bi-list text-white"></i>
                      </span>
                    </button>
                    <div
                      class="offcanvas offcanvas-start"
                      tabindex="-1"
                      id="offcanvasNavbar"
                      aria-labelledby="offcanvasNavbarLabel"
                    >
                      <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                          মাদ্রাসা ম্যানেজমেন্ট সফটওয়্যার
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="offcanvas-body">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-between">
                          <Link to="/dashboard">
                            <li class="nav-item">
                              <a class="nav-link" href="/dashboard">
                                <i class="bi bi-house-door-fill"></i>
                                ড্যাশবোর্ড
                              </a>
                            </li>
                          </Link>

                          <li class="nav-item dropdown">
                            <a
                              class="nav-link dropdown-toggle"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              নিরাপত্তা
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <Link to="/newuser">
                                  <div class="dropdown-item">
                                    নতুন ব্যবহারকারী
                                  </div>
                                </Link>
                              </li>
                              <li>
                                <Link to="/institute-info">
                                  <div class="dropdown-item">
                                    প্রতিষ্ঠানের তথ্য
                                  </div>
                                </Link>
                              </li>
                              <li>
                                <Link to="/developer-contact">
                                  <a class="dropdown-item">
                                    সফটওয়্যার ডেভেলপমেন্ট কোম্পানি
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <a class="dropdown-item" href="#">
                                  ব্যাকআপ
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class="nav-item dropdown">
                            <a
                              class="nav-link dropdown-toggle"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              হিসাব নিকাশ
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <Link to="accounting/fund">
                                  <p class="dropdown-item">ফান্ডঃ যোগঃ</p>
                                </Link>
                              </li>
                              <li>
                                <Link to="accounting/payment-system">
                                  <p class="dropdown-item">
                                    পেমেন্ট সিস্টেম যোগঃ
                                  </p>
                                </Link>
                              </li>
                              {/* <li>
                                <Link to="/accounting/hishab-nikash">
                                  <p class="dropdown-item">হিসাব নিকাশ</p>
                                </Link>
                              </li> */}
                              {/* <li>
                                <Link to="/income-expence-entry">
                                  {" "}
                                  <a
                                    class="dropdown-item"
                                    href="./pages/incomeExpenceEntry.html"
                                  >
                                    আয়-ব্যয় এন্ট্রি
                                  </a>
                                </Link>
                              </li> */}
                              <li>
                                <Link to="/income-entry">
                                  <p
                                    class="dropdown-item"
                                    // href="/pages/income-entry.html"
                                  >
                                    {" "}
                                    আয় এন্ট্রি
                                  </p>
                                </Link>
                              </li>
                              <li>
                                <Link to="/expence-entry">
                                  {" "}
                                  <p
                                    class="dropdown-item"
                                    // href="/pages/expenceEntry.html"
                                  >
                                    ব্যায় এন্ট্রি
                                  </p>
                                </Link>
                              </li>
                              <li>
                                <Link to="/fee-name">
                                  <p class="dropdown-item menu-item">
                                    <span>ফি এর নাম এন্ট্রি</span>
                                    <span>CTRL+N</span>
                                  </p>
                                </Link>
                              </li>
                              <li>
                                <Link to="/fees-determination">
                                  <p class="dropdown-item menu-item">
                                    <span>ফি নির্ধারণ</span>
                                    <span>CTRL+N</span>
                                  </p>
                                </Link>
                              </li>
                              {/* <li>
                                <a class="dropdown-item menu-item" href="#">
                                  <span>ভর্তি ফি আদায়</span>
                                  <span>CTRL+A</span>
                                </a>
                              </li> */}
                              {/* <li>
                                <a
                                  style={{ textDecoration: "none" }}
                                  class="dropdown-item menu-item"
                                  href="#"
                                >
                                  <span>মাসিক ফি সেটিংস</span>
                                  <span>CTRL+C</span>
                                </a>
                              </li> */}
                              <li>
                                <Link to="/mashik-fee-report">
                                  <p
                                    class="dropdown-item menu-item"
                                    // href="./pages/report.html"
                                  >
                                    <span>মাসিক ফির রিপোর্ট</span>
                                  </p>
                                </Link>

                                <Link to="/accounting/monthly-fees">
                                  <p
                                    class="dropdown-item menu-item"
                                    // href="./pages/Accounting/monthly-fees.html"
                                  >
                                    <span>মাসিক ফি গ্রহণ</span>
                                  </p>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li class="nav-item dropdown">
                            <a
                              class="nav-link dropdown-toggle"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              শিক্ষার্থী
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <Link to="/students">
                                  <div class="dropdown-item">শিক্ষাবর্ষ</div>
                                </Link>
                              </li>
                              <li>
                                <Link to="/class-entry">
                                  <div
                                    class="dropdown-item"
                                    // href="./pages/classEntry.html"
                                  >
                                    {" "}
                                    মারহালা/ শ্রেণী
                                  </div>
                                </Link>
                              </li>
                              {/* <li>
                                <a class="dropdown-item" href="#">
                                  মারহালার গ্রুফ
                                </a>
                              </li> */}
                              {/* <li>
                                <a class="dropdown-item" href="#">
                                  বিষয়/কিতাব
                                </a>
                              </li> */}
                              <li>
                                <Link to="/student-info">
                                  <a
                                    class="dropdown-item"
                                    // href="./pages/students-info.html"
                                  >
                                    শিক্ষার্থীর তথ্য
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link to="/bokeya-vorti-fee">
                                  <a
                                    class="dropdown-item"
                                    // href="./pages/students-info.html"
                                  >
                                    বকেয়া ভর্তি ফি
                                  </a>
                                </Link>
                              </li>{" "}
                              <li>
                                <Link to="/class-migration">
                                  <a
                                    class="dropdown-item"
                                    href="./pages/class-migration.html"
                                  >
                                    শিক্ষার্থীর ক্লাস পরিবর্তন
                                  </a>
                                </Link>
                              </li>
                              {/* <li>
                                <Link to="student-idcard">
                                  <a
                                    class="dropdown-item"
                                    // href="./pages/Report/studentID-card.html"
                                  >
                                    আলাদা আইডি কার্ড গেইট পাস ও ছুটি
                                  </a>
                                </Link>
                              </li> */}
                              <li>
                                <Link to="/student-attandence">
                                  {" "}
                                  <a
                                    class="dropdown-item"
                                    // href="./pages/Attendance/stuattendence.html"
                                  >
                                    শিক্ষার্থীর হাজিরা
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link to="student-report">
                                  <a
                                    class="dropdown-item"
                                    href="./pages/report.html"
                                  >
                                    রিপোর্ট
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li class="nav-item dropdown">
                            <a
                              class="nav-link dropdown-toggle"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              পরীক্ষা
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <Link to="/exam-entry">
                                  <a
                                    class="dropdown-item"
                                    // href="./pages/Exam/exam-entry.html"
                                  >
                                    পরীক্ষার নাম ফি এন্ট্রি
                                  </a>
                                </Link>
                              </li>
                              {/* <li>
                                <Link to="/exam-fees-determination">
                                  <a
                                    class="dropdown-item"
                                    // href="./pages/Exam/exam-fees-dertimation.html"
                                  >
                                    পরীক্ষার ফি নির্ধাণ
                                  </a>
                                </Link>
                              </li> */}
                              <li>
                                <Link to="/result-condition">
                                  <a
                                    class="dropdown-item"
                                    // href="./pages/Exam/result-condition.html"
                                  >
                                    ফলাফল কন্ডিশন
                                  </a>
                                </Link>
                              </li>
                              {/* <li>
                                <Link to="/hishab-nikash">
                                  <a class="dropdown-item">
                                    পরীক্ষার আয় ব্যায়
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link to="/admitcard-print">
                                  <a
                                    class="dropdown-item"
                                    // href="./pages/Report/admitcard-print.html"
                                  >
                                    আলাদা প্রবেশপত্র
                                  </a>
                                </Link>
                              </li> */}
                              <li>
                                <Link to="exam-report">
                                  <a
                                    class="dropdown-item"
                                    // href="./pages/Report/exam-report.html"
                                  >
                                    পরীক্ষার রিপোর্ট
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li class="nav-item dropdown">
                            <a
                              class="nav-link dropdown-toggle"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              ফলাফল
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <Link to="marks-entry">
                                  {" "}
                                  <a
                                    class="dropdown-item"
                                    // href="./pages/Exam/marks-entry.html"
                                  >
                                    ফলাফল এন্ট্রি
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link to="mark-sheet-class">
                                  {" "}
                                  <a
                                    class="dropdown-item"
                                    // href="./pages/Exam/mark-sheet.html"
                                  >
                                    ক্লাস ভিত্তিক মার্কশিট
                                  </a>
                                </Link>
                              </li>{" "}
                              <li>
                                <Link to="mark-sheet">
                                  {" "}
                                  <a
                                    class="dropdown-item"
                                    // href="./pages/Exam/mark-sheet.html"
                                  >
                                    মার্কশিট
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li class="nav-item dropdown">
                            <a
                              class="nav-link dropdown-toggle"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              শিক্ষক
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <Link to="/podobi-entry">
                                  <a class="dropdown-item" href="/podobi-entry">
                                    পদবী এন্ট্রি
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link to="/teacher-staff">
                                  <a
                                    class="dropdown-item"
                                    href="./pages/HR-Payroll/teachers-staff.html"
                                  >
                                    {" "}
                                    শিক্ষক ও কর্মচারী
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link to="/payroll">
                                  <a class="dropdown-item" href="#">
                                    পেরোল তৈরী
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link to="/monthly-entry">
                                  <a
                                    class="dropdown-item"
                                    // href="./pages/HR-Payroll/month-entry.html"
                                  >
                                    শিক্ষকদের মাস এন্ট্রি
                                  </a>
                                </Link>
                              </li>
                              {/* <li>
                                <Link to="sallary-sheet">
                                  {" "}
                                  <a
                                    class="dropdown-item"
                                    // href="./pages/HR-Payroll/sallary-sheet.html"
                                  >
                                    বেতন শীট
                                  </a>
                                </Link>
                              </li> */}
                              <li>
                                <Link to="/pay-sallary">
                                  <a
                                    class="dropdown-item"
                                    // href="./pages/HR-Payroll/pay-sallary.html"
                                  >
                                    বেতন প্রদান
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link to="/salary-report">
                                  {" "}
                                  <a
                                    class="dropdown-item"
                                    href="./pages/Report/salary-report.html"
                                  >
                                    রিপোর্ট
                                  </a>
                                </Link>
                              </li>
                              {/* <li>
                                <Link to="/individual-salary-sheet">
                                  <a
                                    class="dropdown-item"
                                    // href="./pages/Report/individual-salary-sheet.html"
                                  >
                                    শিক্ষকদের বেতন সিট প্রিন্ট
                                  </a>
                                </Link>
                              </li> */}
                            </ul>
                          </li>
                          <li class="nav-item dropdown">
                            <a
                              class="nav-link dropdown-toggle"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              দাতা সদস্য
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <Link to="doner-member">
                                  <a
                                    class="dropdown-item"
                                    // href="./Donor-Member/donor-member.html"
                                  >
                                    দাতা সদস্যের তথ্য
                                  </a>
                                </Link>
                              </li>
                              {/* <li>
                                <a class="dropdown-item" href="#">
                                  তালিকা তৈরি
                                </a>
                              </li> */}
                              <li>
                                <Link to="/donate-recive">
                                  <a
                                    class="dropdown-item"
                                    // href="./Donor-Member/donat-receive.html"
                                  >
                                    দাতা সদস্যের ফি গ্রহণ
                                  </a>
                                </Link>
                              </li>
                              {/* <li>
                                <Link to="/report">
                                  <a class="dropdown-item" href="./report.html">
                                    রিপোর্ট
                                  </a>
                                </Link>
                              </li> */}
                            </ul>
                          </li>
                          <li class="nav-item dropdown">
                            <a
                              class="nav-link dropdown-toggle"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              বই বিক্রি
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <Link to="/add-book">
                                  {" "}
                                  <a
                                    class="dropdown-item"
                                    // href="./pages/Library/addbook.html"
                                  >
                                    বই যোগ করুন
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link to="/new-sale">
                                  <a
                                    class="dropdown-item"
                                    // href="./pages/Library/new-sale.html"
                                  >
                                    নতুন বিক্রি
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link to="/manage-sell">
                                  <a
                                    class="dropdown-item"
                                    // href="./pages/Library/manage-sale.html"
                                  >
                                    ম্যনেজ সেল
                                  </a>
                                </Link>
                              </li>
                              {/* <li>
                                <Link to="invoice-details">
                                  <a
                                    class="dropdown-item"
                                    // href="./pages/Library/invoice-details.html"
                                  >
                                    ইনভয়েসের বিবরণ
                                  </a>
                                </Link>
                              </li> */}
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <div class="nav-right">
              {/* <div class="notification">
                <a href="">
                  <i class="bi bi-bell-fill"></i>
                </a>
              </div> */}
              <div class="user-menu">
                {/* <!--Desktop--> */}
                <ul class="list-unstyled d-none d-lg-inline-block">
                  {data ? (
                    <li class="user-menu-item">
                      {/* <i class="bi bi-gear-fill"></i> */}
                      <a href="/user">
                        {isLoading ? "loading..." : data?.data.name}
                      </a>
                    </li>
                  ) : (
                    <></>
                  )}
                  <li class="user-menu-item">
                    <i class="bi bi-gear-fill"></i>
                    <Link to="/settings">
                      <a style={{ textDecoration: "none" }} href="">
                        সেটিংস
                      </a>
                    </Link>
                  </li>{" "}
                  <li class="user-menu-item">
                    <i class="bi bi-info-circle-fill"></i>
                    <a href="">সাহায্য</a>
                  </li>
                  <li class="user-menu-item">
                    <i class="bi bi-box-arrow-in-right"></i>
                    <div
                      onClick={async () => {
                        const data = await axios.post(
                          `${serverUrl}/api/logout`,
                          {},
                          {
                            headers: {
                              accept: "application/json",
                              Authorization: `Bearer ${localStorage.getItem(
                                "token"
                              )}`,
                            },
                          }
                        );

                        navigate("/");
                        console.log("logout", data);

                        // localStorage.clear();
                        // window.location.reload();
                        // navigate("/login");
                        // toast.success("logged out");

                        // navigate("/");
                      }}
                    >
                      {" "}
                      লগ আউট
                    </div>
                  </li>
                </ul>
                {/* <!-- Mobile & Tab --> */}
                <li class="list-unstyled dropdown d-lg-none mobile-user">
                  <a
                    class="dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span class="user-avator">
                      <i class="bi bi-person-circle"></i>
                    </span>
                  </a>
                  <ul class="dropdown-menu">
                    {data ? (
                      <li class="user-menu-item">
                        {/* <i class="bi bi-gear-fill"></i> */}
                        <a href="/user">
                          {isLoading ? "loading..." : data?.data.name}
                        </a>
                      </li>
                    ) : (
                      <></>
                    )}
                    {/* data?.data.name */}
                    <li class="dropdown-item">
                      <a href="">
                        <i class="bi bi-gear-fill"></i>
                        {data?.data.name}
                      </a>
                    </li>
                    <li class="user-menu-item">
                      <i class="bi bi-gear-fill"></i>
                      <Link to="/settings">
                        <a style={{ textDecoration: "none" }} href="">
                          সেটিংস
                        </a>
                      </Link>
                    </li>{" "}
                    <li class="dropdown-item">
                      <a href="">
                        <i class="bi bi-info-circle-fill"></i>
                        সাহায্য
                      </a>
                    </li>
                    <li class="dropdown-item">
                      <div
                        onClick={async () => {
                          const data = await axios.post(
                            `${serverUrl}/api/logout`,
                            {},
                            {
                              headers: {
                                accept: "application/json",
                                Authorization: `Bearer ${localStorage.getItem(
                                  "token"
                                )}`,
                              },
                            }
                          );

                          navigate("/");
                          console.log("logout", data);

                          // localStorage.clear();
                          // window.location.reload();
                          // navigate("/login");
                          // toast.success("logged out");

                          // navigate("/");
                        }}
                      >
                        {" "}
                        লগ আউট
                      </div>
                    </li>
                  </ul>
                </li>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!--Header Section End--> */}
      <div>{children}</div>
    </div>
  );
};

export default Layout;
