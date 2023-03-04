import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const PayrollTable = ({ item }) => {
  const [name, setName] = useState();
  const [podobi, setPodobi] = useState();
  const [mul_beton, setMul_beton] = useState();
  const [bari_vara, setBariVara] = useState();
  const [chikitsha, setChikitsha] = useState();
  const [otiriktiBeton, setOtiriktoBeton] = useState();
  const [id, setId] = useState();

  const onSubmit = () => {
    console.log({
      name,
      podobi,
      mul_beton,
      bari_vara,
      chikitsha,
      otiriktiBeton,
      id,
    });
  };

  return (
    <tr>
      <td>
        <input
          onChange={(e) => setId(e.target.value)}
          readOnly
          type="text"
          value={item.id}
          style={{ width: "5rem", textAlign: "center", border: "none" }}
        />
      </td>{" "}
      <td>
        <input
          onChange={(e) => setId(e.target.value)}
          type="test"
          readOnly
          value={item.employee_id}
          style={{ width: "5rem", border: "none" }}
        />
      </td>{" "}
      <td>
        <input
          onChange={(e) => setId(e.target.value)}
          type="text"
          readOnly
          value={item.position}
          style={{ width: "5rem", border: "none" }}
        />
      </td>{" "}
      <td>
        <input
          onChange={(e) => setId(e.target.value)}
          type="number"
          defaultValue={0}
          style={{ width: "5rem" }}
        />
      </td>{" "}
      <td>
        <input
          onChange={(e) => setId(e.target.value)}
          type="number"
          defaultValue={0}
          style={{ width: "5rem" }}
        />
      </td>{" "}
      <td>
        <input
          onChange={(e) => setId(e.target.value)}
          type="number"
          defaultValue={0}
          style={{ width: "5rem" }}
        />
      </td>{" "}
      <td>
        <input
          onChange={(e) => setId(e.target.value)}
          type="number"
          defaultValue={0}
          style={{ width: "5rem" }}
        />
      </td>{" "}
      <td>@mdo</td>
      <td>
        <button onClick={onSubmit}>Submit</button>
      </td>
    </tr>
  );
};

export default PayrollTable;
