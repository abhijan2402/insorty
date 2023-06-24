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
  const [month,setMonth] = useState(new Date())
  const handlePrint = useReactToPrint({
    content: () => front.current,
  });
  const {data,isLoading,refetch} = useFinalReport(month)

  useEffect(() => {
   refetch()
  }, [month])
  


 
  if (isLoading) {
    return <Loader></Loader>;
  }


  if (data.success === false) {
    return <div>No data found</div>;
  }

  const { monthlyFinalReport, borrowedBottles, extraBottles } = data;

  return (
    <>
      <button className="commonBtn " onClick={handlePrint}>
        प्रिंट
      </button>
      <section ref={front} className="py-4 px-4">
        <div className="title flex justify-center items-center">
          <h2 className="font-bold text-[1.5rem] text-center titleStyle">
          अंतिम रिपोर्ट
          </h2>
        </div>
        <div className="divider my-2"></div>
        <h2 className="font-bold text-[1.5rem]">
        <DatePicker
            selected={new Date(month)}
            name="date"
            onChange={(date) => {
              setMonth(moment(date).format('MMMM yyyy'));
            }}
            dateFormat="MMMM yyyy"
            placeholderText={"dd/mm/yyyy"}
            className="inputBox date"
          />
        </h2>
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
                      <th> क्र. सं.</th>
                      <th>पार्टी का नाम</th>
                      <th> ब्राण्ड</th>
                      <th>साईज</th>
                      <th>संख्या</th>
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
                      <th> क्र. सं.</th>
                      <th>पार्टी का नाम</th>
                      <th> ब्राण्ड</th>
                      <th>साईज</th>
                      <th>संख्या</th>
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
