/* eslint-disable array-callback-return */
import React, { useState,useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import OutBillList from "../OutBillList/OutBillList";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";
import useLiquors from "../../../../Hooks/useLiquors";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const OutBill = () => {
  const token = localStorage.getItem("token");
  const { brandsLoaded } = useLiquors();
  const [StartDate, setStartDate] = useState();
  const [EndDate, setEndDate] = useState();
  const front = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => front.current,
  });

  const { data: OutBill, isLoading } = useQuery({
    queryKey: ["OutBill"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getOutBill",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  if (isLoading || brandsLoaded) {
    return <Loader></Loader>;
  }

  const filteredData = OutBill.filter((item) => {
    let filterPass = true;
    const date = moment(item.date).format("DD/MM/YYYY");

    if (StartDate) {
      filterPass = filterPass && moment(StartDate).format("DD/MM/YYYY") <= date;
    }
    if (EndDate) {
      filterPass = filterPass && moment(EndDate).format("DD/MM/YYYY") >= date;
    }
    return filterPass;
  });

  const totalAmountData = filteredData?.map((item) => {
    return Number(item.total.$numberDecimal);
  });
  const totalAmount = totalAmountData?.reduce((a, b) => a + b, 0);

  return (
    <section>
      <div className="title flex justify-center flex-col items-center py-2">
        <div className="flex gap-4">
          <button
            className="my-4 btn btn-error text-white font-bold"
            onClick={handlePrint}
          >
            PRINT
          </button>
          <Link className="commonBtn" to="/user/selfbill">
            Self Bill
          </Link>
        </div>

        <div ref={front}>
        <div>

          <h2 className="font-bold md:text-[1.5rem] text-center">
            बाहर के बिल का फोर्मेट
          </h2>
        <div className="flex gap-4 items-center my-4">
          <h2 className="font-bold text-[1.5rem]">From</h2>
          <div className="flex gap-2 items-center">
            <FaCalendarAlt></FaCalendarAlt>
            <DatePicker
              selected={StartDate}
              onChange={(date) => {
                setStartDate(date);
                console.log(moment(date).format());
              }}
              dateFormat="dd/MM/yyyy"
              placeholderText={"dd/mm/yyyy"}
              className="inputBox"
            />
          </div>

          <h2 className="font-bold text-[1.5rem]">To</h2>
          <div className="flex gap-2 items-center">
            <FaCalendarAlt></FaCalendarAlt>
            <DatePicker
              selected={EndDate}
              name="year"
              onChange={(data) => setEndDate(data)}
              dateFormat="dd/MM/yyyy"
              className="inputBox"
              placeholderText={"dd/mm/yyyy"}
            />
          </div>
        </div>
        <div className="divider my-2"></div>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <td> क्र. सं.</td>
                <th>Date</th>
                <th>ब्राण्ड/ Brand Name </th>
                <th>साईज / ml</th>
                <th>Number / संख्या</th>
                <th>Rate / रेट</th>
                <th>Amount / रकम</th>
              </tr>
            </thead>
            <tbody>
              {(filteredData &&
                filteredData?.map((outBill, index) => {
                  return (
                    <OutBillList
                      key={index}
                      outBill={outBill}
                      index={index}
                    ></OutBillList>
                  );
                })) || (
                <>
                  <p>
                    <span className="text-red-500">No Data Found</span>
                  </p>
                </>
              )}

              <tr>
                <th></th>
                <td></td>
                <td></td>
                <td></td>
                <td className="commonText">Total</td>
                <td className="price">{totalAmount}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
        </div>
        </div>
    </section>
  );
};

export default OutBill;
