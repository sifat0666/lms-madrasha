import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { serverUrl } from "../../utils/config";
import PayrollTable from "../Comonents/PayrollTable";

const Payroll = () => {
  const { data } = useQuery("employee", () =>
    fetch(`${serverUrl}/api/employee-payroll-null`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );
  console.log("🚀 ~ file: Payroll.jsx:9 ~ Payroll ~ data:", data[0].id);

  const { data: sallery_sheet } = useQuery("sallery-sheet", () =>
    fetch(`${serverUrl}/api/sallery-sheet`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => res.json())
  );

  // console.log(data, "data");

  return (
    <div className="bg-light m-2 mt-4">
      <div className="section-title">
        <h4>বেতন নির্ধারণ</h4>
      </div>
      <table class="table table-bordered" style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th scope="col">আইডি</th>
            <th scope="col">নাম</th>
            <th scope="col">পদবী</th>
            <th scope="col">মূল বেতন</th>
            <th scope="col">বাড়ি ভাড়া</th>
            <th scope="col">চিকিৎসা</th>
            <th scope="col">অতিরিক্ত বেতন</th>
            <th scope="col">মোট বেতন</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {data?.map((item) => (
            <PayrollTable key={item?.id} item={item} />
          ))}
        </tbody>
      </table>
      <div className="section-title">
        <h4>বেতন লিস্ট</h4>
      </div>
      <table class="table table-bordered mt-2" style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th scope="col">আইডি</th>
            <th scope="col">নাম</th>
            <th scope="col">পদবী</th>
            <th scope="col">মূল বেতন</th>
            <th scope="col">বাড়ি ভাড়া</th>
            <th scope="col">চিকিৎসা</th>
            <th scope="col">অতিরিক্ত বেতন</th>
            <th scope="col">মোট বেতন</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {sallery_sheet?.map((item) => (
            <tr>
              <td>{item.employee_id}</td> <td>{item.name}</td>
              <td>{item.podobi}</td>
              <td>{item.mul_beton}</td> <td>{item.bari_vara}</td>
              <td>{item.chikitsha}</td>
              <td>{item.otiriktoBeton}</td>
              <td>{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payroll;
