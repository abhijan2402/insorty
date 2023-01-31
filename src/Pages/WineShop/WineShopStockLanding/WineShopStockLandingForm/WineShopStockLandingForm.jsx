import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import StockFormData from "../WineShopStockLandingForm/WineShopStockFormData/WineShopStockFormData";
import useStockHooks from "../WineShopStockHooks/useWineShopStockHooks";

const StockLandingForm = () => {
  const sotckLandignUserData = useLoaderData();
  const employeeData = sotckLandignUserData?.data;

  const {
    handelOnSubmitStockLanding,
    handelOnChangeStockLanding,
    addOneStockLandingStock,
    stockLandingStocks,
  } = useStockHooks();

  return (
    <section className="px-2 py-6">
      <div className="title">
        <h2 className="font-bold text-[1.5rem]">
          कर्माचीरी का नाम / Name{" "}
          <span className="titleStyle">{employeeData?.name}</span>
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
                  <th>S.no</th>
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
                    </div>
                  </td>

                  <td>
                    <div className="flex gap-2">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">साईज/ml</span>
                        </label>
                      </div>

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
                      <div className="flex gap-4">
                        <div className="form-control">
                          <label className="label">जमा/Deposit</label>
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="flex gap-4">
                      <div className="form-control">
                        <label className="label">नामे/ Debit</label>
                      </div>
                    </div>
                  </td>

                  {/* ============= कुल योग ================ */}
                </tr>
                {stockLandingStocks.map((stock, index) => {
                  return (
                    <StockFormData
                      key={index}
                      index={index}
                      stock={stock}
                      handelOnChangeStockLanding={handelOnChangeStockLanding}
                    ></StockFormData>
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
              type="submit"
              onClick={handelOnSubmitStockLanding}
            >
              Submit
            </button>
            <button
              className="dailyReportBtnSubmit"
              onClick={addOneStockLandingStock}
            >
              Add 1
            </button>

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
