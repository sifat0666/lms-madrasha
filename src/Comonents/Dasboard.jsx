import React from "react";

const Dasboard = () => {
  return (
    <div>
      {" "}
      {/* <!--Dashbord Container--> */}
      <section class="dashbord-section my-4">
        <div class="containers">
          <div class="row">
            <div class="col-lg-8">
              <div class="grid-container">
                <div class="grid-card">Total Users</div>
                <div class="grid-card">Students</div>
                <div class="grid-card">Group</div>
                <div class="grid-card">Subject</div>
                <div class="grid-card">Section</div>
                <div class="grid-card">Class</div>
                <div class="grid-card">Subjects</div>
                <div class="grid-card">Report</div>
                <div class="grid-card">Group</div>
                <div class="grid-card">Subject</div>
              </div>
            </div>
            <div class="col-lg-4 company-about">
              <div class="card">
                <div class="card-body">
                  <div class="card-top text-center">
                    <h4>কওমী মাদ্রাসা ম্যানেজমেন্ট সফটওয়্যার</h4>
                  </div>
                  <div class="card-content text-center">
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
