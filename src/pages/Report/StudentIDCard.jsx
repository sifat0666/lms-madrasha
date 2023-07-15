import React from "react";

const StudentIDCard = () => {
  return (
    <div>
      <section className="user-form-section">
        <div className="section-bg">
          <div className="row">
            <div className="col-md-12 w-100">
              <div className="main-container">
                <div className="row d-print-none">
                  <div className="col-12">
                    <div className="section-title" style={{ marginTop: "2px" }}>
                      <h4>শিক্ষার্থীদের আইডি কার্ড</h4>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* <!--Filter Menu Section--> */}
                  <div className="col-lg-4 col-12 col-md-12 d-print-none">
                    <form>
                      <div className="row">
                        <div className="col-12">
                          <div className="filter-menu report-menu">
                            <select
                              className="form-select"
                              size="9"
                              aria-label="size 3 select example"
                              style={{ border: "none" }}
                            >
                              <option>নির্বাচন করুন</option>
                              <option>১. ভর্তি রেজিস্টার নতুন-পুরাতন</option>
                              <option>২. ভর্তি রেজিস্টার ছাত্র-ছাত্রী</option>
                              <option>
                                ৩. ভর্তি রেজিস্টার আবাসিক-অনাবাসিক
                              </option>
                              <option>৪. নতুন পুরাতন শিক্ষার্থীর তালিকা</option>
                              <option>
                                ৫. মারহালাওয়ারী নতুন পুরাতন মোট শিক্ষার্থী
                              </option>
                              <option>
                                ৬. শিক্ষার্থীদের সংক্ষিপ্ত তালিকা দুই কলামে
                              </option>
                              <option selected>৭. অভিবাবকের মোবাইল</option>
                              <option>
                                ৮. মারহালা ওয়ারী কিতাব/বিষয়ের তালিকা
                              </option>
                              <option>
                                ৯. শিক্ষার্থীদের পরিচয় পত্র (আইডি কার্ড)
                              </option>
                              <option>
                                ১০. শিক্ষার্থীদের পরিচয় পত্র (আইডি কার্ড)
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-12">
                          <div className="filter-menu">
                            <select
                              className="form-select"
                              size="4"
                              style={{ border: "none" }}
                            >
                              <option selected>সাল নির্বাচন করুন</option>
                              <option>২০১৮</option>
                              <option>২০১৯</option>
                              <option>২০২০</option>
                              <option>২০২১</option>
                              <option>২০২২</option>
                              <option>২০২৩</option>
                              <option>২০২৪</option>
                              <option>২০২৫</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-12">
                          <div className="filter-menu">
                            <select
                              className="form-select"
                              size="4"
                              style={{ border: "none" }}
                            >
                              <option selected>শ্রেণী নির্বাচন করুন</option>
                              <option>তাকমীল (ক)</option>
                              <option>তাকমীল (খ)</option>
                              <option>মক্তব</option>
                              <option>হিফযুল কুরআন পরীক্ষামুলক মারহালা</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-12">
                          <div className="filter-menu">
                            <select
                              className="form-select"
                              size="4"
                              style={{ border: "none" }}
                            >
                              <option selected>
                                শিক্ষার্থীর ধরণ নির্বাচন করুন
                              </option>
                              <option>নতুন</option>
                              <option>পুরাতন</option>
                              <option>উভয়</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-12">
                          <button
                            type="submit"
                            className="custom-btn btn-primary d-block w-100"
                          >
                            Preview
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* <!--Preview Page Section--> */}
                  <div className="col-lg-8 col-12 col-md-12 mt-lg-0 mt-2">
                    <div className="bg-white d-print-block">
                      <span
                        className="print-button d-print-none"
                        onclick="window.print()"
                      >
                        <i className="bi bi-printer-fill"></i>
                      </span>
                      <div className="pages-title d-print-none">
                        <h5>জামিয়া আরাবিয়া ইমদাদুল ফরিদাবাদ</h5>
                        <p>১১/১২ মাদরাসা রোড, গেন্ডারিয়া, ঢাকা-১২০৪</p>
                        <span>01832-061454 # 027440235</span>
                        <br />
                        <span className="pages-subtitle">
                          শিক্ষার্থীদের আইডি কার্ড
                        </span>
                      </div>
                      <div className="pages-content">
                        {/* <!--filter Section Start--> */}
                        <div className="row my-3 d-print-none">
                          <div className="col-12 col-lg-4 col-md-6">
                            <div className="row">
                              <label className="col-lg-3 col-12 col-md-3 col-form-label info-lable">
                                শিক্ষাবর্ষ
                              </label>
                              <div className="col-lg-9 col-12 col-md-6">
                                <select className="form-select">
                                  <option selected="">
                                    শিক্ষাবর্ষ নির্বাচন করুন
                                  </option>
                                  <option>২০২০</option>
                                  <option>২০২১</option>
                                  <option>২০২১</option>
                                  <option>২০২২</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-lg-4 col-md-6">
                            <div className="row">
                              <label className="col-lg-3 col-12 col-md-3 col-form-label info-lable">
                                শ্রেণী
                                <i className="d-print-none">*</i>
                              </label>
                              <div className="col-lg-9 col-12 col-md-6">
                                <select className="form-select">
                                  <option selected="">
                                    শিক্ষাবর্ষ নির্বাচন করুন
                                  </option>
                                  <option>নাযেরা</option>
                                  <option>হিফযুল কুরআন</option>
                                  <option>ই-দাদী</option>
                                  <option>ইবতিদায়ী আউয়াল</option>
                                  <option>ইবতিদায়ী নানী</option>
                                  <option>উস্তানী আউয়াল</option>
                                  <option>উস্তানী সানী</option>
                                  <option>সানাবী আউয়াল</option>
                                  <option>সানাবী আউয়াল</option>
                                  <option>সানাবী সানী</option>
                                  <option>নিহায়ী আউয়াল</option>
                                  <option>নিহায়ী সানী</option>
                                  <option>তাকমীল</option>
                                  <option>ইফতা ১ম</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-lg-4 col-md-12">
                            <div className="row">
                              <label className="col-lg-6 col-12 col-md-12 col-form-label info-lable">
                                শিক্ষার্থীর ধরণ
                                <i className="d-print-none">*</i>
                              </label>
                              <div className="col-lg-6 col-12 col-md-12">
                                <select className="form-select">
                                  <option selected="">ধরণ</option>
                                  <option>নতুন</option>
                                  <option>পুরাতন</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- filter Section End --> */}
                        {/* <!--ID Card Continer Section Start--> */}
                        <div className="idcard-container">
                          <div className="id-card">
                            <img
                              src="../../assets/images/idcardbg.svg"
                              className="idcard-bg"
                            />
                            <img
                              src="../../assets/images/logo.png"
                              className="idcard-logo"
                            />
                            <div className="idcard-info">
                              <div className="idcard-avator">
                                <img
                                  src="../../assets/images/takrim.jpg"
                                  width="100%"
                                  height="100%"
                                />
                              </div>
                              <div className="idcard-title">পরিচয়পত্র</div>
                              <div className="info">
                                <strong>শিক্ষার্থীর নামঃ</strong>
                                <span>আবু আদনান</span>
                              </div>
                              <div className="info">
                                <strong>পিতার নামঃ</strong>
                                <span>আবু তাহের</span>
                              </div>
                              <div className="info">
                                <strong>মারহালা/শ্রেণীঃ</strong>
                                <span>মক্তব</span>
                              </div>
                              <div className="info">
                                <strong>মোবাইলঃ</strong>
                                <span>০১৮৫৩-৫৬৯৩১১</span>
                              </div>
                              <div className="info">
                                <strong>জাতীয় পরিচয়পত্রঃ</strong>
                                <span>৪৬৫ ৪১২ ৪২৩৯</span>
                              </div>
                              <div className="authorized-sing">
                                <img
                                  src="../../assets/images/authorized-sing.png"
                                  width="80"
                                  height="50"
                                  className="sign"
                                />
                                <span>মুহতামিম এর সাক্ষর</span>
                              </div>
                            </div>
                          </div>
                          <div className="id-card">
                            <img
                              src="../../assets/images/idcardbg.svg"
                              className="idcard-bg"
                            />
                            <img
                              src="../../assets/images/logo.png"
                              className="idcard-logo"
                            />
                            <div className="idcard-info">
                              <div className="idcard-avator">
                                <img
                                  src="../../assets/images/takrim.jpg"
                                  width="100%"
                                  height="100%"
                                />
                              </div>
                              <div className="idcard-title">পরিচয়পত্র</div>
                              <div className="info">
                                <strong>শিক্ষার্থীর নামঃ</strong>
                                <span>আবু আদনান</span>
                              </div>
                              <div className="info">
                                <strong>পিতার নামঃ</strong>
                                <span>আবু তাহের</span>
                              </div>
                              <div className="info">
                                <strong>মারহালা/শ্রেণীঃ</strong>
                                <span>মক্তব</span>
                              </div>
                              <div className="info">
                                <strong>মোবাইলঃ</strong>
                                <span>০১৮৫৩-৫৬৯৩১১</span>
                              </div>
                              <div className="info">
                                <strong>জাতীয় পরিচয়পত্রঃ</strong>
                                <span>৪৬৫ ৪১২ ৪২৩৯</span>
                              </div>
                              <div className="authorized-sing">
                                <img
                                  src="../../assets/images/authorized-sing.png"
                                  width="80"
                                  height="50"
                                  className="sign"
                                />
                                <span>মুহতামিম এর সাক্ষর</span>
                              </div>
                            </div>
                          </div>
                          <div className="id-card">
                            <img
                              src="../../assets/images/idcardbg.svg"
                              className="idcard-bg"
                            />
                            <img
                              src="../../assets/images/logo.png"
                              className="idcard-logo"
                            />
                            <div className="idcard-info">
                              <div className="idcard-avator">
                                <img
                                  src="../../assets/images/takrim.jpg"
                                  width="100%"
                                  height="100%"
                                />
                              </div>
                              <div className="idcard-title">পরিচয়পত্র</div>
                              <div className="info">
                                <strong>শিক্ষার্থীর নামঃ</strong>
                                <span>আবু আদনান</span>
                              </div>
                              <div className="info">
                                <strong>পিতার নামঃ</strong>
                                <span>আবু তাহের</span>
                              </div>
                              <div className="info">
                                <strong>মারহালা/শ্রেণীঃ</strong>
                                <span>মক্তব</span>
                              </div>
                              <div className="info">
                                <strong>মোবাইলঃ</strong>
                                <span>০১৮৫৩-৫৬৯৩১১</span>
                              </div>
                              <div className="info">
                                <strong>জাতীয় পরিচয়পত্রঃ</strong>
                                <span>৪৬৫ ৪১২ ৪২৩৯</span>
                              </div>
                              <div className="authorized-sing">
                                <img
                                  src="../../assets/images/authorized-sing.png"
                                  width="80"
                                  height="50"
                                  className="sign"
                                />
                                <span>মুহতামিম এর সাক্ষর</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!--ID Card Continer Section End--> */}
                      </div>
                    </div>
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

export default StudentIDCard;
