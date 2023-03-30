import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import { serverUrl } from "../../utils/config";

const PodobiEntry = () => {
  const { register, handleSubmit } = useForm();

  const { data: podobi } = useQuery("podobi", () =>
    fetch(`${serverUrl}/api/podobi`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  const mutation = useMutation({
    mutationFn: (book) => {
      return axios.post(`${serverUrl}/api/podobi`, book, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
    onError: (error, variable, context) => {
      // console.log(error.response.data.message);
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      console.log(data?.data, "data");
      toast.success("Added Successfully");
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    mutation.mutate(data);
  };
  const onDelete = async (id) => {
    const data = await axios.delete(`${serverUrl}/api/podobi/${id}`);
    location.reload();
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="section-title">
          <h4>পদবী এন্ট্রি</h4>
        </div>
        <div className="my-4">
          <form
            className="feesdeterminationa-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="row mb-3">
              <label className="col-sm-12 col-md-12 col-lg-4 col-form-label info-lable">
                পদবির নাম
                <i>*</i>
              </label>
              <div style={{ width: "700px" }} className=" col-md-12 col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="পদবির নাম"
                  {...register("podobi")}
                />
              </div>
            </div>

            <div className="button-container">
              <div className="button-group">
                <input className="custom-btn btn-dark" type="reset"></input>
                <button className="custom-btn btn-primary" type="submit">
                  Save
                </button>
              </div>
            </div>
          </form>
          <div
            style={{ marginLeft: "30%" }}
            className="col-lg-5 col-12 col-md-12"
          >
            <div className="table-data mt-4">
              <table class="table bg-white">
                <thead>
                  <tr>
                    <th scope="col">আইডি</th>
                    <th scope="col">পদবির নাম</th>
                    <span className="action-delete">
                      <i className="bi bi-trash3"></i>
                    </span>
                  </tr>
                </thead>
                <tbody>
                  {podobi?.map((item) => (
                    <tr key={item.id}>
                      <th scope="row">{item.id}</th>
                      <td>{item.podobi}</td>
                      <span
                        onClick={(id) => onDelete(item.id)}
                        className="action-delete"
                      >
                        <i className="bi bi-trash3"></i>
                      </span>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodobiEntry;
