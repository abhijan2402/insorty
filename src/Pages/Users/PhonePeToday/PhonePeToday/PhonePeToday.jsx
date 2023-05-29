import React, { useState, useRef,useEffect } from "react";
import usePhonePay from "../PhonePayHooks/usePhonePay";
import Loader from "../../../../Components/Loader/Loader";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import moment from "moment/moment";
import { useReactToPrint } from "react-to-print";

const PhonePeToday = () => {
  const [StartDate, setStartDate] = useState(new Date());
  const [EndDate, setEndDate] = useState(new Date().setDate(new Date().getDate() + 1));
  const { phonePayData, isLoading,refetch } = usePhonePay(StartDate,EndDate);
  
  const front = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => front.current,
  });

  useEffect(() => {
   refetch()
  }, [StartDate,EndDate])
  

  if (isLoading) {
    return <Loader></Loader>;
  }


  const filteredData = phonePayData.length && phonePayData?.filter((item) => {
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

  return (
    <>
      <button className="commonBtn " onClick={handlePrint}>
        प्रिंट
      </button>
      <section ref={front}>
        <div className="title flex justify-center items-center flex-col">
          <h2 className="font-bold md:text-[1.5rem] text-center">
            फोन पे और आज भुगतान
          </h2>
         

          <div className="flex gap-4 items-center my-4 z-10">
            <h2 className="font-bold text-[1.5rem]">From</h2>
            <div className="flex gap-2 items-center">
              <DatePicker
                selected={StartDate}
                onChange={(date) => {
                  setStartDate(date);
                  console.log(moment(date).format());
                }}
                dateFormat="dd/MM/yyyy"
                placeholderText={"dd/mm/yyyy"}
                className="inputBox date"
              />
            </div>

            <h2 className="font-bold text-[1.5rem]">To</h2>
            <div className="flex gap-2 items-center">
              <DatePicker
                selected={EndDate}
                name="year"
                onChange={(data) => setEndDate(data)}
                dateFormat="dd/MM/yyyy"
                className="inputBox date"
                placeholderText={"dd/mm/yyyy"}
              />
            </div>
          </div>
        </div>
          <div className="divider my-2"></div>

        {/* ************************ all sealy data************** */}

        <div>
          <div className="flex justify-center items-center m-6">
            <table className="removeCommonWSpace">
              <thead>
                <tr>
                  <td> क्र. सं.</td>
                  <th>दिनांक</th>
                  <th>सेल्समैन का नाम</th>
                  <th>खाते में</th>
                  <th>आज भुगतान</th>
                </tr>
              </thead>
              <tbody>
                {phonePayData.length && filteredData.map((item, index) => {
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
                    <h2 className="font-bold">कुल योग</h2>
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    {phonePayData.length && filteredData.reduce((acc, item) => {
                      return acc + item.intoAccount;
                    }, 0)}
                  </td>
                  <td>
                    {phonePayData.length && filteredData.reduce((acc, item) => {
                      return acc + item.todaysPayment;
                    }, 0)}
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

export default PhonePeToday;
