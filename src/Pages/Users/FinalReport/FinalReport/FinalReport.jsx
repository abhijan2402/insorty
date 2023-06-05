import React, { useRef } from "react";
import ListOfFinalReport from "../ListOfFinalReport/ListOfFinalReport";
import BorrowedBottles from "../BorrowedBottles/BorrowedBottles.jsx";
import FinalReportStockExcessForm from "../FinalReportStockExcessForm/FinalReportStockExcessForm";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";
import moment from "moment/moment";
import { useReactToPrint } from "react-to-print";

const FinalReport = () => {
  const token = localStorage.getItem("token");
  const front = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => front.current,
  });

  const { data, isLoading } = useQuery({
    queryKey: ["monthlyFinalReport", "borrowedBottles", "extraBottles"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getMonthlyFinalReport",
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      console.log(data);
      return data.data;
    },
  });
  if (isLoading) {
    return <Loader></Loader>;
  }

  console.log(data)

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
            फाइनल रिपोर्ट
          </h2>
        </div>
        <div className="divider my-2"></div>
        <h2 className="font-bold text-[1.5rem]">
          {data && moment(monthlyFinalReport?.date).format("MM/YYYY")}
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
