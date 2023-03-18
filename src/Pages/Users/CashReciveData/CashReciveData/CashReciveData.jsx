import React, { useState,useRef } from "react";
import useCashRecive from "../CashReciveHooks/useCashRecive";
import Loader from "../../../../Components/Loader/Loader";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import moment from "moment/moment";
import { useReactToPrint } from "react-to-print";

const CashReciveData = () => {
  const { CashReciveData, isLoading } = useCashRecive();
  const [StartDate, setStartDate] = useState();
  const [EndDate, setEndDate] = useState();
  const front = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => front.current,
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (!CashReciveData.length){
    return <div>No data found</div>
  }

  const cashReceive = CashReciveData?.map((items) => items);

  const cashReciveDatas = cashReceive.map((item) => {
    return item.entries.filter((item) => item.type === "OTHER");
  });

  const filteredData = cashReciveDatas.filter((item) => {
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

  console.log(filteredData, "+++++++++++++");

  return (
    <>
     
    <section ref={front}>
      <div className="title flex justify-center items-center flex-col">
        <h2 className="font-bold md:text-[1.5rem] text-center">
          अन्य से नकद प्राप्ति
        </h2>
        <button
        className="commonBtn "
        onClick={handlePrint}
      >
        PRINT
      </button>

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
      </div>
        <div className="divider my-2"></div>

      {/* ************************ all sealy data************** */}

      <div>
        <div className="justify-center items-center flex m-6">
          <table className="table w-11/12">
            <thead>
              <tr>
                <td> क्र. सं.</td>
                <th>Date</th>
                <th>Salesman</th>
                <th>Cash</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => {
                return (
                  <>
                    {item.map((item, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{moment(item.date).format("DD/MM/YYYY")}</td>
                          <td>{item.salesman}</td>
                          <td>{item.cash}</td>
                        </tr>
                      );
                    })}
                  </>
                );
              })}
              <tr>
                <td>
                  <h2 className="font-bold">Total</h2>
                </td>
                <td></td>
                <td></td>
                <td>
                  {filteredData.map((item) => {
                    return item.reduce((acc, item) => {
                      return acc + item.cash;
                    }, 0);
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    </>
  );
};

export default CashReciveData;
