import React from "react";
import Refund from "../BearShopRefund/BearShopRefund";
import Reserve from "../BearShopReserve/BearShopReserve";
import InvestmentForm from "../BearShopInvestmentForm/BearShopInvestmentForm";
import useMainInvestmentHooks from "../BearShopMainInvestmentHooks/useBearShopMainInvestmentHooks";
import RefundDetailsData from "../BearShopRefund/BearShopRefundDetailsData";
import ResurvedDataDetails from "../BearShopReserve/BearShopResurvedDataDetails";

const MainInvestment = () => {
  const {
    addOneMainInvestment,
    mainInvestmentState,
    handelOnChangeMainInvestment,
    handelOnSubmitMainInvestment,
  } = useMainInvestmentHooks();

  return (
    <section className="my-2">
      <div className="title">
        <h2 className="font-bold text-[1.5rem]">मुख्य इन्वेस्ट</h2>
        <div className="divider my-2"></div>
      </div>

      <div>
        <form>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>ब्राण्ड/ Brand Name </th>
                  <th>दिनांक / Date</th>
                  <th>रकम/ price</th>
                </tr>
              </thead>

              <tbody>
                {mainInvestmentState.map((mainInvestment, index) => {
                  return (
                    <InvestmentForm
                      key={index}
                      index={index}
                      mainInvestment={mainInvestment}
                      mainInvestmentState={mainInvestmentState}
                      handelOnChangeMainInvestment={
                        handelOnChangeMainInvestment
                      }
                    ></InvestmentForm>
                  );
                })}

                {/* <MainInvestmentList></MainInvestmentList> */}
                {/* <tr>
                <td></td>
                <td></td>
                <td className="commonText">Total</td>
                <td className="price">162,000</td>
              </tr> */}
              </tbody>
            </table>
          </div>
        </form>
        <div className="my-4 flex gap-4">
          <button
            className="dailyReportBtnSubmit"
            onClick={() => handelOnSubmitMainInvestment()}
            type="submit"
          >
            Submit
          </button>
          <button
            className="dailyReportBtn"
            onClick={() => addOneMainInvestment()}
          >
            ADD 1
          </button>
        </div>
      </div>

      <div>
        <div>
          <h2 className="font-bold text-[1.5rem] my-2">
            रिफंड/रिकवरी विवरण/ Refund/Recovery Details
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>S.No</th>
                <th>रिफंड/रिकवरी विवरण/ Refund/Recovery Details </th>
                <th>दिनांक / Date</th>
                <th>रकम/ price</th>
              </tr>
            </thead>
            <tbody>
              <Refund></Refund>
              <tr>
                <td>
                  <div>
                    <label
                      htmlFor="RefundData"
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#AA237A",
                        padding: "0.6rem 1.5rem",
                        borderRadius: "0.5rem",
                        color: "black",

                        fontSize: "1rem",
                      }}
                    >
                      Add Refund
                    </label>
                  </div>
                </td>
                <td></td>
                <td className="commonText">Total</td>
                <td className="price">162,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <div>
          <h2 className="font-bold text-[1.5rem] my-2">
            लाभ में से रिजर्व रकम /reserve amount out of profit
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>S.No</th>
                <th>विवरण/ Details</th>
                <th>माह / Month</th>
                <th>रकम/ price</th>
              </tr>
            </thead>
            <tbody>
              <Reserve></Reserve>

              <tr>
                <td>
                  <div>
                    <label
                      htmlFor="ResurvedData"
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#AA237A",
                        padding: "0.6rem 1.5rem",
                        borderRadius: "0.5rem",
                        color: "black",

                        fontSize: "1rem",
                      }}
                    >
                      Add Reserve
                    </label>
                  </div>
                </td>
                <td></td>
                <td className="commonText">Total</td>
                <td className="price">162,000</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td className="commonText">शेष इन्वेस्ट</td>
                <td className="price">662,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <RefundDetailsData></RefundDetailsData>
      <ResurvedDataDetails></ResurvedDataDetails>
    </section>
  );
};

export default MainInvestment;
