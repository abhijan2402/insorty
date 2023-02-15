import React from "react";
import ListOfFinalReport from "../ListOfFinalReport/ListOfFinalReport";
import useFinalReport from "../FinalReportHooks/useFinalReport";
import BorrowedBottles from "../BorrowedBottles/BorrowedBottles.jsx";
import FinalReportStockExcessForm from "../FinalReportStockExcessForm/FinalReportStockExcessForm";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";

const FinalReport = () => {
  const {
    finalReportState,
    addFiveFinalReeport,
    addOneFinalReport,
    handelOnChangeFinalReport,
    handelOnSubmitFinalReport,
    handelOnChangeStockExcess,
    finalReportSockExcessState,
    addOneStockExcess,
    addFiveStockExcess,
  } = useFinalReport();

  const token = localStorage.getItem("token");

  // const monthlyFinalReport = {}, 
  //   borrowedBottles = [], 
  //   extraBottles = []; 
  const { data, isLoading } = useQuery({
  // const { data , isLoading } = useQuery({
    queryKey: ["monthlyFinalReport", "borrowedBottles", "extraBottles"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getMonthlyFinalReport",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      console.log(data)
      return data.data;
    },
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  
  const {monthlyFinalReport, borrowedBottles, extraBottles} = data;

  return (
    <section className="py-4 px-4">
      <div className="title">
        <h2 className="font-bold text-[1.5rem] titleStyle">
          बचत व नकदी का हिसाब
        </h2>
        <div className="divider my-2"></div>
      </div>
      <div>
        <ListOfFinalReport
          monthlyFinalReport={monthlyFinalReport}
        ></ListOfFinalReport>
      </div>

      <div className="my-4">
        <div>
          <h2 className="font-bold text-[1.5rem] titleStyle">माल नामे</h2>
        </div>
        <div>
          <form action="">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>S.no</th>
                    <th>पार्टी का नाम</th>
                    <th>Brand / ब्राण्ड</th>
                    <th>Size / ml</th>
                    <th>संख्या</th>
                  </tr>
                </thead>

                <tbody>
                  {borrowedBottles.map((borrowedBottle, index) => {
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
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>S.no</th>
                    <th>पार्टी का नाम</th>
                    <th>Brand / ब्राण्ड</th>
                    <th>Size / ml</th>
                    <th>संख्या</th>
                  </tr>
                </thead>

                <tbody>
                  {extraBottles.map((StockExcess, index) => {
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
  );
};

export default FinalReport;
