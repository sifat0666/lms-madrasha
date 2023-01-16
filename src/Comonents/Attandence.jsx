import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation } from "react-query";
import { serverUrl } from "../../utils/config";

const state = ["Preset", "Absent", "Escaped"];

const Attandence = ({ item, otherData }) => {
  const [att, setAtt] = useState();

  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/attendance`, data);
    },
    onError: (error, variable, context) => {
      // console.log(error.response.data.message);
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      console.log("userdata", data.data);
      toast.success("submitted successfully");
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
        <td>{item.id}</td>
        <td>{item.class}</td>
        <td>{item.student_name}</td>
        <td>{item.roll}</td>
        <td>
          {/* <div className="entrytype-option justify-content-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="options"
                onclick="presetAttendance()"
              />
              <label className="form-check-label" for="options">
                Present
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="options"
                onclick="absentAttendance()"
              />
              <label className="form-check-label" for="options">
                Absent
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="options"
                onclick=""
              />
              <label className="form-check-label" for="options">
                Escaped
              </label>
            </div>
          </div> */}
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
                  style={{ height: "10px" }}
                >
                  {item}
                </option>
              ))}
            </select>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </td>
        <td></td>
      </tr>
    </>
  );
};

export default Attandence;
