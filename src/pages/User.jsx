import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import { serverUrl } from "../../utils/config";

const User = () => {
  const { data, isLoading } = useQuery(["me"], () =>
    axios.get(`${serverUrl}/api/user`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
  );

  const nameMutation = useMutation({
    mutationFn: (user) => {
      return axios.post(`${serverUrl}/api/update-username`, user, {
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
      console.log(data);
      toast.success(`username updated successfully`);
    },
  });

  const passwordMutation = useMutation({
    mutationFn: (user) => {
      return axios.post(`${serverUrl}/api/change-password`, user, {
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
      console.log(data);
      toast.success(`password updated successfully`);
    },
  });

  const { register, handleSubmit } = useForm();
  const { register: pwregister, handleSubmit: pwhandleSubmit } = useForm();
  const [name, setName] = useState();
  const [oldpw, setOldpw] = useState();
  const [newpw, setNewpw] = useState();

  const onSubmit = (data) => {
    console.log(data);
    nameMutation.mutate(data);
  };

  const onPwSubmit = (data) => {
    console.log(data);
    passwordMutation.mutate(data);
  };

  return (
    <div class="container p-5">
      <div class="row gutters">
        <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div class="card h-100">
            <div class="card-body">
              <div class="account-settings">
                <div class="user-profile">
                  <h5 class="user-name">{data?.data.name}</h5>
                  <h6 class="user-email">{data?.data.email}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
          <div class="card h-100">
            <div class="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="row gutters">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 class="mb-2 text-primary">Change Name</h6>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="fullName">Name</label>
                      <input
                        {...register("name")}
                        type="text"
                        class="form-control"
                        id="fullName"
                        placeholder="Enter new name"
                      />
                    </div>
                  </div>
                </div>
                <div class="row gutters">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="text-right">
                      <button
                        type="submit"
                        id="submit"
                        name="submit"
                        class="btn btn-primary"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <form onSubmit={pwhandleSubmit(onPwSubmit)}>
                <div class="row gutters">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 class="mt-3 mb-2 text-primary">Change password</h6>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                    <div class="form-group">
                      <label for="Street">Old Password</label>
                      <input
                        type="name"
                        class="form-control"
                        {...pwregister("current_password")}
                        id="Street"
                        placeholder="Enter Old Password"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"></div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-2">
                    <div class="form-group">
                      <label for="sTate">New Password</label>
                      <input
                        type="text"
                        class="form-control"
                        id="sTate"
                        placeholder="Enter New Password"
                        {...pwregister("password")}
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"></div>
                </div>
                <div class="row gutters">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="text-right">
                      <button
                        type="submit"
                        id="submit"
                        name="submit"
                        class="btn btn-primary"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
