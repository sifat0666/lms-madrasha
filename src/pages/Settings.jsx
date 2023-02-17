import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { msg, serverUrl } from "../../utils/config";
import { useState } from "react";

const Settings = () => {
  const { register, handleSubmit } = useForm();

  const { data: msg } = useQuery("msg", () =>
    fetch(`${serverUrl}/api/msg/${1}`).then((res) => res.json())
  );

  console.log(msg);

  // const [msg, setMsg] = useState();

  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/msg`, data);
    },
    onError: (error, variable, context) => {
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      toast.success("Settings Saved");
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <div>
      <section className="user-form-section">
        <div className="section-bg">
          <div className="row">
            <div className="col-md-12 w-100">
              <div className="main-container">
                <div className="row">
                  <div className="col-12">
                    <div className="section-title">
                      <h4>সেটিংস্‌</h4>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="bg-white d-flex flex-column justify-content-center align-items-center ">
                        <div class="form-group">
                          <textarea
                            {...register("vorti_msg")}
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="ভর্তি ফি পরবর্তী মেসেজ"
                          />
                        </div>
                        <div class="form-check form-switch p-3">
                          <input
                            {...register("vorti")}
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                            defaultChecked={msg?.vorti}
                          />
                          <label
                            class="form-check-label"
                            for="flexSwitchCheckDefault"
                          >
                            ভর্তি এর মেসেজ যাবে
                          </label>
                        </div>
                        <div class="form-group">
                          <textarea
                            {...register("mashik_msg")}
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="মাসিক ফি গ্রহন পরবর্তী মেসেজ"
                          />
                        </div>
                        <div class="form-check form-switch p-3">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                            {...register("mashik")}
                            defaultChecked={msg?.mashik}
                          />
                          <label
                            class="form-check-label"
                            for="flexSwitchCheckDefault"
                          >
                            মাসিক ফি এর মেসেজ যাবে
                          </label>
                        </div>
                        <div class="form-group">
                          <textarea
                            {...register("khabar_msg")}
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="খাবার ফি গ্রহন পরবর্তী মেসেজ"
                          />
                        </div>
                        <div class="form-check form-switch p-3">
                          <input
                            {...register("khabar")}
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                            defaultChecked={msg?.khabar}
                          />
                          <label
                            class="form-check-label"
                            for="flexSwitchCheckDefault"
                          >
                            খাবার ফি এর মেসেজ যাবে
                          </label>
                        </div>
                        <div class="form-group">
                          <textarea
                            {...register("present_msg")}
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="উপস্থিত এর মেসেজ"
                          />
                        </div>
                        <div class="form-check form-switch p-3">
                          <input
                            {...register("present")}
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                            defaultChecked={msg?.present}
                          />
                          <label
                            class="form-check-label"
                            for="flexSwitchCheckDefault"
                          >
                            উপস্থিত এর মেসেজ যাবে
                          </label>
                        </div>
                        <div class="form-group">
                          <textarea
                            {...register("absent_msg")}
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="অনুপস্থিত এর মেসেজ"
                          />
                        </div>
                        <div class="form-check form-switch p-3">
                          <input
                            {...register("absent")}
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                            defaultChecked={msg?.absent}
                          />
                          <label
                            class="form-check-label"
                            for="flexSwitchCheckDefault"
                          >
                            অনুপস্থিত এর মেসেজ যাবে
                          </label>
                        </div>
                        <div class="form-group">
                          <textarea
                            {...register("escaped_msg")}
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="পালিয়ে গেলে এর মেসেজ"
                          />
                        </div>
                        <div class="form-check form-switch p-3">
                          <input
                            {...register("escaped")}
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                            defaultChecked={msg?.escaped}
                          />
                          <label
                            class="form-check-label"
                            for="flexSwitchCheckDefault"
                          >
                            পালিয়ে গেলে এর মেসেজ যাবে
                          </label>
                          <button
                            type="submit"
                            className="custom-btn btn-primary d-block w-80 m-5"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
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

export default Settings;
