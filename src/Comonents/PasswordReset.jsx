import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation } from "react-query";
import { serverUrl } from "../../utils/config";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PasswordReset = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const mutation = useMutation({
    mutationFn: (newUser) => {
      return axios.post(`${serverUrl}/api/reset-password/${token}`, newUser);
    },
    onError: (error, variable, context) => {
      // console.log(error.response.data.message);
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      toast.success(data?.data.message);
      navigate("/login");
    },
  });

  const onSubmit = (values) => {
    mutation.mutate({ password: values.email });
  };

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
              Set a new password and we will redirect you to the login page
            </p>
            <div class="form-outline">
              <input
                // type="email"
                {...register("email", {
                  required: "Required",
                })}
                id="typeEmail"
                class="form-control my-3"
              />
              <p className=" pb-3">{errors.email && errors.email.message}</p>
            </div>
            <button class="btn btn-primary w-100">
              {mutation.isLoading ? "Loading..." : "Save"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
