import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import { sendSms, serverUrl } from "../../utils/config";

const state = ["Present", "Absent", "Escaped"];

const Attandence = ({ item, otherData }) => {
  const [att, setAtt] = useState();

  const { data: msg } = useQuery("msg", () =>
    fetch(`${serverUrl}/api/msg/${1}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/attendance`, data, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
    onError: (error, variable, context) => {
      console.log(error.response.data.message);
      // toast.error(error.response.data.message);
    },
    onSuccess: async (data) => {
      console.log("userdata", data.data);
      toast.success("submitted successfully");

      const student = await axios.get(
        `${serverUrl}/api/student/${data?.data.student_id}`
      );

      console.log("msg", msg);
      if (data?.data.attandance === "Absent") {
        if (true) {
          sendSms(
            student?.data.phn_no,
            `${student?.data.student_name} আজকে ${data?.data.date} তারিখে অনুপস্থিত রয়েছে`
          );
        }
      }
      if (data?.data.attandance === "Present") {
        if (true) {
          sendSms(
            student?.data.phn_no,
            `${student?.data.student_name} আজকে ${data?.data.date} তারিখে উপস্থিত রয়েছে`
          );
        }
      }
      if (data?.data.attandance === "Escaped") {
        if (true) {
          sendSms(
            student?.data.phn_no,
            `${student?.data.student_name} আজকে ${data?.data.date} তারিখে ক্লাস থেকে পালিয়েছে`
          );
        }
      }
    },
  });

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // e.preventDefault();

    const params = {
      student_id: item.id,
      name: item.student_name,
      class: item.class,
      roll: item.roll,
      attandance: data.att,
      ...otherData,
    };

    console.log(params);

    mutation.mutate(params);
  };

  return (
    <>
      <tr>
        <td className="min-vw-10">{item.id}</td>
        <td className="min-vw-10">{item.student_name}</td>
        <td className="min-vw-10">{item.roll}</td>
        <td className="min-vw-10">{item.phn_no}</td>
        <td>
          <div className="entrytype-option justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex" }}>
              <select
                className="form-select"
                size="4"
                style={{ border: "none" }}
                {...register("att")}
              >
                {state?.map((item) => (
                  <option
                    key={item.id}
                    // onClick={() => setClasss(item.academicYear)}
                    onChange={(e) => setAtt(e.target.value)}
                    // style={{ height: "30px" }}
                    className="w-auto p-2 text-justify"
                    style={{ alignItems: "center" }}
                  >
                    {item}
                  </option>
                ))}
              </select>
              <div className="d-flex align-items-center m-2">
                <button className="custom-btn btn-primary h-10" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex" }}>
            <select
              className="form-select"
              size="4"
              style={{ border: "none" }}
              {...register("att")}
            >
              {state?.map((item) => (
                <option
                  key={item.id}
                  // onClick={() => setClasss(item.academicYear)}
                  onChange={(e) => setAtt(e.target.value)}
                  style={{ height: "30px" }}
                  className=""
                >
                  {item}
                </option>
              ))}
            </select>
            <button type="submit" className="btn">
              Submit
            </button>
          </form> */}
        </td>
        <td></td>
      </tr>
    </>
  );
};

export default Attandence;
