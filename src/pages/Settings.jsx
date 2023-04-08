import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { msg, serverUrl } from "../../utils/config";
import { useState } from "react";

const Settings = () => {
  const { register: vortiReg, handleSubmit: vortiHandleSubmit } = useForm();
  const { register: mashikReg, handleSubmit: mashikHandleSubmit } = useForm();
  const { register: khabarReg, handleSubmit: khabarHandleSubmit } = useForm();
  const { register: presentReg, handleSubmit: presentHandleSubmit } = useForm();
  const { register: absentReg, handleSubmit: absentHandleSubmit } = useForm();
  const { register: bunkReg, handleSubmit: bunkHandleSubmit } = useForm();

  const { data: msg } = useQuery("msg", () =>
    fetch(`${serverUrl}/api/msg-settings`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  const { data } = useQuery("msg-settings", () =>
    fetch(`${serverUrl}/api/msg-settings`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  const mashik = data?.find((i) => i.type === "mashik");
  const vorti = data?.find((i) => i.type === "vorti");
  const khabar = data?.find((i) => i.type === "khabar");
  const present = data?.find((i) => i.type === "present");
  const absent = data?.find((i) => i.type === "absent");
  const bunk = data?.find((i) => i.type === "bunk");
  console.log(mashik);
  // const [msg, setMsg] = useState();

  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/msg-settings`, data, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
    onError: (error, variable, context) => {
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      toast.success("Settings Saved");
    },
  });

  const onVortiSubmit = (data) => {
    const val = { ...data, type: "vorti" };
    console.log(val);
    mutation.mutate(val);
  };
  const onMashikSubmit = (data) => {
    const val = { ...data, type: "mashik" };
    console.log(val);

    mutation.mutate(val);
  };
  const onKhabarSubmit = (data) => {
    const val = { ...data, type: "khabar" };
    console.log(val);

    mutation.mutate(val);
  };
  const onPresentSubmit = (data) => {
    const val = { ...data, type: "present" };
    console.log(val);

    mutation.mutate(val);
  };
  const onAbsentSubmit = (data) => {
    const val = { ...data, type: "absent" };
    console.log(val);
    console.log("onab", val);

    mutation.mutate(val);
  };
  const onBunkSubmit = (data) => {
    const val = { ...data, type: "bunk" };
    console.log(val);

    mutation.mutate(val);
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
                    {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                    <div className="bg-white d-flex flex-column justify-content-center align-items-center ">
                      <form
                        onSubmit={vortiHandleSubmit(onVortiSubmit)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div class="form-group" style={{ width: "400px" }}>
                          <p>
                            Placeholder: [student_name], [date], [submitted_fee]
                          </p>
                          <textarea
                            {...vortiReg("msg")}
                            type="email"
                            defaultValue={vorti?.msg}
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="ভর্তি ফি পরবর্তী মেসেজ"
                          />
                        </div>
                        <div class="form-check form-switch m-5">
                          <input
                            {...vortiReg("condition")}
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                            defaultChecked={vorti?.condition}
                          />
                          <label
                            class="form-check-label"
                            for="flexSwitchCheckDefault"
                          >
                            ভর্তি ফি এর মেসেজ যাবে
                          </label>
                        </div>
                        <button
                          type="submit"
                          className="custom-btn btn-primary d-block w-80 m-5"
                        >
                          Save
                        </button>
                      </form>
                      <form
                        onSubmit={mashikHandleSubmit(onMashikSubmit)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div class="form-group" style={{ width: "400px" }}>
                          <p>
                            Placeholder: [student_name], [date], [submitted_fee]
                          </p>
                          <textarea
                            {...mashikReg("msg")}
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="মাসিক ফি গ্রহন পরবর্তী মেসেজ"
                            defaultValue={mashik?.msg}
                          />
                        </div>
                        <div class="form-check form-switch m-5">
                          <input
                            {...mashikReg("condition")}
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                            defaultChecked={mashik?.condition}
                          />
                          <label
                            class="form-check-label"
                            for="flexSwitchCheckDefault"
                          >
                            মাসিক ফি এর মেসেজ যাবে
                          </label>
                        </div>
                        <button
                          type="submit"
                          className="custom-btn btn-primary d-block w-80 m-5"
                        >
                          Save
                        </button>
                      </form>
                      <form
                        onSubmit={khabarHandleSubmit(onKhabarSubmit)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div class="form-group" style={{ width: "400px" }}>
                          <p>
                            Placeholder: [student_name], [date], [submitted_fee]
                          </p>
                          <textarea
                            {...khabarReg("msg")}
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="খাবার ফি গ্রহন পরবর্তী মেসেজ"
                            defaultValue={khabar?.msg}
                          />
                        </div>
                        <div class="form-check form-switch m-5">
                          <input
                            {...khabarReg("condition")}
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                            defaultChecked={khabar?.condition}
                          />
                          <label
                            class="form-check-label"
                            for="flexSwitchCheckDefault"
                          >
                            খাবার ফি এর মেসেজ যাবে
                          </label>
                        </div>
                        <button
                          type="submit"
                          className="custom-btn btn-primary d-block w-80 m-5"
                        >
                          Save
                        </button>
                      </form>
                      <form
                        onSubmit={presentHandleSubmit(onPresentSubmit)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div class="form-group" style={{ width: "400px" }}>
                          <p>Placeholder: [student_name], [date]</p>
                          <textarea
                            {...presentReg("msg")}
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="উপস্থিত এর মেসেজ"
                            defaultValue={present?.msg}
                          />
                        </div>
                        <div class="form-check form-switch m-5">
                          <input
                            {...presentReg("condition")}
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                            defaultChecked={present?.condition}
                          />
                          <label
                            class="form-check-label"
                            for="flexSwitchCheckDefault"
                          >
                            উপস্থিত এর মেসেজ যাবে
                          </label>
                        </div>
                        <button
                          type="submit"
                          className="custom-btn btn-primary d-block w-80 m-5"
                        >
                          Save
                        </button>
                      </form>
                      <form
                        onSubmit={absentHandleSubmit(onAbsentSubmit)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div class="form-group" style={{ width: "400px" }}>
                          <p>Placeholder: [student_name], [date]</p>
                          <textarea
                            {...absentReg("msg")}
                            defaultValue={absent?.msg}
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="অনুপস্থিত এর মেসেজ"
                          />
                        </div>
                        <div class="form-check form-switch m-5">
                          <input
                            {...absentReg("condition")}
                            defaultChecked={absent?.condition}
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                            // defaultChecked={msg?.absent}
                          />
                          <label
                            class="form-check-label"
                            for="flexSwitchCheckDefault"
                          >
                            অনুপস্থিত এর মেসেজ যাবে
                          </label>
                        </div>
                        <button
                          type="submit"
                          className="custom-btn btn-primary d-block w-80 m-5"
                        >
                          Save
                        </button>
                      </form>
                      <form
                        onSubmit={bunkHandleSubmit(onBunkSubmit)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div class="form-group" style={{ width: "400px" }}>
                          <p>Placeholder: [student_name], [date]</p>

                          <textarea
                            defaultValue={bunk?.msg}
                            {...bunkReg("msg")}
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="পালিয়ে গেলে এর মেসেজ"
                          />
                        </div>
                        <div class="form-check form-switch m-5">
                          <input
                            defaultChecked={bunk?.condition}
                            {...bunkReg("condition")}
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                          <label
                            class="form-check-label"
                            for="flexSwitchCheckDefault"
                          >
                            পালিয়ে গেলে এর মেসেজ যাবে
                          </label>
                        </div>
                        <button
                          type="submit"
                          className="custom-btn btn-primary d-block w-80 m-5"
                        >
                          Save
                        </button>
                      </form>
                    </div>
                    {/* <button
                            type="submit"
                            className="custom-btn btn-primary d-block w-80 m-5"
                          >
                            Save
                          </button></form> */}
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
