import React from "react";
import ListOfFinalReport from "../ListOfFinalReport/ListOfFinalReport";
import useFinalReport from "../FinalReportHooks/useFinalReport";
import FinalReportForm from "../FinalReportForm/FinalReportForm";
import FinalReportStockExcessForm from "../FinalReportStockExcessForm/FinalReportStockExcessForm";

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

  return (
    <section className="py-4">
      <div className="title">
        <h2 className="font-bold text-[1.5rem] titleStyle">
          बचत व नकदी का हिसाब
        </h2>
        <div className="divider my-2"></div>
      </div>
      <div>
        <ListOfFinalReport></ListOfFinalReport>
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
                    <th>संख्या</th>
                  </tr>
                </thead>

                <tbody>
                  {finalReportState.map((finalReport, index) => {
                    return (
                      <FinalReportForm
                        key={index}
                        index={index}
                        finalReport={finalReport}
                        handelOnChangeFinalReport={handelOnChangeFinalReport}
                      ></FinalReportForm>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </form>{" "}
          <div>
            <div className="mt-4 flex gap-4">
              <button
                className="dailyReportBtn"
                onClick={() => addFiveFinalReeport()}
              >
                ADD 5
              </button>
              <button
                className="dailyReportBtn"
                onClick={() => addOneFinalReport()}
              >
                ADD 1
              </button>
            </div>
          </div>
        </div>
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
                    <th>संख्या</th>
                  </tr>
                </thead>

                <tbody>
                  {finalReportSockExcessState.map((StockExcess, index) => {
                    return (
                      <FinalReportStockExcessForm
                        key={index}
                        index={index}
                        StockExcess={StockExcess}
                        handelOnChangeStockExcess={handelOnChangeStockExcess}
                      ></FinalReportStockExcessForm>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </form>{" "}
          <div>
            <div className="mt-4 flex gap-4">
              <button
                className="dailyReportBtnSubmit"
                onClick={() => handelOnSubmitFinalReport()}
                type="submit"
              >
                Submit
              </button>
              <button
                className="dailyReportBtn"
                onClick={() => addFiveStockExcess()}
              >
                ADD 5
              </button>
              <button
                className="dailyReportBtn"
                onClick={() => addOneStockExcess()}
              >
                ADD 1
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalReport;
