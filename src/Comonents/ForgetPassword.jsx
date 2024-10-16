import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation } from "react-query";
import { serverUrl } from "../../utils/config";

const ForgetPassword = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const mutation = useMutation({
    mutationFn: (newUser) => {
      return axios.post(`${serverUrl}/api/send-password-reset-email`, newUser);
    },
    onError: (error, variable, context) => {
      // console.log(error.response.data.message);
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      toast.success(data?.data.message);
    },
  });

  const onSubmit = (values) => mutation.mutate(values);

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <p class="card-text py-2">
              Enter your email address we will send you a password reset link
            </p>
            <div class="form-outline">
              <input
                // type="email"
                {...register("email", {
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
                id="typeEmail"
                class="form-control my-3"
              />
              <p className=" pb-3">{errors.email && errors.email.message}</p>
            </div>
            <button class="btn btn-primary w-100">
              {mutation.isLoading ? "Loading..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
