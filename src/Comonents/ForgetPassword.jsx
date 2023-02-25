import React from "react";

const ForgetPassword = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div class="card text-center" style={{ width: "300px" }}>
        <div class="card-header h5 text-white bg-primary">Password Reset</div>
        <div class="card-body px-5">
          <p class="card-text py-2">
            Enter your email address we will send you a password reset link
          </p>
          <div class="form-outline">
            <input type="email" id="typeEmail" class="form-control my-3" />
            <label class="form-label" for="typeEmail">
              email input
            </label>
          </div>
          <a href="#" class="btn btn-primary w-100">
            Send
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
