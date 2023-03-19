import React,{useRef} from "react";
import Refund from "../Refund/Refund";
import Reserve from "../Reserve/Reserve";
import InvestmentForm from "../InvestmentForm/InvestmentForm";
import useMainInvestmentHooks from "../MainInvestmentHooks/useMainInvestmentHooks";
import { useReactToPrint } from "react-to-print";
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
    handleRemoveFields
  } = useMainInvestmentHooks();
  const front = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => front.current,
  });

  if (data.isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <>
    

    <section ref={front} className="my-2">
      <div className="title flex justify-center items-center">
        <h2 className="font-bold md:text-[1.5rem] text-center">
          मुख्य इन्वेस्ट
        </h2>
        <button
        className="commonBtn "
        onClick={handlePrint}
      >
        PRINT
      </button>
      </div>
        <div className="divider my-2"></div>

      <div>
        <form>
          <div className="justify-center flex items-center">
            <table className="table w-2/3">
              <thead>
                <tr className="text-center">
                  <th> क्र. सं.</th>
                  <th></th>
                  <th>Detail</th>
                  <th>दिनांक / Date</th>
                  <th>रकम/ price</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>1</th>
                  <td></td>
                  <td>
                    <input
                      className="dailyReportInput wd-30"
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
                      className="dailyReportInput wd-8"
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
                  <td></td>
                  <td>
                    <input
                      className="dailyReportInput wd-30"
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
                      className="dailyReportInput wd-8"
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
                      handleRemoveFields={handleRemoveFields}
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
                    onClick={(e) => {e.preventDefault(); handleFeesAdd()}}
                  >
                    ADD
                  </button>
                </tr>

                <tr>
                  <th>{data.mainInvest.fees.length + 3}</th>
                  <td></td>
                  <td>
                    <input
                      className="dailyReportInput wd-30"
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
                      className="dailyReportInput wd-8"
                      value={data.mainInvest.reserveAmount.price}
                      readOnly
                    />
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <td></td>
                  <td>
                    <input
                      className="dailyReportInput wd-30"
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
                      className="dailyReportInput wd-8"
                      defaultValue={data.mainInvest.total}
                        handleRemoveFields={handleRemoveFields}

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
          <h2 className="font-bold text-[1.5rem] text-center my-2">रिफंड / रिकवरी विवरण</h2>
        </div>
        <div className="justify-center flex items-center my-6">
          <table className="table w-2/3">
            <thead>
              <tr className="text-center">
                <th> क्र. सं.</th>
                <th></th>
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
                        handleRemoveFields={handleRemoveFields}

                        index={index}
                        refundRecovery={refundRecovery}
                      ></Refund>
                    );
                  }
                )}

              <tr>
              <td></td>
                <td>
                  <div>
                    <button
                      className="commonBtn"
                      onClick={(e) =>{e.preventDefault(); handleRefundRecoveryAdd()}}
                    >
                      Add
                    </button>
                  </div>
                </td>
                <td></td>
                <td className="commonText">Total</td>
                  <td className="price">{data?.refundRecoveryDetails?.total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <div>
          <h2 className="font-bold text-center text-[1.5rem] my-2 p-2">
            लाभ में से रिजर्व रकम
          </h2>
        </div>
        <div className="justify-center flex items-center my-6">
          <table className="table w-2/3">
            <thead>
              <tr className="text-center">
                <th className="text-center"> क्र. सं.</th>
                <th></th>
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
                      handleRemoveFields={handleRemoveFields}

                      reserve={reserve}
                      reserveAmountOnChange={reserveAmountOnChange}
                    ></Reserve>
                  );
                })}

              <tr>
              <td></td>
                <td>
                  <div>
                    <button
                      className="commonBtn"
                        onClick={(e) => { e.preventDefault(); handleReserveAmountAdd()}}
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
      <div className="my-4 flex justify-center  items-center gap-4">
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
    </>
  );
};

export default MainInvestment;
