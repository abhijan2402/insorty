import React, { useContext, useState } from "react";
import "../Style/DailyReport.scss";
import { Link } from "react-router-dom";
import PurchaseOutSideFrom from "../../../Users/DailyReport/BackDailyReport/PurchaseOutSideForm/PurchaseOutSideFrom";
import usePurchesOutSideAdd from "../../../../Hooks/usePurchesOutSideAdd";
import ShippingForm from "../../../Users/DailyReport/BackDailyReport/InflowBorrowingBack/ShippingForm/ShippingForm";
import CommissionForm from "../../../Users/DailyReport/BackDailyReport/CommissonForm/CommissionForm";
import CreditDabitForm from "../../../Users/DailyReport/BackDailyReport/InflowBorrowingBack/CraditDabitForm.jsx/CreditDabitForm";
import CashReciveForm from "../../../Users/DailyReport/BackDailyReport/CashReciveForm/CashReciveForm";
import useShippingAdd from "../../../../Hooks/useShippingAdd";
import useCommissonAdd from "../../../../Hooks/useCommissonAdd";
import useCarditDabit from "../../../../Hooks/useCarditDabit";
import useCashReciveAdd from "../../../../Hooks/useCashReciveAdd";
import useBeerShopBackSubmit from "../../../../Hooks/useBeerShopBackSubmit/useBeerShopBackSubmit";
import { DataContextApi } from "../../../../Context/DataContext";
import DatePicker from "react-datepicker";

