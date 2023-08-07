import React from "react";

const Navbar = () => {
  return (
    <div>
      {/* <!-- Header Section Start--> */}
      <header className="header-section d-print-none">
        <div className="containers">
          <div className="navigaion-container">
            <div className="main-navbar my-4">
              <div className="top-navbar">
                <nav className="navbar navbar-bg navbar-expand-lg">
                  <div className="container-fluid">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasNavbar"
                      aria-controls="offcanvasNavbar"
                    >
                      <span className="toggler-icon">
                        <i className="bi bi-list text-white"></i>
                      </span>
                    </button>
                    <div
                      className="offcanvas offcanvas-start"
                      tabindex="-1"
                      id="offcanvasNavbar"
                      aria-labelledby="offcanvasNavbarLabel"
                    >
                      <div className="offcanvas-header">
                        <h5
                          className="offcanvas-title"
                          id="offcanvasNavbarLabel"
                        >
                          মাদ্রাসা ম্যানেজমেন্ট সফটওয়্যার
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="offcanvas-body">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-between">
                          <li className="nav-item">
                            <a className="nav-link" href="./index.html">
                              <i className="bi bi-house-door-fill"></i>
                              ড্যাশবোর্ড
                            </a>
                          </li>
                          <li className="nav-item dropdown">
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              নিরাপত্তা
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <Link to="/NewUser">
                                  <div className="dropdown-item">
                                    নতুন ব্যবহারকারী
                                  </div>
                                </Link>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./pages/institute-info"
                                >
                                  প্রতিষ্ঠানের তথ্য
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  সফটওয়্যার ডেভেলপমেন্ট কোম্পানি
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  ব্যাকআপ
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item dropdown">
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              হিসাব নিকাশ
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./pages/Accounting/hisab-nikash.html"
                                >
                                  হিসাব নিকাশ
                                </a>
                              </li>
                              {/* <li>
                                <a
                                  className="dropdown-item"
                                  href="./pages/incomeExpenceEntry.html"
                                >
                                  আয়-ব্যয় এন্ট্রি
                                </a>
                              </li> */}
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="/pages/income-entry.html"
                                >
                                  {" "}
                                  আয় এন্ট্রি
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="/pages/expenceEntry.html"
                                >
                                  ব্যায় এন্ট্রি
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item menu-item"
                                  href="./pages/fees-determination.html"
                                >
                                  <span>ফি নির্ধারণ</span>
                                  <span>CTRL+N</span>
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item menu-item" href="#">
                                  <span>ভর্তি ফি আদায়</span>
                                  <span>CTRL+A</span>
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item menu-item" href="#">
                                  <span>মাসিক ফি সেটিংস</span>
                                  <span>CTRL+C</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item menu-item"
                                  href="./pages/report.html"
                                >
                                  <span>মাসিক ফির রিপোর্ট</span>
                                </a>
                                <a
                                  className="dropdown-item menu-item"
                                  href="./pages/Accounting/monthly-fees.html"
                                >
                                  <span>মাসিক ফি গ্রহণ</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item dropdown">
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              শিক্ষার্থী
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./pages/students.html"
                                >
                                  শিক্ষাবর্ষ
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./pages/classEntry.html"
                                >
                                  {" "}
                                  মারহালা/ শ্রেণী
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  মারহালার গ্রুফ
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  বিষয়/কিতাব
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./pages/students-info.html"
                                >
                                  শিক্ষার্থীর তথ্য
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./pages/class-migration.html"
                                >
                                  শিক্ষার্থীর ক্লাস পরিবর্তন
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./pages/Report/studentID-card.html"
                                >
                                  আলাদা আইডি কার্ড গেইট পাস ও ছুটি
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./pages/Attendance/stuattendence.html"
                                >
                                  শিক্ষার্থীর হাজিরা
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./pages/report.html"
                                >
                                  রিপোর্ট
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item dropdown">
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              পরীক্ষা
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./pages/Exam/exam-entry.html"
                                >
                                  পরীক্ষার নাম এন্ট্রি
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./pages/Exam/exam-fees-dertimation.html"
                                >
                                  পরীক্ষার ফি নির্ধাণ
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./pages/Exam/result-condition.html"
                                >
                                  ফলাফল কন্ডিশন
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  পরীক্ষার আয় ব্যায়
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./pages/Report/admitcard-print.html"
                                >
                                  আলাদা প্রবেশপত্র
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./pages/Report/exam-report.html"
                                >
                                  পরীক্ষার রিপোর্ট
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item dropdown">
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              ফলাফল
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./pages/Exam/marks-entry.html"
                                >
                                  ফলাফল এন্ট্রি
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./pages/Exam/mark-sheet.html"
                                >
                                  মার্কশিট
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item dropdown">
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              শিক্ষক
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a className="dropdown-item" href="#">
                                  পদবী এন্ট্রি
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./pages/HR-Payroll/teachers-staff.html"
                                >
                                  {" "}
                                  শিক্ষক ও কর্মচারী
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  পেরোল তৈরী
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./pages/HR-Payroll/month-entry.html"
                                >
                                  শিক্ষকদের মাস এন্ট্রি
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./pages/HR-Payroll/sallary-sheet.html"
                                >
                                  বেতন শীট
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./pages/HR-Payroll/pay-sallary.html"
                                >
                                  বেতন প্রদান
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./pages/Report/salary-report.html"
                                >
                                  রিপোর্ট
                                </a>
                              </li>
                              {/* <li>
                                <a
                                  className="dropdown-item"
                                  href="./pages/Report/individual-salary-sheet.html"
                                >
                                  শিক্ষকদের বেতন সিট প্রিন্ট
                                </a>
                              </li> */}
                            </ul>
                          </li>
                          <li className="nav-item dropdown">
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              দাতা সদস্য
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./Donor-Member/donor-member.html"
                                >
                                  দাতা সদস্যের তথ্য
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  তালিকা তৈরি
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./Donor-Member/donat-receive.html"
                                >
                                  দাতা সদস্যের ফি গ্রহণ
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./report.html"
                                >
                                  রিপোর্ট
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item dropdown">
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              বই বিক্রি
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./pages/Library/addbook.html"
                                >
                                  বই যোগ করুন
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./pages/Library/new-sale.html"
                                >
                                  নতুন বিক্রি
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./pages/Library/manage-sale.html"
                                >
                                  ম্যনেজ সেল
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./pages/Library/invoice-details.html"
                                >
                                  ইনভয়েসের বিবরণ
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <div className="nav-right">
              <div className="notification">
                <a href="">
                  <i className="bi bi-bell-fill"></i>
                </a>
              </div>
              <div className="user-menu">
                {/* <!--Desktop--> */}
                <ul className="list-unstyled d-none d-lg-inline-block">
                  <li className="user-menu-item">
                    <i className="bi bi-gear-fill"></i>
                    <a href="">সেটিংস</a>
                  </li>
                  <li className="user-menu-item">
                    <i className="bi bi-info-circle-fill"></i>
                    <a href="">সাহায্য</a>
                  </li>
                  <li className="user-menu-item">
                    <i className="bi bi-box-arrow-in-right"></i>
                    <a href=""> লগ আউট</a>
                  </li>
                </ul>
                {/* <!-- Mobile & Tab --> */}
                <li className="list-unstyled dropdown d-lg-none mobile-user">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="user-avator">
                      <i className="bi bi-person-circle"></i>
                    </span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        প্রোপাইল
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="">
                        <i className="bi bi-gear-fill"></i>
                        সেটিংস
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="">
                        <i className="bi bi-info-circle-fill"></i>
                        সাহায্য
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="">
                        <i className="bi bi-box-arrow-in-right"></i>
                        লগ আউট
                      </a>
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

export default Navbar;
