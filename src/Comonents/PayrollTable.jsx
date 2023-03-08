import axios from "axios";
import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import { serverUrl } from "../../utils/config";

const PayrollTable = ({ item }) => {
  console.log("iotem", item);
  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post(`${serverUrl}/api/sallery-sheet`, data);
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

  const [mul_beton, setMul_beton] = useState(0);
  const [bari_vara, setBariVara] = useState(0);
  const [chikitsha, setChikitsha] = useState(0);
  const [otiriktoBeton, setOtiriktoBeton] = useState(0);

  const total =
    parseInt(mul_beton) +
    parseInt(bari_vara) +
    parseInt(chikitsha) +
    parseInt(otiriktoBeton);

  const onSubmit = () => {
    const data = {
      name: item?.employee_id,
      podobi: item?.position,
      mul_beton,
      bari_vara,
      chikitsha,
      otiriktoBeton,
      employee_id: item?.id,
      total,
    };

    mutation.mutate(data);
  };

  return (
    <tr>
      <td>
        <input
          readOnly
          type="text"
          value={item?.id}
          style={{ width: "5rem", textAlign: "center", border: "none" }}
        />
      </td>{" "}
      <td>
        <input
          type="text"
          readOnly
          value={item?.employee_id}
          style={{ width: "5rem", border: "none" }}
        />
      </td>{" "}
      <td>
        <input
          type="text"
          readOnly
          value={item?.position}
          style={{ width: "5rem", border: "none" }}
        />
      </td>{" "}
      <td>
        <input
          onChange={(e) => setMul_beton(e.target.value)}
          type="number"
          style={{ width: "5rem" }}
        />
      </td>{" "}
      <td>
        <input
          onChange={(e) => setBariVara(e.target.value)}
          type="number"
          style={{ width: "5rem" }}
        />
      </td>{" "}
      <td>
        <input
          onChange={(e) => setChikitsha(e.target.value)}
          type="number"
          style={{ width: "5rem" }}
        />
      </td>{" "}
      <td>
        <input
          onChange={(e) => setOtiriktoBeton(e.target.value)}
          type="number"
          style={{ width: "5rem" }}
        />
      </td>{" "}
      <td>{total}</td>
      <td>
        <button onClick={onSubmit}>Submit</button>
      </td>
    </tr>
  );
};

export default PayrollTable;
