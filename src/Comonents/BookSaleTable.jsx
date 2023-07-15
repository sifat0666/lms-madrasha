import axios from "axios";
import dayjs from "dayjs";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { set, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import ReactToPrint from "react-to-print";
import { serverUrl } from "../../utils/config";

const BookSaleTable = ({ item, namedate, data, instituteInfo }) => {
  const ref = useRef();

  if (!item) return null;

  const user = data?.data?.name;
  const [price, setPrice] = useState();
  const [qty, setQty] = useState(1);

  const total = price && price * qty;

  const onSubmit = async () => {
    if (!namedate.name || !namedate.date || !price) {
      toast.error("Enter price, name and date");
    }
    const data = {
      ...namedate,
      book_name: item.name,
      class: item.class,
      buying_price: item.buying_price,
      selling_price: item.price,
      price,
      total,
      qty,
      submitted_by: user,
    };
    await axios
      .post(`${serverUrl}/api/book-sale`, data, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          toast.success("Sale added successfully");
        }
      });
  };

  return (
    <tr>
      <th>{item?.name}</th>
      <th>{item?.class}</th>
      <th>{item?.buying_price}</th>
      <th>{item?.price}</th>
      <th>
        <input onChange={(e) => setPrice(e.target.value)} type="number" />
      </th>
      <th>
        <input onChange={(e) => setQty(e.target.value)} type="number" />
      </th>
      <th>{total}</th>
      <th>
        <button onClick={onSubmit}>Submit</button>

        <ReactToPrint
          trigger={() => (
            <button className="mx-3" type="button">
              <span className="action-print m-3 items-center">
                <i className="bi bi-printer-fill"></i>
              </span>
            </button>
          )}
          content={() => ref.current}
        />

        <div className="d-none">
          <div ref={ref}>
            <div className="row">
              <div className="col-md-12 w-100">
                <div className="main-container">
                  <div className="bg-white d-print-block" style={{ zIndex: 1 }}>
                    <span
                      className="print-button d-print-none"
                      onclick="window.print()"
                    >
                      <i className="bi bi-printer-fill"></i>
                    </span>
                    <div className="pages-title">
                      <h5>{instituteInfo?.name}</h5>
                      <p>{instituteInfo?.address}</p>
                      <span>{instituteInfo?.num}</span>
                    </div>
                    <div className="row my-3 invoice-title">
                      <div className="col-4 d-flex align-items-center">
                        <div className="slip-no"></div>
                      </div>
                      <div className="col-4 d-flex justify-content-center align-items-center">
                        <span className="">ইনভয়েস</span>
                      </div>
                      <div className="col-4 d-flex align-items-center justify-content-lg-end justify-content-start">
                        <div className="slip-date">
                          <strong>তারিখঃ</strong>
                          <span className="">
                            {dayjs().format("YYYY-MM-DD")}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="pages-content">
                      <div className="row mb-1 customer-info">
                        <div className="col-6 d-flex flex-wrap align-content-center">
                          <div className="donor-name">
                            <strong className="dtitle">কাস্টমারের নামঃ</strong>
                            <div className="border-line w-100">
                              {namedate.name}
                            </div>
                          </div>
                          <div className="donor-name">
                            <strong className="dtitle">পিতার নামঃ</strong>
                            <div className="border-line w-100"></div>
                          </div>
                          <div className="donor-name">
                            <strong className="dtitle">ঠিকানাঃ</strong>
                            <div className="border-line w-100"></div>
                          </div>
                          <div className="donor-name mt-1">
                            <strong className="dtitle">টাকাঃ</strong>
                            <div className="border-all w-100">{total}</div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="donor-name">
                            <strong className="dtitle">মোবাইলঃ</strong>
                            <div className="border-line w-100"></div>
                          </div>
                          <div className="donor-name">
                            <strong className="dtitle">শ্রেণীঃ</strong>
                            <div className="border-line w-100"></div>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-12">
                          <div className="donor-name">
                            <strong className="dtitle">কথায়ঃ</strong>
                            <div className="border-line w-100"></div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <div
                            className="table-responsive"
                            data-pattern="priority-columns"
                          >
                            <table className="table  bg-white table-bordered text-center report-table">
                              <thead className="text-center">
                                <tr>
                                  <th>ক্রঃ</th>
                                  <th>বইয়ের নাম</th>
                                  <th>সংখ্যা</th>
                                  <th>মূল্য</th>
                                  <th>এমাউন্ট</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>০১</td>
                                  <td>{item?.name}</td>
                                  <td>{qty}</td>
                                  <td>{price}</td>
                                  <td>{total}</td>
                                </tr>

                                <tr>
                                  <th colspan="4" className="text-right">
                                    Grand Total
                                  </th>
                                  <td>{total}</td>
                                </tr>
                                <tr>
                                  <th colspan="4" className="text-right">
                                    Paid Amount
                                  </th>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="row mt-5">
                            <div className="col-lg-4 col-12 d-flex justify-content-lg-start justify-content-center">
                              <div className="marksheet-sing">
                                <span>কাস্টমারের স্বাক্ষর</span>
                                <br />
                              </div>
                            </div>
                            <div className="col-lg-4 col-12 d-flex justify-content-lg-end justify-content-center mt-lg-0 mt-3"></div>
                            <div className="col-lg-4 col-12 d-flex justify-content-lg-end justify-content-center mt-lg-0 mt-3">
                              <div className="marksheet-sing">
                                <span>আদায়কারীর স্বাক্ষর</span>
                                <br />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </th>
    </tr>
  );
};

export default BookSaleTable;
