import React, { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import StockFormData from "../StockLandingForm/StockFormData/StockFormData";
import useStockHooks from "../StockHooks/useStockHooks";
import usePartyNames from "../../../../Hooks/usePartyNames";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";
import { useReactToPrint } from "react-to-print";

const StockLandingForm = () => {
  const token = localStorage.getItem("token");
  const { getPartyName } = usePartyNames();
  const id = useParams();
  const { handelOnChangeStockLanding, stockLandingStocks } = useStockHooks();
  const front = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => front.current,
  });

  const { data: partyData, isLoading } = useQuery({
    queryKey: ["partyData"],
    queryFn: async () => {
      const res = await fetch(
        `https://insorty-api.onrender.com/shop/getStockLendingAndReceivingData?party=${id.partyId}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  console.log(partyData);

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <section ref={front} className="px-2 py-6">
        <div className="title flex justify-center items-center">
          <h2 className="font-bold text-[1.5rem]">
            पार्टी का नाम/
            <span className="titleStyle">{getPartyName(id.partyId)}</span>
          </h2>
          <button className="commonBtn " onClick={handlePrint}>
            PRINT
          </button>

          {/* <div className="flex gap-4 items-center my-4">
          <h2 className="font-bold text-[1.5rem]">Year</h2>
          <input type="text" className="semiSmallInput" />
        </div> */}
        </div>
        {/* ************************ all sealy data************** */}

        <div>
          <form action="">
            <div
              className="flex justify-center items-center
          "
            >
              <table className="removeCommonWSpace">
                <thead>
                  <tr>
                    <th> क्र. सं.</th>
                    <th colSpan={2}>Brand Name/ ब्राण्ड</th>
                    <th colSpan={2}>आमद/Inflow</th>
                    <th colSpan={2}>भेजान/ Send </th>
                    <th colSpan={2}>शेष/Remaining</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th></th>

                    <td>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Brand Name</span>
                        </label>
                      </div>
                    </td>

                    <td>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">साईज/ml</span>
                        </label>
                      </div>
                    </td>

                    <td>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">संख्या/Number</span>
                        </label>
                      </div>
                    </td>

                    <td>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">टिप्पणी/Comment</span>
                        </label>
                      </div>
                    </td>

                    <td>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">संख्या/Number</span>
                        </label>
                      </div>
                    </td>

                    <td>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">टिप्पणी/Comment</span>
                        </label>
                      </div>
                    </td>

                    <td>
                      <div className="flex gap-4">
                        <div className="form-control">
                          <label className="label">जमा/Deposit</label>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="form-control">
                        <label className="label">नामे/ Debit</label>
                      </div>
                    </td>

                    {/* ============= कुल योग ================ */}
                  </tr>
                  {partyData.length === 0 && partyData ? (
                    <>
                      <td>
                        <tr className="text-center font-bold text-red-500 text-2xl">
                          No Data Available
                        </tr>
                      </td>
                    </>
                  ) : (
                    <>
                      {partyData.map((stockData, index) => {
                        return (
                          <StockFormData
                            key={index}
                            index={index}
                            stockData={stockData}
                          ></StockFormData>
                        );
                      })}
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </form>{" "}
          <div>
            <div className="mt-4 flex justify-center gap-4">
              {/* <button
              className="dailyReportBtnSubmit"
              type="submit"
              onClick={handelOnSubmitStockLanding}
            >
              Submit
            </button> */}
              {/* <button
              className="dailyReportBtnSubmit"
              onClick={addOneStockLandingStock}
            >
              Add 1
            </button> */}

              <Link
                to="/user/stocklanding"
                className="dailyReportBtn text-center flex justify-center items-center"
              >
                सूची
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StockLandingForm;
