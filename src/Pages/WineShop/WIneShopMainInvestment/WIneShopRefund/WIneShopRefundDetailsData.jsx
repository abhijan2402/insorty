import React from "react";
import "../../WineShopUserStyle/UserStyle.scss";
import { Link } from "react-router-dom";
import useMainInvestmentHooks from "../WineShopMainInvestmentHooks/useWineShopMainInvestmentHooks";

const RefundDetailsData = () => {
  const {
    refundDetailsState,
    handelOnChangeRefundDetails,
    handelSubmitRefundDetails,
  } = useMainInvestmentHooks();
  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="RefundData" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add Refund Data</h3>

          <div>
            <form action="">
              <div className="form-control">
                <label className="label">
                  <span className=" font-bold mt-2">
                    रिफंड/रिकवरी विवरण/ REFUND/RECOVERY DETAILS
                  </span>
                </label>
                <label>
                  <span>Brand Name</span>
                </label>
                <input
                  type="text"
                  name="brandName"
                  className="input input-bordered my-2"
                  onChange={handelOnChangeRefundDetails}
                  value={refundDetailsState.brandName}
                  style={{
                    border: "1px solid #e5e7eb",
                  }}
                />
              </div>

              <div className="form-control my-2">
                <label>
                  <span> दिनांक / DATE</span>
                </label>
                <input
                  type="date"
                  name="theDate"
                  className="input input-bordered my-2"
                  onChange={handelOnChangeRefundDetails}
                  value={refundDetailsState.theDate}
                  style={{
                    border: "1px solid #e5e7eb",
                  }}
                />
              </div>

              <div className="form-control my-2">
                <label>
                  <span> रकम/ PRICE</span>
                </label>
                <input
                  type="number"
                  name="price"
                  className="input input-bordered my-2"
                  onChange={handelOnChangeRefundDetails}
                  value={refundDetailsState.price}
                  style={{
                    border: "1px solid #e5e7eb",
                  }}
                />
              </div>
              <div>
                <Link>
                  <button
                    className="dailyReportBtnSubmit"
                    onClick={() => handelSubmitRefundDetails()}
                  >
                    Submit
                  </button>
                </Link>
              </div>
            </form>
          </div>
          <div className="modal-action">
            <label htmlFor="RefundData" className="btn">
              Exit
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundDetailsData;