const BackDailyReport = () => {
  const sixthFomeDataTemp = {
    theDate: "",
    price: 0,
    details: "",
  };

  const [sixthFormState, setSixthFormState] = useState([sixthFomeDataTemp]);

  const sixthFormOnchange = (e, index) => {
    const sixthFormHandler = sixthFormState.map((sixth, i) => {
      if (index === i) {
        return Object.assign(sixth, { [e.target.name]: e.target.value });
      } else {
        return sixth;
      }
    });
    setSixthFormState(sixthFormHandler);
    localStorage.setItem("vegitableAndOther", JSON.stringify(sixthFormState));
  }

  const addOneSixthForm = () => {
    setSixthFormState([...sixthFormState, sixthFomeDataTemp]);
  };

  const { salesMan, setSalesMan, drDate, setDrDate } =
  useContext(DataContextApi);

  // ================== Purchase OutSide Form============
  const {
    purchesOutSideState,
    handelAddOnePurchesOutSide,
    onChangePurchesOutSide,
    handleRemoveFieldsPurchaseOut,
  } = usePurchesOutSideAdd();

  // ================== Shipping Form============
  const {
    addShippingState,
    handleRemoveFieldsShipping,
    onChangeShipping,
    handelAddOneShipping,
  } = useShippingAdd();
  // ================== Commission Form============
  const {
    commissonState,
    handelAddOneCommison,
    onChangeCommison,
    handleRemoveFieldsCommission,
  } = useCommissonAdd();

  // ================== Credit Dabit Form============
  const {
    craditDabitState,
    onChangeCarditDabit,
    handleRemoveFieldsCredit,
    // handelSubmitCarditDabit,
    handelAddOneCarditDabit,
  } = useCarditDabit();

  // ================== Cash Recive Form============
  const {
    cashReciveState,

    handelAddOneCashRecive,
    onChangeCashRecive,
    handleRemoveFieldsCashBack,
  } = useCashReciveAdd();

  const addOneBtnHandler = () => {
    handelAddOnePurchesOutSide();
    handelAddOneShipping();
    handelAddOneCommison();
  };

  const addOneShippingBtnHandler = () => {
    handelAddOneCarditDabit();
    addOneSixthForm();

    handelAddOneCashRecive();
  };

  const { handleSubmit, isLoadingSubmit } = useBeerShopBackSubmit();

  return (
    <>
      <section className="mx-2">
        <div className="flex justify-center items-center gap-4 ">
          <div className="my-4 flex  items-center">
            <h1 className="font-bold text-2xl">
              Daily Report / दैनिक रिपोर्ट{" "}
            </h1>

            <div className="my-4 mx-4">
              <Link to="/user/bearshop/dailyreport/front" className="commonBtn">
                Front
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <h1 className="font-bold ">सेल्समेन का नाम:- </h1>
          <input
            type="text"
            value={salesMan}
            onChange={(e) => {
              setSalesMan(e.target.value);
              localStorage.setItem("salesMan", e.target.value);
            }}
            className="smallinput wd-30"
          />

          <div className="flex  items-center">
            <DatePicker
              selected={new Date(drDate)}
              name="year"
              onChange={(data) => {
                setDrDate(new Date(data));
                console.log(data);
              }}
              dateFormat="dd/MM/yyyy"
              className="inputBox date"
              placeholderText={"dd/mm/yyyy"}
            />
          </div>
        </div>

        {/* *********************************************************BREAK*********************************************************  */}
        <form onSubmit={handleSubmit}>
          <div className="flex  overflow-x-auto">
            <div className="py-6">
              <h1 className="my-4">
                <span className="font-bold titleText">
                  अंग्रेजी/बीयर/देशी/RML की आमद (खरीद बाहर से)
                </span>
              </h1>
              <div>
                <table className="table commonTable">
                  <thead>
                    <tr>
                      <th> क्र. सं.</th>
                      <td></td>
                      <th>Party Name/ पार्टी का नाम</th>
                      <th>Brand Name/ ब्राण्ड</th>
                      <th>ML</th>
                      <th>संख्या</th>
                      <th>रेट</th>
                      <th>योग</th>
                      <th>टिप्पणी</th>
                    </tr>
                  </thead>

                  <tbody>
                    {purchesOutSideState.map((item, index) => {
                      return (
                        <PurchaseOutSideFrom
                          onChangePurchesOutSide={onChangePurchesOutSide}
                          handleRemoveFieldsPurchaseOut={
                            handleRemoveFieldsPurchaseOut
                          }
                          item={item}
                          key={index}
                          index={index}
                          purchesOutSideState={purchesOutSideState}
                        ></PurchaseOutSideFrom>
                      );
                    })}

                    <tr>
                      <th className="sticky">
                        {" "}
                        <button
                          className="sticky btn bg-[#AA237A] btn-sm"
                          onClick={() => addOneBtnHandler()}
                        >
                          ADD
                        </button>
                      </th>
                      <td>
                        <div className="form-control">Total</div>
                      </td>
                      <td>
                        <div className="form-control"></div>
                      </td>
                      {/* ======== प्रारम्भिक स्टॉक ========= */}
                      <td>
                        <div className="form-control"></div>
                      </td>

                      {/* ======== आमद (खरीद)-दु. ========= */}

                      {/* ======== आमद (खरीद)-बा. ========= */}

                      <td>
                        <div className="form-control "></div>
                      </td>

                      <td>
                        <div className="form-control ">
                          <input
                            type="number"
                            className="smallinput"
                            name="theNumber"
                            value={purchesOutSideState.reduce(
                              (total, currentItem) =>
                                (total = total + Number(currentItem.theNumber)),
                              0
                            )}
                            disabled
                          />
                        </div>
                      </td>

                      <td>
                        <div className="form-control"></div>
                      </td>

                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="smallinput wd-7"
                            name="total"
                            value={purchesOutSideState.reduce(
                              (total, currentItem) =>
                                (total = total + Number(currentItem.total)),
                              0
                            )}
                            disabled
                          />
                        </div>
                      </td>

                      <td>
                        <div className="form-control"></div>
                      </td>
                      {/* ======== आमद (उधारी) ========= */}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="py-6">
              <h1 className="my-4">
                <span className="font-bold titleText">
                  अंग्रेजी/बीयर/देशी/RML की आमद (उधारी)
                </span>
              </h1>

              <>
                <div>
                  <table className="table commonTable">
                    <thead>
                      <tr>
                        <th> क्र. सं.</th>
                        <th></th>
                        <th>Party Name/ पार्टी का नाम</th>
                        <th>Brand Name/ ब्राण्ड</th>
                        <th>ML</th>
                        <th>संख्या</th>
                        <th>टिप्पणी</th>
                      </tr>
                    </thead>
                    <tbody>
                      {addShippingState.map((item, index) => {
                        return (
                          <ShippingForm
                            key={index}
                            item={item}
                            index={index}
                            handleRemoveFieldsShipping={
                              handleRemoveFieldsShipping
                            }
                            addShippingState={addShippingState}
                            onChangeShipping={onChangeShipping}
                          ></ShippingForm>
                        );
                      })}

                      <tr>
                        <th>
                          <button
                            className="btn bg-[#AA237A] btn-sm"
                            onClick={() => addOneBtnHandler()}
                          >
                            ADD
                          </button>
                        </th>
                        <th>Total</th>
                        <td>
                          <div className="form-control"></div>
                        </td>

                        <td>
                          <div className="form-control"></div>
                        </td>

                        <td>
                          <div className="form-control"></div>
                        </td>

                        <td>
                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="theNumber"
                              value={addShippingState.reduce(
                                (total, currentItem) =>
                                  (total =
                                    total + Number(currentItem.theNumber)),
                                0
                              )}
                              disabled
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-control"></div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>
            </div>

            <div className="py-6">
              <h1 className="my-4 specialwidth">
                <span className="font-bold titleText ">
                  कमीशन/खर्चा/फूट/बेगार/मंथली/पेनल्टी आदि
                </span>
              </h1>
              <div>
                <table className="table commonTable">
                  <thead>
                    <tr>
                      <th> क्र. सं.</th>
                      <td></td>
                      <th>Reason / विवरण</th>
                      <th>रकम</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {commissonState.map((item, index) => {
                      return (
                        <CommissionForm
                          key={index}
                          index={index}
                          item={item}
                          handleRemoveFieldsCommission={
                            handleRemoveFieldsCommission
                          }
                          commissonState={commissonState}
                          onChangeCommison={onChangeCommison}
                        ></CommissionForm>
                      );
                    })}

                    <tr>
                      <th className="sticky">
                        {" "}
                        <button
                          className="sticky btn bg-[#AA237A] btn-sm"
                          onClick={() => addOneBtnHandler()}
                        >
                          ADD
                        </button>
                      </th>
                      <td>
                        <div className="form-control">Total</div>
                      </td>
                      <td>
                        <div className="form-control"></div>
                      </td>

                      <td>
                        <input
                          type="number"
                          className="smallinput wd-6"
                          name="amount"
                          value={commissonState.reduce(
                            (total, currentItem) =>
                              (total = total + Number(currentItem.amount)),
                            0
                          )}
                          disabled
                          style={{
                            width: "100%",
                          }}
                        />
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* *********************************************************BREAK*********************************************************  */}

          {/* *********************************************************BREAK*********************************************************  */}
          <div className="flex  overflow-x-auto">
            <div className="py-6">
              <h1 className="my-4">
                <span className="font-bold titleText">उधारी/नामे</span>
              </h1>

              <div>
                <table className="table commonTable">
                  <thead>
                    <tr>
                      <th> क्र. सं.</th>
                      <th></th>
                      <th>पार्टी का नाम</th>
                      <th>पार्टी/पार्टनर</th>
                      <th>रकम</th>
                      <th>टिप्पणी</th>
                    </tr>
                  </thead>

                  <tbody>
                    {craditDabitState.map((item, index) => {
                      return (
                        <CreditDabitForm
                          key={index}
                          item={item}
                          handleRemoveFieldsCredit={handleRemoveFieldsCredit}
                          craditDabitState={craditDabitState}
                          onChangeCarditDabit={onChangeCarditDabit}
                          index={index}
                        ></CreditDabitForm>
                      );
                    })}

                    <tr>
                      <th className="sticky">
                        {" "}
                        <button
                          className="btn bg-[#AA237A] btn-sm"
                          onClick={() => addOneShippingBtnHandler()}
                        >
                          ADD
                        </button>
                      </th>
                      <td>
                        <div className="form-control">Total</div>
                      </td>

                      <td>
                        <div className="form-control"></div>
                      </td>

                      <td>
                        <div className="form-control"></div>
                      </td>

                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="smallinput wd-9"
                            name="amount"
                            value={craditDabitState.reduce(
                              (total, currentItem) =>
                                (total = total + Number(currentItem.amount)),
                              0
                            )}
                            disabled
                          />
                        </div>
                      </td>

                      <td>
                        <div className="form-control"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="py-6">
              <h1 className="my-4 specialwidth">
                <span className="font-bold titleText ">
                  पीछे की उधारी में से, ब्रांचों से व अन्य से नकद प्राप्ति
                </span>
              </h1>

              <div>
                <table className="table commonTable">
                  <thead>
                    <tr>
                      <th> क्र. सं.</th>
                      <td></td>
                      <th>Name</th>
                      <th>Type</th>
                      <th>रकम</th>
                      <th>comment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cashReciveState?.map((item, index) => {
                      return (
                        <CashReciveForm
                          key={index}
                          item={item}
                          handleRemoveFieldsCashBack={
                            handleRemoveFieldsCashBack
                          }
                          index={index}
                          onChangeCashRecive={onChangeCashRecive}
                          cashReciveState={cashReciveState}
                        ></CashReciveForm>
                      );
                    })}

                    <tr>
                      <th className="sticky">
                        {" "}
                        <button
                          className="sticky btn bg-[#AA237A] btn-sm"
                          onClick={() => addOneShippingBtnHandler()}
                        >
                          ADD
                        </button>
                      </th>
                      <td>
                        <div className="form-control">Total</div>
                      </td>
                      <td>
                        <div className="form-control"></div>
                      </td>
                      <td>
                        <div className="form-control"></div>
                      </td>

                      <td>
                        <input
                          type="number"
                          name="amount"
                          value={cashReciveState.reduce(
                            (total, currentItem) =>
                              (total = total + Number(currentItem.amount)),
                            0
                          )}
                          disabled
                          className="smallinput wd-7"
                        />
                      </td>
                      <td>
                        <div className="form-control"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="py-6">
              <h1 className="my-4 mx-6">
                <span className="font-bold titleText ">
                  Food / vegatable etcc
                </span>
              </h1>

              <div className="overflow-x-auto">
                <table className="table commonTable">
                  <thead>
                    <tr>
                      <th> क्र. सं.</th>
                      <th>दिनांक / Date</th>
                      <th>रकम/ price</th>
                      <th>विवरण/ Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sixthFormState.map((data, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <div className="form-control">
                              <input
                                type="date"
                                className="semiSmallInput"
                                name="theDate"
                                onChange={(e) => sixthFormOnchange(e, index)} 
                                value={data.theDate} 
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-control">
                              <input
                                type="number"
                                className="semiSmallInput"
                                name="price"
                                onChange={(e) => sixthFormOnchange(e, index)} 
                                value={data.price} 
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-control">
                              <input
                                type="text"
                                className="semiSmallInput"
                                name="details"
                                onChange={(e) => sixthFormOnchange(e, index)} 
                                value={data.details} 
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    })}

                    <tr>
                      <th className="sticky">
                        {" "}
                        <button
                          className="sticky btn bg-[#AA237A] btn-sm"
                          onClick={() => addOneShippingBtnHandler()}
                        >
                          ADD
                        </button>
                      </th>
                      <td>
                        <div className="form-control">Total</div>
                      </td>
                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            name="amount"
                            value={sixthFormState.reduce(
                              (total, currentItem) =>
                                (total = total + Number(currentItem.amount)),
                              0
                            )}
                            disabled
                            className="semiSmallInput"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form-control"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="py-6">
              <h1 className="my-4 mx-4">
                <span className="font-bold titleText ">फाईनल रिपोर्ट</span>
              </h1>
              <form action="">
                <div className="overflow-x-auto">
                  <table className="table commonTable">
                    <thead>
                      <tr>
                        <th> क्र. सं.</th>
                        <th>Reason / विवरण</th>
                        <th>रकम</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>अंग्रेजी</td>
                        <td>500</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>बीयर</td>
                        <td>500</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>देशी/RML</td>
                        <td>500</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>कुल बिक्री</td>
                        <td>500</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          पीछे की उधारी में से, ब्रांचों से व अन्य से नकद
                          प्राप्ति
                        </td>
                        <td>500</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>खाते में (फोन पे आदि)</td>
                        <td>500</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>उधारी/नामे</td>
                        <td>500</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>कमीशन/खर्चा/फूट/बेगार/मंथली/पेनल्टी आदि</td>
                        <td>500</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>पिछला बकाया</td>
                        <td>500</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>आज भुगतान</td>
                        <td>500</td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>शेष रकम</td>
                        <td>500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </form>
            </div>

            <div className="py-6">
              <h1 className="my-4 specialwidth">
                <span className="font-bold titleText ">फाईनल रिपोर्ट</span>
              </h1>
              <div>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="फाईनल रिपोर्ट"
                  rows="3"
                  cols="50"
                  name="comment"
                  form="usrform"
                  height="100px"
                  width="100px"
                ></textarea>
              </div>
            </div>
          </div>
          {/* *********************************************************BREAK*********************************************************  */}
          {/* ************ Submit button ***************** */}
          <div className="flex my-6 mx-4">
            {isLoadingSubmit ? (
              <>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 text-[#AA237A] transition duration-150 ease-in-out border-2 border-[#AA237A] rounded-md shadow cursor-not-allowed"
                  disabled=""
                >
                  <svg
                    className="w-5 h-5 mr-3 -ml-1 text-[#AA237A] animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Loading...
                </button>
              </>
            ) : (
              <>
                {/* <button className="dailyReportBtn" onClick={() => handleSubmit()}>
                Submit
              </button> */}
                <input type="submit" className="dailyReportBtn" />
              </>
            )}
          </div>
        </form>
      </section>
    </>
  );
};

export default BackDailyReport;
