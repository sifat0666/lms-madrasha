import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { serverUrl } from "../../utils/config";
import PayrollTable from "../Comonents/PayrollTable";

const Payroll = () => {
  const { data } = useQuery("employee", () =>
    fetch(`${serverUrl}/api/employee`).then((res) => res.json())
  );

  const { data: sallery_sheet } = useQuery("sallery-sheet", () =>
    fetch(`${serverUrl}/api/sallery-sheet`).then((res) => res.json())
  );

  // console.log(data, "data");

  return (
    <div className="bg-light m-2 mt-4">
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
          {data?.data.map((item) => (
            <PayrollTable
              sallery_sheet={sallery_sheet}
              key={item.id}
              item={item}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payroll;
