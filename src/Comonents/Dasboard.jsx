import React from "react";
import { useQuery } from "react-query";
import { serverUrl } from "../../utils/config";

const Dasboard = () => {
  const { data } = useQuery("dashboard", () =>
    fetch(`${serverUrl}/api/dashboard`).then((res) => res.json())
  );

  console.log(data);

  return (
    <div>
      {" "}
      {/* <!--Dashbord Container--> */}
      <section className="dashbord-section my-4">
        <div className="containers">
          <div className="row">
            <div className="col-lg-8">
              <div className="grid-container">
                <div className="grid-card">Total Users: {data?.total_user}</div>
                <div className="grid-card">
                  Total Students: {data?.total_student}
                </div>
                {/* <div className="grid-card">Group</div> */}
                {/* <div className="grid-card">Subject</div> */}
                {/* <div className="grid-card">Section</div> */}
                <div className="grid-card">
                  Total Class: {data?.total_class}
                </div>
                {/* <div className="grid-card">Subjects</div> */}
                {/* <div className="grid-card">Report</div> */}
                {/* <div className="grid-card">Group</div> */}
                {/* <div className="grid-card">Subject</div> */}
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
