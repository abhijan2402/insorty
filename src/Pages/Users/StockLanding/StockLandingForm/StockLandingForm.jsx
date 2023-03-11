import React from "react";
import { Link, useParams } from "react-router-dom";
import StockFormData from "../StockLandingForm/StockFormData/StockFormData";
import useStockHooks from "../StockHooks/useStockHooks";
import usePartyNames from "../../../../Hooks/usePartyNames";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";

const StockLandingForm = () => {
  const token = localStorage.getItem("token");
  const { getPartyName } = usePartyNames();
  const id = useParams();
  const { handelOnChangeStockLanding, stockLandingStocks } = useStockHooks();

  const { data: partyData, isLoading } = useQuery({
    queryKey: ["partyData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getStockLendingAndReceivingData",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
          body: JSON.stringify({ party: id.partyId }),
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
    <section className="px-2 py-6">
      <div className="title">
        <h2 className="font-bold text-[1.5rem]">
          पार्टी का नाम/
          <span className="titleStyle">{getPartyName(id.partyId)}</span>
        </h2>

        <div className="flex gap-4 items-center my-4">
          <h2 className="font-bold text-[1.5rem]">Year</h2>
          <input type="text" className="semiSmallInput" />
        </div>
      </div>
      {/* ************************ all sealy data************** */}

      <div>
        <form action="">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th> क्र. सं.</th>
                  <th>Brand Name/ ब्राण्ड</th>
                  <th>आमद/Inflow</th>
                  <th>भेजान/ Send </th>
                  <th>शेष/Remaining</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th></th>

                  <td>
                    <div className="flex gap-2">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Brand Name</span>
                        </label>
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">साईज/ml</span>
                        </label>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="flex gap-2">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">संख्या/Number</span>
                        </label>
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">टिप्पणी/Comment</span>
                        </label>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="flex gap-4">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">संख्या/Number</span>
                        </label>
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">टिप्पणी/Comment</span>
                        </label>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="flex gap-4">
                      <div className="flex gap-4">
                        <div className="form-control">
                          <label className="label">जमा/Deposit</label>
                        </div>
                      </div>
                      <div className="form-control">
                        <label className="label">नामे/ Debit</label>
                      </div>
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
          <div className="mt-4 flex gap-4">
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
  );
};

export default StockLandingForm;
