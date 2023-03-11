import React, { useState } from "react";
import usePhonePay from "../PhonePayHooks/usePhonePay";
import Loader from "../../../../Components/Loader/Loader";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import moment from "moment/moment";

const PhonePeToday = () => {
  const { phonePayData, isLoading } = usePhonePay();
  console.log(phonePayData, "phonePayData");
  const [StartDate, setStartDate] = useState();
  const [EndDate, setEndDate] = useState();

  if (isLoading) {
    return <Loader></Loader>;
  }

  const filteredData = phonePayData.filter((item) => {
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

  if (!filteredData && filteredData.length === 0 && filteredData.length) {
    return <h1 className="text-center text-2xl font-bold ">No Data Found</h1>;
  }

  return (
    <section>
      <div className="title">
        <h2 className="font-bold md:text-[1.5rem] text-center">
          फोन पे और आज भुगतान
        </h2>

        <div className="flex gap-4 items-center my-4 z-10">
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

      {/* ************************ all sealy data************** */}

      <div>
        <div className="overflow-x-auto m-6">
          <table className="table w-11/12">
            <thead>
              <tr>
                <td> क्र. सं.</td>
                <th>Date</th>
                <th>Salesman</th>
                <th>Into Account</th>
                <th>Todays Payment</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{moment(item.date).format("DD/MM/YYYY")}</td>
                    <td>{item.salesmen}</td>
                    <td>{item.intoAccount}</td>
                    <td>{item.todaysPayment}</td>
                  </tr>
                );
              })}
              <tr>
                <td>
                  <h2 className="font-bold">Total</h2>
                </td>
                <td></td>
                <td></td>
                <td>
                  {filteredData.reduce((acc, item) => {
                    return acc + item.intoAccount;
                  }, 0)}
                </td>
                <td>
                  {filteredData.reduce((acc, item) => {
                    return acc + item.todaysPayment;
                  }, 0)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PhonePeToday;
