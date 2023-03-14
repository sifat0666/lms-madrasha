import axios from "axios";
import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useMutation } from "react-query";
import { serverUrl } from "../../utils/config";

const PaySalleryTable = ({ item, month, session }) => {
  const [fee, setFee] = useState();

  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/doner-member-fee`, data);
    },
    onError: (error, variable, context) => {
      // console.log(error.response.data.message);
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      console.log("userdasdfata", data.data);
      toast.success("sumitted successfully");
    },
  });

  const submitSallery = () => {
    const data = {
      month,
      session,
      doner_id: item?.id,
      name: item?.name,
      nirdharito_fee: item?.fee,
      fee: fee,
      korton: parseInt(item.fee) - parseInt(fee),
    };

    console.log("data", data);

    mutation.mutate(data);
  };

  return (
    <>
      <th>{item.id}</th>
      <td>{item.name}</td>
      <td>{item.fee}</td>
      <td>
        <input
          onChange={(e) => setFee(e.target.value)}
          style={{ width: "5rem" }}
          type="number"
        />
      </td>
      <td>{fee && parseInt(item.fee) - parseInt(fee)}</td>
      <td>
        <button onClick={submitSallery}>submit</button>
      </td>
    </>
  );
};

export default PaySalleryTable;
