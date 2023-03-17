import React from "react";
import Refund from "../Refund/Refund";
import Reserve from "../Reserve/Reserve";
import InvestmentForm from "../InvestmentForm/InvestmentForm";
import useMainInvestmentHooks from "../MainInvestmentHooks/useMainInvestmentHooks";
// import { Loader } from "three";

const MainInvestment = () => {
  const {
    data,
    handleInvestmentChange,
    handleSave,
    handleFeesAdd,
    handleReserveAmountAdd,
    handleRefundRecoveryAdd,
    reserveAmountOnChange,
    refundRecoveryOnChange,
  } = useMainInvestmentHooks();

  if (data.isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <section className="my-2">
      <div className="title">
        <h2 className="font-bold md:text-[1.5rem] text-center">
          मुख्य इन्वेस्ट
        </h2>
        <div className="divider my-2"></div>
      </div>

      <div>
        <form>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr className="text-center">
                  <th> क्र. सं.</th>
                  <th>Detail</th>
                  <th>दिनांक / Date</th>
                  <th>रकम/ price</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>1</th>
                  <td>
                    <input
                      className="dailyReportInput"
                      type="text"
                      name="brandName"
                      value={"Previous Loans"}
                    />
                  </td>
                  <td></td>
                  <td>
                    <input
                      type="number"
                      name="price"
                      className="dailyReportInput"
                      defaultValue={data.mainInvest.previousLoan.price}
                      onChange={(event) =>
                        handleInvestmentChange(
                          "previousLoan",
                          event.target.value
                        )
                      }
                    />
                  </td>
                </tr>

                <tr>
                  <th>2</th>
                  <td>
                    <input
                      className="dailyReportInput"
                      type="text"
                      name="brandName"
                      value={"Cash in Hand"}
                    />
                  </td>
                  <td></td>
                  <td>
                    <input
                      type="number"
                      name="price"
                      className="dailyReportInput"
                      defaultValue={data.mainInvest.cashInHand.price}
                      onChange={(event) =>
                        handleInvestmentChange("cashInHand", event.target.value)
                      }
                    />
                  </td>
                </tr>

                {data.mainInvest.fees.map((mainInvestment, index) => {
                  return (
                    <InvestmentForm
                      key={index}
                      index={index}
                      name={"fees"}
                      mainInvestment={mainInvestment}
                      handelOnChangeMainInvestment={handleInvestmentChange}
                    ></InvestmentForm>
                  );
                })}

                <tr>
                  <button
                    style={{
                      textAlign: "center",
                      paddingTop: 3,
                      marginTop: 7,
                      marginBottom: 7,
                    }}
                    className="commonBtn"
                    onClick={() => handleFeesAdd()}
                  >
                    ADD
                  </button>
                </tr>

                <tr>
                  <th>{data.mainInvest.fees.length + 3}</th>
                  <td>
                    <input
                      className="dailyReportInput"
                      type="text"
                      name="brandName"
                      value={"Reserve Amount"}
                    />
                  </td>
                  <td></td>
                  <td>
                    <input
                      type="number"
                      name="price"
                      className="dailyReportInput"
                      value={data.mainInvest.reserveAmount.price}
                      readOnly
                    />
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <td>
                    <input
                      className="dailyReportInput"
                      type="text"
                      name="brandName"
                      value={"Total"}
                      // onChange={(e) => handelOnChangeMainInvestment(e, index)}
                    />
                  </td>
                  <td>
                    {/* <input
                      type="date"
                      name="theDate"
                      className="dailyReportInput"
                      defaultValue={cashInHand.date}
                      onChange={(e) => cashInHand.date = e.target.value}
                    /> */}
                  </td>
                  <td>
                    <input
                      type="number"
                      name="price"
                      className="dailyReportInput"
                      defaultValue={data.mainInvest.total}
                      onChange={(event) =>
                        handleInvestmentChange("total", event.target.value)
                      }
                    />
                  </td>
                </tr>

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
      </div>

      <div>
        <div className="p-2">
          <h2 className="font-bold text-[1.5rem] my-2">रिफंड / रिकवरी विवरण</h2>
        </div>
        <div className="overflow-x-auto my-6">
          <table className="table w-full">
            <thead>
              <tr className="text-center">
                <th> क्र. सं.</th>
                <th>Type </th>
                <th>दिनांक / Date</th>
                <th>रकम/ price</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data?.refundRecoveryDetails?.entries.map(
                  (refundRecovery, index) => {
                    return (
                      <Refund
                        key={index}
                        name={"refundRecovery"}
                        refundRecoveryOnChange={refundRecoveryOnChange}
                        index={index}
                        refundRecovery={refundRecovery}
                      ></Refund>
                    );
                  }
                )}

              <tr>
                <td>
                  <div>
                    <button
                      className="commonBtn"
                      onClick={() => handleRefundRecoveryAdd()}
                    >
                      Add
                    </button>
                  </div>
                </td>
                <td></td>
                <td className="commonText">Total</td>
                <td className="price">{data.refundRecoveryDetails.entries.length > 0
                  ? data.refundRecoveryDetails.entries.reduce(
                    (total, currentItem) =>
                      (total = total + Number(currentItem.price)),
                    0
                  )
                  : 0}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <div>
          <h2 className="font-bold text-[1.5rem] my-2 p-2">
            लाभ में से रिजर्व रकम
          </h2>
        </div>
        <div className="overflow-x-auto my-6">
          <table className="table w-full">
            <thead>
              <tr className="text-center">
                <th className="text-center"> क्र. सं.</th>
                <th className="text-center">विवरण/ Details</th>
                <th className="text-center">माह / Month</th>
                <th className="text-center">रकम/ price</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data?.reserveAmount?.entries.map((reserve, index) => {
                  return (
                    <Reserve
                      key={index}
                      name={"reserve"}
                      index={index}
                      reserve={reserve}
                      reserveAmountOnChange={reserveAmountOnChange}
                    ></Reserve>
                  );
                })}

              <tr>
                <td>
                  <div>
                    <button
                      className="commonBtn"
                      onClick={() => handleReserveAmountAdd()}
                    >
                      Add
                    </button>
                  </div>
                </td>
                <td></td>
                <td className="commonText">Total</td>
                <td className="price">
                  {data.reserveAmount.entries.length > 0
                    ? data.reserveAmount.entries.reduce(
                        (total, currentItem) =>
                          (total = total + Number(currentItem.price)),
                        0
                      )
                    : 0}
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td className="commonText">शेष इन्वेस्ट</td>
                <td className="price">{data.reserveAmount.total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="my-4 flex gap-4">
        <button
          className="commonBtn"
          onClick={() => handleSave()}
          type="submit"
        >
          Submit
        </button>
      </div>
      {/* <RefundDetailsData></RefundDetailsData>
      <ResurvedDataDetails></ResurvedDataDetails> */}
    </section>
  );
};

export default MainInvestment;
