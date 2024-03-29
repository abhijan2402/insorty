import React, { useRef } from "react";
import ListOfFinalReport from "../ListOfFinalReport/ListOfFinalReport";
import BorrowedBottles from "../BorrowedBottles/BorrowedBottles.jsx";
import FinalReportStockExcessForm from "../FinalReportStockExcessForm/FinalReportStockExcessForm";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";
import moment from "moment/moment";
import { useReactToPrint } from "react-to-print";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { useEffect } from "react";
import useFinalReport from "../FinalReportHooks/useFinalReport";

const FinalReport = () => {
  const front = useRef(null);
  const [month, setMonth] = useState(new Date());
  const handlePrint = useReactToPrint({
    content: () => front.current,
  });
  const { data, isLoading, refetch } = useFinalReport(month);

  useEffect(() => {
    refetch();
  }, [month]);

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (data.success === false) {
    return <div>No data found</div>;
  }

  const { monthlyFinalReport, borrowedBottles, extraBottles } = data;

  return (
    <>
      <div className="py-0 sticky top-0 bg-white z-1000">
        <button className="commonBtn " onClick={handlePrint}>
          प्रिंट
        </button>
        <div className="title flex justify-center items-center">
          <h2 className="font-bold text-[1.5rem] text-center titleStyle">
            अंतिम रिपोर्ट
          </h2>
        </div>
        <div
          ref={front}
          className="flex gap-2 mx-auto w-auto"
          style={{
            margin: "auto",
            width: "auto",
            width: "10%",
            alignItems: "center",
            marginTop: "20px",
          }}
          //  flex justify-center items-center self-center w-full bg-red-500 text-center"
          // className="title flex justify-center items-center text-center my-4  bg-white-800 z-1 border-2 w-50"
        >
          <DatePicker
            selected={new Date(month)}
            name="date"
            onChange={(date) => {
              setMonth(moment(date).format("MMMM yyyy"));
            }}
            dateFormat="MMMM yyyy"
            placeholderText={"dd/mm/yyyy"}
            className="inputBox date"
          />
        </div>
        <div className="divider my-2"></div>
      </div>
      <section ref={front} className="py-4 px-4">
        <div>
          <ListOfFinalReport
            monthlyFinalReport={monthlyFinalReport}
          ></ListOfFinalReport>
        </div>

        <div className="my-4">
          <div>
            <h2 className="font-bold md:text-[1.5rem] titleStyle text-center">
              माल नामे
            </h2>
          </div>
          <div>
            <form action="">
              <div className="flex justify-center items-center">
                <table className="removeCommonWSpace">
                  <thead>
                    <tr>
                      <th className="text-xs"> क्र. सं.</th>
                      <th className="text-xs">पार्टी का नाम</th>
                      <th className="text-xs"> ब्राण्ड</th>
                      <th className="text-xs">साईज</th>
                      <th className="text-xs">संख्या</th>
                    </tr>
                  </thead>

                  <tbody>
                    {data.borrowedBottles.length &&
                      borrowedBottles.map((borrowedBottle, index) => {
                        return (
                          <BorrowedBottles
                            key={index}
                            index={index}
                            borrowedBottle={borrowedBottle}
                          ></BorrowedBottles>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>

        <div className="my-4">
          <div>
            <h2 className="font-bold text-[1.5rem] titleStyle">माल अधिक जमा</h2>
          </div>
          <div>
            <form action="">
              <div className="flex justify-center items-center">
                <table className="removeCommonWSpace">
                  <thead>
                    <tr>
                      <th className="text-xs"> क्र. सं.</th>
                      <th className="text-xs">पार्टी का नाम</th>
                      <th className="text-xs"> ब्राण्ड</th>
                      <th className="text-xs">साईज</th>
                      <th className="text-xs">संख्या</th>
                    </tr>
                  </thead>

                  <tbody className="finalTableBody">
                    {data.extraBottles.length &&
                      extraBottles.map((StockExcess, index) => {
                        return (
                          <FinalReportStockExcessForm
                            key={index}
                            index={index}
                            StockExcess={StockExcess}
                          ></FinalReportStockExcessForm>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinalReport;
