import React, { useState,useRef,useEffect } from "react";
import useCashRecive from "../CashReciveHooks/useCashRecive";
import Loader from "../../../../Components/Loader/Loader";
import DatePicker from "react-datepicker";
import moment from "moment/moment";
import { useReactToPrint } from "react-to-print";

const CashReciveData = () => {
  const [StartDate, setStartDate] = useState(new Date());
  const [EndDate, setEndDate] = useState(new Date().setDate(new Date().getDate() + 1));
  const { CashReciveData, isLoading,refetch } = useCashRecive(StartDate,EndDate);
  
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



  const cashReceive = CashReciveData.length && CashReciveData?.map((items) => items);

  const cashReciveDatas = CashReciveData.length && cashReceive.map((item) => {
    return item.entries.filter((item) => item.type === "OTHER");
  });

  const filteredData = CashReciveData.length && cashReciveDatas.filter((item) => {
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
      <button
        className="commonBtn "
        onClick={handlePrint}
      >
        प्रिंट
      </button>
     
    <section ref={front}>
      <div className="title flex justify-center items-center flex-col">
        <h2 className="font-bold md:text-[1.5rem] text-center">
          अन्य से नकद प्राप्ति
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
        <div className="justify-center items-center flex m-6">
          <table className=" removeCommonWSpace">
            <thead>
              <tr>
                <td> क्र. सं.</td>
                  <th>दिनांक</th>
                  <th>सेल्समैन का नाम</th>
                  <th>रकम</th>
              </tr>
            </thead>
            <tbody>
                {CashReciveData.length && filteredData.map((item, index) => {
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
                    <h2 className="font-bold">कुल योग</h2>
                </td>
                <td></td>
                <td></td>
                <td>
                    {CashReciveData.length && filteredData.reduce((acc, item) =>
                      acc + item.reduce((acc, item) =>
                        acc + Number(item.cash)
                        , 0)
                      , 0)}
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
