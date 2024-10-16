import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { serverUrl } from "../../utils/config";

const onSubmit = async (value) => {
  mutation.mutate(value);
  // console.log(value);
};

const FeeName = () => {
  const { data, refetch } = useQuery("fee_name", () =>
    fetch(`${serverUrl}/api/fee-name`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  // console.log(data);
  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/fee-name`, data, {
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
      toast.success("fee created successfully");
      refetch();
    },
  });

  const { register, handleSubmit } = useForm();

  const onSubmit = async (value) => {
    mutation.mutate(value);
    console.log(value);
  };

  const onDelete = async (id) => {
    const data = await axios.delete(`${serverUrl}/api/fee-name/${id}`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    refetch();
    toast.success("deleted successfully");
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
                      <h4>ফী এর নাম এন্ট্রি</h4>
                    </div>
                    <div className="my-4">
                      <form
                        className="feesdeterminationa-form"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <div className="row mb-3">
                          <label className="col-sm-12 col-md-12 col-lg-4 col-form-label info-lable">
                            ফী এর নাম
                            <i>*</i>
                          </label>
                          <div className="col-sm-12 col-md-12 col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="ফী এর নাম"
                              {...register("fee_name")}
                            />
                          </div>
                        </div>

                        <div className="button-container">
                          <div className="button-group">
                            <input
                              className="custom-btn btn-dark"
                              type="reset"
                            ></input>
                            <button
                              className="custom-btn btn-primary"
                              type="submit"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <table class="table bg-white">
                  <thead>
                    <tr>
                      <th scope="col">আইডি</th>
                      <th scope="col">ফী এর নাম</th>
                      {/* <th></th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {data?.data.map((item, i) => (
                      <tr key={item.id}>
                        <th scope="row">{i + 1}</th>
                        <td>{item.fee_name}</td>
                        <th>
                          <span
                            className="action-delete"
                            onClick={(id) => onDelete(item.id)}
                          >
                            <i className="bi bi-trash3"></i>
                          </span>
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeeName;
