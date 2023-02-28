import React from "react";
import InvestmentForm from "../InvestmentForm/InvestmentForm";
import useMainInvestmentHooks from "../MainInvestmentHooks/useMainInvestmentHooks";

const MainInvestment = () => {
  // const {
  //   addOneMainInvestment,
  //   mainInvestmentState,
  //   handelOnChangeMainInvestment,
  //   handelOnSubmitMainInvestment,
  //   addFees,
  //   addRefund,
  //   addbelonging,
  //   addReserve,
  //   handleBelongingChange,
  //   handleFeesChange,
  //   handleRefundChange,
  //   handleReserveChange,
  //   fees,
  //   belonging,
  //   reserveAmountArr,
  //   refundRecoveryDetails,
  //   reserveAmount,
  //   cashInHand,
  //   total,
  //   handleChangeCashInHand,
  //   handleChangePreviousLoan,
  //   mainLoading,
  //   handleChangeTotal,
  //   previousLoan,handleChange
  // } = useMainInvestmentHooks();

  const {
    data,
    loading,
    handleInvestmentChange,
    handleBelongingAdd,
    handleFeesChange,
    handleBelongingChange,
    handleSave,
    handleFeesAdd,
    handleTotalChange,
  } = useMainInvestmentHooks();

  if (loading) {
  const {
    data,
    handleInvestmentChange,
    handleBelongingAdd,
    handleSave,
    handleFeesAdd,
  } = useMainInvestmentHooks();

  if (data.isLoading) {
    return <div>Loading....</div>;
  }

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
                      // onChange={(e) => handelOnChangeMainInvestment(e, index)}
                    />
                  </td>
                  <td>
                    {/* <input
                      type="date"
                      name="theDate"
                      className="semiSmallInput"
                      defaultValue={previousLoan.date}
                      onChange={(e) => previousLoan.date=e.target.value}
                    /> */}
                  </td>
                  <td>
                    <input
                      type="number"
                      name="price"
                      className="semiSmallInput"
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

                <h1 style={{ fontSize: 35 }}>
                  <b>Fees</b>
                </h1>

                {data.mainInvest.fees.map((mainInvestment, index) => {
                  return (
                    <InvestmentForm
                      key={index}
                      index={index}
                      name={"fees"}
                      mainInvestment={mainInvestment}
                      handelOnChangeMainInvestment={handleFeesChange}
                      handelOnChangeMainInvestment={handleInvestmentChange}
                    ></InvestmentForm>
                  );
                })}

                <tr>
                  <h1
                    style={{ textAlign: "center", paddingTop: 3, marginTop: 7 }}
                    className="dailyReportBtn"
                    onClick={() => handleFeesAdd()}
                  >
                    ADD 1
                  </h1>
                </tr>

                <tr>
                  {" "}
                  <h1 style={{ fontSize: 35 }}>
                    <b>Belongings</b>
                  </h1>
                </tr>

                {data &&
                  data.mainInvest.belonging.map((mainInvestment, index) => {
                    return (
                      <InvestmentForm
                        key={index}
                        index={index}
                        name={"Belonging"}
                        mainInvestment={mainInvestment}
                        handelOnChangeMainInvestment={handleBelongingChange}
                        name={"belonging"}
                        mainInvestment={mainInvestment}
                        handelOnChangeMainInvestment={handleInvestmentChange}
                      ></InvestmentForm>
                    );
                  })}

                <tr>
                  <h1
                    style={{ textAlign: "center", paddingTop: 3, marginTop: 7 }}
                    className="dailyReportBtn"
                    onClick={() => handleBelongingAdd()}
                  >
                    ADD 1
                  </h1>
                </tr>

                <tr>
                  <th>1</th>
                  <td>
                    <input
                      className="dailyReportInput"
                      type="text"
                      name="brandName"
                      value={"Cash in Hand"}
                      // onChange={(e) => handelOnChangeMainInvestment(e, index)}
                    />
                  </td>
                  <td>
                    {/* <input
                      type="date"
                      name="theDate"
                      className="semiSmallInput"
                      defaultValue={cashInHand.date}
                      onChange={(e) => cashInHand.date = e.target.value}
                    /> */}
                  </td>
                  <td>
                    <input
                      type="number"
                      name="price"
                      className="semiSmallInput"
                      defaultValue={data.mainInvest.cashInHand.price}
                      onChange={(event) =>
                        handleInvestmentChange("cashInHand", event.target.value)
                      }
                    />
                  </td>
                </tr>

                <tr>
                  <th>1</th>
                  <td>
                    <input
                      className="dailyReportInput"
                      type="text"
                      name="brandName"
                      value={"Reserve Amount"}
                      // onChange={(e) => handelOnChangeMainInvestment(e, index)}
                    />
                  </td>
                  <td>
                    {/* <input
                      type="date"
                      name="theDate"
                      className="semiSmallInput"
                      defaultValue={cashInHand.date}
                      onChange={(e) => cashInHand.date = e.target.value}
                    /> */}
                  </td>
                  <td>
                    <input
                      type="number"
                      name="price"
                      className="semiSmallInput"
                      value={data.mainInvest.reserveAmount.price}
                      readOnly
                      // onChange={(e) => handleChange(e)}
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
                      className="semiSmallInput"
                      defaultValue={cashInHand.date}
                      onChange={(e) => cashInHand.date = e.target.value}
                    /> */}
                  </td>
                  <td>
                    <input
                      type="number"
                      name="price"
                      className="semiSmallInput"
                      defaultValue={data.mainInvest.total}
                      onChange={(event) =>
                        handleTotalChange(event.target.value)
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
        <div className="my-4 flex gap-4">
          <button
            className="dailyReportBtnSubmit"
            onClick={() => handleSave()}
            type="submit"
          >
            Submit
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
      {/* <RefundDetailsData></RefundDetailsData>
      <ResurvedDataDetails></ResurvedDataDetails> */}
    </section>
  );
};

export default MainInvestment;
