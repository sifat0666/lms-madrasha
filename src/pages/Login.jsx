import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { serverUrl } from "../../utils/config";
// import { serverUrl } from "./../utils/config";/
import toast from "react-hot-toast";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { splitVendorChunkPlugin } from "vite";

const Login = () => {
  const navigate = useNavigate();

  const changePasswordMutation = useMutation({
    mutationFn: (newUser) => {
      return axios.post(`${serverUrl}/api/student`, newUser, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
    onError: (error, variable, context) => {
      // console.log(error.response.data.message);
      toast.error(error.response.data.message);
      console.log(error);
    },
    onSuccess: (data) => {
      toast.success(`Change password successfully`);
      console.log("data student", data?.data.id);
      // setStudentids(data?.data.id);
    },
  });

  const mutation = useMutation({
    mutationFn: (newUser) => {
      return axios.post(`${serverUrl}/api/login`, newUser);
    },
    onError: (error, variable, context) => {
      // console.log(error.response.data.message);
      console.log(error.response.data.message);
      toast.error("Invalid email or password");
    },
    onSuccess: (data) => {
      console.log(data);
      const token = data.data.data.token;
      console.log(token);
      localStorage.setItem("token", token);
      navigate("/dashboard");
      // console.log("first");
      //
    },
  });

  const onSubmit = async (value) => {
    // mutation.mutate(value);
    // console.log(value);

    // axios.post(`${serverUrl}/api/login`, data).then((response) => {
    //   console.log("login res", response);
    // });

    // axios.get(`${serverUrl}/sanctum/csrf-cookie`,  {withCredentials: true}).then((response) => {
    //   console.log("csrf", response);
    //   axios.post(`${serverUrl}/api/login`, value, {withCredentials: true}).then((response) => {
    //     console.log(response);
    //   });
    // });
    mutation.mutate(value);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <div>
      <div
      // className="position-absolute top-0 start-0"
      // style={{ background: "#f5f5f5"   }}
      >
        {/* <!-- Create New User form Start --> */}
        <section class="user-form-section">
          <div class="row">
            <div class="col-md-12 w-100">
              <div class="row">
                <div class="col-12">
                  <form onSubmit={handleSubmit(onSubmit)} class="login-form">
                    <div class="login-container">
                      <div class="row my-2">
                        <div class="col-12">
                          <div class="section-title">
                            <h4>
                              <i class="bi bi-box-arrow-in-right"></i>
                              লগইন করুন
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div class="input-section">
                        <div class="row">
                          <div class="col-12">
                            <div class="row form-group mb-1">
                              <label class="col-12 col-form-label">ইমেইল</label>
                              <div class="col-12 col-sm-12">
                                <input
                                  class="form-control"
                                  type="text"
                                  placeholder="ইমেইল"
                                  {...register("email")}
                                />
                              </div>
                            </div>
                            <div class="row form-group mb-1">
                              <label class="col-12 col-form-label">
                                পাসওয়ার্ডঃ
                              </label>
                              <div class="col-12 col-sm-12 position-relative">
                                <input
                                  class="form-control"
                                  type="password"
                                  placeholder="পাসওয়ার্ড"
                                  id="password"
                                  {...register("password")}
                                />
                                <i
                                  class="bi bi-eye pass-show"
                                  // onclick="passwordshowhide()"
                                ></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="button-group">
                        <button type="submit" class="custom-btn btn-primary">
                          লগইন করুন
                        </button>
                        <a href="/forget-password" class="forgate-pass">
                          <i class="bi bi-shield-lock-fill"></i>
                          <span>পাসওয়ার্ড ভুলে গেছেন ?</span>
                        </a>
                      </div>
                    </div>
                  </form>
                  {/* <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      type="email"
                      {...register("email", {
                        required: "Required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "invalid email address",
                        },
                      })}
                    />
                    {errors.email && errors.email.message}

                    <input
                      {...register("username", {
                        validate: (value) => value !== "admin" || "Nice try!",
                      })}
                    />
                    {errors.username && errors.username.message}

                    <button type="submit">Submit</button>
                  </form> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
