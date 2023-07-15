import axios from "axios";
import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useMutation } from "react-query";
import { serverUrl } from "../../utils/config";

const PaySalleryTable = ({ item, month, session, notPaidMutate, mutate }) => {
  const [sallery, setSallery] = useState();

  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/monthly-sallery-entry`, data, {
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
      mutate({ session, month });
      notPaidMutate({ session, month });
      console.log("userdasdfata", data.data);
      toast.success("sumitted successfully");
    },
  });

  const submitSallery = () => {
    const data = {
      month,
      session,
      employee_id: item.employee_id,
      podobi: item.podobi,
      name: item.name,
      nirdharito_sallery: item.total,
      sallery: sallery,
      korton: parseInt(item.total) - parseInt(sallery),
    };

    console.log(item?.id);

    mutation.mutate(data);
  };

  return (
    <>
      <th>{item.employee_id}</th>
      <td>{item.podobi}</td>
      <td>{item.name}</td>
      <td>{item.total}</td>
      <td>
        <input
          onChange={(e) => setSallery(e.target.value)}
          style={{ width: "5rem" }}
          type="number"
        />
      </td>
      <td>{sallery && parseInt(item.total) - parseInt(sallery)}</td>
      <td>
        <button onClick={submitSallery}>submit</button>
      </td>
    </>
  );
};

export default PaySalleryTable;
