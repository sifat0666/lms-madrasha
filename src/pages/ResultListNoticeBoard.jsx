import axios from "axios";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import ReactToPrint from "react-to-print";
import { serverUrl } from "../../utils/config";
import { createItemFromDescriptor } from "@babel/core/lib/config/item";

const MarkSheet = () => {
  const ref = useRef();

  const [student, setStudent] = useState();
  const [students, setStudents] = useState();
  const [value, setValue] = useState();
  const [results, setResults] = useState();
  const [division, setDivision] = useState([]);

  console.log("students ", students);

  console.log(student?.id);

  const { data: instituteInfo } = useQuery("instituteInfo", () =>
    fetch(`${serverUrl}/api/institute-info`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );
  const { data: marhalaClass } = useQuery("marhalaclass", () =>
    fetch(`${serverUrl}/api/marhalaclass`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  const { data: academicYear } = useQuery("academicyear", () =>
    fetch(`${serverUrl}/api/academicyear`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  const { data: examName } = useQuery("examEnty", () =>
    fetch(`${serverUrl}/api/exam-entry`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  const fetchResult = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/filter-result-per-class`, data, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
    onError: (error, variable, context) => {
      console.log("🚀 ~ file: MarkSheet.jsx:36 ~ MarkSheet ~ error", error);
    },
    onSuccess: (data) => {
      console.log(data?.data);
      setResults(data?.data);
    },
  });

  const customStudent = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/custom-student-call`, data, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
    onError: (error, variable, context) => {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      console.log("userdata", data.data);
      setStudents(data?.data);
      // window.location.reload(true);
    },
  });

  const fetchDivision = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/division-by-class`, data, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
    onError: (error, variable, context) => {
      console.log("🚀 ~ file: MarkSheet.jsx:36 ~ MarkSheet ~ error", error);
    },
    onSuccess: (data) => {
      console.log("dibi", data?.data);
      setDivision(data?.data);
    },
  });

  const { register, handleSubmit } = useForm();

  function sumAndSortWithPositions(array) {
    const sums = array?.map((subArray) =>
      subArray?.reduce((acc, val) => acc + val, 0)
    );
    const indexedSums = sums?.map((value, index) => ({ value, index }));

    indexedSums?.sort((a, b) => b.value - a.value); // Sort in descending order

    const sortedSumsWithPositions = indexedSums?.map((item, sortedIndex) => ({
      sum: item.value,
      originalIndex: item.index,
      sortedIndex: sortedIndex + 1,
    }));

    return sortedSumsWithPositions;
  }

  const total = students?.map((student) => {
    const studentResults = results
      ?.filter((result) => result.student_id === student.id)
      ?.map((result) => parseInt(result?.number))
      ?.filter((number) => !isNaN(number));
    return studentResults;
  });

  console.log("total", total);

  // Example usage

  const result = sumAndSortWithPositions(total);

  console.log("total", total);
  console.log("sorted array", result);

  const onSubmit = async (data) => {
    console.log("class name data", data);
    customStudent.mutate(data);
    setStudent(student?.data);
    console.log(data);
    setValue(data);
    fetchResult.mutate(data);
    fetchDivision.mutate({
      session: data?.session,
      exam_name: data?.exam,
      class: data?.class,
    });
  };

  console.log("val", value);

  return (
    <div>
      <section className="user-form-section">
        <div className="section-bg">
          <div className="row bg-light h-100  ">
            <div className="col-md-12 w-100">
              <div className="main-container">
                <div className="row d-print-none">
                  <div className="col-12">
                    <div className="section-title" style={{ marginTop: "2px" }}>
                      <h4>মার্কশিট</h4>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-12 col-12 d-print-none">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="row mb-3">
                        <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                          শিক্ষাবর্ষ
                          <i>*</i>
                        </label>
                        <div className="col-lg-8 col-md-8 col-12">
                          <select
                            className="form-select"
                            size="4"
                            style={{ border: "none" }}
                            {...register("session")}
                          >
                            {academicYear?.data.map((item) => (
                              <option
                                key={item.id}
                                // onClick={() => setClasss(item.academicYear)}
                              >
                                {item.academic_year}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                          পরীক্ষার নাম
                          <i>*</i>
                        </label>
                        <div className="col-lg-8 col-md-8 col-12">
                          <select
                            required
                            className="form-select"
                            size="3"
                            style={{ border: "none" }}
                            {...register("exam")}
                          >
                            {examName?.data.map((item) => (
                              <option key={item.id}>{item.exam_name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label className="col-lg-4 col-md-4 col-12 col-form-label info-lable">
                          মারহালা
                          <i>*</i>
                        </label>
                        <div className="col-lg-8 col-md-8 col-12">
                          <select
                            className="form-select"
                            size="4"
                            style={{ border: "none" }}
                            {...register("class")}
                          >
                            {marhalaClass?.data.map((item) => (
                              <option
                                key={item.id}
                                // onClick={() => setClasss(item.academicYear)}
                              >
                                {item.class_name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="row mt-3">
                        <div className="col-12">
                          <button
                            type="submit"
                            className="custom-btn btn-primary d-block w-100"
                          >
                            Preview
                          </button>
                          <ReactToPrint
                            trigger={() => (
                              <button
                                className="custom-btn btn-primary my-3"
                                type="submit"
                              >
                                Save
                              </button>
                            )}
                            content={() => ref.current}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* <!--Preview Page Section--> */}

                  <div className="col-lg-8 col-md-12 col-12 mt-2 mt-lg-0 ">
                    <div ref={ref}>
                      {result?.map((res) => {
                        return <div>{JSON.stringify(res)}</div>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Report Section END -->
            <!--Admit Card Modal--> */}
    </div>
  );
};

export default MarkSheet;
