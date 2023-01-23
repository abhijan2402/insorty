import React from "react";
import { Link } from "react-router-dom";
import useMainInvestmentHooks from "../MainInvestmentHooks/useMainInvestmentHooks";

const ResurvedDataDetails = () => {
  const {
    handelSubmitResurved,
    handelOnChangeResurved,
    resurvedDataState,
  } = useMainInvestmentHooks();

  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="ResurvedData" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Reserve Amount Out Of Profit</h3>

          <div>
            <form action="">
              <div className="form-control">
                <label className="label">
                  <span className=" font-bold mt-2">विवरण/ DETAILS</span>
                </label>
                <label>
                  <span>Brand Name</span>
                </label>
                <input
                  type="text"
                  name="brandName"
                  className="input input-bordered my-2"
                  onChange={handelOnChangeResurved}
                  value={resurvedDataState.brandName}
                  style={{
                    border: "1px solid #e5e7eb",
                  }}
                />
              </div>

              <div className="form-control my-2">
                <label>
                  <span> MONTH</span>
                </label>
                <input
                  type="date"
                  name="theMonth"
                  className="input input-bordered my-2"
                  onChange={handelOnChangeResurved}
                  value={resurvedDataState.theDate}
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
                  onChange={handelOnChangeResurved}
                  value={resurvedDataState.price}
                  style={{
                    border: "1px solid #e5e7eb",
                  }}
                />
              </div>
              <div>
                <Link>
                  <button
                    className="dailyReportBtnSubmit"
                    onClick={() => handelSubmitResurved()}
                  >
                    Submit
                  </button>
                </Link>
              </div>
            </form>
          </div>
          <div className="modal-action">
            <label htmlFor="ResurvedData" className="btn">
              Exit
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResurvedDataDetails;
