import React from "react";

const ContactUsPage = () => {
  return (
    <div className="container py-5 bg-light vh-100 vw-100">
      <div className="row">
        <div className="col-md-12">
          <h1 className="waterfall-header text-center mb-4">Water Drop IT</h1>
        </div>
        <div className="col-md-12">
          {/* <h2 className="text-center mb-3">Contact Us</h2>
          <p className="text-center">
            We'd love to hear from you. Reach out to us using
          </p> */}
          {/* Your contact form HTML goes here */}
        </div>
        <div className="col-md-12 mt-4">
          <h2 className="text-center mb-3">Visit Us</h2>
          <p className="text-center">Feel free to drop by our office:</p>
          <address className="text-center">
            Kamrangir Char, kurarghat
            <br />
            Dhaka, Bangladesh
            <br />
            Zip Code: 1211
          </address>
          {/* <p className="text-center">Email: info@waterfallsoftware.com</p> */}
          <p className="text-center">Phone: +880 1842709014</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
